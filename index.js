// Part 1 ***************************************************************
// 1. Create 3 objects that are based on fictitious people

var character0 = {
        // Image
        image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_mas_mob_02.jpg",
        // Hero Name
        heroName: "Iron Man",
        // Alter Ego 
        alterEgo: "(Tony Stark)",
        // Bio 
        bio: "Genius. Billionaire. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
        // powers and Abilities
        powers: "Flight, AI, Amored Suit, Super Strength + Durability"
};

var character1 = {
        // Image
        image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_ons_mas_dsk_02_1.jpg",
        // Hero Name
        heroName: "Hulk",
        // Alter Ego 
        alterEgo: "(Bruce Banner)",
        // Bio 
        bio: "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powersed by his rage.",
        // powers and Abilities
        powers: "Superhuman Strength, Long Distance Jumping, Hulk Smash, Durability and Regeneration, Genius Intelligence"
};

var character2 = {
        // Image
        image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_ons_mas_mob_01_0.jpg",
        // Hero Name
        heroName: "Thor",
        // Alter Ego 
        alterEgo: "(Thor Odinson)",
        // Bio 
        bio: "The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.",
        // powers and Abilities
        powers: "Summoning Mjolnir, Flight, God of Thunder, Stormbreaker & The Bifrost"
};

// Part 2 ***************************************************************
// 1. Create a funciton that will act as a constructor of person objects and create three new persons.

function Character (image, heroName, alterEgo, bio, powers) {
    this.image = image;
    this.heroName = heroName;
    this.alterEgo = alterEgo;
    this.bio = bio;
    this.powers = powers;
}


var character3 = new Character(
        // Image
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_mas_dsk_02.jpg",
        // Hero Name
        "Captain America",
        // Alter Ego 
        "(Steve Rogers)",
        // Bio 
        "Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
        // powers and Abilities
        "Speed & Stamina, Skilled Fighter, Acrobat, Vibranium Shield"
);

var character4 = new Character(
        // Image
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw-com_mas_dsk_02.jpg",
        // Hero Name
        "Black Widow",
        // Alter Ego 
        "(Natasha Romanoff)",
        // Bio 
        "Despite super spy Natasha Romanoff’s checkered past, she’s become one of S.H.I.E.L.D.’s most deadly assassins and a frequent member of the Avengers.",
        // powers and Abilities
        "Master Fighter, Stength and Agility, Widow's Bite, Master Hacker"
);

var character5 = new Character(
    // Image
    "https://terrigen-cdn-dev.marvel.com/content/prod/1x/018hcb_ons_mas_dsk_01_0.jpg",
    // Hero Name
    "Hawkeye",
    // Alter Ego 
    "(Clint Barton)",
    // Bio 
    "A master marksman and longtime friend of Black Widow, Clint Barton serves as the Avengers’ amazing archer.",
    // powers and Abilities
    "Master Fighter, Stength and Agility, Widow's Bite, Master Hacker"
);


// 2. Put these objects in an array
var characters = [character0, character1, character2, character3, character4, character5];
// 3. Implement a way to cycle through the objects in the array listing thename of each object.
for (var i=characters.length-1; i>=0; i--) {
    $("h2").after("<button type='button' class='list-group-item list-group-item-action text-truncate character' "+ "id ='character"+i +"'>"+ characters[i].heroName +"</button>");
}

$(".character").on("click", function(){
        var selectedCharacter = $(this).attr("id");
        var characterIndex = selectedCharacter.charAt(selectedCharacter.length-1);
        $(".card").css("visibility", "visible")
        displayCharacter(characterIndex);        
});

function displayCharacter(index) {
        $(".hero-image").attr("src", characters[index].image);
        $(".hero-name").text(characters[index].heroName);
        $(".alter-ego").text(characters[index].alterEgo);
        $(".bio").text(characters[index].bio);
        $(".powers").text(characters[index].powers);
}