CREATE TABLE IF NOT EXISTS Ticket
(
    movie       VARCHAR(255) NOT NULL,
    nmbrTickets INTEGER      NOT NULL,
    firstName   VARCHAR(255) NOT NULL,
    surname     VARCHAR(255) NOT NULL,
    email       VARCHAR(255) NOT NULL,
    phonenmbr   INTEGER      NOT NULL,
    id          INTEGER PRIMARY KEY AUTO_INCREMENT
);