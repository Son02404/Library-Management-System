// ===============================
// Library Management System
// Using JavaScript Arrays
// ===============================


// Array storing book objects

let books = [

    {
        title: "Database Systems",
        author: "Thomas Connolly",
        available: true
    },

    {
        title: "Computer Networks",
        author: "Andrew Tanenbaum",
        available: true
    },

    {
        title: "Software Engineering",
        author: "Ian Sommerville",
        available: false
    },

    {
        title: "Introduction to Algorithms",
        author: "Thomas Cormen",
        available: true
    },

    {
        title: "Web Technology",
        author: "Jeffrey C. Jackson",
        available: true
    },

    {
        title: "Artificial Intelligence",
        author: "Stuart Russell",
        available: false
    }

];



// Display all books

function displayBooks(list = books){

    let bookList = document.getElementById("bookList");

    bookList.innerHTML = "";


    if(list.length === 0){

        bookList.innerHTML = `
        
        <h3>No books found 📚</h3>

        `;

        return;

    }



    list.forEach((book,index)=>{


        bookList.innerHTML += `

        <div class="book">

            <h3>📖 ${book.title}</h3>

            <p>
            <strong>Author:</strong> 
            ${book.author}
            </p>


            <p>
            <strong>Status:</strong>

            ${
            book.available 
            ? "✅ Available" 
            : "❌ Borrowed"
            }

            </p>


            <button onclick="removeBook(${index})">
            Remove Book
            </button>


        </div>

        `;


    });


}





// Add new book

function addBook(){


    let title = 
    document.getElementById("title").value;


    let author = 
    document.getElementById("author").value;



    if(title === "" || author === ""){

        alert("Please enter book title and author");

        return;

    }



    // Adding new object into array

    books.push({

        title:title,

        author:author,

        available:true

    });



    displayBooks();



    // Clear inputs

    document.getElementById("title").value="";

    document.getElementById("author").value="";


}





// Search books

function searchBook(){


    let searchValue = 
    document
    .getElementById("search")
    .value
    .toLowerCase();



    let filteredBooks = books.filter(book =>

        book.title
        .toLowerCase()
        .includes(searchValue)

    );



    displayBooks(filteredBooks);


}





// Remove book

function removeBook(index){


    books.splice(index,1);


    displayBooks();


}





// Load books when page opens

displayBooks();