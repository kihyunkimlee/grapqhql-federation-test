FROM node:10-alpine As builder

WORKDIR /home/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN npm run build

FROM node:10-alpine

WORKDIR /home/app

COPY package*.json ./

RUN yarn install --production=true

COPY --from=builder /home/app/dist ./dist

CMD ["node", "dist/main"]