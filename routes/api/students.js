const express = require('express');
const router = express.Router();

const StudentsModel = require('../../models/Students');

/* @route GET student
    @des get the students list
    @access public
*/
router.get('/', (req, res)=>{
    StudentsModel.find()
    .sort({ date: -1 })
    .then(student => res.json(student));
});

/*
    @route @POST
    @desc Add student name
    @access public
*/
    router.post('/', (req, res)=>{
        const newStudent = new StudentsModel({
            name: req.body.name
        });
        newStudent.save().then(student => res.json(student)).catch(err=>res.send('There is an error'+ err))
    });

module.exports = router;