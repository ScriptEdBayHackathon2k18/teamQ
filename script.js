console.log('hi');
var problemsArray = [];
var selectedProblem ;



$(".add-problem-button").click(function(){

  var problem = $(".add-problem-input").val();
  
  addProblem(problem);
  
});

$(".problem").click(function() {
    window.open("/page-one.html");
});

function addProblem(problem){
  problemsArray.push(problem);
  console.log(problemsArray);
  //alert(problemsArray);
  
  updateBlackhole("blackholeProblem",problem);
}
addProblem("problem");
addProblem("Another problem");

function updateBlackhole(blackhole,text){
  
  
  var element= document.createElement("div");
  
  $(element).click(function(){
  
  window.open("/page-one.html");
    
  });
  
  
  element.classList.add("problem","reverse-rotating");
  
  var node = document.createTextNode(text);

  element.appendChild(node);
  
  var blackhole = document.getElementsByClassName(blackhole)[0];
  
  blackhole.appendChild(element);
  
   var xy = getRandomPosition(element);
	element.style.top = xy[0] + 'px';
	element.style.left = xy[1] + 'px';
  
}

$("problem").click(function(){

  
  
});


addProblem("Gun Violence");

function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
  
}

