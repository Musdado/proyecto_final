 const express = require("express");
 const student_Act = require("../controllers/students");
 const router = express.Router();

 router.get('/', student_Act.getStudents);
 //router.get('/:id', student_Act.getSpecStudent);
 //router.post('/', student_Act.createStudent);
 //router.patch('/:id', student_Act.updateStudent);
 //router.delete('/:id', student_Act.deleteStudent);

 module.exports = router;
