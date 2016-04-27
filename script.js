'use strict';

//These are the text written to the terminal.
var about = "A bit about me<br>" +
"I'm a strong believer in open source software, I love to break, fix and customize when I can. " +
"I try to make my code clean and efficient. I started to learn programming, and how to make websites in high school. " +
"After high school I studied at the Academy of Interactive Entertainment, Where I graduated with a diploma in game programming. " +
"I am a self taught web developer and I'm familiar with the most up to date standards.";

var skills = "Languages<br>" +
"- javascript<br>" +
"- HTML5, CSS3<br>" +
"- C, C#, C++<br>" +
"- (partially) go, php<br><br>" +
"Platforms<br>" +
"- Windows, OSX, Linux<br>" +
"- Android, iOS";

var contact = "You can check out my github at <a href='https://github.com/StreatCodes' target='_blank'>https://github.com/StreatCodes</a><br>" +
"And you can email me at <a href='mailto:matt.r.streatfield@gmail.com'>matt.r.streatfield@gmail.com</a>";

var pages = [];

pages.push(about);
pages.push(skills);
pages.push(contact);

var navs = document.getElementsByClassName('navigation');
var terminalTitle = document.getElementById('terminal-title');

window.addEventListener("hashchange", hashChange, false);
window.addEventListener("load", hashChange, false);

//When About/Skills/Contact are clicked this runs
function hashChange() {
    //remove previous selection
    var prevNav = document.getElementById('nav-selected');
    var hash;

    switch (window.location.hash) {
        case '#about':
            hash = 0;
            terminalTitle.innerHTML = './about';
            break;
        case '#skills':
            hash = 1;
            terminalTitle.innerHTML = './skills';
            break;
        case '#contact':
            hash = 2;
            terminalTitle.innerHTML = './contact';
            break;
        default:
            hash = 0;
            terminalTitle.innerHTML = './about';
    }

    if (prevNav) prevNav.removeAttribute('id');

    //show new selection
    navs[hash].id = 'nav-selected';

    count = 0;
    window.clearInterval(terminalInterval);
    startTerminal(pages[hash]);
}

var terminalText;
var terminalInterval;
var terminalContent;
var count = 0;

//Sets interval to update text in the terminal, and other required variables
function startTerminal(pTerminalText) {
    terminalContent = document.getElementById('terminal-content');
    terminalText = pTerminalText;
    terminalContent.innerHTML = '';

    terminalInterval = window.setInterval(typeTerminal, 20);
}


//Types text into the terminal
function typeTerminal() {
    count += 3;
    terminalContent.innerHTML = terminalText.substring(0, count);

    if(count >= terminalText.length){
        window.clearInterval(terminalInterval);
    }
}
