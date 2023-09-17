const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')
const burger1 = document.querySelector('.burger')


imagenes.forEach(imagen =>{
    imagen.addEventListener('click' ,()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorlight.addEventListener('click', (e)=>{
    if(e.target != imageneslight){
        contenedorlight.classList.toggle('show')
        imageneslight.classList.toggle('showImage')
        burger1.style.opacity= '1'
    }
})

const aparecerImagen =(imagen) =>{
    imageneslight.src = imagen;
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
    burger1.style.opacity= '0'
}