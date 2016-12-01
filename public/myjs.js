//메뉴창
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#menu-sidebar-wrapper").toggleClass("active");
});

$("#menu-close").click(function(e) {
  e.preventDefault();
  $("#menu-sidebar-wrapper").toggleClass("active");
});

//로그인 후 채팅 창
$("#login-menu-close").click(function(e) {
  e.preventDefault();
  $("#login-sidebar-wrapper").toggleClass("active");
});
$("#login-menu-toggle").click(function(e) {
  e.preventDefault();
  $("#login-sidebar-wrapper").toggleClass("active");
});

//데이트 픽!
$('#sandbox-container input').datepicker({
});


//채팅창 관련

function btn1(){

  document.getElementById("chat_mode").style.display="inline";
  document.getElementById("request_mode").style.display="none";
  document.getElementById("travel_mode").style.display="none";
  //
  // console.log(geoip2.city(onSuccess, onError));
  // alert("it is" + ip() + "잉?");
}

function btn2(){
  document.getElementById("chat_mode").style.display="none";
  document.getElementById("request_mode").style.display="inline";
  document.getElementById("travel_mode").style.display="none";
}

function btn3(){
  document.getElementById("chat_mode").style.display="none";
  document.getElementById("request_mode").style.display="none";
  document.getElementById("travel_mode").style.display="inline";
}

function open_chat_conten(id){
  document.getElementById("chat_list").style.display="none";
  document.getElementById("chat_room").style.display="inline";
}

function close_chat_conten(){
  document.getElementById("chat_list").style.display="inline";
  document.getElementById("chat_room").style.display="none";
}

function add_chat_room(){
  document.getElementById('chat_list').innerHTML +=
  '<li onclick="add_chat_room()" class="list-group-item" style="margin-top:10px; left:5%; width:90%">'
  +'<div style="position:relative; ">'
  +'<img src="p/2.jpg" alt="face" width="60px" height="60px" style="display:inline-block; position:relative; border-radius:60px; left:0px; top:-10px">'
  +'<div  style="position:relative; display:inline-block; text-align:left; left:10px; top:10px"> 쿠리사마'
  +'<div style="display:inline-block"> (1) </div>'
  +'<div> 안녕하세요~직거래 언제 가능 하세요! </div>'
  +'<div> 오전 12:36 </div>'
  +'</div>'
  +'<img src="p/2.jpg" class="pull-right" alt="face" width="60px" height="60px" style="display:inline; position:relative; right:0px; top:10px">'
  +'</div>'
  +'</li>';
}
