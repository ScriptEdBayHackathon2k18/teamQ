console.log('hi');
var problemsArray = [];

$(".add-problem-button").click(function(){

  var problem = $(".add-problem-input").val();
  
  addProblem(problem);
  
});

function addProblem(problem){
  problemsArray.push(problem);
  console.log(problemsArray);
}

function updateBlackhole(){

  
  
}
addProblem("Gun Violence");
