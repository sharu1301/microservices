import express from "express";
import { controller } from "./controllers";

const router = express.Router();

router.get("/", controller.home);
router.get("/articles", controller.getArticles);
router.get("/articles/:id/:sid/:slug", controller.getArticle);

export default router;
