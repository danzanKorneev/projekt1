$('#elem').val(joy=19)
//если чекбокс 6 включен то группа чекбоксов выключена
$('#checkbox_check6').click(function(){
	if ($(this).is(':checked')) {
		 $('#group input:checkbox').prop('checked', false);
         $('#elem').val(joy=0)
	}
});
// и наоборот 
$('#checkbox_check').click(function () {
        if ($(this).is(':checked')){
            $('#checkbox_check6').prop('checked', false)
            
            $('#elem').val(joy+=1)
        }else{
            $('#elem').val(joy-=1)
        }
    })

$('#checkbox_check2').click(function () {
        if ($(this).is(':checked')){
            $('#checkbox_check6').prop('checked', false)
            $('#elem').val(joy+=2)
        }else{
            $('#elem').val(joy-=2)
        }
    })
$('#checkbox_check3').click(function () {
        if ($(this).is(':checked')){
            $('#checkbox_check6').prop('checked', false)
            $('#elem').val(joy+=4)
        }else{
            $('#elem').val(joy-=4)
        }
    })
$('#checkbox_check4').click(function () {
        if ($(this).is(':checked')){
            $('#checkbox_check6').prop('checked', false)
            $('#elem').val(joy+=8)
        }else{
            $('#elem').val(joy-=8)
        }
    })
$('#checkbox_check5').click(function () {
        if ($(this).is(':checked')){
            $('#checkbox_check6').prop('checked', false)
            $('#elem').val(joy+=16)
        }else{
            $('#elem').val(joy-=16)
        }
    })
    //проверяем 
$("#elem").keyup(function(){
    var value = $(this).val();
    if(value<=31 && value>=0)
    {
        $('input[type="submit"]').prop('disabled', false);
    }else{
        $('input[type="submit"]').prop('disabled', true);
    }
});
$('#elem').on('change', function (){
    $('#checkbox_check').prop('checked', false)
    $('#checkbox_check2').prop('checked', false)
    $('#checkbox_check3').prop('checked', false)
    $('#checkbox_check4').prop('checked', false)
    $('#checkbox_check5').prop('checked', false)
    $('#checkbox_check6').prop('checked', false)
  }),
  $('#elem').on('change',
    function(){
        var value = $('#elem').val();
        if(value>=16){
            $('#checkbox_check5').prop('checked', true)
            $('#checkbox_check6').prop('checked', false)
            value-=16;
        }if(value>=8){
            $('#checkbox_check4').prop('checked', true)
            $('#checkbox_check6').prop('checked', false)
            value-=8;
        }if(value>=4){
            $('#checkbox_check3').prop('checked', true)
            $('#checkbox_check6').prop('checked', false)
            value-=4;
        }if(value>=2){
            $('#checkbox_check2').prop('checked', true)
            $('#checkbox_check6').prop('checked', false)
            value-=2;

        }if(value>=1){
            $('#checkbox_check').prop('checked', true)
            $('#checkbox_check6').prop('checked', false)
           
        }     
    });
