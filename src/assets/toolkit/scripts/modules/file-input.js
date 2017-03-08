$(function() {
	  if ($('.select-options ul li').hasClass('selected')) {
	    $('.select .input').text($('.select-options li.selected > span:first-child').text());
	  } else {
	    $('.select .input').text($('.select-options li:first-child > span:first-child').text());
	  }
	  $('.select').click(function() {
	    $('.select-options').toggleClass('visible');
	  });
	  $('.select-options li').click(function() {
	    $('.selected').removeClass('selected');
	    $(this).addClass('selected');
	    $('.select .input').text($(this).find('span:first-child').text());
	  });
});

$(function() {
	  if ($('.days-select-options ul li').hasClass('selected')) {
	    $('.days-select .days-input').text($('.days-select-options li.selected > span:first-child').text());
	  } else {
	    $('.days-select .days-input').text($('.days-select-options li:first-child > span:first-child').text());
	  }
	  $('.days-select').click(function() {
	    $('.days-select-options').toggleClass('visible');
	  });
	  $('.days-select-options li').click(function() {
	    $('days-select').removeClass('selected');
	    $(this).addClass('selected');
	    $('.days-select .days-input').text($(this).find('span:first-child').text());
	  });
});

$(function() {
	  if ($('.hours-select-options ul li').hasClass('selected')) {
	    $('.hours-select .hours-input').text($('.hours-select-options li.selected > span:first-child').text());
	  } else {
	    $('.hours-select .hours-input').text($('.hours-select-options li:first-child > span:first-child').text());
	  }
	  $('.hours-select').click(function() {
	    $('.hours-select-options').toggleClass('visible');
	  });
	  $('.hours-select-options li').click(function() {
	    $('hours-select').removeClass('selected');
	    $(this).addClass('selected');
	    $('.hours-select .hours-input').text($(this).find('span:first-child').text());
	  });
});


$(function() {
	  if ($('.info-select-options ul li').hasClass('selected')) {
	    $('.info-select .info-input').text($('.info-select-options li.selected > span:first-child').text());
	  } else {
	    $('.info-select .info-input').text($('.info-select-options li:first-child > span:first-child').text());
	  }
	  $('.info-select').click(function() {
	    $('.info-select-options').toggleClass('visible');
	  });
	  $('.info-select-options li').click(function() {
	    $('info-select').removeClass('selected');
	    $(this).addClass('selected');
	    $('.info-select .info-input').text($(this).find('span:first-child').text());
	  });
});





    

