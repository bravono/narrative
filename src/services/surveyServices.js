import http from "./httpServices";
import { apiEndpoint, testEndpoint, remoteTestEndpoint } from "../config.json";

export async function getSurvey(session) {
  const survey = await http.get(remoteTestEndpoint);
  return survey;
}

export async function getNextBlank() {
  const nextBlank = await http.post(remoteTestEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  return nextBlank.data
}

const formData = [{ name: "a[1][8][1][1][1][v]", text: "Dinner", value: 1 }];
