import { parserRss } from "./parserRss"
import { replaceQueryParams } from "./replaceQueryParams"

export const getDataNews = async (url: string, category: string) => {
    const result = await parserRss(url)
    const data = result.items.map((items:any) => {
      const image = replaceQueryParams(items.enclosure.url, "q", "100")
      delete items.pubDate
      delete items["content:encoded"]
      delete items["content:encodedSnippet"]
      delete items.content
      delete items.guid
      items.image = {
        small: items.enclosure.url,
        large: image,
      }
      delete items.enclosure
      return items
    })

    return {
      'category': category,
      'data': data
    };
}