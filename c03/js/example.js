/**
 *
 * O script é coloca dentro de uma expressão de função imediatamente
 * invocada que ajuda a proteger o escopo das variáveis
 *
 **/

(function () {

  // Parte 1: Cria o onjeto Hotel e exibe os detalhes da oferta

  // Cria o objeto hotel usando a sintaxe de literal
  var hotel = {
    name: 'Park',
    roomRate: 240,
    discount: 15,
    offerPrice: function () {
      return this.roomRate * ((100 * this.discount) / 100);
    }
  }

  // Exibe o nome do hotel, o preço padrão e o preço especial

  // Declara as variáveis
  var hotelName, roomRate, specialRate;

  // Obtém os elementos
  hotelName = document.getElementById('hotelName');
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');

  // Exibe o nome
  hotelName.textContent = hotel.name;

  // Exibe o preço
  roomRate.textContent = '$' + hotel.roomRate.toFixed(2);

  // Exibe a oferta
  specialRate.textContent = '$' + hotel.offerPrice();

  // Parte 2: Calcula e exibe os detalhes sobre o fim da oferta

  // Mensagem exibida aos usuários
  var expiryMsg;

  // Data de hoje
  var today;

  // O elemento que exibe a mensagem sobre o fim da oferta
  var elEnds;

  function offerExpires(today) {

    // Declara as variáveis dentro da função para o escopo local
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    // Adiciona 7 dias à data/hora atual (adicionando em milisegundos)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Cria o array para armazenar os nomes dos dias/meses
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // Coleta partes da da data para mostrar na página
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    // Cria a mensagem
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + '<br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;

  }

  // Coloca a data de hoje na variável
  today = new Date();

  // Obtém o elemento offerEnds
  elEnds = document.getElementById('offerEnds');

  // Adiciona a mensagem
  elEnds.innerHTML = offerExpires(today);

  // Fim da expressão de função imediatamento invocada

}());
