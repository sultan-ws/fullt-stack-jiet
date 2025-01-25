let express=require("express");
var cors = require('cors');
const webRoutes = require("./App/routers");
let app=express();
app.use("/uploads/course",express.static('uploads/course'));

app.use(cors())

app.use(express.json())
app.use(webRoutes)

app.listen("8000", ()=>{
    console.log(`Server is running on port 8000`);
});