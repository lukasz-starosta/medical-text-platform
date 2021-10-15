This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Zainstaluj Dockera i extension Docker w VSCode
2. `npm install` w folderze `frontend`
3. Kliknij prawym na plik docker-compose.yml i "Compose Up"
 
# Developing with Docker
1. `npm start` from the root folder of medical-text-platform will start all containers in dev mode.
2. See [../docker-compose.yml] to check which files are shared with the container as modules.
3. Once the frontend container has started, you should "Attach to running container" using the Remote-container VS Code extension to be able to develop the frontend app. Otherwise (if you want to do it locally), you will not be able to access node_modules and autocompletion. 