// Создаю макет клавиатуры
const textareaField = document.createElement('textarea');
document.body.append(textareaField);
textareaField.classList.add('textarea-class');
textareaField.setAttribute('autofocus', ''); // Не работает


const keyboardField = document.createElement('ul');
document.body.append(keyboardField);
keyboardField.classList.add('keyboard-class');

const keyboardButtons = [
  [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '|', 'CapsLK', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'Shift', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'],
  [
    'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|', 'CapsLK', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&uarr;', 'Shift', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'],
  [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|', 'CapsLK', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'],
    [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '|', 'CapsLK', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&uarr;', 'Shift', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'],
];


for (let i = 0; i < keyboardButtons[0].length; i += 1) {
  const buttons = document.createElement('li');

  buttons.classList.add('btn-class');
  buttons.innerHTML = keyboardButtons[0][i];

  buttons.setAttribute('id', keyboardButtons[0][i].charCodeAt(0));

  keyboardField.append(buttons);
  if (keyboardButtons[0][i] === 'Backspace' || keyboardButtons[0][i] === 'Tab' || keyboardButtons[0][i] === 'CapsLK' || keyboardButtons[0][i] === 'Enter' || keyboardButtons[0][i] === 'Shift' || keyboardButtons[0][i] === 'Ctrl' || keyboardButtons[0][i] === 'Fn' || keyboardButtons[0][i] === 'Alt' || keyboardButtons[0][i] === 'Space') {
    buttons.classList.add(`${keyboardButtons[0][i]}-class`);
  }
}

// Делаю интерактивность кнопок
keyboardField.addEventListener('mousedown', (event) => {
  const { target } = event;
  if (target.tagName !== 'LI') return;
  keyboardField.querySelectorAll('li').forEach((elem) => {
    elem.classList.remove('press-btn');
  });
  target.classList.add('press-btn');
});

keyboardField.addEventListener('mouseup', (event) => {
  const { target } = event;
  if (target.tagName !== 'LI') return;
  target.classList.remove('press-btn');
});

// Выводим буквы на экран
textareaField.value = '';
keyboardField.addEventListener('click', (event) => {
  if (event.target.tagName !== 'LI') return;
  const text = event.target.innerHTML;
  if (text === 'Space') {
    (textareaField.value += ' ');
  } else if (text === 'Backspace') {
    textareaField.value = textareaField.value.substr(0, textareaField.value.length - 1);
  } else if (text === 'Enter') {
    textareaField.value += '\r\n';
  } else if (text === 'Tab') {
    textareaField.value += '    ';
  } else if (text === 'CapsLK') {
    document.querySelectorAll('li').forEach((el) => {
      if (el.innerHTML.length === 1) {
        el.classList.toggle('upper');
      }
    });
  } else if (text.length === 1) {
    textareaField.value += text;
  }
});

// window.addEventListener('keydown', (event) => {
//   const li = keyboardField.getElementById(event.keyCode);

//   if (li != null) {

//   }
// });
