const returJson = document.querySelector('.returJson');
let returnGet;



function urlIncomplete(complete) {
    // Definindo a URL da API
    return apiUrl = `https://jsonplaceholder.typicode.com/${complete}`;
}

let urlGet = urlIncomplete("posts/90")

function getPost(){
  fetch(urlGet)
  .then(response => {
    // Verificando se a resposta da requisição foi bem-sucedida (status code 200)
    if (!response.ok) {
      throw new Error('Erro ao obter os dados da API');
    }
    // Parseando a resposta como JSON
     return response.json();

  })
  .then(data => {
    // Manipulando os dados recebidos
    console.log(data);

    Object.keys(data).forEach(chave => {
      // returJson.innerHTML = chave + ": " + data[chave];
      returJson.innerHTML = data["id"]
    });
  })
  .catch(error => {
    // Lidando com erros
    console.error('Erro:', error);
  });
}



function postPost(){
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    headers: {
    "userId": 11,
    "id": 101,
    "title": "at nam consequatur ea labore ea harum",
    "body": "cupiditate quo est a modi nesciunt soluta"
    },
    // body: JSON.stringify(dataToSend)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao enviar os dados para a API');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
}



function deletePost(req, res, next) {
  fetch("https://jsonplaceholder.typicode.com/posts/99", {
    method: 'DELETE'
    // body: JSON.stringify(dataToSend)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao enviar os dados para a API');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
}