import Router from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";


const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id",authorize, getUser);

userRouter.post("/", );

userRouter.put("/:id", (req, res) => {
  res.send({
    title: "Update user by id",
  });
});

userRouter.delete("/:id", (req, res) => {
  res.send({
    title: "Delete user by id",
  });
});

export default userRouter;
