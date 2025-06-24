# Description
My portfolio website powered by React.js.

## Installation

Without a ssh key:
```
$ git clone https://github.com/alahyaoui/alahyaoui.github.io.git
```
With a ssh key:
```
$ git clone git@github.com:alahyaoui/alahyaoui.github.io.git
```

Then in the project directory, you can run:

```
$ npm install
```

Install dependencies.

## Environment Variables

Create a `.env` file in the project root with the following variables:

```
REACT_APP_FORMSPREE_KEY=your_formspree_form_id_here
```

You can get your Formspree form ID from [https://formspree.io/forms](https://formspree.io/forms).

### For GitHub Actions Deployment

If you're using GitHub Actions to deploy to GitHub Pages, you need to add the environment variable as a repository secret:

1. Go to your repository **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. **Name**: `FORMSPREE_KEY`
4. **Value**: Your actual Formspree form ID
5. Click **Add secret**

The workflow will automatically use this secret during the build process.

```
$ npm start
```

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

```
$ npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
$ npm run deploy
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
