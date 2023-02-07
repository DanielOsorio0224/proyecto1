import Storage from "./storage.js";
import List from "./list.js";
export default class Add{

    constructor(){
        //Crear objetos
        this.storage = new Storage();
        this.list = new List();

        //Conseguir elementos del DOM
        this.title_field = document.querySelector("#title");
        this.description_field = document.querySelector("#description");
        this.save = document.querySelector("#save");
    }

    peli_save(){
        this.save.onclick = (e)=>{
            e.preventDefault();

            //conseguir datos actualizados
            let pelis = this.storage.getData();
            let lastid = this.storage.get_last_id();
            console.log(pelis,lastid);

            //Datos a guardar
            let title = this.title_field.value;
            let description = this.description_field.value;

            console.log(title,description);

            //Pequeña validacion 
            if(title !="" || description != ""){
                //Crear objeto a guardar
                let peli = {
                    id: lastid++,
                    title,
                    description
                };

                //Añadir al array de objetos
                pelis.push(peli);

                //Guardar en el localstorage
                this.storage.save(pelis);

                //Actualizar el listado
                this.list.add_tolist(peli, pelis);

            }else{
                alert("Introduce los datos");
            }

            return false;
        }
    }
}