<app-articles id="js-articles" class="l-section-contents">
  <article each={ items } class="article clearfix">
    <span class="article-category">
      <span class="icon icon-category"></span>{category}
    </span>
    <h1 class="article-title">
      <a href="{postUrl}">{postTitle}</a>
    </h1>
    <a class="article-source" href="{sourceUrl}" target="_blank">
      <span class="article-source-title">{sourceTitle}</span>
      <span class="article-source-url">{sourceUrl}</span>
    </a>
  </article>


  <script>
    this.items = articles;

    var i = 0;
    this.category = this.items[i].category;
    this.postTitle = this.items[i].post.title;
    this.postUrl = this.items[i].post.url;
    this.sourceTitle = this.items[i].source.title;
    this.sourceUrl = this.items[i].source.url;
    console.log(this.category, this.postTitle, this.postUrl, this.sourceTitle, this.sourceUrl);
  </script>
</app-articles>
