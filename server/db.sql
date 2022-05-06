--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: faveparks; Type: TABLE; Schema: public; Owner: gaby
--

CREATE TABLE public.faveparks (
    id integer NOT NULL,
    userid integer NOT NULL,
    parkcode character varying(255) NOT NULL,
    added timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.faveparks OWNER TO gaby;

--
-- Name: faveparks_id_seq; Type: SEQUENCE; Schema: public; Owner: gaby
--

ALTER TABLE public.faveparks ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.faveparks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: gaby
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50),
    nickname character varying(100),
    created timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    email character varying(225) NOT NULL
);


ALTER TABLE public.users OWNER TO gaby;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: gaby
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: faveparks; Type: TABLE DATA; Schema: public; Owner: gaby
--

COPY public.faveparks (id, userid, parkcode, added) FROM stdin;
1	1	YNP	2022-04-26 10:16:06.283604-07
2	1	ZNP	2022-04-26 10:16:16.482068-07
3	3	colt	2022-05-05 13:23:27.656278-07
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: gaby
--

COPY public.users (id, name, nickname, created, email) FROM stdin;
1	Gaby	Gabs	2022-04-26 10:15:02.94746-07	camposgaby101@gmail.com
3	Gabriela Campos	gabycamposcontact	2022-05-04 18:52:33.652853-07	gabycamposcontact@gmail.com
4	Gabriela Campos	contactgabyc	2022-05-04 23:53:53.350204-07	contactgabyc@gmail.com
5	Gabriela Campos	gabriela.campos	2022-05-04 23:59:08.210201-07	gabriela.campos@sausdlearns.net
\.


--
-- Name: faveparks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gaby
--

SELECT pg_catalog.setval('public.faveparks_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gaby
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: faveparks faveparks_pkey; Type: CONSTRAINT; Schema: public; Owner: gaby
--

ALTER TABLE ONLY public.faveparks
    ADD CONSTRAINT faveparks_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: gaby
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: gaby
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: faveparks faveparks_userid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gaby
--

ALTER TABLE ONLY public.faveparks
    ADD CONSTRAINT faveparks_userid_fkey FOREIGN KEY (userid) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

