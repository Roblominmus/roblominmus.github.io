window.DB_QUESTIONS = [
  {
    "chapter": 1,
    "question": "Q1. Which of the following best describes the difference between data and information? (From Image)",
    "options": [
      "Data always comes from a database, while information does not.",
      "Data is unprocessed facts, while information is processed and meaningful output.",
      "Data is meaningful while information is raw and unprocessed.",
      "Data always comes from a database, while information does not"
    ],
    "correctAnswer": "Data is unprocessed facts, while information is processed and meaningful output."
  },
  {
    "chapter": 1,
    "question": "Q2. Who proposed the relational model that disconnected logical organization from physical storage in databases? (From Image)",
    "options": [
      "P. Chen",
      "Larry Ellison",
      "E. F. Codd",
      "Charles Babbage"
    ],
    "correctAnswer": "E. F. Codd"
  },
  {
    "chapter": 1,
    "question": "Q3. Which of the following correctly lists the three major steps in database development? (From Image)",
    "options": [
      "Design \u2192 Analyze \u2192 Build",
      "Data Modeling \u2192 Database Design \u2192 Database Build",
      "Conceptual Design \u2192 Logical Modeling \u2192 Physical Implementation",
      "Planning \u2192 Coding \u2192 Testing"
    ],
    "correctAnswer": "Data Modeling \u2192 Database Design \u2192 Database Build"
  },
  {
    "chapter": 1,
    "question": "Q4. What was a key problem with 'isolated, non-integrated systems' used before modern database solutions? (From Image)",
    "options": [
      "They could not store large amounts of data.",
      "They were too fast for most clients to handle.",
      "They made upgrades and data sharing across systems difficult and expensive.",
      "They required Internet connections to function."
    ],
    "correctAnswer": "They made upgrades and data sharing across systems difficult and expensive."
  },
  {
    "chapter": 1,
    "question": "Q5. What is grid computing in relation to databases? (From Image)",
    "options": [
      "A model where data is stored on a single large computer only.",
      "A computing approach that uses distributed systems as one shared resource, like an electric grid.",
      "A manual way of organizing spreadsheet data.",
      "A method of limiting database access to one location."
    ],
    "correctAnswer": "A computing approach that uses distributed systems as one shared resource, like an electric grid."
  },
  {
    "chapter": 1,
    "question": "Q6. In an Entity-Relationship (ER) model, cardinality refers to: (From Image)",
    "options": [
      "Whether a relationship is mandatory or optional.",
      "The number of attributes an entity has.",
      "The quantity or degree of association between entities.",
      "The total number of entities in a database."
    ],
    "correctAnswer": "The quantity or degree of association between entities."
  },
  {
    "chapter": 1,
    "question": "Q7. In ER diagramming conventions, a 'crow's foot' symbol represents: (From Image)",
    "options": [
      "A mandatory relationship",
      "A one-to-one relationship",
      "A one-to-many relationship",
      "A self-referencing relationship"
    ],
    "correctAnswer": "A one-to-many relationship"
  },
  {
    "chapter": 1,
    "question": "Q8. In ERDish, which of the following correctly describes the relationship between EMPLOYEE and DEPARTMENT? (From Image)",
    "options": [
      "Each EMPLOYEE may work in one or more DEPARTMENTS",
      "Each EMPLOYEE must work in one and only one DEPARTMENT",
      "Each DEPARTMENT must have one and only one EMPLOYEE",
      "Each DEPARTMENT must employ exactly two EMPLOYEES"
    ],
    "correctAnswer": "Each EMPLOYEE must work in one and only one DEPARTMENT"
  },
  {
    "chapter": 1,
    "question": "Q9. Which of the following symbols in an ER diagram denotes a unique identifier attribute? (From Image)",
    "options": [
      "* (asterisk)",
      "# (hash)",
      "o (circle)",
      "= (equal sign)"
    ],
    "correctAnswer": "# (hash)"
  },
  {
    "chapter": 1,
    "question": "Q10. The term 'optionality' in a relationship refers to: (From Image)",
    "options": [
      "The number of times an entity can participate in a relationship.",
      "Whether participation in the relationship is required or optional.",
      "The number of attributes shared by both entities.",
      "The naming convention used for relationships."
    ],
    "correctAnswer": "Whether participation in the relationship is required or optional."
  },
  {
    "chapter": 1,
    "question": "Q11. Which statement best describes a conceptual data model? (From Image)",
    "options": [
      "It specifies table definitions, column types and indexes.",
      "It captures the business's informational needs and important entities and relationships, but does not specify attributes or UIDs.",
      "It is a physical implementation tied to a specific RDBMS.",
      "It always includes database views and performance tuning details."
    ],
    "correctAnswer": "It captures the business's informational needs and important entities and relationships, but does not specify attributes or UIDs."
  },
  {
    "chapter": 1,
    "question": "Q12. Which of the following is a primary characteristic of a physical data model? (From Image)",
    "options": [
      "It avoids mentioning primary keys or foreign keys.",
      "It lists entities but omits attributes and data types.",
      "It defines table definitions, data types, precision, and shows columns, primary and foreign keys.",
      "It is strictly implementation-free and cannot be tied to any RDBMS."
    ],
    "correctAnswer": "It defines table definitions, data types, precision, and shows columns, primary and foreign keys."
  },
  {
    "chapter": 1,
    "question": "Q13. You need an attribute to identify a person uniquely and with minimal maintenance. Which practice is recommended? (From Image)",
    "options": [
      "Use age because it's easy to update yearly.",
      "Use birth date rather than age because it is non-volatile.",
      "Use name because it is guaranteed unique.",
      "Never use artificial identifiers; always combine several natural attributes."
    ],
    "correctAnswer": "Use birth date rather than age because it is non-volatile."
  },
  {
    "chapter": 1,
    "question": "Q14. Which of the following is NOT one of the four stated goals of ER modelling? (From Image)",
    "options": [
      "Capture all required data.",
      "Ensure that data appears only once (avoid duplication).",
      "Model no data that is derivable from other modelled data.",
      "Maximise data redundancy to improve availability."
    ],
    "correctAnswer": "Maximise data redundancy to improve availability."
  },
  {
    "chapter": 1,
    "question": "Q15. What does 'implementation-free' mean in the context of conceptual data models? (From Image)",
    "options": [
      "The model remains the same regardless of the type of database, storage medium or programming language used to implement it.",
      "The model must be designed specifically for a relational database.",
      "The model requires implementation details such as indexes and views to be useful.",
      "It means the model cannot be used unless a DBMS is chosen first."
    ],
    "correctAnswer": "The model remains the same regardless of the type of database, storage medium or programming language used to implement it."
  },
  {
    "chapter": 2,
    "question": "Q16. In database design, a many-to-many (M:M) relationship is best resolved by: (From Image)",
    "options": [
      "Adding a composite key to one of the entities",
      "Creating an intersection entity between the two entities",
      "Eliminating one entity from the model",
      "Using a simple attribute as the UID"
    ],
    "correctAnswer": "Creating an intersection entity between the two entities"
  },
  {
    "chapter": 2,
    "question": "Q17. During CRUD analysis, the term 'RETRIEVE' corresponds to which operation? (From Image)",
    "options": [
      "Loading data into the database",
      "Viewing or printing information from the database",
      "Modifying existing data",
      "Removing a record from the database"
    ],
    "correctAnswer": "Viewing or printing information from the database"
  },
  {
    "chapter": 2,
    "question": "Q18. What is a barred relationship in an entity-relationship diagram? (From Image)",
    "options": [
      "A relationship that connects two unrelated entities",
      "A relationship that participates in the unique identifier of an intersection entity",
      "A relationship that is hidden during normalization",
      "A one-to-one relationship between entities"
    ],
    "correctAnswer": "A relationship that participates in the unique identifier of an intersection entity"
  },
  {
    "chapter": 2,
    "question": "Q19. Which of the following is not a natural unique identifier (UID)? (From Image)",
    "options": [
      "Passport number",
      "Customer ID",
      "Seat number",
      "Email address"
    ],
    "correctAnswer": "Customer ID"
  },
  {
    "chapter": 2,
    "question": "Q20. If an entity has more than one possible UID, the chosen one used as the main identifier is called the: (From Image)",
    "options": [
      "Composite UID",
      "Artificial UID",
      "Primary UID",
      "Secondary UID"
    ],
    "correctAnswer": "Primary UID"
  },
  {
    "chapter": 2,
    "question": "Q21. What is the primary purpose of using a matrix diagram in database design? (From Image)",
    "options": [
      "To show optionality and cardinality for every relationship",
      "To discover and record relationships between many entities so none are missed",
      "To replace an ERD entirely",
      "To list only attributes for each entity"
    ],
    "correctAnswer": "To discover and record relationships between many entities so none are missed"
  },
  {
    "chapter": 2,
    "question": "Q22. In the travel-agency example (TRAVELER \u2014 LANDMARK \u2014 COUNTRY), which statement is correct? (From Image)",
    "options": [
      "Each LANDMARK may be located in more than one COUNTRY.",
      "Each TRAVELER must have seen every LANDMARK in a COUNTRY.",
      "Each LANDMARK must be located in one and only one COUNTRY.",
      "The matrix diagram shows cardinality directly in its cells."
    ],
    "correctAnswer": "Each LANDMARK must be located in one and only one COUNTRY."
  },
  {
    "chapter": 2,
    "question": "Q23. Which of the following about supertypes and subtypes is FALSE? (From Image)",
    "options": [
      "A subtype inherits attributes and relationships of its supertype.",
      "Subtypes never exist alone \u2013 if a subtype exists there must be at least one other subtype.",
      "Subtypes are always optional (an instance of a supertype can belong to no subtype).",
      "Two important subtype rules are exhaustive and mutually exclusive."
    ],
    "correctAnswer": "Subtypes are always optional (an instance of a supertype can belong to no subtype)."
  },
  {
    "chapter": 2,
    "question": "Q24. Which statement best describes a properly modelled subtype? (From Image)",
    "options": [
      "A subtype is an entity unrelated to the supertype and does not inherit anything.",
      "A subtype is drawn within the supertype, inherits its attributes/relationships, and usually adds its own attributes or relationships.",
      "A subtype can exist independently of its supertype.",
      "Subtypes eliminate the need to document common attributes at the supertype level."
    ],
    "correctAnswer": "A subtype is drawn within the supertype, inherits its attributes/relationships, and usually adds its own attributes or relationships."
  },
  {
    "chapter": 2,
    "question": "Q25. Which of these business rules is a procedural rule that typically cannot be represented in an ERD and requires programming? (From Image)",
    "options": [
      "All teachers must possess a valid teaching certificate.",
      "All orders at a restaurant must be handled by a staff member.",
      "Students must have studied algebra and geometry in order to sign up for trigonometry.",
      "Each TRAINING EVENT takes place at one LOCATION."
    ],
    "correctAnswer": "Students must have studied algebra and geometry in order to sign up for trigonometry."
  },
  {
    "chapter": 2,
    "question": "Q26. Which of the following best describes a transferable relationship in database design? (From Image)",
    "options": [
      "A relationship that cannot be moved once created",
      "A relationship where an entity instance can change associations over time",
      "A relationship that must always be one-to-one",
      "A relationship that has no business rules"
    ],
    "correctAnswer": "A relationship where an entity instance can change associations over time"
  },
  {
    "chapter": 2,
    "question": "Q27. In an ERD, how is a non-transferable relationship represented? (From Image)",
    "options": [
      "With a circle symbol",
      "With a diamond on the relationship line",
      "With a dashed line",
      "With a crows-foot symbol"
    ],
    "correctAnswer": "With a diamond on the relationship line"
  },
  {
    "chapter": 2,
    "question": "Q28. A many-to-many (M:M) relationship in an early model usually indicates:",
    "options": [
      "That entities are independent and unrelated",
      "That an entity (an intersection entity) is missing from the model",
      "That the model is complete and finalized",
      "That redundancy has been eliminated"
    ],
    "correctAnswer": "That an entity (an intersection entity) is missing from the model"
  },
  {
    "chapter": 2,
    "question": "Q29. Which of the following is NOT a redundant relationship? (From Image)",
    "options": [
      "COUNTRY\u2013PERSON (location of) derived from COUNTRY\u2013TOWN\u2013PERSON",
      "PERSON\u2013COUNTRY (birthplace of) alongside PERSON\u2013TOWN (living in)",
      "TOWN\u2013COUNTRY (located in) plus PERSON\u2013TOWN (living in) [Implies PERSON-COUNTRY (living in)]",
      "PERSON\u2013COUNTRY derived from existing relationships"
    ],
    "correctAnswer": "PERSON\u2013COUNTRY (birthplace of) alongside PERSON\u2013TOWN (living in)"
  },
  {
    "chapter": 2,
    "question": "Q30. Which of the following entities violates First Normal Form (1NF)? (From Image)",
    "options": [
      "SCHOOL BUILDING with code, name, and address",
      "TEAM with ID, name, and player attributes",
      "PLAYER with number, name, and position",
      "SUBJECT with ID and name"
    ],
    "correctAnswer": "TEAM with ID, name, and player attributes"
  },
  {
    "chapter": 3,
    "question": "Q31. (W1) A grocery store receipt with a list of items, prices, and a total is an example of...?",
    "options": [
      "Raw Data",
      "Information",
      "A Procedural Rule",
      "A 1NF Violation"
    ],
    "correctAnswer": "Information"
  },
  {
    "chapter": 3,
    "question": "Q32. (W1) In the 3-Step Database Development Process, what is the *output* of the 'Analyze' (Conceptual) step?",
    "options": [
      "An Entity-Relationship Diagram (ERD)",
      "A set of Table Definitions",
      "A `CREATE TABLE` SQL script",
      "A list of business rules"
    ],
    "correctAnswer": "An Entity-Relationship Diagram (ERD)"
  },
  {
    "chapter": 3,
    "question": "Q32. (W1) In the 3-Step Database Development Process, what is the *output* of the 'Design' (Logical) step?",
    "options": [
      "The business requirements document",
      "The SQL code",
      "The Entity-Relationship Diagram (ERD) and Table Definitions",
      "The N-Tier Architecture plan"
    ],
    "correctAnswer": "The Entity-Relationship Diagram (ERD) and Table Definitions"
  },
  {
    "chapter": 3,
    "question": "Q33. (W1) Who proposed the Entity-Relationship Model (ERM), which is the foundation for drawing ERDs?",
    "options": [
      "E. F. Codd",
      "P. Chen",
      "Larry Ellison",
      "A Database Administrator"
    ],
    "correctAnswer": "P. Chen"
  },
  {
    "chapter": 3,
    "question": "Q34. (W1) An airline manager asks, 'What is our average revenue per seat on the Lagos-to-Abuja route?' This is a request for...?",
    "options": [
      "Data",
      "Information",
      "A Procedural Rule",
      "A Physical Model"
    ],
    "correctAnswer": "Information"
  },
  {
    "chapter": 3,
    "question": "Q35. (W1) Which of the following is the best analogy for a 1970s Mainframe-Dumb Terminal architecture?",
    "options": [
      "A central kitchen (mainframe) sends food to a dining hall that only has forks (dumb terminals).",
      "Every house (client) has its own small kitchen, but gets ingredients from a central supermarket (server).",
      "A restaurant with a front desk (web server), a kitchen (app server), and a pantry (database server).",
      "A group of kitchens all sharing one power grid."
    ],
    "correctAnswer": "A central kitchen (mainframe) sends food to a dining hall that only has forks (dumb terminals)."
  },
  {
    "chapter": 3,
    "question": "Q36. (W2) What is the most precise definition of an 'Instance'?",
    "options": [
      "A category or blueprint of a thing (e.g., 'STUDENT').",
      "A property or characteristic of a thing (e.g., 'First Name').",
      "A single, unique occurrence of an entity (e.g., you, 'Okafor Chiedozie Kevin').",
      "A connection between two entities."
    ],
    "correctAnswer": "A single, unique occurrence of an entity (e.g., you, 'Okafor Chiedozie Kevin')."
  },
  {
    "chapter": 3,
    "question": "Q37. (W2) An attribute `oCellPhoneNumber` is an example of what kind of attribute?",
    "options": [
      "Mandatory",
      "Optional",
      "Composite",
      "Volatile"
    ],
    "correctAnswer": "Optional"
  },
  {
    "chapter": 3,
    "question": "Q38. (W2) The relationship from `STUDENT` to `COURSE` is 'Each STUDENT *may* enroll in *one or more* COURSES'. Which part is the Cardinality?",
    "options": [
      "'may'",
      "'one or more'",
      "'STUDENT'",
      "'COURSES'"
    ],
    "correctAnswer": "'one or more'"
  },
  {
    "chapter": 3,
    "question": "Q39. (W2) The relationship from `COURSE` to `STUDENT` is 'Each COURSE *may* be enrolled in by *one or more* STUDENTS'. Which part is the Optionality?",
    "options": [
      "'may'",
      "'one or more'",
      "'COURSE'",
      "'STUDENTS'"
    ],
    "correctAnswer": "'may'"
  },
  {
    "chapter": 3,
    "question": "Q40. (W2) Why is `First Name` + `Last Name` a *bad* Unique Identifier (UID) for a `STUDENT` entity?",
    "options": [
      "It is not a mandatory attribute.",
      "It is a volatile attribute.",
      "It is not guaranteed to be unique; two students might have the same name.",
      "It is not an artificial attribute."
    ],
    "correctAnswer": "It is not guaranteed to be unique; two students might have the same name."
  },
  {
    "chapter": 4,
    "question": "Q41. (W3) What is the 6-part formula for 'ERDish'?",
    "options": [
      "EACH + Entity A + Optionality + Relationship Name + Cardinality + Entity B",
      "Entity A + Relationship Name + Entity B + Cardinality + Optionality",
      "EACH + Entity A + Cardinality + Relationship Name + Optionality + Entity B",
      "Entity A + UID + Attribute + Optionality + Cardinality + Entity B"
    ],
    "correctAnswer": "EACH + Entity A + Optionality + Relationship Name + Cardinality + Entity B"
  },
  {
    "chapter": 4,
    "question": "Q42. (W3) A diagram shows `[COURSE] ---| ... |\u2014< [TEACHER]`. What is the ERDish from `TEACHER` to `COURSE`?",
    "options": [
      "Each TEACHER must teach one or more COURSES.",
      "Each TEACHER may teach one or more COURSES.",
      "Each TEACHER must teach one and only one COURSE.",
      "Each TEACHER may teach one and only one COURSE."
    ],
    "correctAnswer": "Each TEACHER may teach one and only one COURSE."
  },
  {
    "chapter": 4,
    "question": "Q43. (W3) Using the same diagram `[COURSE] ---| ... |\u2014< [TEACHER]`, what is the ERDish from `COURSE` to `TEACHER`?",
    "options": [
      "Each COURSE must be taught by one or more TEACHERS.",
      "Each COURSE may be taught by one or more TEACHERS.",
      "Each COURSE must be taught by one and only one TEACHER.",
      "Each COURSE may be taught by one and only one TEACHER."
    ],
    "correctAnswer": "Each COURSE must be taught by one or more TEACHERS."
  },
  {
    "chapter": 4,
    "question": "Q44. (W3) A relationship where `EMPLOYEE` is related to `EMPLOYEE` is called a:",
    "options": [
      "Redundant Relationship",
      "Recursive Relationship",
      "Nontransferable Relationship",
      "Barred Relationship"
    ],
    "correctAnswer": "Recursive Relationship"
  },
  {
    "chapter": 4,
    "question": "Q45. (W4) A bank tracks `LOANS`. 'HOME LOANS' and 'CAR LOANS' are both 'a kind of' `LOAN` and share common attributes. How should this be modeled?",
    "options": [
      "With an Arc",
      "With a Supertype/Subtype structure",
      "With a M:M recursive relationship",
      "This is a 1NF violation."
    ],
    "correctAnswer": "With a Supertype/Subtype structure"
  },
  {
    "chapter": 4,
    "question": "Q46. (W4) A `SHIPMENT` must be sent by *either* a `TRUCKING COMPANY` *or* an `EXTERNAL COURIER`, but *not both*. The entities are dissimilar. How should this be modeled?",
    "options": [
      "With an Arc",
      "With a Supertype/Subtype structure",
      "With a M:M recursive relationship",
      "This is a 3NF violation."
    ],
    "correctAnswer": "With an Arc"
  },
  {
    "chapter": 4,
    "question": "Q47. (W4) The rule that an instance of a supertype can *only* be one subtype at a time (e.g., a loan can't be a `HOME LOAN` and a `CAR LOAN`) is called:",
    "options": [
      "Exhaustive",
      "Mutually Exclusive",
      "Mandatory",
      "Nontransferable"
    ],
    "correctAnswer": "Mutually Exclusive"
  },
  {
    "chapter": 4,
    "question": "Q48. (W4) The rule that all instances of a supertype *must* fit into one of the available subtypes (e.g., all `PAYMENTS` are `CASH`, `CHECK`, or `OTHER`) is called:",
    "options": [
      "Exhaustive",
      "Mutually Exclusive",
      "Mandatory",
      "Nontransferable"
    ],
    "correctAnswer": "Exhaustive"
  },
  {
    "chapter": 4,
    "question": "Q49. (W4) A rule states: 'A STUDENT must pay their fees *before* they can register for a COURSE.' What type of rule is this?",
    "options": [
      "Structural (can be drawn on ERD)",
      "Procedural (cannot be drawn on ERD)",
      "A 1NF Violation",
      "A 3NF Violation"
    ],
    "correctAnswer": "Procedural (cannot be drawn on ERD)"
  },
  {
    "chapter": 4,
    "question": "Q50. (W4) A rule states: 'Every STUDENT *must* have a unique Student ID.' What type of rule is this?",
    "options": [
      "Structural (can be drawn on ERD)",
      "Procedural (cannot be drawn on ERD)",
      "A 1NF Violation",
      "A 3NF Violation"
    ],
    "correctAnswer": "Structural (can be drawn on ERD)"
  },
  {
    "chapter": 5,
    "question": "Q51. (W5) A `STUDENT`-`COURSE` M:M relationship needs to store the 'Grade'. Why is this a problem?",
    "options": [
      "The 'Grade' attribute is multi-valued, which is a 1NF violation.",
      "The 'Grade' attribute is only dependent on 'STUDENT', which is a 2NF violation.",
      "The 'Grade' attribute describes the relationship itself, and an M:M relationship has no place to store it.",
      "The 'Grade' attribute is a procedural rule."
    ],
    "correctAnswer": "The 'Grade' attribute describes the relationship itself, and an M:M relationship has no place to store it."
  },
  {
    "chapter": 5,
    "question": "Q52. (W5) How do you *resolve* the problem in the previous question?",
    "options": [
      "Create a new Intersection Entity (e.g., 'ENROLLMENT') and create two 1:M relationships to it.",
      "Create a Supertype 'GRADES' with subtypes 'STUDENT' and 'COURSE'.",
      "Add 'Grade' as an attribute to the 'STUDENT' entity.",
      "Add 'Grade' as an attribute to the 'COURSE' entity."
    ],
    "correctAnswer": "Create a new Intersection Entity (e.g., 'ENROLLMENT') and create two 1:M relationships to it."
  },
  {
    "chapter": 5,
    "question": "Q53. (W5) A model has: `EMPLOYEE` -> `BRANCH` -> `REGION`. A new relationship `EMPLOYEE` -> `REGION` is added with the name 'was hired in'. Is this redundant?",
    "options": [
      "Yes, because you can already find the region by going through BRANCH.",
      "No, because 'was hired in' is new information that is not the same as 'works in'.",
      "Yes, because all hierarchies are redundant.",
      "No, because it is an Arc."
    ],
    "correctAnswer": "No, because 'was hired in' is new information that is not the same as 'works in'."
  },
  {
    "chapter": 5,
    "question": "Q54. (W5) A business rule states: 'A `RECEIPT` is issued to one `STUDENT` and can *never* be transferred to another student.' How do you draw this?",
    "options": [
      "As a 1:1 relationship.",
      "With a diamond (`<>`) symbol on the relationship line to show it is nontransferable.",
      "With an Arc.",
      "With a solid line to show it is mandatory."
    ],
    "correctAnswer": "With a diamond (`<>`) symbol on the relationship line to show it is nontransferable."
  },
  {
    "chapter": 5,
    "question": "Q55. (W5) A manager needs to 'print a weekly **report** of all sales'. In a CRUD analysis, this rule tells you:",
    "options": [
      "You need a 'CREATE' function.",
      "You must have 'SALES' and 'EMPLOYEE' entities (or similar) to 'RETRIEVE' data from.",
      "You need to delete the sales data every week.",
      "You have a 3NF violation."
    ],
    "correctAnswer": "You must have 'SALES' and 'EMPLOYEE' entities (or similar) to 'RETRIEVE' data from."
  },
  {
    "chapter": 5,
    "question": "Q56. (W6) What is the key difference between a Primary UID and a Primary Key (PK)?",
    "options": [
      "There is no difference.",
      "A Primary UID is for the logical model (the ERD), while a Primary Key is for the physical database (the code).",
      "A Primary UID must be artificial, but a Primary Key can be natural.",
      "A Primary Key must be artificial, but a Primary UID can be natural."
    ],
    "correctAnswer": "A Primary UID is for the logical model (the ERD), while a Primary Key is for the physical database (the code)."
  },
  {
    "chapter": 5,
    "question": "Q57. (W6) What is the difference between a Composite UID and a Candidate UID?",
    "options": [
      "A Composite UID is made of 2+ attributes; a Candidate UID is one of *multiple choices* for a Primary UID.",
      "A Composite UID is one choice; a Candidate UID is a UID made of 2+ attributes.",
      "A Composite UID is artificial; a Candidate UID is natural.",
      "There is no difference."
    ],
    "correctAnswer": "A Composite UID is made of 2+ attributes; a Candidate UID is one of *multiple choices* for a Primary UID."
  },
  {
    "chapter": 5,
    "question": "Q58. (W6) An entity `TEAM` has an attribute `*Player_Names` that stores a list of all players (e.g., 'John, Jane, Bob'). This violates which Normal Form?",
    "options": [
      "1NF (multi-valued attribute)",
      "2NF (partial dependency)",
      "3NF (transitive dependency)",
      "This is not a violation."
    ],
    "correctAnswer": "1NF (multi-valued attribute)"
  },
  {
    "chapter": 5,
    "question": "Q59. (W6) How do you fix the 1NF violation in the previous question?",
    "options": [
      "Do nothing, 1NF is optional.",
      "Make the attribute mandatory.",
      "Create a new 'PLAYER' entity and link it to 'TEAM' with a 1:M relationship.",
      "Add the player names to the 'TEAM' primary key."
    ],
    "correctAnswer": "Create a new 'PLAYER' entity and link it to 'TEAM' with a 1:M relationship."
  },
  {
    "chapter": 5,
    "question": "Q60. (W6) An entity has a composite UID of (#CourseID, #StudentID). The attribute 'StudentName' is in this entity. This is a violation of which normal form?",
    "options": [
      "1NF (multi-valued attribute)",
      "2NF (partial dependency)",
      "3NF (transitive dependency)",
      "This is not a violation."
    ],
    "correctAnswer": "2NF (partial dependency)"
  },
  {
    "chapter": 5,
    "question": "Q61. (W6) A 2NF violation is also known as a...",
    "options": [
      "Transitive dependency",
      "Partial dependency",
      "Multi-valued attribute",
      "Recursive relationship"
    ],
    "correctAnswer": "Partial dependency"
  },
  {
    "chapter": 5,
    "question": "Q62. (W6) An entity has a simple UID of #EmployeeID. It contains the attributes 'ManagerName' and 'ManagerPhoneNumber'. This is a violation of which normal form?",
    "options": [
      "1NF (multi-valued attribute)",
      "2NF (partial dependency)",
      "3NF (transitive dependency)",
      "This is not a violation."
    ],
    "correctAnswer": "3NF (transitive dependency)"
  },
  {
    "chapter": 5,
    "question": "Q63. (W6) A 3NF violation is also known as a...",
    "options": [
      "Transitive dependency",
      "Partial dependency",
      "Multi-valued attribute",
      "Recursive relationship"
    ],
    "correctAnswer": "Transitive dependency"
  },
  {
    "chapter": 5,
    "question": "Q64. (W6) You fix a 3NF violation (e.g., 'StoreAddress' in a 'CD' entity) by:",
    "options": [
      "Deleting the 'StoreAddress' attribute entirely.",
      "Creating a new 'STORE' entity, moving 'StoreName' and 'StoreAddress' there, and linking 'CD' to 'STORE'.",
      "Adding 'StoreAddress' to the Primary Key of 'CD'.",
      "Making 'StoreAddress' an optional attribute."
    ],
    "correctAnswer": "Creating a new 'STORE' entity, moving 'StoreName' and 'StoreAddress' there, and linking 'CD' to 'STORE'."
  },
  {
    "chapter": 5,
    "question": "Q65. (W6) The primary goal of normalization is to:",
    "options": [
      "Make the database run faster.",
      "Remove data redundancy and prevent data anomalies (errors).",
      "Ensure all UIDs are artificial.",
      "Create as many tables as possible."
    ],
    "correctAnswer": "Remove data redundancy and prevent data anomalies (errors)."
  },
  {
    "chapter": 6,
    "question": "Q66. (W7) You need to model a company's organizational chart where managers also appear as employees. What is the *simplest* and most flexible way to model this, using only one entity?",
    "options": [
      "A Supertype/Subtype model",
      "An Arc",
      "A 1:M Recursive Relationship",
      "A Hierarchical Model with many entities"
    ],
    "correctAnswer": "A 1:M Recursive Relationship"
  },
  {
    "chapter": 6,
    "question": "Q67. (W7) A 'Bill of Materials' (e.g., a 'CAR' is made of many 'COMPONENTS', and a 'SCREW' is part of many 'COMPONENTS') is a classic example of what?",
    "options": [
      "A 1:M Recursive Relationship",
      "A M:M Recursive Relationship",
      "An Arc",
      "A 3NF Violation"
    ],
    "correctAnswer": "A M:M Recursive Relationship"
  },
  {
    "chapter": 6,
    "question": "Q68. (W7) What is the main *advantage* of using a full Hierarchical Model (e.g., `PRESIDENT` entity, `DIRECTOR` entity) instead of a recursive one?",
    "options": [
      "It is simpler and less busy.",
      "It is more explicit and allows you to set mandatory attributes (like `*CarPlan`) that only apply to a specific level.",
      "It resolves all M:M relationships automatically.",
      "It is the only way to model a hierarchy."
    ],
    "correctAnswer": "It is more explicit and allows you to set mandatory attributes (like `*CarPlan`) that only apply to a specific level."
  },
  {
    "chapter": 6,
    "question": "Q69. (W7) You are modeling a `LOAN` entity. `HOME LOAN` and `CAR LOAN` are both 'a kind of' `LOAN`. This is a clear case for what structure?",
    "options": [
      "An Arc",
      "A Supertype/Subtype",
      "A Recursive Relationship",
      "A 3NF fix"
    ],
    "correctAnswer": "A Supertype/Subtype"
  },
  {
    "chapter": 6,
    "question": "Q70. (W7) You are modeling an `EVENT`. An `EVENT` can be held at *either* a `PRIVATE HOME` *or* a `PUBLIC SPACE`. The two 'venue' entities are very different. This is a clear case for what structure?",
    "options": [
      "An Arc",
      "A Supertype/Subtype",
      "A Recursive Relationship",
      "A 2NF fix"
    ],
    "correctAnswer": "An Arc"
  },
  {
    "chapter": 6,
    "question": "Q71. (W8) A business wants to store the *history* of an employee's salary, not just the current one. How should this be modeled?",
    "options": [
      "Add an 'Old_Salary' attribute to the 'EMPLOYEE' entity.",
      "Create a 'SALARY_HISTORY' entity and link it to 'EMPLOYEE' with a 1:M relationship.",
      "Create an Arc to a 'SALARY' entity.",
      "This is a procedural rule and cannot be modeled."
    ],
    "correctAnswer": "Create a 'SALARY_HISTORY' entity and link it to 'EMPLOYEE' with a 1:M relationship."
  },
  {
    "chapter": 6,
    "question": "Q72. (W8) When should you use 'DAY' as an *entity* instead of 'date' as an *attribute*?",
    "options": [
      "Always. 'Date' should never be an attribute.",
      "When you only need to know *when* something happened.",
      "When you need to store *facts about the day itself* (e.g., 'High Temperature' or 'Holiday').",
      "Never. 'DAY' is not a valid entity."
    ],
    "correctAnswer": "When you need to store *facts about the day itself* (e.g., 'High Temperature' or 'Holiday')."
  },
  {
    "chapter": 6,
    "question": "Q73. (W8) An entity `PURCHASE` has a simple UID (`#PurchaseID`) and two non-UID attributes: `*Date` and `*DailyHighTemperature`. This is a violation of:",
    "options": [
      "1NF (multi-valued attribute)",
      "2NF (partial dependency)",
      "3NF (transitive dependency)",
      "This is not a violation."
    ],
    "correctAnswer": "3NF (transitive dependency)"
  },
  {
    "chapter": 6,
    "question": "Q74. (W8) What is 'Journaling' in the context of database modeling?",
    "options": [
      "A procedural rule that cannot be modeled.",
      "A 1NF violation.",
      "The process of creating a log or audit trail (e.g., `SALARY_CHANGE` entity) to track *who* changed *what*, and *when*.",
      "A rule for making an ERD more readable."
    ],
    "correctAnswer": "The process of creating a log or audit trail (e.g., `SALARY_CHANGE` entity) to track *who* changed *what*, and *when*."
  },
  {
    "chapter": 6,
    "question": "Q75. (W8) A rule states: 'A shift can be reassigned to a new employee, *unless* the shift has already started.' This rule (which cannot be drawn) is called:",
    "options": [
      "Conditional Non-transferability",
      "A 2NF Violation",
      "An Exclusive OR Constraint",
      "Journaling"
    ],
    "correctAnswer": "Conditional Non-transferability"
  },
  {
    "chapter": 6,
    "question": "Q76. (W8) What is the main goal of making an ERD readable (e.g., avoiding crossed lines, using white space)?",
    "options": [
      "To satisfy 3NF.",
      "To ensure the database compiles without errors.",
      "To make the model an effective tool for communication with the client and other developers.",
      "To create a barred relationship."
    ],
    "correctAnswer": "To make the model an effective tool for communication with the client and other developers."
  },
  {
    "chapter": 6,
    "question": "Q77. (W8) An entity that is 'central' to the business and will have a large number of instances (like `ENROLLMENT` or `ORDER_LINE`) is called a:",
    "options": [
      "Recursive Entity",
      "High-Volume Entity",
      "Supertype Entity",
      "Nontransferable Entity"
    ],
    "correctAnswer": "High-Volume Entity"
  },
  {
    "chapter": 6,
    "question": "Q78. (W8) You create a `SALARY_HISTORY` entity to track pay raises. What would be the best UID for this entity?",
    "options": [
      "`#EmployeeID` alone",
      "`#StartDate` alone",
      "A composite UID of (`#EmployeeID`, `#StartDate`)",
      "An artificial UID `#HistoryID`"
    ],
    "correctAnswer": "A composite UID of (`#EmployeeID`, `#StartDate`)"
  },
  {
    "chapter": 6,
    "question": "Q79. (W8) An `ORDER` is placed on a `DATE`. The `DATE` entity stores `*isHoliday`. This is a good model because `*isHoliday` depends only on the `DATE`. This model correctly satisfies...",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "All of the above"
    ],
    "correctAnswer": "All of the above"
  },
  {
    "chapter": 6,
    "question": "Q80. (W8) A rule states: 'A shift's start time may be updated, *unless* the shift has already begun.' This is an example of:",
    "options": [
      "A structural rule",
      "A 1NF violation",
      "Conditional non-transferability",
      "A matrix diagram"
    ],
    "correctAnswer": "Conditional non-transferability"
  },
  {
    "chapter": 7,
    "question": "Q81. (Scenario) A `BOOK` has an attribute `oAuthors` which stores 'John Smith, Jane Doe'. This is a clear violation of:",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "This is not a violation."
    ],
    "correctAnswer": "1NF"
  },
  {
    "chapter": 7,
    "question": "Q82. (Scenario) You fix the problem in the previous question by creating a M:M relationship between `BOOK` and `AUTHOR`. This M:M is resolved with an `AUTHORSHIP` entity. Where does the attribute 'Royalty_Split' belong?",
    "options": [
      "In the `BOOK` entity.",
      "In the `AUTHOR` entity.",
      "In the `AUTHORSHIP` intersection entity.",
      "It's a procedural rule and cannot be stored."
    ],
    "correctAnswer": "In the `AUTHORSHIP` intersection entity."
  },
  {
    "chapter": 7,
    "question": "Q83. (Scenario) Your `AUTHORSHIP` entity has a composite UID of (`#BookID`, `#AuthorID`). You add the attribute `Author_Bio`. This creates a:",
    "options": [
      "1NF Violation (multi-valued attribute)",
      "2NF Violation (partial dependency, `Author_Bio` only depends on `#AuthorID`)",
      "3NF Violation (transitive dependency)",
      "This is a valid model."
    ],
    "correctAnswer": "2NF Violation (partial dependency, `Author_Bio` only depends on `#AuthorID`)"
  },
  {
    "chapter": 7,
    "question": "Q84. (Scenario) Your `BOOK` entity has a simple UID of `#ISBN`. You add attributes `Publisher_Name` and `Publisher_City`. This creates a:",
    "options": [
      "1NF Violation (multi-valued attribute)",
      "2NF Violation (partial dependency)",
      "3NF Violation (transitive dependency, `Publisher_City` depends on `Publisher_Name`)",
      "This is a valid model."
    ],
    "correctAnswer": "3NF Violation (transitive dependency, `Publisher_City` depends on `Publisher_Name`)"
  },
  {
    "chapter": 7,
    "question": "Q85. (Scenario) A `LIBRARY` has two types of `ASSETS`: `BOOKS` (with `#ISBN`) and `DVDS` (with `*Studio`). Both share a common attribute `*Title`. This should be modeled as:",
    "options": [
      "A Supertype `ASSET` with subtypes `BOOK` and `DVD`",
      "An Arc from `ASSET` to `BOOK` and `DVD`",
      "A M:M relationship between `BOOK` and `DVD`",
      "A 1:M recursive relationship"
    ],
    "correctAnswer": "A Supertype `ASSET` with subtypes `BOOK` and `DVD`"
  },
  {
    "chapter": 7,
    "question": "Q86. (Scenario) A `LIBRARY` has `LOANS`. A `LOAN` must be for *either* a `BOOK` *or* a `DVD`, but *not both*. The entities `BOOK` and `DVD` are dissimilar. This should be modeled as:",
    "options": [
      "A Supertype `ASSET` with subtypes `BOOK` and `DVD`",
      "An Arc from `LOAN` to `BOOK` and `DVD`",
      "A M:M relationship between `BOOK` and `DVD`",
      "A 1:M recursive relationship"
    ],
    "correctAnswer": "An Arc from `LOAN` to `BOOK` and `DVD`"
  },
  {
    "chapter": 7,
    "question": "Q87. (Scenario) A business rule says: 'A `LOAN` cannot be transferred to a new `MEMBER`.' This is a ________ relationship, drawn with a ________.",
    "options": [
      "Nontransferable, Diamond (`<>`)",
      "Recursive, Loop",
      "Optional, Dashed line (`---`)",
      "Redundant, Solid line (`\u2014`)"
    ],
    "correctAnswer": "Nontransferable, Diamond (`<>`)"
  },
  {
    "chapter": 7,
    "question": "Q88. (Scenario) A business rule says: 'A manager must review a `LOAN` *before* it can be approved.' This is a:",
    "options": [
      "Structural Rule (drawn with an Arc)",
      "Structural Rule (drawn with a Supertype)",
      "Procedural Rule (cannot be drawn on ERD)",
      "1NF Violation"
    ],
    "correctAnswer": "Procedural Rule (cannot be drawn on ERD)"
  },
  {
    "chapter": 7,
    "question": "Q89. (Scenario) A `LOAN` entity has a `*Date_Borrowed` attribute. The business also wants to know the `*Day_of_Week` (e.g., 'Monday'). This creates a 3NF violation because `Day_of_Week` is transitively dependent on `Date_Borrowed`. How do you fix this?",
    "options": [
      "Delete 'Day_of_Week' and just store 'Date_Borrowed'.",
      "Create a `DAY` entity, store 'Day_of_Week' there, and link `LOAN` to the `DAY` entity.",
      "Add 'Day_of_Week' to the primary key.",
      "This is a 2NF violation, not 3NF."
    ],
    "correctAnswer": "Create a `DAY` entity, store 'Day_of_Week' there, and link `LOAN` to the `DAY` entity."
  },
  {
    "chapter": 7,
    "question": "Q90. (Scenario) The business wants to track *all* price changes for a `BOOK` over time, not just the current price. How do you model this?",
    "options": [
      "Add 'Old_Price' and 'New_Price' to the `BOOK` entity.",
      "Create a new 'PRICE_HISTORY' entity and link it to `BOOK` with a 1:M relationship.",
      "Create a 'PRICE' supertype and a 'BOOK' subtype.",
      "This is a procedural rule and cannot be modeled."
    ],
    "correctAnswer": "Create a new 'PRICE_HISTORY' entity and link it to `BOOK` with a 1:M relationship."
  },
  {
    "chapter": 7,
    "question": "Q91. (W6) You are given an entity `PROJECT_ASSIGNMENT` with a composite UID of (`#EmployeeID`, `#ProjectID`). Which of the following attributes would be a **2NF VIOLATION**?",
    "options": [
      "`*HoursWorked` (depends on both Employee and Project)",
      "`*EmployeeName` (depends only on EmployeeID)",
      "`*TaskName` (depends on both Employee and Project)",
      "This entity has no violations."
    ],
    "correctAnswer": "`*EmployeeName` (depends only on EmployeeID)"
  },
  {
    "chapter": 7,
    "question": "Q92. (W6) You are given an entity `PROJECT` with a simple UID of `#ProjectID`. Which of the following sets of attributes would be a **3NF VIOLATION**?",
    "options": [
      "`*ProjectName`, `*Deadline`",
      "`#ProjectID`, `*ProjectName`",
      "`*ProjectName`, `*ClientName`, `*ClientPhoneNumber` (`ClientPhoneNumber` depends on `ClientName`)",
      "This entity has no violations."
    ],
    "correctAnswer": "`*ProjectName`, `*ClientName`, `*ClientPhoneNumber` (`ClientPhoneNumber` depends on `ClientName`)"
  },
  {
    "chapter": 7,
    "question": "Q93. (W6) The primary goal of Normalization is to:",
    "options": [
      "Make the ERD diagram look simpler and less busy.",
      "Reduce data redundancy and prevent update/delete anomalies.",
      "Ensure every entity has a composite UID.",
      "Speed up all database queries."
    ],
    "correctAnswer": "Reduce data redundancy and prevent update/delete anomalies."
  },
  {
    "chapter": 7,
    "question": "Q94. (W7) A 'Bill of Materials' (e.g., a `PRODUCT` is made of many `COMPONENTS`, and a `COMPONENT` is also part of many `PRODUCTS`) is a classic example of a:",
    "options": [
      "1:M Recursive Relationship",
      "M:M Recursive Relationship",
      "Hierarchical Model",
      "Supertype/Subtype"
    ],
    "correctAnswer": "M:M Recursive Relationship"
  },
  {
    "chapter": 7,
    "question": "Q95. (W7) You model an org chart with separate entities: `DIRECTOR`, `MANAGER`, `EMPLOYEE`. What is the *main advantage* of this Hierarchical model?",
    "options": [
      "It's simple and flexible.",
      "It's explicit and lets you have different mandatory attributes for each level (e.g., `*BonusPlan` for `DIRECTOR` only).",
      "It's the only way to satisfy 3NF.",
      "It avoids the use of relationships."
    ],
    "correctAnswer": "It's explicit and lets you have different mandatory attributes for each level (e.g., `*BonusPlan` for `DIRECTOR` only)."
  },
  {
    "chapter": 7,
    "question": "Q96. (W8) A business wants to track *who* changed an employee's salary, *when* it was changed, and *what the old value was*. This is called:",
    "options": [
      "Normalization",
      "Journaling (or Logging)",
      "A Recursive Relationship",
      "Conditional Non-transferability"
    ],
    "correctAnswer": "Journaling (or Logging)"
  },
  {
    "chapter": 7,
    "question": "Q97. (W8) A rule states: 'A `COURSE`'s grade can be updated by a professor, *unless* the university `REGISTRAR` has officially locked the semester.' This is a:",
    "options": [
      "Structural Rule (Nontransferable)",
      "Procedural Rule (Conditional Non-transferability)",
      "3NF Violation (Transitive Dependency)",
      "1NF Violation (Multi-valued attribute)"
    ],
    "correctAnswer": "Procedural Rule (Conditional Non-transferability)"
  },
  {
    "chapter": 7,
    "question": "Q98. (W8) Why is it a good idea to break a very large, complex ERD into smaller sub-diagrams?",
    "options": [
      "To satisfy the 'exhaustive' rule.",
      "To improve readability and make it easier to communicate with different business departments.",
      "To resolve all M:M relationships.",
      "To ensure all UIDs are artificial."
    ],
    "correctAnswer": "To improve readability and make it easier to communicate with different business departments."
  },
  {
    "chapter": 7,
    "question": "Q99. (W1) The output of the 'Build' (Physical) step of the database development process is:",
    "options": [
      "The ERD",
      "The business requirements document",
      "The functioning database, built with SQL commands like `CREATE TABLE`",
      "The conceptual model"
    ],
    "correctAnswer": "The functioning database, built with SQL commands like `CREATE TABLE`"
  },
  {
    "chapter": 7,
    "question": "Q100. (W2) What is the most precise definition of an 'Attribute'?",
    "options": [
      "A single, unique occurrence of an entity.",
      "A property or characteristic of an entity (e.g., 'First Name', 'Shoe Size').",
      "The category or idea of a thing (e.g., 'STUDENT').",
      "A relationship between two entities."
    ],
    "correctAnswer": "A property or characteristic of an entity (e.g., 'First Name', 'Shoe Size')."
  }
];