FROM node:16.20.2-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2: Construction de l'image finale avec Apache
FROM nginx:latest
COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html/

EXPOSE 80