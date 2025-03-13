import Header from "../components/layout/Header";
import { Button } from "../components/ui/button";
export default function Dashboard() {
  return (
    <>
      <Header />
      <main className="px-96 py-5 gap-5 flex flex-col">
        {/* Introduction */}
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p>Create, manage and start your streams below.</p>
        </div>

        {/* Stream controls */}
        <div>
          <Button>Create new stream</Button>
        </div>

        {/* Streams */}
        <div className="flex gap-2 flex-wrap">
          <div className="bg-white border rounded-md min-w-72 p-2 flex flex-col gap-4">
            <div className="bg-blue-200 rounded-lg p-2 min-h-20 flex justify-center items-center">
              Frontpage Stream
            </div>
            <div>
              <span className="font-bold">Status: </span>Active
            </div>
            <div className="self-end">
              <Button>Manage stream</Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
    </>
  );
}
