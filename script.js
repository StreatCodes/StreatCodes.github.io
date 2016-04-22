'use strict';

var navs = document.getElementsByClassName('navigation');
var contents = document.getElementsByClassName('content');

hashChange();

window.addEventListener("hashchange", hashChange, false);

function hashChange() {

    //remove previous selection
    var prevNav = document.getElementById('nav-selected');
    var prevContent = document.getElementById('content-selected');
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
    if (prevContent) prevContent.removeAttribute('id');

    //show new selection
    navs[hash].id = 'nav-selected';
    contents[hash].id = 'content-selected';
}
