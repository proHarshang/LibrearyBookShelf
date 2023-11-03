const books = document.querySelectorAll('.book');
const book_wrappers = document.querySelectorAll('.book_wrapper');
const openBook_wrapper = document.querySelector('#openBook_wrapper');

// reveal books landing animation 
setTimeout(() => {
    book_wrappers.forEach(book_wrapper => {
        book_wrapper.style.opacity = '1';
    });
}, 1200);

// opening the book and redirecting 
books.forEach(book => {
    book.addEventListener("click", function () {
        let book_name = book.getAttribute('data-name');
        let book_link = book.getAttribute('data-link');
        let book_img = book.getAttribute('data-img');
        book.parentElement.style.opacity = 0;
        openBook_wrapper.style.display = 'flex';
        openBook_wrapper.querySelector('.front').style.backgroundImage = `url('${book_img}')`;
        openBook_wrapper.querySelector('.back').style.backgroundImage = `url('${book_img}')`;
        // setTimeout(() => window.location.href = book_link, 1700);
    })
});