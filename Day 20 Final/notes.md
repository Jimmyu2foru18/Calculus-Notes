# Day 20 — Final

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Limits and Continuity · [Source: 1.png](1.png)

**CALCULUS: LIMITS AND CONTINUITY**

### Section 1: LIMITS

Evaluate the limit: $\displaystyle \lim_{x \to 0} \frac{5-\sqrt{25+5x}}{x}$

**Answer:** DNE (Does Not Exist)

TI: Press HOME → [F3] → 1: select 1:
Type: limit((5-sqrt(25+5*x))/x,x),0)

PRESS ENTER. If the graph is splitting in different directions or suggesting to different infinities from the left and right sides, the calculator will output undefined, signifying that the two-sided limit DNE.

### Section 2: SQUEEZE THEOREM

Use the Squeeze Theorem to evaluate the limit:

$$\lim_{x \to 0} 3x^5 \cos\left(\frac{7}{2x}\right)$$

**Steps:**
$$-1 \leq \cos\left(\frac{7}{2x}\right) \leq 1$$

Multiply all three parts by $3x^5$:
$$-3x^5 \leq 3x^5 \cos\left(\frac{7}{2x}\right) \leq 3x^5$$

As $x \to 0$, both outside expressions approach 0.

By the Squeeze Theorem, the middle expression must also approach 0.

**Answer:** 0

### Section 3: DISCONTINUITIES

Identify all discontinuities of the function $f(x)$:

$$f(x) = \begin{cases} x^3, & \text{if } x < 0 \\ x^2+3, & \text{if } 0 \leq x < 3 \\ x-1, & \text{if } x \geq 8 \end{cases}$$

**Answer:** Jump discontinuity at $x = 3$, Infinite discontinuity at $x = 8$.

TI: To graphically inspect piece-wise structures or verify domain:
**Press [F3] then [F1] (Y=)**
Enter the function cleanly using the [when( command form found under [2nd] [MATH] → Prgm or when type out manually):
$y_1 = \text{when}(x<0,x,0,x<3;x^2+3,0 \leq x,x<3;x-1,x \geq 8)$

**Press [F3] then [F3] (GRAPH)** to visually inspect where the graph jumps or hits an asymptote.

### Section 4: CONTINUITY AND ALGEBRA

Find the value of $c$ that makes the function continuous:

$$2c+4 = -5c+8$$

**Answer:** $c = 7$

TI: Press HOME. Algebra menu by pressing [F2] select 1: Solve type: solve(2c+4=-5c+8,c)

### Section 5: INTERMEDIATE VALUE THEOREM

Determine if the function has a root on $[1,7]$, and if it satisfies the Intermediate Value Theorem:

$$f(x) = \frac{9}{2x-12}$$

**Answer:** No

TI: To find where the function is undefined (denominator equals zero):

Press HOME → [F2] → select 1: solve:
Type: solve(2x-12=0,x)

**Note:** Press ENTER. The screen will give $x = 6$. Because 6 falls within the interval $[1,7]$, the function lacks continuity on this span, and IVT does not hold. The function is not continuous on the interval. The denominator equals zero.

### Section 6: DIFFERENTIATION (CALC TI)

Differentiate the function:

$$f(x) = \frac{5x^3-2x+5}{4x-3}$$

$$f'(x) = \frac{20x^2-45x+14}{(4x-3)^2}$$

**Answer:** $\displaystyle \frac{20x^2-45x+14}{(4x-3)^2}$

Select 1: d(differentiate). Type: $d[(5*x^3-2*x+5)/(4*x-3)],x)$

Differentiate the function:

$$f(x) = \cot(x)^4 e^{\sin(x)}$$

**Answer:** $-4x^3\csc(x)^4 e^{\sin(x)} + \cot(x)^4 e^{\sin(x)}\cos(x)$

TI: Press HOME → [F3] → 1: select d:
$d(\cot(x)^4*e^{\sin(x)},x)$

### Section 7: CALCULUS APPLICATIONS

Give an example of a function that is continuous but not differentiable at a point.

**Answer:** $f(x) = |x|$

Two cars travel at right angles. Find the rate of separation after one hour.

**Answer:** 50 mph

TI: $d(\text{sqr}((30t)^2+(40t)^2),t) \mid t=1$

Find the coordinates of the vertices of the maximum area rectangle inscribed in the semicircle $y = \sqrt{9-x^2}$.

**Answer:** $\left(\frac{3\sqrt{3}}{2}, \frac{3\sqrt{2}}{2}\right)$ and $\left(-\frac{3\sqrt{3}}{2}, \frac{3\sqrt{2}}{2}\right)$

