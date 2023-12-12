"use client";
import { Button, Input } from "@nextui-org/react";
import { Snippet } from "@nextui-org/react";
import { useState } from "react";

function InputoutputLink() {
  const [link, setLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");

  const shortener = async () => {
    const url = "https://url-shortener-service.p.rapidapi.com/shorten";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "795b49aae7mshccd3ab86cb6e948p10c750jsndb2382523d0a",
        "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
      },
      body: new URLSearchParams({
        url: link,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setShortenedLink(result.result_url);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-4/5 md:w-2/5 mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          type="text"
          label="your Link here"
          onChange={(e) => setLink(e.target.value)}
        />
        <Button
          className="font-bold bg-cyan-700 md:h-auto text-white"
          onClick={shortener}
        >
          Shorten
        </Button>
      </div>
      <div className="mt-10">
        {shortenedLink.length > 0 ? (
          <Snippet className="bg-cyan-100 w-full">{shortenedLink}</Snippet>
        ) : (
          <div className="w-full bg-cyan-100">
            {link.length > 0 ? (
              <Button isLoading className="w-full">
                Shortening...
              </Button>
            ) : (
                <Button isLoading className="w-full">
                Enter a link to shortening
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputoutputLink;
