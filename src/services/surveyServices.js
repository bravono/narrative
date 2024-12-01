import http from "./httpServices";
import { apiEndpoint, testEndpoint } from "../config.json";

export async function getSurvey(session) {
  const survey = await http.get(apiEndpoint + session);


  return survey;
}



