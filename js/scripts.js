
$(document).ready(function() {
  $("form#track-quiz").submit(function(event) {
    var name = $("#name").val();
    var companyInput = $("input:radio[name=company]:checked").val();
    var osInput = $("input:radio[name=os]:checked").val();
    var scenarioInput = $("input:radio[name=scenario]:checked").val();
    var mobileInput = $("#mobile").val();
    var interfaceInput = $("#interface").val();

    console.log(name+", "+companyInput+", "+osInput+", "+scenarioInput+", "+mobileInput+", "+interfaceInput);

    //hide previous result
    $(".result").hide();
    $(".thanks").remove();

    //add "thanks" to result set
    $(".results").prepend("<p class='thanks'>Thanks, "+name+"! You should try...");

    if (scenarioInput === "dunno") {
      $("#dunno").show();
      $("#explore").show();
    } else if (interfaceInput !== "No" && scenarioInput === "design") {
      $("#design").show();
      $("#explore").show();
    } else if ((mobileInput === "Yes" || mobileInput === "Maybe") && osInput === "android" && scenarioInput === "mobile") {
      $("#java").show();
      $("#explore").show();
    } else if ((companyInput === "large" || companyInput === "medium") && (osInput === "windows" || osInput === "dunno") && (scenarioInput === "csharp" || scenarioInput === "ruby" || scenarioInput === php)) {
      $("#csharp").show();
      $("#explore").show();
    } else if (companyInput === "design" || interfaceInput !== "No") {
      $("#design").show();
      $("#explore").show();
    } else if ((companyInput === "small" || companyInput === "medium") && osInput !== "windows" && mobileInput !== "Yes") {
      $("#ruby").show();
      $("#explore").show();
    } else {
      $("#dunno").show();
      $("#explore").show();
    }

    $(".clickable").click(function() {
      $(".result").show();
      $("#dunno").hide();
      $("#explore").hide();
      $(".thanks").hide();
    });
    event.preventDefault();
  });



});
