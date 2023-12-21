import mongoose, { Schema } from "mongoose";
import { string } from "zod";

const ShoeSchema = new Schema({
    shoeName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    sizes: {
        type: [Number],
        required: true
    },
    colors: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }

)

export const Shoe = mongoose.models.Shoes || mongoose.model('Shoes', ShoeSchema)