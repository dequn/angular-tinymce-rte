/*********************************************************************************
 *     File Name           :     rte.directive.js
 *     Created By          :     DQ - D.Q.Zhang.chn@gmail.com
 *     Creation Date       :     [2016-01-16 22:56]
 *     Last Modified       :     [2016-01-24 10:39]
 *     Description         :
 **********************************************************************************/

(function() {
  angular.module('ui.rte')
    .directive('rte', rte);


  function rte() {
    var directive = {
      restrict: 'A',
      link: link,
      scope: {
        selector: '=',
        plugins: '=',
        toolbars: '=',
        language: '=',
        minHeight: '=',
        maxHeight: '=',
        placeholder: '=',
        settings: '='
      },
      template: '<div id="rte"></div>',
    };

    return directive;

    function link(scope, el, attr) {

      var defaultSetting = {
        selector: scope.selector || 'div#rte',
        language: scope.language || 'zh_CN',
        plugins: scope.plugins || 'imageuploadtoqiniu attachment table contextmenu searchreplace charmap advlist hr link autolink fullpage autoresize wordcount paste',
        //plugins: scope.plugins || 'table searchreplace advlist hr link autolink fullpage autoresize wordcount paste',
        toolbar1: 'bold italic underline strikethrough subscript superscript  charmap  hr removeformat | undo redo cut copy paste searchreplace ',
        toolbar2: 'bullist numlist | outdent indent blockquote | link unlink image attachment',
        menubar: false,
        paste_as_text: true,
        autoresize_min_height: scope.minHeight || 200,
        autoresize_max_height: scope.maxHeight || 400,
        content_style: "img {max-width:100%}",
        setup: function(editor) {},
      };
      !scope.settings ? tinymce.init(defaultSetting) : tinymce.init(scope.settings);


    }

  }


})();
