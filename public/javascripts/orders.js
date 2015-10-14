

$(document).ready(function(){

  console.log('document loaded')

  //Cach orders, name, and drink
  var $orders = $('#listOfOrders');
  var $inputName = $('#inputName');
  var $inputDrink = $('#inputDrink');


  var addOrder= function(input){
    $orders.append('<div style=\' margin: 10px; border: 2px solid blue; background: white\'><ul style=\' padding: 1px\'><h4> Name: ' + input.name  + '</h3></ul><ul style=\'padding: 2px\'> Drink: ' + input.drink + '</ul><ul><button id=' + input._id + ' class=\'remove\'>Delete</button></div>');

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


  //Delete order
  $orders.delegate('.remove', 'click', function(){

    console.log($(this).eq(0).attr('id'))

    var buttonClicked = $(this)
    debugger

    var orderDeleteId = $(this).eq(0).attr('id')
    debugger

    var parentToRemove =  $(this).parent().parent()
    debugger


    $.ajax({

      type: 'DELETE',
      url: '/orders/delete/' + orderDeleteId,
      success: function(){
        parentToRemove.remove();
      }
    })
  })






})


