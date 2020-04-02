const keyboardButtons = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'Shift', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'],
  [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'],
  [
    'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&uarr;', 'Shift', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'],
  [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '|', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&uarr;', 'Shift', 'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;'],
];

const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'WakeUp', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];


// Создаю NOTICE
const noticeDiv = document.createElement('div');
noticeDiv.classList.add('notice');
noticeDiv.innerHTML = '<p><span>Notice!</span><br/>1. Клавиатура создана в ОС WIndows<br/>2. Комбинация клавиш для смены языка на реальной клавиатуре - Ctrl + Alt<br/>3. Клавиша для смены языка на виртуальной клавиатуре - Alt</p>';
document.body.append(noticeDiv);

// Создаю поле для ввода
const textareaField = document.createElement('textarea');
document.body.append(textareaField);
textareaField.classList.add('textarea-class');
textareaField.focus();

// Создаю каркас клавиатуры
const keyboardField = document.createElement('ul');
document.body.append(keyboardField);
keyboardField.classList.add('keyboard-class');

// Создаю кнопки клавиатуры
// j - переменная, в которой хранится индекс нужного массива из keyboardButtons
let j = 0;
function makeKeyboardButtons() {
  for (let i = 0; i < keyboardButtons[j].length; i += 1) {
    const buttons = document.createElement('li');

    buttons.classList.add('btn-class');

    buttons.setAttribute('id', keyCodes[i]);

    keyboardField.append(buttons);
  }
}
makeKeyboardButtons();

// Заполняю кнопки содержимым в зависимости от выбранного массива из keyboardButtons
const buttons = document.querySelectorAll('li');
function fillButtons() {
  for (let i = 0; i < keyboardButtons[j].length; i += 1) {
    for (let k = 0; k < buttons.length; k += 1) {
      buttons[k].innerHTML = keyboardButtons[j][i = k];
    }
  }
}
fillButtons();

// Создаю кнопку для очистки поля textarea
const buttonClear = document.createElement('button');
buttonClear.classList.add('button_clear');
buttonClear.innerHTML = 'Clear textarea';
document.body.append(buttonClear);

// Функционал для кнопки buttonClear
buttonClear.addEventListener('click', () => {
  textareaField.value = '';
  textareaField.focus();
});


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
let caps = false;
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
      textareaField.value += '\t';
      // Смена языка на виртальной клавиатуре на Alt
    } else if (text === 'Alt') {
      if (j === 0) {
        j = 1;
        fillButtons();
      } else if (j === 1) {
        j = 0;
        fillButtons();
      } else if (j === 2) {
        j = 3;
        fillButtons();
      } else if (j === 3) {
        j = 2;
        fillButtons();
      }
    } else if (text === 'CapsLock') {
      if (caps) {
        event.target.classList.remove('caps');
        caps = false;
        if (j === 2) {
          j = 0;
          fillButtons();
        }
        if (j === 3) {
          j = 1;
          fillButtons();
        }
      } else {
        event.target.classList.add('caps');
        caps = true;
        if (j === 0) {
          j = 2;
          fillButtons();
        } else if (j === 1) {
          j = 3;
          fillButtons();
        }
      }
    } else if (text.length === 1) {
      textareaField.value += text;
    }
    textareaField.focus();
  });
}
showLetters();


// Связь реальной клавиатуры с виртуальной - реакция на нажатие
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


// Функционал для CapsLock на реальной клавиатуре
window.addEventListener('keydown', (event) => {
  const li = document.getElementById(event.code);
  if (event.code === 'CapsLock') {
    if (caps === true) {
      caps = false;
      li.classList.remove('caps');
      if (j === 2) {
        j = 0;
        fillButtons();
      }
      if (j === 3) {
        j = 1;
        fillButtons();
      }
    } else {
      li.classList.add('caps');
      caps = true;
      if (j === 0) {
        j = 2;
        fillButtons();
      } else if (j === 1) {
        j = 3;
        fillButtons();
      }
    }
  }
});


// Функционал для Shift на реальной клавиатуре
window.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft') {
    if (j === 0) {
      j = 2;
      fillButtons();
    } else if (j === 1) {
      j = 3;
      fillButtons();
    }
  }
});
window.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft') {
    if (j === 2) {
      j = 0;
      fillButtons();
    } else if (j === 3) {
      j = 1;
      fillButtons();
    }
  }
});


// Переключать язык на реальной клавиатуре Ctrl + Alt
let flag = false;
window.addEventListener('keydown', (event) => {
  if (event.code === 'ControlLeft' || event.code === 'ControlRight') flag = true;
  if ((event.code === 'AltLeft' || event.code === 'AltRight') && flag) {
    if (j === 0) {
      j = 1;
      fillButtons();
    } else if (j === 1) {
      j = 0;
      fillButtons();
    } else if (j === 2) {
      j = 3;
      fillButtons();
    } else if (j === 3) {
      j = 2;
      fillButtons();
    }
  }
});
