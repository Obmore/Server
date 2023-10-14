const db = require('../config/db');

const RentalSessionSchema = db.Schema({
    status: { 
        type: String, 
        enum: ['PENDING','FINISHED','ACTIVE','ABORTED','ERROR'],
        required: true,
        default: 'PENDING'
    },
    start: { 
        type: Date, 
        default: Date.now,
        required: true
    },
    end: { 
        type: Date, 
        default: null 
    },
    scooter_id: { 
        type: db.Schema.Types.ObjectId, 
        ref: 'Scooter',
        required: true
    },
    user_id: { 
        type: db.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    }
});

const RentalSession = db.model('RentalSession', RentalSessionSchema);
module.exports = RentalSession;
