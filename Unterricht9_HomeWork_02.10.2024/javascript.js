// Массив с 3-5 книгами
const books = [
    {
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        year: 1966,
        pages: 480
    },
    {
        title: "Война и мир",
        author: "Лев Толстой",
        year: 1869,
        pages: 1225
    },
    {
        title: "Преступление и наказание",
        author: "Федор Достоевский",
        year: 1866,
        pages: 671
    }
];

// Запрос у пользователя названия новой книги promt()
const newBookTitle = prompt("Какую книгу добавить в список?");

// Если пользователь ввел название книги, создаем новый объект книги
if (newBookTitle) {
    const newBook = {
        title: newBookTitle,
        author: null,
        year: null,
        pages: null
    };
    
    // Добавляем новую книгу в массив .push()
    books.push(newBook);
    
    // Выводим обновленный массив в консоль
    console.log("Обновленный список книг:");
    console.log(books);
} else {
    console.log("Название книги не было введено.");
}
