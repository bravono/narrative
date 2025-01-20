import http from "./httpServices";
import { apiEndpoint, localEndpoint, remoteEndpoint } from "../config.json";
import { apiEndpoint, localEndpoint, remoteEndpoint } from "../config.json";

export async function getSurvey(session) {
  const survey = await http.get(remoteEndpoint);
  return survey;
}

export async function getNextBlank(formData) {
  const nextBlank = await http.post(remoteEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  return nextBlank.data
}
