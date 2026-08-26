# Chapter 02: Graphical Limits and Function Analysis

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Analyzing functions graphically and numerically to understand limit behavior.

## Lecture Notes

### Rational Functions

A **rational function** has the form $f(x) = \frac{p(x)}{q(x)}$ where $p(x)$ and $q(x)$ are polynomials.

- **Domain:** All real numbers except where $q(x) = 0$.
- **Range:** Check $y$-coordinates of holes and horizontal asymptotes to see if any values are excluded.
- **y-Intercept:** $\left(0, \frac{p(0)}{q(0)}\right)$ if $x = 0$ is in the domain.
- **x-Intercepts:** Where $p(x) = 0$ and $q(x) \neq 0$.

**Holes** occur where $p(x) = 0$ and $q(x) = 0$. To find the $y$-coordinate of a hole, simplify $f(x)$ and evaluate at that $x$.

**Vertical Asymptotes** occur where $q(x) = 0$ and $p(x) \neq 0$.

**Horizontal Asymptotes:**
1. **Bottom Heavy:** $\deg(q) > \deg(p) \Rightarrow y = 0$.
2. **Balanced:** $\deg(p) = \deg(q) \Rightarrow y = \frac{\text{leading coeff. of } p}{\text{leading coeff. of } q}$.
3. **Top Heavy:** $\deg(p) > \deg(q) \Rightarrow$ no horizontal asymptote.

**Oblique (Slant) Asymptotes** occur when $\deg(p) = \deg(q) + 1$. Find the equation by dividing $p(x)$ by $q(x)$ using long division.

### Radical Functions

$f(x) = \sqrt[n]{x}$ where $n$ is a natural number:
- **Even $n$:** Domain $[0, \infty)$, Range $[0, \infty)$, intercept at $(0,0)$.
- **Odd $n$:** Domain $(-\infty, \infty)$, Range $(-\infty, \infty)$, intercept at $(0,0)$.

### Exponential Functions

$f(x) = b^x$ where $b > 0$ and $b \neq 1$:
- $0 < b < 1$: exponential decay.
- $b > 1$: exponential growth.
- Domain $(-\infty, \infty)$, Range $(0, \infty)$, HA at $y = 0$, y-intercept $(0,1)$.

### Logarithmic Functions

$f(x) = \log_b(x)$, inverse of $g(x) = b^x$:
- Domain $(0, \infty)$, Range $(-\infty, \infty)$, x-intercept $(1,0)$, VA at $x = 0$.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/kfF40MiS7zA/default.jpg)](https://www.youtube.com/watch?v=kfF40MiS7zA)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=kfF40MiS7zA) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=FfFGjHSi6Kk) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=kfF40MiS7zA) - Full lecture coverage with worked examples

## 2.2 — Limits from Graphs and Tables

### Reading Limits Graphically

To find $\lim_{x \to c} f(x)$ from a graph:

1. **Approach from the left:** Trace the curve as $x$ approaches $c$ from the left side. What $y$-value does it approach?
2. **Approach from the right:** Trace the curve as $x$ approaches $c$ from the right side. What $y$-value does it approach?
3. **Compare:** If both sides approach the same value $L$, then $\lim_{x \to c} f(x) = L$. If they differ, the limit DNE.

**Key visual cues:**
- **Hole (removable discontinuity):** The limit exists even if $f(c)$ is undefined.
- **Jump discontinuity:** Left and right limits exist but are not equal.
- **Vertical asymptote:** The function shoots to $\pm\infty$; the limit DNE.
- **Horizontal asymptote:** The function approaches a finite value as $x \to \pm\infty$.

### Estimating Limits Numerically

When a graph is not available, build a table of values approaching $c$ from both sides:

| $x$ (left) | $f(x)$ | $x$ (right) | $f(x)$ |
|------------|--------|-------------|--------|
| $c - 0.1$ | ... | $c + 0.1$ | ... |
| $c - 0.01$ | ... | $c + 0.01$ | ... |
| $c - 0.001$ | ... | $c + 0.001$ | ... |

If the values converge to the same number from both sides, that is the limit.

### Worked Examples

#### Example 2.2.1 — Reading a Graph

**Problem:** From the graph below, find $\lim_{x \to 2} f(x)$.

> **Figure:** A graph showing a function with a hole at $(2, 5)$. The left and right branches both approach $y = 5$.

**Solution:** As $x$ approaches $2$ from either side, the $y$-values approach $5$. 
Therefore, $\lim_{x \to 2} f(x) = 5$.

Note that $f(2)$ itself does not exist (open circle), but the limit depends only on nearby values.

#### Example 2.2.2 — Jump Discontinuity

**Problem:** Find $\lim_{x \to -2} f(x)$ for the piecewise function shown.

> **Figure:** A graph with a jump at $x = -2$. Left limit is $-1$, right limit is $1$.

**Solution:** The left-hand limit is $-1$ and the right-hand limit is $1$. 
Since $-1 \neq 1$, the two-sided limit **does not exist**.

#### Example 2.2.3 — Vertical Asymptote

**Problem:** Evaluate $\displaystyle\lim_{x \to 0^+} \frac{1}{x}$ and $\displaystyle\lim_{x \to 0^-} \frac{1}{x}$.

**Solution:**
- For $x > 0$ small, $\frac{1}{x}$ is large and positive, so $\lim_{x \to 0^+} \frac{1}{x} = +\infty$.
- For $x < 0$ small, $\frac{1}{x}$ is large and negative, so $\lim_{x \to 0^-} \frac{1}{x} = -\infty$.

Because the one-sided limits disagree in sign, $\lim_{x \to 0} \frac{1}{x}$ does not exist.
The line $x = 0$ is a vertical asymptote.

### Practice Problems

**Problem 1 — Reading a graph**

From a graph with a hole at $x = -1$ where both branches approach $y \approx 2.5$, find $\lim_{x \to -1} f(x)$.

**Answer:** The left and right branches both approach $y \approx 2.5$, so the limit is about $2.5$.

---

**Problem 2 — When the limit differs from the function value**

Suppose $g(4) = 7$ but $\lim_{x \to 4} g(x) = 3$. Sketch a rough graph illustrating this.

---

**Problem 3 — Numerical estimation**

Estimate $\lim_{x \to 0} \dfrac{\sin x}{x}$ by evaluating the function at $x = \pm 0.1, \pm 0.01, \pm 0.001$.

**Answer:** The values approach $1$ from both sides, so the limit is $1$.

### Study Tips

**1.** Always check both sides of $c$. A limit exists only when the left-hand and right-hand limits agree.

**2.** The value $f(c)$ is irrelevant to the limit. A hole, jump, or removable discontinuity can still have a well-defined limit.

**3.** Draw a quick sketch whenever possible. Visual intuition guides algebraic work.

**4.** For rational functions, factor first to identify holes versus vertical asymptotes.

**5.** Use tables of values when graphs are unavailable; approaching from both sides is essential.

[Previous](chapter-01.html) • [Curriculum](INDEX.md) • [Next](chapter-03.html)