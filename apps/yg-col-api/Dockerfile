From node:10 AS base
  
WORKDIR /app

RUN apt update

FROM base AS development
COPY apps/yg-col-api /app/yg-col-api/
COPY tsconfig.base.json /
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app/yg-col-api

RUN yarn install

RUN yarn build

FROM development AS build

COPY --from=development /app /app/
