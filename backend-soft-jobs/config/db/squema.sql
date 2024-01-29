CREATE DATABASE softjobs;

\c softjobs;

CREATE TABLE usuarios (
  id        SERIAL        NOT NULL,
  email     VARCHAR(50)   NOT NULL  UNIQUE,
  password  VARCHAR(200)   NOT NULL,
  rol       VARCHAR(25)   NOT NULL,
  lenguage  VARCHAR(20)   NOT NULL,
  PRIMARY KEY (id)
);


ALTER TABLE usuarios ADD COLUMN created_at TIMESTAMP NOT NULL DEFAULT NOW();
ALTER TABLE usuarios ADD COLUMN updated_at TIMESTAMP NOT NULL DEFAULT NOW();


CREATE FUNCTION update_updated_at_usuarios()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_usuarios_updated_at
    BEFORE UPDATE
    ON
        usuarios
    FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_usuarios();

/* "user":{
    "email":"hans.latoja@gmail.com",
    "password": "genius123",
    "rol": "Backend Developer",
    "lenguage": "spanish" */

    /* {
  "user":{
    "email":"hugo.latoja@gmail.com",
    "password": "caballo",
    "rol": "FrontEnd developer",
    "lenguage": "spanish and english"
  }
} */

/* {
  "user":{
    "email":"simba@gmail.com",
    "password": "simbita",
    "rol": "FrontEnd developer",
    "lenguage": "koreano"
  }
} */

/* {
  "user":{
    "email":"eliana@gmail.com",
    "password": "diputada",
    "rol": "FrontEnd developer",
    "lenguage": "viejuja"
  }
} */