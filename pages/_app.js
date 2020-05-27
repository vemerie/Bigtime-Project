import  '../public/assets/css/normalize.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import  '../public/assets/css/style.css'; 



// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }