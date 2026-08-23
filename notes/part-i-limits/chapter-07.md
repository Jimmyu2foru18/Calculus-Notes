# Chapter 07: Continuity and the Intermediate Value Theorem

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Continuity, the Intermediate Value Theorem, and the Bisection Method.

## Lecture Notes

### Evaluating Limits by Substitution and Continuity

When evaluating limits:
1. **Plug in first.** If $f(c)$ is defined and finite, $\lim_{x \to c} f(x) = f(c)$.
2. If substitution gives $\frac{0}{0}$, look for a vertical asymptote or simplify.
3. **Top Heavy** ($\deg(p) > \deg(q)$): check signs of leading terms as $x \to \pm\infty$.
4. **Bottom Heavy** ($\deg(q) > \deg(p)$): limit is 0.
5. **Balanced** ($\deg(p) = \deg(q)$): limit is the ratio of leading coefficients.

**Infinite Limit Examples:**
$$\lim_{x \to \infty} \frac{5x^5 - 5x^3 + 3x}{x^7 + 10x^2 - 5} = 0 \quad \text{(Bottom Heavy)}$$

$$\lim_{x \to \infty} \frac{3x^2 - 7x^2 + 10x}{2x^2 + 10x - 9} = -2 \quad \text{(Balanced)}$$

$$\lim_{x \to -\infty} \frac{2x^3 + 4x + 1}{5x^2 - 10x} = -\infty \quad \text{(Top Heavy with negative } x\text{)}$$

### Continuity

A function $f$ is **continuous at $x = c$** if all three conditions hold:
1. $f(c)$ is defined.
2. $\displaystyle\lim_{x \to c} f(x)$ exists.
3. $\displaystyle\lim_{x \to c} f(x) = f(c)$.

If any condition fails, $f$ is **discontinuous at $x = c$**.

### Types of Discontinuities

**1. Removable Discontinuity (Hole):** The limit exists but $f(c)$ is undefined (or defined differently). Occurs at single-point holes.

**2. Infinite Discontinuity (Vertical Asymptote):** $f(c)$ is undefined and $\lim_{x \to c} f(x) = \pm\infty$. Conditions 1 and 2 both fail.

**3. Jump Discontinuity:** Left and right limits exist but are unequal. Condition 2 fails.

**4. Point-Jump Discontinuity:** $f(c) \neq \lim_{x \to c} f(x)$. Conditions 1 and 2 hold but condition 3 fails.

**Theorem:** Polynomial, rational, radical, exponential, logarithmic, and trigonometric functions are discontinuous only where they are undefined. Jump and point-jump discontinuities occur only in piecewise functions.

### Intermediate Value Theorem (IVT)

If $f$ is continuous on $[a, b]$ and $N$ is any number between $f(a)$ and $f(b)$, then there exists at least one $c \in [a, b]$ such that $f(c) = N$.

**Example:** Does $f(x) = x^3 - 3x - 2$ have a root in $[0, 5]$?
$f(0) = -2$ and $f(5) = 108$. Since $0$ is between $-2$ and $108$, the IVT guarantees a root in $[0, 5]$.

**Caution:** The IVT requires continuity on the *closed* interval $[a, b]$. If $f$ is discontinuous anywhere in $[a, b]$ (e.g., at a vertical asymptote), the IVT does not apply.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/kfF40MiS7zA/default.jpg)](https://www.youtube.com/watch?v=kfF40MiS7zA)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=kfF40MiS7zA) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=kfF40MiS7zA) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=kfF40MiS7zA) - Full lecture coverage with worked examples

## 2.6 — Continuity and the Intermediate Value Theorem

Limits tell us what a function *approaches*. **Continuity** tells us when 
the function actually *reaches* that value. Continuous functions have no breaks, jumps, 
or holes — and they satisfy powerful existence theorems.

### Definition of Continuity

#### Definition — Continuous at a Point

A function $f$ is **continuous at $x = c$** if:

1. $f(c)$ is defined,
2. $\displaystyle\lim_{x \to c} f(x)$ exists,
3. $\displaystyle\lim_{x \to c} f(x) = f(c)$.

If $f$ is continuous at every point of an interval $I$, we say $f$ is **continuous on $I$**.

### Continuity of Elementary Functions

#### Theorem — Continuity of Standard Functions

The following functions are continuous on their natural domains:

- Polynomials (everywhere)
- Rational functions $\dfrac{p(x)}{q(x)}$ (where $q(x) \neq 0$)
- Root functions $\sqrt[n]{x}$ (on their domain)
- Trigonometric, exponential, and logarithmic functions (on their domains)

Moreover, sums, products, quotients (with nonzero denominator), and compositions 
of continuous functions are continuous.

### Intermediate Value Theorem (IVT)

#### Theorem — Intermediate Value Theorem

If $f$ is continuous on $[a, b]$ and $N$ is any number between $f(a)$ and $f(b)$, 
then there exists at least one $c \in [a, b]$ such that $f(c) = N$.

### Visualization — IVT

> **Figure:** Figure 2.6.1 — Continuous Function and IVT

The continuous curve must cross the horizontal line $y = N$ at some $c \in [a, b]$.

### Worked Examples

#### Example 2.6.1 — Checking Continuity

Is $f(x) = \dfrac{x^2 - 4}{x - 2}$ continuous at $x = 2$?

**Solution:** $f(2)$ is undefined (division by zero), so condition (1) fails. 
$f$ is **not continuous at $2$**. However, the limit exists:

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} (x + 2) = 4.$$

