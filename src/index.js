import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { Auth0Provider } from '@auth0/auth0-react';
=======
>>>>>>> 9d1d42e3d03c2e9a7a1e08b5d016490fe751ba7f
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
      domain="dev-8qmzuz5hp5xzxcyc.us.auth0.com"
      clientId="0rMNuGgEVXlPZCKtyTIbaJSH1TEEgSMx"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
);

