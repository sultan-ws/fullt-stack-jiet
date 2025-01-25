const mongoose = require('mongoose');

mongoose.connect(process.env.Con_String)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.error('Error: ', err.message));