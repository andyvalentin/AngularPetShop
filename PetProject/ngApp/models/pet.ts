namespace PetProject.Models {
    export class Pet {

        constructor(public id: number, public name: string, public species: string, public age: number, public img:string, public details: string) {
                this.id = id,
                this.name = name,
                this.species = species,
                this.age = age,
                this.img = img  
                this.details = details       
        }
    }
}