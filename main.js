define(function(require, exports, module) {
  var ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
      AppInit = brackets.getModule("utils/AppInit");

  AppInit.appReady(function () {

    // Load theme so MiniMap inherits styles
    ExtensionUtils.loadStyleSheet(module, 'theme.less');

    // Use dark brackets UI
    $('body').addClass('dark');
  });
});
