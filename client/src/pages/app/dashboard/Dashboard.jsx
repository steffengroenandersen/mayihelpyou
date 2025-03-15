import Header from "../../../components/layout/Header";
import { Button } from "../../../components/ui/button";
import StreamCard from "./StreamCard";
import StreamCreationDialog from "./StreamCreationDialog";

const streamInfo = [
  { id: 1, name: "Frontpage Stream", status: "Active" },
  { id: 2, name: "Second Stream", status: "Inactive" },
  { id: 3, name: "Third Stream", status: "Active" },
  { id: 4, name: "Fourth Stream", status: "Active" },
  { id: 5, name: "Fifth Stream", status: "Active" },
  { id: 6, name: "Sixth Stream", status: "Active" },
];
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
          <StreamCreationDialog />
        </div>

        {/* Streams */}
        <div className="flex flex-wrap gap-4">
          {streamInfo.map((stream) => (
            <StreamCard key={stream.id} stream={stream} />
          ))}
        </div>
      </main>

      {/* Footer */}
    </>
  );
}
