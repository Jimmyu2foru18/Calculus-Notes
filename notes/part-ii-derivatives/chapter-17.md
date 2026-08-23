# Chapter 17: Derivatives of Inverse Trigonometric Functions — Calculus Foundations
[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Derivatives of arcsin, arccos, arctan, and other inverse trig functions.

## Lecture Notes

### Inverse Trigonometric Derivative Rules

**1.** $f(x) = \sin^{-1}(x) \Rightarrow f'(x) = \dfrac{1}{\sqrt{1 - x^2}}$

**2.** $f(x) = \cos^{-1}(x) \Rightarrow f'(x) = \dfrac{-1}{\sqrt{1 - x^2}}$

**3.** $f(x) = \tan^{-1}(x) \Rightarrow f'(x) = \dfrac{1}{1 + x^2}$

**4.** $f(x) = \cot^{-1}(x) \Rightarrow f'(x) = \dfrac{-1}{1 + x^2}$

**5.** $f(x) = \sec^{-1}(x) \Rightarrow f'(x) = \dfrac{1}{|x|\sqrt{x^2 - 1}}$

**6.** $f(x) = \csc^{-1}(x) \Rightarrow f'(x) = \dfrac{-1}{|x|\sqrt{x^2 - 1}}$

### Worked Examples

**Example 1:** $f(x) = \sin^{-1}(5x^2 + 7x)$

$$f'(x) = \frac{1}{\sqrt{1 - (5x^2 + 7x)^2}} \cdot (10x + 7) = \frac{10x + 7}{\sqrt{1 - (5x^2 + 7x)^2}}$$

**Example 2:** $f(x) = \cot^{-1}(e^x)$

$$f'(x) = \frac{-1}{1 + (e^x)^2} \cdot e^x = \frac{-e^x}{1 + (e^x)^2}$$

**Example 3:** $f(x) = \sec^{-1}(\ln(x))$

$$f'(x) = \frac{1}{|\ln(x)|\sqrt{(\ln(x))^2 - 1}} \cdot \frac{1}{x} = \frac{1}{x|\ln(x)|\sqrt{(\ln(x))^2 - 1}}$$

### Summary Table of Derivatives

| $f(u(x))$ | Derivative: $f'(u(x))$ |
|------------|----------------------|
| $u^n$ | $nu^{n-1} \cdot u'$ |
| $e^u$ | $e^u \cdot u'$ |
| $a^u$ | $a^u \cdot \ln(a) \cdot u'$ |
| $\ln(u)$ | $\frac{u'}{u}$ |
| $\log_a(u)$ | $\frac{u'}{u \ln(a)}$ |
| $\sin(u)$ | $\cos(u) \cdot u'$ |
| $\cos(u)$ | $-\sin(u) \cdot u'$ |
| $\tan(u)$ | $\sec^2(u) \cdot u'$ |
| $\cot(u)$ | $-\csc^2(u) \cdot u'$ |
| $\sec(u)$ | $\sec(u)\tan(u) \cdot u'$ |
| $\csc(u)$ | $-\csc(u)\cot(u) \cdot u'$ |
| $\sin^{-1}(u)$ | $\frac{u'}{\sqrt{1-u^2}}$ |
| $\cos^{-1}(u)$ | $\frac{-u'}{\sqrt{1-u^2}}$ |
| $\tan^{-1}(u)$ | $\frac{u'}{1+u^2}$ |
| $\sec^{-1}(u)$ | $\frac{u'}{|u|\sqrt{u^2-1}}$ |

### Tangent Lines and Normal Lines

A **tangent line** touches a curve at one point. Its slope is $f'(x)$.

A **normal line** is perpendicular to the tangent. Its slope is $-\frac{1}{f'(x)}$.

**Example:** Tangent and normal to $f(x) = 3x^3 + 4x - 5$ at $x = -2$:
- $f(-2) = -37$, point is $(-2, -37)$.
- $f'(x) = 9x^2 + 4$, $f'(-2) = 40$.
- Tangent: $y + 37 = 40(x + 2)$
- Normal: $y + 37 = -\frac{1}{40}(x + 2)$

**Example:** Tangent and normal to $f(x) = 3\sin(x)$ at $x = \frac{\pi}{3}$:
- $f(\frac{\pi}{3}) = \frac{3\sqrt{3}}{2}$
- $f'(x) = 3\cos(x)$, $f'(\frac{\pi}{3}) = \frac{3}{2}$
- Tangent: $y - \frac{3\sqrt{3}}{2} = \frac{3}{2}(x - \frac{\pi}{3})$
- Normal: $y - \frac{3\sqrt{3}}{2} = -\frac{2}{3}(x - \frac{\pi}{3})$

### Horizontal Tangents

To find horizontal tangents, set $f'(x) = 0$ and solve. These may be relative maxima, minima, or plateaus.

**Example:** $f(x) = \frac{1}{3}x^3 + 2x^2 - 12x + 1$
$$f'(x) = x^2 + 4x - 12 = (x+6)(x-2) = 0$$
Horizontal tangents at $x = -6$ and $x = 2$.

## Video Resources

### Core Lecture

[![Core Lecture](https://img.youtube.com/vi/S0_qX4VJhMQ/default.jpg)](https://www.youtube.com/watch?v=S0_qX4VJhMQ)

### Supplementary Videos

- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Full lecture coverage with worked examples

## 3.10 — Derivatives of Inverse Trigonometric Functions

Inverse trigonometric functions — $\arcsin x$, $\arccos x$, $\arctan x$ — undo the trig functions. 
Their derivatives contain radical expressions because the "missing side" of the reference triangle 
appears when we apply the Chain Rule to $\sin(\arcsin x) = x$.


### Key Definitions

| Function | Derivative | Domain |
| --- | --- | --- |
| $\arcsin x$ | $\dfrac{1}{\sqrt{1-x^2}}$ | $-1 < x < 1$ |
| $\arccos x$ | $\dfrac{-1}{\sqrt{1-x^2}}$ | $-1 < x < 1$ |
| $\arctan x$ | $\dfrac{1}{1+x^2}$ | all $x$ |
| $\operatorname{arccot} x$ | $\dfrac{-1}{1+x^2}$ | all $x$ |
| $\operatorname{arcsec} x$ | $\dfrac{1}{|x|\sqrt{x^2-1}}$ | $|x| > 1$ |

### Worked Example

**Example 3.10.1**

Prove that $\dfrac{d}{dx}(\arctan x) = \dfrac{1}{1+x^2}$.

**Step 1:** Let $y = \arctan x$, so $\tan y = x$ and $-\frac{\pi}{2} < y < \frac{\pi}{2}$.

**Step 2:** Differentiate implicitly with respect to $x$:


$$\sec^2 y \cdot \frac{dy}{dx} = 1$$
**Step 3:** Solve for $\dfrac{dy}{dx}$ and use $\sec^2 y = 1 + \tan^2 y = 1 + x^2$:


$$\frac{dy}{dx} = \frac{1}{\sec^2 y} = \frac{1}{1 + \tan^2 y} = \frac{1}{1 + x^2}$$

> **Figure:** Inverse Trig Functions and Their Derivatives

### Practice Problems

- Differentiate $f(x) = \arcsin(3x)$.

- Differentiate $f(x) = \arctan(\sqrt{x})$.

- Differentiate $f(x) = \ln(\arccos x)$.

### Study Tips

- Memorize the derivative of $\arcsin x$ and $\arctan x$; the others are similar or negatives of these.

- The radical $\sqrt{1-x^2}$ in the arcsine derivative comes from the Pythagorean theorem on the reference triangle.

- For $\operatorname{arcsec} x$, remember the absolute value $|x|$ in the denominator — it reflects the two branches.

- Use right triangles to derive these formulas: draw the triangle, label sides, find the missing side, differentiate.

---

[Previous](chapter-16.html) • [Curriculum](INDEX.md) • [Next](chapter-18.html)
