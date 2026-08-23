# Chapter 24: Linear Approximation and Differentials

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Linear approximation, differentials, and error estimation.

## Lecture Notes

### Definite Integral Properties

$$\int_a^a f(x)\,dx = 0$$

$$\int_b^a f(x)\,dx = -\int_a^b f(x)\,dx$$

$$\int_a^b f(x)\,dx + \int_b^c f(x)\,dx = \int_a^c f(x)\,dx$$

### Fundamental Theorem of Calculus

**Part I:** $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$ where $F'(x) = f(x)$.

**Part II:** If $g(x) = \int_c^x f(t)\,dt$, then $g'(x) = f(x)$.

**Example:** $\displaystyle\int_1^5 2x^3\,dx = \frac{1}{2}x^4\bigg|_1^5 = \frac{625}{2} - \frac{1}{2} = 312$.

### Average Value of a Function

For $f$ continuous on $[a, b]$:

$$f_{\text{avg}} = \frac{1}{b - a}\int_a^b f(x)\,dx$$

**Example:** $f(x) = x^3$ on $[1, 4]$:
$$f_{\text{avg}} = \frac{1}{3}\cdot\frac{x^4}{4}\bigg|_1^4 = \frac{255}{12}$$

### Mean Value Theorem for Integrals

If $f$ is continuous on $[a, b]$, there exists $c \in [a, b]$ such that:

$$f(c) = \frac{1}{b - a}\int_a^b f(x)\,dx$$

### Area Between Two Curves

For $g(x) \ge f(x)$ on $[a, b]$:

$$A = \int_a^b [g(x) - f(x)]\,dx$$

**Example:** Area between $f(x) = x^2$ and $g(x) = x^3$ on $[0, 1]$:
$$A = \int_0^1 (x^2 - x^3)\,dx = \left[\frac{x^3}{3} - \frac{x^4}{4}\right]_0^1 = \frac{1}{3} - \frac{1}{4} = \frac{1}{12}$$

### Mean Value Theorem for Derivatives

If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, there exists $c \in (a, b)$ such that:

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

**Example:** $f(x) = 5x^2 + 10x - 3$ on $[2, 4]$:
$$\text{Slope of secant} = \frac{f(4) - f(2)}{4 - 2} = \frac{117 - 37}{2} = 40$$
$$f'(x) = 10x + 10 = 40 \Rightarrow x = 3$$

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/9vKqVkMQHKk/default.jpg)](https://www.youtube.com/watch?v=9vKqVkMQHKk)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=9vKqVkMQHKk) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=9vKqVkMQHKk) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=9vKqVkMQHKk) - Full lecture coverage with worked examples

## 4.5 — Linear Approximation and Differentials

Calculus gives us two complementary ways to approximate function values near a known point. **Linear approximation** uses the tangent line at $a$ to estimate $f(x)$ nearby. **Differentials** formalize the error in that approximation, writing $\Delta y \approx dy = f'(a)\,dx$.

### Key Definitions

**Definition — Linear Approximation**

If $f$ is differentiable at $a$, then for $x$ near $a$:

$$f(x) \approx L(x) = f(a) + f'(a)(x - a)$$

The line $y = L(x)$ is the **tangent line approximation** to $f$ at $a$.

### Key Definitions

**Definition — Differential**

Let $y = f(x)$ be differentiable. The **differential** $dy$ is:

$$dy = f'(x)\,dx$$

If $\Delta x$ is a small change in $x$, then the actual change $\Delta y$ satisfies:

$$\Delta y \approx dy = f'(x)\,\Delta x$$

The **error** in the linear approximation is $E = \Delta y - dy$.

### Worked Example

**Example 4.5.1**

Use linear approximation to estimate $\sqrt{17}$.

**Step 1:** Choose $f(x) = \sqrt{x}$ and a nearby perfect square $a = 16$.

$$f(16) = 4, \quad f'(x) = \frac{1}{2\sqrt{x}}, \quad f'(16) = \frac{1}{8}$$

**Step 2:** Apply the linear approximation formula with $\Delta x = 1$.

$$\sqrt{17} \approx f(16) + f'(16)(17 - 16) = 4 + \frac{1}{8}(1) = 4.125$$

**Answer:** $\sqrt{17} \approx \boxed{4.125}$ (actual: $4.1231\ldots$; error $\approx 0.002$).

> **Figure:** Linear Approximation: The Tangent Line Near $x = a$

### Practice Problems

- Use linear approximation to estimate $\sqrt[3]{28}$.
- Estimate $\cos(31^\circ)$ using a linear approximation near $x = \pi/6$ (convert to radians first).
- The side of a cube is measured as $10$ cm with a possible error of $0.05$ cm. Use differentials to estimate the error in the computed volume.

### Study Tips

- Pick $a$ to be a value where $f(a)$ is easy to compute exactly.
- Linear approximation works best when $|\Delta x|$ is small — the tangent line is only locally accurate.
- Differentials measure **absolute** error; for **relative** error, divide by the original value.
- Remember: $\Delta y = f(x+\Delta x) - f(x)$, while $dy = f'(x)\,dx$. They are approximately equal but not identical.

[Previous](chapter-23.html) • [Curriculum](INDEX.md) • [Next](chapter-25.html)
