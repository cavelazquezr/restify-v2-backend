# Restify V2 Backend

This repository is to store all code for the Restify v2 Backend

## First steps

1. Install all dependencies

```sh
npm install
```

2. Once you have downloaded and installed docker, run the following npm line in the terminal

```sh
npm run setupDb
```

3. Start using the Api by running the application with

```sh
npm run dev
```

## Once your application is running:

If you are working in your localhost, you can view all endpoints here:

```sh
http://localhost:5080/docs
```


## Folder structure

```
src
|---api
|   |------section
|          |-section.controller.ts
|          |------model
|                    |-section.model.get.ts
|                    |-section.model.post.ts
|                    |-section.model.put.ts
|                    |-section.model.delete.ts
|---config
|---interfaces
|---services
|-app.ts
|-index.ts
```

### Config folder
Store project configuration such as environment variables...

### Api folder
The most used folders.

