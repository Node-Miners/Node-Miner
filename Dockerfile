FROM node:12-alpine

RUN npm i discord.js
RUN npm i dotenv-flow

COPY ./app ./app

CMD ["node", "./app/bot.js"]
