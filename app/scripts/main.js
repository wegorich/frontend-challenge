'use strict';
var $ = function ( elem ) {
    var _el = document.querySelectorAll( elem );
    _el.toggleClass = function (selector){
        for(var i = 0; i < _el.length; i+=1){
            _el[i].classList.toggle(selector);
        }
    };
    _el.on = function (event, callback){
        for(var i = 0; i < _el.length; i+=1) {
            _el[i].addEventListener(event, callback);
        }
    };

    return _el;
};


$('.btn').on('click', function(){
    $('.modal').toggleClass('toggle-hide');
});
console.log('ready!');
