"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const nodeEnv = process.env.NODE_ENV;
let server;
if (nodeEnv === "dev") {
    const credentials = {
        key: fs_1.default.readFileSync(`${process.env.KEY_PATH}`),
        cert: fs_1.default.readFileSync(`${process.env.CERT_PATH}`),
    };
    server = https_1.default.createServer(credentials, app);
}
else {
    server = http_1.default.createServer(app);
}
const port = process.env.PORT || 3003;
app.use("/", routes_1.default);
server.listen(port, () => {
    console.log(`\nserver is running on ${nodeEnv === "dev" ? "https" : "http"} port ${port}\n`);
});
