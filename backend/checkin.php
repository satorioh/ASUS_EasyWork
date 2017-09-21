<?php
header("Content-Type:application/json;charset=utf-8");

$data = json_decode($_REQUEST['checkInData']);

include('config.php');
$link = mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);

$sql = "set names utf8";
mysqli_query($link,$sql);

foreach($data as $p){
  $cwid = $p -> cwid;
  $ccname = $p -> ccname;
  $cdate = $p -> cdate;
  $cintime = $p -> cintime;
  $cinpos = $p -> cinpos;
  $cofftime = $p -> cofftime;
  $coffpos = $p -> coffpos;
  $chour = $p -> chour;
}

$sql = "select * from asus_checkin where cwid='$cwid' and cdate='$cdate'";
$result = mysqli_query($link,$sql);
$res = mysqli_fetch_assoc($result);
$cid = $res['cid'];
if($cid){
  $sql = "update asus_checkin set cofftime='$cofftime', coffpos='$coffpos', chour='$chour' where cid='$cid'";
  $result = mysqli_query($link,$sql);
}else{
  $sql = "insert into asus_checkin values(NULL,'$cwid','$ccname','$cdate','$cintime','$cinpos','$cofftime','$coffpos','$chour')";
  $result = mysqli_query($link,$sql);
  $id = mysqli_insert_id($link);
}

  $sql = "select cdate from asus_checkin where cwid = '$cwid'";
  $result = mysqli_query($link,$sql);
  $list = mysqli_fetch_all($result,MYSQLI_ASSOC);
  echo json_encode($list);
