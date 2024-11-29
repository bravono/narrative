import http from "./httpServices";
import { apiEndpoint, testEndpoint } from "../config.json";
import { session } from "../components/learnmodepages/WelcomePageLM";

export async function getSurvey() {
  const result = session();

  console.log("Result",  apiEndpoint + result);
  const survey = await http.get(apiEndpoint + result);


  return survey;
}

