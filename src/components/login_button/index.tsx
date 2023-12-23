import {Button} from "@/components/ui/button.tsx";
import {Loader2} from "lucide-react";
import {useState} from "react";
import { useAuth } from "react-oidc-context";

export const LoginButton = () => {
  const auth = useAuth()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <>
      {auth.isAuthenticated ? (
        isLoading ? (
          <Button disabled>
            <Loader2 className={"mr-2 h-4 w-4 animate-spin"} />
            Logging out...
          </Button>
        ) : (
          <Button onClick={() => {
            setIsLoading(true)
            auth.signoutSilent().catch(() => {
              auth.signoutRedirect()
            })
            window.location.reload()
          }}>Logout</Button>
        )
      ) : (
        isLoading ? (
          <Button disabled>
            <Loader2 className={"mr-2 h-4 w-4 animate-spin"} />
            Logging in...
          </Button>
        ) : (
          <Button onClick={() => {
            setIsLoading(true)
            auth.signinRedirect().catch(() => {
              setIsLoading(false)
            })
          }}>Login</Button>
        )
      )}
    </>
  )
}
