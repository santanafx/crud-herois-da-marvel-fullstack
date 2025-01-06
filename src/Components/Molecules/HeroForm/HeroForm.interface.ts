export interface HeroFormProps {
  editData?: {
    name: string;
    abilities: string;
    origin: string;
    image: string;
    _id: string;
  };
  onClose: () => void;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface ComicItem {
  resourceURI: string;
  name: string;
}

interface SeriesItem {
  resourceURI: string;
  name: string;
}

interface StoryItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface EventItem {
  resourceURI: string;
  name: string;
}

interface UrlItem {
  type: string;
  url: string;
}

export interface MarvelHero {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: ComicItem[];
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: SeriesItem[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: StoryItem[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: EventItem[];
    returned: number;
  };
  urls: UrlItem[];
}
