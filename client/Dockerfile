# Use the official Node.js image as the base image
FROM node:20.12.2

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Expose the port the app runs on
EXPOSE 4200

# Start the Angular application using the Angular CLI server
CMD ["npm", "start"]
