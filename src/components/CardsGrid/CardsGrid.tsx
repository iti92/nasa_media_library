
import Grid from "@mui/material/Grid";
import { ActionCard } from "../ActionCard/ActionCard";
import { ImagesCollection, ImageItem } from "../../types/data";

function CardsGrid({ data }: { data: ImagesCollection }) {
  return (
    <>
      <Grid container spacing={2}>
        {data.collection.items.map((item: ImageItem, index: number) => {
          return (
            <Grid
              key={item.data[0].nasa_id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="flex_all-center"
            >
              <ActionCard item={item} index={index} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export { CardsGrid };
