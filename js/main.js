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
// Event Listener Navbar
ham.addEventListener('click',()=>{
    console.log('Click Event Occured');
    if(icon.className === 'fa fa-bars'){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        bar.style.display = 'block';
        bar.style.transition = "0.5s"
    } else {
        icon.classList.remove('fa-times')
        icon.classList.add('fa-bars');
        bar.style.display = 'none';
    }
});
// Footer date
var date = document.querySelector('#date');
var year = new Date();
console.log(year)
date.textContent = `${year.getFullYear()}`;

// Toggle Feature
var arrowIcon = document.querySelectorAll('.arrow');
console.log(arrowIcon);


// const arrowToggle = (icon) =>{
//     if(icon[i].className === 'fa fa-chevron-up'){
//         icon[i].classList.remove('fa fa-chevron-up');
//         icon[i].classList.add('fa-chevron-down');
//     } else {
//         icon[i].classList.remove('fa fa-chevron-up');
//         icon[i].classList.add('fa-chevron-down');
//     }
// }

arrowIcon.forEach(function(icon){
    icon.addEventListener('click',()=>{
        if(icon.className === 'fa fa-chevron-up'){
            icon.classList.remove('fa fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        } else {
            icon.classList.remove('fa fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    })
});