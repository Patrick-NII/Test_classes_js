class Voiture {
    constructor(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }

    afficherDetails() {
        console.log(`${this.annee} ${this.marque} ${this.modele}`);
    }
}

const maVoiture = new Voiture('Toyota', 'Corolla', 2020);
maVoiture.afficherDetails();  // Affiche "2020 Toyota Corolla"
