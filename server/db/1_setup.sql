DROP TABLE IF EXISTS posts;

CREATE TABLE posts(
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    body VARCHAR() NOT NULL
    );
