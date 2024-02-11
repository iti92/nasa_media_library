import {
  Typography,
  Button,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import { CardImage } from "../CardImage/CardImage";
import { useNavigate } from "react-router-dom";
import { ImageData } from "../../types/data";
import dayjs from "dayjs";

function DetailedCard({
  data,
  imageUrl,
}: {
  data: ImageData;
  imageUrl: string;
}) {
  const navigate = useNavigate();

  return (
    <Container>
      <Button
        variant="outlined"
        onClick={() => navigate("/")}
        style={{ marginBottom: "16px" }}
      >
        Back to Search Results
      </Button>

      <Card>
        <CardImage url={imageUrl} />
        <CardContent>
          <Typography variant="h5" component="div">
            Title: {data.title ? data.title : "No data"}
          </Typography>
          <Typography color="text.secondary">
            Location: {data.location ? data.location : "No data"}
          </Typography>
          <Typography color="text.secondary">
            Photographer:
            {data.photographer ? data.photographer : "No data"}
          </Typography>
          <Typography color="text.secondary">
            Date:
            {dayjs(data.date_created).format("DD/MM/YYYY")
              ? dayjs(data.date_created).format("DD/MM/YYYY")
              : "No data"}
          </Typography>
          <Typography variant="body2" component="div">
            Description: {data.description ? data.description : "No data"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Keywords:{" "}
            {data?.keywords?.join(", ")
              ? data?.keywords?.join(", ")
              : "No data"}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export { DetailedCard };
