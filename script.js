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
    if ( document.URL === "https://quackathon.glitch.me/" ) {
    popupWindow = window.open("/page-one.html?problemtitle=" + text);
    popupWindow.focus();
    } else if(document.URL === "https://quackathon.glitch.me/page-one.html"){
     alert("User says: " + text);
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
  
    
  //the below 2 lines state that the variable degrees will get the rotation of the blackhole. Then
  var degrees = getRotationDegrees(blackhole);
  //alert(degrees);
  console.log(degrees);
  //$(element).css({'transform' : 'rotate(-'+ degrees +'deg)'});
  
  //$(element).rotate(-1 * degrees)
  
  $(element).css("color",getRandomColor());

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

function getRotationDegrees(obj) {
    var matrix = $(obj).css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}

function changeHeading(title){

$(".heading").html(title);
  
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function randomFont () {
   var fonts = [Montserrat,Raleway,] 
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
