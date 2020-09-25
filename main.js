window.onload = function() {    
        function generarExcusa () {
        let quien = ["El perro", "La abuela", "Su tortuga", "Mi pájaro"];
        let accion = ["se comió", "se orinó", "ha aplastado", "ha roto"];
        let que = ["mi tarea", "las llaves", "el coche"]; 
        let cuando = ["antes de clases", "a tiempo", "cuando termine", "durante mi almuerzo", "mientras estaba rezando"];
        let posicionQuien = Math.floor(Math.random() * 4);
        
        let posicionAccion = Math.floor(Math.random() * 4);

        let posicionQue = Math.floor(Math.random() * 3);

        let posicionCuando = Math.floor(Math.random() * 5);

        let excusa = quien[posicionQuien] +" "+ accion[posicionAccion ] +" "+ que[posicionQue ] + " " + cuando[posicionCuando ];
        document.getElementById("magicByAlejandro").innerHTML = excusa; 
    }
    generarExcusa ();
}


//Tibi: window.onload = function() es un event, se encarga de que al cargar la página se ejecute la función que hiciste de la excusa, por eso está dentro de sus {}





 