import { useState } from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import dayjs, { Dayjs } from "dayjs";
import { CardsGrid } from "../../components/CardsGrid/CardsGrid";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSearchResult } from "../../hooks/queryHooks";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState("");
  const [yearStart, setYearStart] = useState("");
  const [yearEnd, setYearEnd] = useState("");

  const { isPending, isLoading, error, data, refetch } = useSearchResult(
    query,
    yearStart,
    yearEnd,
    page
  );

  if (error) return "An error has occurred: " + error.message;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={8} className="flex_all-center">
            <TextField
              required
              label="Search query required"
              fullWidth
              onChange={(event) => setQuery(event.target.value)}
            ></TextField>
          </Grid>

          <Grid item xs={12} sm={10} md={5} lg={3} className="flex_all-center">
            <DatePicker
              views={["year"]}
              label="From"
              onChange={(event: Dayjs | null) => {
                const year = event ? event.year().toString() : "";
                setYearStart(year);
              }}
              maxDate={yearEnd ? dayjs(yearEnd) : undefined}
              disableFuture={true}
              slotProps={{ textField: { fullWidth: true } }}
            />
            <DatePicker
              views={["year"]}
              label="To"
              onChange={(event: Dayjs | null) => {
                const year = event ? event.year().toString() : "";
                setYearEnd(year);
              }}
              minDate={yearStart ? dayjs(yearStart) : undefined}
              disableFuture={true}
              sx={{ marginLeft: "16px" }}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          <Grid item xs={12} sm={2} md={1} lg={1} className="flex_all-center">
            <IconButton
              aria-label="search"
              size="large"
              onClick={() => refetch()}
              disabled={query ? false : true}
              color="primary"
            >
              <SearchIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={12}
            sm={22}
            md={12}
            lg={12}
            className="flex_all-center"
          >
            {isPending ? (
              isLoading && (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              )
            ) : (
              <CardsGrid data={data} />
            )}
            {error && <div>An error has occurred: {error}</div>}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className="flex_all-center">
            <IconButton
              aria-label="next"
              size="large"
              onClick={() => setPage(state => state + 1)}
              color="primary"
              sx={{display: data ? 'block' : 'none'}}
            >
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </LocalizationProvider>
  );
}

export default SearchPage;
