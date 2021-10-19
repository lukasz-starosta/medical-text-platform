FROM node:alpine as base

# Install dependencies only when needed
FROM base AS deps
# make the 'app' folder the current working directory
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base as production
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
# copy all files from current directory into the image
# install project dependencies
RUN npm run lint
RUN npm run test
RUN npm run build

FROM base as development
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000
# run app in development
CMD ["npm", "run", "dev"]
