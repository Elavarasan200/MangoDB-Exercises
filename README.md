MongoDB CRUD Operations – Library Database (README)
Overview

This project demonstrates the basic CRUD (Create, Read, Update, Delete) operations in MongoDB using a sample Library Database. A collection named books stores information about books, including their title, author, and publication year. The project also includes examples of sorting, filtering, and searching using advanced MongoDB queries.

Database and Collection
use library;
db.createCollection("books");
use library creates (if it doesn't already exist) and switches to the library database.
db.createCollection("books") creates a collection named books.
1. Create Operation
db.books.insertMany([
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    published_year: 1997
  },
  ...
]);

Explanation:

insertMany() inserts multiple documents into the books collection in a single operation.
Each document represents one book with fields such as title, author, and published_year.
2. Read Operation
Retrieve all books
db.books.find();
Returns every document in the books collection.
Find books by author
db.books.find({
    author: "J.K. Rowling"
});
Returns only the books where the author field is "J.K. Rowling".
Find the earliest published book
db.books.find()
.sort({ published_year: 1 })
.limit(1);

Explanation:

find() retrieves all documents.
sort({ published_year: 1 }) sorts books in ascending order (oldest to newest).
limit(1) returns only the first document, which is the earliest published book.
3. Update Operation
Update one document
db.books.updateOne(
    { title: "The Catcher in the Rye" },
    {
        $set: {
            published_year: 2025
        }
    }
);

Explanation:

updateOne() updates only the first matching document.
$set changes the value of published_year without affecting other fields.
Update all documents
db.books.updateMany(
    {},
    {
        $set: {
            genre: "Mystery"
        }
    }
);

Explanation:

{} selects all documents.
updateMany() adds a new field called genre with the value "Mystery" to every book.
4. Delete Operation
Delete one book
db.books.deleteOne({
    title: "1984"
});
Removes the book titled 1984 from the collection.
Delete multiple books
db.books.deleteMany({
    published_year: {
        $lt: 2000
    }
});

Explanation:

$lt means Less Than.
Deletes all books published before the year 2000.
5. Advanced Queries
Top 3 recently published books
db.books.find()
.sort({
    published_year: -1
})
.limit(3);

Explanation:

sort({ published_year: -1 }) sorts books in descending order (newest to oldest).
limit(3) returns only the three most recently published books.
Search books with "MongoDB" or "NoSQL" in the title
db.books.find({
    $or: [
        { title: /MongoDB/i },
        { title: /NoSQL/i }
    ]
});

Explanation:

$or returns documents that satisfy either condition.
/MongoDB/i and /NoSQL/i are case-insensitive regular expressions.
This query finds books whose titles contain MongoDB or NoSQL, regardless of letter case.
MongoDB Commands Used
Command	Purpose
use	Create or switch to a database
createCollection()	Create a new collection
insertMany()	Insert multiple documents
find()	Retrieve documents
sort()	Sort query results
limit()	Limit the number of returned documents
updateOne()	Update a single document
updateMany()	Update multiple documents
$set	Add or modify field values
deleteOne()	Delete one document
deleteMany()	Delete multiple documents
$lt	Match values less than a specified value
$or	Match one of multiple conditions
/pattern/i	Case-insensitive text search using regular expressions
Conclusion

This project demonstrates the core CRUD operations in MongoDB. It shows how to create databases and collections, insert documents, retrieve and filter data, update records, delete documents, and perform advanced searches using sorting, comparison operators, logical operators, and regular expressions. These operations form the foundation for building applications that use MongoDB as a NoSQL database.
