// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

function averageNote(notes) {
	let somme=0, moyenne=0;
	taille=notes.length;
	for(let i=0;i<taille;i++){
		somme+=notes[i];

	}
	moyenne=somme/taille;
	if(moyenne>=10){
		return "Réussi"
	}
	return"Échoué"
};
const notes=[23,5,45,0,4];


module.exports = {
	averageNote,
};



