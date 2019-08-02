FROM node:alpine AS build

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json .
COPY yarn.lock .

RUN yarn install --silent --production

COPY . .

RUN yarn build

FROM nginx:alpine

RUN apk add --no-cache nodejs yarn
RUN yarn global add @beam-australia/react-env

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY .env* /usr/share/nginx/html/

CMD react-env --dest /usr/share/nginx/html/ && nginx -g "daemon off;"
