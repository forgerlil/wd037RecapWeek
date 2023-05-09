// How this works? It's pretty straightforward! Check the docs ;) https://platform.openai.com/docs/api-reference/chat
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const askAI = async (input) => {
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: input,
      },
    ],
    max_tokens: 100,
  });

  return response.data.choices[0].message.content;
};

module.exports = askAI;
