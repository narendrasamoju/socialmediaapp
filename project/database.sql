create database socialmedia_app;
use socialmedia_app;

create table users (
    id integer primary key auto_increment,
    name varchar(50),
    profile varchar(50),
    headline varchar(100),
    password varchar(50),
    token varchar(500)
);

insert into users(name, profile, headline, password, token) 
values ('krishna','sai_krishna', 'software', '123456','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')


insert into users(name, profile, headline, password, token) 
values ('murali','murali_krishna', 'manager', '987654','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')

select * from users;

create table posts(
    profile varchar(50),
    content varchar(5000),
    likes integer,
    shares integer
);
insert into posts (profile, content, likes, shares) values 
('akash', 'paragraph', 6,3);

select * from posts;
