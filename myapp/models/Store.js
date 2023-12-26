import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema({
    name: {type: String},
    showcase: [{type: String}]
}, {timestamps: true})

export default mongoose?.models?.Store || mongoose.model("Store", StoreSchema)

