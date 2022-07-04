
# Setup the nodejs-test-mocha-chai

FROM node:16

WORKDIR /usr/app/backend/
COPY package*.json ./
RUN npm install 
COPY . .

EXPOSE 5000
USER node

CMD ["npm", "start"]
