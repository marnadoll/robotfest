<?php
/**
 * @file views-isotope.tpl.php
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<div id="isotope-container">
  <?php
    $count = 0;
    foreach ($rows as $row):
  ?>
    <div class="isotope-element <?php print $isotope_filter_classes[$count]; ?>" data-category="<?php print $isotope_filter_classes[$count]; ?>">
      <div class="views-row-inner">
        <?php print $row; ?>
      </div>
    </div>
  <?php
      $count++;
    endforeach;
  ?>
</div>