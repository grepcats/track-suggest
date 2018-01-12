$(document).ready(function() {
  $("form#track-quiz").submit(function(event) {
    var name = $("#name").val();
    var companyInput = $("input:radio[name=company]:checked").val();
    var osInput = $("input:radio[name=os]:checked").val();
    var mobileInput = $("#mobile").val();
    //console.log(name+companyInput+osInput+mobileInput);
    //hide previous result
    $(".result").hide();
    $(".thanks").remove();

    $(".results").prepend("<p class='thanks'>Thanks, "+name+"! You should study...");

    if ((companyInput === "large" || companyInput === "medium") && (osInput === "windows" || osInput === "dunno") && mobileInput === "No") {
      $("#csharp").show();
    } else if ((companyInput === "small" || companyInput === "medium") && osInput !== "windows" && mobileInput !== "Yes") {
      $("#ruby").show();
    } else if (companyInput === "design") {
      $("#design").show();
    } else {
      $("#dunno").show();
    }
    event.preventDefault();
  });



});
