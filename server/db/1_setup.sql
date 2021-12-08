create sequence pkSeq
    start 1
    increment 1
    NO MAXVALUE
    CACHE 1;

DROP TABLE IF EXISTS posts;

CREATE TABLE posts(
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    pseudonym VARCHAR(100) NOT NULL,
    body VARCHAR() NOT NULL);
