module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        deleted_at: {
            type: dataTypes.DATE
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        price: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        id_category: {
            type: dataTypes.INTEGER,
            foreignKey: true,
        },
        id_brand:{
            type: dataTypes.INTEGER,
            foreignKey: true,
        }
    };

    let config = {
        tableName: 'products',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            as: 'Category',
            foreignKey: 'id_category'
        })
    }
    Product.associate = (models) => {
        Product.belongsTo(models.Brand, {
            as: 'brands',
            foreignKey: 'id_brand'
        })
    }
    
    return Product

};