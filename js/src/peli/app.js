import Add from "./modules/add.js";
import List from "./modules/list.js";
import Storage from "./modules/storage.js";
import search from "./modules/search.js";

export default class App{
    constructor(){
        //Inicializar propiedades
        this.add = new Add();
        this.list = new List();
        this.storage = new Storage();
    }

    load(){
        //Añadir pelicula
        this.add.peli_save();

        //Conseguir array objetos Localstorage
        const pelis = this.storage.getData();

        //Listar pelicula
        this.list.show(pelis);

        //Buscar pelicula
        search();

        console.log("La aplicacion se ha iniciado correctamente");
    }
}