\connect forum_example;

INSERT INTO public.location_type (name) VALUES
('global'),
('country'),
('region'),
('adminlvl1'),
('adminlvl2');

INSERT INTO public.stat_type (name) VALUES
('active'),
('confirmed'),
('recovered'),
('deaths'),
('fatality_rae'),
('recovery_rate');

INSERT INTO public.locations (name, lat, lng, type, sublocation) VALUES
('China', 35.861660, 104.195396, 2),
('Singingwolfboy'),
('Lexius');

INSERT INTO public.sublocations (title, body, author_id) VALUES
('First post example', '2016-06-22 19:10:25-07', 1),