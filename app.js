import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.route.js";
import subscriptionRouter from "./routes/suscription.route.js";
import AuthRouter from "./routes/auth.route.js";
import connectdb from "./database/mongodb.js";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middleware/error.middleware.js";
import arcjetMiddleware from "./middleware/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.route.js";


const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

app.use('/api/v1/auth',AuthRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);
app.use('/api/v1/workflows',workflowRouter);

app.use(errorMiddleware);

app.get('/',(req,res)=>{
    res.send("welcome to suscription tracker API !");
});


app.listen(PORT,async()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
    await connectdb();
    
});

export default app;