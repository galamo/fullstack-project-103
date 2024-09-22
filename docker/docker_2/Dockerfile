FROM node:20-slim

WORKDIR /usr/app/

COPY index.js . 
COPY package.json .
COPY package-lock.json .
RUN npm install
EXPOSE 3000
CMD ["node" , "index.js"]