# Chapter 04: One-Sided Limits

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> One-sided limits and how they determine whether a two-sided limit exists.

## Lecture Notes

### Investigating Limits from a Graph

To find limits from a graph, trace the curve as $x$ approaches $c$ from each side:
- If both sides approach the same $y$-value, $\lim_{x \to c} f(x)$ equals that value.
- If the sides approach different values, the limit **DNE**.

**Example:** At $x = 1$, if both sides approach $y = 2$, then $\lim_{x \to 1} f(x) = 2$. At $x = -2$, if the left side approaches $-1$ and the right side approaches $1$, then $\lim_{x \to -2} f(x)$ DNE.

### One-Sided Limits

The **left-hand limit** $\lim_{x \to c^-} f(x)$ is the value approached as $x$ comes from the left. The **right-hand limit** $\lim_{x \to c^+} f(x)$ is the value approached as $x$ comes from the right.

**Theorem:** $\lim_{x \to c} f(x) = L$ if and only if $\lim_{x \to c^-} f(x) = L$ and $\lim_{x \to c^+} f(x) = L$. If one-sided limits exist but are unequal, the two-sided limit DNE.

### Infinite Limits

As $f(x)$ approaches a **vertical asymptote**, one-sided limits tend to $\pm\infty$. If both one-sided limits agree in sign, the two-sided limit tends to that infinity; otherwise it DNE.

**Example:** $\displaystyle\lim_{x \to 3} \frac{x + 4}{x - 3}$. One-sided table:

| $x$ | $f(x)$ |
|-----|--------|
| 2.9 | $-69$ |
| 2.99 | $-699$ |
| 3.1 | $71$ |
| 3.01 | $701$ |

$\lim_{x \to 3^+} \frac{x + 4}{x - 3} = -\infty$ and $\lim_{x \to 3^-} \frac{x + 4}{x - 3} = \infty$, so $\lim_{x \to 3} \frac{x + 4}{x - 3}$ DNE.

**Number over 0** means vertical asymptote. Evaluate one-sided limits numerically or from the graph.

### Limits at Infinity ($x \to \pm\infty$)

Taking a limit as $x \to \pm\infty$ reveals the **end behavior** of a function:
- If $f(x)$ has a horizontal asymptote, the limit equals that asymptote's $y$-value.
- If $f(x)$ increases or decreases without bound, the limit is $\pm\infty$.
- If $f(x)$ oscillates without settling, the limit DNE.

### Limits of Rational Functions at Infinity

**Formal Method:**
1. Divide numerator and denominator by the highest power of $x$ in the denominator.
2. As $x \to \pm\infty$, any term with $x$ in the denominator goes to 0.

**Hand Waving Rule:**
- **Bottom Heavy:** $\deg(q) > \deg(p) \Rightarrow \lim \to 0$.
- **Balanced:** $\deg(p) = \deg(q) \Rightarrow \lim =$ ratio of leading coefficients.
- **Top Heavy:** $\deg(p) > \deg(q) \Rightarrow \lim \to \pm\infty$ depending on signs.

**Caution with Radicals:** For even roots and $x \to -\infty$, use $|x|$. Example: $\sqrt{x^6} = |x^3|$.

### Limits Involving Radicals and Infinity

$$\lim_{x \to \infty} \frac{x^2 + 3x - \sqrt{9x^4 + 3x^2}}{2x^2 + x} = \lim_{x \to \infty} \frac{x^2 - 3x^2}{2x^2} = -1$$

$$\lim_{x \to -\infty} \frac{\sqrt{25x^6 + 3x - 1}}{8x^3 + 2x^2 + 4} = \frac{5|x^3|}{8x^3} = -\frac{5}{8}$$

Note: $\sqrt{x^6} = |x^3|$; when $x \to -\infty$, $|x^3| = -x^3$.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/kfF40MiS7zA/default.jpg)](https://www.youtube.com/watch?v=kfF40MiS7zA)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=kfF40MiS7zA) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=kfF40MiS7zA) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=kfF40MiS7zA) - Full lecture coverage with worked examples

## One-Sided Limits

A **two-sided limit** $\lim_{x \to c} f(x)$ requires the function to approach 
the same value from *both sides* of $c$. When the left and right behaviors differ, 
we describe them separately using **one-sided limits**.

### Definitions

#### Definition — Left-Hand and Right-Hand Limits

The **left-hand limit** of $f$ as $x$ approaches $c$ is

$$\lim_{x \to c^-} f(x) = L$$

if $f(x)$ gets arbitrarily close to $L$ when $x$ approaches $c$ through values *less than* $c$.

The **right-hand limit** of $f$ as $x$ approaches $c$ is

$$\lim_{x \to c^+} f(x) = L$$

if $f(x)$ gets arbitrarily close to $L$ when $x$ approaches $c$ through values *greater than* $c$.

### Theorem — Existence of a Two-Sided Limit

#### Theorem

$\displaystyle\lim_{x \to c} f(x) = L$ **if and only if**

$$\lim_{x \to c^-} f(x) = L \quad \text{and} \quad \lim_{x \to c^+} f(x) = L.$$

If the left-hand and right-hand limits exist but are *not equal*, 
the two-sided limit **does not exist (DNE)**.

### Visualization — Left vs Right

> **Figure:** Figure 2.3.1 — One-Sided Limits at a Jump Discontinuity

At $x = c$, the left-hand limit is $L^-$ (open circle), while the right-hand limit is $L^+$ (filled circle). 
Since $L^- \neq L^+$, $\lim_{x \to c} f(x)$ does not exist.

### Worked Example

**Example 2.3.2 — Step Function**

Let $f(x) = \begin{cases} x + 1, & x < 2 \\ 5, & x = 2 \\ x^2 - 1, & x > 2. \end{cases}$
Evaluate the one-sided limits at $x = 2$.

**Solution:**

- Left-hand: $\displaystyle\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} (x + 1) = 2 + 1 = 3$.
- Right-hand: $\displaystyle\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} (x^2 - 1) = 4 - 1 = 3$.

Since both one-sided limits equal $3$, the two-sided limit exists and equals $3$:

$$\lim_{x \to 2} f(x) = 3.$$

Note that $f(2) = 5 \neq 3$. The function value at $2$ does not affect the limit.

### Practice Problems

**Problem 1 — Sign function**

Let $f(x) = \dfrac{|x|}{x}$. Evaluate $\lim_{x \to 0^-} f(x)$ and $\lim_{x \to 0^+} f(x)$.
Does $\lim_{x \to 0} f(x)$ exist?

**Answer:**

$\lim_{x \to 0^-} f(x) = -1$ and $\lim_{x \to 0^+} f(x) = 1$. 
Since they differ, the two-sided limit DNE.

---

**Problem 2 — Floor function**

Let $g(x) = \lfloor x \rfloor$ (greatest integer $\leq x$). Find 
$\lim_{x \to 2^-} g(x)$ and $\lim_{x \to 2^+} g(x)$.

**Answer:**

Both one-sided limits equal $2$, so $\lim_{x \to 2} \lfloor x \rfloor = 2$.
(At integers, the floor function has a jump in the function value but not in the limit.)

---

### Study Tips

**1.** For piecewise functions, evaluate each piece separately on its domain side of $c$.

**2.** When limits "match" across a jump (as in the floor example), the limit still exists. 
Mismatched values cause a DNE.

**3.** One-sided limits are also essential for analyzing endpoints of closed intervals.

[Previous](chapter-03.html) • [Curriculum](INDEX.md) • [Next](chapter-05.html)