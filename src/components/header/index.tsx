import {LoginButton} from "@/components/login_button";
import {ModeToggle} from "@/components/theme/mode-toggle.tsx";

export const Header = () => {
  return (
    <header className={"flex justify-between items-center"}>
      <div className={"flex items-center"}>
        <div className={"mr-4"}>
          <img src={"/favicon.svg"} className={"h-8 w-8"} />
        </div>
        <div className={"text-2xl font-bold"}>K8sDeploy Dashboard</div>
      </div>
      <div className={"flex items-center"}>
        <div className={"mr-4"}>
          <LoginButton />
        </div>
        <div className={"mr-4"}>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
