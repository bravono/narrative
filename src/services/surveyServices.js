import http from "./httpServices";
import { apiEndpoint, testEndpoint, remoteTestEndpoint } from "../config.json";

export async function getSurvey(session) {
  const survey = await http.get(remoteTestEndpoint);


  return survey;
}



