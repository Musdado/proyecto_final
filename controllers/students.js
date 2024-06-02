const express= require('express');
const mongoose= require('mongoose');

const product= require('../models/productsdata');

const router= express.Router();

const getproducts = async (req, res) => {
    try {
        const student= await product.find();
        
        res.status(200).json(student);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getspecproduct = async (req,res) => {
    const id = req.params._id;
console.log(req);
    try {
        const stud = await product.findOne({id: id});

        res.status(200).json(stud);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

const createproduct =  async (req, res) => {
    
    const newsproduct = new product({
        name:req.body.name,
        roll:req.body.roll,
        registration:req.body.registration,
        subjects:req.body.subjects,
        created_on:req.body.created_on

    })
    try {
        await newsproduct.save();

        res.status(201).json(newsproduct);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const updateproduct = async (req, res) => {
    const id = req.params._id;
    try{
        await product.findOneAndUpdate({
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

const deleteproduct = async (req, res) => {
    

    try {
        const id = await product.findOne({id : req.params._id});
    if(!id){
        return res.status(404).send("User not found!")
      }
        await product.deleteOne({_id: id});
        res.status(203).json({id:id});
        
    }catch(error) {
        res.status(402).json({message: error.message});
    }
    
}


module.exports.getproducts= getproducts;
module.exports.createproduct= createproduct;
module.exports.getspecproduct= getspecproduct;
module.exports.updateproduct= updateproduct;
module.exports.deleteproduct= deleteproduct;