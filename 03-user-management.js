// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

function whoIsAdmin(utilisateurs) {
	const taille=utilisateurs.length;
	let tabNom=[];
for(let i=0;i<taille;i++){
	const unUtilisateur=utilisateurs[i];
	if(unUtilisateur.estAdmin===true){
		tabNom.push(unUtilisateur.nom);


	}
}
return tabNom;
}
const utilisateurs=[
	{
		nom:"joe",
		age:49,
		estAdmin:true
	},
	{
		nom:"chis",
		age:59,
		estAdmin:false
	},
	{
		nom:"Mike",
		age:40,
		estAdmin:true
	},
	{
		nom:"nkiere",
		age:30,
		estAdmin:true
	},
	{
		nom:"john",
		age:20,
		estAdmin: false
	}
]
console.log(whoIsAdmin(utilisateurs));
module.exports = {
	whoIsAdmin,
};


