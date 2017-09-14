<?php
header("Content-Type:text/plain;charset=utf-8");

$uwid = $_REQUEST['uwid'];
$upwd = $_REQUEST['upwd'];

include('config.php');
$link = mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);

$sql = "set names utf8";
mysqli_query($link,$sql);

$sql = "select * from asus_user where uwid='$uwid' and upwd='$upwd'";
$result = mysqli_query($link,$sql);
$res = mysqli_num_rows($result);
if($res==1){
  echo "success";
}else{
  echo "error";
}

