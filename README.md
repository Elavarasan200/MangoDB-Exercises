MongoDB CRUD Operations – Library Database (One-Page Explanation)

This project demonstrates the basic CRUD operations (Create, Read, Update, Delete) in MongoDB using a simple Library Database with a books collection. Each book is stored as a document containing fields like title, author, and published_year.

1. Create Operation (Insert Data)

First, we create and use a database:

use library;
db.createCollection("books");

use library creates (if not existing) and switches to the database.
createCollection("books") creates a collection to store book documents.

To add multiple books, we use:

db.books.insertMany([...]);

Explanation:

insertMany() is used to insert multiple documents at once.
Each document represents a book with details like title, author, and year of publication.

2. Read Operation (Retrieve Data)

Get all books:

db.books.find();
Retrieves every document in the collection.
Find books by a specific author:
db.books.find({ author: "J.K. Rowling" });
Filters documents where the author matches exactly.
Find the oldest published book:
db.books.find()
.sort({ published_year: 1 })
.limit(1);

Explanation:

sort({ published_year: 1 }) sorts books in ascending order (oldest first).
limit(1) returns only the first result, which is the earliest published book.

3. Update Operation (Modify Data)

Update a single book:

db.books.updateOne(
  { title: "The Catcher in the Rye" },
  { $set: { published_year: 2025 } }
);

Explanation:

updateOne() updates only the first matching document.
$set changes only the specified field without affecting others.

Update all books:
db.books.updateMany(
  {},
  { $set: { genre: "Mystery" } }
);

Explanation:

{} selects all documents.
Adds a new field genre to every book in the collection.

4. Delete Operation (Remove Data)
   
Delete one book:

db.books.deleteOne({ title: "1984" });
Removes a single matching document.
Delete multiple books:
db.books.deleteMany({ published_year: { $lt: 2000 } });

Explanation:

$lt means “less than”.
Deletes all books published before the year 2000.

5. Advanced Queries
   
Get 3 latest books:

db.books.find()
.sort({ published_year: -1 })
.limit(3);

Explanation:

-1 sorts in descending order (newest first).
limit(3) returns the top 3 newest books.
Search using keywords:
db.books.find({
db.books.find({
db.books.find({
  $or: [
    { title: /MongoDB/i },
    { title: /NoSQL/i }
  ]
});

Explanation:

$or returns results matching any condition.
/pattern/i is a regular expression (case-insensitive search).
Finds books containing “MongoDB” or “NoSQL” in the title.

Conclusion

This project demonstrates how MongoDB handles data using CRUD operations. It shows how to insert, retrieve, update, and delete documents efficiently. It also introduces advanced features like sorting, filtering with conditions, and text search using regular expressions. These operations form the foundation for working with MongoDB in real-world applications.
