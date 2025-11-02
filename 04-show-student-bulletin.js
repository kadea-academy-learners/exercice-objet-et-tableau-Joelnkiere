// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".
function showStudentBulletin(eleves) {
	const bulletins = []; // tableau des résultats

	for (let i = 0; i < eleves.length; i++) {
		const unEleve = eleves[i];
		const sesNotes = unEleve.notes;

		let somme = 0;
		for (let j = 0; j < sesNotes.length; j++) {
			somme += sesNotes[j];
		}

		// calcul de la moyenne
		let moyenne = 0;
		if (sesNotes.length > 0) {
			moyenne = somme / sesNotes.length;
		}

		// arrondir à 2 décimales et convertir en nombre
		moyenne = Number(moyenne.toFixed(2));

		// déterminer le commentaire
		let commentaire = "";
		if (moyenne >= 16) commentaire = "Excellent";
		else if (moyenne >= 14) commentaire = "Très Bien";
		else if (moyenne >= 12) commentaire = "Bien";
		else if (moyenne >= 10) commentaire = "Passable";
		else commentaire = "À revoir";

		// ajouter dans le tableau de bulletins
		bulletins.push({
			nom: unEleve.nom,
			moyenne: moyenne,
			commentaire: commentaire
		});
	}

	return bulletins;
};



const eleves = [
	{
		nom: "Joe",
		notes: nombre = [2, 3, 5, 19, 8]
	},
	{
		nom: "Bobette",
		notes: nombre = [1, 13, 9, 14, 8]
	},
	{
		nom: "Jason",
		notes: nombre = [2, 3, 15, 1, 8]
	},
	{
		nom: "celio",
		notes: nombre = [2, 3, 5, 14, 8]
	},
	{
		nom: "mark",
		notes: nombre = [2, 3, 5, 1, 8]
	},
]
console.log(showStudentBulletin(eleves));

module.exports = {
	showStudentBulletin,
};