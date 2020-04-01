
const keyboardButtonsRU = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '←', '↓', '→'],
  [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|', 'CapsLK', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'],
];

const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'WakeUp', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

// Создаю поле для ввода
const textareaField = document.createElement('textarea');
document.body.append(textareaField);
textareaField.classList.add('textarea-class');
textareaField.focus();

// Создаю каркас клавиатуры
const keyboardField = document.createElement('ul');
document.body.append(keyboardField);
keyboardField.classList.add('keyboard-class');

// Создаю кнопки клавиатуру
// function makeKeyboard() {
//   for (let i = 0; i < keyboardButtonsRU.length; i += 1) {
//     const buttons = document.createElement('li');

//     buttons.classList.add('btn-class');
//     buttons.innerHTML = keyboardButtonsRU[i];

//     buttons.setAttribute('id', keyCodes[i]);

//     keyboardField.append(buttons);
//   }
// }
// makeKeyboard();

let j = 0;
function makeKeyboard() {
  for (let i = 0; i < keyboardButtonsRU[j].length; i += 1) {
    const buttons = document.createElement('li');

    buttons.classList.add('btn-class');
    buttons.innerHTML = keyboardButtonsRU[j][i];

    buttons.setAttribute('id', keyCodes[i]);

    keyboardField.append(buttons);
  }
}
makeKeyboard();

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
function showLetters() {
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
    } else if (text === 'CapsLock') {
      document.querySelectorAll('li').forEach((el) => {
        if (el.innerHTML.length === 1) {
          el.classList.toggle('upper');
        }
      });
      // keyboardButtonsRU.toUpperCase();
    } else if (text.length === 1) {
      textareaField.value += text;
    }
    textareaField.focus();
  });
}
showLetters();


// Связь реальной клавиатуры с виртуальной
function showButton() {
  window.addEventListener('keydown', (event) => {
    const li = document.getElementById(event.code);
    if (li != null) {
      Array.from(document.getElementsByTagName('li')).forEach((el) => {
        if (el.classList.contains('press-btn') && el.innerHTML === 'Tab') { el.classList.remove('press-btn'); }
      });
      li.classList.add('press-btn');
    }
  });
  window.addEventListener('keyup', (event) => {
    const li = document.getElementById(event.code);
    if (li != null) {
      li.classList.remove('press-btn');
    }
  });
}
showButton();

// Для CapsLock
window.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock') {
    document.querySelectorAll('li').forEach((el) => {
      if (el.innerHTML.length === 1) {
        el.classList.toggle('upper');
      }
    });
  }
});

// Переключать язык
let flag = false;
window.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft') flag = true;
  if (event.code === 'AltLeft' && flag) {
    console.log('Работает');
    j = 1;
    makeKeyboard();
  }
});
