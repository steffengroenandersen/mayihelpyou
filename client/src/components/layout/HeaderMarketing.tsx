import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function HeaderMarketing() {
  return (
    <>
      <header className="bg-white h-[80px] px-5 md:px-10">
        <nav className="flex justify-between items-center h-full">
          <div className="flex gap-5">
            <div className="flex items-center">
              <Link to="/">
                <p>How May I Help You?</p>
              </Link>
            </div>
            <div className="hidden md:flex">
              <div>
                <Link to="/">
                  <Button variant="link">Home</Button>
                </Link>
              </div>
              <div>
                <Link to="/">
                  <Button variant="link">Pricing</Button>
                </Link>
              </div>

              {/* TEMPORARY LINK TO APPLICATION INTERFACE */}
              <div>
                <Link to="/app/dashboard">
                  <Button variant="link">Dashboard</Button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="hidden md:flex gap-3">
              <div>
                <Link to="/register">
                  <Button variant="secondary">Register</Button>
                </Link>
              </div>
              <div>
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="secondary">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Home</DropdownMenuItem>
                  <DropdownMenuItem>Pricing</DropdownMenuItem>
                  <Link to="/register">
                    <DropdownMenuItem>Register</DropdownMenuItem>
                  </Link>
                  <Link to="/login">
                    <DropdownMenuItem>Login</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
