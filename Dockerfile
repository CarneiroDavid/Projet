FROM node:18.15.0 as base

WORKDIR /build
COPY package*.json /
RUN npm ci
COPY . .
EXPOSE 5000


FROM node:18.15.0-alpine3.17 as production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=base /build/ ./
CMD ["node", "index.js"]


FROM node:18.15.0-alpine3.17 as dev
ENV NODE_ENV=development
WORKDIR /app
COPY --from=base /build/ ./
CMD ["nodemon", "bin/www"]
