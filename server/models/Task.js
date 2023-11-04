import mongoose from "mongoose";

const TaskSchema=mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enums: ['Low' , 'Moderate' , 'High' , 'Urgent'],
        default: 'Moderate'
    },
    status: {
        type: String,
        enums: ['Pending' , 'Completed'],
        default: 'Pending'
    },name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model('Task', TaskSchema);