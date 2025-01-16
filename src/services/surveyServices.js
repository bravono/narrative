import http from "./httpServices";
import { apiEndpoint, testEndpoint, remoteTestEndpoint } from "../config.json";

export async function getSurvey(session) {
  const survey = await http.get(remoteTestEndpoint);
  return survey;
}

export async function getNextBlank(formData) {
  console.log("Form Data:", formData)
  const nextBlank = await http.post(remoteTestEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  return nextBlank.data
}
