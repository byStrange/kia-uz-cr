FROM node:12

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose the port Nuxt will run on
# Command to run the Nuxt application in development mode
CMD ["npm", "run", "dev", "--host"]
