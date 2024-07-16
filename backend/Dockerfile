# Use the official Node.js image based on Alpine Linux
FROM node:alpine3.18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Inform Docker that the container listens on port 4000
EXPOSE 4000

# Specify the command to run the application
CMD ["npm", "run", "dev"]
