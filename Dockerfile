FROM node:alpine3.18

WORKDIR /nest-boilerplate

COPY package*.json ./
COPY yarn*.lock ./

RUN yarn install

COPY src ./

COPY prisma ./

COPY tsconfig.json ./

COPY tsconfig.build.json  ./

COPY nest-cli.json ./

COPY .eslintrc.js ./

COPY .prettierrc ./

RUN yarn run build 

EXPOSE 5000

CMD [ "yarn", "run" ,"start" ]