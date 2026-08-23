# Chapter 31: Working with Integrals

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Evaluation rules, symmetry, and integration techniques overview.

## Lecture Notes

No separate Day lecture notes are available for this chapter. The content below is synthesized from the textbook section and worked examples.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/rfG8ce4nNh0/default.jpg)](https://www.youtube.com/watch?v=rfG8ce4nNh0)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=rfG8ce4nNh0) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=rfG8ce4nNh0) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=rfG8ce4nNh0) - Full lecture coverage with worked examples

## 5.4 — Working with Integrals

With the Fundamental Theorem in hand, evaluating definite integrals becomes mechanical. This section covers the essential **evaluation rules**, **absolute value integrals**, **symmetry properties**, and a menu of **integration techniques** for non-elementary integrands. Mastering these patterns turns integration from a guessing game into a systematic toolbox.

### Key Theorems

### Key Definitions

**Theorem — Evaluation Rule**

If $F$ is an antiderivative of $f$ on $[a, b]$:

$$\int_a^b f(x)\,dx = F(b) - F(a) = \left.F(x)\right|_a^b$$

### Key Definitions

**Theorem — Odd and Even Function Integrals**

Let $f$ be integrable on $[-a, a]$:

- If $f$ is **even** ($f(-x) = f(x)$): $\displaystyle\int_{-a}^a f(x)\,dx = 2\int_0^a f(x)\,dx$.
- If $f$ is **odd** ($f(-x) = -f(x)$): $\displaystyle\int_{-a}^a f(x)\,dx = 0$.

**Theorem — Integration by Substitution (Indefinite Form)**

If $u = g(x)$ is a differentiable function and $f$ is continuous on the range of $g$, then substituting $u = g(x)$ and $du = g'(x)\,dx$ transforms:

$$\int f(g(x)) \cdot g'(x)\,dx = \int f(u)\,du = F(u) + C = F(g(x)) + C$$

For definite integrals with limits $a$ and $b$:

$$\int_a^b f(g(x)) \cdot g'(x)\,dx = \int_{g(a)}^{g(b)} f(u)\,du$$

### Worked Example

**Example 5.4.1**

Evaluate $\displaystyle\int_0^1 2x\sqrt{x^2+1}\,dx$ using $u$-substitution.

**Step 1:** Choose $u = x^2 + 1$ so that the radical becomes $\sqrt{u}$.

**Step 2:** Compute $du$ and change the limits.

$$du = 2x\,dx$$
When $x = 0$: $u = 0^2 + 1 = 1$
When $x = 1$: $u = 1^2 + 1 = 2$

**Step 3:** Rewrite the integral entirely in $u$.

$$\int_0^1 2x\sqrt{x^2+1}\,dx = \int_1^2 \sqrt{u}\,du$$

**Step 4:** Evaluate the simpler integral.

$$\int_1^2 u^{1/2}\,du = \left[\frac{2}{3}u^{3/2}\right]_1^2 = \frac{2}{3}(2^{3/2} - 1^{3/2})$$
$$= \frac{2}{3}(2\sqrt{2} - 1) = \boxed{\frac{4\sqrt{2} - 2}{3}}$$

### Integration Techniques Overview

> **Figure:** Decision Tree for Integration Techniques

### Practice Problems

- Evaluate $\displaystyle\int_1^2 \frac{x}{x^2+1}\,dx$ using substitution.
- Use symmetry to evaluate $\displaystyle\int_{-2}^2 (x^4 + \cos x)\,dx$ without computing antiderivatives.
- Evaluate $\displaystyle\int_0^{\pi/4} \sec^2 x\,dx$ and explain the connection to the tangent function.

### Study Tips

- Always scan the integrand for a function-and-its-derivative pair before reaching for advanced techniques.
- When $u$-substitution works, it turns a hard integral into a trivial one — look for the "inside" function.
- Symmetry (even/odd) can reduce a difficult integral to zero or to twice a simpler half-interval.
- For definite integrals, change the limits when substituting — it avoids the back-substitution step.
- Keep a "cheat sheet" of standard forms: $\int \sec^2 x = \tan x$, $\int \csc x\cot x = -\csc x$, etc.

[Previous](chapter-30.html) • [Curriculum](INDEX.md) • [Next](chapter-32.html)

