/*Connecting to the database automatically creates it*/
\connect c19;

CREATE TABLE public.location_type (
    id SERIAL PRIMARY KEY,
    name TEXT,
    created_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
);

COMMENT ON TABLE public.stat_type IS
'Statistical type name';

CREATE TABLE public.stat_type (
    id SERIAL PRIMARY KEY,
    name TEXT,
    created_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE public.stat_type IS
'Location type name';

CREATE TABLE public.location (
    id SERIAL PRIMARY KEY,
    name TEXT,
    lat NUMERIC,
    lng NUMERIC,
    created_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    type INTEGER NOT NULL REFERENCES public.location_type(id),
);

COMMENT ON TABLE public.location IS
'Generally countries and regions';

CREATE TABLE public.sublocation (
    id SERIAL PRIMARY KEY,
    name TEXT,
    created_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    location_id INTEGER NOT NULL REFERENCES public.location(id)
    type INTEGER NOT NULL REFERENCES public.location_type(id),
);

COMMENT ON TABLE public.location IS
'Generally states, counties and precints';

CREATE TABLE public.cvd19_stat (
    id SERIAL PRIMARY KEY,
    time TIMESTAMPTZ,
    created_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    type INTEGER NOT NULL REFERENCES public.stat_type(id),
    location_id INTEGER NOT NULL REFERENCES public.location(id)
    sublocation_id INTEGER REFERENCES public.sublocation(id)
);

COMMENT ON TABLE public.cvd19_stat IS
'COVID19 statistical data';

CREATE INDEX ix_location on public.location USING btree (lower(name))
CREATE INDEX ix_sublocation on public.sublocation USING btree (lower(name))
CREATE INDEX ix_sublocation on public.sublocation USING btree (lower(name))