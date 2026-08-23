# Chapter 32: Substitution Rule

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> u-Substitution: the most important integration technique.

## Lecture Notes

No separate Day lecture notes are available for this chapter. The content below is synthesized from the textbook section and worked examples.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/rfG8ce4nNh0/default.jpg)](https://www.youtube.com/watch?v=rfG8ce4nNh0)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=rfG8ce4nNh0) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=rfG8ce4nNh0) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=rfG8ce4nNh0) - Full lecture coverage with worked examples

## 5.5 — Substitution Rule

The **Substitution Rule** is the single most important integration technique. It is the integral counterpart of the Chain Rule: just as the Chain Rule handles derivatives of composed functions, the Substitution Rule handles integrals where the integrand contains a function composed with another, multiplied by (or accompanied by) the derivative of the inner function. Mastering $u$-substitution unlocks the majority of standard integrals.

### Key Theorem

**Theorem — Substitution Rule (Indefinite)**

If $u = g(x)$ is differentiable and $f$ is continuous on the range of $g$, then:

$$\int f(g(x)) \cdot g'(x)\,dx = \int f(u)\,du$$

In Leibniz notation, if $u = g(x)$, then $du = g'(x)\,dx$, and the integral transforms as:

$$\int f(g(x))\,g'(x)\,dx = \int f(u)\,du$$

**Memory aid:** "The derivative of the inside must appear (up to a constant factor) for substitution to work."

**Theorem — Substitution Rule (Definite)**

For a continuous integrand on $[a, b]$ with $u = g(x)$ monotone:

$$\int_a^b f(g(x)) \cdot g'(x)\,dx = \int_{g(a)}^{g(b)} f(u)\,du$$

This is more efficient for definite integrals because it eliminates the need to substitute back.

### Worked Example

**Example 5.5.1**

Evaluate $\displaystyle\int (3x^2 + 2x)(x^3 + x^2)^4\,dx$.

**Step 1:** Identify the inner function $u = x^3 + x^2$ (raised to the 4th power).

**Step 2:** Compute $du$:

$$\frac{du}{dx} = 3x^2 + 2x \quad \Rightarrow \quad du = (3x^2 + 2x)\,dx$$

**Step 3:** Substitute directly — the factor $(3x^2 + 2x)\,dx$ is exactly $du$.

$$\int (3x^2 + 2x)(x^3 + x^2)^4\,dx = \int u^4\,du$$

**Step 4:** Integrate in $u$:

$$\int u^4\,du = \frac{u^5}{5} + C$$

**Step 5:** Substitute back $u = x^3 + x^2$:

$$\boxed{\int (3x^2 + 2x)(x^3 + x^2)^4\,dx = \frac{(x^3 + x^2)^5}{5} + C}$$

### Worked Example

**Example 5.5.2**

Evaluate $\displaystyle\int \cos(2x)\,e^{\sin(2x)}\,dx$.

**Step 1:** Set $u = \sin(2x)$. The outer function $e^u$ suggests the substitution.

**Step 2:** Compute $du$ using the Chain Rule:

$$\frac{du}{dx} = 2\cos(2x) \quad \Rightarrow \quad du = 2\cos(2x)\,dx$$

**Step 3:** Solve for $\cos(2x)\,dx$:

$$\cos(2x)\,dx = \frac{du}{2}$$

**Step 4:** Substitute into the integral:

$$\int \cos(2x)\,e^{\sin(2x)}\,dx = \int e^u \cdot \frac{du}{2} = \frac{1}{2}\int e^u\,du$$

**Step 5:** Integrate and substitute back:

$$= \frac{1}{2}e^u + C = \boxed{\frac{1}{2}e^{\sin(2x)} + C}$$

### u-Substitution Visualization

> **Figure:** Mapping an Integral Through u-Substitution

### Practice Problems

- Evaluate $\displaystyle\int x\cos(x^2)\,dx$.
- Evaluate $\displaystyle\int \frac{\ln x}{x}\,dx$ using $u = \ln x$.
- Evaluate $\displaystyle\int_0^1 4x(x^2+1)^3\,dx$ by changing limits.
- Evaluate $\displaystyle\int \tan x\,dx$ by rewriting as $\sin x / \cos x$ and substituting.

### Study Tips

- The Substitution Rule is the integral version of the Chain Rule — look for "function inside function" patterns.
- The inner function's derivative doesn't always appear exactly; a constant multiple is fine — adjust with a compensating factor.
- For definite integrals, always change the limits to the $u$-variable — it's faster and less error-prone.
- If your first $u$ choice doesn't simplify the integral, try a different inner function.
- Common inner functions: polynomials inside powers, trigonometric arguments, logarithmic arguments, and exponential exponents.

[Previous](chapter-31.html) • [Curriculum](INDEX.md) • [Next](chapter-33.html)

