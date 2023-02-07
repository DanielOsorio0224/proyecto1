import Storage from "./storage.js";
import List from "./list.js";

export default function(){
    //Crear objetos
    const storage = new Storage();
    const list = new List();

    //Datos de las pelicular disponibles
    let pelisStored = storage.getData();
    let pelisViewed = document.querySelectorAll(".peli-item");

    //Recorrer peliculas mostradas
    pelisViewed.forEach(peli => {
        //Capturar el boton
        let borrar = peli.querySelector(".delete");

        //Aplicar el evento onclick
        borrar.onclick = function(){
            
            //conseguir el id de la pelicula
            const peli_id = this.getAttribute('data-id');
            //Filtrar el array
            const new_pelis_stored = pelisStored.filter((peli)=> peli.id !== parseInt(peli_id));
        
            //Actualizar localStorage
            storage.save(new_pelis_stored);

            //Volver a mostar listado
            list.show(new_pelis_stored);
        }
    })
}