import { Router } from "express";
import * as controller from "../controllers/announcement.controller";
import * as middleware from "../middlewares/validation.middleware";

const router = Router();

router.get("/", controller.getAllAnnouncementCtrl);

router.get("/:id", controller.getSingleAnnouncementCtrl);

router.post("/add", middleware.validator, controller.addAnnouncementCtrl);

router.put("/:id", middleware.validator, controller.updateAnnouncementCtrl);

router.delete("/:id", controller.deleteAnnouncementCtrl);

export default router;
