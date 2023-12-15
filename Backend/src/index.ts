import "dotenv/config";
import express from "express";
import http from "http";
import https from "https";
import cors from "cors";
import fs from "fs";

import Router from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

let server: http.Server | https.Server;
const nodeEnv = process.env.NODE_ENV;
const port = process.env.PORT || 3001;

if (nodeEnv === "server") {
  const credentials = {
    key: fs.readFileSync(`${process.env.KEY_PATH}`),
    cert: fs.readFileSync(`${process.env.CERT_PATH}`),
  };
  server = https.createServer(credentials, app);
}
else {
  server = http.createServer(app);

}

app.use("/", Router);

server.listen(port, () => {
  console.log(`Server is running on ${nodeEnv === 'local' ? 'http' : 'https'} port ${port}\n`);
});