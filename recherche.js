// Ajout d'un écouteur d'événement 'input' à l'élément avec l'id 'searchBar'
document.getElementById('searchBar').addEventListener('input', function (e) {
    // Récupération de la valeur saisie dans la barre de recherche, convertie en minuscules
    var recherche = e.target.value.toLowerCase();

    // Sélection de l'élément 'main' du document
    var main = document.querySelector('main');

    // Récupération de tous les éléments de classe 'card' à l'intérieur de 'main'
    var cards = main.getElementsByClassName('card');

    // Conversion de la collection HTML en Array pour utiliser forEach
    Array.from(cards).forEach(function (card) {
        // Récupération du texte contenu dans la 'card' et conversion en minuscules
        var text = card.textContent.toLowerCase();

        // Vérification si le texte de la 'card' contient le terme de recherche
        if (text.indexOf(recherche) !== -1) {
            // Si le texte contient le terme de recherche, la 'card' est affichée
            card.style.display = '';
        } else {
            // Sinon, la 'card' est cachée
            card.style.display = 'none';
        }
    });
});