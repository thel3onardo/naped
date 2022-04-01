FROM node:14

RUN mkdir -p /usr/src/server

WORKDIR /usr/src/server

COPY package.json /usr/src/server

RUN npm install

COPY . /usr/src/server/

EXPOSE 4000

CMD ["node", "index.js"]