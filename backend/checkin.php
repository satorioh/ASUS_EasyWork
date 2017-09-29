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
  $cinpos = $p -> cinpos;
  $coffpos = $p -> coffpos;
}

$cdate = date_create();
$cdate = date_format($cdate,"Y-m-d");
$sql = "select * from asus_checkin where cwid='$cwid' and cdate='$cdate'";
$result = mysqli_query($link,$sql);
$res = mysqli_fetch_assoc($result);
$cid = $res['cid'];
$hascofftime = $res['cofftime'];
if($cid){
  if($hascofftime){
    $sql = "select * from asus_checkin where cdate = '$cdate'";
    $result = mysqli_query($link,$sql);
    $list = mysqli_fetch_assoc($result);
    echo json_encode($list);
    exit;
  }else{
    $cofftimeOri = date_create();
      $cofftime = date_format($cofftimeOri,"H:i:s");
      $cintime = $res['cintime'];
      $cintime = date_create($cintime);
      $chour = date_diff($cintime,$cofftimeOri);
      $chour = $chour->format("%h小时%i分钟");
      $sql = "update asus_checkin set cofftime='$cofftime', coffpos='$coffpos', chour='$chour' where cid='$cid'";
      $result = mysqli_query($link,$sql);
     }
}else{
  $cintime = date_create();
  $cintime = date_format($cintime,"H:i:s");
  $sql = "insert into asus_checkin values(NULL,'$cwid','$ccname','$cdate','$cintime','$cinpos','','','')";
  $result = mysqli_query($link,$sql);
  $id = mysqli_insert_id($link);
}
  $sql = "select * from asus_checkin where cdate = '$cdate'";
  $result = mysqli_query($link,$sql);
  $list = mysqli_fetch_assoc($result);
  echo json_encode($list);
