import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";

export default function StreamControls() {
  function deleteStream() {
    console.log("Stream deleted!");
  }
  return (
    <>
      <section className="bg-white border-2 rounded-lg p-4 flex flex-col gap-4">
        <div>
          <h2 className="font-semibold">Stream Controls</h2>
          <p className="text-muted-foreground text-sm">Control your stream here.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="destructive" onClick={deleteStream}>
            Delete stream
          </Button>
          <Link to="/app/studio/1">
            <Button>Configure stream</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
