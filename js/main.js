
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.datepicker');
  let instances = M.Datepicker.init(elems, {'format': 'yyyy-mm-dd'});
});


document.querySelector('.signup_submit').addEventListener('click', evt => {
  evt.preventDefault();

  let name = document.querySelector('#signup-name').value,
    pass = document.querySelector('#signup-pass').value,
    email = document.querySelector('#signup-email').value,
    birthday = document.querySelector('#signup-birthday').value,
    sex = document.querySelectorAll('.signup_sex');

  for (let i = 0; i < sex.length; i++ ) {
    if(sex[i].checked) {
      sex = sex[i].value;
      break;
    }      
  }

  let data = {
    name,
    pass,
    email,
    birthday,
    sex
  }  
 
  requestHandler('core/signup.php', data)
  .then(res => signup(res));

  function signup (result) {       
    if (result == 2) {      
      M.toast({html: 'Проверьте, что бы все поля были заполнены и повторите попытку.'});
      clearInpSignup();
    } else if (result == 1) {      
      M.toast({html: 'Регистрания успешно завершена, теперь можно войти'});
      clearInpSignup();
    } else {      
      M.toast({html: 'Произошла не предвиденная ошибка, попробуйте повторить позже.'});
      clearInpSignup();
    }
  }   
});

document.querySelector('.login_submit').addEventListener('click', evt => {
  evt.preventDefault();

  let pass = document.querySelector('#login-pass').value,
    email = document.querySelector('#login-email').value;    

  let data = {    
    pass,
    email    
  }  

  function login (result) {       
    if (result == 2) {      
      M.toast({html: 'Проверьте, что бы все поля были заполнены и повторите попытку.'});
      clearInpLogin();
    } else if (result == 0) {     
      M.toast({html: 'Такой пользователь не найден!'});
      clearInpLogin();
    } else {            
      let date = new Date();
      date.setTime(date.getTime() + (10 * 60 * 1000));
      let expires = date.toUTCString();
      document.cookie = `email = ${result.email}; expires=${expires}; path=/`;
      location.href = '../cabinet.php';
    }
  } 
  requestHandler('core/login.php', data)
  .then(res => login(res));  
});

function clearInpSignup () {  
  document.querySelector('.reg_form').reset();
  hendlerCloseModal();
}

function clearInpLogin () {  
  document.querySelector('.login_form').reset();
}


