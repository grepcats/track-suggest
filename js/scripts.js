$(document).ready(function() {
  $("form#track-quiz").submit(function(event) {
    var name = $("#name").val();
    var companyInput = $("input:radio[name=company]:checked").val();
    var osInput = $("input:radio[name=os]:checked").val();
    var mobileInput = $("#mobile").val();
    console.log(name+companyInput+osInput+mobileInput);

    event.preventDefault();
  });


});
