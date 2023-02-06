//Inspiration
//https://twitter.com/dsenneff/status/979074488066289664

var flag = 0;

$( ".email" ).keyup(function() {
  var letterCount = $(this).val().length;
  var count = letterCount/2.5;
  var countEyes = letterCount;
  
  if(letterCount >= 1 && letterCount < 34){
    $(".pupil, .pupil2").css("transform","translate("+count+"px, 7px)");
    $(".mouth").css("height",countEyes+"px");
  }
});

 setInterval(function(){
   if($(".pass").is(":focus") == false && flag == 0){
     $(".eye").hide();
     setTimeout(function(){ 
       $(".eye").show(); 
     }, 200);}
 }, 2500);

$( ".pass" ).focus(function() {
  resetEyes();
  if(flag == 0){
    $(".eye").hide();
  }
  if(flag == 1){
    $(".eye-right").show();
  }
});

$( ".email" ).focus(function() {
  $(".eye").show();
});

$(".show").on("click", function(){
  if(flag == 1){
    $(".eye-left").show();
  }
});

const textarea = document.getElementById('texa');
const btn = document.getElementById('btn');
btn.addEventListener('click', function handleClick() {
  textarea.value = '';
});


function show() {
  if(flag == 0){
    flag = 1;
  }else{
    flag = 0;
    $(".eye").hide();
  }
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function validate(){
  var email = $(".email").val();
  var rest = email;
  $(".eye").show();
  
  return rest;
}

$(".button").on("click", function(){
  resetEyes()
  if(!validate()){
    $(".pokemon").addClass("mad");
    $(".pokemon, .f").css("background-color","#d9aa78");
    $(".email").css("border-color","#e74c3c");
    
    setTimeout(function(){ 
    $(".pokemon").removeClass("mad");
    $(".pokemon, .f").css("background-color","#78d9ad");
    $(".email").css("border-color","#b8e994");
     }, 300);
  }else{
    $(".mouth").css("height","38px");
    $(".button").fadeOut("fast");
    $("input").fadeOut("fast");
    $("p").fadeOut("fast");
    $("span").fadeOut("fast");
    $(".pokemon").fadeOut("fast");
    $(".leafs").fadeOut("fast");
    
    $(".red").fadeIn();
    $(".circle").fadeIn();
    $(".squareC2").fadeIn();
    $(".container").css("width","150px");
    $(".container").css("height","150px");
    $(".container").css("transform-origin","-25px");
    $(".container").css("animation","catch 3s ease 1s forwards");
    $(".squareC2").css("animation","catch2 3s ease 1s forwards");
    $(".done").css("animation","done .5s ease 3s forwards");
  }
});

function resetEyes(){
  $(".pupil").css("transform","translate(13px, 7px)");
  $(".pupil2").css("transform","translate(0px, 7px)");
}