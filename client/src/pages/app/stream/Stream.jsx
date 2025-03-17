import { useParams } from "react-router-dom";

import Header from "../../../components/layout/Header";
import EmbedCodeCard from "./EmbedCodeCard";
import StreamControls from "./StreamControls";

export default function Stream() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <main className="px-2 md:px-36 py-5 gap-5 flex flex-col">
        <h1 className="text-2xl font-bold">Stream {id}</h1>

        {/* Controls */}
        <StreamControls />

        {/* Stream embed code */}
        <EmbedCodeCard />
      </main>
    </>
  );
}
