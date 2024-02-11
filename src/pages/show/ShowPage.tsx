import { Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDataFromNasaId } from "../../hooks/queryHooks";
import { DetailedCard } from "../../components/DetailedCard/DetailedCard";

const ShowPage = () => {
  const { nasaId } = useParams();
  const { data, isPending } = useDataFromNasaId(nasaId ? nasaId : "");

  if (isPending)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );

  const itemData = data.collection.items[0].data[0];
  const imageUrl = data.collection.items[0].href;
  return data && <DetailedCard data={itemData} imageUrl={imageUrl} />;
};

export { ShowPage };
