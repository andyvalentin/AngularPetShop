namespace PetProject.Controller {
    import Pet = PetProject.Models.Pet;
    import PetCollection = PetProject.Models.PetCollection;
    let pets = new PetCollection().pets;
    export class HomeController {
        public pets: Pet[] = pets;
    }
}