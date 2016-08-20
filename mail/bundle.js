/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Router = __webpack_require__(1);
	const Inbox = __webpack_require__(2);
	const Sent = __webpack_require__(4);

	document.addEventListener('DOMContentLoaded', () => {
	  let routes = {
	    inbox: Inbox,
	    sent: Sent
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Router (node, routes) {
	  this.node = node;
	  this.routes = routes;
	}

	Router.prototype.start = function () {
	  window.addEventListener("hashchange", this.render.bind(this));
	};

	Router.prototype.render = function () {
	  this.node.innerHTML = "";
	  let component = this.activeRoute();

	  if (component){
	    let domNode = component.render();
	    this.node.appendChild(domNode);
	  }

	};

	Router.prototype.activeRoute = function () {
	  let activeR =  window.location.hash.slice(1);
	  return this.routes[activeR];
	};

	module.exports = Router;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);

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


/***/ },
/* 3 */
/***/ function(module, exports) {

	let messages = {
	  sent: [
	    {to: "friend@mail.com", subject: "Check this out", body: "It's so cool"},
	    {to: "person@mail.com", subject: "zzz", body: "so booring"}
	  ],
	  inbox: [
	    {from: "grandma@mail.com", subject: "Fwd: Fwd: Fwd: Check this out", body:
	"Stay at home mom discovers cure for leg cramps. Doctors hate her"},
	  {from: "person@mail.com", subject: "Questionnaire", body: "Take this free quiz win $1000 dollars"}
	]
	};


	let MessageStore = {};
	MessageStore.getInboxMessages = function(){return messages.inbox;}
	MessageStore.getSentMessages = function(){return messages.sent;}

	module.exports = MessageStore;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(3);

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


/***/ }
/******/ ]);