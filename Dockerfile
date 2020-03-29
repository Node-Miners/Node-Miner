FROM node:13-alpine

RUN npm install discord.js

COPY ./app ./app

CMD ["node", "./app/bot.js"]
