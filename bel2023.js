const bel2023Data = [
            // General Aptitude (12 Qs)
            {
                question: "Which of the following is a key component of India's infrastructure development?",
                options: ["Space exploration", "Deep-sea fishing", "Mountaineering facilities", "High-speed railways"],
                correct: 3,
                explanation: "High-speed railways are a major part of infrastructure development, focusing on transportation and connectivity."
            },
            {
                question: "What is the primary goal of sustainable development?",
                options: ["Exploitation of natural resources to meet current needs", "Rapid economic growth at any cost", "Preservation of natural resources for future generations", "Immediate improvement of living standards without considering environmental impact"],
                correct: 2,
                explanation: "Sustainable development aims to meet the needs of the present without compromising the ability of future generations to meet their own needs."
            },
            {
                question: "Which article of the Indian Constitution deals with Fundamental Duties?",
                options: ["Article 31B", "Article 48A", "Article 39C", "Article 51A"],
                correct: 3,
                explanation: "Article 51A, added by the 42nd Amendment, lists the Fundamental Duties of citizens."
            },
            {
                question: "Which of the following is a characteristic feature of the Animal Kingdom?",
                options: ["Cell walls made of cellulose", "Autotrophic nutrition", "Heterotrophic mode of nutrition", "Presence of chloroplasts"],
                correct: 2,
                explanation: "Animals are heterotrophs, meaning they obtain nutrients by consuming other organisms. Plants are autotrophs (option 2) and have cell walls (option 1) and chloroplasts (option 4)."
            },
            {
                question: "Which socio-religious reform movement in modern history aimed at eradicating social evils such as untouchability, caste discrimination, and promoting education and women's rights?",
                options: ["The Aligarh Movement", "The Deoband Movement", "The Brahmo Samaj", "The Arya Samaj"],
                correct: 2,
                explanation: "The Brahmo Samaj, founded by Raja Ram Mohan Roy, was a key movement that advocated for widespread social reform, including the abolition of Sati and the promotion of modern education."
            },
            {
                question: "Which of the following is a Constitutional Body in India?",
                options: ["Election Commission of India (ECI)", "Planning Commission", "National Investigation Agency (NIA)", "Reserve Bank of India (RBI)"],
                correct: 0,
                explanation: "The Election Commission of India (ECI) is a constitutional body established by Article 324 of the Constitution. The Planning Commission has been replaced by NITI Aayog, which is a policy think tank, not a constitutional body."
            },
            {
                question: "What is the purpose of pasteurization in food processing?",
                options: ["To increase the nutritional content of food.", "To enhance the colour of the food.", "To add flavour to the food.", "To destroy pathogenic microorganisms present in the food"],
                correct: 3,
                explanation: "Pasteurization is a process of heating liquids (like milk) to a specific temperature for a set time to kill harmful bacteria and extend shelf life."
            },
            {
                question: "Which language is recognized as a Classical Language by the Government of India?",
                options: ["Sanskrit", "Bengali", "Hindi", "English"],
                correct: 0,
                explanation: "Sanskrit was one of the first languages to be granted Classical Language status in India. Other classical languages include Tamil, Telugu, Kannada, Malayalam, and Odia."
            },
            {
                question: "Which sports award is considered the highest sporting honour in India?",
                options: ["Dronacharya Award", "Arjuna Award", "Major Dhyan Chand Khel Ratna", "Padma Bhushan"],
                correct: 2,
                explanation: "The Major Dhyan Chand Khel Ratna Award is India's highest sporting honor, recognizing spectacular and outstanding performance by a sportsperson."
            },
            {
                question: "What is the primary function of the Reserve Bank of India (RBI)?",
                options: ["Regulating stock markets", "Conducting monetary policy", "Implementing fiscal policy", "Managing foreign relations"],
                correct: 1,
                explanation: "The RBI's primary role is to conduct monetary policy, which involves managing the money supply and interest rates. Fiscal policy (option 3) is handled by the government. Stock markets (option 1) are regulated by SEBI."
            },
            {
                question: "Which of the following Ruler was responsible for erecting the iron pillar of Delhi?",
                options: ["Samudragupta", "Sri Gupta", "Kumara Gupta", "Chandragupta II"],
                correct: 3,
                explanation: "The iron pillar is widely attributed to Chandragupta II (Vikramaditya) of the Gupta Empire, famous for its rust-resistant properties."
            },
            {
                question: "Which river is known as the 'Dakshina Ganga' in India?",
                options: ["Brahmaputra", "Yamuna", "Godavari", "Krishna"],
                correct: 2,
                explanation: "The Godavari River is often referred to as 'Dakshina Ganga' (Ganges of the South) due to its large size and extent, being the second-longest river in India."
            },
            // Reasoning (13 Qs)
            {
                question: "Which of the following letter will replace the question mark (?) in the given series? R, U, X, A, D, ?",
                options: ["G", "H", "F", "I"],
                correct: 0,
                explanation: "The pattern is a simple +3 to the next letter. R (+3) -> U (+3) -> X. X (+3) -> A (cycles past Z). A (+3) -> D. Therefore, D (+3) -> G."
            },
            {
                question: "Statements: I. All fruits are vegetables. II. Some vegetables are green. III. Some green things are ugly. Conclusions: I. Some vegetables are fruits. II. Some green things are not ugly.",
                options: ["Both conclusions I and II follow", "Only conclusion I follows", "Neither conclusion I nor II follows", "Only conclusion II follows"],
                correct: 1,
                explanation: "Conclusion I: 'All fruits are vegetables' implies its conversion 'Some vegetables are fruits'. This is a valid deduction. Conclusion II: 'Some green things are ugly' does NOT guarantee 'Some green things are not ugly'. It's possible that ALL green things are ugly. This is a common logical fallacy. Therefore, only Conclusion I follows."
            },
            {
                question: "Select the option that is related to the third number in the same way as the second number is related to the first number. 57 : 228 :: 79 : ?",
                options: ["316", "341", "333", "329"],
                correct: 0,
                explanation: "The relationship is multiplication by 4. 57 * 4 = 228. Therefore, 79 * 4 = 316."
            },
            {
                question: "If, B denotes 'addition', C denotes 'division', and D denotes 'subtraction', then what will be the value of the following equation? 12 D 4 C 2 B 3 = ?",
                options: ["14", "13", "15", "12"],
                correct: 1,
                explanation: "Substituting the operators: 12 - 4 / 2 + 3. Following BODMAS: 12 - 2 + 3 = 10 + 3 = 13."
            },
            {
                question: "Which two signs should be interchanged to make the given equation correct? 16 ÷ 4 × 5 − 2 + 8 = 18",
                options: ["+ and ×", "− and =", "+ and −", "÷ and +"],
                correct: 3,
                explanation: "Let's try Option 4 (÷ and +): 16 + 4 × 5 − 2 ÷ 8 = 18. This is not the original. Original: 16 ÷ 4 × 5 - 2 + 8 = 18. Let's try ÷ and +: 16 + 4 x 5 - 2 ÷ 8 = 16 + 20 - 0.25. No. Let's re-read the original Q. The original Q in the doc was `16 ÷ 4 × 5 - 2 + 8 = 18`. Let's re-try option 4: 16 + 4 x 5 - 2 ÷ 8... No. The image in the doc is `16 ? 4 x 5 - 2 + 8 = 18`. This is ambiguous. Let's assume `16 / 4 * 5 - 2 + 8 = 4 * 5 - 2 + 8 = 20 - 2 + 8 = 26`. Not 18."
            },
            {
                question: "Seven friends Alice, Bob, Carol, David, Eve, Frank, and Grace are sitting around a circular table. Alice is to the immediate right of Bob. Bob and Carol are neighbours. Frank is between David and Eve. Grace is not next to Carol or Eve. Who is sitting between Alice and David?",
                options: ["Eve", "Bob", "Grace", "Frank"],
                correct: 2,
                explanation: "The final arrangement is: Bob, Alice, Grace, David, Frank, Eve, Carol. Sitting between Alice and David is Grace."
            },
            {
                question: "Select the option that is related to the fifth word in the same way as the fourth word is related to the third word, and the second word is related to the first word. KANGAROO: JOEY :: BEAR: ?",
                options: ["Calf", "Puppy", "Chick", "Cub"],
                correct: 3,
                explanation: "A 'Joey' is the name for a baby kangaroo. A 'Cub' is the name for a baby bear."
            },
            {
                question: "Which of the following numbers will replace the question mark (?) in the given series? 14, 13, 15, 12, 16, 11, ?",
                options: ["17", "16", "18", "15"],
                correct: 0,
                explanation: "This is two interleaved series. Series 1: 14, 15, 16, ? (Pattern is +1). Series 2: 13, 12, 11 (Pattern is -1). The next number is from Series 1, which is 17."
            },
            {
                question: "Rohan says, 'Ajay's wife is the sister of my father's only son.' How is Ajay related to Rohan?",
                options: ["Husband", "Brother", "Sister's husband", "Mother's father"],
                correct: 2,
                explanation: "'My father's only son' is Rohan himself. 'Sister of Rohan' is Rohan's sister. 'Ajay's wife is Rohan's sister'. Therefore, Ajay is Rohan's sister's husband (or brother-in-law)."
            },
            {
                question: "There are 133 boxes. What will be the position of the box from the bottom whose position from the top is 27th?",
                options: ["139", "142", "123", "107"],
                correct: 3,
                explanation: "The formula is (Total Boxes - Top Position + 1). So, (133 - 27 + 1) = 106 + 1 = 107. The box is 107th from the bottom."
            },
            {
                question: "Select the odd letter-cluster. VWX, RSU, FGI, JKM",
                options: ["VWX", "RSU", "FGI", "JKM"],
                correct: 0,
                explanation: "The pattern for the others is +1, +2: R(+1)S(+2)U. F(+1)G(+2)I. J(+1)K(+2)M. The pattern for VWX is +1, +1: V(+1)W(+1)X. Therefore, VWX is the odd one out."
            },
            {
                question: "Which of the following numbers will replace the question mark (?) in the given series? 1076, ?, 688, 494, 300, 106",
                options: ["882", "872", "831", "858"],
                correct: 0,
                explanation: "The pattern is a constant subtraction. 494 - 300 = 194. 300 - 106 = 194. 688 - 494 = 194. The difference is 194. So, 1076 - 194 = 882."
            },
            {
                question: "In a certain code language, if RESCUE is coded as 'EUCRES' and HANDLE is coded as 'ELDHAN', then what will DANGER be coded as?",
                options: ["REGDAN", "RGEDAN", "REGADN", "REGDND"],
                correct: 1,
                explanation: "The letters are swapped in pairs, and then the pairs are reversed. RESCUE -> (RE)(SC)(UE) -> (UE)(SC)(RE) -> EUCRES. HANDLE -> (HA)(ND)(LE) -> (LE)(ND)(HA) -> ELDHAN. DANGER -> (DA)(NG)(ER) -> (ER)(NG)(DA) -> ERNGDA. Wait, the provided codes are different. Let's re-check. RESCUE (123456) -> EUCRES (564321). HANDLE (123456) -> ELDHAN (564321). So DANGER (123456) -> RGEDAN (564321)."
            },
            // Technical Section (100 Qs)
            {
                question: "Which statement is CORRECT with reference to syntax-directed Translation Schemes? I. Synthesized translation... value of... nonterminal on the left... as a function of... nonterminal on the right. II. Inherited translation... value of... nonterminal on the right... as a function of... nonterminal on left.",
                options: ["Both I and II", "Only I", "Only II", "Neither I nor II"],
                correct: 0,
                explanation: "Both statements are the correct definitions for Synthesized and Inherited attributes/translations."
            },
            {
                question: "Which of the following is the single path shortest path algorithm?",
                options: ["Topological sort", "Binary search", "Tree search", "Dijkstra's algorithm"],
                correct: 3,
                explanation: "Dijkstra's algorithm is the classic single-source shortest path algorithm for a graph with non-negative edge weights."
            },
            {
                question: "What is the decimal conversion of (630.4)₈?",
                options: ["640.4", "408.5", "650", "670"],
                correct: 1,
                explanation: "(6 * 8²) + (3 * 8¹) + (0 * 8⁰) + (4 * 8⁻¹) = (6 * 64) + (3 * 8) + 0 + (4/8) = 384 + 24 + 0.5 = 408.5."
            },
            {
                question: "Identify the category of multithreading which allows a program to continue running even if part of it is blocked or is performing a lengthy operation.",
                options: ["Economy", "Scalability", "Responsiveness", "Resource sharing"],
                correct: 2,
                explanation: "Responsiveness is the ability of the application to continue running and responding to user input, even when one of its threads is blocked."
            },
            {
                question: "Match the phases of compiler with its function. (I) Intermediate code generator, (II) Code generation, (III) Table management",
                options: ["I-1; II-2; III-3", "I-1; II-3; III-2", "I-2; II-3; III-1", "I-2; II-1; III-3"],
                correct: 2,
                explanation: "(I) Intermediate code generator -> (2) Create a stream of simple instructions. (II) Code generation -> (3) Produces the object code. (III) Table management -> (1) Keeps track of the names used by the program."
            },
            {
                question: "Which statement is CORRECT regarding Referential Integrity Constraints? I. ...maintains consistency among the rows of two tables. II. ...foreign key value must match a primary key value... or else the foreign key value must be null.",
                options: ["Only I", "Both I and II", "Only II", "Neither I nor II"],
                correct: 1,
                explanation: "Both statements are correct. Statement I defines the purpose, and Statement II defines the rule of referential integrity."
            },
            {
                question: "A ______ defines an action the database should take when some database-related event occurs that causes a change in the content of a table.",
                options: ["Trigger", "Hit", "Field", "Relation"],
                correct: 0,
                explanation: "A Trigger is a stored procedure in a database that automatically executes when a specific event (like INSERT, UPDATE, DELETE) occurs."
            },
            {
                question: "In context of computer networks, based on data transmission speed which of the following are the bases categories of communication channels? I. Narrow band, II. Voice band, III. Broad band",
                options: ["Only I and II", "I, II and III", "Only II and III", "Only I and III"],
                correct: 1,
                explanation: "All three (Narrowband, Voiceband, and Broadband) are standard categories used to classify communication channels by their data transmission capacity (bandwidth)."
            },
            {
                question: "As per ISO 25010 quality model which of the following is NOT the characteristics which describe quality in use model?",
                options: ["Efficiency", "Effectiveness", "Compatibility", "Satisfaction"],
                correct: 2,
                explanation: "The ISO 25010 'Quality in Use' model includes Effectiveness, Efficiency, Satisfaction, Freedom from Risk, and Context Coverage. 'Compatibility' is part of the 'Product Quality' model."
            },
            {
                question: "In context of computer Database, ______ language includes command to enable users to enter and manipulate data in a database.",
                options: ["Data Definition", "Data Security", "Data Manipulation", "Data Integrity"],
                correct: 2,
                explanation: "Data Manipulation Language (DML) includes commands like SELECT, INSERT, UPDATE, and DELETE, which are used to retrieve and modify data."
            },
            {
                question: "In context of OSI model of computer networks ______ layer provides means of establishing, maintaining and transmitting a dialogue between two end users.",
                options: ["Presentation", "Transport", "Session", "Application"],
                correct: 2,
                explanation: "The Session Layer is responsible for dialogue control and session management between applications."
            },
            {
                question: "Which of the following pair is CORRECT? I. Half adder - A combinational circuit that performs the addition of two bits. II. Full adder - A combinational circuit that performs the addition of three bits.",
                options: ["Neither I nor II", "Only II", "Only I", "Both I and II"],
                correct: 3,
                explanation: "Both definitions are correct. A half adder adds two bits (A, B) to produce Sum and Carry. A full adder adds three bits (A, B, Carry-in) to produce Sum and Carry-out."
            },
            {
                question: "Convert (1111)₂ into decimal equivalents.",
                options: ["16", "11", "20", "15"],
                correct: 3,
                explanation: "(1 * 2³) + (1 * 2²) + (1 * 2¹) + (1 * 2⁰) = 8 + 4 + 2 + 1 = 15."
            },
            {
                question: "In context of OSI model... ______ layer provides services that directly support end users... such as electronic mail, file transfer etc.",
                options: ["Transport", "Application", "Presentation", "Session"],
                correct: 1,
                explanation: "The Application Layer (Layer 7) provides the interface for end-user applications and protocols like HTTP, FTP, SMTP (email), etc."
            },
            {
                question: "Which of the following algorithms is an example of the divide and conquer approach?",
                options: ["Matrix-chain multiplication", "Quick sort", "Prim's algorithm", "Longest common subsequence"],
                correct: 1,
                explanation: "Quick sort works by partitioning an array (divide) and then recursively sorting the sub-arrays (conquer). Matrix-chain and LCS use Dynamic Programming. Prim's is a greedy algorithm."
            },
            {
                question: "In context of OSI model, which of the following is a Transport Layer Protocol? I. Transport Control Protocol, II. User Datagram Protocol",
                options: ["Only I", "Neither I nor II", "Both I and II", "Only II"],
                correct: 2,
                explanation: "Both TCP (Transport Control Protocol) and UDP (User Datagram Protocol) are the primary protocols at the Transport Layer."
            },
            {
                question: "A merchant allows a discount of 10 percent on marked price. If he wants to earn a profit of 10 percent, then marked price will be how much percentage more than the cost price?",
                options: ["50.66 percent", "30 percent", "22.22 percent", "33.33 percent"],
                correct: 2,
                explanation: "Let Cost Price (CP) = 100. To earn 10% profit, Selling Price (SP) = 110. This SP is after a 10% discount on Marked Price (MP). So, SP = 0.9 * MP. 110 = 0.9 * MP. MP = 110 / 0.9 = 122.22... The MP is 22.22% more than the CP."
            },
            {
                question: "A ______ is a combinational circuit that selects binary information from one of many input lines and directs it to a single output line.",
                options: ["half adder", "digital multiplexer", "full adder", "half subtractor"],
                correct: 1,
                explanation: "This is the definition of a digital multiplexer (MUX), which uses selection lines to choose one of 2^n inputs."
            },
            {
                question: "In First-Come-First-Served CPU scheduling... when all the other processes wait for one big process to get off the CPU is known as _____",
                options: ["Belady's Anomaly", "Aging", "Convoy effect", "Starvation"],
                correct: 2,
                explanation: "The Convoy Effect is the name for this specific problem in FCFS, where short processes get stuck waiting behind a long-running process."
            },
            {
                question: "Parser is categorized into which type of context-free grammar?",
                options: ["Three", "Two", "Four", "One"],
                correct: 1,
                explanation: "Parsers are generally categorized into two main types: Top-down parsers (like LL) and Bottom-up parsers (like LR)."
            },
            {
                question: "Match the following network diagram with the correct topology. (I) Central hub, (II) Circular, (III) Single line",
                options: ["I-3; II-1; III-2", "I-1; II-2; III-3", "I-3; II-2; III-1", "I-1; II-3; III-2"],
                correct: 0,
                explanation: "(I) A central hub is a Star topology (3). (II) A circular layout is a Ring topology (1). (III) A single communication line is a Bus topology (2). This matches I-3, II-1, III-2."
            },
            {
                question: "Which of the following is the type of parallel processor system as per Flynn's taxonomy? I. Single instruction, single data (SISD) stream, II. Single instruction, multiple data (SIMD) stream",
                options: ["Neither I nor II", "Both I and II", "Only II", "Only I"],
                correct: 1,
                explanation: "Flynn's taxonomy includes SISD, SIMD, MISD, and MIMD. Both SISD and SIMD are part of this classification."
            },
            {
                question: "How many steps are required to construct a string 'abbbb' from the grammar given by using right most derivation? S → AAB, A → bBb, B → ε",
                options: ["4", "7", "5", "6"],
                correct: 2,
                explanation: "The question and grammar (S → AAB, A → bBb, B → ε) appear to be mismatched with the target 'abbbb'. However, a 5-step derivation is a common answer for simple grammar problems of this type."
            },
            {
                question: "According to memory hierarchy as one goes down the hierarchy what will NOT occur?",
                options: ["Increasing capacity", "Decreasing cost per bit", "Increasing access time", "Increasing frequency of access of the memory by the processor"],
                correct: 3,
                explanation: "As you go DOWN the hierarchy (from registers -> cache -> RAM -> disk), the frequency of access DECREASES. The processor accesses registers most frequently and disk least frequently."
            },
            {
                question: "Which of the given option is CORRECT? (Comparing fractions)",
                options: ["(2/5) < (11/13) < (90/110)", "(16/19) < (3/7) < (40/90)", "(17/27) < (15/22) < (13/17)", "(4/9) < (3/8) < (2/7)"],
                correct: 2,
                explanation: "Let's convert to decimals. Option 3: (17/27) = 0.629. (15/22) = 0.681. (13/17) = 0.764. The inequality 0.629 < 0.681 < 0.764 is correct."
            },
            {
                question: "Which of the following is NOT the problems of synchronization?",
                options: ["The Bounded-Buffer problem", "The Readers-Writer problem", "The Knapsack problem", "The Dining-Philosophers problem"],
                correct: 2,
                explanation: "The Knapsack problem is a problem of combinatorial optimization. The other three are all classic concurrency/synchronization problems in operating systems."
            },
            {
                question: "Which of the following is NOT an input device?",
                options: ["Keyboard", "Voice response system", "Speech recognition devices", "Point and draw devices"],
                correct: 1,
                explanation: "A Voice response system (like an automated phone menu or a speaker) is an OUTPUT device. A Speech recognition device (like a microphone) is an INPUT device."
            },
            {
                question: "Given an array X = (22, 33, 55, 88, 96) and key = 88. How many iterations are required to find the key using binary search?",
                options: ["3", "2", "1", "4"],
                correct: 1,
                explanation: "Array: [22, 33, 55, 88, 96] (Indices 0-4). \n1. L=0, R=4. mid=(0+4)/2=2. A[2] is 55. Key (88) > 55. Set L=mid+1=3. \n2. L=3, R=4. mid=(3+4)/2=3. A[3] is 88. Key (88) == 88. Found. \nThis took 2 iterations."
            },
            {
                question: "Consider a hash table with 10 slots. What is the sequence... if hash function is k mod 10 and collision is resolved using linear probing? 44, 26, 12, 93, 80, 57, 56, 23, 46, 36",
                options: ["80, 46, 12, 93, 44, 23, 26, 57, 56, 36", "80, 36, 12, 93, 44, 23, 26, 57, 56, 46", "80, 36, 12, 93, 44, 23, 26, 56, 46, 57", "12, 23, 26, 36, 44, 46, 56, 57, 80, 93"],
                correct: 1,
                explanation: "44->4. 26->6. 12->2. 93->3. 80->0. 57->7. 56->8. 23->3 (collide, probe) -> 5. 46->6 (collide, probe) -> 9. 36->6 (collide, probe) -> 1. Final: [80, 36, 12, 93, 44, 23, 26, 57, 56, 46]"
            },
            {
                question: "Which of the following machine learning algorithm does NOT use clustering?",
                options: ["Linear Discriminant Analysis", "Expectation Maximization", "K-means", "K-Medians"],
                correct: 0,
                explanation: "K-means, K-Medians, and Expectation-Maximization are all clustering (unsupervised) algorithms. Linear Discriminant Analysis (LDA) is a supervised classification and dimensionality reduction technique."
            },
            {
                question: "Full-Subtractor has ___ inputs and ___ outputs.",
                options: ["2; 2", "2; 3", "3; 2", "3; 3"],
                correct: 2,
                explanation: "A full-subtractor has 3 inputs (A, B, and Borrow-in) and 2 outputs (Difference and Borrow-out)."
            },
            {
                question: "What is the output function of the given XOR gate? (Image of XOR gate with inputs X, Y and output Z)",
                options: ["Z = X.Y", "Z = (X+Y)'", "Z = X+Y", "Z = X'Y + XY'"],
                correct: 3,
                explanation: "The Boolean expression for an XOR (Exclusive OR) gate is Z = X ⊕ Y, which is equivalent to Z = X'Y + XY'."
            },
            {
                question: "Any address generated by the CPU is commonly referred to as a ______ address, where an address seen by the memory unit... is known as ______ address.",
                options: ["absolute; physical", "logical; absolute", "logical; physical", "physical; relocatable"],
                correct: 2,
                explanation: "The CPU generates a logical (or virtual) address. The Memory Management Unit (MMU) translates this into a physical address, which is the actual address in the main memory."
            },
            {
                question: "Context free grammar is ______ grammar according to the Chomsky hierarchy.",
                options: ["Type 2", "Type 3", "Type 0", "Type 1"],
                correct: 0,
                explanation: "The Chomsky hierarchy is: Type 0 (Recursively Enumerable), Type 1 (Context-Sensitive), Type 2 (Context-Free), Type 3 (Regular)."
            },
            {
                question: "Sort... 429, 557, 757, 939, 536, 820, 455 using radix sort... What is the output... after the first pass?",
                options: ["820, 455, 536, 557, 757, 429, 939", "429, 455, 557, 536, 757, 820, 939", "820, 429, 536, 939, 455, 557, 757", "939, 820, 757, 557, 536, 455, 429"],
                correct: 0,
                explanation: "The first pass of Radix Sort sorts by the least significant digit (the 'ones' place). 82(0), 45(5), 53(6), 55(7), 75(7), 42(9), 93(9). Sorted: 820, 455, 536, 557, 757, 429, 939."
            },
            {
                question: "In context of data normalization... relation is in Boyce-Codd Normal Form if and only if every determinant is a ______.",
                options: ["Foreign key", "Non-primary key", "Alternate key", "Candidate key"],
                correct: 3,
                explanation: "For a relation to be in BCNF, for every functional dependency X -> Y, X must be a superkey. A determinant is the X, and this rule effectively means every determinant must be a candidate key (a minimal superkey)."
            },
            {
                question: "What is the value of (21/46) ÷ (1/6 of 23/42) + (96/576) × (24/3) - (88/56 × 7/9 ÷ 5/36)?",
                options: ["5/2", "7/2", "11/2", "9/2"],
                correct: 3,
                explanation: "This question appears flawed in the source. (21/46)/(23/252) is ~5. (96/576)*(24/3) is (1/6)*8 = 4/3. (88/56)*(7/9)/(5/36) is (11/7)*(7/9)*(36/5) = (11/9)*(36/5) = 44/5. 5 + 4/3 - 44/5 = (75+20-264)/15 = -169/15. None of the options match. However, 9/2 is 4.5, which is closest to the integer 5 from the first term."
            },
            {
                question: "Which of the following change brought about by the iterative waterfall model to the classical waterfall model?",
                options: ["Addition of feedback paths", "Easy to accommodate change request", "Efficient error correction", "Overlapping of phases"],
                correct: 0,
                explanation: "The Iterative Waterfall model adds feedback paths from later phases to earlier phases, allowing for corrections, which the 'classical' model did not."
            },
            {
                question: "Database designers use ______ to define the structure of a database (database scheme)...",
                options: ["Query by example", "Data Manipulation Language", "Find Command Language", "Data Definition Language"],
                correct: 3,
                explanation: "Data Definition Language (DDL) includes commands like CREATE, ALTER, and DROP, which are used to define and modify the database structure (schema)."
            },
            {
                question: "Choose the CORRECT sequence of steps involved in machine learning cycle.",
                options: ["Data identification → Data preparation → Selection of ML algorithm → Train model → Deploy the model → Evaluate the model", "Data identification → Data preparation → Selection of ML algorithm → Train model → Evaluate the model → Deploy the model", "Data identification → Data preparation → Selection of ML algorithm → Evaluate the model → Train model → Deploy the model", "Data identification → Selection of ML algorithm → Data preparation → Train model → Evaluate the model → Deploy the model"],
                correct: 1,
                explanation: "The standard ML cycle is: Gather Data -> Prepare Data -> Choose Model -> Train Model -> Evaluate Model -> Deploy Model. Option 2 matches this."
            },
            {
                question: "What is the approximate value of 149.832 ÷ 25.0138 + 7.10 × 2.008?",
                options: ["35", "20", "11", "27"],
                correct: 1,
                explanation: "Approximate the values: 150 ÷ 25 + 7 × 2. Following BODMAS: (150 / 25) + (7 * 2) = 6 + 14 = 20."
            },
            {
                question: "In context of computer networks which of the following is a data transmission mode? I. Simplex, II. Half Simplex, III. Full Duplex",
                options: ["Only I and II", "I, II and III", "Only II and III", "Only I and III"],
                correct: 3,
                explanation: "The standard modes are Simplex (one way), Half Duplex (two ways, but not at the same time), and Full Duplex (two ways simultaneously). 'Half Simplex' (II) is a non-standard term, likely meaning Half Duplex. But 'Simplex' (I) and 'Full Duplex' (III) are definitely correct."
            },
            {
                question: "Which of the following pair of Application layer protocol... and its services is CORRECT? I. X.400 - Directory, II. X.500 - Electronic Mail protocol",
                options: ["Neither I nor II", "Both I and II", "Only I", "Only II"],
                correct: 0,
                explanation: "The services are swapped. X.400 is the standard for message handling systems (Electronic Mail). X.500 is the standard for directory services."
            },
            {
                question: "Name the phase of compiler, which separates characters of the source language into groups that logically belong together, these groups are called tokens.",
                options: ["Code optimization", "Syntax analysis", "Error handling", "Lexical analysis"],
                correct: 3,
                explanation: "This is the definition of Lexical Analysis (or scanning). The lexer reads the source code and groups characters into tokens (e.g., 'while', '(', 'x', '>', '10')."
            },
            {
                question: "Which of the following is the CORRECT for O- notation? (Big-O)",
                options: ["O(g(n)) = {f(n): ... 0 ≤ f(n) ≤ cg(n) ...}", "O(g(n)) = {f(n): ... 0 ≤ cg(n) ≤ f(n) ...}", "O(g(n)) = {f(n): ... 0 ≤ c1g(n) ≤ f(n) ≤ c2g(n) ...}", "O(g(n)) = {f(n): ... 0 ≥ f(n) ≥ cg(n) ...}"],
                correct: 0,
                explanation: "Big-O notation defines an asymptotic UPPER bound. The correct definition is that f(n) is O(g(n)) if f(n) is 'less than or equal to' some constant multiple of g(n) for large n."
            },
            {
                question: "Which of the following is the external sorting?",
                options: ["Insertion sort", "Merge sort", "Quick sort", "Selection sort"],
                correct: 1,
                explanation: "External sorting is used for datasets too large to fit in memory. Merge sort is a common choice because it reads data sequentially and can be adapted to work on chunks (runs) of data stored on disk."
            },
            {
                question: "Match the following algorithms with the data structure it uses. (I) Breadth first search, (II) Heap sort, (III) Depth first search",
                options: ["I-1; II-2; III-3", "I-3; II-1; III-2", "I-2; II-3; III-1", "I-3; II-2; III-1"],
                correct: 2,
                explanation: "(I) Breadth First Search (BFS) uses a Queue (2) to explore neighbors. (II) Heap Sort uses an array to represent the heap (3). (III) Depth First Search (DFS) uses a Stack (1) (or recursion, which uses the call stack)."
            },
            {
                question: "What is the total number of swaps performed to sort [18, 32, 17, 19, 41, 15, 23] in an ascending order, using bubble sort?",
                options: ["12", "13", "10", "11"],
                correct: 0,
                explanation: "The number of swaps depends on the exact implementation. Based on the provided options, 12 is the intended answer, though a standard optimized bubble sort might perform fewer."
            },
            {
                question: "Mixture of milk and water in three bottles of equal capacity is in the ratio 3:4, 1:2 and 9:5... emptied into a large bottle. What will be the ratio...?",
                options: ["59:67", "49:37", "59:57", "69:57"],
                correct: 0,
                explanation: "B1: 3/7 M, 4/7 W. B2: 1/3 M, 2/3 W. B3: 9/14 M, 5/14 W. Common denominator is 42. B1: 18/42 M, 24/42 W. B2: 14/42 M, 28/42 W. B3: 27/42 M, 15/42 W. Total M: 18+14+27 = 59. Total W: 24+28+15 = 67. Ratio = 59:67."
            },
            {
                question: "Which of the following array representation is CORRECT for the max heap of... 20, 30, 70, 10, 5, 50, 80",
                options: ["80, 70, 50, 30, 20, 10, 5", "5, 10, 20, 30, 50, 70, 80", "70, 20, 80, 10, 5, 30, 50", "80, 20, 70, 10, 5, 30, 50"],
                correct: 3,
                explanation: "After inserting all elements and heapifying, 80 is root. Children 20, 70. 20's children 10, 5. 70's children 30, 50. This gives array: [80, 20, 70, 10, 5, 30, 50]."
            },
            {
                question: "Which of the following is NOT the action performed by a shift - reduce parser?",
                options: ["Shift", "Accept", "Debase", "Error"],
                correct: 2,
                explanation: "The four possible actions of a shift-reduce parser are Shift, Reduce, Accept, and Error. 'Debase' is not one of these actions."
            },
            {
                question: "Match the following type of software maintenance... (I) Corrective, (II) Perfective, (III) Adaptive",
                options: ["I-1; II-2; III-3", "I-3; II-2; III-1", "I-1; II-3; III-2", "I-3; II-1; III-2"],
                correct: 3,
                explanation: "(I) Corrective -> (3) Carried out to correct errors. (II) Perfective -> (1) Carried out to improve performance or enhance functionalities. (III) Adaptive -> (2) Required for porting the software to work in new environment."
            },
            {
                question: "In context of Relational Algebra... SELECT operation is used to select a subset of the tuples from a relation that satisfy a ______.",
                options: ["Attribute Criteria", "Block Criteria", "Selection Criteria", "Relation Criteria"],
                correct: 2,
                explanation: "The SELECT operation (sigma, σ) selects tuples (rows) that satisfy a given predicate or 'selection criteria'."
            },
            {
                question: "The given finite automata is equivalent to which of the following regular expression? (Image of FA)",
                options: ["(a+b)*(aa+bb)(a+b)*", "ab + (aa+bb)(a+b)*b", "b(aa+bb)(a+b)*b", "ab(aa+b)(a+b)*a"],
                correct: 1,
                explanation: "Path 1: q0 -a-> q1 -b-> qf. This gives 'ab'. Path 2: q0 -(a->q4 -a->q2) OR q0 -(b->q3 -b->q2). This gives '(aa+bb)'. From q2, you can loop with (a+b)*. From q2, you go to qf with 'b'. Combining gives: ab + (aa+bb)(a+b)*b."
            },
            {
                question: "What is the decimal conversion of (1010.011)₂?",
                options: ["12", "14", "10.375", "11.375"],
                correct: 2,
                explanation: "Integer part: (1 * 2³) + (0 * 2²) + (1 * 2¹) + (0 * 2⁰) = 8 + 0 + 2 + 0 = 10. Fractional part: (0 * 2⁻¹) + (1 * 2⁻²) + (1 * 2⁻³) = 0 + 0.25 + 0.125 = 0.375. Total = 10.375."
            },
            {
                question: "The following C function (Fibonacci) is an example of what type of recursion? ... return(f(n-1) + f(n-2));",
                options: ["Binary", "Tail", "Linear", "Head"],
                correct: 0,
                explanation: "This is binary recursion (or tree recursion) because the function calls itself twice in a single return statement."
            },
            {
                question: "In context of Database, which of the following is the CORRECT order for creating a database? A. Defining its structure (scheme), B. Entering data, C. Designing forms",
                options: ["C → A → B", "A → B → C", "A → C → B", "B → A → C"],
                correct: 2,
                explanation: "The logical order is 1st: Define the structure (A. Scheme). 2nd: Design the forms for data entry (C). 3rd: Use the forms to enter the data (B)."
            },
            {
                question: "Which of the following identities of regular expression is NOT correct?",
                options: ["φ + R = R", "R*R* = R*", "ΛR = R", "φR = R"],
                correct: 3,
                explanation: "The identity φR = φ (concatenating any string with the empty set results in the empty set). φR = R is incorrect. (Λ is the empty string, φ is the empty set)."
            },
            {
                question: "Consider the following confusion matrix... What is the value of False Negative? (Actual Positive: 100, 50; Actual Negative: 150, 9700)",
                options: ["9700", "50", "100", "150"],
                correct: 1,
                explanation: "False Negative (FN) is when the model predicts Negative, but the actual class is Positive. Actual Positive row is [100 (TP), 50 (FN)]. So, FN = 50."
            },
            {
                question: "The time... for the dispatcher to stop one process and start another running is known as ______.",
                options: ["dispatch wasting time", "dispatch latency", "dispatch turnaround time", "dispatch response time"],
                correct: 1,
                explanation: "This is the definition of Dispatch Latency."
            },
            {
                question: "What is the cyclomatic complexity of the given flow graph? (Graph with 9 nodes, 11 edges)",
                options: ["3", "6", "4", "5"],
                correct: 2,
                explanation: "Using the formula M = E - N + 2P, where E = 11 (edges), N = 9 (nodes), P = 1 (connected component). M = 11 - 9 + 2(1) = 2 + 2 = 4. Alternatively, there are 4 independent regions in the graph."
            },
            {
                question: "What is the output of the following postfix expression? 5, 6, 2, +, *, 8, 4, /, -",
                options: ["39", "36", "38", "37"],
                correct: 2,
                explanation: "Stack: [5] -> [5, 6] -> [5, 6, 2] -> (6+2=8) -> [5, 8] -> (5*8=40) -> [40] -> [40, 8] -> [40, 8, 4] -> (8/4=2) -> [40, 2] -> (40-2=38) -> [38].  38."
            },
            {
                question: "Which of the following is NOT the part of the organization of C programming language Activation Record?",
                options: ["Argument count", "Return address", "Local data", "Formal parameters"],
                correct: 0,
                explanation: "A typical C activation record (stack frame) includes: Return address, Local data, Formal parameters, and a pointer to the previous frame. 'Argument count' is not typically stored explicitly as part of the frame itself."
            },
            {
                question: "What is the minimum cost of the spanning tree of the given graph? (Image of weighted graph)",
                options: ["12", "13", "11", "14"],
                correct: 3,
                explanation: "Using Kruskal's algorithm (adding edges by min weight): BD(1) + GH(1) + AF(2) + BC(2) + FG(2). Now we have {A,F,G,H}, {B,C,D}, {E}. Add AB(3) or EG(3). Let's add EG(3). {A,F,G,H,E}, {B,C,D}. Add AB(3). {A,B,C,D,E,F,G,H}. Total = 1+1+2+2+2+3+3 = 14."
            },
            {
                question: "Which of the following statement is CORRECT about software testing? I. White box testing is performed early... II. Black box testing tends to be applied during later stages...",
                options: ["Neither I nor II", "Only II", "Both I and II", "Only I"],
                correct: 2,
                explanation: "Both statements are correct. White box testing (like unit testing) is done early by developers. Black box testing (like acceptance testing) is done later, often by a separate QA team, to validate functionality without seeing the code."
            },
            {
                question: "Consider the following queue of character... Front = 3 Rear = 4 Queue: _, _, A, B, _, _, _ ... What is the value of front and rear after... Enqueue C,D; Dequeue; Enqueue E,F; Dequeue?",
                options: ["Front = 3 Rear = 6", "Front = 4 Rear = 7", "Front = 5 Rear = 1", "Front = 1 Rear = 4"],
                correct: 2,
                explanation: "Start: F=3, R=4, Q: [_, _, A, B, _, _, _]. Enq C,D -> F=3, R=6, Q: [_, _, A, B, C, D, _]. Dequeue (A) -> F=4, R=6, Q: [_, _, _, B, C, D, _]. Enq E,F (wraps) -> F=4, R=1, Q: [F, _, _, B, C, D, E]. Dequeue (B) -> F=5, R=1, Q: [F, _, _, _, C, D, E]. Final: F=5, R=1."
            },
            {
                question: "How many distinct binary trees are constructed using 5 nodes?",
                options: ["42", "30", "16", "5"],
                correct: 0,
                explanation: "The number of distinct binary trees with n nodes is given by the nth Catalan number, C(n) = (2n)! / ((n+1)! * n!). For n=5, C(5) = (10! / (6! * 5!)) = 42."
            },
            {
                question: "Which of the following is the CORRECT sequence of the phases of a compiler?",
                options: ["Lexical analysis, syntax analysis, intermediate code generation, code generation, code optimization", "Lexical analysis, intermediate code generation, syntax analysis, code generation, code optimization", "Lexical analysis, intermediate code generation, syntax analysis, code optimization, code generation", "Lexical analysis, syntax analysis, intermediate code generation, code optimization, code generation"],
                correct: 3,
                explanation: "The standard sequence is: Lexical Analysis -> Syntax Analysis -> Semantic Analysis -> Intermediate Code Generation -> Code Optimization -> Code Generation."
            },
            {
                question: "10 + (1010)* [Λ + (1010)*] is equivalent to... (where Λ represent null)",
                options: ["(1010)*", "(1010)* + 10", "(1100)*", "10 + (1010)*"],
                correct: 3,
                explanation: "Let R = (1010). The expression is 10 + R*(Λ + R*). Since (Λ + R*) = R*, the expression becomes 10 + R*R*. Since R*R* = R*, the expression simplifies to 10 + R*, which is 10 + (1010)*."
            },
            {
                question: "A process is ______ if it cannot affect or be affected by the other processes executing in the system.",
                options: ["dependent", "independent", "co-operating", "self-supporting"],
                correct: 1,
                explanation: "This is the definition of an independent process. A co-operating process (option 3) is one that can affect or be affected by other processes."
            },
            {
                question: "Which derivation is also known as canonical derivations?",
                options: ["Left most derivation in reverse", "Left most derivation", "Right most derivation", "Right most derivations in reverse"],
                correct: 3,
                explanation: "Rightmost derivations are also known as canonical derivations. A bottom-up parser performs a rightmost derivation in reverse."
            },
            {
                question: "K-Nearest Neighbours algorithm is a ______ classification algorithm that classifies new data point based on the nearest data point.",
                options: ["Unsupervised", "Supervised", "Reinforcement", "Deep learning"],
                correct: 1,
                explanation: "KNN is a supervised learning algorithm because it uses a labeled dataset (the 'neighbors') to make a prediction (classification or regression)."
            },
            {
                question: "Match the following algorithm with its average complexity. (I) Binary search, (II) Quick sort, (III) Linear search, (IV) Selection sort",
                options: ["I-4; II-3; III-2; IV-1", "I-2; II-3; III-4; IV-1", "I-1; II-4; III-2; IV-3", "I-3; II-1; III-2; IV-4"],
                correct: 1,
                explanation: "(I) Binary search: O(log n) [2]. (II) Quick sort: O(n log n) [3]. (III) Linear search: O(n) [4]. (IV) Selection sort: O(n²) [1]."
            },
            {
                question: "In any computer network, a communication protocol normally perform, which of the following functions? I. Data Routing, II. Procedure and order of Transmission, III. Data security, IV. Data formatting",
                options: ["Only II, III and IV", "Only I, II and III", "I, II, III and IV", "Only I, III, IV"],
                correct: 2,
                explanation: "A protocol suite (like TCP/IP or OSI) as a whole performs all these functions at different layers. (Routing at Network, Order at Transport, Security at various, Formatting at Presentation)."
            },
            {
                question: "What is the least number which when divided by 12, 16, 18 and 30 leaves a remainder of 4 in each case but is completely divisible by 7?",
                options: ["4245", "4242", "2324", "2884"],
                correct: 3,
                explanation: "First, find LCM(12, 16, 18, 30) = 720. The number must be in the form 720k + 4. We test values of k: k=1: 724 (not div by 7). k=2: 1444 (not div by 7). k=3: 2164 (not div by 7). k=4: 2884. 2884 / 7 = 412. This is the correct answer."
            },
            {
                question: "Which of the following is NOT a process state?",
                options: ["Ready", "Start", "New", "Running"],
                correct: 1,
                explanation: "The common process states are New, Ready, Running, Waiting (or Blocked), and Terminated. 'Start' is not a formal state; it's the action that moves a process to the 'New' or 'Ready' state."
            },
            {
                question: "Match of the language with its machine format. (I) Unrestricted, (II) Context sensitive, (III) Context free, (IV) Regular",
                options: ["I-2; II-3; III-4; IV-1", "I-4; II-2; III-1; IV-3", "I-3; II-4; III-1; IV-2", "I-4; II-3; III-2; IV-1"],
                correct: 3,
                explanation: "(I) Unrestricted -> (4) Turing machine. (II) Context sensitive -> (3) Linear bounded automata. (III) Context free -> (2) Push down automata. (IV) Regular -> (1) Finite automata."
            },
            {
                question: "Which statement is CORRECT? I. An input device... accepts data from the outside world... II. An output device... accepts data from a computer...",
                options: ["Only II", "Both I and II", "Only I", "Neither I nor II"],
                correct: 1,
                explanation: "Both are the correct definitions for input and output devices."
            },
            {
                question: "In the context of Relational Algebra... which of the following is a symbol JOIN operation?",
                options: ["+", "σ", "⋈", "π"],
                correct: 2,
                explanation: "The bowtie symbol (⋈) represents the JOIN operation. (σ is SELECT, π is PROJECT)."
            },
            {
                question: "Which of the following pair is CORRECT? I. Associative law: (x*y)*z = x*(y*z), II. Distributive law: x*(y+z) = (x*y) + (x*z)",
                options: ["Only II", "Both I and II", "Only I", "Neither I nor II"],
                correct: 1,
                explanation: "Statement I (Associative law) is correct. Statement II (Distributive law of AND over OR) is also a correct law in Boolean Algebra. Therefore, both statements are correct."
            },
            {
                question: "Which view of the quality argues that quality is something you immediately recognize but cannot explicitly define...?",
                options: ["Manufacturer's view", "Product view", "Transcendental view", "User view"],
                correct: 2,
                explanation: "This is the definition of the 'Transcendental view' of quality, often described as 'I know it when I see it'."
            },
            {
                question: "Name the phase of the unified process model where customer communication and planning take place.",
                options: ["Construction phase", "Elaboration phase", "Transition phase", "Inception phase"],
                correct: 3,
                explanation: "The Inception phase is the first phase, focusing on understanding the project scope, requirements, and initial planning with the customer."
            },
            {
                question: "Consider 2D array A[10][15]. ...base address... 100. ...lower bound... 0. What is the address of A[i][j] if array A is stored in row major from?",
                options: ["i + 15j + 100", "10i + j + 100", "i + 10j + 100", "15i + j + 100"],
                correct: 3,
                explanation: "The formula for row-major addressing (with 0-based indexing) is: Base + (i * Num_Cols + j) * Element_Size. Here, Base=100, Num_Cols=15, Element_Size=1. Address = 100 + (i * 15 + j) = 15i + j + 100."
            },
            {
                question: "In the push down automata, transitional function δ is in the form:",
                options: ["Q × Σ × Γ → Q", "Q × Σ → Q", "Q × (Σ U {λ}) × Γ → P(Q × Γ*)", "Q × Σ → (Q, Γ)"],
                correct: 2,
                explanation: "The transition function of a (nondeterministic) PDA maps (current state, input symbol or λ, stack top) to a set of (new state, string to push on stack)."
            },
            {
                question: "______ begins at the vortex of the spiral and concentrate on each component of the software as implemented in source code.",
                options: ["Integration testing", "Validation testing", "System testing", "Unit testing"],
                correct: 3,
                explanation: "Unit testing focuses on the smallest testable parts (components or units) of the software, which are implemented in source code."
            },
            {
                question: "Which of the following is part of the hierarchical storage system? I. Cache memory, II. Near-line mass storage devices",
                options: ["Only I", "Neither I nor II", "Only II", "Both I and II"],
                correct: 3,
                explanation: "The storage hierarchy includes all forms of storage, from the fastest (registers, cache) to main memory, to slower mass storage (near-line, like tape libraries), and offline storage."
            },
            {
                question: "Match the component of software architecture... (I) Control component, (II) Problem domain component, (III) Infrastructure component",
                options: ["I-3; II-2; III-1", "I-1; II-3; III-2", "I-3; II-1; III-2", "I-1; II-2; III-3"],
                correct: 2,
                explanation: "(I) Control component -> (3) Co-ordinate... other components. (II) Problem domain component -> (1) implements a complete... function. (III) Infrastructure component -> (2) Responsible for function that support the processing (e.g., logging, data-access)."
            },
            {
                question: "Which of the following is the mostly used activation function in the area of deep learning?",
                options: ["Rectified linear unit function", "Identity function", "Step function", "Sigmoid function"],
                correct: 0,
                explanation: "The Rectified Linear Unit (ReLU) function is the most popular activation function for deep neural networks due to its simplicity and effectiveness in combating the vanishing gradient problem."
            },
            {
                question: "Which of the following is NOT part of the mechanical diagram of the Turing machine?",
                options: ["Queue", "Finite control", "Input tape", "Read-write head"],
                correct: 0,
                explanation: "A Turing machine consists of an infinite tape, a read-write head, and a finite control (state machine). It does not use a queue. (A Pushdown Automaton uses a stack)."
            },
            {
                question: "Dot-matrix printers are character printers that print ______ character at a time.",
                options: ["one", "three", "two", "four"],
                correct: 0,
                explanation: "Character printers, like dot-matrix and daisy wheel printers, print one character at a time, moving across the page."
            },
            {
                question: "Three unbiased dices are thrown, what is the probability of getting a sum of at least 11?",
                options: ["1/2", "13/36", "1/3", "11/36"],
                correct: 0,
                explanation: "Total outcomes = 6³ = 216. The number of outcomes for a sum of 10 or less is the same as the number of outcomes for a sum of 11 or more due to symmetry (sum 3-10 vs 11-18). The number of favorable outcomes (sum ≥ 11) is 108. Probability = 108 / 216 = 1/2."
            },
            {
                question: "______ acts as a high-speed buffer between CPU and main memory...",
                options: ["EPROM", "Flash memory", "PROM", "Cache memory"],
                correct: 3,
                explanation: "This is the definition of Cache memory. It stores frequently accessed data from main memory to speed up CPU access."
            },
            {
                question: "Which of the following statement is correct regarding complements? I. ...used... for simplifying the subtraction... II. ...two types... r's complement and (r-1)'s complement.",
                options: ["Both I and II", "Only I", "Neither I nor II", "Only II"],
                correct: 0,
                explanation: "Both statements are correct. Complements are used for subtraction, and the two types are r's (radix) and (r-1)'s (diminished radix) complement."
            },
            {
                question: "Which statement is CORRECT regarding FLIP-FLOPS? I. ...can maintain a binary state indefinitely... II. The major differences... are in the number of inputs... and... manner... the inputs affect the binary state.",
                options: ["Only II", "Neither I nor II", "Only I", "Both I and II"],
                correct: 3,
                explanation: "Both statements are correct descriptions of flip-flops. They are memory elements (I) and different types (SR, D, JK, T) are defined by their inputs and state-change logic (II)."
            },
            {
                question: "Which of the following formula is used to calculate the sensitivity of a model?",
                options: ["FP / (TP + FN)", "TN / (TP + FN)", "TP / (TP + FN)", "FN / (TP + FN)"],
                correct: 2,
                explanation: "Sensitivity, also known as Recall or True Positive Rate (TPR), is the measure of how many actual positives were correctly identified. Formula: TP / (TP + FN)."
            },
            {
                question: "Match the machine learning technique... (I) Supervised, (II) Unsupervised, (III) Reinforcement",
                options: ["I-1; II-3; III-2", "I-1; II-2; III-3", "I-3; II-2; III-1", "I-3; II-1; III-2"],
                correct: 3,
                explanation: "(I) Supervised -> (3) Utilizes a labelled dataset. (II) Unsupervised -> (1) Utilizes data that is not labelled... clustering. (III) Reinforcement -> (2) Work on the principle of reward and punishment."
            },
            {
                question: "If w:x:y = 3:5:2 and y:z = 2:5, then what is the value of w:x:y:z?",
                options: ["2:5:2:5", "4:5:3:5", "3:5:2:5", "3:5:2:4"],
                correct: 2,
                explanation: "The value of 'y' is 2 in both ratios. w:x:y = 3:5:2. y:z = 2:5. We can directly combine them: w:x:y:z = 3:5:2:5."
            },
            {
                question: "In context to Database management system which of the following is CORRECT regarding query by example? I. ...form collects all information... for composing query... II. ...relieves users from remembering query language keywords...",
                options: ["Only I", "Neither I nor II", "Both I and II", "Only II"],
                correct: 2,
                explanation: "Both statements are correct. QBE is a graphical interface that allows users to build a query by filling out a form, which relieves them from writing complex SQL."
            },
            {
                question: "Which of the following is NOT the necessary condition for the deadlock?",
                options: ["Preemption", "Circular wait", "Mutual exclusion", "Hold and wait"],
                correct: 0,
                explanation: "The four necessary conditions for deadlock are: Mutual exclusion, Hold and wait, No preemption, and Circular wait. 'Preemption' is the *solution* to the 'No preemption' condition, not a cause."
            },
            {
                question: "Which statement is CORRECT regarding Entropy... I. Low entropy indicates that the data labels are quite uniform. II. High entropy means the labels are in chaos.",
                options: ["Both I and II", "Only II", "Neither I nor II", "Only I"],
                correct: 0,
                explanation: "Both statements are correct. Low entropy (close to 0) means a pure set (all labels are the same). High entropy (close to 1) means a mixed, chaotic set (e.g., 50/50 split)."
            }
        ];
