console.log('hi');
var problemsArray = [];
var selectedProblem ;

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

function updateBlackhole(blackhole){

  var element= document.createElement("div");
  
  $(element).click(function(){
  
  window.open("/page-one.html");
    
  });
    
  
  element.classList.add("problem","reverse-rotating");
  
  var node = document.createTextNode(problem);

  element.appendChild(node);
  
  var blackhole = document.getElementsByClassName(blackhole)[0];
  
  blackhole.appendChild(element);
   
  
}

$("problem").click(function(){

  
  
});


addProblem("Gun Violence");



function getRandomPosition(problem) {
	var x = document.body.offsetHeight-problem.clientHeight;
	var y = document.body.offsetWidth-problem.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}
