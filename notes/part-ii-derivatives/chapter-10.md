# Chapter 10: Rules of Differentiation

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Power rule, constant rules, and the basic differentiation shortcuts.

## Lecture Notes

### Summary of Differentiation Rules

**Constant Rule:** $\frac{d}{dx}(c) = 0$

**Power Rule:** $\frac{d}{dx}(x^n) = nx^{n-1}$, $n$ is a real number and $x > 0$.

**Constant Multiple Rule:** $\frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x)$

**Sum and Difference Rules:** $\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$

**Product Rule:** $\frac{d}{dx}[f(x) \cdot g(x)] = f'(x) \cdot g(x) + f(x) \cdot g'(x)$

**Quotient Rule:** $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{g(x)f'(x) - f(x)g'(x)}{[g(x)]^2}$

**Chain Rule:** $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$

### Worked Examples Using Rules

**Power Rule Examples:**
- $f(x) = x \Rightarrow f'(x) = 1$
- $f(x) = x^2 \Rightarrow f'(x) = 2x$
- $f(x) = x^3 \Rightarrow f'(x) = 3x^2$
- $f(x) = x^4 \Rightarrow f'(x) = 4x^3$

**Combining Rules:**
- $f(x) = 3x^2 + 5x - 1 \Rightarrow f'(x) = 6x + 5$
- $f(x) = 3x^5 - \sqrt{x} = 3x^5 - x^{1/2} \Rightarrow f'(x) = 15x^4 - \frac{1}{2}x^{-1/2} = 15x^4 - \frac{1}{2\sqrt{x}}$

### Derivatives of Exponential and Logarithmic Functions

**1.** If $f(x) = e^x$, then $f'(x) = e^x$.
- $f(x) = e^{x^2} \Rightarrow f'(x) = e^{x^2} \cdot 2x$
- $f(x) = e^{3x^3 - 7x} \Rightarrow f'(x) = e^{3x^3 - 7x} \cdot (9x^2 - 7)$

**2.** If $f(x) = a^x$ where $a > 0$:
$$f'(x) = a^x \cdot \ln(a)$$
- $f(x) = 2^x \Rightarrow f'(x) = 2^x \ln(2)$
- $f(x) = 5^{x^2 + 4} \Rightarrow f'(x) = 5^{x^2 + 4} \ln(5) \cdot (2x + 4)$

**3.** If $f(x) = \ln(x)$, then $f'(x) = \frac{1}{x}$.
- $f(x) = \ln(3x + 1) \Rightarrow f'(x) = \frac{3}{3x + 1}$
- $f(x) = \ln(3x^2 + 4x) \Rightarrow f'(x) = \frac{6x + 4}{3x^2 + 4x}$

**4.** If $f(x) = \log_a(x)$:
$$f'(x) = \frac{1}{x \ln(a)}$$
- $f(x) = \log_3(x) \Rightarrow f'(x) = \frac{1}{x \ln(3)}$

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/S0_qX4VJhMQ/default.jpg)](https://www.youtube.com/watch?v=S0_qX4VJhMQ)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Full lecture coverage with worked examples

## 3.3 — Rules of Differentiation

Computing derivatives from the limit definition every time is tedious. 
**Differentiation rules** are proven shortcuts that let us compute derivatives mechanically.
Mastering these rules is essential — they are the "grammar" of calculus.

### Key Theorems

#### Theorem — Power Rule

For any real number $n$ and $x > 0$:

$$\frac{d}{dx}\left[x^n\right] = n x^{n-1}$$

*Proof sketch:* Expand $(x+h)^n$ with the binomial theorem, subtract $x^n$, divide by $h$, and let $h \to 0$. All terms containing $h$ vanish except $n x^{n-1}$.

#### Theorem — Constant Multiple and Sum/Difference Rules

If $c$ is a constant and $f, g$ are differentiable:

$$\frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x)$$
$$\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$$

#### Theorem — Constant Rule

If $c$ is any real constant:

$$\frac{d}{dx}[c] = 0$$

### Worked Example — Applying Multiple Rules

**Example 3.3.1**

Differentiate $f(x) = 3x^5 - 4\sqrt{x} + \frac{7}{x^2}$.

**Step 1:** Rewrite all terms using rational exponents.

$$f(x) = 3x^5 - 4x^{1/2} + 7x^{-2}$$

**Step 2:** Apply the Power Rule term-by-term.

$$f'(x) = 3 \cdot 5x^4 - 4 \cdot \tfrac{1}{2}x^{-1/2} + 7 \cdot (-2)x^{-3}$$

**Step 3:** Simplify and rewrite with radicals.

$$f'(x) = 15x^4 - \frac{2}{\sqrt{x}} - \frac{14}{x^3}$$

### Power Rule Visualization

> **Figure:** Figure 3.3 — How the Power Rule Affects the Graph

Figure 3.3: The derivative of $x^2$ is $2x$. Where the original curve is steep, $f'$ is large; where it flattens, $f'$ approaches zero.

### Practice Problems

1. Differentiate $f(x) = x^7 - 3x^4 + x^2 - 5$.
2. Differentiate $f(x) = \sqrt[3]{x^2} + 4x^{-3}$.
3. Find the equation of the tangent line to $y = x^2$ at $x = 3$.

---

### Study Tips

- Convert roots and reciprocals to rational exponents before differentiating.
- The Power Rule applies *term by term* — never distribute the derivative across a sum incorrectly.
- Write $f'(x)$ in the same form as the original problem unless asked otherwise (e.g., keep radicals if the problem has them).
- Check units: if $f(x)$ is in meters, $f'(x)$ is in meters per unit of $x$.

[Previous](chapter-09.html) • [Curriculum](INDEX.md) • [Next](chapter-11.html)