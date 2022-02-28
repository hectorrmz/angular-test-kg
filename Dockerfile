#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


# Bundle app source
EXPOSE 80
CMD [ "node", "server.js" ]
