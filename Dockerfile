# Multi-stage build for static React app served by Nginx
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci || npm install
COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS serve
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
# Copy favicon folder from images if present (handled at build time by Vite publicDir)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


