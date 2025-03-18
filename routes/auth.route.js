import { Router } from "express";
import { LogIn, LogOut, signUp } from "../controllers/auth.controller.js";

const AuthRouter = Router();

//path:/api/v1/auth/signup

AuthRouter.post("/signup",signUp);

//path:/api/v1/auth/login
AuthRouter.post("/login",LogIn);


//path:/api/v1/auth/logout
AuthRouter.post("/logout", LogOut);

export default AuthRouter;