FROM node:12-alpine As builder

WORKDIR /home/app

COPY package*.json ./

RUN yarn install

COPY . .

# RUN apk --no-cache add curl

CMD ["npm", "run", "start:dev"]