import { Book } from './src/Book';
import { Comics } from './src/Comics';
import { Magazine } from './src/Magazine';
import { Page } from './src/Page';
import { Pages } from './src/Pages';

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
    new Pages([new Page(1, 'with article', 'glossy paper'), 
    new Page(2, 'with article', 'glossy paper')])
);

for (let page of magazine) {
    console.log(page);
}

const comics = new Comics(
    'Spider-Man',
    'Stan Lee',
    'Some artist',
    new Pages([new Page(1, 'with article', 'glossy paper'), 
    new Page(2, 'with article', 'glossy paper')])
);

for (let page of comics) {
    console.log(page);
}
