function setHeaderValue(headers, key, value) {
  const lowerKey = key.toLowerCase();
  headers.hasOwnProperty(lowerKey) ? headers[lowerKey] = value : headers[key] = value;
}

const modifiedHeaders = { ...$request.headers };
setHeaderValue(modifiedHeaders, 'X-RevenueCat-ETag', '');

$done({ headers: modifiedHeaders });
