FROM node:lts-alpine as base

# make the 'app' folder the current working directory
WORKDIR /app

# copy all files from current directory into the image
COPY . .

# install project dependencies
RUN npm ci

FROM base as production
RUN ["npm", "run", "lint"]
RUN ["npm", "run", "test"]
RUN ["npm", "run", "build"]

FROM base as development
EXPOSE 3000
# run app in development
CMD ["npm", "run", "dev"]
