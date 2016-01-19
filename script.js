var categoryTemplate = Handlebars.compile($('#category').html());
var animalTemplate = Handlebars.compile($('#animal').html());

$('#category-nav').html(categoryTemplate(animals_data));

$('#category-nav li a').click(function (e) {
  var index = $(e.target).attr('data-index');
  
  $('#animal-list').html(animalTemplate(animals_data.category[index]));

  $(e.target).parent().siblings().each(function (ind, li) {
    $(li).removeClass('active');
  });
  $(e.target).parent().addClass('active');
});

$('#category-nav li a').first().click();
