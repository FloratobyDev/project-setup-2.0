# Use Node.js to build the Vite app in production mode
FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build the app with Vite, which outputs static files to the "dist" folder
RUN npm run build

CMD ["npm", "run", "preview"]
# This Dockerfile ends here since Coolify will serve the static files
