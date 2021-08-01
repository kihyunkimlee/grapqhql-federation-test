FROM node:12-alpine As builder

WORKDIR /home/app

COPY package*.json ./

RUN yarn install

COPY . .

CMD ["npm", "run", "start:dev"]