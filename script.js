// Buscar itens da tela
const listQuestionsAndResponses = document.querySelectorAll('.question')


// Adicionar evento de click nos elementos
listQuestionsAndResponses.forEach(question => 
    question.addEventListener('click', function(){
        // Verificar se a pergunta clicada está ativa
        const itsActive = question.classList.contains('active')

         //Devo fechar as demais
         listQuestionsAndResponses.forEach(question => 
            question.classList.remove('active')
            )

                // Se a pergunta não está ativa
                if(!itsActive){
                   
                    // Abrir a resposta atual
                    question.classList.add('active')
                }
                // Se a pergunta está ativa
                else {
                    question.classList.remove('active')//  Desativar(removeria a classe ativa)
                }

    
    })
    )