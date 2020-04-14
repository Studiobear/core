From mhart/alpine-node:10 AS base
  
WORKDIR /app

FROM base AS development
COPY apps/yg-col-api /app/

ENV PATH /app/node_modules/.bin:$PATH

RUN yarn install --production
RUN cp -R node_modules /tmp/node_modules

RUN yarn install --pure-lockfile

FROM development AS builder
RUN yarn prisma:gen

RUN apk update

