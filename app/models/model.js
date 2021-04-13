module.exports = (sequelize, Sequelize) => {
    const List = sequelize.define("List", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

return List;
};


//This Sequelize Model represents Lists table in PostgreSQL database. These columns will be generated automatically: id, title, description, published, createdAt, updatedAt.

//After initializing Sequelize, we don’t need to write CRUD functions, Sequelize supports all of them
// ie. create(object), findByPk(id), findAll(), update(data, where: { id: id}), destroy(where: {}), findAll({where: { title: ...}})  *** these are used in our controller
