function random() {
    document.getElementById("IndianAtt").innerHTML = Math.floor(Math.random() * 23);
    document.getElementById("AbroadAtt").innerHTML = Math.floor(Math.random() * 8);
    document.getElementById("UnspecifiedAtt").innerHTML = Math.floor(Math.random() * 15);
}
rger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})
document.getElementById("AbroadAtt").innerHTML =
    Math.floor(Math.random() * 10);
document.getElementById("UnspecifiedAtt").innerHTML =
    Math.floor(Math.random() * 10);
document.getElementById("IndianAtt").innerHTML =
    Math.floor(Math.random() * 25);
