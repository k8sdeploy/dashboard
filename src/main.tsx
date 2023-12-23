import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {oidcConfig} from "./app.config.tsx";

import './index.css'
import {AuthProvider} from "react-oidc-context";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
