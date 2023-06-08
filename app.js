let banner = document.querySelector('.banner');
let dayNight = document.querySelector('.dayNight');
dayNight.onclick = function () {
    banner.classList.toggle('night')
}

let typingText = new Typed('#text',{
    strings : ['Yamila Lerman', 'Desarrolladora Web', 'Web Developer'],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 50,
    backDelay : 1000,
})