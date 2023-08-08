FROM node:lts-alpine as builder
ENV REACT_APP_API_URL "https://google.com"
WORKDIR /app
COPY . .
RUN rm -rf node_modules && npm install
RUN npm run build

FROM nginx:1.21.5-alpine
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx --from=builder /app/build /var/www/html/
