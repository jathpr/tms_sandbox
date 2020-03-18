const rec = n => {
  console.log('die ' + n);

  return rec(n + 1);
};

rec(0);
