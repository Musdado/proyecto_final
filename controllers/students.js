const express= require('express');
const mongoose= require('mongoose');

const Student= require('../models/studentsdata');

const router= express.Router();

const getStudents = async (req, res) => {
    try {
        const student= await Student.find();
        
        res.status(200).json(student);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getspecStudent = async (req,res) => {
    const id = req.params._id;
console.log(req);
    try {
        const stud = await Student.findOne({id: id});

        res.status(200).json(stud);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

const createstudent =  async (req, res) => {
    
    const newstudent = new Student({
        name:req.body.name,
        roll:req.body.roll,
        registration:req.body.registration,
        subjects:req.body.subjects,
        created_on:req.body.created_on

    })
    try {
        await newstudent.save();

        res.status(201).json(newstudent);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const updatestudent = async (req, res) => {
    const id = req.params._id;
    try{
        await Student.findOneAndUpdate({
            id: id,
        },
        {   
            name:req.body.name,
            registration:req.body.registration,
            subjects:req.body.subjects,
            created_on:req.body.created_on
        }
        )
        res.status(202).json({id: id});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
    
}

const deletestudent = async (req, res) => {
    

    try {
        const id = await Student.findOne({id : req.params._id});
    if(!id){
        return res.status(404).send("User not found!")
      }
        await Student.deleteOne({_id: id});
        res.status(203).json({id:id});
        
    }catch(error) {
        res.status(402).json({message: error.message});
    }
    
}


module.exports.getStudents= getStudents;
module.exports.createstudent= createstudent;
module.exports.getspecStudent= getspecStudent;
module.exports.updatestudent= updatestudent;
module.exports.deletestudent= deletestudent;