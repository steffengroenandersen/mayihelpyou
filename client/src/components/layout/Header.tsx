export default function Header() {
  return (
    <>
      <header className="bg-white h-[80px] px-10">
        <nav className="flex justify-between items-center h-full">
          <div className="flex gap-5">
            <div>How May I Help You?</div>
            <div className="flex gap-2">
              <div>Dashboard</div>
              <div>Streams</div>
            </div>
          </div>
          <div>
            <div>Account</div>
          </div>
        </nav>
      </header>
    </>
  );
}
