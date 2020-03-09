<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/cabinet.css">    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="materialize/css/materialize.min.css"  media="screen,projection"/>    
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>   
</head>

<body>    
  <div class="main_head">
    <h1 class="head_title">Личный кабинет </h1>
    <button id="logout" class="waves-effect waves-light btn-small"><i class="material-icons right">exit_to_app</i>Выход</button>
  </div>
<div class="container"> 
  <div class="row">
    <form class="col s16">  
      <div class="row">
        <div class="input-field col s6">
          <label for="cabinet-name" class="lbl_text active">Имя:</label>
          <input type="text" name="name" id="cabinet-name" class="validate">
        </div>  
        
        <div class="input-field col s6">
          <label for="cabinet-pass" class="lbl_text active">Пароль:</label>
          <input type="text" name="password" id="cabinet-pass" class="validate">            
        </div>  

        <div class="input-field col s12">
          <label for="cabinet-birthday" class="lbl_text active">Дата рождения:</label>
          <input type="text" name="birthday" id="cabinet-birthday" class="datepicker validate">
        </div>

        <div class="col l12">
          <p>
            <label for="sex-male">
              <input type="radio" value="male" name="group1" class="cabinet_sex" id="sex-male">
              <span>male:</span>
            </label>
          </p>

          <p>
            <label for="sex-female">
              <input type="radio" value="female" name="group1" class="cabinet_sex" id="sex-female">
              <span>female:</span>
            </label>
          </p>

          <p>
            <label for="sex-other">
              <input type="radio" value="other" name="group1" class="cabinet_sex" id="sex-other">
              <span>other:</span>
            </label>
          </p>
        </div>
        <div class="row">
          <div class="col s12">
            <button class='waves-effect waves-light btn cabinet_update'><i class="material-icons right">assignment_turned_in</i>Применить</button>
          </div>
        </div>
        
      </div> 
    </form>
  </div>
</div>

<script src="materialize/js/materialize.min.js"></script>
<script src="js/ajax.js"></script>
<script src="js/get_user_data.js"></script>
<script src="js/logout.js"></script>

</body>
</html>