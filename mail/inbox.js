const MessageStore = require('./message_store.js');

let Inbox = {};

Inbox.render = function(){
  let node = document.createElement('ul');
  let allMessages = MessageStore.getInboxMessages();
  node.className = "messages";
  allMessages.forEach(message=>{
    let rendered = this.renderMessage(message);
    node.appendChild(rendered);
  });
  // node.innerHTML = "An Inbox Message";
  return node;
};

Inbox.renderMessage = function(message){

  let newLi = document.createElement("li");
    newLi.className = "message";
    newLi.innerHTML =`
    <span class='from'>${message.from}</span>
    <span class="subject">${message.subject}</span> -
    <span class="body">${message.body}</span>
    `;
    return newLi;
};


module.exports = Inbox;
