
import { articles_url, _api_key, country_code,category } from '../config/new_config';
const url = `${articles_url}?country=${country_code}&category=${category}`;
export async function getArticles() {
    try {
      let response = await fetch(url,{
        headers: {
            'X-API-KEY': _api_key
        }
      });
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
     throw error;
    }
  }
