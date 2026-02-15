import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();

const controller = new AuthController();

router.post(
  "/register",
  controller.register
);

router.post(
  "/login",
  controller.login
);
router.get("/:id", controller.getUser);

router.put("/:id", controller.updateUser);

router.delete("/:id", controller.deleteUser);

export default router;
