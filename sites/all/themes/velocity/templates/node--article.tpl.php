<article<?php print $attributes; ?>>
  <?php print $user_picture; ?>
  <?php print render($title_prefix); ?>
  <?php if (!$page && $title): ?>
  <header>
    <h2<?php print $title_attributes; ?>><a href="<?php print $node_url ?>" title="<?php print $title ?>"><?php print $title ?></a></h2>
  </header>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <!--
  <?php if ($display_submitted): ?>
  <footer class="submitted"><?php print $date; ?> -- <?php print $name; ?></footer>
  <?php endif; ?>  
  -->
  
  <div<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
	  $tags = render($content['field_tags']);
	  $addthis = render($content['field_addthis']);
      print render($content);
    ?>
  </div>
  
  <div class="node-information">
  <?php //var_dump($content['comments']); ?>
    <div class="node-post-date"><?php print $date; ?></div>
    <div class="node-user"><?php print $name ?></div>
    <!-- <div class="node-comment-count"><?php //$comment_count = db_result(db_query('SELECT COUNT(cid) AS count FROM {comments} WHERE nid = %d', $nid)); print $comment_count; ?></div> -->
    <div class="node-tags"><?php print $tags; ?></div>
  </div>
  
  <div class="node-addthis">
    <?php print $addthis; ?>
  </div>
  
  <div class="clearfix">
    <?php if (!empty($content['links'])): ?>
      <nav class="links node-links clearfix"><?php print render($content['links']); ?></nav>
    <?php endif; ?>

    <?php print render($content['comments']); ?>
  </div>
</article>