import { Request, Response } from "express";
import axios from "axios";


const storipressBaseURL = process.env.STORIPRESS_BASE_URL;
const storipressAuthToken = process.env.STORIPRESS_AUTH_TOKEN;

import { GET_ARTICLES_QUERY, GET_ARTICLE_QUERY } from "./queries";

console.log('storipressBaseURL', storipressBaseURL)
console.log('storipressAuthToken', storipressAuthToken)
export const controller = {

  home: (req: Request, res: Response) => {
    res.send("Welcome to Hinds Machine!");
  },
  getArticles: async (req: Request, res: Response) => {
    let first = parseInt(req.query.limit as string, 10);
    let page = parseInt(req.query.page as string, 10);

    if (isNaN(first) || isNaN(page)) {
      res.status(400).send("Invalid limit or page value");
      return;
    }

    let variables = {
      published: true,
      sortBy: [{ column: "PUBLISHED_AT", order: "DESC" }],
      first,
      page,
      desk:5
    };

    try {
      const response = await axios.post(
        storipressBaseURL as string,
        { query: GET_ARTICLES_QUERY, variables },
        {
          headers: {
            Authorization: `Bearer ${storipressAuthToken}`,
          },
        }
      );

      res.json(response.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
      res.status(500).send("Internal server error");
    }
  },
  getArticle: async (req: Request, res: Response) => {
    let articleId = req.params.id;
    let sid = req.params.sid;
    let slug = req.params.slug;

    let variables = {
      id: articleId,
      sid: sid,
      slug: slug,
    };

    try {
      const response = await axios.post(
        storipressBaseURL as string,
        { query: GET_ARTICLE_QUERY, variables },
        {
          headers: {
            Authorization: `Bearer ${storipressAuthToken}`,
          },
        }
      );

      res.json(response.data);
    } catch (error) {
      console.error("Error fetching article:", error);
      res.status(500).send("Internal server error");
    }
  },
};
