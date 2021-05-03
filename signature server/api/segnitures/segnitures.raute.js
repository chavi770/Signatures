const controller = require('./segnitures.controller');

module.exports = (app => {
    app.get('/api/sing', controller.getSegnitures) //work;
    app.get('/api/sing/:id', controller.getSingById) //work;
    app.put('/api/sing', controller.updateSing) //work;
    app.post('/api/sing', controller.createSing) //work;
    app.delete('/api/sing/:id', controller.deleteSing) //work;
})