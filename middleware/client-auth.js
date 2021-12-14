const authApp = require('../init/firebaseinit');

const auth = (req, res, next) => {
    let uid = req.headers.uid;
    let idToken = req.headers.token;
    authApp.auth().verifyIdToken(idToken).then((decodedToken) => {
        const decodedUID = decodedToken.uid;
        if (decodedUID == uid)
            next();
        else
            //user not authenticated
            res.sendStatus(401);
    })
        .catch((error) => {
            console.log('Error inside Auth: ' + error);
            //Request timeout Error code
            res.sendStatus(408);
        });
};

module.exports = auth;