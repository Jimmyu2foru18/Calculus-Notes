# Chapter 02: Definition of Limits

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> The epsilon-delta definition of limits and rigorous proof techniques.

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

## 2.2 — Definition of Limits

In Section 2.1 we treated limits informally. Now we formalize the idea using the 
**epsilon–delta ($\varepsilon$–$\delta$) definition**, which removes all ambiguity 
and becomes the foundation for rigorous proofs.

### The Epsilon–Delta Definition

#### Definition — Epsilon–Delta Limit

Let $f$ be a function defined on an open interval containing $c$, except possibly at $c$. 
We say

$$\lim_{x \to c} f(x) = L$$

if for *every* $\varepsilon > 0$ there exists a $\delta > 0$ such that

$$0 < |x - c| < \delta \quad \Longrightarrow \quad |f(x) - L| < \varepsilon.$$

In words: *for any tolerance $\varepsilon$ around $L$, we can find a window 
$\delta$ around $c$ that keeps the function within that tolerance.*

### Visualizing $\varepsilon$ and $\delta$

> **Figure:** Figure 2.2.1 — Epsilon–Delta Geometry

The horizontal green band traps $f(x)$ near $L$; the bottom interval traps $x$ near $c$. 
If every $\varepsilon$-band forces some $\delta$-window, the limit exists.

### Worked Example — Proving a Limit

**Example 2.2.1**

**Claim:** $\displaystyle\lim_{x \to 3} (2x + 1) = 7$.

**Proof sketch:** Let $\varepsilon > 0$ be given. We need $\delta > 0$ such that

$$0 < |x - 3| < \delta \;\Longrightarrow\; |(2x + 1) - 7| < \varepsilon.$$

Simplify the right-hand side:

$$|2x + 1 - 7| = |2x - 6| = 2|x - 3|.$$

We want $2|x - 3| < \varepsilon$, so choose $\delta = \varepsilon / 2$. 
Then $0 < |x - 3| < \delta$ implies

$$|2x + 1 - 7| = 2|x - 3| < 2\delta = \varepsilon.$$

Thus, by definition, $\lim_{x \to 3} (2x + 1) = 7$. $\blacksquare$

### Practice Problems

**Problem 1 — Finding $\delta$ for a linear function**

Prove $\lim_{x \to 1} (3x - 2) = 1$ using the $\varepsilon$–$\delta$ definition.

**Hint:** $|3x - 2 - 1| = 3|x - 1|$. Choose $\delta = \varepsilon / 3$.

---

**Problem 2 — Conceptual check**

If $\lim_{x \to c} f(x) = L$, does $f(c) = L$ necessarily hold? Explain.

**Answer:**

No. The limit describes behavior *near* $c$, not *at* $c$.
For example, define $f(x) = \dfrac{x^2 - 1}{x - 1}$. Then $\lim_{x \to 1} f(x) = 2$, 
but $f(1)$ is undefined.

---

**Problem 3 — Diagram interpretation**

In the epsilon–delta diagram above, what happens to $\delta$ as $\varepsilon$ gets smaller?

**Answer:**

$\delta$ must also shrink. A tighter tolerance on $y$ forces a tighter window on $x$.

---

### Study Tips

**1.** Algebraic manipulation of $|f(x) - L|$ is the heart of every $\varepsilon$–$\delta$ proof. 
Factor, rationalize, or bound as needed.

**2.** You may assume $\delta \leq 1$ (or any convenient constant) to simplify expressions — 
this is standard and does not weaken the proof.

**3.** The definition is *universal*: once you master the linear case, 
quadratics and rationals follow the same pattern.

[Previous](chapter-01.html) • [Curriculum](INDEX.md) • [Next](chapter-03.html)