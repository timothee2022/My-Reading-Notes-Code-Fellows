# Class 4

## Here is my Class 4 reading notes

[nosql vs sql](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)

1. For complex queries: SQL databases are good fit for the complex query intensive environment whereas NoSQL databases are not good fit for complex queries. On a high-level, NoSQL don’t have standard interfaces to perform complex queries, and the queries themselves in NoSQL are not as powerful as SQL query language.
"Quoting from the reading material"

2. For the type of data to be stored: SQL databases are not best fit for hierarchical data storage. But, NoSQL database fits better for the hierarchical data storage as it follows the key-value pair way of storing data similar to JSON data. NoSQL database are highly preferred for large data set (i.e for big data). Hbase is an example for this purpose.
"Quoting from the reading material"

3. Both SQL and NoSQL databases have their own advantages and limitations, taking advantage of their strengths would be the way to go.

    Generally I would cache the data from SQL database (with those complex queries) into MongoDB (whose table would be huge). Then the Webapp retrieves data from the cached tables or documents in NoSQL DB with the lightening-fast speed.
    "Quoting from the reading material"

[sql modeling techniques](https://www.essentialsql.com/get-ready-to-learn-sql-7-simplified-data-modeling/)

1. A many-to-one relationship is similar to a one-to-many relationship, this difference is in the point-of-view you take when naming the relationship.  I think most people speak of  one-to-many relationship more often.

    Sometimes a there may not be an entry in a table, so technically speaking the you could have zero or one to many, but that gets hard to say, so when speaking in general terms, most people say “one-to-many.”  However, when you want to get precise,   you can use notation to specify the cardinality of a relationship.
"Quoting from the reading material"

2. The Primary Keys.  Remember the primary keys uniquely identify each row in a table.  A table typically has one
Foreign Key – This is a column or set of columns which match a primary key in another table.
"Quoting from the reading material" 

For live access to my page, please visit the following link: 
https://github.com/timothee2022/My-Reading-Notes-Code-Fellows.git