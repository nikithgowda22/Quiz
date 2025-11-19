  const algoCh1Data = [
            {
                "question": "According to the definition of an algorithm, which of the following characteristics is mandatory?",
                "options": [
                    "It must require infinite memory",
                    "It must terminate after a finite number of steps",
                    "It must have zero outputs",
                    "It must depend on the computer architecture"
                ],
                "correct": 1,
                "explanation": "An algorithm is defined as a sequence of finite steps to solve a problem. It must terminate after a finite time and produce one or more outputs."
            },
            {
                "question": "Which type of analysis defines the maximum number of steps or resources required to solve a problem?",
                "options": [
                    "Best case",
                    "Average case",
                    "Worst case",
                    "Amortized analysis"
                ],
                "correct": 2,
                "explanation": "The worst-case analysis calculates the upper bound on the running time for any input of size n, representing the maximum steps required."
            },
            {
                "question": "If f(n) = O(g(n)), which inequality must hold true for all n ≥ n0?",
                "options": [
                    "f(n) ≥ c . g(n)",
                    "f(n) ≤ c . g(n)",
                    "f(n) = c . g(n)",
                    "f(n) > c . g(n)"
                ],
                "correct": 1,
                "explanation": "Big-O notation (O) describes an asymptotic upper bound. The condition is f(n) ≤ c . g(n) for some positive constant c and n ≥ n0."
            },
            {
                "question": "Which asymptotic notation represents the tight bound where f(n) is bounded both from above and below by g(n)?",
                "options": [
                    "O (Big-Oh)",
                    "Ω (Big-Omega)",
                    "θ (Theta)",
                    "o (Little-oh)"
                ],
                "correct": 2,
                "explanation": "Theta notation (θ) indicates that a function f(n) is bounded both above and below by g(n) (multiplied by constants), meaning f(n) = θ(g(n))."
            },
            {
                "question": "The property 'If f(n) = O(g(n)) and g(n) = O(h(n)), then f(n) = O(h(n))' is known as:",
                "options": [
                    "Reflexivity",
                    "Symmetry",
                    "Transitivity",
                    "Transpose symmetry"
                ],
                "correct": 2,
                "explanation": "This is the Transitivity property, which applies to Big-O, Omega, Theta, and other asymptotic notations."
            },
            {
                "question": "What is the asymptotic relationship between f(n) = 3n + 2 and g(n) = n?",
                "options": [
                    "f(n) = O(g(n))",
                    "f(n) = o(g(n))",
                    "f(n) = Ω(n^2)",
                    "f(n) = ω(n)"
                ],
                "correct": 0,
                "explanation": "Since 3n + 2 ≤ 4n for n ≥ 2, f(n) grows linearly, making it O(n)."
            },
            {
                "question": "Which of the following functions grows the fastest asymptotically?",
                "options": [
                    "log(log n)",
                    "log n",
                    "n",
                    "2^n"
                ],
                "correct": 3,
                "explanation": "Exponential growth (2^n) is asymptotically much faster than polynomial (n) or logarithmic (log n) growth."
            },
            {
                "question": "In the Master's Theorem for T(n) = aT(n/b) + f(n), what are the constraints on constants a and b?",
                "options": [
                    "a ≥ 1, b ≥ 1",
                    "a ≥ 1, b > 1",
                    "a > 0, b > 0",
                    "a < 1, b > 1"
                ],
                "correct": 1,
                "explanation": "The Master's Theorem requires that a ≥ 1 (we must have at least one subproblem) and b > 1 (the problem size must decrease)."
            },
            {
                "question": "Solve the recurrence T(n) = 9T(n/3) + n using Master's Theorem.",
                "options": [
                    "θ(n)",
                    "θ(n log n)",
                    "θ(n^2)",
                    "θ(n^3)"
                ],
                "correct": 2,
                "explanation": "Here a=9, b=3, f(n)=n. n^(log_b a) = n^(log_3 9) = n^2. Since f(n) = O(n^(2-ε)), Case 1 applies, and T(n) = θ(n^2)."
            },
            {
                "question": "Which method is best suited for solving a recurrence relation when the 'divide' step involves more than one recursive call size or unequal splits?",
                "options": [
                    "Master's Theorem",
                    "Recursive Tree Method",
                    "Substitution Method",
                    "Amortized Analysis"
                ],
                "correct": 1,
                "explanation": "The Recursion Tree method is particularly useful for visualizing the cost at each level of the tree, especially when the recurrence doesn't fit the Master Theorem perfectly."
            },
            {
                "question": "What is the time complexity of the following code snippet?\nfor(i=1; i<=n; i++) { j=2; while(j<=n) { j=j^2; printf(...); } }",
                "options": [
                    "O(n)",
                    "O(n log n)",
                    "O(n log log n)",
                    "O(log n)"
                ],
                "correct": 2,
                "explanation": "The outer loop runs n times. The inner loop variable j is squared each time (2, 4, 16...), which grows extremely fast. The number of steps is log(log n). Total = O(n log log n)."
            },
            {
                "question": "For T(n) = 2T(n/2) + n, what is the asymptotic complexity?",
                "options": [
                    "θ(n)",
                    "θ(n^2)",
                    "θ(n log n)",
                    "θ(log n)"
                ],
                "correct": 2,
                "explanation": "This fits Case 2 of the Master Theorem where f(n) = n and n^(log_b a) = n^1. Since they are equal, T(n) = θ(n log n)."
            },
            {
                "question": "What is the meaning of Little-oh notation, f(n) = o(g(n))?",
                "options": [
                    "f(n) grows at least as fast as g(n)",
                    "f(n) grows strictly slower than g(n)",
                    "f(n) grows at the same rate as g(n)",
                    "f(n) provides a lower bound for g(n)"
                ],
                "correct": 1,
                "explanation": "Little-oh (o) denotes a loose upper bound that is not asymptotically tight. It means f(n) becomes insignificant relative to g(n) as n approaches infinity (strictly slower)."
            },
            {
                "question": "Two functions f(n) and g(n) are considered equivalent if and only if:",
                "options": [
                    "f(n) = O(g(n))",
                    "f(n) = Ω(g(n))",
                    "f(n) = O(g(n)) AND f(n) = Ω(g(n))",
                    "f(n) = o(g(n))"
                ],
                "correct": 2,
                "explanation": "This is the definition of Theta (θ). If f is both an upper bound (O) and a lower bound (Ω) of g, then they grow at the same rate."
            },
            {
                "question": "Which of the following correctly orders the functions by growth rate: n, √n, log n, n/log n?",
                "options": [
                    "log n < √n < n/log n < n",
                    "n < n/log n < √n < log n",
                    "√n < log n < n < n/log n",
                    "log n < n/log n < √n < n"
                ],
                "correct": 0,
                "explanation": "Logarithmic growth is slowest. Root n grows faster than log n but slower than linear n. n/log n is slightly slower than n but faster than √n."
            },
            {
                "question": "In the Substitution Method for solving recurrences, what are the two main steps?",
                "options": [
                    "Draw a tree and sum the costs",
                    "Guess the form of the answer and use mathematical induction to prove it",
                    "Calculate a and b constants and apply a formula",
                    "Run the algorithm on a computer and measure time"
                ],
                "correct": 1,
                "explanation": "The substitution method relies on making an educated guess (hypothesis) about the bound and then verifying it using mathematical induction."
            },
            {
                "question": "What is the time complexity of the recurrence T(n) = T(n-1) + n?",
                "options": [
                    "O(n)",
                    "O(n log n)",
                    "O(n^2)",
                    "O(2^n)"
                ],
                "correct": 2,
                "explanation": "This recurrence expands to n + (n-1) + (n-2) + ... + 1, which is the sum of the first n integers. This equals n(n+1)/2, which is O(n^2)."
            },
            {
                "question": "If f(n) = 2^n and g(n) = 2^(n/2), what is the relationship?",
                "options": [
                    "f(n) = O(g(n))",
                    "f(n) = Ω(g(n))",
                    "f(n) = θ(g(n))",
                    "f(n) = o(g(n))"
                ],
                "correct": 1,
                "explanation": "2^n grows much faster than 2^(n/2) (which is essentially (√2)^n). Therefore f(n) is lower bounded by g(n), so f(n) = Ω(g(n)), and specifically ω(g(n))."
            },
            {
                "question": "Which case of the Master Theorem applies if f(n) is polynomially larger than n^(log_b a)?",
                "options": [
                    "Case 1",
                    "Case 2",
                    "Case 3",
                    "Master Theorem cannot be applied"
                ],
                "correct": 2,
                "explanation": "Case 3 applies when f(n) = Ω(n^(log_b a + ε)). We must also check the regularity condition af(n/b) ≤ c f(n)."
            },
            {
                "question": "Consider the loop: for(i=1; i<=n; i++) { for(j=1; j<=n; j+=i) { ... } }. What is the complexity?",
                "options": [
                    "O(n^2)",
                    "O(n log n)",
                    "O(n)",
                    "O(n√n)"
                ],
                "correct": 1,
                "explanation": "The inner loop runs n/i times. The total complexity is the sum of n/1 + n/2 + ... + n/n. This factors out to n * (1 + 1/2 + ... + 1/n), which is the harmonic series. n * log n = O(n log n)."
            }, {
                "question": "According to the text, an algorithm must produce how many outputs?",
                "options": ["Zero or more", "One or more", "Exactly one", "Depends on the input"],
                "correct": 1,
                "explanation": "The text states an algorithm must produce 'one or more outputs' by taking 'zero or more inputs'."
            },
            {
                "question": "Which analysis determines the minimum number of steps required to solve a problem?",
                "options": ["Worst Case", "Best Case", "Average Case", "Amortized Analysis"],
                "correct": 1,
                "explanation": "Best case analysis calculates the minimum number of steps or resources required."
            },
            {
                "question": "Amortized analysis is defined as:",
                "options": ["The average time of a single worst-case operation", "A sequence of operations applied on the input of size n averaged over time", "The running time of the best-case input", "Probabilistic analysis of random inputs"],
                "correct": 1,
                "explanation": "The text defines Amortized analysis as 'A sequence of operations applied on the input of size n averaged over time'."
            },
            {
                "question": "For f(n) = Ω(g(n)), which condition must be true?",
                "options": ["f(n) ≤ c . g(n)", "f(n) ≥ c . g(n)", "f(n) = g(n)", "f(n) < c . g(n)"],
                "correct": 1,
                "explanation": "Ω (Big-Omega) provides an asymptotic lower bound, meaning f(n) ≥ c . g(n) for n ≥ n0."
            },
            {
                "question": "Which notation is used to describe the asymptotic tight bound?",
                "options": ["O (Big-Oh)", "o (Little-oh)", "θ (Theta)", "ω (Little-omega)"],
                "correct": 2,
                "explanation": "Theta (θ) notation represents a tight bound where the function is bounded both from above and below."
            },
            {
                "question": "The Transpose Symmetry property states that f(n) = O(g(n)) if and only if:",
                "options": ["g(n) = O(f(n))", "g(n) = Ω(f(n))", "f(n) = θ(g(n))", "g(n) = o(f(n))"],
                "correct": 1,
                "explanation": "Transpose symmetry connects Big-O and Big-Omega: f(n) = O(g(n)) iff g(n) = Ω(f(n))."
            },
            {
                "question": "Which of the following is NOT a reflexive relation?",
                "options": ["f(n) = θ(f(n))", "f(n) = O(f(n))", "f(n) = Ω(f(n))", "f(n) = o(f(n))"],
                "correct": 3,
                "explanation": "Little-oh (o) is a strict inequality (f(n) < c g(n)), so a function cannot be little-oh of itself. It is not reflexive."
            },
            {
                "question": "What is the value of log*(16)?",
                "options": ["2", "3", "4", "5"],
                "correct": 1,
                "explanation": "According to the text: log*2=1, log*4=2, log*16=3."
            },
            {
                "question": "If f(n) = 3n^2 + 10n, what is the Theta notation?",
                "options": ["θ(n)", "θ(n^2)", "θ(n^3)", "θ(1)"],
                "correct": 1,
                "explanation": "In asymptotic analysis, we drop lower-order terms and constants. The dominant term is n^2."
            },
            {
                "question": "Which notation implies f(n) < c . g(n) for all c > 0 and n ≥ n0?",
                "options": ["O(g(n))", "Ω(g(n))", "o(g(n))", "ω(g(n))"],
                "correct": 2,
                "explanation": "This is the definition of Little-oh (o), representing a strict upper bound."
            },
            {
                "question": "The Master Theorem solution for T(n) = aT(n/b) + f(n) when f(n) = θ(n^(log_b a)) is:",
                "options": ["θ(n^(log_b a))", "θ(n^(log_b a) log n)", "θ(f(n))", "θ(n^2)"],
                "correct": 1,
                "explanation": "This is Case 2 of the Master Theorem. If f(n) matches the critical exponent, we multiply by log n."
            },
            {
                "question": "What is the asymptotic complexity of T(n) = T(n-1) + 1?",
                "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
                "correct": 2,
                "explanation": "This recurrence decreases n by 1 in each step and does constant work. It runs n times. T(n) = O(n)."
            },
            {
                "question": "In the recurrence T(n) = 3T(n/4) + cn^2, what applies?",
                "options": ["Case 1 of Master Theorem", "Case 2 of Master Theorem", "Case 3 of Master Theorem", "Master Theorem cannot be applied"],
                "correct": 2,
                "explanation": "a=3, b=4. n^(log_4 3) is roughly n^0.79. f(n) = n^2. f(n) is polynomially larger than n^0.79. Case 3 applies."
            },
            {
                "question": "For the recurrence T(n) = 2T(n/2) + n log n, can Master Theorem be used?",
                "options": ["Yes, Case 2", "Yes, Case 3", "No, it falls into a gap", "Yes, Case 1"],
                "correct": 2,
                "explanation": "The text explicitly uses T(n) = 2T(n/2) + n log n as an example where f(n) is not polynomially larger/smaller (gap case), so Master Theorem fails."
            },
            {
                "question": "Stirling's approximation states that log(n!) is equivalent to:",
                "options": ["θ(n)", "θ(n^2)", "θ(n log n)", "θ(log n)"],
                "correct": 2,
                "explanation": "The text notes: log(n!) = θ(n log n) by Stirling's approximation."
            },
            {
                "question": "What is the 'golden ratio' φ approximately equal to?",
                "options": ["1.414", "1.618", "2.718", "3.141"],
                "correct": 1,
                "explanation": "The text gives φ = (1 + √5) / 2 ≈ 1.618."
            },
            {
                "question": "In the recurrence T(n) = T(n/3) + T(2n/3) + n, which method is best to visualize the cost?",
                "options": ["Master Theorem", "Recursive Tree Method", "Iteration Method", "Guessing"],
                "correct": 1,
                "explanation": "Since the subproblems are of unequal sizes (n/3 and 2n/3), Master Theorem does not directly apply. The Recursive Tree method is standard here."
            },
            {
                "question": "If f(n) = 2^n and g(n) = n!, which grows faster?",
                "options": ["f(n)", "g(n)", "They grow equally", "Cannot be determined"],
                "correct": 1,
                "explanation": "Factorial growth (n!) is asymptotically faster than exponential growth (2^n) for large n."
            },
            {
                "question": "What is the complexity of: for(i=1; i<n; i=i*2) { printf(\"Hi\"); }",
                "options": ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
                "correct": 2,
                "explanation": "The loop variable 'i' doubles each time (1, 2, 4, 8...). The number of steps is logarithmic, O(log n)."
            },
            {
                "question": "Which property is defined as: If f(n) = θ(g(n)) then g(n) = θ(f(n))?",
                "options": ["Transitivity", "Symmetry", "Reflexivity", "Transpose Symmetry"],
                "correct": 1,
                "explanation": "This is the Symmetry property of Theta notation."
            },
            {
                "question": "Case 1 of Master Theorem applies if f(n) is:",
                "options": ["Polynomially smaller than n^(log_b a)", "Polynomially larger than n^(log_b a)", "Equal to n^(log_b a)", "Constant"],
                "correct": 0,
                "explanation": "Case 1 applies when the cost of leaves (n^(log_b a)) dominates the cost of the root f(n), i.e., f(n) = O(n^(log_b a - ε))."
            },
            {
                "question": "Calculate T(n) for T(n) = 9T(n/3) + 1.",
                "options": ["θ(n)", "θ(n^2)", "θ(log n)", "θ(n log n)"],
                "correct": 1,
                "explanation": "a=9, b=3, f(n)=1. n^(log_3 9) = n^2. f(n) is smaller than n^2. Case 1 applies. T(n) = θ(n^2)."
            },
            {
                "question": "The definition f(n) = ω(g(n)) implies:",
                "options": ["0 ≤ c g(n) < f(n)", "0 ≤ f(n) ≤ c g(n)", "f(n) = g(n)", "f(n) is a constant"],
                "correct": 0,
                "explanation": "Little-omega (ω) denotes a strict lower bound, meaning f(n) > c g(n) for any constant c."
            },
            {
                "question": "What is the worst-case complexity of finding the median of medians of n unsorted arrays?",
                "options": ["O(n)", "O(n log n)", "O(n^2)", "O(n^2 log n)"],
                "correct": 2,
                "explanation": "Based on the 'Previous Years Question' section in the text, the answer is O(n^2) for that specific problem setup."
            },
            {
                "question": "Which function grows slower: log(n) or √n?",
                "options": ["log(n)", "√n", "They are equal", "Depends on n"],
                "correct": 0,
                "explanation": "Logarithmic functions grow slower than any polynomial (including fractional powers like √n)."
            },
            {
                "question": "If T(n) = 2T(n/2) + c, what is the solution?",
                "options": ["O(n)", "O(log n)", "O(n log n)", "O(n^2)"],
                "correct": 0,
                "explanation": "Using Master Theorem: a=2, b=2, f(n)=c (constant). n^(log_2 2) = n^1 = n. f(n) is smaller. Case 1. T(n) = θ(n)."
            },
            {
                "question": "In the 'Regularity Condition' a f(n/b) ≤ c f(n) for Case 3 of Master Theorem, c must be:",
                "options": ["c > 1", "c < 1", "c = 1", "c = 0"],
                "correct": 1,
                "explanation": "The constant c must be strictly less than 1 for the condition to hold."
            },
            {
                "question": "Which of these recurrence relations can be solved to O(log n)?",
                "options": ["T(n) = T(n/2) + 1", "T(n) = 2T(n/2) + n", "T(n) = T(n-1) + 1", "T(n) = 2T(n-1) + 1"],
                "correct": 0,
                "explanation": "T(n) = T(n/2) + 1 is the recurrence for Binary Search, which is O(log n)."
            },
            {
                "question": "What is the value of log* 65536?",
                "options": ["3", "4", "5", "16"],
                "correct": 1,
                "explanation": "Text states: log* 16 = 3, log* 65536 = 4 (since 2^16 = 65536)."
            },
            {
                "question": "Given f1 = 10^n, f2 = n log n, f3 = n. Arrange in increasing order of growth.",
                "options": ["f3, f2, f1", "f2, f3, f1", "f1, f2, f3", "f3, f1, f2"],
                "correct": 0,
                "explanation": "n (linear) < n log n (linearithmic) < 10^n (exponential). So f3 < f2 < f1."
            },
            {
                "question": "Consider the function: void fun(n) { if(n>1) fun(n-1); }. What is the complexity?",
                "options": ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
                "correct": 1,
                "explanation": "This function calls itself recursively n times (n, n-1, ... 1). The complexity is O(n)."
            },
            {
                "question": "Which of the following is true about Fibonacci numbers F_i?",
                "options": ["They grow linearly", "They grow logarithmically", "They grow exponentially related to φ^n", "They are constant"],
                "correct": 2,
                "explanation": "Fibonacci numbers are related to the golden ratio φ by the formula involving φ^i, indicating exponential growth."
            },
            {
                "question": "If f(n) = 2^n and g(n) = 2^(n/2), which notation correctly relates them?",
                "options": ["f(n) = O(g(n))", "f(n) = ω(g(n))", "f(n) = θ(g(n))", "f(n) = o(g(n))"],
                "correct": 1,
                "explanation": "2^n grows strictly faster than 2^(n/2). Thus f(n) is a lower bound strictly greater than g(n), so ω (Little-omega)."
            },
            {
                "question": "The recurrence T(n) = 4T(n/2) + n^2 fits which case of Master Theorem?",
                "options": ["Case 1", "Case 2", "Case 3", "None"],
                "correct": 1,
                "explanation": "a=4, b=2. n^(log_2 4) = n^2. f(n) = n^2. Since f(n) is exactly n^(log_b a), this is Case 2. T(n) = θ(n^2 log n)."
            },
            {
                "question": "Using the Substitution Method, we typically verify our guess using:",
                "options": ["Mathematical Induction", "Integration", "Differentiation", "Matrix Multiplication"],
                "correct": 0,
                "explanation": "The substitution method involves guessing a bound and proving it correct using Mathematical Induction."
            },
            {
                "question": "What is the complexity of setting twin pointers in an adjacency list for a graph with m edges and n vertices?",
                "options": ["O(m+n)", "O(n^2)", "O(m^2)", "O(n)"],
                "correct": 0,
                "explanation": "From the 'Previous Years Question' section: The answer provided is Θ(n + m)."
            },
            {
                "question": "Logarithm of a function n! (log(n!)) is dominated by:",
                "options": ["n", "n^2", "n log n", "log n"],
                "correct": 2,
                "explanation": "log(n!) is asymptotically θ(n log n)."
            },
            {
                "question": "Which notation is primarily used to compare the relative performance of alternative algorithms?",
                "options": ["Asymptotic Notation", "Calculus", "Probability", "Geometry"],
                "correct": 0,
                "explanation": "Asymptotic notation is the standard tool for comparing algorithm efficiency (running time growth)."
            },
            {
                "question": "In the recurrence T(n) = 7T(n/2) + n^2, what is the complexity?",
                "options": ["θ(n^2)", "θ(n^3)", "θ(n^log_2 7)", "θ(n log n)"],
                "correct": 2,
                "explanation": "a=7, b=2. n^(log_2 7) ≈ n^2.8. f(n)=n^2. f(n) is smaller. Case 1 applies. T(n) = θ(n^log_2 7)."
            },
            {
                "question": "If T(n) = 2T(n/4) + √n, what is the solution?",
                "options": ["θ(√n)", "θ(√n log n)", "θ(n)", "θ(log n)"],
                "correct": 1,
                "explanation": "a=2, b=4. log_4 2 = 0.5. Critical exponent is n^0.5 (√n). f(n) = √n. This matches Case 2. T(n) = θ(√n log n)."
            }, {
                "question": "In the C function provided in 'Rack Your Brain' where the inner loop updates `j = j^2`, how many times does the inner loop execute for a given n?",
                "options": ["log n", "log(log n)", "n", "sqrt(n)"],
                "correct": 1,
                "explanation": "The variable j is squared in each iteration (2, 4, 16, 256...). This grows very fast. The number of iterations k satisfies 2^(2^k) = n, so k = log(log n)."
            },
            {
                "question": "If f(n) = 2^n and g(n) = 2^(n/2), why is f(n) NOT O(g(n))?",
                "options": ["Because 2^n grows much faster than 2^(n/2)", "Because they are equal", "Because g(n) is negative", "Because limits do not apply"],
                "correct": 0,
                "explanation": "2^n / 2^(n/2) = 2^(n/2), which tends to infinity as n grows. Thus f(n) grows strictly faster, so it is not O(g(n))."
            },
            {
                "question": "Which comparison of functions is correct regarding n! and n^n?",
                "options": ["n! = O(n^n)", "n! = Ω(n^n)", "n! = θ(n^n)", "n^n = o(n!)"],
                "correct": 0,
                "explanation": "n^n (n multiplied n times) is clearly larger than n! (1*2*...*n). Therefore n! grows slower than n^n, so n! = O(n^n)."
            },
            {
                "question": "In the 'Previous Years Question' regarding the C function with loops `for (i=1; i<=n; i++)` and `for (j=1; j<n; j+=i)`, the complexity is:",
                "options": ["θ(n)", "θ(n^2)", "θ(n log n)", "θ(n^2 log n)"],
                "correct": 2,
                "explanation": "The inner loop runs n/i times. The total steps are n(1 + 1/2 + 1/3 + ... + 1/n), which is the harmonic series summing to θ(n log n)."
            },
            {
                "question": "What is the result of the limit of f(n)/g(n) if f(n) = o(g(n)) (Little-oh)?",
                "options": ["0", "Infinity", "Constant c > 0", "Undefined"],
                "correct": 0,
                "explanation": "For little-oh o(g(n)), f(n) becomes insignificant compared to g(n), so the limit of the ratio as n approaches infinity is 0."
            },
            {
                "question": "The text mentions that efficiency depends on input size, computer architecture, and what else?",
                "options": ["Kind of storage (disk, memory, tapes)", "Programming language used", "Developer skill", "Electricity cost"],
                "correct": 0,
                "explanation": "The Introduction section explicitly lists: input size, architecture of the computer, and the kind of storage (disks, main memory, tapes)."
            },
            {
                "question": "For the recurrence T(n) = 8T(n/2) + n^2, what is the complexity?",
                "options": ["θ(n^2)", "θ(n^3)", "θ(n log n)", "θ(n^2 log n)"],
                "correct": 1,
                "explanation": "Using Master Theorem: a=8, b=2. n^(log_2 8) = n^3. f(n) = n^2. Since f(n) is polynomially smaller (O(n^(3-ε))), Case 1 applies. T(n) = θ(n^3)."
            },
            {
                "question": "Which of the following functions is asymptotically the smallest?",
                "options": ["n", "log n", "log(log n)", "1"],
                "correct": 3,
                "explanation": "A constant function (1) has the slowest growth rate (zero growth), followed by log(log n), log n, and then n."
            },
            {
                "question": "In the Master Theorem gap analysis, if f(n) is smaller than n^(log_b a) but NOT polynomially smaller, what happens?",
                "options": ["Use Case 1", "Use Case 2", "Master Theorem cannot be used", "Use Case 3"],
                "correct": 2,
                "explanation": "The text states: 'If the function f(n) falls into one of these gaps, you cannot use the master method'."
            },
            {
                "question": "The recurrence T(n) = T(2n/3) + T(n/3) + θ(n) represents an algorithm where:",
                "options": ["The problem is divided into two equal halves", "The problem is divided into unequal parts (1/3 and 2/3)", "The problem size increases", "The problem is reduced by a constant 3"],
                "correct": 1,
                "explanation": "The arguments 2n/3 and n/3 indicate the problem is split into two subproblems of unequal sizes (33% and 66%)."
            },
            {
                "question": "Regarding the Fibonacci sequence F_i, F_i = F_(i-1) + F_(i-2) with F_0=0 and F_1=1. What governs its growth?",
                "options": ["Polynomials", "Golden Ratio φ", "Logarithms", "Square roots"],
                "correct": 1,
                "explanation": "The text highlights that Fibonacci numbers are co-related to the golden ratio φ and its conjugate."
            },
            {
                "question": "Which property states: If f(n) = θ(g(n)) and g(n) = θ(h(n)) then f(n) = θ(h(n))?",
                "options": ["Transitivity", "Reflexivity", "Symmetry", "Associativity"],
                "correct": 0,
                "explanation": "Transitivity applies to all asymptotic notations (θ, O, Ω, etc.)."
            },
            {
                "question": "In the adjacency list problem (Previous Year Question), 'twins' refer to:",
                "options": ["Duplicate edges", "Two pointers representing the same edge (u,v) in u's list and v's list", "Parallel edges", "Self loops"],
                "correct": 1,
                "explanation": "The question defines twins as the entry [v] in u's list and [u] in v's list for an undirected edge (u, v)."
            },
            {
                "question": "Which case of the Master Theorem involves the regularity condition af(n/b) ≤ c f(n)?",
                "options": ["Case 1", "Case 2", "Case 3", "None"],
                "correct": 2,
                "explanation": "Case 3 (where f(n) is polynomially larger) requires the 'regularity condition' to ensure the work at the root dominates."
            },
            {
                "question": "Solve T(n) = 2T(n/4) + 1 using Master Theorem.",
                "options": ["θ(n)", "θ(log n)", "θ(√n)", "θ(n^2)"],
                "correct": 2,
                "explanation": "a=2, b=4, f(n)=1. n^(log_4 2) = n^0.5 = √n. Since f(n)=1 is smaller than √n, Case 1 applies. T(n) = θ(√n)."
            },
            {
                "question": "What is the relationship between f(n) = n and g(n) = n sin n?",
                "options": ["O(n)", "Ω(n)", "θ(n)", "No asymptotic relationship"],
                "correct": 3,
                "explanation": "The table in the text indicates 'No' for O, o, Ω, ω, θ for comparing n and n sin n because sin n oscillates, preventing a consistent bound."
            },
            {
                "question": "When using the variable change method for recurrence T(n) = 2T(√n) + log n, we substitute m = ?",
                "options": ["n", "log n", "n^2", "2^n"],
                "correct": 1,
                "explanation": "Substituting m = log n transforms terms like T(√n) (which is T(n^0.5)) into T(m/2), simplifying the recurrence."
            },
            {
                "question": "For the recurrence T(n) = n T(√n) + 100n, the complexity is expressed in θ notation as:",
                "options": ["θ(n log log n)", "θ(n log n)", "θ(n)", "θ(n^2)"],
                "correct": 0,
                "explanation": "The factor 'n' multiplies the recursive term. This structure often results in complexity O(n log log n) when solved via expansion or trees."
            },
            {
                "question": "Which notation corresponds to: f(n) ≥ c2 . g(n) for all n ≥ n0?",
                "options": ["O", "Ω", "θ", "o"],
                "correct": 1,
                "explanation": "The inequality ≥ corresponds to the lower bound, which is Big-Omega (Ω)."
            },
            {
                "question": "Comparing 4^(log n) and n^2:",
                "options": ["4^(log n) > n^2", "4^(log n) < n^2", "4^(log n) = n^2", "Cannot compare"],
                "correct": 2,
                "explanation": "Using log rules: a^(log b) = b^(log a). So 4^(log_2 n) = n^(log_2 4) = n^2. They are equal."
            },
            {
                "question": "If an algorithm has Best Case complexity, it represents:",
                "options": ["The maximum resources used", "The average resources used", "The minimum resources used", "The theoretical limit"],
                "correct": 2,
                "explanation": "Best case is defined as the minimum number of steps or resources required."
            },
            {
                "question": "The recurrence T(n) = T(n-1) + n results in:",
                "options": ["Linear time", "Quadratic time", "Logarithmic time", "Exponential time"],
                "correct": 1,
                "explanation": "As calculated previously, this sums to n(n+1)/2, which is quadratic θ(n^2)."
            },
            {
                "question": "Which is asymptotically larger: n^1.001 or n log n?",
                "options": ["n^1.001", "n log n", "Equal", "Undefined"],
                "correct": 0,
                "explanation": "Any polynomial n^k (where k > 1) grows faster than n log n. Here k=1.001, so n^1.001 is larger."
            },
            {
                "question": "In the text example 1, comparing 2^n and n^2 by applying logs gives:",
                "options": ["n log 2 vs 2 log n", "log n vs n", "n vs n", "1 vs 1"],
                "correct": 0,
                "explanation": "Applying log to 2^n gives n log 2. Applying log to n^2 gives 2 log n. Since n dominates log n, 2^n grows faster."
            },
            {
                "question": "What is the value of 3^(log_4 n) in terms of n?",
                "options": ["n^(log_4 3)", "n^3", "n^0.793", "n"],
                "correct": 0,
                "explanation": "By log property a^(log_b n) = n^(log_b a). So 3^(log_4 n) = n^(log_4 3) ≈ n^0.793."
            },
            {
                "question": "For T(n) = 3T(n/4) + n log n, which Master Theorem case applies?",
                "options": ["Case 1", "Case 2", "Case 3", "None"],
                "correct": 2,
                "explanation": "a=3, b=4. n^(log_4 3) ≈ n^0.79. f(n) = n log n (which is > n^1). f(n) is polynomially larger. Case 3 applies."
            },
            {
                "question": "Which of the following functions from the 'Previous Years Question' is the fastest growing?",
                "options": ["100", "log n", "n", "10^n"],
                "correct": 3,
                "explanation": "Exponential functions (10^n) grow faster than polynomial (n), logarithmic (log n), or constant (100) functions."
            },
            {
                "question": "In the recurrence T(n) = 2T(n/2) + n, the cost at depth 'i' of the recursion tree is:",
                "options": ["n", "cn", "n^2", "log n"],
                "correct": 1,
                "explanation": "At each level of the merge sort recurrence (which this is), the total work across all nodes sums to cn."
            },
            {
                "question": "An algorithm with complexity O(1) is called:",
                "options": ["Linear", "Constant", "Exponential", "Logarithmic"],
                "correct": 1,
                "explanation": "O(1) signifies constant time complexity, independent of input size."
            },
            {
                "question": "The text defines 'Analysis of Algorithm' as determining:",
                "options": ["How to write code", "How much time and space it will occupy", "Which computer to buy", "How to compile errors"],
                "correct": 1,
                "explanation": "It is defined as: 'While running a program, how much time it will take and how much space it will occupy'."
            },
            {
                "question": "If f(n) = n! and g(n) = n^n, applying logs suggests:",
                "options": ["log(n!) < log(n^n)", "log(n!) > log(n^n)", "log(n!) = log(n^n)", "Incomparable"],
                "correct": 0,
                "explanation": "log(n!) ≈ n log n. log(n^n) = n log n. While they look similar, n^n is strictly larger, so n! is O(n^n) but strictly smaller."
            },
            {
                "question": "Which statement is true about Asymptotic Notation?",
                "options": ["It gives exact running time in seconds", "It compares functions for large input sizes", "It is only for small inputs", "It requires a specific computer"],
                "correct": 1,
                "explanation": "Asymptotic notation describes behavior as input size n tends to infinity (large inputs)."
            },
            {
                "question": "The recurrence T(n) = T(n/2) + T(n/4) + T(n/8) + n implies:",
                "options": ["T(n) = O(n)", "T(n) = O(n^2)", "T(n) = O(log n)", "T(n) = O(1)"],
                "correct": 0,
                "explanation": "The sum of fractions (1/2 + 1/4 + 1/8) = 7/8 < 1. Since the work reduces by a factor < 1 at each level, the root work dominates. T(n) = O(n)."
            },
            {
                "question": "In the table comparing A and B, if A = n^k and B = c^n, what is the relation?",
                "options": ["A = O(B)", "A = Ω(B)", "A = θ(B)", "A = ω(B)"],
                "correct": 0,
                "explanation": "Polynomials (n^k) are always O(exponential) (c^n) for c > 1."
            },
            {
                "question": "Using the recursion tree for T(n) = 3T(n/4) + cn^2, the series formed is:",
                "options": ["Arithmetic", "Geometric", "Harmonic", "Constant"],
                "correct": 1,
                "explanation": "The costs at each level form a decreasing geometric series (since the work decreases at each level)."
            },
            {
                "question": "The notation f(n) = ω(g(n)) is pronounced as:",
                "options": ["Big-omega", "Little-omega", "Big-oh", "Theta"],
                "correct": 1,
                "explanation": "The symbol ω is lowercase omega, pronounced 'Little-omega'."
            },
            {
                "question": "If T(n) = 2T(n/2) + n/log n, can we use Master Theorem Case 2?",
                "options": ["Yes", "No", "Only if n is large", "Only if n is even"],
                "correct": 1,
                "explanation": "No. Case 2 requires f(n) to be θ(n^(log_b a) * log^k n). Here f(n) involves dividing by log n (log^-1 n), which is often treated as a gap or extended case."
            },
            {
                "question": "Which complexity class contains algorithms that are typically considered 'efficient' or 'feasible'?",
                "options": ["Polynomial time (P)", "Exponential time", "Factorial time", "Infinite time"],
                "correct": 0,
                "explanation": "Polynomial time algorithms (O(n), O(n^2), etc.) are generally considered feasible compared to exponential."
            },
            {
                "question": "The recurrence relation for Merge Sort is:",
                "options": ["T(n) = 2T(n/2) + 1", "T(n) = 2T(n/2) + n", "T(n) = T(n-1) + 1", "T(n) = T(n/2) + n"],
                "correct": 1,
                "explanation": "Merge Sort splits into 2 halves (2T(n/2)) and merges them in linear time (+ n)."
            },
            {
                "question": "In the graph problem regarding adjacency lists, if memory is not a constraint, what algorithm sets the twin pointers?",
                "options": ["DFS", "BFS", "Scanning all lists", "Dynamic Programming"],
                "correct": 2,
                "explanation": "To set twin pointers, one must scan the adjacency lists. The complexity is proportional to the size of the graph representation (n+m)."
            }
        ];
