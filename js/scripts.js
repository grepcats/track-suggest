$(document).ready(function() {
  $("form#track-quiz").submit(function(event) {
    var name = $("#name").val();
    var companyInput = $("input:radio[name=company]:checked").val();
    var osInput = $("input:radio[name=os]:checked").val();
    var mobileInput = $("#mobile").val();
    var interfaceInput = $("#interface").val();
    console.log(name+companyInput+osInput+mobileInput+interfaceInput);
    //hide previous result
    $(".result").hide();
    $(".thanks").remove();

    $(".results").prepend("<p class='thanks'>Thanks, "+name+"! You should study...");

    if (interfaceInput === "Yes") {
      $("#design").show();
    } else if ((mobileInput === "Yes" || mobileInput === "Maybe") && osInput === "android") {
      $("#java").show();
    } else if ((companyInput === "large" || companyInput === "medium") && (osInput === "windows" || osInput === "dunno")) {
      $("#csharp").show();
    } else if (companyInput === "design" || interfaceInput !== "No") {
      $("#design").show();
    } else if ((companyInput === "small" || companyInput === "medium") && osInput !== "windows" && mobileInput !== "Yes") {
      $("#ruby").show();
    } else {
      $("#dunno").show();
    }
    event.preventDefault();
  });



});
