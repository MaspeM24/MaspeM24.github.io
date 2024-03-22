var btnAbouts = document.getElementsByClassName('btn_about');
var contentTabs = document.getElementsByClassName('content_tab');
var hamburgerMenu = document.getElementsByClassName('hamburger_menu')[0];
var blurPages = document.getElementsByClassName('blur_page');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');
let docTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "Hey Come Back 😒";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let targetLink = document.querySelector(`nav ul li a[href*="${id}"]`);
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            });
        }
    });
};

const hamburgerAktif = () => {
    if(hamburgerMenu.classList.contains('hamburger_aktif')){
        hamburgerMenu.classList.remove('hamburger_aktif')
        for (var i = 0; i < blurPages.length; i++) {
            // remove
            blurPages[i].classList.remove('blur_aktif');
        }
    }else{
        hamburgerMenu.classList.add('hamburger_aktif')
        for (var i = 0; i < blurPages.length; i++) {
            // add
            blurPages[i].classList.add('blur_aktif');
        }
    }
    var hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('active');
}

const openTab = (namaTab) => {
    for(btn of btnAbouts){
        btn.classList.remove('active_btn');
    }
    for(tab of contentTabs){
        tab.classList.remove('active_content');
    }
    event.currentTarget.classList.add('active_btn');
    document.getElementById(namaTab).classList.add('active_content')
}

// 
document.addEventListener('DOMContentLoaded', function() {
    updateImageDisplay('144p');

    var qualitySelector = document.getElementById('quality');

    qualitySelector.addEventListener('change', function() {
        var selectedQuality = this.value || '144p';

        updateImageDisplay(selectedQuality);
    });
});

function updateImageDisplay(selectedQuality) {
    var images = document.querySelectorAll('.container_hasil img');

    images.forEach(function(img) {
        img.classList.remove('img_aktif');
    });

    var activeImage = document.querySelector(`.container_hasil img[src$="${selectedQuality}.png"]`);
    if (activeImage) {
        activeImage.classList.add('img_aktif');
    }
}

