DROP DATABASE IF EXISTS test;
CREATE DATABASE IF NOT EXISTS test;
USE test;
CREATE TABLE post(
    id int auto_increment ,
    title varchar(255),
    description varchar(255),
    image varchar(255),
    views int default 0,
    likes int default 0,
    created_at timestamp not null default CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP() ,
    primary key (id)
);