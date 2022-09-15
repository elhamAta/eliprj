var count = 0;
var countInterval;

var onLoadCounter = function(){
    count = Number(Cookies.get('count'))
    document.getElementById('counter').innerHTML = count
}
var Start = function(){
    countInterval = setInterval(function(){
        count += 1
        Cookies.set('count',count)
        document.getElementById('counter').innerHTML = count
        document.getElementsByClassName('start')[0].disabled = true
        document.getElementsByClassName('pause')[0].disabled = false

    },1000)
}
var Pause = function(){
    clearInterval(countInterval)
    document.getElementsByClassName('start')[0].disabled = false
    document.getElementsByClassName('pause')[0].disabled = true

 }
 