// ==========================================
// MongoDB CRUD Operations - Library Database
// ==========================================

// ==========================================
// 1. CREATE OPERATION
// ==========================================

// Create and switch to the library database
use library;

// Create books collection
db.createCollection("books");

// Insert documents
db.books.insertMany([
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    published_year: 1997
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    published_year: 1937
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    published_year: 1960
  },
  {
    title: "1984",
    author: "George Orwell",
    published_year: 1949
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    published_year: 1813
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published_year: 1925
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    published_year: 1951
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    published_year: 1988
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    published_year: 1954
  },
  {
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    published_year: 1950
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    published_year: 2003
  },
  {
    title: "Life of Pi",
    author: "Yann Martel",
    published_year: 2001
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    published_year: 2003
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    published_year: 2005
  },
  {
    title: "Learning MongoDB",
    author: "John Smith",
    published_year: 2022
  },
  {
    title: "Mastering NoSQL Databases",
    author: "Jane Doe",
    published_year: 2024
  }
]);

// ==========================================
// 2. READ OPERATION
// ==========================================

// Retrieve all documents
db.books.find();

// Find books by J.K. Rowling
db.books.find({
    author: "J.K. Rowling"
});

// Fetch the earliest published book
db.books.find()
.sort({ published_year: 1 })
.limit(1);

// ==========================================
// 3. UPDATE OPERATION
// ==========================================

// Update published year of The Catcher in the Rye
db.books.updateOne(
    {
        title: "The Catcher in the Rye"
    },
    {
        $set: {
            published_year: 2025
        }
    }
);

// Add genre field to every document
db.books.updateMany(
    {},
    {
        $set: {
            genre: "Mystery"
        }
    }
);

// View updated documents
db.books.find();

// ==========================================
// 4. DELETE OPERATION
// ==========================================

// Delete the book "1984"
db.books.deleteOne({
    title: "1984"
});

// Delete books published before 2000
db.books.deleteMany({
    published_year: {
        $lt: 2000
    }
});

// View remaining documents
db.books.find();

// ==========================================
// 5. ADVANCED QUERY
// ==========================================

// Top 3 recently published books
db.books.find()
.sort({
    published_year: -1
})
.limit(3);

// Books whose title contains MongoDB or NoSQL
db.books.find({
    $or: [
        {
            title: /MongoDB/i
        },
        {
            title: /NoSQL/i
        }
    ]
});
