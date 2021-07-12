FROM node:14.17.0

# Setting up where the app resides
WORKDIR /usr/src/app

# Copy the compiled files files
COPY build/. .
RUN npm install pm2 -g

# Setting up runtime
EXPOSE 8080
CMD ["pm2-runtime", "bundle.js"]