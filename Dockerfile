FROM node:12

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

EXPOSE 3000

CMD /bin/bash
