const express = require('express');
const app = express();
const mongoose = require('./mongoose');
const groupRoute = require('../api/groupes/groupe.raute');
const singRoute = require('../api/segnitures/segnitures.raute');

const bodyParser = require('body-parser');

function initMedelWhere() {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json());
};

function initServer() {
    initMedelWhere();
    mongoose.initDb();
    initRout();
    app.listen(3000);
};

function initRout() {
    groupRoute(app);
    singRoute(app);
};

module.exports = {
    initServer
};