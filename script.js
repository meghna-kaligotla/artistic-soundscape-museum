

document.getElementById("generate-button").addEventListener("click", function() {
    
    // WORD ARRAY 1 (PAINTING COLOR)
    var paintingArray = ["muted", "bright", "warm", "cool", "earthy"];
    // WORD ARRAY 2 (ART STYLE)
    var artArray = ["cubism", "art deco", "pop art", "surrealism", "graffiti"];
    // WORD ARRAY 2 (SOUND EFFECT)
    var soundArray = ["rain", "arctic wind", "thunder", "campfire", "starry"];



    // Get a random index from the array
    var randomIndex1 = Math.floor(Math.random() * paintingArray.length);
    var randomIndex2 = Math.floor(Math.random() * artArray.length);
    var randomIndex3 = Math.floor(Math.random() * soundArray.length);

    // Get the word at the random index, set condition up
    var painting_color = paintingArray[randomIndex1];
    var art_style = artArray[randomIndex2];
    //console.log(art_style);
    var sound_effect = soundArray[randomIndex3];

    // Display the random word on the page
    document.getElementById("painting-color").textContent = painting_color;
    document.getElementById("art-style").textContent = art_style;
    document.getElementById("sound-effect").textContent = sound_effect;



    // PAINTING 1

    // Get the image element by its ID
    var image1 = document.getElementById("painting-1");
    // Get the image element by its ID
    var image2 = document.getElementById("painting-2");
    // Get audio element and source by its ID
    var audio = document.getElementById("audio");
    var source = document.getElementById("audioSource");
    // Get gif element by ID
    var gif = document.getElementById("gif");

    // Change the image source based on the condition
    if (painting_color == "muted") {
        image1.src = "./images/muted.png";
        image1.alt = "Muted painting";
    } else if (painting_color == "bright") {
        image1.src = "./images/bright.png";
        image1.alt = "Bright painting";
    } else if (painting_color == "warm") {
        image1.src = "./images/warm.png";
        image1.alt = "Warm painting";
    }  else if (painting_color == "cool") {
        image1.src = "./images/cool.png";
        image1.alt = "Cool painting";
    } else {
        image1.src = "./images/earthy.png";
        image1.alt = "Earthy painting";
    }



    // DISPLAY PAINTING 2

    // Change the image source based on the condition
    if (art_style == "cubism") {
        image2.src = "./images/cubism.png";
        image2.alt = "Cubism painting";
    } else if (art_style == "art deco") {
        image2.src = "./images/artdeco.png";
        image2.alt = "Art Deco painting";
    } else if (art_style == "pop art") {
        image2.src = "./images/popart.png";
        image2.alt = "Pop Art painting";
    }  else if (art_style == "surrealism") {
        image2.src = "./images/surrealism.png";
        image2.alt = "Surrealism painting";
    } else {
        image2.src = "./images/graffiti.png";
        image2.alt = "Graffiti painting";
    }

    
    
    
    
    // SOUNDSCAPE, SOUND EFFECTS FROM SOUNDSTRIPE
    // Change the image source based on the condition
    if (sound_effect == "rain") {
        source.src = "./images/rain.mp3";
        audio.load();
        audio.play();
        gif.src = "./images/rain.gif";

    } else if (sound_effect == "arctic wind") {
        source.src = "./images/arcticwind.mp3";
        audio.load();
        audio.play();
        gif.src = "./images/arcticwind.gif";
    } else if (sound_effect == "thunder") {
        source.src = "./images/thunder.mp3";
        audio.load();
        audio.play();
        gif.src = "./images/thunder.gif";
    }  else if (sound_effect == "campfire") {
        source.src = "./images/campfire.mp3";
        audio.load();
        audio.play();
        gif.src = "./images/campfire.gif";
    } else {
        source.src = "./images/starry.mp3";
        audio.load();
        audio.play();
        gif.src = "./images/starry.gif";

    }
});

 





