document.querySelector('#logout').addEventListener('click', () => {
    let c = document.cookie;
    let date = new Date();
    let expires = date.toUTCString();
    date.setTime(date.getTime() - (60 * 1000));
    document.cookie = `email = ${c}; expires=${expires}; path=/`;
    location.reload();
  });