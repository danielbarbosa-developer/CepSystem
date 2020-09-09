var axios = requires("axios");
var dados;

function toGet(){
    var cep = document.getElementById('CEP').value;
    cep = cep.replace("-","");
    return axios.get('https://viacep.com.br/ws/'+ cep + '/json/');
}

function clicked(){
    dados = toGet();
    dados.then(function(resposta){
    //console.log(resposta.data); 
    console.log(resposta.data.cep);
    console.log(resposta.data.logradouro);
    console.log(resposta.data.bairro);
    console.log(resposta.data.localidade);
    console.log(resposta.data.uf);
    console.log(resposta.data.ddd);

});
}





