
window.onload = async () => {
    try {
        const file = await fetch("./res/data/books.json");
        const data = await file.json();
        console.log(data);
        console.log(data.count);
        console.log(data.books);
        //forEach možnost
        data.books.forEach((book) => {
            console.log(book);
        });
        //map možnost
        data.books.map((book) => {
            console.log(book);
        });
    } catch (err) {
        console.log(err);
    }
}