const MessageStore = require('./message_store.js');

let Sent = {};

Sent.render = function(){
  let node = document.createElement('ul');
  let allMessages = MessageStore.getSentMessages();
  node.className = "messages";
  allMessages.forEach(message=>{
    let rendered = this.renderMessage(message);
    node.appendChild(rendered);
  });
  return node;
};

Sent.renderMessage = function(message){

  let newLi = document.createElement("li");
    newLi.className = "message";
    newLi.innerHTML =`
    <span class='to'>${message.to}</span>
    <span class="subject">${message.subject}</span> -
    <span class="body">${message.body}</span>
    `;
    return newLi;
};


module.exports = Sent;
