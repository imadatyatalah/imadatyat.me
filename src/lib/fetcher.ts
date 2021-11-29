// Source: https://github.com/leerob/leerob.io/blob/main/lib/fetcher.ts

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}
