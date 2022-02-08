const book = new Book(
  'Harry Potter',
  'J.K.Rowling',
  new Pages([
      new Page(1, 'with text', 'single paper'),
      new Page(2, 'with text', 'single paper'),
      new Page(3, 'with text', 'single paper'),
      new Page(4, 'with text', 'single paper'),
  ])
);

for (let page of book) {
  console.log(page);
}

const magazine = new Magazine(
  'G.Q',
  new Pages([new Page(1, 'with article', 'glossy paper'), new Page(2, 'with article', 'glossy paper')])
);

for (let page of magazine) {
  console.log(page);
}

const comics = new Comics(
  'G.Q',
  'Stan Lee',
  new Pages([new Page(1, 'with article', 'glossy paper'), new Page(2, 'with article', 'glossy paper')])
);

for (let page of comics) {
  console.log(page);
}
