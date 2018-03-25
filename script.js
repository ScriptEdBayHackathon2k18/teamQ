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

function updateBlackhole(problem){

  var element= document.createElement("div");
  
  $(element).click(function(){
  
  window.open("/page-one.html");
    
  });
    
  
  
  element.classList.add("problem");
  
  var node = document.createTextNode(problem);

  element.appendChild(node);
  
  var blackhole = document.getElementsByClassName("blackhole")[0];
  
  blackhole.appendChild(element);
   
  
}

$("problem").click(function(){

  
  
});


addProblem("Gun Violence");



