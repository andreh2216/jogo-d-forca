//FUNCAO PARA EMBARALHAR AS PALAVRAS
function embaralharArray(colecao){

   return   colecao.sort(()=>Math.random() - 0.5);
}

//FUNCAO PARA SELECIONAR A PALAVRA
function selecionaPalavra(colecao){
   return embaralharArray(colecao)[1];
}

//FUNÇÃO PARA ATUALIZAR PALAVRA
function atualizarPalavra(palavraOculta, letraDigitada, palavraEscolhida){

    let palavraOcultaArray = palavraOculta.split('');

    for(let i = 0; i < palavraEscolhida.length; i++){

          if(letraDigitada === palavraEscolhida[i]){

            palavraOcultaArray[i] = letraDigitada;

            
            
          }  

    }

 return palavraOcultaArray.join('');
 return condicao;

}

//FUNCAO PARA VALIDAR LETRA
function validaLetra(letraDigitada){
    if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)){
        return true
    }else{
        return false
    }
}

//FUNCAO PARA VERIFICAR LETRA
function verificaPalavra(palavraEscolhida, letraDigitada){

        let contador = 0;
        var condicao;

        while(contador <= palavraEscolhida.length){

            let arrayPalavra = palavraEscolhida.split('');

            if(arrayPalavra[contador] == letraDigitada){
               condicao = true;
            }



            contador++
        }

        return condicao;

}

export {selecionaPalavra,atualizarPalavra,validaLetra, verificaPalavra };