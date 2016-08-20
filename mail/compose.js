const MessageStore = require('./message_store.js');

let Compose = {};

Compose.render = function(){
  let node = document.createElement('div');
  node.className = "new-message";
  node.innerHTML = this.renderMessage();
  node.addEventListener('change', e => {
      let target = e.target;
      MessageStore.updateDraftField(target.name, target.value);
    });
  node.addEventListener('submit', e => {
    e.preventDefault();
    MessageStore.sendDraft();
    location.hash = "inbox";
  });
  // node.innerHTML = "An Compose Message";
  return node;
};

Compose.renderMessage = function(){
  let message = MessageStore.getMessageDraft();

  let html = `
   <p class="new-message-header">New Message</p>
   <form class="compose-form">
   <input
     placeholder='Recipient'
     name='to'
     type="text"
     value='${message.to}'>
   <input
     placeholder='Subject'
     name='subject'
     type="text"
     value='${message.subject}'>
   <textarea
     name='body'
     rows='20'>${message.body}</textarea>
   <button type="submit" class="btn btn-primary submit-message">Send</button>
   </form>
   `;
    return html;
};


module.exports = Compose;
