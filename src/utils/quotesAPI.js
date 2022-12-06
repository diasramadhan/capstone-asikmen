const ENDPOINT = 'https://api.quotable.io';

export default async function getFamousQuotes() {
  const res = await fetch(`${ENDPOINT}/random?tags=famous-quotes`);
  const data = await res.json();
  return data;
}
