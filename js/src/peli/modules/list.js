import _delete from "./delete.js";
import edit from "./edit.js";
export default class List{
    constructor(){
        //Seleccionar elementos del dom a usar
        this.content = document.querySelector("#content");
    }

    peliTemplate(peli){
        return `<article class="peli-item" id="peli-${peli.id}">
                <h3 class="title">${peli.title}</h3>
                <p class="description">${peli.description}</p>

                <button class="edit" data-id="${peli.id}">Editar</button>
                <button class="delete" data-id="${peli.id}">Borrar</button>
        </article> `;
    }
    add_tolist(peli, lis_peli){
        //Plantilla de pelicula añadida(Template)
        let peli_html = this.peliTemplate(peli);

        //Añadir pelicula al contenido en el dom
        this.content.innerHTML += peli_html;

        //Mostar listado nuevo
        this.show(lis_peli);
    }
    show(pelis){
        //Vaciar dom del contenedor de peliculas
        this.content.innerHTML = "";

        //Recorrer y mostrar todos los objetos/peliculas del localstorage
        pelis.forEach(peli => {
            this.content.innerHTML += this.peliTemplate(peli);
        });

        //Funcionalidad botones de borrado
        _delete();

        //Funcionalidad botones de edicion
        edit();

    }
}