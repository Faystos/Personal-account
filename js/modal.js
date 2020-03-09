
let rulesActiv = false;
let initModal = false;

document.querySelector('.rules_open').addEventListener('click', openRules);
document.querySelector('.btn_rules_back').addEventListener('click', closeRules);

function openRules (evt) {
  evt.preventDefault();
  rulesActiv = true;
  initModal = false;
  let wrapRegModal = document.querySelector('.wrap_modal_reg');  
  wrapRegModal.style.marginLeft = '-400px';  

  document.addEventListener('keydown', closeBtnRules);
}

function closeRules (evt) {  
  rulesActiv = false;
  initModal = true;
  let wrapRegModal = document.querySelector('.wrap_modal_reg'); 
  wrapRegModal.style.marginLeft = '0';
}

function closeBtnRules (evt) {
  if (evt.keyCode === 27) {
      closeRules();      
  }
  if(!rulesActiv){
    document.removeEventListener('keydown', closeBtnRules);     
  }
}

function hendlerCloseModal (evt) {
  initModal = false;
  document.querySelector('.wrap_registr_form').classList.add('hide');  
}

document.querySelector('.rules_accept').addEventListener('change', acceptRules);

function acceptRules () {
  if(this.checked) {
      document.querySelector('.signup_submit').classList.remove('disabled');
    } else if (!this.checked)document.querySelector('.signup_submit').classList.add('disabled');   
}

let closeModal = document.querySelectorAll('.modal_close');

document.querySelector('.btn_register').addEventListener('click', ()=> {
    initModal = true;
    document.querySelector('.wrap_registr_form').classList.remove('hide');
     
    document.addEventListener('keydown', evt => {
        if (initModal) {
            if (evt.keyCode === 27) {
                hendlerCloseModal();                                
            }            
          }
    });  
});

closeModal.forEach(el => {
    el.addEventListener('click', hendlerCloseModal);
});

document.querySelector('.wrap_registr_form').addEventListener('click', () =>{
  document.querySelector('.wrap_registr_form').classList.toggle('hide');
});

document.querySelector('.wrap_registr_form .modal_registr_form').addEventListener('click', evt => {
    evt.stopPropagation();
});