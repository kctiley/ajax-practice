
$(document).ready(function(){

  console.log('document loaded')

  //Cach orders, name, and drink
  var $orders = $('#listOfOrders');
  var $inputName = $('#inputName');
  var $inputDrink = $('#inputDrink');
  var addOrder= function(input){
    $orders.append('<div style=\'padding: 5px; border: 2px solid blue; width: 25%\'><ul> Name: ' + input.name  + '</ul><ul> Drink: ' + input.drink + '</ul></div>');
  }
   

  //Show database orders on page load
  $.ajax({
    type: 'GET',
    url: '/orders',
    success: function(orders){
      $.each(orders, function(i, order){
        addOrder(order);
      })
    },
    error: function(){
      alert('Error loading orders')
    }
  })
 
  //Add order
  $('#btnAdd').on('click', function(){

    console.log('btnAdd has been clicked')

    var order = {
      name: $inputName.val(),
      drink: $inputDrink.val()
    };

    $.ajax({

      type: 'POST',
      url: '/orders',
      data: order,
      success: function(newOrder){
        addOrder(order);
      },
      error: function(){
        alert('Error adding order')
      },        

    })
    


   })

})