TI: differentiating the area expression and setting it to zero: Press HOME → [F2] → 1: solve:
Type: solve(12*x^2*sqrt(9-x^2)=0,x)

---

## Page 2 — Derivatives Limits Optimization · [Source: 2.png](2.png)

### Derivatives & Limits

Find the derivative of $f(x) = \sqrt{x}$ using the limit definition.

**Answer:** $\displaystyle \lim_{h \to 0} \frac{\sqrt{x+h}-\sqrt{x}}{h}$

TI Note: You can evaluate the limit definition directly on the calculator to verify your algebraic type: $\lim_{h \to 0} \frac{\sqrt{x+h}-\sqrt{x}}{h},0)$

### Optimization & Tangent Lines

Find the radius of a cylinder of minimum surface area with a fixed volume of 300.

$$R = \sqrt{\frac{50}{\pi}}$$

**Answer:** $16\cos(-2x)$

$d(\cos(2-x)^2),4) = \ldots$

### Polynomials & Series

Find the third-degree Taylor polynomial for $f(x) = x^3 - 2x$ centered at $x = 3$.

**Answer:** $168 + 326(x-3) + 243(x-3)^2 + 87(x-3)^3$

TI Note: The TI Taylor expansion command.
Press HOME → [F3] → 9: select taylor:
Type: taylor(x^3-2x,x,3,3)

PRESS ENTER. The parameters represent: taylor(expression, taylor, var, degree, center)

### Derivatives & Integration

A particle has velocity $v(t) = t^2 - 5t + 6$. Find displacement $d(t)$ given $d(0) = 0$.

**Answer:** $\displaystyle d(t) = \frac{t^3}{3} - \frac{5t^2}{2} + 6t$

TI: Press HOME → [F3] → 2: select $\int$.

### Limits and Asymptotes

Analyze the asymptotes of the function $y = x + \frac{1}{x}$

**Answer:** Vertical Asymptote: $x = 0$
Horizontal Asymptote: $y = 1$

TI-89 Instructions: To quickly evaluate the horizontal end behavior limit analytically.

Press HOME → [F3] → 1: Type: limit((x+(1/x)),x,0,a)

PRESS ENTER. The screen returns 1/2. Use the same limit command approaching 50 to look for infinite output options to confirm your vertical asymptotes.

### Related Rates & Differentiation

A cone is draining water. Find $\frac{dh}{dt}$ when $h = 4$ and $\frac{dV}{dt} = -10$.

**Answer:** 5 inches/min

TI Note: To solve the related rate equation after taking the derivative manually ($V = \frac{1}{3}\pi r^2 h$) becomes complex, but the direct type is cleaner:
Press HOME → [F2] → 1: solve:
Type: $\text{solve}(-10/(1/4*\pi*d*h)*d,d)$

Press ENTER. (Use the alpha keyboard button $D$ to represent and press [2nd][$\alpha$] to get the exact symbol for $\pi$)

Differentiate the function: $f(x) = \ln(3x^2+7x)$

**Answer:** $\displaystyle \frac{15x+7}{3x^2+7x}$

TI: Press HOME → [F3] → 1: select type: $d(\ln(3*x^2+7*x),x)$

---

## Page 3 — Integration Examples · [Source: 3.png](3.png)

### Example 1: Power Rule & u-Substitution

$$\int 4x\sqrt{x^2-3} \, dx$$

**Steps:**
Let $u = x^2 - 3$, so $du = 2x \, dx$, and $2x \, dx = \frac{1}{2} du$

Rewrite: $\displaystyle 2\int \sqrt{u} \, du = 2\int u^{1/2} \, du$

Integrate: $\displaystyle 2\left(\frac{2}{3}u^{3/2} + C\right) = \frac{4}{3}u^{3/2} + C$

Substitute back: $\displaystyle \frac{4}{3}(x^2-3)^{3/2} + C$

TI: Press HOME → [F3] → [F3], select 2: type: $[F3](3*x^2-3)^{[1]}$

(Note: The calculator will omit the $+C$ constant)

### Example 2: Algebraic Manipulation & u-Substitution

$$\int 3x(5x-1)^4 \, dx$$

**Steps:**
Let $u = 5x - 1$, so $x = \frac{u+1}{5}$ and $dx = \frac{1}{5} du$

Substitute: $\displaystyle 3\left(\frac{u+1}{5}\right)u^4\left(\frac{1}{5}\right)du = \frac{3}{25}(u^5+u)du$

Integrate: $\displaystyle \frac{3}{25}\left(\frac{u^6}{6} + u\right) + C$

