let muUrl = "https://jsonplaceholder.typicode.com/users";
// let muUrl = "https://localhost:4444/";

const getUsersPromise = () => new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest();
  xhr.open('get', muUrl);
  xhr.send();
  xhr.onload = () => {
    // 200-299 корректные ответы
    if (200 <= xhr.status && xhr.status < 300) {
      resolve(JSON.parse(xhr.response));
    }
    // 400-499 ошибки клиента
    if (400 <= xhr.status && xhr.status < 500) {
      reject(new Error(`Ошибка клиента ${xhr.status}: ${xhr.statusText}`));
    }
    // 500-599 ошибки сервера
    if (500 <= xhr.status && xhr.status < 600) {
      reject(new Error(`Ошибка сервера ${xhr.status}: ${xhr.statusText}`));
    }
  }
  xhr.onerror = () => {
    throw new Error('Запрос не удался');
  }
});

getUsersPromise().then((users) => {

  const button = document.querySelector(".button-one");

  button.addEventListener('click', () => {
    renderUsersInTable(users);
  })

});

const renderUsersInTable = (users) => {
  if(users && users.length === 0) { return; }

  const tableBody = document.querySelector("#table-body");
  
  users.forEach((user) => {
    // <tr>
    //   <td>name</td>
    //   <td>username</td>
    //   <td>email</td>
    // </tr>
    const tr = document.createElement("tr");
    const name = document.createElement("td");
    name.innerText = user.name;
    tr.appendChild(name);
    const username = document.createElement("td");
    username.innerText = user.username;
    tr.appendChild(username);
    const email = document.createElement("td");
    email.innerText = user.email;
    tr.appendChild(email);

    tableBody.appendChild(tr);
  });
}




// function httpGetRequest(url, callback) {

//     let x = new XMLHttpRequest();

//     x.onreadystatechange = function () {

//         let nameTitle = document.querySelector("#name");
//         let username = document.querySelector("#username");
//         let email = document.querySelector("#email");
//         let button = document.querySelector(".but-one");    

//         let object = JSON.parse(this.responseText);

//         object.map((elem) => {
//             button.addEventListener("click", function () {
//                 nameTitle.innerText  += elem.id + "<br />"
//                 username.innerText += elem.username + "\n"
//                 email.innerText += elem.email + "<br />"

//             })
//         })

//         if (x.readyState === 4 && x.status === 200) {
//             callback(null, this.response);

//         }
//     }
//     x.onerror = function (error) {
//         callback(error)
//     }
//     x.open('GET', url, true);
//     x.send("");

// }


// console.log(httpGetRequest(muUrl, function (error, responce) {
//     if (error) console.error(error)

//     else alert((responce));
// }));

