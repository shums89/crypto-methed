const hide = (elem, answer) => {
  if (!elem.classList.contains('faq__item_show') || elem.classList.contains('collapsing')) return;

  answer.style.height = `${answer.offsetHeight}px`;
  answer.offsetHeight;
  answer.style.display = 'block';
  answer.style.height = 0;
  answer.style.overflow = 'hidden';
  answer.style.transition = 'height 360ms ease-in-out';
  elem.classList.remove('faq__item_show');
  elem.classList.add('collapsing');

  setTimeout(() => {
    answer.style.display = '';
    answer.style.height = '';
    answer.style.overflow = '';
    answer.style.transition = '';
    elem.classList.remove('collapsing');
  }, 360);
};

const show = (elem, answer) => {
  if (elem.classList.contains('faq__item_show') || elem.classList.contains('collapsing')) return;

  answer.style.display = 'block';
  const height = answer.offsetHeight;
  answer.style.height = 0;
  answer.style.overflow = 'hidden';
  answer.style.transition = 'height 360ms ease-in-out';
  answer.offsetHeight;
  answer.style.height = `${height}px`;
  elem.classList.add('collapsing');

  setTimeout(() => {
    elem.classList.add('faq__item_show');
    answer.style.display = '';
    answer.style.height = '';
    answer.style.overflow = '';
    answer.style.transition = '';
    elem.classList.remove('collapsing');
  }, 360);
};

export const accordion = () => {
  const list = document.querySelector('.faq__list');

  list.addEventListener('click', (e) => {
    const button = e.target.closest('.faq__question');

    if (button) {
      const item = button.closest('.faq__item');
      const answer = item.querySelector('.faq__answer');

      item.classList.contains('faq__item_show') ? hide(item, answer) : show(item, answer);
    }
  });
}