\connect c19;

INSERT INTO public.location_type (name) VALUES
('global'),
('country'),
('region'),
('adminlvl1'),
('adminlvl2');

INSERT INTO public.location (name, lat, lng, type) VALUES
('China', 35.861660, 104.195396,2),
('China', 35.861660, 104.195396,2),
('China', 35.861660, 104.195396,2);

INSERT INTO public.sublocation (name, lat, lng, type, location_id) VALUES
('Hubei', 31.160629, 112.255402, 4, 1),
('Hunan', 27.381800, 111.510681, 4, 1),
('Shanghai', 31.230391, 121.473701, 4, 1),
('Tibet', 31.903200, 88.752701, 4, 1),
('Hong Kong', 22.396427, 114.109497, 4, 1);

INSERT INTO public.cvd19_stat(time, active, confirmed, recovered, deaths, location_id, sublocation_id) VALUES
('2020-03-08 05:19:01-07', 3827,67801,60811, 3163, 1, 1),
('2020-03-08 05:19:01-07', 0,1018,1014, 4, 1, 1),
('2020-03-08 05:19:01-07', 98,433,330, 5, 1, 1),
('2020-03-08 05:19:01-07', 0,1,1, 0, 1, 1),
('2020-03-08 05:19:01-07', 304,410,102,4, 1, 1);

INSERT INTO public.cvd19_time_series(time, stat, location_id, sublocation_id) VALUES
('2020-03-08 05:19:01-07', '{3827,67801,60811, 3163}', 1, 1),
('2020-03-08 05:19:01-07', '{0,1018,1014, 4}', 1, 1),
('2020-03-08 05:19:01-07', '{98,433,330, 5}', 1, 1),
('2020-03-08 05:19:01-07', '{0,1,1, 0}', 1, 1),
('2020-03-08 05:19:01-07', '{304,410,102,4}', 1, 1);