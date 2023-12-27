import { Shoe } from "./Shoe";
import mongoose, { Schema } from "mongoose";

const CartItemSchema = new Schema({
    shoeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: Shoe,
    },
    userId: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    color: {
        type: String,
        required: false,
    },
    size: {
        type: String,
        required: false,
    },
},
    {
        timestamps: true,
    })


export const CartItems = mongoose.models.CartItemsCollection || mongoose.model('CartItemsCollection', CartItemSchema)
