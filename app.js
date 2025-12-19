window.questions = [
    // Lecture 1–5: Sets, Numbers, Lines, Circles, Inequalities
    {
        id: 1,
        question: "Which of the following is a natural number?",
        options: ["–3", "0", "2.5", "7"],
        correctAnswer: "7",
        explanation: "Natural numbers are positive integers starting from 1."
    },
    {
        id: 2,
        question: "The set of integers is a subset of:",
        options: ["Natural numbers", "Rational numbers", "Irrational numbers", "Complex numbers"],
        correctAnswer: "Rational numbers",
        explanation: "Integers can be written as fractions (e.g., 5 = 5/1)."
    },
    {
        id: 3,
        question: "Which is an irrational number?",
        options: ["4/5", "√9", "√2", "0.333…"],
        correctAnswer: "√2",
        explanation: "Cannot be expressed as ratio of integers."
    },
    {
        id: 4,
        question: "The inequality \\(a < b < c\\) means:",
        options: ["\\(a > b\\) and \\(b > c\\)", "\\(a < b\\) and \\(b < c\\)", "\\(a = b = c\\)", "\\(a > b\\) and \\(b < c\\)"],
        correctAnswer: "\\(a < b\\) and \\(b < c\\)",
        explanation: "It’s read as 'b is between a and c'."
    },
    {
        id: 5,
        question: "The solution set of \\(x < 5\\) is:",
        options: ["\\([5, \\infty)\\)", "\\((-\\infty, 5]\\)", "\\((-\\infty, 5)\\)", "\\((5, \\infty)\\)"],
        correctAnswer: "\\((-\\infty, 5)\\)",
        explanation: "Open interval, does not include 5."
    },
    {
        id: 6,
        question: "The interval \\([a, b]\\) is called:",
        options: ["Open", "Half-open", "Closed", "Infinite"],
        correctAnswer: "Closed",
        explanation: "Includes both endpoints."
    },
    {
        id: 7,
        question: "The distance between points (1,2) and (4,6) is:",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        explanation: "Using distance formula: \\(\\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = 5\\)."
    },
    {
        id: 8,
        question: "The midpoint of (3, 4) and (7, 2) is:",
        options: ["(5, 3)", "(10, 6)", "(5, -1)", "(4, 3)"],
        correctAnswer: "(5, 3)",
        explanation: "Midpoint formula: \\(((3+7)/2, (4+2)/2) = (5, 3)\\)."
    },
    {
        id: 9,
        question: "Equation of circle with center (2, –3) and radius 4:",
        options: ["\\((x-2)^2 + (y+3)^2 = 16\\)", "\\((x+2)^2 + (y-3)^2 = 16\\)", "\\((x-2)^2 + (y+3)^2 = 4\\)", "\\((x-2)^2 + (y-3)^2 = 16\\)"],
        correctAnswer: "\\((x-2)^2 + (y+3)^2 = 16\\)",
        explanation: "Center (h,k) → (x-h)²+(y-k)²=r²."
    },
    {
        id: 10,
        question: "The graph of \\(y = x^2\\) is a:",
        options: ["Line", "Parabola opening upwards", "Parabola opening downwards", "Circle"],
        correctAnswer: "Parabola opening upwards",
        explanation: "Coefficient of x² positive."
    },
    // Lecture 6–8: Functions, Operations, Graphs
    {
        id: 11,
        question: "Which represents a function?",
        options: ["\\(y^2 = x\\)", "\\(y = \\pm \\sqrt{x}\\)", "\\(y = x^2\\)", "\\(x^2 + y^2 = 1\\)"],
        correctAnswer: "\\(y = x^2\\)",
        explanation: "Each x gives single y."
    },
    {
        id: 12,
        question: "The domain of \\(f(x) = \\sqrt{x-2}\\) is:",
        options: ["\\((-\\infty, 2]\\)", "\\([2, \\infty)\\)", "\\((-\\infty, \\infty)\\)", "\\((2, \\infty)\\)"],
        correctAnswer: "\\([2, \\infty)\\)",
        explanation: "Square root requires \\(x-2 \\ge 0\\)."
    },
    {
        id: 13,
        question: "\\((f+g)(x)\\) is defined as:",
        options: ["\\(f(x) \\cdot g(x)\\)", "\\(f(x) - g(x)\\)", "\\(f(x) + g(x)\\)", "\\(f(x)/g(x)\\)"],
        correctAnswer: "\\(f(x) + g(x)\\)",
        explanation: "Sum of functions."
    },
    {
        id: 14,
        question: "If \\(f(x) = x^2\\) and \\(g(x) = x+1\\), then \\((f \\circ g)(x) =\\)",
        options: ["\\(x^2 + 1\\)", "\\(x^2 + x + 1\\)", "\\((x+1)^2\\)", "\\(x^2 + 2x + 1\\)"],
        correctAnswer: "\\((x+1)^2\\)",
        explanation: "\\(f(g(x)) = (x+1)^2\\)."
    },
    {
        id: 15,
        question: "The graph of \\(y = f(x) + c\\) is obtained by shifting \\(f(x)\\):",
        options: ["Left by c units", "Right by c units", "Up by c units", "Down by c units"],
        correctAnswer: "Up by c units",
        explanation: "Adding to y-value shifts graph up."
    },
    {
        id: 16,
        question: "The vertical line test is used to:",
        options: ["Check if curve is symmetric", "Determine if graph represents a function", "Find x-intercepts", "Test for continuity"],
        correctAnswer: "Determine if graph represents a function",
        explanation: "A function has only one y for each x."
    },
    {
        id: 17,
        question: "If a graph fails the vertical line test, it means:",
        options: ["It’s a function", "It’s not a function", "It’s continuous", "It’s differentiable"],
        correctAnswer: "It’s not a function",
        explanation: "Vertical line crosses graph at more than one point."
    },
    {
        id: 18,
        question: "The graph of \\(y = |x|\\) is:",
        options: ["V-shaped", "U-shaped", "A straight line", "A circle"],
        correctAnswer: "V-shaped",
        explanation: "Absolute value function has sharp point at origin."
    },
    {
        id: 19,
        question: "Shifting \\(y = x^2\\) right by 2 gives:",
        options: ["\\(y = x^2 + 2\\)", "\\(y = (x-2)^2\\)", "\\(y = (x+2)^2\\)", "\\(y = x^2 - 2\\)"],
        correctAnswer: "\\(y = (x-2)^2\\)",
        explanation: "Right shift replaces x with x–2."
    },
    {
        id: 20,
        question: "The graph of \\(y = -f(x)\\) is a reflection of \\(y = f(x)\\) about:",
        options: ["y-axis", "x-axis", "Origin", "Line y = x"],
        correctAnswer: "x-axis",
        explanation: "Negating y-values flips over x-axis."
    },
    // Lecture 9–11: Limits Intuitive & Rigorous
    {
        id: 21,
        question: "\\(\\lim_{x \\to 2} (3x+1) =\\)",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7",
        explanation: "Direct substitution: 3(2)+1=7."
    },
    {
        id: 22,
        question: "\\(\\lim_{x \\to 0} \\frac{\\sin x}{x} =\\)",
        options: ["0", "1", "∞", "Does not exist"],
        correctAnswer: "1",
        explanation: "Standard trigonometric limit."
    },
    {
        id: 23,
        question: "If \\(\\lim_{x \\to c} f(x) = L\\), then:",
        options: ["\\(f(c) = L\\)", "\\(f(c)\\) must exist", "\\(f(c)\\) may not equal L", "\\(f(c)\\) is undefined"],
        correctAnswer: "\\(f(c)\\) may not equal L",
        explanation: "Limit depends on approach, not necessarily value at c."
    },
    {
        id: 24,
        question: "\\(\\lim_{x \\to 3} \\frac{x^2-9}{x-3} =\\)",
        options: ["0", "3", "6", "9"],
        correctAnswer: "6",
        explanation: "Factor: \\(\\frac{(x-3)(x+3)}{x-3} = x+3\\), then substitute x=3 → 6."
    },
    {
        id: 25,
        question: "The limit \\(\\lim_{x \\to 0} \\frac{1}{x}\\)",
        options: ["Is 0", "Is 1", "Is ∞", "Does not exist"],
        correctAnswer: "Does not exist",
        explanation: "Approaches +∞ from right, –∞ from left."
    },
    {
        id: 26,
        question: "A limit exists only if:",
        options: ["Left-hand limit = right-hand limit", "Function defined at point", "Function continuous", "Derivative exists"],
        correctAnswer: "Left-hand limit = right-hand limit",
        explanation: "Necessary for two-sided limit."
    },
    {
        id: 27,
        question: "\\(\\lim_{x \\to \\infty} \\frac{1}{x} =\\)",
        options: ["0", "1", "∞", "–∞"],
        correctAnswer: "0",
        explanation: "As x grows, 1/x tends to 0."
    },
    {
        id: 28,
        question: "Using ε-δ definition, \\(\\lim_{x \\to 2} (3x-5)=1\\) means:",
        options: ["For every ε>0…", "For every δ>0…", "|f(x)-L| < δ…", "None"], // Abbreviated for formatting, but meaning preserved in correct answer logic
        correctAnswer: "For every ε>0…", // We'll put full text in options
        options: [
            "For every ε>0, exists δ>0 such that if 0<|x-2|<δ then |(3x-5)-1|<ε",
            "For every δ>0, exists ε>0 such that if 0<|x-2|<δ then |(3x-5)-1|<ε",
            "|f(x)-L| < δ whenever |x-a| < ε",
            "None"
        ],
        explanation: "Correct ε-δ statement."
    },
    {
        id: 29,
        question: "If \\(f(x) = \\begin{cases} 1 & x>0 \\\\ -1 & x<0 \\end{cases}\\), then \\(\\lim_{x \\to 0} f(x)\\):",
        options: ["Is 0", "Is 1", "Is –1", "Does not exist"],
        correctAnswer: "Does not exist",
        explanation: "Left limit = –1, right limit = 1, not equal."
    },
    {
        id: 30,
        question: "\\(\\lim_{x \\to 0} \\sin(1/x)\\):",
        options: ["Is 0", "Is 1", "Oscillates, no limit", "Is ∞"],
        correctAnswer: "Oscillates, no limit",
        explanation: "Does not approach a single value."
    },
    // Lecture 12–13: Continuity & Trig Limits
    {
        id: 31,
        question: "A function is continuous at x = c if:",
        options: ["\\(f(c)\\) is defined", "\\(\\lim_{x \\to c} f(x)\\) exists", "\\(\\lim_{x \\to c} f(x) = f(c)\\)", "All of these"],
        correctAnswer: "All of these",
        explanation: "Definition of continuity."
    },
    {
        id: 32,
        question: "The function \\(f(x) = \\frac{x^2-4}{x-2}\\) is discontinuous at:",
        options: ["x=0", "x=2", "x=4", "Everywhere"],
        correctAnswer: "x=2",
        explanation: "Not defined at x=2."
    },
    {
        id: 33,
        question: "Polynomials are:",
        options: ["Discontinuous at some points", "Continuous everywhere", "Continuous only at integers", "Nowhere continuous"],
        correctAnswer: "Continuous everywhere",
        explanation: "Polynomials are smooth."
    },
    {
        id: 34,
        question: "If f and g are continuous, then f/g is continuous except where:",
        options: ["f(x)=0", "g(x)=0", "f(x)=g(x)", "Always continuous"],
        correctAnswer: "g(x)=0",
        explanation: "Division by zero breaks continuity."
    },
    {
        id: 35,
        question: "The Intermediate Value Theorem applies to:",
        options: ["Any function", "Continuous functions on closed interval", "Differentiable functions", "Linear functions only"],
        correctAnswer: "Continuous functions on closed interval",
        explanation: "IVT hypothesis."
    },
    {
        id: 36,
        question: "\\(\\lim_{x \\to 0} \\frac{1-\\cos x}{x} =\\)",
        options: ["0", "1", "∞", "Does not exist"],
        correctAnswer: "0",
        explanation: "Standard trigonometric limit."
    },
    {
        id: 37,
        question: "The Squeeze Theorem states:",
        options: [
            "If \\(g(x) \\le f(x) \\le h(x)\\) and limits of g and h equal L, then limit of f is L",
            "If f(x) ≤ g(x), then their limits maintain inequality",
            "If limit exists, function is bounded",
            "None"
        ],
        correctAnswer: "If \\(g(x) \\le f(x) \\le h(x)\\) and limits of g and h equal L, then limit of f is L",
        explanation: "Correct statement of Squeeze Theorem."
    },
    {
        id: 38,
        question: "f(x)=|x| is continuous at x=0 because:",
        options: ["Limit exists and equals f(0)", "f(0)=0", "Both a and b", "Not continuous"],
        correctAnswer: "Both a and b",
        explanation: "Meets continuity conditions."
    },
    {
        id: 39,
        question: "If f is continuous on [a,b] and f(a)·f(b)<0, then:",
        options: ["f has maximum in (a,b)", "f has a root in (a,b)", "f is constant", "f is differentiable"],
        correctAnswer: "f has a root in (a,b)",
        explanation: "IVT guarantees zero crossing."
    },
    {
        id: 40,
        question: "The function tan x is discontinuous where:",
        options: ["sin x=0", "cos x=0", "x=0", "Nowhere"],
        correctAnswer: "cos x=0",
        explanation: "tan x = sin x/cos x, undefined when cos x=0."
    },
    // Lecture 14–15: Tangents, Rates, Derivatives
    {
        id: 41,
        question: "The slope of tangent line to y=f(x) at x=a is:",
        options: ["\\(f(a)\\)", "\\(f'(a)\\)", "\\(\\frac{f(a)}{a}\\)", "\\(\\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}\\)"],
        correctAnswer: "\\(f'(a)\\)",
        explanation: "Derivative gives slope."
    },
    {
        id: 42,
        question: "Average velocity over [t1, t2] is:",
        options: ["\\(\\frac{f(t2)-f(t1)}{t2-t1}\\)", "\\(f'(t1)\\)", "\\(\\frac{f(t1)+f(t2)}{2}\\)", "\\(\\lim_{h \\to 0} \\frac{f(t1+h)-f(t1)}{h}\\)"],
        correctAnswer: "\\(\\frac{f(t2)-f(t1)}{t2-t1}\\)",
        explanation: "Slope of secant line."
    },
    {
        id: 43,
        question: "The derivative of f(x)=c (constant) is:",
        options: ["c", "0", "1", "x"],
        correctAnswer: "0",
        explanation: "Constant rate of change is zero."
    },
    {
        id: 44,
        question: "Using definition, derivative of f(x)=x² at x=1 is:",
        options: ["1", "2", "3", "0"],
        correctAnswer: "2",
        explanation: "\\(f'(x)=2x\\), so at x=1 → 2."
    },
    {
        id: 45,
        question: "If f(x) = √x, then f'(4) =",
        options: ["1/4", "1/2", "1/√4", "1/(2√4) = 1/4"],
        correctAnswer: "1/(2√4) = 1/4",
        explanation: "Derivative formula \\(1/(2\\sqrt{x})\\)."
    },
    {
        id: 46,
        question: "The derivative represents:",
        options: ["Slope of secant", "Slope of tangent", "Average rate of change", "Area under curve"],
        correctAnswer: "Slope of tangent",
        explanation: "Geometric interpretation."
    },
    {
        id: 47,
        question: "A function not differentiable at corner because:",
        options: ["Not continuous", "Left and right derivatives differ", "Vertical tangent", "Limit infinite"],
        correctAnswer: "Left and right derivatives differ",
        explanation: "Slope from left ≠ slope from right."
    },
    {
        id: 48,
        question: "If f is differentiable at x, then f is:",
        options: ["Continuous at x", "Discontinuous at x", "Constant", "Linear"],
        correctAnswer: "Continuous at x",
        explanation: "Differentiability implies continuity."
    },
    {
        id: 49,
        question: "Derivative of |x| at x=0:",
        options: ["0", "1", "–1", "Does not exist"],
        correctAnswer: "Does not exist",
        explanation: "Sharp corner."
    },
    {
        id: 50,
        question: "\\( \\frac{d}{dx} [f(x) \\cdot g(x)] = \\)",
        options: ["\\( f'(x) \\cdot g'(x) \\)", "\\( f(x) \\cdot g'(x) + g(x) \\cdot f'(x) \\)", "\\( f'(x)/g'(x) \\)", "\\( f(x) \\cdot g(x) \\)"],
        correctAnswer: "\\( f(x) \\cdot g'(x) + g(x) \\cdot f'(x) \\)",
        explanation: "Product rule."
    },
    // Lecture 16–18: Differentiation Rules, Chain Rule
    {
        id: 51,
        question: "Derivative of \\( x^n \\) for any integer n:",
        options: ["\\( nx^{n-1} \\)", "\\( x^{n-1} \\)", "\\( nx^n \\)", "\\( n x^{n+1} \\)"],
        correctAnswer: "\\( nx^{n-1} \\)",
        explanation: "Power rule."
    },
    {
        id: 52,
        question: "If \\( f(x) = 3x^4 \\), then \\( f'(x) = \\)",
        options: ["\\( 12x^3 \\)", "\\( 3x^3 \\)", "\\( 12x^4 \\)", "\\( 4x^3 \\)"],
        correctAnswer: "\\( 12x^3 \\)",
        explanation: "Multiply coefficient by power and reduce power by 1."
    },
    {
        id: 53,
        question: "Derivative of \\( \\frac{f(x)}{g(x)} \\) is:",
        options: ["\\( \\frac{f'(x)}{g'(x)} \\)", "\\( \\frac{g f' - f g'}{g^2} \\)", "\\( f' g + f g' \\)", "\\( f' g' \\)"],
        correctAnswer: "\\( \\frac{g f' - f g'}{g^2} \\)",
        explanation: "Quotient rule."
    },
    {
        id: 54,
        question: "\\( \\frac{d}{dx} [\\sin x] = \\)",
        options: ["\\( \\cos x \\)", "\\( -\\cos x \\)", "\\( \\sin x \\)", "\\( -\\sin x \\)"],
        correctAnswer: "\\( \\cos x \\)",
        explanation: "Standard derivative."
    },
    {
        id: 55,
        question: "\\( \\frac{d}{dx} [\\tan x] = \\)",
        options: ["\\( \\sec^2 x \\)", "\\( \\csc^2 x \\)", "\\( \\sec x \\tan x \\)", "\\( -\\csc^2 x \\)"],
        correctAnswer: "\\( \\sec^2 x \\)",
        explanation: "Derivative formula."
    },
    {
        id: 56,
        question: "\\( \\frac{d}{dx} [\\sec x] = \\)",
        options: ["\\( \\sec x \\tan x \\)", "\\( -\\csc x \\cot x \\)", "\\( \\sec^2 x \\)", "\\( \\csc^2 x \\)"],
        correctAnswer: "\\( \\sec x \\tan x \\)",
        explanation: "Standard derivative."
    },
    {
        id: 57,
        question: "Chain rule: \\( \\frac{d}{dx} [f(g(x))] = \\)",
        options: ["\\( f'(g(x)) \\)", "\\( f'(g(x)) \\cdot g'(x) \\)", "\\( f(g'(x)) \\)", "\\( f'(x) \\cdot g'(x) \\)"],
        correctAnswer: "\\( f'(g(x)) \\cdot g'(x) \\)",
        explanation: "Correct chain rule."
    },
    {
        id: 58,
        question: "Derivative of \\( \\sin(2x) \\) is:",
        options: ["\\( \\cos(2x) \\)", "\\( 2 \\cos(2x) \\)", "\\( \\cos(2) \\)", "\\( 2 \\sin x \\cos x \\)"],
        correctAnswer: "\\( 2 \\cos(2x) \\)",
        explanation: "Chain rule: derivative of sin(u) is cos(u)·du/dx, u=2x."
    },
    {
        id: 59,
        question: "If \\( y = (x^2+1)^{10} \\), \\( \\frac{dy}{dx} = \\)",
        options: ["\\( 10(x^2+1)^9 \\)", "\\( 20x(x^2+1)^9 \\)", "\\( 10x(x^2+1)^9 \\)", "\\( (x^2+1)^9 \\)"],
        correctAnswer: "\\( 20x(x^2+1)^9 \\)",
        explanation: "Chain rule: 10·(x²+1)^9 · 2x."
    },
    {
        id: 60,
        question: "\\( \\frac{d}{dx} [\\ln(x^2+1)] = \\)",
        options: ["\\( \\frac{1}{x^2+1} \\)", "\\( \\frac{2x}{x^2+1} \\)", "\\( \\frac{2}{x^2+1} \\)", "\\( \\frac{x}{x^2+1} \\)"],
        correctAnswer: "\\( \\frac{2x}{x^2+1} \\)",
        explanation: "Derivative of ln(u) = u'/u."
    },
    // Lecture 19: Implicit Differentiation
    {
        id: 61,
        question: "Implicit differentiation is used when:",
        options: ["y is explicitly expressed in terms of x", "y is not isolated", "Function is given as y = f(x)", "Only for polynomials"],
        correctAnswer: "y is not isolated",
        explanation: "Used for equations like F(x,y)=0."
    },
    {
        id: 62,
        question: "For \\( x^2 + y^2 = 25 \\), \\( \\frac{dy}{dx} = \\)",
        options: ["\\( -x/y \\)", "\\( x/y \\)", "\\( -y/x \\)", "\\( y/x \\)"],
        correctAnswer: "\\( -x/y \\)",
        explanation: "Differentiate: 2x + 2y y' = 0 → y' = –x/y."
    },
    {
        id: 63,
        question: "If \\( xy = 1 \\), then \\( \\frac{dy}{dx} = \\)",
        options: ["\\( -y/x \\)", "\\( -x/y \\)", "\\( -1/x^2 \\)", "Both a and c"],
        correctAnswer: "Both a and c",
        explanation: "From product rule: y + x y' = 0 → y' = –y/x = –1/x² since y=1/x."
    },
    {
        id: 64,
        question: "For \\( y^2 = x \\), derivative \\( \\frac{dy}{dx} = \\)",
        options: ["\\( 1/(2y) \\)", "\\( 2y \\)", "\\( 1/(2\\sqrt{x}) \\)", "Both a and c"],
        correctAnswer: "Both a and c",
        explanation: "Implicit: 2y y' = 1 → y' = 1/(2y) = 1/(2√x)."
    },
    {
        id: 65,
        question: "Second derivative from implicit: if \\( x^2 + y^2 = 25 \\), \\( \\frac{d^2y}{dx^2} = \\)",
        options: ["\\( -x/y \\)", "\\( -y/x \\)", "\\( -25/y^3 \\)", "\\( 25/y^3 \\)"],
        correctAnswer: "\\( -25/y^3 \\)",
        explanation: "After first derivative –x/y, differentiate again and use original equation."
    },
    {
        id: 66,
        question: "The derivative of \\( x^{3/2} \\) is:",
        options: ["\\( \\frac{3}{2} x^{1/2} \\)", "\\( \\frac{3}{2} x^{2} \\)", "\\( \\frac{2}{3} x^{1/2} \\)", "\\( x^{1/2} \\)"],
        correctAnswer: "\\( \\frac{3}{2} x^{1/2} \\)",
        explanation: "Power rule for rational exponent."
    },
    {
        id: 67,
        question: "If \\( y = x^r \\) for real r, derivative is:",
        options: ["\\( r x^{r-1} \\)", "\\( x^{r-1} \\)", "\\( r x^r \\)", "\\( \\ln r \\cdot x^r \\)"],
        correctAnswer: "\\( r x^{r-1} \\)",
        explanation: "General power rule."
    },
    {
        id: 68,
        question: "Derivative of \\( e^x \\) is:",
        options: ["\\( e^x \\)", "\\( x e^{x-1} \\)", "\\( \\ln x \\cdot e^x \\)", "0"],
        correctAnswer: "\\( e^x \\)",
        explanation: "Unique property."
    },
    {
        id: 69,
        question: "Derivative of \\( a^x \\) (a>0) is:",
        options: ["\\( a^x \\)", "\\( a^x \\ln a \\)", "\\( x a^{x-1} \\)", "\\( \\ln a \\)"],
        correctAnswer: "\\( a^x \\ln a \\)",
        explanation: "Using exponential differentiation."
    },
    {
        id: 70,
        question: "Derivative of \\( \\ln(x) \\) is:",
        options: ["\\( 1/x \\)", "\\( x \\)", "\\( \\ln x \\)", "\\( e^x \\)"],
        correctAnswer: "\\( 1/x \\)",
        explanation: "Standard derivative."
    },
    // Mixed Applications (Lectures 1–19)
    {
        id: 71,
        question: "The set of real numbers consists of:",
        options: ["Rational only", "Irrational only", "Both rational and irrational", "Integers only"],
        correctAnswer: "Both rational and irrational",
        explanation: "Real numbers = Rational ∪ Irrational."
    },
    {
        id: 72,
        question: "\\(|–5| =\\)",
        options: ["–5", "5", "0", "Undefined"],
        correctAnswer: "5",
        explanation: "Absolute value gives positive magnitude."
    },
    {
        id: 73,
        question: "The distance between x and 3 is less than 4:",
        options: ["\\(|x-3|<4\\)", "\\(|x+3|<4\\)", "\\(|x-4|<3\\)", "\\(|x|<7\\)"],
        correctAnswer: "\\(|x-3|<4\\)",
        explanation: "Distance interpretation of absolute value."
    },
    {
        id: 74,
        question: "The function \\( f(x) = 1/x \\) has:",
        options: ["x-intercept at 0", "y-intercept at 0", "No intercepts", "Both intercepts at 1"],
        correctAnswer: "No intercepts",
        explanation: "Never touches x or y axis (undefined at 0)."
    },
    {
        id: 75,
        question: "If lines are perpendicular, slopes m1 and m2 satisfy:",
        options: ["m1 = m2", "m1·m2 = –1", "m1 = 1/m2", "m1 + m2 = 0"],
        correctAnswer: "m1·m2 = –1",
        explanation: "Condition for perpendicular lines."
    },
    {
        id: 76,
        question: "Circle \\( x^2+y^2+4x-6y+9=0 \\) has center:",
        options: ["(2, –3)", "(–2, 3)", "(2, 3)", "(–2, –3)"],
        correctAnswer: "(–2, 3)",
        explanation: "Complete square: (x+2)²+(y–3)²=4."
    },
    {
        id: 77,
        question: "Vertex of parabola \\( y=ax^2+bx+c \\) is at x =",
        options: ["–b/(2a)", "b/(2a)", "–b/a", "c/a"],
        correctAnswer: "–b/(2a)",
        explanation: "Vertex formula."
    },
    {
        id: 78,
        question: "Which is not a function?",
        options: ["\\( y = \\sqrt{x} \\)", "\\( y = x^2 \\)", "\\( x = y^2 \\)", "\\( y = \\sin x \\)"],
        correctAnswer: "\\( x = y^2 \\)",
        explanation: "Fails vertical line test (two y for x>0)."
    },
    {
        id: 79,
        question: "Domain of \\( f(x) = \\frac{1}{\\sqrt{x-1}} \\) is:",
        options: ["\\( (1, \\infty) \\)", "\\( [1, \\infty) \\)", "\\( (0, \\infty) \\)", "\\( (-\\infty, 1) \\)"],
        correctAnswer: "\\( (1, \\infty) \\)",
        explanation: "Inside sqrt >0 → x>1, denominator not zero → x≠1."
    },
    {
        id: 80,
        question: "Range of \\( y = x^2 \\) is:",
        options: ["\\( [0, \\infty) \\)", "\\( (0, \\infty) \\)", "\\( (-\\infty, \\infty) \\)", "\\( (-\\infty, 0] \\)"],
        correctAnswer: "\\( [0, \\infty) \\)",
        explanation: "Squares are non-negative."
    },
    {
        id: 81,
        question: "\\( \\lim_{x \\to 2} \\frac{x-2}{x^2-4} = \\)",
        options: ["0", "1/4", "1/2", "∞"],
        correctAnswer: "1/4",
        explanation: "Factor: \\( \\frac{x-2}{(x-2)(x+2)} = \\frac{1}{x+2} \\), plug x=2 → 1/4."
    },
    {
        id: 82,
        question: "A function continuous everywhere except at x=1:",
        options: ["\\( f(x) = \\frac{x^2-1}{x-1} \\)", "\\( f(x) = x^2 \\)", "\\( f(x) = |x| \\)", "\\( f(x) = \\sin x \\)"],
        correctAnswer: "\\( f(x) = \\frac{x^2-1}{x-1} \\)",
        explanation: "Hole at x=1 (simplifies to x+1 but undefined at 1)."
    },
    {
        id: 83,
        question: "Intermediate Value Theorem guarantees for continuous f on [a,b]:",
        options: ["Maximum exists", "f takes every value between f(a) and f(b)", "Derivative exists", "f is constant"],
        correctAnswer: "f takes every value between f(a) and f(b)",
        explanation: "IVT statement."
    },
    {
        id: 84,
        question: "Slope of tangent to \\( y=x^3 \\) at x=1:",
        options: ["1", "3", "0", "–1"],
        correctAnswer: "3",
        explanation: "Derivative 3x², at x=1 gives 3."
    },
    {
        id: 85,
        question: "Instantaneous rate of change of area A of circle w.r.t radius r:",
        options: ["\\( 2\\pi r \\)", "\\( \\pi r^2 \\)", "\\( \\pi r \\)", "\\( \\frac{dA}{dr} = 2\\pi r \\)"],
        correctAnswer: "\\( \\frac{dA}{dr} = 2\\pi r \\)",
        explanation: "Derivative of A=πr²."
    },
    {
        id: 86,
        question: "Product rule: derivative of x·sin x:",
        options: ["\\( \\cos x \\)", "\\( \\sin x + x \\cos x \\)", "\\( x \\cos x \\)", "\\( \\sin x - x \\cos x \\)"],
        correctAnswer: "\\( \\sin x + x \\cos x \\)",
        explanation: "Product rule: (1)(sin x) + (x)(cos x)."
    },
    {
        id: 87,
        question: "Quotient rule: derivative of \\( \\frac{\\sin x}{x} \\):",
        options: ["\\( \\frac{\\cos x}{x} \\)", "\\( \\frac{x \\cos x - \\sin x}{x^2} \\)", "\\( \\frac{\\sin x - x \\cos x}{x^2} \\)", "\\( \\frac{\\cos x}{x^2} \\)"],
        correctAnswer: "\\( \\frac{x \\cos x - \\sin x}{x^2} \\)",
        explanation: "Correct quotient rule application."
    },
    {
        id: 88,
        question: "Chain rule for \\( \\cos(3x) \\):",
        options: ["\\( -\\sin(3x) \\)", "\\( -3 \\sin(3x) \\)", "\\( 3 \\sin(3x) \\)", "\\( \\sin(3x) \\)"],
        correctAnswer: "\\( -3 \\sin(3x) \\)",
        explanation: "Derivative of cos(u) is –sin(u)·du/dx, u=3x."
    },
    {
        id: 89,
        question: "Implicit diff for \\( e^{xy} = x+y \\), find y' at (0,1):",
        options: ["0", "1", "–1", "Does not exist"],
        correctAnswer: "0",
        explanation: "Differentiate: e^{xy}(y+xy') = 1+y', plug (0,1): 1(1+0)=1+y' → y'=0."
    },
    {
        id: 90,
        question: "Logarithmic differentiation useful for:",
        options: ["Simplifying products/quotients in powers", "Linear functions", "Constant functions", "Trigonometric identities"],
        correctAnswer: "Simplifying products/quotients in powers",
        explanation: "Taking ln simplifies exponents."
    },
    // Last 10 MCQs (Comprehensive)
    {
        id: 91,
        question: "Which is true about differentiability?",
        options: ["Differentiable ⇒ continuous", "Continuous ⇒ differentiable", "Not continuous ⇒ differentiable", "Discontinuous ⇒ differentiable"],
        correctAnswer: "Differentiable ⇒ continuous",
        explanation: "Theorem."
    },
    {
        id: 92,
        question: "f(x) = |x–3| is not differentiable at:",
        options: ["x=0", "x=3", "x=–3", "Everywhere"],
        correctAnswer: "x=3",
        explanation: "Sharp corner at x=3."
    },
    {
        id: 93,
        question: "If f'(x) > 0 on interval, then f is:",
        options: ["Increasing", "Decreasing", "Constant", "Concave up"],
        correctAnswer: "Increasing",
        explanation: "First derivative test."
    },
    {
        id: 94,
        question: "Second derivative f''(x) > 0 implies:",
        options: ["f increasing", "f concave up", "f concave down", "f decreasing"],
        correctAnswer: "f concave up",
        explanation: "Second derivative indicates concavity."
    },
    {
        id: 95,
        question: "Point where f'(x)=0 or undefined is:",
        options: ["Critical point", "Inflection point", "Maximum only", "Minimum only"],
        correctAnswer: "Critical point",
        explanation: "Definition."
    },
    {
        id: 96,
        question: "For f(x)=x³, at x=0:",
        options: ["Relative max", "Relative min", "Inflection point", "Discontinuous"],
        correctAnswer: "Inflection point",
        explanation: "f'(0)=0, f'' changes sign."
    },
    {
        id: 97,
        question: "Rational function \\( \\frac{p(x)}{q(x)} \\) discontinuous where:",
        options: ["p(x)=0", "q(x)=0", "p(x)=q(x)", "Nowhere"],
        correctAnswer: "q(x)=0",
        explanation: "Denominator zero."
    },
    {
        id: 98,
        question: "Horizontal asymptote of \\( y = \\frac{2x^2+3}{x^2+1} \\) as x→∞:",
        options: ["y=0", "y=2", "y=∞", "No asymptote"],
        correctAnswer: "y=2",
        explanation: "Degrees equal, ratio of leading coefficients = 2/1=2."
    },
    {
        id: 99,
        question: "Derivative of inverse function: if y=f⁻¹(x), then:",
        options: ["\\( \\frac{dy}{dx} = \\frac{1}{f'(y)} \\)", "\\( \\frac{dy}{dx} = f'(y) \\)", "\\( \\frac{dy}{dx} = f'(x) \\)", "\\( \\frac{dy}{dx} = \\frac{1}{f'(x)} \\)"],
        correctAnswer: "\\( \\frac{dy}{dx} = \\frac{1}{f'(y)} \\)",
        explanation: "Formula for derivative of inverse."
    },
    {
        id: 100,
        question: "If limit of f(x) as x→a exists and f(a) defined but not equal to limit, then:",
        options: ["f continuous at a", "f discontinuous at a", "f differentiable at a", "f constant near a"],
        correctAnswer: "f discontinuous at a",
        explanation: "Continuity requires limit = f(a)."
    }
];
