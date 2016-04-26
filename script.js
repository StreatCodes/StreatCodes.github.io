'use strict';

var pages = [];

var about = `A BIT ABOUT ME.<br />
I'm a strong believer in open source software, I love to break, fix and customize when i can.<br />
I have a passion for clean energy and want to make things as fast and effecient as possible.<br />`

var skills = `Languages<br />
- javascript<br />
- HTML5, CSS3<br />
- C, C++<br />
`

var contact = `Contact me at example@gmail.com`

pages.push(about);
pages.push(skills);
pages.push(contact);

var navs = document.getElementsByClassName('navigation');

window.addEventListener("hashchange", hashChange, false);
window.addEventListener("load", hashChange, false);

function hashChange() {

    //remove previous selection
    var prevNav = document.getElementById('nav-selected');
    var hash;

    switch (window.location.hash) {
        case '#about':
            hash = 0;
            break;
        case '#skills':
            hash = 1;
            break;
        case '#contact':
            hash = 2;
            break;
        default:
            hash = 0;
    }

    if (prevNav) prevNav.removeAttribute('id');

    //show new selection
    navs[hash].id = 'nav-selected';

    startTerminal(pages[hash]);
}

var terminalText;
var terminalInterval;
var terminalContent;
var count = 0;

function startTerminal(pTerminalText) {
    terminalContent = document.getElementById('terminal-content');
    terminalText = pTerminalText;
    terminalContent.innerHTML = '';

    terminalInterval = window.setInterval(typeTerminal, 20);
}

function typeTerminal() {
    count++;
    terminalContent.innerHTML = terminalText.substring(0, count);

    if(count >= terminalText.length){
        window.clearInterval(terminalInterval);
    }
}
