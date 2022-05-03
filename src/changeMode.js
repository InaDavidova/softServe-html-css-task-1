if (localStorage.getItem("dark") == "true") {
  $("main").addClass("dark");
  $(".mode button").addClass("dark-mode-btn");
  $(".mode button").text("Dark");
  $("nav a").addClass("dark-nav");
  $("p").addClass("dark-p");
  $("label").addClass("dark-p");
  $(".folder").addClass("dark-folder");
  $("#slideshowDiv").addClass("dark-slideshowDiv");
  $(".next-destination").addClass("dark-vote");
}

$(document).ready(function () {
  $(".mode button").on("click", function (e) {

    if (localStorage.getItem("dark") == "true") {
      $("main").removeClass("dark");
      $("nav a").removeClass("dark-nav");
      $(".mode button").removeClass("dark-mode-btn").text("Light");
      $("p").removeClass("dark-p");
      $("label").removeClass("dark-p");
      $(".folder").removeClass("dark-folder");
      $("#slideshowDiv").removeClass("dark-slideshowDiv");
      $(".next-destination").removeClass("dark-vote");

      localStorage.setItem("dark", "false");

    } else {
      $("main").addClass("dark");
      $("nav a").addClass("dark-nav");
      $(".mode button").addClass("dark-mode-btn").text("Dark");
      $("p").addClass("dark-p");
      $("label").addClass("dark-p");
      $(".folder").addClass("dark-folder");
      $("#slideshowDiv").addClass("dark-slideshowDiv");
      $(".next-destination").addClass("dark-vote");

      localStorage.setItem("dark", "true");
    }
  });
});
