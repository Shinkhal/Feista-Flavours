# Build Stage
FROM node:alpine3.18 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the Vite app
RUN npm run build

# Serve with Nginx
FROM nginx:1.23-alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx index page
RUN rm -rf ./*

# Copy built files from the build stage
COPY --from=build /app/dist .

# Expose port 80
EXPOSE 80

# Run Nginx in the foreground
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
