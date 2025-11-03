// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.

const baseDeDonnees = [
    {
        id: 1,
        nom: "nkiere",
        email: "nkierejoe@gmail.com",
        password: "J1234#!",
        estConnecte: true,
        estBloque: false
    },
    {
        id: 2,
        nom: "bobette",
        email: "bobette@mail.com",
        password: "B1234#!",
        estConnecte: false,
        estBloque: true
    },
    {
        id: 3,
        nom: "machack",
        email: "mechack@gmail.com",
        password: "M1234#!",
        estConnecte: false,
        estBloque: false
    },
    {
        id: 4,
        nom: "exauce",
        email: "exauce@gmail.com",
        password: "E1234#!",
        estConnecte: true,
        estBloque: false
    },
    {
        id: 5,
        nom: "celio",
        email: "celio@gmail.com",
        password: "C1234#!",
        estConnecte: false,
        estBloque: false
    },
    {
        id: 6,
        nom: "jean-dino",
        email: "jean-dino@gmail.com",
        password: "JD1234#!",
        estConnecte: true,
        estBloque: false
    },
    {
        id: 7,
        nom: "Merdi",
        email: "merdi@gmail.com",
        password: "M1234#!",
        estConnecte: true,
        estBloque: false
    }
];

function signUp(nom, email, password, confirmPassword) {
    if (password !== confirmPassword) {
        return "Erreur: les mots de passe ne correspondent pas"

    }
    for (let i = 0; i < baseDeDonnees.length; i++) {
        const utilisateur = baseDeDonnees[i];
        if (utilisateur.email === email) {
            return "Erreur: cet email existe déjà"
        }

    }
    const id = baseDeDonnees.length + 1;
    const newUser = {
        id: id,
        nom: nom,
        email: email,
        password: password,
        estConnecte: false,
        estBloque: false
    }
    baseDeDonnees.push(newUser);
    return newUser;


}
console.log(signUp("joe", "joe@gmail.com", "Joe", "Joe"));

function login(email, password) {
    for (let i = 0; i < baseDeDonnees.length; i++) {
        const utilisateur = baseDeDonnees[i];

        // On vérifie si on a trouvé le bon utilisateur
        if (utilisateur.email === email) {

            // Si le mot de passe ne correspond pas
            if (utilisateur.password !== password) {
                return "Erreur: mot de passe incorrect";
            }

            // Si l'utilisateur est bloqué
            if (utilisateur.estBloque === true) {
                return "Erreur: utilisateur bloqué";
            }

            // Sinon, tout est bon → on le connecte
            utilisateur.estConnecte = true;
            return utilisateur;
        }
    }
    //   Si on a parcouru tout le tableau sans trouver d'email correspondant
    return "Erreur: utilisateur non trouvé";
}
console.log(login("joe@gmail.com", "Joe"))


module.exports = { baseDeDonnees, signUp, login };
