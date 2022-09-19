var runtil = /Until$/,
  rparentsprev = /^(?:parents|prev(?:Until|All))/,
  isSimple = /^.[^:#\[\.,]*$/,
  POS = jQuery.expr.match.globalPOS

guaranteeUnique = {
  children: true,
  contents: true,
  next: true,
  prev: true,
};

jQuery.fn.extend({
  find: function( selector) {
    var i, l, length, n, r, ret,
    self = this;