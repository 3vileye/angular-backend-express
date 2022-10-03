import express from 'express';
import {readdirSync} from "fs";
import cors from 'cors';
const mongoose = require('mongoose');
const morgan = require("morgan");
require('dotenv').config();
const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/learn-db',{
	useNewUrlParser:true,
	useFindAndModify:false,
	useUnifiedTopology:true,
	useCreateIndex:true
})
.then(() => console.log('connected to db'))
.catch((err) => console.log('error',err));
// console.log(readdirSync('./routes'));
readdirSync('./routes').map((r) =>
 app.use('/api', require(`./routes/${r}`))
 );
const port = process.env.PORT || 8000;

app.listen(port,() => console.log(`server runing on port ${port}`));