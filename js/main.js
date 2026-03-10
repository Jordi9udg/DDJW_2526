addEventListener('load', function() {
    document.getElementById('play').addEventListener('click', 
    function(){
        sessionStorage.removeItem('load');
        window.location.assign("./html/game.html");
    });

    document.getElementById('options').addEventListener('click', 
    function(){
        window.location.assign("./html/options.html");
    });

    document.getElementById('saves').addEventListener('click', 
    function(){
        if (!localStorage.save) {
            alert("No hi ha cap partida a carregar");
            return;
        }
        sessionStorage.load = localStorage.save;
        window.location.assign("./html/game.html");
    });

    document.getElementById('exit').addEventListener('click', 
    function(){
        console.warn("No es pot sortir!");
    });
});