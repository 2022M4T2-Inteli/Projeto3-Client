import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cpf: { type: String, required: true, unique: true },
    role: { type: String, required: true },
});

export default mongoose.models.Employee ||
    mongoose.model('Employee', EmployeeSchema);
