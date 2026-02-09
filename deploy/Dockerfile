FROM node:24.13-alpine AS base
WORKDIR /app

FROM base AS build
RUN apk update
RUN apk add git
RUN corepack enable
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
COPY package.json yarn.lock .yarnrc.yml ./
# if .yarn directory is used, it should be copied here
RUN yarn install
COPY . ./
RUN yarn build

FROM base AS run
RUN npm install pm2@latest -g
ENV HOST=0.0.0.0
COPY deploy/ecosystem.config.js ./
COPY --from=build /app/.output ./.output/
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
