export function getServerBaseURL() {
    if (process.env.REACT_APP_MODE === "local") return "http://localhost:3002";
    else return `https://api.insigniaconsultancy.com:3002`;
}
