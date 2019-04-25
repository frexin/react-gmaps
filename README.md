# react-gmaps

## Guideline Questions

### How do you handle configuration values? What if those values change?

I use built-in feature for app configuration via env vars. You have to create `.env` by provided example and write down 
required configuration options, such as api_key, for example.

### What happens if we encounter an error with the third-party API integration?

Current application supports gracefull degradation. It means, that even in case of google maps failure you would still 
able to add and edit markers.  
Geocoder is also optional, since you can write coordinates manually.

### Now we will need to change the third-party geocoder API to another one.

It's very easy to replace google maps by other map service. Current map implementation is hided behind out MainMap 
component. So you only need to replace map provider inside this component and that's it.


## How to run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
