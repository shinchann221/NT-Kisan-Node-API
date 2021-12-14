FROM node:alpine
WORKDIR /app
COPY package*.json ./
LABEL org.opencontainers.image.source="https://github.com/Neem-Tree-Agro-Solutions/NT-Kisan-Node-API"
RUN npm ci --only=production
COPY . .
EXPOSE 5050
CMD [ "node","server.js" ]