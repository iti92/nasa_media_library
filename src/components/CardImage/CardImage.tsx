import { CardMedia } from "@mui/material";
import { prepareImageUrl } from "../../utils/imageHelpers";
import { useEffect, useState } from "react";

interface CardParams {
  url: string;
}

function CardImage(params: CardParams) {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    fetch(params.url)
      .then((response) => response.json())
      .then((data) => {
        const url = prepareImageUrl(data);
        setImageUrl(url ? url : "");
      });
  }, [params.url, imageUrl]);

  return (
    <CardMedia
      component="img"
      title={"title"}
      sx={{ padding: "1em", objectFit: "contain", maxHeight: "60vh" }}
      image={imageUrl}
    />
  );
}

export { CardImage };
