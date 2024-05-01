type Result = {
  pageId: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    height: number;
    width: number;
  };
};

type SearchResult = {
  query?: {
    pages?: Result[];
  };
};
