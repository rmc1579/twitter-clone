function CountChar (){
	var getchar = $(".tweet-compose").val().length;
	console.log(getchar);
	var charlenght = counter(getchar);
	if (charlenght <= 10){
		$("#char-count").css("color", "red");
		$("#tweet-submit").css("visibility", "");
	}
	if (charlenght >= 11){
		$("#char-count").css("color", "black");
	}
	if (charlenght >= 140){
		
	}
	if (charlenght < 0){
		$("#tweet-submit").css("visibility", "hidden");
	}
}

function counter(id){
	var maxchar = 140;
	var minchar = 0;
	if (id > minchar){
		minchar++;
		id = (maxchar - id);		
		$("#char-count").html(id);
	}
	if (id === minchar){
		minchar = 0;
		$("#char-count").html(minchar);
	}
	return id;
}

$(document).ready(function(){
	$("#char-count").css("visibility","hidden");
	$("#tweet-submit").css("visibility","hidden");
	HideRetweet();
	$(".tweet-compose").keydown(function(){
		$(this).css("height", "8.0em");
		$("#char-count").css("visibility","");
		$("#tweet-submit").css("visibility","");
	});

	$(".tweet-compose").change(function(){
		CountChar();
	});

	$("#tweet-submit").click(function(){
		var template = tweettemplate();
		$('#stream').before($(template));
		//$(template).insertAfter('#stream');
		HideRetweet();
		
	});

	
	$(".tweet-actions").on("click", function(){
		var getID = $(this).attr('id');
		alert(getID);
	});

});

function tweettemplate(){
	var id = 12345;
	id++;
	var user = $("#profile-summary").html();
	var newtweet = $(".tweet-compose").val();
	var tweet_actions = "<div id=\"actions"+id+"\"" + "class=\"tweet-actions\">" +
							"<ul>" +
								"<li><span class=\"icon action-reply\"></span> Reply</li>" +
								"<li><span class=\"icon action-retweet\"></span> Retweet</li>" +
								"<li><span class=\"icon action-favorite\"></span> Favorite</li>" +
								"<li><span class=\"icon action-more\"></span> More</li>" +
							"</ul>" +
						"</div>";

	var tweet_stats = "<div id=\"stats"+id+"\"" + "class=\"stats\">" +
								"<div class=\"retweets\">" +
									"<p class=\"num-retweets\">30</p>" +
									"<p>RETWEETS</p>" +
								"</div>" +
								"<div class=\"favorites\">" +
									"<p class=\"num-favorites\">6</p>" +
									"<p>FAVORITES</p>" +
								"</div>" +
								"<div class=\"users-interact\">" +
									"<div>" + 

										"<!-- BLACK DIAMOND: Implement the Bootstrap tooltips for when you hover over a user’s avatar image -->" +
										"<!-- HINT: Bootstrap has good documentation =) -->" +
										"<img src=\"img/alagoon.jpg\" />" +
										"<img src=\"img/vklimenko.jpg\" />" +
									"</div>" +
								"</div>" + 

								"<!-- BLACK DIAMOND: Make the timestamp below similar to how they look on Twitter (1h, 18m, 1m) and use the jQuery timeago plugin to make them automatic. -->" +
								"<!-- HINT: Refer to timeago documentation -->" +
								"<div class=\"time\">" +
									"1:04 PM - 19 Sep 13" +
								"</div>" +
							"</div>";

	var tweet_reply = "<div id=\"reply"+id+"\"" + "class=\"reply\">" +
							"<img class=\"avatar\" src=\"img/alagoon.jpg\" />" +
							"<textarea class=\"tweet-compose\" placeholder=\"Reply to @mybff\"/></textarea>" +
						"</div>";
	//alert (user);
	//alert(newtweet);
	
	 
	var template = "<div class='tweet'>" + user
				+ "<p class=\"tweet-text\">" + newtweet +"</p>"
				+ tweet_actions + tweet_stats + tweet_reply + "</div><!-- .tweet -->";
	
	return template;
}

function HideRetweet(){
	$(".stats").hide();
	$(".reply").hide();
	
}

