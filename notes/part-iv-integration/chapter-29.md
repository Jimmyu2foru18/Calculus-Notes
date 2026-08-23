# Chapter 29: Definite Integrals

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Definite integrals, signed area, and properties of integrals.

## Lecture Notes

No separate Day lecture notes are available for this chapter. The content below is synthesized from the textbook section and worked examples.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/rfG8ce4nNh0/default.jpg)](https://www.youtube.com/watch?v=rfG8ce4nNh0)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=rfG8ce4nNh0) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=rfG8ce4nNh0) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=rfG8ce4nNh0) - Full lecture coverage with worked examples

## 5.2 — Definite Integrals

The **definite integral** $\displaystyle\int_a^b f(x)\,dx$ gives the net signed area between the curve $y = f(x)$ and the $x$-axis on $[a, b]$. The word *signed* is critical: regions below the $x$-axis contribute negative area. This limit-based definition was rigorously formalized by Riemann and is the foundation of all integral calculus.

### Key Definitions

**Definition — Definite Integral**

Let $f$ be defined on $[a, b]$. Partition $[a, b]$ into $n$ subintervals of width $\Delta x_i$. Choose any sample point $x_i^*$ in each subinterval. The **definite integral** is the limit:

$$\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*)\,\Delta x_i$$

provided this limit exists. When it does, we say $f$ is **integrable** on $[a, b]$.

**Theorem — Properties of Definite Integrals**

For integrable functions $f$ and $g$ on $[a, b]$ and constant $c$:

- $\displaystyle\int_a^b c\,dx = c(b-a)$
- $\displaystyle\int_a^b [f(x) \pm g(x)]\,dx = \int_a^b f(x)\,dx \pm \int_a^b g(x)\,dx$
- $\displaystyle\int_a^b c \cdot f(x)\,dx = c \int_a^b f(x)\,dx$
- $\displaystyle\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$ (reversing limits)
- $\displaystyle\int_a^b f(x)\,dx + \int_b^c f(x)\,dx = \int_a^c f(x)\,dx$ (additivity)
- If $f(x) \ge 0$ on $[a, b]$, then $\displaystyle\int_a^b f(x)\,dx \ge 0$.

### Worked Example

**Example 5.2.1**

Evaluate $\displaystyle\int_1^3 (2x^3 - x)\,dx$ by finding an antiderivative.

**Step 1:** Find an antiderivative $F(x)$.

$$F(x) = \int (2x^3 - x)\,dx = \frac{2x^4}{4} - \frac{x^2}{2} = \frac{x^4}{2} - \frac{x^2}{2}$$

**Step 2:** Apply the Fundamental Theorem (informally here — formalized in §5.3).

$$\int_1^3 (2x^3 - x)\,dx = F(3) - F(1)$$

**Step 3:** Evaluate at the limits.

$$F(3) = \frac{3^4}{2} - \frac{3^2}{2} = \frac{81}{2} - \frac{9}{2} = \frac{72}{2} = 36$$
$$F(1) = \frac{1^4}{2} - \frac{1^2}{2} = \frac{1}{2} - \frac{1}{2} = 0$$

**Step 4:** Subtract.

$$\int_1^3 (2x^3 - x)\,dx = 36 - 0 = \boxed{36}$$

### Signed Area Interpretation

> **Figure:** Signed Area: Positive Above the Axis, Negative Below

### Practice Problems

- Evaluate $\displaystyle\int_0^2 (4x - x^2)\,dx$. Sketch the region and identify the geometric shape.
- Evaluate $\displaystyle\int_{-1}^1 x^3\,dx$. Why is the answer zero even though $x^3$ is not the zero function?
- If $\displaystyle\int_2^5 f(x)\,dx = 7$ and $\displaystyle\int_5^9 f(x)\,dx = -3$, find $\displaystyle\int_2^9 f(x)\,dx$.

### Study Tips

- "Signed area" is the key phrase: below the axis means negative.
- Always sketch the region before computing — the shape reveals symmetries and cancellation.
- For polynomials, find the antiderivative term by term and evaluate at the limits.
- The additive property $\int_a^b + \int_b^c = \int_a^c$ is useful for breaking complex intervals into pieces.
- If $f$ is odd and the interval is symmetric $[-a, a]$, the integral is zero.

[Previous](chapter-28.html) • [Curriculum](INDEX.md) • [Next](chapter-30.html)

