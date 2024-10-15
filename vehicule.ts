// Définir l'interface Véhicule
interface Vehicule {
    make: string;
    model: string;
    year: number;
    start(): void;  // Méthode qui renvoie void
}

// Implémenter la classe Voiture qui implémente l'interface Véhicule
class Voiture implements Vehicule {
    make: string;
    model: string;
    year: number;

    // Constructeur pour initialiser les propriétés
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Implémentation de la méthode start
    start(): void {
        console.log("Car engine started");
    }
}

// Créer une instance de la classe Voiture
const maVoiture = new Voiture("Toyota", "Corolla", 2021);

// Appeler la méthode start
maVoiture.start();  // Devrait afficher "Car engine started" dans la console
