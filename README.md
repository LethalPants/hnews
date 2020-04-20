# HNews

A hacker news clone which sources news from it's users. This app was built using React, Ionic and Firebase.

[![MIT License][license-shield]][license-url] [![LinkedIn][linkedin-shield]][linkedin-url]

<a href = 'https://hnews-2a163.firebaseapp.com/' target="_blank">Live Demo</a>

<a href="http://stackoverflow.com" target="_blank">Go</a>
## About The Project

![HNews Screen Shot][product-screenshot]

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### To run locally

1. Clone the repo

```sh
git clone https://github.com/LethalPants/hnews.git
```

2. Install NPM packages

```sh
npm install
```

1. Add `src/firebase/config.js` file

Add a `config.js` file to the firebase directory within src to add firebase config, which looks like .
This project utilizes firebase hosting, firestore and authentication.

```js
const firebaseConfig = {
    apiKey: <YOUR_API_KEY>,
    authDomain: <YOUR_AUTH_DOMAIN>,
    databaseURL: <YOUR_DOMAIN_URL>,
    projectId: <YOUR_PROJECT_ID>,
    storageBucket: <YOUR_STORAGE_BUCKET>,
    messagingSenderId: <YOUR_MESSAGE_SENDER_ID>,
    appId: <YOUR_APP_ID>,
};

export default firebaseConfig;

```

1. Run `npm start`

Runs the app in the development mode.

Open http://localhost:3000 to view it in the browser. Whenever you modify any of the source files inside the `/src` folder,
the module bundler ([Webpack](http://webpack.github.io/)) will recompile the app on the fly and refresh all the connected browsers.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/LethalPants/hnews/blob/master/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/hatim-murtuza-669072175/
[product-screenshot]: https://github.com/LethalPants/hnews/blob/master/screenshot/hnews.png
