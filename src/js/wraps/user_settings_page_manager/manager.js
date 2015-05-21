define([
  '../../page_managers/toc_controller',
  'js/page_managers/one_column_view',
  'hbs!./user-settings-layout'
], function (
  PageManagerController,
  PageManagerView,
  PageManagerTemplate) {

  var PageManager = PageManagerController.extend({

    createView: function(options) {
      options = options || {};
      options.template = options.template || PageManagerTemplate;
      return new PageManagerView({template: PageManagerTemplate, className :  "s-user-settings-page-layout s-100-height",  id : "user-page-layout"  })
    }
  });
  return PageManager;
});