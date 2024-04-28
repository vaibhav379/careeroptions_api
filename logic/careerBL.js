const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GEMINI_API_KEY } = require("../config/config");

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const getPromptResponse = async (body) => {
  let { prompt } = { ...body };
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
};

module.exports = {
  getPromptResponse: getPromptResponse,
};
