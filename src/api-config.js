let url1;
let url2;
let host;

const hostname = window && window.location && window.location.hostname;
if (hostname === "localhost") {
  url1 = "http://localhost:8080";
}
  url2 = "http://http://192.168.0.185:8080"

  host = url2;

export default API_BASE_URL=`${host}`