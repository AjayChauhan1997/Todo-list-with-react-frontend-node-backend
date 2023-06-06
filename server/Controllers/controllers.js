const todo = require('../dbsModel/dbsmodel.js');


const findTodo = async (req, res) => {
    try {
        const allTodo = await todo.find();
        res.status(200).json(allTodo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}



const addTodo = async (req, res) => {

    const newtodo = req.body;
    const addNewTodo = new todo(newtodo);

    try {
        await addNewTodo.save();
        console.log("Todo successfully saved $" + newtodo.todo);
        res.status(201).json(newtodo);
    } catch (error) {
        console.log(error);
        res.status(406).json({ message: error.message });
    }
}

const deleteTodo = async (req, res) => {
  
        const todotodel = await todo.find({ _id: req.body.deltodo });
        todo.findByIdAndRemove(req.body.deltodo)
            .then(() => {
                res.status(200).json({ msg: "del" });
                console.log("Todo successfully deleted  $" + todotodel[0].todo);
            })
            .catch(error => {
                console.log(`Error deleting user by ID: ${error}`);
                res.status(200).json({ msg: " not del" });
            });
        //  console.log(todotodel[0].todo);
    
}

const editTodo = async (req, res) => {
    const id = req.body.id  ;
    const updatedTodo =req.body.todo;
    try {
        await todo.findByIdAndUpdate(id, {todo:updatedTodo}).then(()=>{
        res.status(200).json({message : "Successfully Updated"});
        console.log("Successfully Updated!"+updatedTodo);
        });
    }catch(err){
        console.log(err.message);
     res.status(406).json({message : err.message});
    }

}





module.exports = { findTodo, addTodo, editTodo, deleteTodo };