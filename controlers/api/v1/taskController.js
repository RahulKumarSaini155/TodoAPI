const Task = require('../../../models/task');

// task is created
module.exports.create = async (req, res) => {
    try{
        const task = await Task.create(req.body);
        if(task){
            return res.status(200).json({
                success: true,
                message: "Task created successfully",
                task: task
            })
        }

        return res.status(404).json({
            success: false,
            message: "task not created"
        })

    }catch(err){
        console.log('error in create task', err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

// task is updated
module.exports.update = async (req, res) => {
    try{
        const task = await Task.findOne({"_id": req.params.id});
        if(task){
            task.status = req.body.status;
            task.save();
            return res.status(200).json({
                success: true,
                message: "Task updated successfully",
                task: task
            })
        }

        return res.status(404).json({
            success: false,
            message: "task not found"
        })

    }catch(err){
        console.log('error in update task', err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

// get task info
module.exports.task = async (req, res) => {
    try{
        const task = await Task.findOne({"_id": req.params.id});
        if(task){
            return res.status(200).json({
                success: true,
                message: "Task get successfully",
                task: task
            })
        }

        return res.status(404).json({
            success: false,
            message: "task not found"
        })

    }catch(err){
        console.log('error in getting task', err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

// task is deleted
module.exports.delete = async (req, res) => {
    console.log("hello delete");
    try{
        const task = await Task.findOne({"_id": req.params.id});
        if(task){
           await Task.deleteOne({"_id": req.params.id});
            return res.status(200).json({
                success: true,
                message: "Task deleted successfully"
            })
        }

        return res.status(404).json({
            success: false,
            message: "task not found"
        })

    }catch(err){
        console.log('error in delete task', err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}