Answer: $\displaystyle \frac{3}{25}\left(\frac{(5x-1)^6}{6} + (5x-1)\right) + C$

TI: Press HOME → [F3] → [F3]$(3*x^5*(5*x-1)^{[1]}$

### Example 3: Trigonometric u-Substitution

$$\int \sec^2(x) \tan^2(x) \, dx$$

**Steps:**
Let $u = \tan(x)$, so $du = \sec^2(x) \, dx$

Rewrite: $\displaystyle \int u^2 \, du$

Integrate: $\displaystyle \frac{u^3}{3} + C$

Answer: $\displaystyle \frac{\tan^3(x)}{3} + C$

TI: $f(1/\cos(x))^2*\tan(x)^2, x$

(Note: Enter sec(x) as $1/\cos(x)$)

### Example 4: Identical Bounds Rule

$$\int_1^1 \cot(x) \, dx$$

**Answer:** 0

**Explanation:** Since the bounds are identical, the net area is zero.

### Example 5: Natural Log Rule

$$\int \frac{2x^2}{4x^2+4} \, dx$$

**Steps:**
Let $u = 4x^2 + 4$, so $du = 20x \, dx$

Adjust constants: $\displaystyle \frac{2}{5}\int \frac{du}{u} = \frac{1}{5}\int \frac{1}{u} \, du$

Integrate: $\displaystyle \frac{1}{10}\ln|4x^2+4| + C$

**Answer:** $\displaystyle \frac{1}{10}\ln|4x^2+4| + C$

TI: Press HOME → [F3] → 3: select 2: type: $f(\frac{2x^2}{4x^2+4}, x)$

### Example 6: Exponential u-Substitution

$$\int x^2 e^{x^2} \, dx$$

**Steps:**
Let $u = x^3$, so $du = 3x^2 \, dx$

Adjust constants: $\displaystyle \frac{1}{3}\int e^u \, du$

Integrate: $\displaystyle \frac{1}{3}e^u + C$

Answer: $\displaystyle \frac{1}{3}e^{x^2} + C$

TI: Press HOME → [F3] → 3: select 2: type: $f(x^2*e^{x^2}, x)$
(Use [2nd][$e^x$] for exponential symbol)

### Example 7: Power Rule, definite

$$\int_2^5 (3x^2-3x+1) \, dx$$

**Steps:**
Find antiderivative: $\displaystyle x^3 - \frac{3}{2}x^2 + x$

Evaluate from 2 to 5: $\displaystyle \left(5^3 - \frac{3}{2}(5)^2 + 5\right) - \left(2^3 - \frac{3}{2}(2)^2 + 2\right)$

Simplify: $97.5 - 9 = 88.5$

Answer: $\displaystyle \frac{177}{2}$ (or 88.5)

TI: Press HOME → [F3] → 3: select 2: type: (exp, var, lower, upper)

### Example 8: Exponential Definite

$$\int_0^3 (e^x - e^{-x}) \, dx$$

**Steps:**
Find antiderivative: $e^x + e^{-x}$

Simplifying note $e^0 = 1$

Answer: $e^3 - e^{-3}$

TI: Press HOME → [F3] → 3: select 2: type: $f(e^x - e^{-x}, 0, 2)$

---

## Page 4 — Derivatives and Integrals · [Source: 4.png](4.png)

### Derivatives of Integrals

$g(x) = \int_{1}^{x} e^{\sin(t)} dt$

**Steps:**
- Use the Fundamental Theorem of Calculus Part 2 Chain Rule
- Substitute the upper limit to the function and multiply by derivative of the upper limit:
- $e^{\sin(x)} \cdot \frac{d}{dx}(x)$
- $= xe^{\sin(x)}$
- TI Calculator: Press HOME -> select 1: d(
- Next the derivative: $d\left(\int_{1}^{t} e^{\sin(t)} dt, t, 1, 3, x\right), x$

### Area Between Curves

$y = x^4$

$y = -x^2 + 6$

**Steps:**
- Find Intersection points setting equations equal: $x^4 = -x^2 + 6$
- Integrate upper curve minus lower curve: $\int_{-2}^{\sqrt{2}} (-x^2+6 - x^4)dx$
- Answer: $\frac{16}{5}$
- $120/30\text{ME} \rightarrow 15/1 = \text{select 2: } \int($
- Type: $(-x^2 + 6 - x^4, -\sqrt{2}, \sqrt{2})$
- TI Calc: Rewrite terms (intersect at $y = -4$ and $y=8$): Type: Rewrite to find boundaries $y = -4$ and $y=8$

### Definite Integral Properties

Given $\int_{a}^{f} f(x)dx = -5$ and $\int_{a}^{c} f(x)dx = 3$, evaluate:

**a)** $\int_{c}^{f} f(x)dx$

**Steps:** $\int_{c}^{f} f(x)dx - \int_{c}^{a} f(x)dx = -5 - 3$

**Answer:** $-8$

**b)** $\int_{f}^{a} f(x)dx$

**Step:** Reversing the bounds negates the value $= -\int_{a}^{f} f(x)dx = -(-5)$

**Answer:** $5$

### Numerical Estimation of Area

$f(x) = x^3 + 2x - 3$

$[0,4]$

$4 \text{ subdivisions} = \Delta x = 1$

Calculated values $\Delta x = 1$, estimate area under the curve $[0,4]$, $f(2.5) = 17.625$ at using 4 subdivisions ($\Delta x = 1$)

**a)** Right-sided sum: $1 \cdot (f(1) + f(2) + f(3) + f(4)) = 0 + 9 + 30 + 68$

