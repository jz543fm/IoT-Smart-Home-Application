
FROM node:alpine AS frontend-icube_website
WORKDIR /icube
COPY . .
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install
RUN npm run build

# stage 2

FROM nginx:alpine

# Set working directory to nginx asset directory

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets

RUN rm -rf ./*

# Copy static assets from builder stage

COPY --from=frontend-icube_website /icube/build .

# Containers run nginx with global directives and daemon off

ENTRYPOINT ["nginx", "-g", "daemon off;"]

