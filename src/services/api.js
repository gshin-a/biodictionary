import { xmlToJson } from "../utils/xmlToJson";
import { listURL, oneURL } from "../constants/api";

export async function requestList({ type, searchName, numOfRows, pageNo }) {
  const targetURL = listURL.find((e) => e.type === type).url;

  const response = await fetch(
    `${targetURL}?serviceKey=${process.env.REACT_APP_API_KEY}&st=1&sw=${searchName}&numOfRows=${numOfRows}&pageNo=${pageNo}`
  );

  const resToText = await response.text();

  const data = xmlToJson(
    new DOMParser().parseFromString(resToText, "text/xml")
  );

  return data.response.body;
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
