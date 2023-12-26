import db from "./db";
import Store from "@/models/Store";


//GET ALL STORES
export const getStores = async () => {
    try {
        db.connect()

        const stores = await Store.find({})
        return stores
    } catch (error) {
        throw new Error("Failed to fetch Stores! " + error);

    }
}

//GET INDIVIDUAL STORE
export const getSingleStore = async (id) => {
    try {
        db.connect()

        const store = await Store.findById(id);
        return store
    } catch (error) {
        throw new Error("Failed to fetch Store! " + error);

    }
}