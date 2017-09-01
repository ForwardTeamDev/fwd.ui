FROM hope/nodejs:latest

COPY . /data/app

WORKDIR /data/app

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]