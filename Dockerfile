FROM node

WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install

COPY . .

RUN rm .env && \
    cp .env.dev .env

EXPOSE 3000
CMD [ "yarn", "start" ]
