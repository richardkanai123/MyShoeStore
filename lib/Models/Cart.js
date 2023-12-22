import mongoose, { Schema } from "mongoose";

const CartItemSchema = new Schema({
    shoeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Shoe'
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
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    })


export const CartItems = mongoose.models.Cart || mongoose.model('Cart', CartItemSchema)
