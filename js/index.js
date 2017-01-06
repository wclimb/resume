$(function(){
	setTimeout(function(){
		$('#loading').hide();
		$('.page-1-1').addClass('animated slideInDown');
		$('.page-1-2').addClass('animated bounceInLeft');
		$('.page-1-3').addClass('animated bounceInRight')
	},3500)
	$('#wclimb').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#1bbc9b'],
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu: '#menu',
		afterLoad: function(anchorLink,index){
			switch(index){
				case 1:
					$('.page-1-1').addClass('animated slideInDown');
					$('.page-1-2').addClass('animated bounceInLeft');
					$('.page-1-3').addClass('animated bounceInRight')
				
				break;
				case 2:
					$('.page-2 h4').addClass('animated bounceInDown')
					$('.product1').addClass('animated fadeInDown')
					$('.product2').addClass('animated fadeInUp')
				break;
				case 3:
					$('.page-3 h3').addClass('animated bounceInUp')
					$('.page-3-1').addClass('animated slideInLeft')
					$('.page-3-2').addClass('animated fadeInRightBig')
				break;
				case 4:
					$('.page-4 h3').addClass('animated rubberBand')
					$('.page-4-1').addClass('animated swing')
					$('.page-4-2').addClass('animated fadeInRightBig')
					$('.page-4-3').addClass('animated lightSpeedIn')
					$('.page-4-4').addClass('animated fadeInLeftBig')
				break;
				default:
				break;
			}
		}
	});
});