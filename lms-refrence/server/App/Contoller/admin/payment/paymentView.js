const Transaction = require('../../../Modals/transaction');

const viewTransactions = async(req,res)=>{
    try
    {
        const data = await  Transaction.find();
        res.status(201).json({message: 'Data fetched succeccfully', data:data});

    }
    catch(err)
    {
        res.status(500).json({message:"Error in Sending Data"});
    }
};

module.exports = viewTransactions;