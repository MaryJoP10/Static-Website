var imagenes = ['img/asteroide.jpg', 'img/luna.jpg', 'img/robot.jpg'], 
    cont = 0;

function corredor(contenedor){
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('images'),
            tgt = e.target;

            if(tgt == atras){
                if(cont > 0){
                    img.src = imagenes[cont - 1];
                    cont --;
                }
                else{
                    img.src = imagenes[imagenes.length - 1];
                    cont = imagenes.length -1;
                }
            }
    });
}