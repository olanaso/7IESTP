const URL_GLOBAL = 'https://ww2.institutoaucara.edu.pe';

const containerNews = document.getElementById('container-news');
const searchText = document.getElementById('txt-buscar');
const buttonSearch = document.getElementById('send-search');
const slider = document.getElementById('slider-section');
const modal = document.getElementById('modal-section');


document.addEventListener('DOMContentLoaded', async () => {
    pintarModal();
    pintarNews();
    pintarSlider();

    //view modal
    
    $(document).ready(function(){
         $("#mostrarmodal").modal("show");
    });
    //search   
    buttonSearch.addEventListener('click', ()=>{
        search(searchText.value);
    });
});

function search(text = '') {
    if (text.trim() !== '') {
        window.open(`https://ww2.institutoaucara.edu.pe/index.php?s=${text}`);
        //window.location.href = `https://ww2.institutoaucara.edu.pe/index.php?s=${text}`;
    }
}

function pintarModal(){
    getCategories(24, 2).then(data => {
        data.map(category => {
            const div = document.createElement('div');
            getMedia(category).then(data =>{
                div.classList.add('carousel-item','active');
                div.innerHTML = `
                <img src="${data.source_url}" class="d-block w-100" alt="">
                `
            });
            modal.appendChild(div);
        })
    });
}

function pintarSlider() {
    getCategories(24, 3).then(data => {
        data.map(category => {
            const div = document.createElement('div');
            getMedia(category).then(data =>{
                div.classList.add('carousel-item','active');
                div.innerHTML = `
                <img src="${data.source_url}" class="d-block w-100" alt="">
                <div class="container">
                    <div class="hero-content">
                        <h2 class="fade-in-right-2">${category.title.rendered}</h2>		
                    </div>
                </div>
                `
            });
            slider.appendChild(div);
        })
    });
}



function pintarNews() {
    getCategories(21, 4).then(data => {
        data.map(category => {
            const div = document.createElement('div');
            getMedia(category).then(data => {
                div.classList.add('col-lg-3', 'col-md-6');
                div.innerHTML = `
                <div class="single-blog mb-30">
                    <div class="blog-img">
                        <a href="${category.link}"><img src="${data.media_details ? data.media_details.sizes.medium.source_url : '/assets/images/sin_imagen.png'}" alt="${category.name}" width="263" height="194"></a>
                    </div>
                    <div class="blog-content-wrap">
                        <span>${dateToString(data.date)}</span>
                        <div class="blog-content">
                            <h4>
                                <a href="${category.link}">${category.title.rendered}</a>
                            </h4>
                            
                        </div>
                        <a class="default-btn" href="${category.link}">Leer m??s...</a>
                    </div>
                </div>
                `;
            })    
            containerNews.appendChild(div);
        })
    });
}



function dateToString(date){
    const event = new Date(date);
    return event.toLocaleDateString('es-PE',{hour: '2-digit', minute:'2-digit'});
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
