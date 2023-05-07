FROM node:16.14.0-alpine3.14
ENV NODE_ENV=production
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --production=false
COPY . .
USER root
RUN chown -R node:node /app
RUN chown -R node:node /home/node
USER node
RUN yarn build
EXPOSE 3000
ENTRYPOINT [ "nodemon"]
