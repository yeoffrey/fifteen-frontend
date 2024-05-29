import { FifteenRequest, FifteenResponse } from "./types";

const URL =
  "https://northamerica-northeast2-urbanwiki-prod.cloudfunctions.net/fifteen-api";

export async function handleFifteenRequest(
  request: FifteenRequest,
): Promise<FifteenResponse> {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(request),
  });

  return response.json();
}
