FROM node:16 as build
WORKDIR /src

COPY package.json /src/.
COPY package-lock.json /src/.

RUN npm install

COPY . /src/.
RUN npm run build

# Final image will only contain the following
FROM nginx:1.25-alpine
COPY --from=build /src/dist/ /usr/share/nginx/html/
COPY ./docker/nginx.conf /etc/nginx/nginx.conf

