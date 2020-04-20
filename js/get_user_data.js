
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, {'format': 'yyyy-mm-dd'});
});

let userEmail = getCookie('email');

requestHandler('../core/get_user_data.php', { "email": userEmail })
.then(res => getUserData(res));

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getUserData(result) {      
  document.querySelector('#cabinet-name').value = result.name;
  document.querySelector('#cabinet-pass').value = result.password;
  document.querySelector('#cabinet-birthday').value = result.birthday;
  let sex = document.querySelectorAll('.cabinet_sex');
  for (let i = 0; i < sex.length; i++) {
    if (result.sex === sex[i].value) {
        sex[i].checked = true;
    }
  }  
  
  M.updateTextFields();
}

document.querySelector('.cabinet_update').addEventListener('click', evt => {
  evt.preventDefault();

  let sex = document.querySelectorAll('.cabinet_sex');

  for (let i = 0; i < sex.length; i++ ) {
    if(sex[i].checked) {
      sex = sex[i].value;
      break;
    }  
  }

  let updateData = {
    'email': userEmail,
    'name': document.querySelector('#cabinet-name').value,
    'pass': document.querySelector('#cabinet-pass').value,
    'birthday': document.querySelector('#cabinet-birthday').value,
    'sex': sex
  };
  
  requestHandler('../core/update_user_data.php', updateData)
  .then(res => updateUserData(res));
});

function updateUserData(result) {    
    if (result == 1) {        
      M.toast({html: 'Данные успешно обновлены!'});
    }
    else {        
      M.toast({html: 'Ошибка обновления, повторите позже.'})
    }
}