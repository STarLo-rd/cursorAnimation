let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li');
let front = document.querySelector('.front-cover');

window.addEventListener('mousemove',cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
     mouseCursor.style.left = e.pageX + 'px';

}


navLinks.forEach(link => {
    link.addEventListener('mouseover', ()=>{
        mouseCursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    });
     link.addEventListener('mouseleave', ()=>{
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('hovered-link');
    });

});



front.addEventListener('mouseover',() => {
    mouseCursor.classList.add('changed-grow');
})

front.addEventListener('mouseleave',() => {
    mouseCursor.classList.remove('changed-grow');
})



