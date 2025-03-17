import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../../../components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function EmbedCodeCard() {
  const embedCode = `<iframe src="https://your-service.com/live-stream?customer_id=550e8400-e29b-41d4-a716-446655440000&stream_id=123e4567-e89b-12d3-a456-426614174000" width="800" height="450" frameborder="0" allowfullscreen></iframe>`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode).then(() => {
      setCopied(true);
    });
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Embed code</CardTitle>
          <CardDescription>
            Copy and paste the snippet below and insert into your {"<body>"} tag wherever you want the stream
            to appear. Once installed, the Stream will automatically go live when you start the stream.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea readOnly value={embedCode} className="bg-gray-100" />
        </CardContent>
        <CardFooter className=" flex justify-end">
          <Button onClick={handleCopy}>{copied ? "Copied!" : "Copy code"}</Button>
        </CardFooter>
      </Card>
    </>
  );
}
