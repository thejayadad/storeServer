'use server'
import db from "./db";
import Store from "@/models/Store";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import getServerUser from "./getServerUser";
import Showcase from "@/models/Showcase";
import mongoose from "mongoose";
import  Types  from "mongoose";

//ADD SHOWCASE

export const createShowcase = async (formData) => {
    const { name, label, imageUrl, storeId } = Object.fromEntries(formData);

    try {
        db.connect();

        // Create a new showcase
        const newShowcase = new Showcase({
            name,
            label,
            imageUrl,
            storeId 
        });

        // Save the new showcase
        await newShowcase.save();

        // const updatedStore = await Store.findOne(
        //     mongoose.Types.ObjectId(storeId),
        //     { $push: { showcase: newShowcase._id } },
        //     { new: true }
        // );

        // return { newShowcase, updatedStore };
    } catch (error) {
        throw new Error('Failed to Create Showcase ' + error);
    }
};



//ADD STORE
export const createStore = async (formData) => {
    const user = getServerUser()
    const { name} = 
    Object.fromEntries(formData)
    if(!user){
        return <p className="text-center">Oooopppsss.... Head Back To Our ShowCase</p>
    }
    try {
        db.connect()
        const newStore = new Store({
            name,
     
        })
        await newStore.save()
        return newStore
    } catch (error) {
        throw new Error("Failed to Create Store " + error);
    }
    revalidatePath("/admin");
    redirect("/admin");

}

//UPDATE STORE
export const updateStore = async (formData) => {
    const { id,name} = 
    Object.fromEntries(formData)
    try {
        db.connect()
        const updateFields = {
            name,
    
        }
        Object.keys(updateFields).forEach(
            (key) =>
              (updateFields[key] === "" || undefined) && delete updateFields[key]
          );
      
          await Store.findByIdAndUpdate(id, updateFields);
    } catch (error) {
        throw new Error("Failed to update Store! " + error);
    }
    revalidatePath("/admin");
    redirect("/admin");

}
//DELETE STORE
export const deleteStore = async (formData) => {
    const { id } = Object.fromEntries(formData);
    console.log("Delete Id " + id)
    try {
        db.connect()
        await Store.findByIdAndDelete(id)
    } catch (error) {
        throw new Error("Failed to delete Store! " + error);
    }
    revalidatePath("/admin");

}