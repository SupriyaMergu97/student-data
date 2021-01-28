const { mongoose, Schema, model } = require('mongoose');

const studentSchema = new Schema({
    rNo: Number,
    sName: String,
    fName: String,
    class: String,
    gender: String,
    isDeleted: {
        type: Boolean,
        default: false
    }
});
studentSchema.pre("save", async function (next) {
    const doc = await student.find().sort({ rNo: -1 }).limit(1);
    if(doc.length){
        this.rNo = doc[0].rNo + 1;
    } else {
        this.rNo = 100;
    }
    next();
});

const student = model('student', studentSchema);
module.exports = student;