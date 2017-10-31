<?php
header("Content-Type:application/json;charset=utf-8");

$uwid = $_REQUEST['uwid'];
$upwd = $_REQUEST['upwd'];

include('config.php');
$link = mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);

$sql = "set names utf8";
mysqli_query($link,$sql);

$sql = "select * from asus_user where uwid='$uwid'";
$result = mysqli_query($link,$sql);
$list = mysqli_fetch_assoc($result);
$pwd = $list['upwd'];
if($pwd){
  echo "registered";
}else{
  $sql = "update asus_user set upwd='$upwd' where uwid='$uwid'";
  $result = mysqli_query($link,$sql);
  if($result){
    echo "success";
  }else{
    echo "error";
  }
}
