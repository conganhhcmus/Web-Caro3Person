create table GAME
(
    ID        SERIAL PRIMARY KEY NOT NULL,
    BOARD     TEXT,
    TURN      INT,
    JOIN_DATE DATE
);

create table ACCOUNT
(
    ID   SERIAL PRIMARY KEY NOT NULL,
    NAME TEXT
);

create table ROOM
(
    ID         SERIAL PRIMARY KEY NOT NULL,
    NAME       TEXT,
    GAME_ID    INT,
    OWN_ID     INT,
    PASS_WORD  VARCHAR(30),
    PLAYER1_ID INT,
    PLAYER2_ID INT,
    PLAYER3_ID INT,
    JOIN_DATE  DATE
);


drop table GAME, ACCOUNT, ROOM;