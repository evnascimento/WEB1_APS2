function validar(){

        var nome = document.formulario.nome;
        var mensagemErro = '';
        if(nome.value==''){
            mensagemErro+="Por favor, preencha o campo nome\n";
        }


        if(mensagem!=''){
            alert(mensagem);
        }
        else {  
            document.formulario.submit();
        }
}