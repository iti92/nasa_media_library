import { DataQuery } from "../types/dataQueries";

const API_URL = 'https://images-api.nasa.gov';

export default class HttpService {
  public static async fetchImages(params: DataQuery) {
    let url = `${API_URL}/search?media_type=image`;

    if (params.query) {
      url += `&q=${encodeURIComponent(`${params.query}`)}`;
    }

    if (params.yearStart) {
      url += `&year_start=${encodeURIComponent(params.yearStart)}`;
    }

    if (params.yearEnd) {
      url += `&year_end=${encodeURIComponent(params.yearEnd)}`;
    }

    if (params.page) {
      url += `&page=${encodeURIComponent(params.page)}`;
    }

    const response = await fetch(url);
    return response.json();
  }

  public static async fetchByNasaId(nasaId: string) {
    const url = `${API_URL}/search?media_type=image&nasa_id=${encodeURIComponent(nasaId)}`;
    return fetch(url);
  }

  public static async fetchImageAssets(url: string) {
    return fetch(url);
  }
}