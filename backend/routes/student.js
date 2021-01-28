const express = require('express');
const router = express.Router();
const { Student } = require('../models');
// const { student } = require('../models/student');

router.post('/', async function (req, res) {
    try {
        const data = await Student.create(req.body);
        res.json(data);
    } catch (error) {
        res.status(400).json({ error, message: 'something ' });
    }
});

router.put('/', async function (req, res) {
    const result = await Student.findOneAndUpdate({ rNo: req.body.rNo }, { $set: { ...req.body } },
         { new: true });
    res.json(result);
});



router.get('/', async function (req, res) {
    try {
        const data = await Student.find({ isDeleted: false });
        if (data) {
            res.json(data);
            // Student.student.deleteOne()

        } else {
            res.json('student not found')
        }
    } catch (error) {
        res.status(400).json({ error, message: 'something ' });
    }
})

// router.put('/', async function (req, res) {
//     const data= await Student.find
// })
module.exports = router;