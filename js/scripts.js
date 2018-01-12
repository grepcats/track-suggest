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

    //find track with most number of responses & assign that to var winner
    var winner = "";
    var biggest = Math.max(csharp, mobile, ruby, design, php)
    if (csharp === 0 && mobile === 0 && ruby === 0 && design === 0 & php === 0) {
      winner = "dunno";
    } else if (csharp === biggest) {
      winner = "csharp";
    } else if (mobile === biggest) {
      winner = "mobile";
    } else if (ruby === biggest) {
      winner = "ruby";
    } else if (design === biggest) {
      winner = "design";
    } else if (php === biggest) {
      winner = "php";
    };
    console.log(csharp+", "+mobile+", "+ruby+", "+design+", "+php)
    //hide previous result
    $(".result").hide();
    $(".thanks").remove();

    //add "thanks" to result set
    $(".results").prepend("<p class='thanks'>Thanks, "+name+"! You should try...");

    //show winner
    $("#"+winner).slideDown();
    $("#curious").show();

    //show option for users to explore other tracks
    $(".showOther").click(function() {
      $(".result").slideDown();
      $("#done").show();
      $("#dunno").hide();
      $("#curious").hide();
      $(".thanks").hide();
    });

    $(".goBack").click(function() {
      $(".result").slideUp();
      $("#done").hide();
    })

    event.preventDefault();
  });



});
