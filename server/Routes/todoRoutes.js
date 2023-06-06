const express =require('express');
const {addTodo,findTodo,editTodo,deleteTodo}=require('../Controllers/controllers.js');
const router=express.Router();



router.get("/find",findTodo);
router.post("/add",addTodo);
router.post("/delete",deleteTodo);
router.post("/edit",editTodo);

module.exports=router;