<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * robotheme theme.
 */

// this is specific to my use case
// change 'theme' to your theme name, as you would with any
// preprocess function
function theme_omega_layout_alter(&$layout) {
  $cPath = current_path();
  if (strpos($cPath, 'invite-print') !== 0) {
    $layout = 'plain';
  }
}
