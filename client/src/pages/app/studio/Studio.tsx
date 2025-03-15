import Header from "@/components/layout/Header";
import studioPlaceholder from "@/assets/studio-placeholder.jpg";

export default function Studio() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />

        <main className="flex-grow border border-red-500">
          <div className="flex flex-col items-center justify-between gap-5 h-full border border-red-600 py-10">
            <div className="flex gap-2 border w-full justify-center">
              <div>
                <p>00:00:00</p>
              </div>
              <div>Live</div>
              <div>1 Viewer</div>
            </div>

            <div className="flex gap-2 w-full justify-center">
              <div className="w-3/7">
                <img src={studioPlaceholder} alt="Hero" className="w-full h-auto rounded-lg md:rounded-3xl" />
              </div>
              <div className="border w-1/5">Chat</div>
            </div>

            <div className="flex gap-2">
              <div>Mic</div>
              <div>Vid</div>
              <div>Stream Status</div>
              <div>Start / End Button</div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
