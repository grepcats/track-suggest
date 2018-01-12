$(document).ready(function() {
  $("form#track-quiz").submit(function(event) {
    var name = $("#name").val();
    var companyInput = $("input:radio[name=company]:checked").val();
    var osInput = $("input:radio[name=os]:checked").val();
    var scenarioInput = $("input:radio[name=scenario]:checked").val();
    var mobileInput = $("#mobile").val();
    var interfaceInput = $("#interface").val();

    //create array and set iteration variables
    var items = [companyInput, osInput, scenarioInput, mobileInput, interfaceInput];
    var csharp = 0;
    var mobile = 0;
    var ruby = 0;
    var design = 0;
    var php = 0;

    //count items in the array
    items.forEach(function(item) {
      if (item === "csharp") {
        csharp++;
      } else if (item === "mobile") {
        mobile++;
      } else if (item === "ruby") {
        ruby++;
      } else if (item === "design") {
        design++;
      } else if (item === "php") {
        php++;
      }
    });

    var newItems = [csharp, mobile, ruby, design, php];

    //at this point i have an array of numbers but i'm not sure how to select the largest one while also knowing the identity of it in the list. maybe this is a job for dictionaries? also what happens if there's a tie?


    //hide previous result
    $(".result").hide();
    $(".thanks").remove();

    //add "thanks" to result set
    $(".results").prepend("<p class='thanks'>Thanks, "+name+"! You should try...");

    //show option for users to explore other tracks
    $(".clickable").click(function() {
      $(".result").show();
      $("#dunno").hide();
      $("#explore").hide();
      $(".thanks").hide();
    });

    event.preventDefault();
  });



});
