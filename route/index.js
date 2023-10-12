// Middlewares:
const renderMW = require('../middleware/renderMW');



// For the DB
const RentalSession = require('../models/rental_session');
const Scooter = require('../models/scooter');
const Station = require('../models/station');
const User = require('../models/user');

// Definition of the objectRepooooo
module.exports = function(app) {
    const objRepo = {
        RentalSession: RentalSession,
        Scooter: Scooter,
        Station: Station,
        User: User
    };

    // Routes:

    app.use('/rollerstation/new',
        saveRollerStationMW(objRepo),
        renderMW(objRepo, 'newrollerstation')
    );

    app.use('/rollerstation/edit/:rollerstationid',
        getRollerStationMW(objRepo),
        saveRollerStationMW(objRepo),
        renderMW(objRepo, 'newrollerstation')
    );

    app.get('/rollerstation/del/:rollerstationid',
        getRollerStationMW(objRepo),
        delRollerStationMW(objRepo)
    );

    app.get('/rollerstation',
        getRollerStationsMW(objRepo),
        renderMW(objRepo, 'rollerstation')
    );


    // Roller:
    app.use('/roller/:rollerstationid/new',
        getRollerStationMW(objRepo),
        saveRollerMW(objRepo),
        renderMW(objRepo, 'newroller')
    );

    app.use('/roller/:rollerstationid/edit/:rollerid',
        getRollerStationMW(objRepo),
        getRollerMW(objRepo),
        saveRollerMW(objRepo),
        renderMW(objRepo, 'newroller')
    );

    app.get('/roller/:rollerstationid/del/:rollerid',
        getRollerStationMW(objRepo),
        getRollerMW(objRepo),
        delRollerMW(objRepo),
        renderMW(objRepo, 'newroller')
    );

    app.get('/roller/:rollerstationid',
        getRollerStationMW(objRepo),
        getRollersMW(objRepo),
        renderMW(objRepo, 'rollerofstation')
    );

};