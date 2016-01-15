var PetProject;
(function (PetProject) {
    var Controller;
    (function (Controller) {
        var PetCollection = PetProject.Models.PetCollection;
        var pets = new PetCollection().pets;
        var DetailsController = (function () {
            function DetailsController($routeParams) {
                this.pet = pets.filter(function (p) { return p.id == $routeParams["id"]; })[0];
            }
            return DetailsController;
        })();
        Controller.DetailsController = DetailsController;
    })(Controller = PetProject.Controller || (PetProject.Controller = {}));
})(PetProject || (PetProject = {}));
//# sourceMappingURL=detailsController.js.map