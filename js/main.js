 var dasIp="52.77.25.83";

 var authenticatingString= window.btoa("admin:user@con2016");





;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Full height
	var fullHeight = function() {
		if ( !isiPhone() || !isiPad() ) {
			$('.js-full-height').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-full-height').css('height', $(window).height());
			});
		}
	};

	// Scroll Next
	var ScrollNext = function() {
		$('body').on('click', '.scroll-btn', function(e){
			e.preventDefault();

			$('html, body').animate({
				scrollTop: $( $(this).closest('[data-next="yes"]').next()).offset().top
			}, 1000, 'easeInOutExpo');
			return false;
		});
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	// Counter
	var counter = function() {
		$('.fh5co-counter-style-1').waypoint( function( direction ) {
			var el = $(this.element).attr('class');
			if( direction === 'down' && !$(this.element).hasClass('animated')) {
				setTimeout( function(){
					// console.log($(this.element));
					$('.'+el).find('.js-counter').countTo({
						 formatter: function (value, options) {
				      	return value.toFixed(options.decimals);
				   	},
					});
				} , 200);
				
				$(this.element).addClass('animated');
					
			}
		} , { offset: '75%' } );


		$('.fh5co-counter-style-2').waypoint( function( direction ) {
			var el = $(this.element).attr('class');
			if( direction === 'down' && !$(this.element).hasClass('animated')) {
				setTimeout( function(){
					$('.'+el).find('.js-counter').countTo({
						 formatter: function (value, options) {
				      	return value.toFixed(options.decimals);
				   	},
					});
				} , 200);
				
				$(this.element).addClass('animated');
					
			}
		} , { offset: '75%' } );
	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvass, .js-fh5co-mobile-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	$('html').removeClass('mobile-menu-expanded');
	    	$('.js-fh5co-mobile-toggle').removeClass('active');
	    }
		});
	};

	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');	
			} else {
				$(this).addClass('active');	
			}
			event.preventDefault();
		});

	};

	// Off Canvass
	var offCanvass = function() {

		if ( $('#fh5co-offcanvass').length == 0 ) {
			if ( $('.fh5co-nav-style-1').length > 0 ) {
				$('body').prepend('<div id="fh5co-offcanvass" />');

				$('.fh5co-link-wrap').each(function(){
					$('#fh5co-offcanvass').append($(this).find('[data-offcanvass="yes"]').clone());	
				})
				$('#fh5co-offcanvass').find('.js-fh5co-mobile-toggle').remove();
				$('#fh5co-offcanvass, #fh5co-page').addClass($('.fh5co-nav-style-1').data('offcanvass-position'));
				$('#fh5co-offcanvass').addClass('offcanvass-nav-style-1');
			}		
			
			if ( $('.fh5co-nav-style-2').length > 0 ) {
				$('body').prepend('<div id="fh5co-offcanvass" />');

				$('.fh5co-link-wrap').each(function(){
					$('#fh5co-offcanvass').append($(this).find('[data-offcanvass="yes"]').clone());	
				})
				$('#fh5co-offcanvass').find('.js-fh5co-mobile-toggle').remove();
				$('#fh5co-offcanvass, #fh5co-page').addClass($('.fh5co-nav-style-2').data('offcanvass-position'));
				$('#fh5co-offcanvass').addClass('offcanvass-nav-style-2');
			}			
		}

		$('body').on('click', '.js-fh5co-mobile-toggle', function(e){
			var $this = $(this);
			$this.toggleClass('active');
			$('html').toggleClass('mobile-menu-expanded');

		});

		if ( $(window).width() < 769 ) {
			$('body, html').addClass('fh5co-overflow');
		}

		$(window).resize(function(){
			if ( $(window).width() < 769 ) {
				$('body, html').addClass('fh5co-overflow');
			}
			if ( $(window).width() > 767 ) {
				if ( $('html').hasClass('mobile-menu-expanded')) {
					$('.js-fh5co-mobile-toggle').removeClass('active');
					$('html').removeClass('mobile-menu-expanded');
				}
			}
		});

	};


	// Magnific Popup
	
	var imagePopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 10,
			titleSrc: 'title',
			gallery:{
				enabled:false
			}
		});
	};
	
	
	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};

