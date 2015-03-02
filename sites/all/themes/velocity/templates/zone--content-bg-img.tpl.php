<?php 
/**
 * @file
 * Alpha's theme implementation to display a zone.
 */
?>
<?php if ($wrapper): ?><div<?php print $attributes; ?>><?php endif; ?>
<div class="zone-inner-wrapper">
  <div<?php print $content_attributes; ?>>
    <div class="zone-inner">
    <?php print $content; ?>
    </div>
  </div>
</div>
<?php if ($wrapper): ?></div><?php endif; ?>