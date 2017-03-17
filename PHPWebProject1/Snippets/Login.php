


<?php
session_start();
function checkLogin(){
$check=$_SESSION["login"];
    if(!empty($check))
    {
        return false;
    }else
        return true;
}
if(checkLogin())
{
echo '
     <div class="col-md-6 col-lg-7 col-sm-5" id="login" >
       <h3>Yönetici Giriş Paneli</h3>
        <img src="images/log.gif" class="img-responsive" alt="Giriş Ekranı">
        </div>

<div class="col-md-5 col-lg-4 col-sm-6"  id="login">
           <h2>Giriş Yapınız</h2>
            <form action="loginCheck.php" method="post">
                <label>Kullanıcı Adı</label>
                <input type="text" name="username" id="name" placeholder="Username" /><br /><br />
                <label>Şifre</label>
                <input type="password" name="password" id="password" placeholder="***************" /><br /><br />
                <input type="submit" value="Giriş" name="submit" /><br />
                <span></span>
            </form>
        </div>
';
}else
{
echo "Hoşgeldin ".$_SESSION["login"];
echo '<button id="logout" type="button" onclick="$logout()">ÇIKIŞ</button>';
}
?>


       