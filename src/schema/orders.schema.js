import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        date: String,
        total_value: Number,
        oportunity:[]
    }
)

export default mongoose.model("Order", orderSchema)