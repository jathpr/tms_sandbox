// Узнать является ли строка палиндромом.
// Слово палиндром - может читаться справа-налево и слева-направо одинаково. Прим “шалаш”.
function palindroMax(str) {
  let firstHalf = '';
  let secondHalf = '';
  const check = (l) => {
    for (let i = 0; i < l / 2; i++) {
      firstHalf += str[i];
      secondHalf += str[str.length - i - 1];
    }
    if (firstHalf === secondHalf) {
      console.log('yes');
      return true;
    } else {
      console.log('no');
      return false;
    }
  };
  if (str.length % 2 === 0) {
    check(str.length);
  } else {
    check(str.length - 1);
  }
}

// str.split('').reverse().join('') === str;

function palindrom(str) {
  let arr = str.split('');

  while (arr.length > 1) {
    if (arr[0] === arr[arr.length - 1]) {
      arr.shift();
      arr.pop();
    } else {
      return false;
    }
  }

  return true;
}

// console.log('шалаш' === 'шалаш');
function isPalindromWhile(string) {
  let letterNumber = 0;
  while (letterNumber < string.length / 2) {
    if (string[letterNumber] !== string[string.length - 1 - letterNumber]) return false;

    letterNumber = letterNumber + 1;
  }
  return true;
}

const testWord = (word, isWrite) => {
  if (palindroMax(word) === isWrite) {
    console.log(`Тест для слова ${word} отработал верно`);
  } else {
    console.log(`!!!!!!!!! Тест для слова ${word} отработал не верно !!!!!!!!!`);
  }
};

function testPalindrom() {
  testWord('iakai', true);
  testWord('шалаш', true);
  testWord('шалаШ', false);
  testWord('шалаЛ', false);
  testWord('шалДш', false);
  testWord('наворован', true);
  testWord('навороват', false);
  testWord('навороНат', false);
  testWord('deified', true);
  testWord('deifiede', false);
  testWord('deifUed', false);
  testWord('level', true);
  testWord('levem', false);
  testWord('levAl', false);
  testWord('lavel', false);
  testWord('12sd', false);
}

testPalindrom();
