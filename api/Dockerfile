FROM node:20-slim

WORKDIR /usr/app/

COPY dist . 
COPY .env . 
COPY package.json .
COPY package-lock.json .

RUN npm install
EXPOSE 3000
CMD ["node" , "./dist/index.js"]