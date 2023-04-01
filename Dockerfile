FROM node:alpine
WORKDIR /web
COPY package*.json ./
RUN npm install
ENTRYPOINT ["sh", "/usr/local/bin/docker-entrypoint.sh"]
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
