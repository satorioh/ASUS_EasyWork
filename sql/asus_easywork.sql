set names utf8;
drop database if exists easywork_asus_c;
create database easywork_asus_c charset=utf8;
use easywork_asus_c;

create table asus_user(
  uid int primary key auto_increment,
  uwid varchar(32),
  upwd varchar(32),
  uename varchar(32),
  ucname varchar(32),
  udept varchar(128)
);

create table asus_checkin(
  cid int primary key auto_increment,
  cwid varchar(32),
  ccname varchar(32),
  cdate varchar(32),
  cintime varchar(32),
  cinpos varchar(128),
  cofftime varchar(32),
  coffpos varchar(128),
  chour varchar(32)
);

insert into asus_user values(
1,'AH1100288','680e25a56ebb4faeab0ad9dcb3e29735','Robin1_Wang','王斌','MIS'
);


