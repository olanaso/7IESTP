const URL_GLOBAL = 'https://ww2.institutoaucara.edu.pe';

const containerNews = document.getElementById('container-news');
const searchText = document.getElementById('txt-buscar');
const buttonSearch = document.getElementById('send-search');

function search(text = '') {
    if (text.trim() !== '') {
        window.location.href = `https://ww2.institutoaucara.edu.pe/index.php?s=${text}`;
    }
}
document.addEventListener('DOMContentLoaded', async () => {
    pintarNews();
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

    buttonSearch.addEventListener('click', ()=>{
        search(searchText.value);
    })
})



function pintarNews() {
    getCategories(21, 4).then(data => {
        data.map(category => {
            const div = document.createElement('div');
            getMedia(category).then(data => {
                console.log(category)
                div.classList.add('col-lg-3', 'col-md-6');
                div.innerHTML = `
                <div class="single-blog mb-30">
                    <div class="blog-img">
                        <a href="${category.link}"><img src="${data.media_details ? data.media_details.sizes.medium.source_url : '/assets/images/sin_imagen.png'}" alt="${category.name}"></a>
                    </div>
                    <div class="blog-content-wrap">
                        <span>${category.date}</span>
                        <div class="blog-content">
                            <h4>
                                <a href="${category.link}">${category.title.rendered}</a>
                            </h4>
                            ${category.excerpt.rendered}
                        </div>
                        <a class="default-btn" href="${category.link}">Leer más...</a>
                    </div>
                </div>
                `;
            })    
            containerNews.appendChild(div);
        })
    });
}

//petitions
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