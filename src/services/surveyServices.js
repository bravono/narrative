import http from "./httpServices";
import { apiEndpoint, testEndpoint } from "../config.json";
import { session } from "../components/learnmodepages/WelcomePageLM";

export async function getSurvey() {
  const result = session();

  console.log("Result",  result);
  const survey = await http.get(apiEndpoint + result);


  return survey;
}

//dev.nsdbsurveys.com/narrative-php/index.php?survey_id=justDeserts&panel_id=id123&language_id=en_en
//dev.nsdbsurveys.com/narrative-php/index.php?survey_id=justDeserts&panel_id=id123&language_id=en_en
