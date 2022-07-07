import express from 'express'
import mongoose from 'mongoose';
import dotenv  from 'dotenv'
import taskRoutes from './routes/task.js'
import userRoutes from './routes/user.js'
import categoryRoutes from './routes/category.js'

import swaggerUI from 'swagger-ui-express'
import swaggerDocument from './swagger1.json' assert {type:'json'};
import  cors from 'cors';
const app=express();
dotenv.config();
app.use(express.json({limit:'30mb',extended:true}));
app.use(express.urlencoded({extended:true,limit:"30mb"}));
app.use(express.text({limit:'30mb'}));
app.use(cors());

// const swaggerOptions={
//     swaggerDefinition: {
//         openapi:'3.0.0',
//         info: {
//             title:'TODO  API',
//             version:'1.0.0',
//             descirption:"A simple tod app API"
//         },
//         servers:[
//             {
//                 url:'http://localhost:2000'
//             }
//         ],
      
//     },
//     apis:["./routes/*.js"],

// }
// const swaggerDocs=swaggerJsDoc(swaggerOptions);
// console.log(swaggerDocs)
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument))
app.get('/',(req,res)=>{
    res.send('Welcome to our app')
})

app.use('/tasks',taskRoutes);
app.use('/categories',categoryRoutes);
app.use('/users',userRoutes);
const PORT= process.env.PORT || 2000

mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>app.listen(PORT,console.log(`Server running on port :${PORT}`)))

.catch(err=>console.log('Failed to connect to mongodb',err.message));