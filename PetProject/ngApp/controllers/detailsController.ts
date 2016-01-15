namespace PetProject.Controller {
    import Pet = PetProject.Models.Pet;
    import PetCollection = PetProject.Models.PetCollection;
    let pets: Pet[] = new PetCollection().pets;

    export class DetailsController {
        public pet: Pet;

        constructor($routeParams) {
            this.pet = pets.filter((p) => p.id == $routeParams["id"])[0];
        }
    }
}