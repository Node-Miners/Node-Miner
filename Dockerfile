FROM ubuntu:18.04

RUN apt update

RUN apt install curl sudo -y 

RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

RUN apt install nodejs -y

RUN npm i discord.js
RUN npm i dotenv-flow

COPY ./app ./app

WORKDIR /app

CMD ["node", "bot.js"]