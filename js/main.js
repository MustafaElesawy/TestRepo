/*
  ################### start ######################
  ############### Amir Mostafa ###################
  ################################################
 */
document.getElementById("btn").addEventListener("mousemove",function () {
  document.getElementById("btn").classList.add("mainBackColor");
  })
  document.getElementById("btn").addEventListener("mouseleave",function () {
    this.classList.remove("mainBackColor");
    })
$(window).scroll(function(){

  var top=$(".about").offset().top;
  if($(document).scrollTop()>top)
  {
    
    $(".navbar").attr("style","background-color:black !important");
  }
  else
  {
    $(".navbar").css("background-color","transparent","!important")
  }

  if($(document).scrollTop()>top)
  {
    
    $(".top").show(1000);
  }
  else
  {
    $(".top").hide(1000);
  }
});
$(".top").hide(1000);


$('.top').click(function(){
  
  // window.scrollTo({ top: 0, behavior: 'smooth' });
  
  $("body").animate({scrollTop:0},1000)
});


$(document).ready(function(){

  $(".overlay").fadeOut(2000);
});

/*
  ################### End ######################
  ############### Amir Mostafa ###################
  ################################################
 */
//start  About section Ahmed Elhossiny
$(".sub-img").click(function(){
  let mainImg= $(this).attr("src");
  $('.team-p').attr("src",mainImg);
  $('.content').slideDown(2000);
  $('.content').val(2000);

  $('.ahmed').css("display","block");
 })

 $(".sub-img").click(function(){
  let mainImg= $(this).attr("src");
  $('.team-p').attr("src",mainImg);
  $('.content').slideDown(2000);
  $('.amir').css("display","block");
 })

//end  About section Ahmed Elhossiny


