const serverUrl = process.env.SERVER_URL ?? process.env.NEXT_PUBLIC_SERVER_URL ?? 'server-url-not-set';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

export async function makeRequest(url: URL, init?: RequestInit) {
  const extendedInit = init || { method: 'GET' };
  extendedInit.headers = createHeaders(extendedInit.headers);

  const response = await fetch(url.toString(), extendedInit);
  if (response.ok) {
    try {
      return await response.json();
    } catch (e) {
      console.warn(e);
      return response;
    }
  }

  let errorDetail;
  try {
    errorDetail = await response.json();
  } catch (e) {
    // console.warn(e);
    errorDetail = 'Unparseable JSON in error response';
  }
  return { error: errorDetail, source: response };
}

function createHeaders(headers?: Record<string, string> | HeadersInit): Record<string, string> {
  const newHeaders = Object.assign({}, defaultHeaders, Authenticator.venueHeaders, headers);
  // you are supposed to be able to do this:
  // new Headers(newHeaders) and have it initialize with all the headers you've passed the constructor
  // but it just creates an empty Headers object.
  // fetch() will accept an object with string K/V pairs instead, so that's what we're doing

  return newHeaders;
}

// user functions
export async function houses(searchParams: string, pageSize?: number) {
  const url = new URL(`${process.env.SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL}/house/`);
  url.searchParams.append('search', searchParams);
  if (pageSize) {
    url.searchParams.append('page_size', pageSize.toString());
  }
  return await makeRequest(url);
}
