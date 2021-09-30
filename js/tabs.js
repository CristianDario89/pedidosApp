// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});
    
      // Show the first tab and hide the rest
$('#tabs-nav2 li:first-child').addClass('active');
$('.tab-content2').hide();
$('.tab-content2:first').show();

// Click function
$('#tabs-nav2 li').click(function(){
  $('#tabs-nav2 li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content2').hide();
  
  var activeTab2 = $(this).find('a').attr('href');
  $(activeTab2).fadeIn();
  return false;
});

// Show the first tab and hide the rest
$('#tabs-nav3 li:first-child').addClass('active');
$('.tab-content3').hide();
$('.tab-content3:first').show();

// Click function
$('#tabs-nav3 li').click(function(){
  $('#tabs-nav3 li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content3').hide();
  
  var activeTab3 = $(this).find('a').attr('href');
  $(activeTab3).fadeIn();
  return false;
});


	