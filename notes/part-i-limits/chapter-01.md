# Chapter 01: Introduction to Limits

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> The foundational concept of limits and how to estimate them from graphs and tables.

## Lecture Notes

### Functions Review

A **function** maps each input $x$ to exactly one output $y$. The **vertical line test** checks this: if any vertical line intersects the graph more than once, the relation is not a function.

**Domain** is the set of all valid $x$ values; **Range** is the set of all output $y$ values. **x-Intercepts** occur where $y = 0$; the **y-intercept** occurs where $x = 0$.

**Asymptotes:** Vertical asymptotes occur where $f(x) \to \pm\infty$. Horizontal asymptotes describe end behavior as $x \to \pm\infty$. Oblique (slant) asymptotes are slanted lines approached at infinity.

**Symmetry:** Even functions satisfy $f(x) = f(-x)$ (symmetric about the $y$-axis). Odd functions satisfy $f(-x) = -f(x)$ (symmetric about the origin).

### Function Types

**Polynomials:** $f(x) = a_n x^n + \cdots + a_0$. The degree $n$ determines end behavior: even degree $\to$ same direction on both ends; odd degree $\to$ opposite directions.

**Rational Functions:** $f(x) = \frac{p(x)}{q(x)}$. Vertical asymptotes where $q(x) = 0$ and $p(x) \neq 0$; **holes** where both numerator and denominator vanish. Horizontal asymptotes depend on degree comparison:
- $\deg(q) > \deg(p) \Rightarrow y = 0$
- $\deg(p) = \deg(q) \Rightarrow y =$ ratio of leading coefficients
- $\deg(p) > \deg(q) \Rightarrow$ no horizontal asymptote (may have oblique)

**Oblique Asymptotes** occur when $\deg(p) = \deg(q) + 1$; find by polynomial long division.

**Radical Functions:** $f(x) = \sqrt[n]{x}$, $n \in \mathbb{N}$. Even $n$: domain $[0, \infty)$. Odd $n$: domain $(-\infty, \infty)$.

**Exponential Functions:** $f(x) = b^x$, $b > 0$, $b \neq 1$. Domain $(-\infty, \infty)$, Range $(0, \infty)$, HA at $y = 0$.

**Logarithmic Functions:** $f(x) = \log_b(x)$, inverse of $b^x$. Domain $(0, \infty)$, Range $(-\infty, \infty)$, VA at $x = 0$.

### Trigonometric Functions

Key derivatives: $\frac{d}{dx}\sin x = \cos x$, $\frac{d}{dx}\cos x = -\sin x$, $\frac{d}{dx}\tan x = \sec^2 x$.

**Inverse Trigonometric Functions:**

| Function | Domain | Range |
|----------|--------|-------|
| $\sin^{-1}(x)$ | $[-1, 1]$ | $[-\pi/2, \pi/2]$ |
| $\cos^{-1}(x)$ | $[-1, 1]$ | $[0, \pi]$ |
| $\tan^{-1}(x)$ | $\mathbb{R}$ | $(-\pi/2, \pi/2)$ |

### Introduction to Limits

$$\lim_{x \to c} f(x) = L$$

One-sided limits: $\lim_{x \to c^-}$ (from left) and $\lim_{x \to c^+}$ (from right). The two-sided limit exists iff both one-sided limits equal $L$; otherwise it DNE.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/dN3R9PbAQBQ/default.jpg)](https://www.youtube.com/watch?v=dN3R9PbAQBQ)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=WUvTyaaNkzM) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=kfF40MiS7zA) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=dN3R9PbAQBQ) - Full lecture coverage with worked examples

## 2.1 — The Idea of Limits

Calculus is fundamentally built on one idea: **change**. 
To understand how quantities change, we need a precise way to describe behavior 
near a point — not necessarily *at* the point. That is the role of the **limit**.

### Intuitive Definition

We write $\lim_{x \to c} f(x) = L$ and say 
"*the limit of $f(x)$ as $x$ approaches $c$ is $L$.*" 
This means: as $x$ gets arbitrarily close to $c$ (from either side), 
the values of $f(x)$ get arbitrarily close to $L$. The actual value $f(c)$ 
may be different from $L$, or even undefined.

### Key Definitions

**Definition — Limit**

Let $f$ be a function defined on an open interval containing $c$, except possibly at $c$ itself. 
We say $\lim_{x \to c} f(x) = L$ if for every $\varepsilon > 0$ there exists a $\delta > 0$ such that

$$0 < |x - c| < \delta \;\Longrightarrow\; |f(x) - L| < \varepsilon.$$

Geometrically, this means we can trap the graph of $f$ inside a horizontal band 
$(L - \varepsilon,\, L + \varepsilon)$ by restricting $x$ to a punctured neighborhood 
$(c - \delta,\, c) \cup (c,\, c + \delta)$.

### Worked Example — Estimating from a Graph

**Example 2.1.1**

Consider the function $f$ shown below. It has a "hole" at $x = 2$, meaning $f(2)$ is undefined, 
but the curve approaches height $y = 5$ from both sides.

> **Figure:** A graph showing a function with a hole at (2, 5). As x approaches 2 from either side, the y-values approach 5.

**Solution:** As $x$ approaches $2$ from either side, the $y$-values approach $5$. 
Therefore,

$$\lim_{x \to 2} f(x) = 5.$$

Note that $f(2)$ itself does not exist — the open circle shows the function is undefined there. 
The limit depends only on nearby values, not the value at $c$.

### Practice Problems

**Problem 1 — Reading a graph**

From the graph above, what is $\lim_{x \to -1} f(x)$?

**Answer:** The left and right branches both approach $y \approx 2.5$, so the limit is about $2.5$.

---

**Problem 2 — When the limit differs from the function value**

Suppose $g(4) = 7$ but $\lim_{x \to 4} g(x) = 3$. Sketch a rough graph illustrating this.

---

**Problem 3 — Numerical estimation**

Estimate $\lim_{x \to 0} \dfrac{\sin x}{x}$ by evaluating the function at $x = \pm 0.1, \pm 0.01, \pm 0.001$.

**Answer:** The values approach $1$ from both sides, so the limit is $1$.

### Study Tips

1. Always check both sides of $c$. A limit exists only when the left-hand and right-hand limits agree.
2. The value $f(c)$ is irrelevant to the limit. A hole, jump, or removable discontinuity can still have a well-defined limit.
3. Draw a quick sketch whenever possible. Visual intuition guides algebraic work.