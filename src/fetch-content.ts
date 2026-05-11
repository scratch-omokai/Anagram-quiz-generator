export async function random_wiki(){
  const fetch_url = "https://ja.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=extracts&explaintext&exintro&origin=*";
  try{
    const response = await fetch(fetch_url);
    if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();

    const pages = data.query.pages;
    const page_id = Object.keys(pages)[0];
    const page_data = pages[page_id!];

    return{
      title: page_data.title,
      content: page_data.extract
    };
  }catch(error){
    console.error("Error fetching data:", error);
    return null;
  }
}