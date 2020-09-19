const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/pain');
    next();
})

.get((req, res, next) => {
    res.end('Will Send All Promotions To You!');
})

.post((req, res, next) => {
    res.end('Will add promotion: ' + req.body.name + ' with details: ' + req.body.description);
})

.put((req, res, next) => {
    res.write('ERROR!!\n');
    res.end('Operation not supported on End-Point: /promotions');
})

.delete((req, res, next) => {

    res.end('Will Delete all the promotions');
});

promoRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req, res, next) => {
    res.end('Will send details of promo: ' + req.params.promoId + ' to you!');
})

.post((req, res, next) => {
    res.end('POST operation not supported on /promotions/'+req.params.promoId);
})

.put((req, res, next) => {
    res.write('Updating promotion with id: ' + req.params.promoId);
    res.end('\nWill update the promotion of name: '+req.body.name + ' & Description: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting promotion with id: ' + req.params.promoId);
});

module.exports = promoRouter;