let express=require("express");
const courseRoutes = require("./routes/admin/CourseRoutes");
const paymentRoute = require("./routes/payment/payment");
let webRoutes=express.Router();

webRoutes.use("/course",courseRoutes);

webRoutes.use('/payment', paymentRoute);

module.exports=webRoutes;