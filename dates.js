const dateNow = new Date('2000-01-01');
console.log('dateNow', dateNow);

timeStamp = dateNow.getTime();
console.log('timeStamp', timeStamp);

const localeDate = dateNow.toLocaleDateString();
console.log('localeDate', localeDate);

const localeTime = dateNow.toLocaleTimeString();
console.log('localeTime', localeTime);

// $.datepicker.formatDate('yymmdd', new Date());

// const localeDate = dateNow.to;
