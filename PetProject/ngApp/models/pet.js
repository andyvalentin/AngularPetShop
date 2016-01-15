var PetProject;
(function (PetProject) {
    var Models;
    (function (Models) {
        var Pet = (function () {
            function Pet(id, name, species, age, img, details) {
                this.id = id;
                this.name = name;
                this.species = species;
                this.age = age;
                this.img = img;
                this.details = details;
                this.id = id,
                    this.name = name,
                    this.species = species,
                    this.age = age,
                    this.img = img;
                this.details = details;
            }
            return Pet;
        })();
        Models.Pet = Pet;
    })(Models = PetProject.Models || (PetProject.Models = {}));
})(PetProject || (PetProject = {}));
//# sourceMappingURL=pet.js.map