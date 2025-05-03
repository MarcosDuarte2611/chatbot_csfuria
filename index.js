import fetch from 'node-fetch';

export const csgoLiveMatches = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(204).send('');
  }

  console.log('✅ Webhook iniciado'); // Debug

  try {
    const TEAM_NAME = 'FURIA';
    const API_URL = `https://api.pandascore.co/csgo/matches?filter[status]=running&filter[opponent_id]=${encodeURIComponent(TEAM_NAME)}`;

    console.log(`🔗 Chamando API: ${API_URL}`); // Debug

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    
    const apiResponse = await fetch(API_URL, {
      headers: { 
        'Authorization': `Bearer ${process.env.API_KEY || 'rV5qvtDcL3FvookzQxtWQansRMwYcV0XZ3o-jALv1k4t2fpWZnw'}`,
        'Content-Type': 'application/json'
      },
      signal: controller.signal
    });
    clearTimeout(timeout);

    console.log(`📊 Status da API: ${apiResponse.status}`); // Debug

    if (!apiResponse.ok) {
      throw new Error(`Erro ${apiResponse.status}: ${await apiResponse.text()}`);
    }

    const matches = await apiResponse.json();
    console.log(`📦 Dados recebidos: ${matches.length} jogos`); // Debug

    let responseText;
    if (!matches || !Array.isArray(matches)) {
      responseText = ["🔄 Os dados estão incompletos. Tente novamente!"];
    } else if (matches.length === 0) {
      responseText = ["Parece que não tá rolando nenhuma partida FURIOSA no momento, tente novamente quando estivermos jogando! 🐯"];
    } else {
      responseText = [
        `🔥 A FURIA tá dando aula agora!`,
        ...matches.map((match, index) => {
          const opponent = match.opponents?.find(t => t?.name !== TEAM_NAME);
          return `${index + 1}. vs ${opponent?.name || 'Adversário'} (${match.league?.name || 'Sem liga'})` +
                 (match.stream_url ? `\n   📺 Assistir: ${match.stream_url}` : '');
        })
      ];
    }

    return res.status(200).json({
      fulfillmentMessages: [{
        text: { text: responseText }
      }]
    });

  } catch (error) {
    console.error('💥 ERRO CRÍTICO:', error);
    return res.status(500).json({
      fulfillmentMessages: [{
        text: { 
          text: ["🔴 Serviço instável. Nosso tech team já foi alertado!"]
        }
      }]
    });
  }
};
