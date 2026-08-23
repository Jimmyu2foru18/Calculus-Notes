# Chapter 27: Antiderivatives

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Antiderivatives, indefinite integration, and the constant of integration.

## Lecture Notes

No separate Day lecture notes are available for this chapter. The content below is synthesized from the textbook section and worked examples.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/rfG8ce4nNh0/default.jpg)](https://www.youtube.com/watch?v=rfG8ce4nNh0)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=rfG8ce4nNh0) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=rfG8ce4nNh0) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=rfG8ce4nNh0) - Full lecture coverage with worked examples

## 4.9 — Antiderivatives

Differentiation takes a function and produces its slope function. **Antidifferentiation** (or **indefinite integration**) reverses this process: given a rate of change $f'(x)$, we search for a function $F(x)$ whose derivative is $f'(x)$. Because many functions share the same derivative, the answer is always a **family** of curves, differing by an arbitrary constant $C$.

### Key Definitions

**Definition — Antiderivative**

A function $F$ is an **antiderivative** of $f$ on an interval $I$ if $F'(x) = f(x)$ for every $x \in I$. If $F$ is any antiderivative of $f$, then the most general antiderivative is $F(x) + C$, where $C$ is an arbitrary constant.

The notation for the general antiderivative is:

$$\int f(x)\,dx = F(x) + C$$

The symbol $\displaystyle\int$ is called the **integral sign**, $f(x)$ is the **integrand**, and $C$ is the **constant of integration**.

**Theorem — Basic Integration Rules**

The following rules are the direct inverses of the differentiation rules:

Function | Antiderivative
$x^n$ ($n \neq -1$) | $\dfrac{x^{n+1}}{n+1} + C$
$x^{-1} = \dfrac{1}{x}$ | $\ln|x| + C$
$e^x$ | $e^x + C$
$a^x$ ($a > 0$) | $\dfrac{a^x}{\ln a} + C$
$\cos x$ | $\sin x + C$
$\sin x$ | $-\cos x + C$
$\sec^2 x$ | $\tan x + C$
$\csc x \cot x$ | $-\csc x + C$

### Worked Example

**Example 4.9.1**

Find the most general antiderivative of $f(x) = 3x^2 - 4x + 5$.

**Step 1:** Apply the Power Rule term by term (reverse of the differentiation Power Rule).

$$\int (3x^2 - 4x + 5)\,dx = 3 \cdot \frac{x^3}{3} - 4 \cdot \frac{x^2}{2} + 5x + C$$

**Step 2:** Simplify each coefficient.

$$\int (3x^2 - 4x + 5)\,dx = x^3 - 2x^2 + 5x + C$$

**Step 3:** Verify by differentiating.

$$\frac{d}{dx}(x^3 - 2x^2 + 5x + C) = 3x^2 - 4x + 5 = f(x)$$

**Answer:** $F(x) = \boxed{x^3 - 2x^2 + 5x + C}$

### Family of Antiderivative Curves

> **Figure:** A Family of Antiderivative Curves for $f(x) = 2x$

### Practice Problems

- Find the most general antiderivative of $f(x) = 6x^2 - 8x + 3$.
- Find an antiderivative of $f(x) = \dfrac{1}{x} + e^x$.
- If $F'(x) = \cos x$ and $F(0) = 2$, find $F(x)$.

### Study Tips

- Always add $+C$ to an indefinite integral — omitting it loses half the answer.
- The Power Rule in reverse: increase the exponent by 1, divide by the new exponent.
- For $1/x$, the antiderivative is $\ln|x| + C$, not just $\ln x$ (domain matters for negative $x$).
- Verify your answer by differentiating it; you should recover the original integrand.
- Sketch a few members of the family with different $C$ values to build geometric intuition.

[Previous](chapter-26.html) • [Curriculum](INDEX.md) • [Next](chapter-28.html)

