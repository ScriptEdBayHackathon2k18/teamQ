console.log('hi');
var problemsArray = [];

$(".add-problem-button").click(function(){

  var problem = $(".add-problem-input").val();
  
  addProblem(problem);
  
});

function addProblem(problem){
  problemsArray.push(problem);
  console.log(problemsArray);
  //alert(problemsArray);
  updateBlackhole(problem);
}

function updateBlackhole(pro){

  var element= document.createElement("div");
  element.addClass("problem");
  
  
}
addProblem("Gun Violence");
