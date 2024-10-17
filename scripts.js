document.getElementById('page-title').textContent = config.title;
document.getElementById('main-heading').textContent = config.mainHeading;
document.getElementById('main-text').textContent = config.mainText;
document.getElementById('store-text').textContent = config.storeText;
document.getElementById('footer-text').textContent = config.footerText;

const navbar = document.querySelector('.navbar');
const linksContainer = document.querySelector('.links');

function createNavLink(label, iconClass, link) {
    const a = document.createElement('a');
    a.className = 'nav-link';
    a.href = link;
    a.innerHTML = `<i class="${iconClass}"></i> ${label}`;
    navbar.appendChild(a);
}

config.navLinks.forEach(navLink => {
    createNavLink(navLink.label, navLink.icon, navLink.link);
});

function createMainLink(mainLink) {
    const a = document.createElement('a');
    a.className = 'link store-link';
    a.href = mainLink.link;
    a.innerHTML = `<i class="${mainLink.icon}"></i> ${mainLink.label}`;
    linksContainer.appendChild(a);
}

createMainLink(config.mainLink);

function adjustNavbarText() {
    const fontSize = window.innerWidth <= 768 ? '0.8rem' : '1rem';
    document.querySelectorAll('.nav-link').forEach(link => {
        link.style.fontSize = fontSize;
    });
}

window.addEventListener('resize', adjustNavbarText);
adjustNavbarText();