import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";

export default function StreamCard({ stream }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{stream.name}</CardTitle>
        <CardDescription>Status: {stream.status}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Link to={`/app/stream/${stream.id}`}>
          <Button>Manage stream</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
