var PetProject;
(function (PetProject) {
    var Controller;
    (function (Controller) {
        var PetCollection = PetProject.Models.PetCollection;
        var pets = new PetCollection().pets;
        var HomeController = (function () {
            function HomeController() {
                this.pets = pets;
            }
            return HomeController;
        })();
        Controller.HomeController = HomeController;
    })(Controller = PetProject.Controller || (PetProject.Controller = {}));
})(PetProject || (PetProject = {}));
//# sourceMappingURL=homeController.js.map