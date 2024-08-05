window.addEventListener('scroll',function(){
var navbar=this.document.getElementById('navbar');
if (window.scrollY > 50) {
    navbar.classList.add('sticky');
} else {
    navbar.classList.remove('sticky');
}
});
function menuitemchanger(event){
    event.target.style.color="rgb(3, 221, 221)";
}
function resetmenuitem(event){
    event.target.style.color='';

}

document.querySelectorAll('.nav ul li a').forEach(function(menuItem) {
    menuItem.addEventListener('mouseover', menuitemchanger);
    menuItem.addEventListener('mouseout', resetmenuitem);
});