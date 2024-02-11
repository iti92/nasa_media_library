import { useQuery, useQueryClient } from "@tanstack/react-query";
import HttpService from "../utils/fetchData";
import { ImagesCollection, ImageData, ImageLink } from "../types/data";

const DATA_LIST = "dataList";

function useSearchResult(query: string, yearStart: string, yearEnd: string, page: string) {
  const queryObject = useQuery({
    queryKey: [DATA_LIST, query, yearStart, yearEnd, page],
    queryFn: () =>
      HttpService.fetchImages({
        key: DATA_LIST,
        query,
        yearStart: yearStart ? yearStart : '',
        yearEnd: yearEnd ? yearEnd : '',
        page,
      }),
    enabled: false,
  });

  return queryObject;
}

function useDataFromNasaId(nasaId: string) {
  return useQuery({
    queryKey: [nasaId],
    queryFn: () =>
      HttpService.fetchByNasaId(nasaId).then((res) =>
        res.json())
  });
}

function useCardFromCache(index: number) {
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  const queries = queryCache.findAll({ queryKey: [DATA_LIST] });

  if (!queries[queries.length - 1]) return;

  const state = queries[queries.length - 1].state.data as ImagesCollection;
  const { data, links } = state.collection.items[index];
  return { data: data[0], link: links[0],  };
}

function useCardData(index: string, nasaId: string) {
  const cache = useCardFromCache(+index);
  const newData = useDataFromNasaId(nasaId);
  if (cache) {
    const cacheData: ImageData = cache.data
    const cacheLink: ImageLink = cache.link
    return { data: cacheData, link: cacheLink }
  }
  
  newData.refetch()
  
  if (newData.data) {
    const item = newData.data.collection.items[0]
    return { data: item.data[0], link: item.links[0], isPending: newData.isPending };
  }
}

function useCardImages(url: string) {
  return useQuery({
    queryKey: [url],
    queryFn: () =>
      HttpService.fetchByNasaId(url).then((res) =>
        res.json())
  });
}

export { useSearchResult, useCardFromCache, useCardData, useDataFromNasaId, useCardImages }