'use strict'
const URL_GLOBAL = 'https://ww2.institutoaucara.edu.pe';

const containerCategories = document.getElementById('container-products');
const containerNews = document.getElementById('container-news');
const news = document.querySelector('.news');
const prods = document.querySelector('.product');
const nextCard = document.getElementById('click-next');
const prevCard = document.getElementById('click-prev');
const cardsProducts = document.querySelectorAll('.card-products');
const idProductVisual = document.getElementById('id-card-product');

const textSearch = document.getElementById('search');
const buttonSearch = document.getElementById('button-search');

const comprar1 = document.getElementById('comprar1');
const comprar2 = document.getElementById('comprar2');

let cardSelect = 1;

document.addEventListener('DOMContentLoaded', async () => {
    await pintarCategories();
    await pintarNews();

    nextCard.addEventListener('click', () => {
        if(cardSelect < 3) cardSelect++;
        changeProduct(cardSelect);
    })

    prevCard.addEventListener('click', () => {
        if(cardSelect > 1) cardSelect--;
        changeProduct(cardSelect);
    })

    buttonSearch.addEventListener('click', () => search(textSearch.value));

    comprar1.addEventListener('click', () => {window.location.href = 'https://www.lacteosapvc.com/contactenos/'});
    comprar2.addEventListener('click', () => {window.location.href = 'https://www.lacteosapvc.com/contactenos/'});
})


// Pintar en el HTML
function pintarCategories() {
    getCategories(21, 4).then(data => {
        data.map(category => {
            const div = document.createElement('div');

            getMedia(category).then(data => {
                div.innerHTML = `
                    <div class="card-product">
                        <img src="${data.media_details ? data.media_details.sizes.medium.source_url : '/assets/images/sin_imagen.png'}" alt="${category.name}" class="categoryMedia">
                        <h6 class="card-product__title" style="text-transform: uppercase;">${category.title.rendered}</h6>
                        <div class="card-product__content">
                            ${category.content.rendered}
                        </div>
                        <a href="${category.link}" class="button ver">VER MÁS</a>
                    </div>
                `;
            })
            containerCategories.appendChild(div);
        })

        const buttonMore = document.createElement('a');
        buttonMore.setAttribute('href', 'https://www.lacteosapvc.com/category/productos/');
        buttonMore.textContent = 'MAS PRODUCTOS';
        buttonMore.classList.add('button-more')
        prods.appendChild(buttonMore);
    });
}

function pintarNews() {
    getCategories(25, 6).then(data => {
        data.map(category => {
            const div = document.createElement('div');
            getMedia(category).then(data => {
                div.innerHTML = `
                    <div class="card-new">
                        <img src="${data.media_details ? data.media_details.sizes.medium.source_url : '/assets/images/sin_imagen.png'}" alt="${category.name}" class="categoryMedia">
                        <h6 class="card-new__title" style="text-transform: uppercase;">${category.title.rendered}</h6>
                        <div class="card-new__content">
                            ${category.content.rendered}
                        </div>
                        <a href="${category.link}" class="button leer">LEER MÁS</a>
                    </div>
                `;
            })    
            containerNews.appendChild(div);
        })

        const buttonMore = document.createElement('a');
        buttonMore.setAttribute('href', 'https://www.lacteosapvc.com/category/noticias/');
        buttonMore.textContent = 'MAS NOTICIAS';
        buttonMore.classList.add('button-more-new')
        news.appendChild(buttonMore);
    });
}

function changeProduct(id) {
    cardsProducts.forEach(card => {
        if (card.dataset['id'] == id) {
            card.classList.add('card-products--active');
        }
        else {
            card.classList.remove('card-products--active');
        }
    })
    idProductVisual.textContent = id;
}


function search(text = '') {
    if (text.trim() !== '') {
        window.location.href = `https://ww2.institutoaucara.edu.pe/index.php?s=${text}`;
    }
}


// Peticiones

function getCategories(category, size) {
    return fetch(`${URL_GLOBAL}/wp-json/wp/v2/posts?per_page=${size}&categories=${category}&offset=0`)
        .then(response => response.json())
        .then(dato => dato);
}

function getMedia(category) {
    return fetch(`${URL_GLOBAL}/wp-json/wp/v2/media/${category.featured_media}`)
        .then(response => response.json())
        .then(data => data);
}

