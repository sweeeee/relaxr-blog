// var $readMore = $('.read-more')
// var $readLess = $('.read-less')
// var $readMoreContent = $('.read-more-content')
//
// $readMore.click(showReadMore)
//
// function showReadMore () {
//   $readMore.hide ()
//   $readLess.show()
//   $readMoreContent.slideToggle()
// }

$(document).ready(function(){
  $('.read-more1').on('click', function(event){
    event.preventDefault();
    var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    $('.post1').append(text);
    $(this).remove();
  });
  
  $('.read-more2').on('click', function(event){
    event.preventDefault();
    var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    $('.post2').append(text);
    $(this).remove();
  });
});
