import inputData from 'readline-sync';
import listaDeFrutas from "./dados.js";
import {selecionaPalavra,atualizarPalavra,validaLetra, verificaPalavra } from "./funcoes.js";

console.log("\n------------JOGO DA FORCA------------\n");

var palavra = selecionaPalavra(listaDeFrutas);

//SELECIONA PRIMEIRA LETRA
let primeiraLetra = palavra[0];

//CRIA UNDERLINES COM O TAMANHO DA FRUTA - 1
let underline = "_".repeat(palavra.length - 1);

//CONCATENA PRIMEIRA LETRA COM A UNDERLINE
var palavraOculta = primeiraLetra + underline;



let chance = 4

while(chance >= 1){


    console.log(`Nome da fruta com ${palavra.length} letras:`);
    console.log(`Fruta ${palavraOculta}\n`);

    var letraDigitada = inputData.question("Digite uma letra: ").toLowerCase();


    if(validaLetra(letraDigitada)  == true){

                if(verificaPalavra(palavra, letraDigitada)== true){

                    
                   let palavraAtualizada = atualizarPalavra(palavraOculta, letraDigitada, palavra); 
                   palavraOculta = palavraAtualizada;

                   console.log(palavraAtualizada+"\n");

                    if(palavraAtualizada === palavra){
                        console.log("\n--------------VOCÊ VENCEU!!-------------\n");
                        break;
                    }


                }else{
                    chance--;
                    

                    if(chance === 0){
                        console.log("\n--------------VOCÊ PERDEU!!-------------\n");
                    }else{
                        console.log(`\nOPÇÃO ERRADA! Você ainda tem ${chance} chance(s)!\n`);
                    }

                    
                }
    

    }else{
        console.log("\nPor favor, digite uma letra válida.\n")
       
    }

  

}

