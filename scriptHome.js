var axios = requires("axios");
var dados;

function toGet(){
    var cep = document.getElementById('CEP').value;
    /***the cep is informed with the "-" character between the numbers, it's necessary
    replace it to make the requisition on the corretly way***/
    cep = cep.replace("-","");
    return axios.get('https://viacep.com.br/ws/'+ cep + '/json/');
}

function clicked(){
    /*** dados receives get function return and it's used to access
    the objects inside response ***/
    dados = toGet();
    dados.then(function(resposta){

    //Using console to debug process
    console.log(resposta.data.cep);
    console.log(resposta.data.logradouro);
    console.log(resposta.data.bairro);
    console.log(resposta.data.localidade);
    console.log(resposta.data.uf);
    console.log(resposta.data.ddd);

    //Transfers the data in the variable to html page
    document.getElementById("Logradouro").value = resposta.data.logradouro;
    document.getElementById("Bairro").value = resposta.data.bairro;
    document.getElementById("Localidade").value = resposta.data.localidade;
    document.getElementById("Uf").value = resposta.data.uf;
    document.getElementById("DDD").value = resposta.data.ddd;


});
}





