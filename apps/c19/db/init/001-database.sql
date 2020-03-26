/*Connecting to the database automatically creates it*/
\connect c19;

CREATE TABLE public.location_type (
    id SERIAL PRIMARY KEY,
    name TEXT,
    created_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE public.location_type IS
'Location types such as global, country, region, etc';

CREATE TABLE public.location (
    id SERIAL PRIMARY KEY,
    name TEXT,
    lat NUMERIC,
    lng NUMERIC,
    created_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    type INTEGER NOT NULL REFERENCES public.location_type(id)
);

COMMENT ON TABLE public.location IS
'Generally countries and regions';

CREATE TABLE public.sublocation (
    id SERIAL PRIMARY KEY,
    name TEXT,
    lat NUMERIC,
    lng NUMERIC,
    created_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    location_id INTEGER NOT NULL REFERENCES public.location(id),
    type INTEGER NOT NULL REFERENCES public.location_type(id)
);

COMMENT ON TABLE public.location IS
'Generally states, counties and precints';

CREATE TABLE public.cvd19_stat (
    id SERIAL PRIMARY KEY,
    time TIMESTAMPTZ,
    active INTEGER,
    confirmed INTEGER,
    recovered INTEGER,
    deaths INTEGER,
    created_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    location_id INTEGER NOT NULL REFERENCES public.location(id),
    sublocation_id INTEGER REFERENCES public.sublocation(id)
);

COMMENT ON TABLE public.cvd19_stat IS
'COVID19 statistical data';

CREATE TABLE public.cvd19_time_series (
    id SERIAL PRIMARY KEY,
    time TIMESTAMPTZ,
    stat INTEGER [],
    created_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    location_id INTEGER NOT NULL REFERENCES public.location(id),
    sublocation_id INTEGER REFERENCES public.sublocation(id)
);

COMMENT ON TABLE public.cvd19_stat IS
'COVID19 statistical data';

CREATE INDEX ix_location ON public.location USING btree (lower(name));
CREATE INDEX ix_sublocation ON public.sublocation USING btree (lower(name));
CREATE INDEX ix_stat_time ON public.cvd19_stat USING brin (time);

CREATE FUNCTION fatality_rate(public.cvd19_stat) RETURNS INTEGER AS
    $func$
        SELECT (deaths / confirmed ) * 100
        FROM public.cvd19_stat
    $func$ LANGUAGE SQL STABLE;

CREATE FUNCTION recovery_rate(public.cvd19_stat) RETURNS INTEGER AS
    $func$
        SELECT (recovered / confirmed ) * 100
        FROM public.cvd19_stat
    $func$ LANGUAGE SQL STABLE;