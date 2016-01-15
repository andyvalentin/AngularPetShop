var PetProject;
(function (PetProject) {
    angular.module("PetProject", ["ngRoute"])
        .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
            templateUrl: "/ngApp/views/home.html",
            controller: PetProject.Controller.HomeController,
            controllerAs: "controller"
        })
            .when("/details/:id", {
            templateUrl: "/ngApp/views/details.html",
            controller: PetProject.Controller.DetailsController,
            controllerAs: "controller"
        }).otherwise({ redirectTo: "/" });
        $locationProvider.html5Mode({ enabled: true, requireBase: false });
    });
})(PetProject || (PetProject = {}));
//# sourceMappingURL=app.js.map