$30 + 9 + 9 = 30 = 10$

$30 + 10 = 60$

**b)** Eight-sided sum: $1/((f(0) + f(1) + f(22)) + 3 + 9 = 3$

$30 = 36$

**c)** Left-sided sum: $1/((f(0) + f(1) + f(2)) + 3 + 9 = 30 = 9$

$36$

**d)** Left-sided sum: $1/((f(0) + f(1) + f(2)) + f(33) + 3 = 66$

**e)** Trapezoid Sum $= 72$

**f)** Trapezoid Sum $\int_{0}^{4} (x^2 + 2x) = 68$

**g)** Trapezoid Sum $\int_{0}^{4} (x^3 + 2x - 3) = 68$

**h)** Exact Area $\int_{0}^{4} (x^3 + 2x - 3) = 68$

TI for Exact Area: HOME $\rightarrow$ [F3] $\rightarrow$ select 2: $\int$

Type: $(x^3 + 2x - 3, 0, 4)$

---

## Page 5 — Calculus Study Guide · [Source: 5.png](5.png)

| 1: LIMITS & CONTINUITY | Description | Calculator Guide |
|---|---|---|
| Intermediate Value Theorem (IVT) | If $f$ is continuous at $[a, b]$, it takes every value between $[a]$ and $[b]$; if it's non-continuous in internal at $[a, b]$, or if logic continuous, ivt 7, if logic exist (i.e. $h=g/f$), if logic continuous as $A$, $\lim g = \lim f = A$ then $\lim g/f = A$. | `"HOME"` $\rightarrow$ `[F3]` $\rightarrow$ `(5/4) = solve(5 - (3+4)i, k & 0)` |
| Squeeze Theorem | If $g(x)$ and $h(x)$ and $f(x)$, if $g \leq f \leq h$ are equal limit $L$, then that limit is $L$. | $\sin \cos^{-1} = \sin^{-1} x + 3x + 2y)$ |
| Discontinuities | Agraph is discontinuout even if graph is asymptopic (e.g., piecewise at $x=2$ or $x=3\ldots$), when $x$ in $x=3$. | `[F3]` $\rightarrow$ `1: taylor(x^2 - 2x^2 + 3x^2 + y, x)` |
| Poles | Greatest Practice 7 Find Discontinuities | |
| Jump Discontinuity | $G(x) = p(x)$ if $x < 0$ | |
| Infinite Discontinuities | Functions can be continuous but not differentiable at sharp points, corners, or cusps. | Difference Quotient Limit or vertical tangent(s): |
| Implicit Diff. | Apples Chalot, Product, and Quotient for $x$, treating $y$ as $y'$, then isolate $y'$. Used when $y$ cannot ______. | Derivatives & Higher Order: $at^2 + 2n^2 + (-3)$, 4) (4th derivs) |
| Tangent Line | Ex: $\frac{d}{dx} \cos(x+y) = -\sin(x+y)\cos2 = \cos(x+y)(-\sin x) = -\sin(x)\cos(x+y)$ | Derivatives & Higher: $x^3y^3 + 3x^2y^2$, $x, y$ |
| Normal Line | Tangent Line: $y - y_0 = m(x - x_0)$ where $m = f'(x_0)$. Normal Line: Perpendicular to tangent line, slope is $-1/m$ | $\text{ImpDiff}(3x^2 - 4y = x^3y^2 + y^3, y^2 + x^3y^2 = x^3 + y^4, y, x)$ |
| Tangent/Normal | [*illegible*] | Evaluate Slope at Point $= x^2 - 2x, x)$ |

| 2: DIFFERENTIATION & TANGENT/DIFFERENTIABILITY | | |
|---|---|---|
| Differentiation Rules are specified on vs. | | |

