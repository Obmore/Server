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
    // Station:

    app.use('/rollerstation/new',
        authMW(objRepo),
        saveRollerStationMW(objRepo),
        renderMW(objRepo, 'newrollerstation')
    );

    app.use('/rollerstation/edit/:rollerstationid',
        authMW(objRepo),
        getRollerStationMW(objRepo),
        saveRollerStationMW(objRepo),
        renderMW(objRepo, 'newrollerstation')
    );

    app.get('/rollerstation/del/:rollerstationid',
        authMW(objRepo),
        getRollerStationMW(objRepo),
        delRollerStationMW(objRepo)
    );

    app.get('/rollerstation',
        authMW(objRepo),
        getRollerStationsMW(objRepo),
        renderMW(objRepo, 'rollerstation')
    );


    // Roller:
    app.use('/roller/:rollerstationid/new',
        authMW(objRepo),
        getRollerStationMW(objRepo),
        saveRollerMW(objRepo),
        renderMW(objRepo, 'newroller')
    );

    app.use('/roller/:rollerstationid/edit/:rollerid',
        authMW(objRepo),
        getRollerStationMW(objRepo),
        getRollerMW(objRepo),
        saveRollerMW(objRepo),
        renderMW(objRepo, 'newroller')
    );

    app.get('/roller/:rollerstationid/del/:rollerid',
        authMW(objRepo),
        getRollerStationMW(objRepo),
        getRollerMW(objRepo),
        delRollerMW(objRepo),
        renderMW(objRepo, 'newroller')
    );

    app.get('/roller/:rollerstationid',
        authMW(objRepo),
        getRollerStationMW(objRepo),
        getRollersMW(objRepo),
        renderMW(objRepo, 'rollerofstation')
    );

    // General:
    app.use('/logout', 
        logoutMW(objRepo)
    );

    app.use('/',
        checkPassMW(objRepo), 
        renderMW(objRepo, 'login')
    );
};