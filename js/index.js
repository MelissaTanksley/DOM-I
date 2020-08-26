const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// nav items
let navItems = document.querySelectorAll('nav a');
console.log(navItems);
for (let i = 0; i < navItems.length; i++) {
	navItems[i].innerHTML = `${siteContent.nav['nav-item-' + (i + 1)]}`;
}

// cta heading, button, image
let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent.cta.h1;

let ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent.cta.button;

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent.cta['img-src']);





// contact
let contactTitle = document.querySelector('.contact h4');
let contactContent = document.querySelectorAll('.contact p');

contactTitle.textContent = siteContent.contact['contact-h4'];
contactContent[0].innerHTML = '123 Way 456 Street<br />Somewhere, USA';
contactContent[1].textContent = siteContent.contact.phone;
contactContent[2].textContent = siteContent.contact.email;

// footer
let footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;

