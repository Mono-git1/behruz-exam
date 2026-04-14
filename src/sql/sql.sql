CREATE TABLE users (
        id serial primary key,
        email text unique not null,
        password text not null,
        is_admin boolean default FALSE
    );

INSERT INTO users (email,password,is_admin) VALUES ('ali@gmail.com','admin_1',TRUE);