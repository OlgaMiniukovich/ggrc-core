/*!
    Copyright (C) 2016 Google Inc.
    Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

(function (can) {
  'use strict';

  GGRC.Components('spinner', {
    tag: 'spinner',
    template: can.view(
      GGRC.mustache_path +
      '/components/spinner/spinner.mustache'
    ),
    scope: {
      extraCssCls: '@',
      size: '@',
      toggle: null
    }
  });
})(window.can);
