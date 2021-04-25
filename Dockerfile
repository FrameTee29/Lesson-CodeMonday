FROM node

WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install

COPY . .

RUN rm .env && \
    cp .env.dev .env &&\
    rm .env.dev

## THE LIFE SAVER
RUN curl -L https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait \
    -o ./node_modules/.bin/wait && \
    chmod +x ./node_modules/.bin/wait

EXPOSE 3000

ENTRYPOINT [ "npm" ]

CMD [ "run", "start:docker" ]
