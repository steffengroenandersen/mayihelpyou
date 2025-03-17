import { useParams } from "react-router-dom";

import Header from "../../../components/layout/Header";
import EmbedCodeCard from "./EmbedCodeCard";

export default function Stream() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <main className="px-36 py-5 gap-5 flex flex-col">
        <h1>Stream {id}</h1>
        {/* Stream information */}

        {/* Controls */}

        {/* Stream embed code */}
        <EmbedCodeCard />
      </main>
    </>
  );
}
