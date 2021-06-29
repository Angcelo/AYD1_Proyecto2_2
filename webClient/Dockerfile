#Angular
FROM node:14 as PY2-tienda

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#nginx

FROM nginx:1.17.1-alpine

COPY --from=PY2-tienda /app/dist/webClient /usr/share/nginx/html