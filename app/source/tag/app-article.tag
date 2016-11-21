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

  <script>
    this.items = articles;

    // var i = 0;
    // this.category = this.items[i].category;
    // this.postTitle = this.items[i].post.title;
    // this.postUrl = this.items[i].post.url;
    // this.sourceTitle = this.items[i].source.title;
    // this.sourceUrl = this.items[i].source.url;
    // console.log(this.category, this.postTitle, this.postUrl, this.sourceTitle, this.sourceUrl);
  </script>
</app-articles>