//----socket

	/*var checkCEPStatus = function(){
		var ws = new WebSocket("ws://10.100.4.2:9763/outputwebsocket/WebSocket");
		ws.onmessage = function(e){
			var msg = JSON.parse(e.data);
			if(msg.event.payloadData.name == "xxFinishedxx" && $('.speech-stat-container').length == 0){
				$('.slides-container').append(	"<li class='speech-stat-container'>"
												+"<div class='fh5co-cover fh5co-cover-style-2 js-full-height' data-stellar-background-ratio='0.5' data-next='yes'>"
												+"<div class='fh5co-overlay'></div>"
												+"<div class='fh5co-cover-text'>"
												+"<div class='container-fluid'>"
												+"<div class='row'>"
												+"<div class='col-md-12 full-height js-full-height'>"
												+"<div class='fh5co-cover-intro'>"
												+"<h1 class='cover-text-lead wow fadeInUp' data-wow-duration='1s' data-wow-delay='.5s'>Speech Stats</h1>"
												+"<div class='graph-container'></div>"
												+"</div>"
												+"</div>"
												+"</div>"
												+"</div>"
												+"</div>"
												+"</div>"
												+"</li>")
				$('#page-container').superslides('update');
				$('#page-container').superslides('animate',4);
				$('#page-container').superslides('stop');
			}else if(msg.event.payloadData.name == "xxStartedxx" && $('.speech-stat-container').length != 0){
				$('.speech-stat-container').remove();
				$('#page-container').superslides('update');
				$('#page-container').superslides('animate',0);
				$('#page-container').superslides('start');
			}
		}
	}*/

		var checkCEPStatus = function(){
    		//var ws = new WebSocket("ws://10.100.4.2:9763/outputwebsocket/WebSocket");

    		var ws = new WebSocket("ws://52.77.25.83:9446/outputwebsocket/VoiceSocket");
    		ws.onmessage = function(e){
    		console.log(JSON.stringify(e));
    			var msg = JSON.parse(e.data);
    			console.log(msg);
    			if(msg.event.payloadData.name == "FINSH" && $('.speech-stat-container').length == 0){
/*
#TwordCount - count 33
#Tword_word  -- word

speakerTmg
#speakerName
#speakerTitle
#speakerDescription
*/
					var speakerImg="images/Speakers/Sanjiva.jpg"; //add the token
					var WordContainer="";


					var comingList=["API","Analytics","AppDev","Cloud", "Governance"," IOT","Identity","Integration"," Microservices","Vega","WSO2Con"];

                                  /*  Place: ""
                                    Time: 0
                                   */
					for(var i=0;i<comingList.length;i++){

							 var n=msg.event.payloadData.comingList[i],
							  wrd=comingList[i];
						      var Tword = " <div class='word-container'><div class='word-count'> <h2 class='count' id='TwordCount'>"+n+"</h2> <span>times</span> <div class='clearfix'></div>  </div>  <h3 class='word' id='Tword_word'>"+wrd+"</h3>  </div> ";

						     WordContainer+=Tword;
					}

					var spName= msg.event.payloadData.name;
					var spTitle= "Title"; //title speech
					var spDescription="Description";


    var element = "<li class='speech-stat-container'> <div class='fh5co-cover fh5co-cover-style-2 js-full-height' data-stellar-background-ratio='0.5' data-next='yes'> <div class='fh5co-overlay'></div> <div class='fh5co-cover-text'> <div class='container-fluid'> <div class='row'><div class='col-md-12 full-height js-full-height'><div class='fh5co-cover-intro'><h1 class='cover-text-lead wow fadeInUp' data-wow-duration='1s' data-wow-delay='.5s'>Speech Stats</h1><h5 class='wow fadeInUp beta-tag' data-wow-duration='1s' data-wow-delay='.9s'>Beta</h5> <div class='graph-container speech-stat'> <img class='preserve' src="+speakerImg+"/><div class='stat-container'><h2>You just listened to <span class='speaker-name' >"+spName+"</span></h2> <h3 id='speakerTitle'>"+spTitle+"</h3> <p  id='speakerDescription'>"+spDescription+"</p><div class='word-count-container'>"+WordContainer+"</div></div> </div> </div> </div> </div>  </div></div> </div>  </li>";




    				$('.slides-container').append(element);
    				$('#page-container').superslides('update');
    				$('#page-container').superslides('animate',4);
    				$('#page-container').superslides('stop');
    			}else if(msg.event.payloadData.name == "START" && $('.speech-stat-container').length != 0){
    				$('.speech-stat-container').remove();
    				$('#page-container').superslides('update');
    				$('#page-container').superslides('animate',0);
    				$('#page-container').superslides('start');
    			}
    		}
    	}






	// Document on load.
	$(function(){

		fullHeight();


		$('#page-container').superslides({
			play:500,
		});
		ajaxLatest();
        Hashtag();

		checkCEPStatus();



		setInterval(function () {
			ajaxLatest();
			Hashtag();
        }, 5000);


getTop5();

		$('#page-container').on('animating.slides',function(e,t){
		//	console.log(t.upcoming_slide);
			if(t.upcoming_slide == 0){

            }else if(t.upcoming_slide == 1){
				drawWordCloud("CommonWordCloud");
			}else if(t.upcoming_slide == 2){
				$('#CommunityGraph').css('display','block');
				$('#CommunityGraph').width('100%');
				setTimeout(function(){
					drawBubbleGraph("BubblePopularTopic")
				},500);
			}else if(t.upcoming_slide == 3){
				$('#CommunityGraph').css('display','block');
		   $('#CommunityGraph').width(t.upcoming_slide_width / 3);

					communityGraph("CommunityGraph");
					getTop5();

			}
		})
	});
}());


//-----------top5




function getTop5(){

	$.ajax({

                                url:  "https://52.77.25.83:9446/analytics/tables/TOP5",
                                beforeSend: function (xhr) {
                                       xhr.setRequestHeader("Authorization", "Basic "+authenticatingString);
                                 },
                                 method: "GET",

                                contentType: "application/json",
                                success: function (top) {
                                	//console.log(JSON.stringify(top));
                                			var j=1;
										  for(var i=0;i<5;i++){

                                        		 var nameID= "#ID"+(j);
                                                  var imageID= "#img"+(j);
                                                  var fullNameID="#Fname"+(j);

                                                  var countID="#count"+(j);
                                                  j++;

                                                  var url = "https://twitter.com/"+top[i].values.name+"/profile_image?size=original";

                                                  var tname="@"+top[i].values.name;

                                                //  $(imageID).attr("src",url);

                                                  $(fullNameID).html(top[i].values.fullName);
                                                    $(nameID).html(tname);
                                                    $(countID).html(top[i].values.degree);





                                            }

                                }


           });






}
