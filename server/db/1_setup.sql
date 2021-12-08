DROP TABLE IF EXISTS posts;

CREATE TABLE posts(
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    pseudonym VARCHAR(100) NOT NULL,
    body VARCHAR() NOT NULL);
