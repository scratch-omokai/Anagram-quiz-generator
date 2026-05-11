export async function fetch_views(title: string){
  const fetch_url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/ja.wikipedia/all-access/all-agents/${encodeURIComponent(title)}/monthly/20260401/20260430`;
  try{
    const response = await fetch(fetch_url);
    if(!response.ok) return 0;
    const data = await response.json();
    return data.items[0].views;
  }catch(error){
    console.error("Error fetching data:", error);
    return 0;
  }
}