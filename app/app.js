function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  // console.log(hashTag + " " + pageID);
  $.get(`pages/${pageID}/${pageID}.html`, function (data) {
    // console.log("data" + data);
    $("#app").html(data);
  });
}

function initURLlisteners() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function initListeners() {
  $(".bars").click(function (e) {
    // console.log("clicked");
    $(".bars").toggleClass("active");
    $(".links").toggleClass("active");
    // turns added class on and off
  });
  $(".links a").click(function (e) {
    // console.log("clicked");
    $(".bars").toggleClass("active");
    $(".links").toggleClass("active");
  });

  $("#submit").click(function (){
    e.preventDefault();
    console.log("HERE");
    let email = $("#email").val ();
    let password = $("#password").val ();
    console.log("input" + email + '' + password);
  });


  $("#edit").click(function (e) {
    e.preventDefault();
    let userObj = {
        fname: "User",
        lname: "Object",
        email: "user@object.com",
        password: "********"
    };
    console.log(userObj);
    $("#fname").val (userObj.fname);
    $("#lname").val (userObj.lname);
    $("#email").val (userObj.email);
    $("#password").val (userObj.password);   
    console.log("input" + fname + lname + email + password);

  })
}

$(document).ready(function () {
  initListeners();
  initURLlisteners();
});
