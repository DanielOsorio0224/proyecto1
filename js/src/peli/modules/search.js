import Storage from "./storage.js";
import List from "./list.js";

export default function(){
    //Crear objetos
    const storage = new Storage();
    const list = new List();
    
    //Conseguir datos peliculas
    let content = document.querySelector("#content");
    let search_btn = document.querySelector("#search");

    //Aplicar un evento al formulario de busqueda
    search_btn.onclick = (e)=>{
        e.preventDefault();
        
        //Conseguir texto
        let wanted = document.querySelector("#search_field").value;

        //Conseguir listado actualizado
        let pelis_stored = storage.getData();

        //Aplicar filtro
        const new_pelis = pelis_stored.filter(peli =>{
            return peli.title.toLowerCase().includes(wanted.toLowerCase());
        });

        //Mostrar listado de coincidencias
        if(new_pelis.length <=0){
            content.innerHTML = "<div><h2>NO HAY COINCIDENCIAS</h2></div>";
        }else{
            list.show(new_pelis);
        }
        
        
        return false;
    }
}