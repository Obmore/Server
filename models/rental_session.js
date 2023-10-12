const db = require('../config/db');

const RentalSessionSchema = db.Schema({
    status: { type: String, enum: ['ABORTED', 'ACTIVE', 'ERROR', 'FINISHED', 'PENDING'] },
    start: { type: Date, default: Date.now },
    end: { type: Date, default: null },
    scooter_id: { type: db.Schema.Types.ObjectId, ref: 'Scooter' },
    user_id: { type: db.Schema.Types.ObjectId, ref: 'User' }
});

const RentalSession = db.model('RentalSession', RentalSessionSchema);
module.exports = RentalSession;
