var disableBackScrollbar = function () {
  if (window.location.hash.match(/^\#portfolio\-piece/)) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
};

window.addEventListener('hashchange', disableBackScrollbar);

disableBackScrollbar();