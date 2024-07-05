import AuthButton from "./AuthButton";
import DeployButton from "./DeployButton";
import ThemeToggle from "./ToggleTheme";

export default function Nav(){
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <DeployButton />
            <AuthButton />
            <ThemeToggle />
          </div>
        </nav>
    )
}