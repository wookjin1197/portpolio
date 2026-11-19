const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('main-nav');

menuButton.addEventListener('click', function () {
    nav.classList.toggle('open');
});

nav.addEventListener('click', function () {
    nav.classList.remove('open');
});

const workTab = document.getElementById('work-tab');
const studyTab = document.getElementById('study-tab');
const workPanel = document.getElementById('work');
const studyPanel = document.getElementById('study');

workTab.addEventListener('click', function () {
    workTab.classList.add('active');
    studyTab.classList.remove('active');
    workPanel.classList.remove('hidden');
    studyPanel.classList.add('hidden');
});

studyTab.addEventListener('click', function () {
    studyTab.classList.add('active');
    workTab.classList.remove('active');
    studyPanel.classList.remove('hidden');
    workPanel.classList.add('hidden');
});

if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 600, once: true });
}
