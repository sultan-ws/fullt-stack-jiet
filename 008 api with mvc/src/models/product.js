const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        description:String,
        status:{
            type:Boolean,
            default:true
        },
        inStock:{
            type:Boolean,
            default:true
        },
        thumbnail:String,
        images:[String]
    },
    {
        timestamps:true
    }
);

const Product = mongoose.model('products', productSchema);

module.exports = Product;