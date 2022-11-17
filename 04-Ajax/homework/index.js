$("#boton").click( ()=>{
    $.get("http://localhost:5000/amigos/") 
})






$('#delete').click(()=>{
    var borrar = $('#imputDelete').val()
    $.ajax({
        url : '',
        type: DELETE ,
        success: ()=>{}, //mensaje
    })
})