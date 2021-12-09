DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar (100) NOT NULL,
    name varchar (100) NOT NULL,
    body varchar (500) NOT NULL
    );

INSERT INTO posts (title,name,body)
VALUES
    ('HELP','worrier272','I am currently struggling at everything'),
    ('Everything sucks','boringmcboringface','Im so booooooooooooooooooooooooored'),
    ('Lol','trolololol','lololololololl');
 