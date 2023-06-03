const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true,
        enum: ['completed', 'pending']
    }
}, {
    timestamps: true
})

const Task = new mongoose.model("Task", taskSchema);

module.exports = Task;