const Product = require("../models/product");
const fs = require('fs');

const createProduct = async(req, res)=>{
    try{
        const data = req.body;

        if(req.files.thumbnail) data.thumbnail = req.files.thumbnail[0].filename;
        if(req.files.images) data.images = req.files.images.map((img)=> img.filename);

        const dataToSave = new Product(data);
        const response = await dataToSave.save();


        res.status(200).json({message:'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: error.message})
    }
};

const readProducts = async (req, res) => {
    try{
        const products = await Product.find();
        const filepath = `${req.protocol}://${req.get('host')}/product-files/`
        res.status(200).json({message: 'success', data: products, filepath});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

const updateProduct =async (req, res) =>{
    try{
        const ifProduct = await Product.findOne(req.params);
        if(!ifProduct) return res.status(404).json({message: 'product not found'});
        const data = req.body;

        if(req.files.thumbnail) {
            data.thumbnail = req.files.thumbnail[0].filename;
            const filepath = `./src/files/$(ifProduct.thumbnail)`;

            if(fs.existsSync(filepath)) fs.unlinkSync(filepath);
        }

        if(req.files.images){
            data.images = req.files.images.map((img)=> img.filename);
            ifProduct.images.map((img)=>{
                const filepath = `./src/files/$(img)`;
                if(fs.existsSync(filepath)) fs.unlinkSync(filepath);
            })
        }

        const response = await Product.updateOne(
            req.params,
            { $set: data }
        );

        res.status(200).json({message:'success', data: response});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

module.exports = {createProduct, readProducts, updateProduct}