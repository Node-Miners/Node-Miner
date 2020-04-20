FROM ubuntu:18.04

RUN apt update && upgrade -y

RUN apt install curl

RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

RUN apt install nodejs

RUN npm i discord.js
RUN npm i dotenv-flow

COPY ./app ./app

WORKDIR /app

CMD ["node", "bot.js"]
