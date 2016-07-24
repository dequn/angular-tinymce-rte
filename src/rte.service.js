/**
 *rte.service.js
 *
 *Released under MIT License.
 *Copyright (c) 2014-2015 www.friendsbt.com. All rights reserved.
 *
 */
(function() {

  angular.module('ui.rte').factory('rte', rte);

  function rte() {

    var initContent = '';
    var defaultSetting = {
      init_instance_callback: function(editor) {
        service.currentEditor = editor;
      }
    };

    var service = {
      init: init,
      initSetting: defaultSetting,
      initContent: initContent,
      clearContent: clearContent,
      getContent: getContent,
      resetContent: resetContent,
      destroy: destroy,
      currentEditor: null,

    };
    return service;

    function init(selector,setting) {
      service.initContent = angular.element(selector).html();
      service.askInitSetting['selector'] = selector;
      tinymce.init(setting || service.askInitSetting);
    }

    function clearContent() {
      service.currentEditor.setContent('');
    }

    function getContent() {
      return service.currentEditor.getContent();
    }

    function resetContent() {
      service.currentEditor.setContent(service.initContent);
    }

    function destroy() {
      service.currentEditor.destroy();
    }

    function setEditorSetting(editorSetting) {
      service.initSetting = editorSetting;
    }

  }

})();
