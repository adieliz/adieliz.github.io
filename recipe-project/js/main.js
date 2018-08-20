//when user clicks on hamburger (in mobile and smaller screen state), nav slides down

//when user clicks again on hamburger, expanded nav slides up

//when user clicks on "more deliciousness," below each of the recipe sections, links to more recipes appear. (to happen below each of the six sections)

//photo gallery -- collection of claudia's photos. when user clicks on next, another photo appears. repeat this process for 12 or so photos.


$("#button1").on("click", function(){
  $(".diplist").toggleClass("active");
});

$("#button2").on("click", function(){
  $(".pastalist").toggleClass("active");
});

$("#button3").on("click", function(){
  $(".meatlist").toggleClass("active");
});

$("#button4").on("click", function(){
  $(".seafoodlist").toggleClass("active");
});

$("#button5").on("click", function(){
  $(".sidelist").toggleClass("active");
});

$("#button6").on("click", function(){
  $(".dessertlist").toggleClass("active");
});

let imageNumber = 0;

$("#next").on("click", function() {
  if (imageNumber < 3) {
    imageNumber += 1;
  } else {
    imageNumber = 0;
  }

  console.log(imageNumber);

  $(".myPhotos").hide();
  $(".myPhotos").eq(imageNumber).show();
});

$("#previous").on("click", function() {
  if (imageNumber > 0) {
    imageNumber -= 1;
  } else {
    imageNumber = 3;
  }

  console.log(imageNumber);

  $(".myPhotos").hide();
  $(".myPhotos").eq(imageNumber).show();
});
