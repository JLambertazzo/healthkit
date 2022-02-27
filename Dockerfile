FROM node:16

WORKDIR /

COPY package*.json ./

RUN npm install

# build react app
COPY client/ ./client/
RUN cd client && npm install && npm run build

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]
