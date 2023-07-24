create user bugtracker with password 'bugtracker';
create database bugtracker;
grant create on database bugtracker to bugtracker;
alter user bugtracker with superuser;
\connect bugtracker;
create schema bugtracker authorization bugtracker;
grant all privileges on database bugtracker to bugtracker;
