addEventListener('load', function() {
    document.getElementById('play').addEventListener('click', 
    function(){
        let person = prompt("Si us plau digues el teu nom", "Jose García");
        console.log(person);
    });

    document.getElementById('options').addEventListener('click', 
    function(){
        console.error("Opció no implementada");
    });

    document.getElementById('saves').addEventListener('click', 
    function(){
        console.error("Opció no implementada");
    });

    document.getElementById('exit').addEventListener('click', 
    function(){
        console.warn("No es pot sortir!");
    });
});