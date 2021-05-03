const controller = require('./group.controller');

module.exports = (app => {
    // custom route
    app.get('/api/group/get_groups_name', controller.getGroupsName) //work;

    app.get('/api/group', controller.getGroups) //work;
    app.get('/api/group/:id', controller.getGroupsById) //work;
    app.put('/api/group', controller.updateGroupe) //work;
    app.post('/api/group', controller.createGroupe) //work;
    app.delete('/api/group/:id', controller.deleteGroupe) //work;
    
})