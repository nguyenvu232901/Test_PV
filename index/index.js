function openSearch() {
    document.querySelector('.icon-btn-open').style.display = 'none';
    document.querySelector('.search-form').style.display = 'block';
}

function closeSearch() {
    document.querySelector('.icon-btn-open').style.display = 'block';
    document.querySelector('.search-form').style.display = 'none';
}


function toggleNavigation() {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('active');
}

