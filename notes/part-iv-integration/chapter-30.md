# Chapter 30: Fundamental Theorem of Calculus

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Fundamental Theorem of Calculus: connecting derivatives and integrals.

## Lecture Notes

No separate Day lecture notes are available for this chapter. The content below is synthesized from the textbook section and worked examples.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/rfG8ce4nNh0/default.jpg)](https://www.youtube.com/watch?v=rfG8ce4nNh0)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=rfG8ce4nNh0) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=rfG8ce4nNh0) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=rfG8ce4nNh0) - Full lecture coverage with worked examples

## 5.3 — Fundamental Theorem of Calculus

The **Fundamental Theorem of Calculus (FTC)** is the most important result in all of calculus. It creates a direct bridge between the two central operations: **differentiation** and **integration**. In simple terms, FTC says that finding the accumulated area under a curve can be done by evaluating an antiderivative at the endpoints — no Riemann sums required.

### Key Theorems

### Key Definitions

**Theorem — Fundamental Theorem of Calculus (Part 1)**

If $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$ on $[a, b]$, then:

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

We write $F(b) - F(a) = \left.F(x)\right|_a^b$ for brevity.

### Key Definitions

**Theorem — Fundamental Theorem of Calculus (Part 2)**

If $f$ is continuous on $[a, b]$, define the **accumulation function**:

$$A(x) = \int_a^x f(t)\,dt$$

Then $A$ is differentiable on $(a, b)$ and $A'(x) = f(x)$. In other words, **differentiation undoes integration**.

### Worked Example

**Example 5.3.1**

Use FTC to evaluate $\displaystyle\int_0^{\pi} \sin x\,dx$.

**Step 1:** Find an antiderivative of $\sin x$. We know $\dfrac{d}{dx}(-\cos x) = \sin x$.

**Step 2:** Apply the Fundamental Theorem.

$$\int_0^{\pi} \sin x\,dx = \left[-\cos x\right]_0^{\pi} = -\cos(\pi) - (-\cos 0)$$

**Step 3:** Evaluate using unit circle values.

$$\cos(\pi) = -1, \quad \cos(0) = 1$$
$$\int_0^{\pi} \sin x\,dx = -(-1) - (-1) = 1 + 1 = \boxed{2}$$

**Interpretation:** The area of one full arch of the sine wave from $0$ to $\pi$ is exactly 2.

### FTC Area Accumulation

> **Figure:** FTC Part 2: The Accumulation Function $A(x)$

### Practice Problems

- Evaluate $\displaystyle\int_0^1 (3x^2 + 2x)\,dx$ using FTC.
- Evaluate $\displaystyle\int_{-\pi/2}^{\pi/2} \cos x\,dx$ and interpret geometrically.
- Let $A(x) = \int_0^x e^{-t^2}\,dt$. Find $A'(2)$.

### Study Tips

- FTC Part 1 is a computation tool: find any antiderivative and evaluate at the limits.
- FTC Part 2 is a conceptual tool: the derivative of an area function is the height of the curve.
- Memorize the key antiderivatives (sine, cosine, powers, exponential) so FTC evaluation is automatic.
- For $\int_a^b f(x)\,dx$, the variable of integration is a dummy variable — $t$ or $u$ works just as well.
- The "rate of accumulation" interpretation of FTC Part 2 connects integrals to real-world problems.

[Previous](chapter-29.html) • [Curriculum](INDEX.md) • [Next](chapter-31.html)

