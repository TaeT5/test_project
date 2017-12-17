$(document).ready(function(){
    var form = $('#form-buying-product');

    form.on('submit',function(e){
        e.preventDefault();
        //console.log('dksk');

        var nmb = $('#number').val();

        var submit_btn = $('#submit-btn');
        var product_id = submit_btn.data('product-id');
        var product_name = submit_btn.data('product-name');
        var product_price = submit_btn.data('product-price');

        //alert(product_id + product_name + product_price);

        $('.basket-items ul').append('<li>'+ product_name+ ' '+ nmb+ ' шт.' + ' по '+ product_price + 'руб.  '+
            '<a class="delete-item" href=""> X </a></li>');

    });

    function showItems(){
        $('.basket-items').removeClass('hidden');
    }

    $('.basket-container').on('click',function(e){
        e.preventDefault();
        //$('.basket-items').removeClass('hidden');
        showItems();
    });

    $('.basket-container').mouseover(function(){
        //$('.basket-items').removeClass('hidden');
        showItems();
    });

    /*$('.basket-container').mouseout(function(){
        //$('.basket-items').addClass('hidden');
        showItems();
    });*/

    $(document).on('click','.delete-item',function(e){
        e.preventDefault();
        $(this).closest('li').remove();
    });


});