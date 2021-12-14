FROM node:alpine
WORKDIR /app
COPY package*.json ./
LABEL org.opencontainers.image.source="https://github.com/Neem-Tree-Agro-Solutions/NT-Kisan-NodeAPI"
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD [ "node","server.js" ]