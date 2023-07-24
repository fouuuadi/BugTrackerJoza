create table ticket
(
    id          bigserial primary key,
    name        text not null,
    author      text not null,
    description text not null,
    priority    text null
);
