import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hobbies: {
        type: [String],
        required: true
    }
});

const DataSchema = mongoose.model("Data", dataSchema);
export default DataSchema;

