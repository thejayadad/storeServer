'use server'
import db from "./db";
import Store from "@/models/Store";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import getServerUser from "./getServerUser";

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
    revalidatePath(`/admin/`);
    redirect(`/admin/`)
}