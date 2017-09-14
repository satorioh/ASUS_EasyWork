set names utf8;
drop database if exists asus_easywork;
create database asus_easywork charset=utf8;
use asus_easywork;

create table asus_user(
  uid int primary key auto_increment,
  uwid varchar(32),
  upwd varchar(32),
  uename varchar(32),
  ucname varchar(32),
  udept varchar(128),
  udate bigint,
  kontime varchar(32),
  konpos varchar(128),
  kofftime varchar(32),
  koffpos varchar(128),
  khour int
);

insert into asus_user values(
1,'AH1100288','#*C654321','robin1_wang','肉饼','','','','','','',''
);


