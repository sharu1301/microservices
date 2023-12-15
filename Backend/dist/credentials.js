"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentials = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let keyPath, certPath;
if (process.env.NODE_ENV === "dev") {
    keyPath = process.env.REMOTE_KEY_PATH;
    certPath = process.env.REMOTE_CERT_PATH;
}
else {
    keyPath = path_1.default.join(__dirname, `..${process.env.LOCAL_KEY_PATH}`);
    certPath = path_1.default.join(__dirname, `..${process.env.LOCAL_CERT_PATH}`);
}
exports.credentials = {
    key: fs_1.default.readFileSync(`${keyPath}`),
    cert: fs_1.default.readFileSync(`${certPath}`),
};
