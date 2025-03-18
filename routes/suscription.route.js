import { Router} from "express";
import authorize from "../middleware/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const suscriptionRouter = Router();

suscriptionRouter.get("/",(req,res)=>{
    res.send({title:"suscription"});
});

suscriptionRouter.get("/:id",(req,res)=>{
    res.send({title:"suscription"});
});
 

suscriptionRouter.post("/",authorize,createSubscription);

suscriptionRouter.put("/:id",(req,res)=>{
    res.send({title:" update suscription"});
}); 

suscriptionRouter.delete("/:id",(req,res)=>{    
    res.send({title:" delete suscription"});    
});
suscriptionRouter.patch("/user/:id",authorize,getUserSubscriptions);

suscriptionRouter.put("/:id/cancel",(req,res)=>{
    res.send({title:" cancel suscription"});    
});

suscriptionRouter.get("upcoming-renewals",(req,res)=>{    
    res.send({title:" get all user suscription"});    
});



export default suscriptionRouter;