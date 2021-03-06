module.exports = function (sequelize, DataTypes) {
    const product = sequelize.define('Product', {
        name : {
            type: DataTypes.STRING(20),
            allowNull : false 
        },
        price : {
                type : DataTypes.INTEGER(10),
                allowNull : false
        },
        imageUrl : {
            type: DataTypes.STRING(500),
        },
        seller : {
            type: DataTypes.STRING(200),
            allowNull : false
        },
				
    });
    return product;
}