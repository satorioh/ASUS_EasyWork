<?php
header("Content-Type:application/json;charset=utf-8");

$date = $_REQUEST['calendarDate'];
$cwid = $_REQUEST['cwid'];
$newDate = date_create($date);
//var_dump($newDate);
$newDate = date_format($newDate,"Y-m");

include('config.php');
$link = mysqli_connect($db_url,$db_user,$db_pwd,$db_name,$db_port);

$sql = "set names utf8";
mysqli_query($link,$sql);

$sql = "select cdate from asus_checkin where cwid='$cwid' and cdate like '%$newDate%'";
$result = mysqli_query($link,$sql);
$list = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($list);

