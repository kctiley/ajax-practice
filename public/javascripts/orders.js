
$(document).ready(function(){

  $.ajax({
    type: 'GET',
    url: '/orders',
    success: function(orders){
      $.each(orders, function(i, order){
        $('#listOfOrders').append('<li> Name: ' + order.name  + '</li><ul> Drink: ' + order.drink + '</ul>');
      })
    }
  })
 

})