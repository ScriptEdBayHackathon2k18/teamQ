console.log('hi');
var problemsArray = [];
var commentsArray = [];
var selectedProblem ;



$(".add-problem-button").click(function(){

  var problem = $(".add-problem-input").val();
  
  addProblem(problem);
  
});

$(".add-comment-button").click(function(){

  var comment = $(".add-comment-input").val();
  addComment(comment);
  
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

function addComment(comment){
  commentsArray.push(comment);
  updateBlackhole("blackholeComment",comment);
}

addProblem("problem");
addProblem("Another problem");

function updateBlackhole(blackhole,text){
  
  
  var element= document.createElement("div");
  
  $(element).click(function(){
    
  var popupWindow;
   if(){  
  popupWindow = window.open("/page-one.html");
  popupWindow.focus();
  }
    
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
	var x = $("blackhole" ).height();
  element.clientHeight;
	var y = $("blackhole").width();
  element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
  
}
