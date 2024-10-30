# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

RUN npm install

# Copy the rest of the application files
COPY . .

# Run the build command to compile TypeScript if applicable
RUN npm run build

# Expose the application port (Coolify will handle proxying)
EXPOSE 5000

# Start the server with the compiled file
CMD ["node", "dist/index.js"]
