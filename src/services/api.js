import { xmlToJson } from "../utils/xmlToJson";

const listURL = [
  {
    type: "mamm",
    url: "http://apis.data.go.kr/1400119/MammService/mammIlstrSearch",
  },
  {
    type: "bird",
    url: "http://apis.data.go.kr/1400119/BirdService/birdIlstrSearch",
  },
  {
    type: "fungi",
    url: "/openapi/service/rest/FungiService/fngsIlstrSearch",
  },
  {
    type: "insect",
    url: "/openapi/service/rest/InsectService/isctIlstrSearch",
  },
  {
    type: "plant",
    url: "/openapi/service/rest/PlantService/plntIlstrSearch",
  },
];

const oneURL = [
  {
    type: "mamm",
    url: "http://apis.data.go.kr/1400119/MammService/mammIlstrInfo",
  },
  {
    type: "bird",
    url: "http://apis.data.go.kr/1400119/BirdService/birdIlstrInfo",
  },
  {
    type: "fungi",
    url: "/openapi/service/rest/FungiService/fngsIlstrInfo",
  },
  {
    type: "insect",
    url: "/openapi/service/rest/InsectService/isctIlstrInfo",
  },
  {
    type: "plant",
    url: "/openapi/service/rest/PlantService/plntIlstrInfo",
  },
];

export async function requestList({ type, searchName, numOfRows, pageNo }) {
  const targetURL = listURL.find((e) => e.type === type).url;

  const response = await fetch(
    `${targetURL}?serviceKey=${process.env.REACT_APP_API_KEY}&st=1&sw=${searchName}&numOfRows=${numOfRows}&pageNo=${pageNo}`
  );

  const resToText = await response.text();

  const data = xmlToJson(
    new DOMParser().parseFromString(resToText, "text/xml")
  );

  console.log("data", data);

  return data.response.body.items.item;
}

export async function requestOne({ type, id }) {
  const targetURL = oneURL.find((e) => e.type === type).url;

  const response = await fetch(
    `${targetURL}?serviceKey=${process.env.REACT_APP_API_KEY}&q1=${id}`
  );

  const resToText = await response.text();

  const data = xmlToJson(
    new DOMParser().parseFromString(resToText, "text/xml")
  );

  return data.response.body.item;
}
