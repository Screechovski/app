export const createApiClient = (baseUrl: string) => {
  return {
    get: (uri: string, queryParams?: { [s: string]: string }) => {
      const url = new URL(uri.replace(/^\//, ""), `${baseUrl.replace(/\/$/, "")}/`);
      if (queryParams && Object.keys(queryParams).length) {
        const cleanQueryParams = Object.fromEntries(
          Object.entries(queryParams).filter(([, value]) => !!value),
        );
        url.search = new URLSearchParams(cleanQueryParams).toString();
      }
      return fetch(url).then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.url}`);
        return res.json();
      });
    },
  };
};
