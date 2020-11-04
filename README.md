This was created during my time as a student at Code Chrysalis

# Asteroid Comparison App
<img width="769" alt="スクリーンショット 2020-11-04 14 03 11" src="https://user-images.githubusercontent.com/35797565/98071307-833ab800-1ea6-11eb-8797-585bc03bb467.png">


## About

This app allows you to compare the size of asteroids detected today with from near Earth object web service. You can also learn more about the Asteroid you picked like its speed and orbiting body.

<img width="300" alt="スクリーンショット 2020-11-04 8 57 33" src="https://user-images.githubusercontent.com/35797565/98053417-de0aea00-1e7b-11eb-82bc-59e814046aff.png">

**current features:**

- Find the object on Earth that is closests in size to the asteroid selected
- Retreive asteroids from today on YARN START

**future features:**

- Users can pick what objects they want to compare
- Users can pick a day in the future or in the past
- 3-D objects 
## Technologies

The app was built with Vue, postgres, nodeJs, Knex and the NASA NeoWS API.

## Project setup
```
yarn install
```

## Seed database and launch App
```
yarn start
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Outside resources
See [Configuration Reference](https://cli.vuejs.org/config/).
Could not be built with out open source [API at NASA](https://api.nasa.gov/)
<img width="300" alt="スクリーンショット 2020-11-04 8 58 42" src="https://user-images.githubusercontent.com/35797565/98053463-f24ee700-1e7b-11eb-9740-715b2aae3e6e.png">
