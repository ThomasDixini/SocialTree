

const icon = document.querySelector('#icon');                                   // DOM
const img = document.createElement('img')


fetch('https://api.github.com/users/ThomasDixini')                          // BUSCA A IMAGEM DO MEU GITHUB
.then(response => response.json())
.then(data => {

    img.setAttribute('src', data.avatar_url);
    img.setAttribute('class', 'avatar_icon');
    
    icon.prepend(img)
})