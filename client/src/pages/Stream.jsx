import { useParams } from "react-router-dom";

export default function Stream() {
  const { id } = useParams();
  return (
    <>
      <h1>Stream {id}</h1>
    </>
  );
}
