import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-white h-[80px] px-10">
        <nav className="flex justify-between items-center h-full">
          <div className="flex gap-5">
            <Link to="/app/dashboard">
              <div>How May I Help You?</div>
            </Link>
            <div className="flex gap-2">
              <Link to="/app/dashboard">
                <div>Dashboard</div>
              </Link>

              <Link to="/app/streams">
                <div>Streams</div>
              </Link>

              <Link to="/app/studio/1">
                <div>Studio</div>
              </Link>
            </div>
          </div>
          <div>
            <Link to="/app/account">
              <div>Account</div>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
