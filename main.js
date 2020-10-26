$(document).ready(function () {
    var counter = 0;
    $("#addstdModal").on("click", function () {
        var newRow = $("<tr id='row'"+counter+">");
        var cols = "";

        var stage = $("#sel1 option:selected").text()
        var sex = $("#sel2 option:selected").text()
        var trans = $("#sel3 option:selected").text()
        var payment = $("#sel4 option:selected").text()
        var status = $("#sel5 option:selected").text()
        var paid = $("#price").val()

        if(isNaN(paid)){
            alert("Paid field should be number")
            return;
        }

        cols += '<td name="stage' + counter + '">' + stage + '</td>';
        cols += '<td name="sex' + counter + '">' + sex + '</td>';
        cols += '<td name="trans' + counter + '">' + trans + '</td>';
        cols += '<td name="payment' + counter + '">' + payment + '</td>';
        cols += '<td name="status' + counter + '">' + status + '</td>';
        cols += '<td name="price' + counter + '">' + paid + '</td>';

        newRow.append(cols);
        $("#table_format").append(newRow);
        counter++;
    });

    $("#table_format").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();
        counter -= 1
    });

    $("#selStage").on("change", function(){
        var price = 0;
        var stage = $("#selStage option:selected").text();
        var sex = $("#selSex option:selected").text();
        var trans = $("#selTrans option:selected").text();
        var payment = $("#selPayment option:selected").text();
        var status = $("#selStatus option:selected").text();
        var table = document. getElementById("table_format");
        var count = 0;

        for(var i = 1 ; i < table. rows. length; i++)
        {
            cells = table.rows[i].getElementsByTagName('td');
            if (!cells.length) {
                continue;
            }
            if((cells[0].innerHTML == stage || stage == 'All') 
                && (cells[1].innerHTML == sex  || sex == 'All') 
                && (cells[2].innerHTML == trans || trans == 'All') 
                && (cells[3].innerHTML == payment || payment == 'All') 
                && (cells[4].innerHTML == status || status == 'All')){
                table.rows[i].style.display = '';
                price += parseFloat(cells[5].innerHTML);
                count ++;
            }else{
                table.rows[i].style.display = 'none';
            }
        }
        if(count >=2) price -= 30;
        $('#total').val(''+price);
    });

    $("#selSex").on("change", function(){
        var price = 0;
        var stage = $("#selStage option:selected").text();
        var sex = $("#selSex option:selected").text()
        var trans = $("#selTrans option:selected").text()
        var payment = $("#selPayment option:selected").text()
        var status = $("#selStatus option:selected").text()
        var count = 0;
        var table = document. getElementById("table_format");

        for(var i = 1 ; i < table. rows. length; i++)
        {
            cells = table.rows[i].getElementsByTagName('td');
            if (!cells.length) {
                continue;
            }
            if((cells[0].innerHTML == stage || stage == 'All') 
                && (cells[1].innerHTML == sex  || sex == 'All') 
                && (cells[2].innerHTML == trans || trans == 'All') 
                && (cells[3].innerHTML == payment || payment == 'All') 
                && (cells[4].innerHTML == status || status == 'All')){
                table.rows[i].style.display = '';
                price += parseFloat(cells[5].innerHTML);
                count++;
            }else{
                table.rows[i].style.display = 'none';
            }
        }
        if(count >= 2) price -= 30;
        $('#total').val(''+price);

    });

    $("#selTrans").on("change", function(){
        var price = 0;
        var stage = $("#selStage option:selected").text();
        var sex = $("#selSex option:selected").text()
        var trans = $("#selTrans option:selected").text()
        var payment = $("#selPayment option:selected").text()
        var status = $("#selStatus option:selected").text()
        var count = 0;
        var table = document. getElementById("table_format");

        for(var i = 1 ; i < table. rows. length; i++)
        {
            cells = table.rows[i].getElementsByTagName('td');
            if (!cells.length) {
                continue;
            }
            if((cells[0].innerHTML == stage || stage == 'All') 
                && (cells[1].innerHTML == sex  || sex == 'All') 
                && (cells[2].innerHTML == trans || trans == 'All') 
                && (cells[3].innerHTML == payment || payment == 'All') 
                && (cells[4].innerHTML == status || status == 'All')){
                table.rows[i].style.display = '';
                price += parseFloat(cells[5].innerHTML);
                count ++;
            }else{
                table.rows[i].style.display = 'none';
            }
        }
        if(count >= 2) price -= 30;
        $('#total').val(''+price);

    });

    $("#selPayment").on("change", function(){
        var price = 0;
        var stage = $("#selStage option:selected").text();
        var sex = $("#selSex option:selected").text()
        var trans = $("#selTrans option:selected").text()
        var payment = $("#selPayment option:selected").text()
        var status = $("#selStatus option:selected").text()
        var count = 0;
        var table = document. getElementById("table_format");

        for(var i = 1 ; i < table. rows. length; i++)
        {
            cells = table.rows[i].getElementsByTagName('td');
            if (!cells.length) {
                continue;
            }
            if((cells[0].innerHTML == stage || stage == 'All') 
                && (cells[1].innerHTML == sex  || sex == 'All') 
                && (cells[2].innerHTML == trans || trans == 'All') 
                && (cells[3].innerHTML == payment || payment == 'All') 
                && (cells[4].innerHTML == status || status == 'All')){
                table.rows[i].style.display = '';
                price += parseFloat(cells[5].innerHTML);
                count ++;
            }else{
                table.rows[i].style.display = 'none';
            }
        }
        if(count >= 2) price -= 30;
        $('#total').val(''+price);

    });

    $("#selStatus").on("change", function(){
        var price = 0;
        var stage = $("#selStage option:selected").text();
        var sex = $("#selSex option:selected").text()
        var trans = $("#selTrans option:selected").text()
        var payment = $("#selPayment option:selected").text()
        var status = $("#selStatus option:selected").text()
        var count = 0;
        var table = document. getElementById("table_format");

        for(var i = 1 ; i < table. rows. length; i++)
        {
            cells = table.rows[i].getElementsByTagName('td');
            if (!cells.length) {
                continue;
            }
            if((cells[0].innerHTML == stage || stage == 'All') 
                && (cells[1].innerHTML == sex  || sex == 'All') 
                && (cells[2].innerHTML == trans || trans == 'All') 
                && (cells[3].innerHTML == payment || payment == 'All') 
                && (cells[4].innerHTML == status || status == 'All')){

                table.rows[i].style.display = '';
                price += parseFloat(cells[5].innerHTML);
                count ++;
            }else{
                table.rows[i].style.display = 'none';
            }
        }
        if(count >= 2) price -= 30;
        $('#total').val(''+price);

    });
});

