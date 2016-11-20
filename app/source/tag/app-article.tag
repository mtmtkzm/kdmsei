<app-articles id="js-articles" class="l-section-contents">
  <article class="article clearfix">
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
</app-articles>

<script>
  this.items = articles;
  console.log(this.items);

  var i = 0;
  this.category = articles[i].category;
  this.postTitle = articles[i].post.title;
  this.postUrl = articles[i].post.url;
  this.sourceTitle = articles[i].source.title;
  this.sourceUrl = articles[i].source.url;
  console.log(this.category, this.postTitle, this.postUrl, this.sourceTitle, this.sourceUrl);

</script>
