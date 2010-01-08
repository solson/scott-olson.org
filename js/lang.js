function setLang(lang, first) {
  var animSpeed;
  if (!first) animSpeed = 'slow';

  if (lang == undefined) lang = 'all';

  var langs = ['en', 'eo'];

  for (var i in langs) {
    var langElem = $('[lang=' + langs[i] + ']')
    if (langs[i] != lang && lang != 'all') {
      langElem.hide(animSpeed);
    } else {
      langElem.show(animSpeed);
    }
  }
}

function saveLang(lang) {
  $.cookie('lang', lang)
  setLang(lang);
}

// On page load
$(function() { setLang($.cookie('lang'), true); })
