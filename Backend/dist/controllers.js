"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const axios_1 = __importDefault(require("axios"));

const storipressBaseURL = process.env.STORIPRESS_BASE_URL;
const storipressAuthToken = process.env.STORIPRESS_AUTH_TOKEN;

const queries_1 = require("./queries");
exports.controller = {
    home: (req, res) => {
        res.send("Welcome to Hinds Machine !");
    },
    getArticles: async (req, res) => {
        let first = parseInt(req.query.limit, 10);
        let page = parseInt(req.query.page, 10);
        if (isNaN(first) || isNaN(page)) {
            res.status(400).send("Invalid limit or page value");
            return;
        }
        let variables = {
            published: true,
            sortBy: [{ column: "PUBLISHED_AT", order: "DESC" }],
            first,
            page,
        };
        try {
            const response = await axios_1.default.post(storipressBaseURL, { query: queries_1.GET_ARTICLES_QUERY, variables }, {
                headers: {
                    Authorization: `Bearer ${storipressAuthToken}`,
                },
            });
            res.json(response.data);
        }
        catch (error) {
            console.error("Error fetching articles:", error);
            res.status(500).send("Internal server error");
        }
    },
    getArticle: async (req, res) => {
        let articleId = req.params.id;
        let sid = req.params.sid;
        let slug = req.params.slug;
        let variables = {
            id: articleId,
            sid: sid,
            slug: slug,
        };
        try {
            const response = await axios_1.default.post(storipressBaseURL, { query: queries_1.GET_ARTICLE_QUERY, variables }, {
                headers: {
                    Authorization: `Bearer ${storipressAuthToken}`,
                },
            });
            res.json(response.data);
        }
        catch (error) {
            console.error("Error fetching article:", error);
            res.status(500).send("Internal server error");
        }
    },
};
