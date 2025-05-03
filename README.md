Chatbot feito para processo seletivo para vaga de Assistente de Engenharia de Software para a FURIA Tech.
A ideia por trás do chatbot é que o usuário seja capaz de receber informações sobre jogos ao vivo, sobre a loja oficial e pedir atendimento humano.
O chatbot foi feito através do Dialogflow e do Google Cloud, ambos da plataforma Google, e utilizando a API PandaScore para aquisição dos dados em tempo real.
Estudos feitos através do Canal eConhecimento (YouTube), DeepSeek AI. e a própria plataforma Dialogflow.

Modo de uso:
  Através do aplicativo Telegram (mobile), ao iniciar a conversa, o bot irá perguntar o nome do usuário, e logo após, apresentar 3 opções: Placar, Loja e Atendimento:
    Ao selecionar Placar, o bot retornará com o resultado do jogo atual, caso nenhum jogo esteja acontecendo, irá retornar a mensagem correspondente;
    Ao selecionar Loja, o bot retornará mais 3 opções: Uniformes, Casual e Promoções;
      Ao selecionar Uniformes, o bot retornará o link da aba de uniformes da loja;
      Ao selecionar Casual, o bot retornará o link da aba de coleções casuais da loja;
      Ao selecionar Promoções, o bot retornará o link da aba de outlet da loja.
    Ao selecionar Atendimento, o bot retornará uma mensagem indicando que irá solicitar um atendente humano para o usuário.
  Ao enviar "Voltar" ou "0" a qualquer momento durante a conversa, o usuário retornará para o menu inicial.
  Caso o usuário não inicie a conversa com uma saudação padrão, o bot o enviará diretamente para o menu inicial com as 3 opções, para evitar situações onde o fallback deixará o usuário sem resposta ou respondendo com apenas "Não entendi, repita por favor".
