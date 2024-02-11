import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ImageItem } from "../../types/data";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function ActionCard({ item, index }: { item: ImageItem; index: number }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const { data, links } = item;
  const itemData = data[0];

  return (
    <Card ref={ref} sx={{ maxWidth: 345 }}>
      <CardActionArea
        component={Link}
        to={`/show/${index}/${itemData.nasa_id}`}
        sx={{ textDecoration: "none" }}
      >
        <CardMedia
          component="img"
          height="250"
          title={"title"}
          sx={{ padding: "1em", objectFit: "contain", aspectRatio: "auto 3/4" }}
          image={inView ? links[0].href : ""}
          alt={data[0].title}
        />
        <CardContent>
          <Typography noWrap variant="h5" component="div">
            Title: {itemData.title ? itemData.title : "No data"}
          </Typography>
          <Typography noWrap color="text.secondary">
            Location: {itemData.location ? itemData.location : "No data"}
          </Typography>
          <Typography noWrap color="text.secondary">
            Photographer:
            {itemData.photographer ? itemData.photographer : "No data"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export { ActionCard };
