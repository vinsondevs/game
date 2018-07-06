const mongoose = require('mongoose');
const schema = mongoose.Schema;

const studentSchema = new schema({
    name:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Students = mongoose.model('student', studentSchema);