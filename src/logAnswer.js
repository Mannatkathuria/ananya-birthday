const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSePUDW3lmCEghRNmS5rDu5-_ljiv2eaw5KOaIjFRhFFjIjCJg/formResponse";

export function logAnswer(questionId, questionText, answer) {
  const data = new FormData();

  data.append("entry.1603062507", questionId);
  data.append("entry.1192268080", questionText);
  data.append("entry.1001528321", answer);
  data.append("entry.63616117", new Date().toLocaleString());

  fetch(FORM_URL, {
    method: "POST",
    body: data,
    mode: "no-cors",
  });
}
