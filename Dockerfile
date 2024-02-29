FROM node:18-alpine3.19 as deps
WORKDIR /app
COPY ./package.json package.json
RUN yarn --frozen-lockfile


FROM node:18-alpine3.19 as build
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules/ node_modules/
RUN yarn build


FROM node:18-alpine3.19 as runner
WORKDIR /app
COPY ./package.json package.json
COPY --from=deps /app/node_modules/ node_modules/
COPY --from=build /app/dist/ dist/
CMD [ "yarn", "start:prod" ]
