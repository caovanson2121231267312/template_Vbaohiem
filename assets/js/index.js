var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });

var swiper = new Swiper(".mySwiper1", {
        slidesPerView: 1,
        spaceBetween: 10,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });


var a =document.querySelectorAll(".from-login-hide");
for(var i = 0; i< a.length; i++){
  a[i].addEventListener("click",function(){
    document.querySelector(".from-login").style.display = "none";
    document.querySelector(".from-otp").style.display = "none";
  });
}

var check =true;

try {
  document.querySelector(".bannpo").addEventListener("click",function(){
    if(check ==true){
      document.querySelector(".chat").style.display = "block";
      check = false;
    }else{
      document.querySelector(".chat").style.display = "none";
      check = true;
    }
  
  })
}catch(err) {
  console.log(err.message);
}




document.querySelector(".fa-calendar-times").addEventListener("click",function(){
  document.querySelector(".search").style.display = "none";
})

function show_his(){
  document.getElementById("search").style.display="block";
}

$(document).ready(function(){

  $(".showlogin").click(function(){
    $(".from-login").show();
  });

});

