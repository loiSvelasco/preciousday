$(function(){

  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
	  new TypeIt('#msg', {
		  speed: 70,
		  startDelay: 3000,
		  afterComplete: (instance) => {
		  instance.destroy();
			new TypeIt('#frm', {
			  startDelay: 400,
			  afterComplete: () => 
			  {
				  $('.box').removeClass('hidden').addClass('show');
			  }
			})
			.type("Happy Birthday Precious!", { delay: 100 })
			.pause(600)
			.type(" - Louis ;)", {delay: 150 })
			.go();
		  }
		})
		.type("I hope the world give you the des", { delay: 100 }).pause(300)
		.move(-12, { delay: 100 })
		.type("s", { delay: 100 }).pause(300)
		.move(null, { to: "END", instant: true, delay: 400 })
		.type("ires and wishes of your heart. ", { delay: 100 })
		.pause(500)
		.type("I wish you all the best!", { delay: 100 })
		.go();
    });
  }
  
});