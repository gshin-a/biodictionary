require("dotenv").config();

let serviceKey = process.env.DB_API_KEY;
let request = require("request");
let convert = require("xml-js");
let options = {
  method: "GET",
  url: `http://apis.data.go.kr/1400119/MammService/mammIlstrSearch?serviceKey=${serviceKey}&st=1&sw=&numOfRows=10000&pageNo=1`,
  headers: {
    "Content-Type": "application/json",
  },
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  let result = response.body;
  const xmlToJson = convert.xml2js(result, { compact: true, spaces: 4 });
  console.log(xmlToJson.response.body.items.item);
});
