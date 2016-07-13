var main = function() {

      window.fbAsyncInit = function() {
        FB.init({
          appId      : '95100348886',
          xfbml      : true,
          version    : 'v2.6'
        });
      };


	var simpleText = "helo_world";
	var finalSplitText = simpleText.split("_");
	var splitText = finalSplitText[0];

	var x = document.createElement("BUTTON");

	window.onload = function() {
//		document.getElementById("myLink").innerHTML=splitText;
//		document.getElementById("myLink").innerHTML=x;
	}
};

$(document).ready(main);