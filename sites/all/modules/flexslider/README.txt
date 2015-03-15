Allows you to use FlexSlider in a few different ways
 
-- As a library to be used with any other theme or module by calling flexslider_add() (N.B. You may also use libraries_load('flexslider') however this is not recommended)
+- As a library to be used with any other theme or module by calling flexslider_add() (N.B. You may also use libraries_load('flexslider') or drupal_add_library('flexslider', 'flexslider'), but only if you want to control everything manually).
 - Integrates with Fields (flexslider_fields)
 - Adds a Views display mode (flexslider_views)
 
diff --git a/flexslider.install b/flexslider.install
index ca0f031..a088fd4 100755
--- a/flexslider.install
+++ b/flexslider.install
@@ -84,6 +84,7 @@ function flexslider_install() {
  */
 function flexslider_uninstall() {
   variable_del('flexslider_debug');
+  variable_del('flexslider_version');
 }
 
 /**
@@ -219,7 +220,9 @@ function _flexslider_requirements_library_installed(&$requirements) {
       return;
     }
     else {
-      $requirements['flexslider']['description'] = $t('Version %version installed', array( '%version' => $matches[1] . "." . $matches[2]));
+      $version = $matches[1] . "." . $matches[2];
+      variable_set('flexslider_version', $version);
+      $requirements['flexslider']['description'] = $t('Version %version installed', array( '%version' => $version));
       $requirements['flexslider']['value'] = $t('FlexSlider library installed.');
       return;
     }
diff --git a/flexslider.module b/flexslider.module
index 50611fc..2d3f089 100755
--- a/flexslider.module
+++ b/flexslider.module
@@ -4,6 +4,9 @@
  * A light-weight, customizable image gallery plugin for Drupal based on jQuery
  */
 
+define("FLEXSLIDER_VERSION", variable_get('flexslider_version', '2.0'));
+define("FLEXSLIDER_DEBUG", variable_get('flexslider_debug', FALSE));
+
 /**
  * Implements hook_libraries_info().
  */
@@ -57,8 +60,55 @@ function flexslider_libraries_info_alter(&$libraries) {
 }
 
 /**
+ * Implements hook_library().
+ *
+ * We also define FlexSlider through the core library callbacks
+ */
+function flexslider_library() {
+  $module_path = drupal_get_path('module', 'flexslider');
+  $library_path = libraries_get_path('flexslider');
+  
+  $libraries['flexslider'] = array(
+    'title' => 'FlexSlider',
+    'website' => 'http://flexslider.woothemes.com',
+    'version' => FLEXSLIDER_VERSION,
+    'js' => array(
+      $library_path . '/jquery.flexslider-min.js' => array(
+        'scope' => 'footer',
+      ),
+    ),
+    'css' => array(
+      $library_path . '/flexslider.css' => array(
+        'type' => 'file',
+        'media' => 'screen',
+      ),
+      $module_path . '/assets/css/flexslider_img.css' => array(
+        'type' => 'file',
+        'media' => 'screen',
+      ),
+    ),
+  );
+  return $libraries;
+}
+
+/**
+ * Implements hook_library_alter().
+ */
+function flexslider_library_alter(&$libraries, $module) {
+  // Enable debug mode
+  if (FLEXSLIDER_DEBUG) {
+    if ($module == 'flexslider' and isset($libraries['flexslider'])) {
+      $libraries['flexslider']['js'] = array(
+        libraries_get_path() . '/jquery.flexslider.js' => array(
+          'scope' => 'footer',
+        ),
+      );
+    }
+  }
+}
+
+/**
  * Implements hook_permission().
- * @author minorOffense <mwinstone@coldfrontlabs.ca>
  */
 function flexslider_permission() {
   return array(
