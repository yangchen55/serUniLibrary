
FROM  node:18-alpine
# Set working directory so that all subsequent command runs in this folder
WORKDIR /server
# Copy package json and install dependencies
COPY package.json /server

RUN npm install 
# Copy our app
COPY . /server

EXPOSE 8000

# CMD ["node", "server.js"]
CMD ["npm", "run", "dev"]