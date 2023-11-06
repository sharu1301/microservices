export function getClientBaseURL() {
  if (process.env.REACT_APP_MODE === "dev") return "http://localhost:3002";
  if (process.env.REACT_APP_MODE === "prod")
    return "https://dev.insigniaconsultancy.com";
}

export function getServerBaseURL() {
  if (process.env.REACT_APP_MODE === "dev") return "https://localhost:3001";
  if (process.env.REACT_APP_MODE === "prod")
    return `https://cert.insigniaconsultancy.com:${process.env.REACT_APP_PORT}`;
}
