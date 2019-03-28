FROM node:alpine

LABEL maintainer="Vladimir Skvortsov <public@vladimirskvortsov.com> (https://vladimirskvortsov.com)"

WORKDIR /usr/src/app
COPY . .

RUN apk add --no-cache yarn
RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]