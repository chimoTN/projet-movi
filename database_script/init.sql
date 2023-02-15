CREATE TABLE IF NOT EXISTS public.t_movie
(
    id_movie integer NOT NULL,
    description text COLLATE pg_catalog."default",
    image text COLLATE pg_catalog."default",
    producer text COLLATE pg_catalog."default",
    title text COLLATE pg_catalog."default",
    CONSTRAINT t_movie_pkey PRIMARY KEY (id_movie)
);

CREATE TABLE IF NOT EXISTS public.t_user
(
    id_user integer NOT NULL,
    login text COLLATE pg_catalog."default",
    mot_de_passe text COLLATE pg_catalog."default",
    token text COLLATE pg_catalog."default",
    CONSTRAINT t_user_pkey PRIMARY KEY (id_user)
);

CREATE TABLE IF NOT EXISTS public.t_movie_list
(
    id_list_movie integer NOT NULL,
    note integer,
    view_count integer,
    fk_id_movie integer,
    fk_id_user integer,
    CONSTRAINT t_movie_list_pkey PRIMARY KEY (id_list_movie),
    CONSTRAINT fkhmfgldpt1ubcpat7xucydoy6u FOREIGN KEY (fk_id_user)
        REFERENCES public.t_user (id_user) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fkqq4ixiwcy4iulkxow9g1hrb06 FOREIGN KEY (fk_id_movie)
        REFERENCES public.t_movie (id_movie) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (1, 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.', 'Avatar', 'James Cameron', 'Avatar');

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (2, 'Steven Matrix is one of the underworld''s foremost hitmen until his luck runs out, and someone puts a contract out on him. Shot in the forehead by a .22 pistol, Matrix "dies" and finds himself in "The City In Between", where he is ...', 'Matrix', 'Grenville Case', 'Matrix');

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (3, 'A company is run by a dictator of a boss -- who also happens to be a baby.', 'Baby Boss', 'Sophia Russell', 'Baby Boss');

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (4, 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city''s hidden corruption and question his family''s involvement.', 'The Batman', 'Matt Reeves', 'The Batman');

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (5, 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire''s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...', 'Star Wars: Episode IV - A New Hope', 'George Lucas', 'Star Wars: Episode IV - A New Hope');

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (6, 'The brash James T. Kirk tries to live up to his father''s legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.', 'Star Trek', 'J.J. Abrams', 'Star Trek');

INSERT INTO public.t_movie (id_movie, description, image, producer, title)
VALUES (7, 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.', 'Tenet', 'Christopher Nolan', 'Tenet');

INSERT INTO public.t_movie (id_movie, description, image, producer, title)
VALUES (8, 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.', 'La La Land', 'Damien Chazelle', 'La La Land');

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (9, 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', 'Titanic', 'James Cameron', 'Titanic');

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (10, 'As students at the United States Navy''s elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.', 'Top Gun', 'Tony Scott', 'Top Gun');

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (11, 'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.', 'Thor', 'Kenneth Branagh', NULL);

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (12, 'The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.', 'Thor', 'Kenneth Branagh', 'Thor');

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (13, 'A noble family becomes embroiled in a war for control over the galaxy''s most valuable asset while its heir becomes troubled by visions of a dark future.', 'Dune', 'Denis Villeneuve', 'Dune');

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (14, 'In a world divided by factions based on virtues, Tris learns she''s Divergent and won''t fit in. When she discovers a plot to destroy Divergents, Tris and the mysterious Four must find out what makes Divergents dangerous before it''s...', 'Divergent', 'Neil Burger', 'Divergent');

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (15, 'Katniss Everdeen voluntarily takes her younger sister''s place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.', 'The Hunger Games', 'Gary Ross', 'The Hunger Games');

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (16, 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.', 'Inception', 'Christopher Nolan', 'Inception');

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (17, 'Rare book dealers Joel and Garda take a summertime jaunt to the seashore where he becomes involved in a beauty pageant as investor and judge much to her chagrin.', 'Fast and Furious', 'Busby Berkeley', 'Fast and Furious');

INSERT INTO public.t_movie (id_movie, description, image, producer, title) 
VALUES (18, 'A tough-on-crime street cop must protect the only surviving witness to a strange murderous cult with far-reaching plans.', 'Cobra', 'George P. Cosmatos', 'Cobra');
