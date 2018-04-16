

document.documentElement.style.fontSize = 100*((document.documentElement.clientWidth / 375) - 1)*0.45 + 100 + 'px';
window.onresize = function(){
    document.documentElement.style.fontSize = 100*((document.documentElement.clientWidth / 375) - 1)*0.45 + 100 + 'px';
}