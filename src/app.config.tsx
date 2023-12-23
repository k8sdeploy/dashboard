import {AuthProviderProps} from "react-oidc-context";
import {User, WebStorageStateStore} from "oidc-client-ts";

interface AppConfig {
    production: boolean;
    implementedFeatures: {
        [featureSet: string]: {
            [featureName: string]: boolean;
        }
    }
}

interface ShowFeatureProps {
  featureSet: string;
  featureName: string;
}

export const isFeatureEnabled = ({featureSet, featureName}: ShowFeatureProps): boolean=> {
  if (!appConfig.implementedFeatures[featureSet]) {
    return false;
  }

  if (appConfig.implementedFeatures[featureSet][featureName]) {
    return true;
  }

  return !appConfig.production;
}

export const appConfig: AppConfig = {
  production: import.meta.env.VITE_APP_MODE === 'production',
  implementedFeatures: {
    'information': {
      'deployments': false,
      'namespaces': false,
      'version': false,
    },
  },
}

const signinCallback = (_user: User | void) => {
  window.history.replaceState({}, document.title, window.location.pathname);
}

export const oidcConfig = {
  authority: import.meta.env.VITE_APP_KEYCLOAK_URL,
  client_id: import.meta.env.VITE_APP_KEYCLOAK_CLIENT_ID,
  client_secret: import.meta.env.VITE_APP_KEYCLOAK_CLIENT_SECRET,

  redirect_uri: window.location.origin,
  onSigninCallback: signinCallback,
  useStore: new WebStorageStateStore({store: window.localStorage}),
} as AuthProviderProps

