require('dotenv').config();
const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('./public'));

const port = 3000;

const assistant = new AssistantV1({
  username: '=======',
  password: '====',
  url: '------',
  version: '2018-02-16',
});

app.post('/conversation/', (req, res) => {
  const { text, context = {} } = req.body;

  const params = {
    input: { text },
    workspace_id: '------',
    context,
  };

  assistant.message(params, (err, response) => {
    if (err) res.status(500).json(err);

    res.json(response);
  });
});

app.listen(port, () => console.log(`Servidor rodando na port ${port}`));
