namespace PetProject.Models {
    import Pet = PetProject.Models.Pet
    export class PetCollection {
        public pets: Pet[];

        constructor() {
            this.pets = [
                new Pet(1, "Fido", "Australian Shepard", 3, "http://r.ddmcdn.com/w_830/s_f/o_1/cx_0/cy_220/cw_1255/ch_1255/APL/uploads/2014/11/dog-breed-selector-australian-shepherd.jpg", "Fido is our most recent addition to the paws of love family.  He is playful, loving and would be a great addition to a home with additional pets and children."),
                new Pet(2, "Nala", "Golden Retriever", 5, "http://www.myinterestingfacts.com/wp-content/uploads/2013/06/Funny-Dog.jpg", "Nala is a fantastic pup who is young and ready for training.  She has a loving and mild temperment.  Nala will make a great companion pet!"),
                new Pet(3, "Roxie", "Labrador", 11, "http://www.outsideonline.com/sites/default/files/styles/img_600x600/public/migrated-images/lab-family-dog_ph.jpg?itok=InjdcjlQ", "Roxie is a loyal and attentive Labrador.  While a bit older in age, this dog loves to play and run around so she'd be a perfect fit for a active owner.  Her adoption will include a cage and toys."),
                new Pet(4, "Thomas", "Wolf", 1, "http://assets1.learni.st/learning_preview/1306113/image/w583h583_145572-human-evolution-aided-by-dogs.jpg", "Thomas's story is quite unique.  He was taken from his pack by a traveling circus while his mother was away from the den.  He was trained to perform tricks in front of others.  Although he's been around people his whole life, we will only consider homes without children.  He requires a firm hand and an owner who is not afraid to be the \"alpha\" of the pack."),
                new Pet(5, "Snicker", "Bulldog", .5, "http://cdn.earthporm.com/wp-content/uploads/2015/05/bulldog-puppy-cute-dog-photography-37__605.jpg", "Snicker is such a loving boy!  Everyone at our adoption center has fallen in love with him.  Come quick, he will be gone in no time."),
                new Pet(6, "Joseph", "Beagle", 7, "http://www.drsfostersmith.com/images/articles/a_beagle_toprunner.jpg", "Joseph is energetic, attentive and playful.  Beagle's require a lot of exercise or they will start getting ansy at home, possibly destroying furniture or acting out in other way.  Please keep that in mind when considering Joseph as your next pet.")
            ];
        }
    }
}