export function selectBook(book) {
    return {
        type : 'book_selected',
        payload : book
    }; 
};
