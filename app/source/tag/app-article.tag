<app-articles id="js-articles" class="l-section-contents">
  <article each={ item in items } class="article clearfix">
    <span class="article-category">
      <span class="icon icon-category"></span>{item.category}
    </span>
    <h1 class="article-title">
      <a href="{item.post.url}">{item.post.title}</a>
    </h1>
    <a class="article-source" href="{item.source.url}" target="_blank">
      <span class="article-source-title">{item.source.title}</span>
      <span class="article-source-url">{item.source.url}</span>
    </a>
  </article>

  this.items = articles;

</app-articles>
