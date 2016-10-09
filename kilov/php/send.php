<?php
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="artemgarbuzov@gmail.com";  // e-mail админа 
 
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="http://kilov.com.ua";  // На какую страничку переходит после отправки письма
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 
 
$login=$_POST['login'];
 
$comment=$_POST['comment'];


 
 
$msg=" 
 
<p>Имя: $login</p> 
 
 
<p>Сообщение: $comment</p> 
 
 
"; 
 
  
 
 // Отправляем письмо админу  
 
mail("$adminemail", "$date $time Сообщение 
от $login", "$msg");
 
  
 
// Сохраняем в базу данных 
 
$f = fopen("message.txt", "a+"); 
 
fwrite($f," \n $date $time Сообщение от $login");
 
fwrite($f,"\n $msg "); 
 
fwrite($f,"\n ---------------"); 
 
fclose($f); 
 
  
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 6000); 
//--></script> 
 
$msg 
 
<p>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на главную страницу...</p>";  
exit; 
 

 
?>