import mongoose from "mongoose";

const ItemSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true,"Please enter item name"]
    },

    quantity: {
        type: Number,
        required: true,
        default: 0
    },

    price: {
        type: Number,
        requried: true,
        default: 0
    },

});

const Item = mongoose.model("Item",ItemSchema);

export default Item;