const fetch_button = document.querySelector<HTMLButtonElement>("#fetch-button")!;
const wiki_content = document.querySelector<HTMLDivElement>("#wiki-content")!;

const max_fetches = 10;
const min_views = 0;

import { random_wiki } from "./fetch-content";
import { add_wiki_content } from "./add-wiki-content";
import { fetch_views } from "./fetch-views";

add_wiki_content("Wikipediaからランダムに記事を取得するサンプル", "「Wikipediaからランダムに記事を取得するサンプル」は、JavaScriptを使用してWikipediaのAPIからランダムな記事を取得し、その内容をウェブページに表示するサンプルコードです。ユーザーがボタンをクリックすると、WikipediaのAPIにリクエストが送信され、ランダムな記事のタイトルと内容が取得されます。その後、取得した情報がウェブページ上に表示されます。");

fetch_button.addEventListener("click", async () => {
  fetch_button.disabled = true;

  wiki_content.textContent = "";

  let wiki_data, views;
  let max_views: number = 0 ,max_views_data;
  for(let i = 0; i < max_fetches; i++){
    wiki_data = await random_wiki();
    if (wiki_data) {
      views = await fetch_views(wiki_data.title);
      if(views >= min_views) break;
      if(views > max_views){
        max_views = views;
        max_views_data = wiki_data;
      }
    }
  }
  if(views < min_views){
    add_wiki_content(max_views_data!.title, `${max_views_data!.content}\n\n閲覧数: ${max_views}`);
  }else{
    add_wiki_content(wiki_data!.title, `${wiki_data!.content}\n\n閲覧数: ${views}`);
  }

  fetch_button.disabled = false;
});