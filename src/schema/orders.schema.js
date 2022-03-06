import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema (
//     {
//         id: String,
//         value: Number,
//         name: String
//     }
// )
const orderSchema = new mongoose.Schema(
    {
        date: String,
        total_value: Number,
        oportunity:[{
            id: String,
            value: Number,
            name: String
            // type: Array,
            // of: userSchema
        }]
    }
)

export default mongoose.model("Order", orderSchema)