export default class Storage{
    constructor(){
        this.id = 1;
    }
    
    getData(){
        let pelis = JSON.parse(localStorage.getItem("peli"));

        if(!pelis || pelis.length < 1){
            pelis = [
                {
                    id:0,
                    title:"Pelicula",
                    description: "Accion"
                }
            ];

            this.id = 1;
        }else{
            this.id = pelis[pelis.length - 1].id + 1;
            
        }
        return pelis;
    }

    get_last_id(){
        return this.id;
    }
    save(data){
        localStorage.setItem("peli", JSON.stringify(data));
    }
}