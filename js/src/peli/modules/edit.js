import Storage from "./storage.js";
import List from "./list.js";

export default function(){  
    //Crear los objetos
    const storage = new Storage();
    const list = new List();
    
    //conseguir datos de peliculas
    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll(".peli-item");

    //Recorrer peliculas mostradas
    pelis_viewed.forEach(peli =>{

        //Seleccionar el boton editar
        let edit_btn = peli.querySelector(".edit");

        //Asignar un evento click
        edit_btn.onclick = function(){

            //Conseguir id de la peli
            const id = parseInt(this.getAttribute("data-id"));

            //Quitar botones
            edit_btn.remove();
            peli.querySelector(".delete").remove();

            //Añadir un trozo de html debajo de los botones
            let peli_edit_html =`
                <div class="edit_form">
                    <hr>
                    <h3 class="title">Editar pelicula</h3>
                    <form>
                        <input type="text" class="edited_title" value="${peli.querySelector(".title").innerHTML}" />
                        <textarea class="edited_description">${peli.querySelector(".description").innerHTML}</textarea>
                        <input type="submit" class="update" value="actualizar"/>    
                    </form>
                </div>
            `;

            peli.innerHTML += peli_edit_html;
        //Seleccionar el boton de actualizar
            let update_btn = peli.querySelector(".update");
        //Aplicar evento click
            update_btn.onclick = function(e){
                e.preventDefault();

                //Buscar indice de la pelicula
                let index = pelis_stored.findIndex(peli=> peli.id === id);
                
                //Guardar objeto dentro de ese indice
                pelis_stored[index] = {
                    id: id,
                    title: peli.querySelector(".edited_title").value,
                    description: peli.querySelector(".edited_description").value
                };

                //Actualizar localstorage
                storage.save(pelis_stored);
            //Volver a mostrar el listado
                list.show(pelis_stored);
                return false;
            }
            
        }
        
    })

        
}