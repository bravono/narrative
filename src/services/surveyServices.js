import http from "./httpServices";
import { apiEndpoint, testEndpoint } from "../config.json";

export async function getSurvey() {
  const survey = await http.get(apiEndpoint);

  return survey;
}
