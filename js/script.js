const menuButton = document.getElementById('menu-button');
const nav = document.getElementById('main-nav');

menuButton.addEventListener('click', function () {
    nav.classList.toggle('open');
    const opened = nav.classList.contains('open');
    menuButton.setAttribute('aria-expanded', opened);
    menuButton.setAttribute('aria-label', opened ? '메뉴 닫기' : '메뉴 열기');
});

const links = nav.querySelectorAll('a');
links.forEach(function (link) {
    link.addEventListener('click', function () {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', '메뉴 열기');
    });
});

const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        tabs.forEach(function (button) {
            button.classList.remove('active');
            button.setAttribute('aria-selected', 'false');
        });
        panels.forEach(function (panel) {
            panel.classList.add('hidden');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        document.getElementById(tab.dataset.tab).classList.remove('hidden');
    });
});

if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 600, once: true });
}
