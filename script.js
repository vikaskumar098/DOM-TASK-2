var grow = 0
var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')
var msg = document.querySelector('#msg')  

btn.addEventListener('click',function(){
    btn.style.pointerEvents = 'none'
    
    var num = 50 + Math.floor(Math.random()*50)
    
    console.log('Your file will be downloaded in', num/10, 'seconds');
    msg.innerHTML = `Your file will be downloaded in ${num/10} seconds`

    var int = setInterval(() => {
        grow++
        h2.innerHTML = grow + '%'
        inner.style.width = grow + '%'
    }, num);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
        msg.innerHTML = "Download Complete ✔️"
    }, num*100);
})
