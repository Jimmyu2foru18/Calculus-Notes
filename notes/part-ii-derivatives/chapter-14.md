# Chapter 14: The Chain Rule — Calculus Foundations
[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> The Chain Rule for differentiating composite functions.

## Lecture Notes

### Higher-Order Derivatives

The **second derivative** $f''(x)$ is the derivative of $f'(x)$. It measures how the rate of change itself is changing.

**Example 1:** $f(x) = 3x^5 + 4x^3 - 2x + 1$
- $f'(x) = 15x^4 + 12x^2 - 2$
- $f''(x) = 60x^3 + 24x$
- $f'''(x) = 180x^2 + 24$

**Example 2 (Product Rule with higher order):** $f(x) = 5x^3 e^x$
$$f'(x) = 5x^3 e^x + e^x \cdot 15x^2$$
$$f''(x) = 5x^3 e^x + e^x \cdot 15x^2 + e^x \cdot 30x + 15x^2 e^x$$

### Chain Rule Examples

**Basic chain rule:**
- $f(x) = \sqrt{3x - 4} \Rightarrow f'(x) = \frac{3}{2\sqrt{3x - 4}}$
- $f(x) = \frac{5}{4x + 1} \Rightarrow f'(x) = \frac{-20}{(4x + 1)^2}$

**Example:** $f(x) = (3x^4 + 9x^2)^{10}$

$$f'(x) = 10(3x^4 + 9x^2)^9 \cdot (12x^3 + 18x)$$

**Example:** $f(x) = \sqrt[4]{4x^3 - 10x} = (4x^3 - 10x)^{1/3}$

$$f'(x) = \frac{1}{3}(4x^3 - 10x)^{-2/3} \cdot (12x^2 - 10)$$

**Example (Chain with quotient inside):** $f(x) = \left(\frac{3x - 5}{12x + 7}\right)^9$

$$f'(x) = 9\left(\frac{3x - 5}{12x + 7}\right)^8 \cdot \frac{(12x + 7)(3) - (3x - 5)(12)}{(12x + 7)^2}$$

**Example (Product + Chain):** $f(x) = (5x - 3)^4(x^2 + 10x)$

$$f'(x) = (5x - 3)^4(2x + 10) + (x^2 + 10x) \cdot 4(5x - 3)^3 \cdot 5$$

### Implicit Differentiation

When $y$ cannot be isolated, differentiate the equation as-is, treating $y$ as a function of $x$.

**Notations:**
- Newtonian: $f'(x)$ for $f(x)$, $y'$ for $y$.
- Leibniz: $\frac{dy}{dx}$ for derivative of $y$ w.r.t. $x$.
- Operator: $\frac{d}{dx}(\text{something})$.

**Example:** $3x^2 + y^2 = x^3 - 7y$

Differentiate both sides:
$$6x + 2y\frac{dy}{dx} = 3x^2 - 7\frac{dy}{dx}$$

Gather $\frac{dy}{dx}$ terms:
$$2y\frac{dy}{dx} + 7\frac{dy}{dx} = 3x^2 - 6x$$
$$\frac{dy}{dx}(2y + 7) = 3x^2 - 6x$$
$$\frac{dy}{dx} = \frac{3x^2 - 6x}{2y + 7}$$

**Key:** Use the Chain Rule for every term containing $y$ (e.g., $\frac{d}{dx}(y^2) = 2y\frac{dy}{dx}$).

## Video Resources

### Core Lecture

[![Core Lecture](https://img.youtube.com/vi/YG15m2VwSjA/default.jpg)](https://www.youtube.com/watch?v=YG15m2VwSjA)

### Supplementary Videos

- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=YG15m2VwSjA) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=YG15m2VwSjA) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=YG15m2VwSjA) - Full lecture coverage with worked examples

## 3.7 — The Chain Rule

Many functions are built by **composition**: one function applied inside another. 
The Chain Rule tells us how to differentiate such "function-within-a-function" expressions. 
It is arguably the most powerful differentiation rule and the one most often misapplied by beginners.



### Key Theorem

#### Theorem — Chain Rule
If $f$ and $g$ are differentiable and $h(x) = f(g(x))$, then:


$$h'(x) = f'(g(x)) \cdot g'(x)$$
In Leibniz notation, if $y = f(u)$ and $u = g(x)$:


$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$
*Memory aid:* "Derivative of the outside, leave the inside alone, times derivative of the inside."

### Worked Example

**Example 3.7.1**

Differentiate $f(x) = (3x^2 + 1)^5$.

**Step 1:** Identify the outer function $f(u) = u^5$ and inner function $u = g(x) = 3x^2 + 1$.

**Step 2:** Differentiate the outside: $f'(u) = 5u^4$.

**Step 3:** Differentiate the inside: $g'(x) = 6x$.

**Step 4:** Multiply and substitute back:


$$f'(x) = 5(3x^2 + 1)^4 \cdot 6x = 30x(3x^2 + 1)^4$$

> **Figure:** The Chain Rule as Function Composition

### Practice Problems

- Differentiate $f(x) = \sin(x^3 + 2x)$.

- Differentiate $f(x) = e^{x^2} \ln(x)$ (use both Chain Rule and Product Rule).

- Find the slope of the tangent line to $y = \sqrt{4x+1}$ at $x = 2$.

### Study Tips

- Work from **outside in**: identify the outermost operation first.

- Use parentheses liberally: $(3x^2+1)^4$ means the whole inner expression is raised to the 4th.

- The Chain Rule appears in disguise whenever you see a power, exponential, trig, or log of a complicated expression.

- Check your work: if $f(x) = (2x+1)^3$, then $f'(x) = 3(2x+1)^2 \cdot 2 = 6(2x+1)^2$ — the inner derivative must appear.

---

[Previous](chapter-13.html) • [Curriculum](INDEX.md) • [Next](chapter-15.html)