| 3: OPTIMIZATION, MVT, & TAYLOR POLYNOMIALS | | |
|---|---|---|
| Mean Value (MVT) | If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, there exists $c$ such $f'(c) = \frac{f(b) - f(a)}{b - a}$ | MVT Solver Setup: $\text{solve}(d^2f^4 + 3^2 + 3^5) - ((2^2 + 4^3 + 5^3)$ |
| Optimization & Limits | Set first derivative to 0 | MVT Solver Setup: $((2^4 + 7^2 + 1^3) - 2^3 + 1 = 3)$, $d(\cos(-2^5), x)$, 4 (4th deriv) |
| Asymptotes | Set first derivative to 0 to find critical dimensions (e.g., max rectangle in semicircle or min cylinder surface area). | Optimization & Limits$(d^2 + 4^2 + 3^5, 0) = z$ |
| Taylor Polynomials | Horizontal found via $\lim f(x), x \pm \infty$. $\text{Approximates } f(x) \text{ centered at } x=c:$ $$P_n(x) = \sum_{i=0}^{n} \frac{f^{(i)}(c)}{i!}(x-c)^i$$ Syntax requires expression, variable, order, and center. | $\text{solve}(d^2f^{222} + 200 = 600/\pi, r) = 0, r)$ MVT Solver Setup: $\text{limit}((n + 1/(2^n - 1, n, 1000)) \rightarrow y = \frac{\pi}{2}$ `[F3]` $\rightarrow$ `9: taylor(x^3 - 3x^3 + 2x, x, 3, 1)` |

| 4: INTEGRATION & AREA APPLICATIONS | | |
|---|---|---|
| Indefinite & U-Sub | Finds the antiderivative family $f(x) + C$. Use u-substitution to reverse the chain rule by mapping inner functions. Integral integration bounds yield zero net area: $\int f(x)dx = 0$ | Indefinite Integrals $\frac{Sx^3}{4x^4 + 4 - 3^{-3}}$ $\text{int}(4^4(x^4 - 3), x)$ (Note: Calculator omits $+C$) |
| Definite & FTC 2 | FTC 1: $\int_{a}^{b} f(x)dx = F(b) - F(a)$. Reversing bounds negates value. Ex: $\frac{d}{dx}\int_{a}^{x} \sin(3x^2) dx = 3x^2 \sin(3x^2)$ | Optimization & Limits: $\text{solve}(d^2 + 4^4 + 3^5, 0) = 0$ $\text{solve}(d^2x^{222} + 200 = 600/\pi, r) = 0, r)$ $\text{limit}((\sin(\pi)/x, \pi, 1000)) \rightarrow y = \frac{\pi}{2}$ `[F3]` $\rightarrow$ `2: int((Sx^3)/(4x^4 + 4 - 3^-3))` $\text{int}(4^4(x^4 - 3), x)$ (Note: Calculator omits $+C$) |
| Area & Avg Value | Area w.r.t. $x$: $f_{\text{top}} - f_{\text{bottom}}dx$ Area w.r.t. $y$: $f_{\text{right}} - f_{\text{left}}dy$ $$f_{\text{avg}} = \frac{1}{b-a}\int_{a}^{b} f(x)dx$$ Set formulas equal for limits. | Area & Average Value: $\int((x^2 - 2x + 1, x, 2, 5)) \rightarrow \frac{177}{2}$ `[F3]` $\rightarrow$ `9: ∫: y_f_f(right) - f_left(y))dy` $\int((-(x - 6)^2 - x, x_0 \rightarrow \sqrt{2}, \sqrt{2}))$ $\int(\frac{y}{2}) = \frac{(y^2 - 2y)}{8}$ $\int(\frac{1}{2\pi})\int(\frac{1}{2\pi}) i, y, -4, B)$ $\int\int(\frac{1}{2\pi})\int(\sin(3x), x, 0, 2\pi)$ |
| Riemann Sums | Approximates $\int f(x)dx$ via $n$ slices: $\Delta x = \frac{b}{n}$. RightLeft: Evaluates endpoints. Midpoint: evaluates midpoints. | |
| Trapezoid | $\left(\frac{\text{Left} + \text{Right}}{2}\right)$. Evaluates midpoints. Midpoint: evaluates midule. | Exact Value Verification: $\int((x^2 + 2x - 3, x, 0, 4)) \text{ yields } 49$ |

**Definite & FTC 2 Setup:** $\int((3x^2 - 2x + 1, x, 2, 5)) \rightarrow \frac{177}{2}$

$\int((\ldots) \int((\ldots), -1, x^3), x)$
