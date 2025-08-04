
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

const textContent = document.createElement("h1");
textContent.className = "textContent";
textContent.textContent = "I love JavaScript";

const imageContent = document.createElement("img");
imageContent.className = "imageContent";
imageContent.src = "./assets/JS-image.png";

document.body.append(mainTitle, JSImageHTML);
