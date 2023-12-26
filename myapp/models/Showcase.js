import mongoose from "mongoose";

const ShowcaseSchema = new mongoose.Schema({
    name: {type: String},
    storeId: String,
    label: String,
    imageUrl: String,
}, {timestamps: true})

export default mongoose?.models?.Showcase || mongoose.model("Showcase", ShowcaseSchema)

