export function hasClass(ele, cls) {
  return new RegExp(cls).test(ele.className || '');
}

export function addClass(ele, cls) {
  var _pattern = new RegExp(cls);
  if (!_pattern.test(ele.className)) ele.className += ' ' + cls;
  return ele;
}

export function removeClass(ele, cls) {
  if (!ele || ele.nodeType !== 1) return;
  var _pattern = new RegExp(cls);
  if (_pattern.test(ele.className || '')) ele.className = ele.className.replace(_pattern, '');
  return ele;
}