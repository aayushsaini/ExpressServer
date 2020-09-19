const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/pain');
    next();
})

.get((req, res, next) => {
    res.end('Will Send All Leaders To You!');
})

.post((req, res, next) => {
    res.end('Will add leader: ' + req.body.name + ' with details: ' + req.body.description);
})

.put((req, res, next) => {
    res.write('ERROR!!\n');
    res.end('Operation not supported on End-Point: /leaders');
})

.delete((req, res, next) => {

    res.end('Will Delete all the leaders');
});

leaderRouter.route('/:leaderId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})

.get((req, res, next) => {
    res.end('Will send details of leader: ' + req.params.leaderId + ' to you!');
})

.post((req, res, next) => {
    res.end('POST operation not supported on /leaders/'+req.params.leaderId);
})

.put((req, res, next) => {
    res.write('Updating leader with id: ' + req.params.leaderId);
    res.end('\nWill update the leader of name: '+req.body.name + ' & Description: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting leader with id: ' + req.params.leaderId);
});

module.exports = leaderRouter;