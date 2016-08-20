const Router = require('./router.js');
const Inbox = require('./inbox.js');
const Sent = require('./sent.js');
const Compose = require('./compose.js');

document.addEventListener('DOMContentLoaded', () => {
  let routes = {
    inbox: Inbox,
    sent: Sent,
    compose: Compose
  };

  let content = document.querySelector('.content');
  let router = new Router(content, routes);
  router.start();
  window.location.hash = "#inbox";


  let lis = document.querySelectorAll('.sidebar-nav li');

  for (let i = 0; i< lis.length; i++) {
    let li = lis[i];
    li.addEventListener('click', (e) => {
      let ct = e.currentTarget;
      let newLocation = ct.innerText.toLowerCase();
      window.location.hash = newLocation;
    });
  }



});
