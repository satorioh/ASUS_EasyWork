<?php
    $c = date_create("09:50:58");
//    $d = date_create("09:30:58");
//    $diff=date_diff($c,$d);
//    echo $diff->format("%h hours");
//var_dump($c);
$e = date_create("18:20:58");
$diff=date_diff($c,$e);
$f=$diff->format("%h小时%i分钟");
//$d = date_format($c,"H:i:s");
//echo $d;
echo $f;
