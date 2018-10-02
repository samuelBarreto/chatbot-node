const textInput = document.getElementById('textInput');
const chat = document.getElementById('chat');

let context = {};

const templateChatMessage = (message, from) => `
  <div class="from-${from}">
    <div class="message-inner">
      <p>${message}</p>
    </div>
  </div>
  `;

// Crate um elemento e acrescentar ao chat
const InsertTemplateInTheChat = (template) => {
  const div = document.createElement('div');
  div.innerHTML = template;

  chat.appendChild(div);
};

// Calling server and get the watson output
//Chamando o servidor e obtenha a saída do watson
const getWatsonMessageAndInsertTemplate = async (text = '') => {
  const uri = 'http://localhost:3000/conversation/';

  const response = await (await fetch(uri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text,
      context,
    }),
  })).json();

  context = response.context;

  const template = templateChatMessage(response.output.text, 'watson');

  InsertTemplateInTheChat(template);
};

textInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13 && textInput.value) {
    //Envie a mensagem do usuário
    getWatsonMessageAndInsertTemplate(textInput.value);

    const template = templateChatMessage(textInput.value, 'user');
    InsertTemplateInTheChat(template);

    // Limpar caixa de entrada para mensagens adicionais
    textInput.value = '';
  }
});


getWatsonMessageAndInsertTemplate();
