FROM node:20-slim

WORKDIR /usr/app/

COPY src . 
COPY .env . 
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .

RUN npm install
RUN npm run compile
EXPOSE 3500
CMD ["node" , "./dist/index.js"]