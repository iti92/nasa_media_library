interface ImagesCollection {
  collection: {
    href: string
    items: ImageItem[]
    links: CollectionLink[]
    metadata: { total_hits: string }
    version: string
  }
}

interface ImageItem {
  data: ImageData[]
  href: string
  links: ImageLink[]
}

interface ImageData {
  center: string
  date_created: string
  description: string
  keywords: string[]
  media_type: string
  nasa_id: string
  title: string
  location: string
  photographer: string
}

interface ImageLink {
  href: string
  rel: string
  render: string
}

interface CollectionLink {
  href: string
  prompt: string
  rel: string
}

export type { ImagesCollection, ImageItem, ImageData, ImageLink };




