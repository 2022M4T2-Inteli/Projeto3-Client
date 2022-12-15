import mongoose from 'mongoose';

/* DeviceSchema will correspond to a collection in your MongoDB database. */
const DeviceSchema = new mongoose.Schema({
    identifier: { type: String, required: true },
    deviceName: { type: String, required: true },
    lastUpdate: { type: Date, default: Date.now },
    from: {
        type: String,
        required: true,
    },
    positions: [
        {
            place: { type: String },
            time: { type: Date },
        },
    ],
    price: { type: Number, required: true },
    borrowed: {
        id: { type: String, default: '' },
        name: { type: String, default: '' },
        since: { type: Date, default: '' },
        until: { type: Date, default: '' },
        isStudent: { type: Boolean, default: false },
        isEmployee: { type: Boolean, default: false },
        canTakeHome: { type: Boolean, default: false },
        returned: { type: Boolean, default: false },
        returnDate: { type: Date, default: '' },
    },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Device || mongoose.model('Device', DeviceSchema);
