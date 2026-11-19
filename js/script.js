var menuButton = document.getElementById('menu-button');
var nav = document.getElementById('main-nav');

menuButton.addEventListener('click', function () {
    nav.classList.toggle('open');
});

var workButton = document.getElementById('work-button');
var studyButton = document.getElementById('study-button');
var work = document.getElementById('work');
var study = document.getElementById('study');

workButton.addEventListener('click', function () {
    workButton.classList.add('active');
    studyButton.classList.remove('active');
    work.classList.remove('hidden');
    study.classList.add('hidden');
});

studyButton.addEventListener('click', function () {
    studyButton.classList.add('active');
    workButton.classList.remove('active');
    study.classList.remove('hidden');
    work.classList.add('hidden');
});

if (typeof AOS !== 'undefined') {
    AOS.init();
}
