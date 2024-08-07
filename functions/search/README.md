# Why do we need this

While rspress is great for building static sites, it's missing key functionality to handle backend job, and one of the workaround to enable dynamic Open Graph Image, detailed tracing and analytics is via Netlify functions. It's light weight and available in multiple languages.

## How to deploy 

### Through CLI 
To dev environment: 
```sh 
netlify deploy
```
To production: 
```sh
netlify deploy --prod
```

## Updating Environment Variable on Netlify

### Through CLI

```sh
netlify env:import .env
```

