FROM node:16.14.0-alpine3.14
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
RUN yarn build
EXPOSE 3000
ENTRYPOINT [ "/app/entrypoint.sh" ]
CMD [ "npm", "run", "dev:custom" ]
