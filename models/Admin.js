import mongoose from 'mongoose';

/* AdminSchema will correspond to a collection in your MongoDB database. */
const AdminSchema = new mongoose.Schema({
  identifier: { type: String, required: true },
  
});

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
