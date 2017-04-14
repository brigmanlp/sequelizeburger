module.exports = function(sequelize, DataTypes) {
    // table
    var burgers = sequelize.define("burgers", {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        eaten: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    });

    return burgers;
    burgers.sync();
    module.exports = burgers;
};