const bookArr = [
  {
    book: {
      isbn: '978-0-8070-1427-1',
      title: "Man's Search for Meaning",
      author: 'Viktor E. Frankl'
    }
  },
  {
    book: {
      isbn: '978-0-7858-3959-0',
      title: 'The Complete Guide to Anti-Inflammatory Foods',
      author: 'Lizzie Streit'
    }
  },
  {
    book: {
      isbn: '978-0-553-49646-8',
      title: 'Wild Mediterranean',
      author: 'Stella Metsovas'
    }
  }
];
console.log('Array of Books:', bookArr);
console.log('bookArr is a typeof:', typeof 'bookArr');

console.log(JSON.stringify(bookArr));
console.log('The JSON stringify is a typeof:', typeof 'bookArr');

const student = '{ "id": 31755, "name": "Susan" }';
console.log('Student is a typeof:', typeof student);
const newObj = JSON.parse(student);
console.log(newObj);
