const wiki_content = document.querySelector<HTMLDivElement>("#wiki-content")!;

export function add_wiki_content(title: string, content: string) {
  const article_box = document.createElement("div");
  article_box.className = "article-box";

  const title_element = document.createElement("h2");
  title_element.textContent = title;

  const content_element = document.createElement("p");
  content_element.textContent = content;

  article_box.appendChild(title_element);
  article_box.appendChild(content_element);
  wiki_content.appendChild(article_box);
}