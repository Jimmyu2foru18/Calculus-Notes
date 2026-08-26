# Chapter 24: Linear Approximation and Differentials

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Linear approximation, differentials, and error estimation.

## Lecture Notes

### Linear Approximation

If $f$ is differentiable at $a$, then for $x$ near $a$:

$$f(x) \approx L(x) = f(a) + f'(a)(x - a)$$

The line $y = L(x)$ is the **tangent line approximation** to $f$ at $a$.
Linear approximation works best when the change in $x$ is small.

### Differentials

Let $y = f(x)$ be differentiable. The **differential** $dy$ is:

$$dy = f'(x)\,dx$$

If $\Delta x$ is a small change in $x$, then the actual change $\Delta y$ satisfies:

$$\Delta y \approx dy = f'(x)\,\Delta x$$

The **error** in the linear approximation is $E = \Delta y - dy$.

### Error Estimation

- **Absolute error:** $E = \Delta y - dy$
- **Relative error:** $\dfrac{E}{\Delta y}$
- **Percentage error:** $\dfrac{E}{\Delta y} \times 100\%$

### Worked Examples

**Example 1:** Use linear approximation to estimate $\sqrt{17}$.

Choose $f(x) = \sqrt{x}$ and $a = 16$ (a nearby perfect square).

$$f(16) = 4, \quad f'(x) = \frac{1}{2\sqrt{x}}, \quad f'(16) = \frac{1}{8}$$

$$\sqrt{17} \approx f(16) + f'(16)(17 - 16) = 4 + \frac{1}{8}(1) = 4.125$$

Actual: $4.1231\ldots$; error $\approx 0.002$.

**Example 2:** A cube has side $10$ cm measured with possible error $0.05$ cm. 
Estimate the error in volume.

$V = s^3$, so $dV = 3s^2\,ds$. At $s = 10$ and $ds = 0.05$:

$$dV = 3(10)^2(0.05) = 15 \text{ cm}^3$$

The volume error is approximately $15$ cm$^3$.

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
