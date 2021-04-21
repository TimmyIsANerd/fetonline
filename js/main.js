// Toggle Hamburger Button

var nav = document.querySelector('#setTopNav');
var ham = document.querySelector('#ham');
var icon = document.querySelector('.fa');
var bar = document.querySelector('.vert-bar');

const toggleHam = () =>{
    if(nav.className === 'topnav'){
        nav.className += ' responsive';
    }else{
        nav.className = "topnav";
    }
}

ham.addEventListener('click',()=>{
    console.log('Click Event Occured');
    if(icon.className === 'fa fa-bars'){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        bar.style.display = 'block';
    } else {
        icon.classList.remove('fa-times')
        icon.classList.add('fa-bars');
        bar.style.display = 'none';
    }
});
var date = document.querySelector('#date');
var year = new Date();
console.log(year)
date.textContent = `${year.getFullYear()}`;