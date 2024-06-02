 const express = require("express");
 const student_Act = require("../controllers/students");
 const router = express.Router();

 router.get('/', student_Act.getproducts);
 router.get('/:id', student_Act.getspecproduct);
 router.post('/', student_Act.createproduct);
 router.patch('/:id', student_Act.updateproduct);
 router.delete('/:id', student_Act.deleteproduct);

 module.exports = router;
