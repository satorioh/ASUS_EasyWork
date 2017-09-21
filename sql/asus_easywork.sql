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
  udept varchar(128)
);

create table asus_checkIn(
  cid int primary key auto_increment,
  cwid varchar(32),
  ccname varchar(32),
  cdate varchar(128),
  cintime varchar(32),
  cinpos varchar(128),
  cofftime varchar(32),
  coffpos varchar(128),
  chour int
);

insert into asus_user values(
1,'aa','123','robin1_wang','肉饼',''
);


