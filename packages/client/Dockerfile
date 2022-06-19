FROM node:16.3.0-alpine

# create destionation directory
RUN mkdir -p /usr/src/naped
WORKDIR /usr/src/naped

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/naped/

# global install & update
RUN yarn
RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 3000

# start command
CMD [ "yarn", "start" ]
