import {useEffect} from "react";
import {useAuth} from "react-oidc-context";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import '@/App.css'
import {Layout} from "@/components/layout";
import {Home} from "@/pages/home";
import {Dashboard} from "@/pages/dashboard";

function App() {
  const auth = useAuth()
  const givenName = auth.user?.profile.given_name

  useEffect(() => {
    return auth.events.addAccessTokenExpired(() => {
      auth.signinSilent().catch(error => console.error("failed auto signin", error))
    })
  }, [auth, auth.events, auth.signinSilent])

  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            {givenName ? (
              <Route path="/" element={<Dashboard />} />
              ) : (
              <Route path="/" element={<Home />} />
            )}
          </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default App
