import {ReactElement} from "react";
import {Header} from "@/components/header";
import {ThemeProvider} from "@/components/theme/theme-provider.tsx";
import {useAuth} from "react-oidc-context";
import {DashboardMenu} from "@/components/dashboardmenu";

export const Layout: React.FC<{children: ReactElement}> = ({children}) => {
  const auth = useAuth()

  return (
    <ThemeProvider defaultTheme={"dark"} storageKey={"vite-ui-theme"}>
      <Header />
      {auth.user?.profile.given_name && (
        <DashboardMenu />
      )}
      <main>{children}</main>
    </ThemeProvider>
  )
}
