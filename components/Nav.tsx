import AuthButton from "./AuthButton";
import ThemeToggle from "./ToggleTheme";

export default function Nav() {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <h1 className="text-3xl text font-semibold">Trip Tracker</h1>
        <div className="text-end flex">
          <ThemeToggle />
          <AuthButton />
        </div>
      </div>
    </nav>
  )
}