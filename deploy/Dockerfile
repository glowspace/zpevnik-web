# Image
FROM node:24.13-alpine

RUN apk update
# required for yarn install
RUN apk add git python3 py3-pip
RUN apk add make g++ rsync

RUN corepack enable
RUN npm install pm2@latest -g

# Set up work directory
WORKDIR /var/www/html