We call $x = 2$ a **removable discontinuity**: redefining $f(2) = 4$ 
would make $f$ continuous there.

#### Example 2.6.2 — Using the IVT

Show that $f(x) = x^3 - x - 2$ has a root in $[1, 2]$.

**Solution:** $f$ is a polynomial, hence continuous on $[1, 2]$.

- $f(1) = 1 - 1 - 2 = -2 < 0$
- $f(2) = 8 - 2 - 2 = 4 > 0$

Since $f(1) < 0 < f(2)$, the IVT guarantees a number $c \in [1, 2]$ with $f(c) = 0$.
Graphically, the curve must cross the $x$-axis in this interval.

#### Example 2.6.3 — Bisection Method (Approximation)

Approximate the root of $x^3 - x - 2 = 0$ to two decimal places.

**Solution:** Start with $[1, 2]$ (midpoint $1.5$):

- $f(1.5) = 3.375 - 1.5 - 2 = -0.125 < 0$. New interval $[1.5, 2]$.
- $f(1.75) = 5.36 - 1.75 - 2 = 1.61 > 0$. New interval $[1.5, 1.75]$.
- $f(1.625) = 4.29 - 1.625 - 2 = 0.665 > 0$. New interval $[1.5, 1.625]$.
- $f(1.5625) = 3.82 - 1.56 - 2 = 0.26 > 0$. New interval $[1.5, 1.5625]$.
- $f(1.53125) = 3.59 - 1.53 - 2 = 0.06 > 0$. New interval $[1.5, 1.53125]$.

The root is approximately $\boxed{1.52}$ (correct to two decimal places).

### Practice Problems

**Problem 1 — Continuity check**

Let $g(x) = \begin{cases} x^2, & x \leq 1 \\ 2x - 1, & x > 1. \end{cases}$
Is $g$ continuous at $x = 1$?

**Answer:**

$\lim_{x \to 1^-} g(x) = 1$, $\lim_{x \to 1^+} g(x) = 1$, 
and $g(1) = 1$. All three agree, so $g$ is continuous at $1$.

---

**Problem 2 — IVT application**

Prove that $h(x) = \cos x - x$ has a root in $[0, \pi/2]$.

**Answer:**

$h(0) = 1 > 0$ and $h(\pi/2) = 0 - \pi/2 < 0$. 
Since $h$ is continuous on $[0, \pi/2]$, the IVT guarantees a root.

---

**Problem 3 — Removable vs essential**

Classify the discontinuities of $f(x) = \frac{x^2 - 4}{x^2 - 5x + 6}$.

**Answer:**

Factor: $f(x) = \frac{(x-2)(x+2)}{(x-2)(x-3)}$. 
At $x = 2$, the factor cancels — removable discontinuity (hole). 
At $x = 3$, the denominator is zero and not canceled — essential (vertical asymptote).

---

### Study Tips

**1.** Continuity at a point requires *all three* conditions. 
Missing any one means discontinuous at that point.

**2.** The IVT is an *existence* theorem, not a formula for the root. 
It guarantees a solution exists but does not give its value.

**3.** The **Bisection Method** turns the IVT into a numerical algorithm: 
repeatedly halve the interval containing the sign change to approximate the root to any desired accuracy.

[Previous](chapter-06.html) • [Curriculum](INDEX.md) • [Next](chapter-08.html)