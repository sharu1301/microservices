"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
const router = express_1.default.Router();
router.get("/", controllers_1.controller.home);
router.get("/articles", controllers_1.controller.getArticles);
router.get("/articles/:id/:sid/:slug", controllers_1.controller.getArticle);
exports.default = router;
