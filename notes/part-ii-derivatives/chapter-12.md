# Chapter 12: Derivatives of Trigonometric Functions — Calculus Foundations
[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Derivatives of sine, cosine, tangent, and the other trig functions.

## Lecture Notes

### Derivatives of Trigonometric Functions

Assuming $x$ is measured in **radians**:

| Function | Derivative |
|----------|-----------|
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\cot x$ | $-\csc^2 x$ |
| $\sec x$ | $\sec x \tan x$ |
| $\csc x$ | $-\csc x \cot x$ |

These formulas rely on the squeeze theorem and two key limits: $\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$ and $\lim_{\theta \to 0} \frac{1 - \cos \theta}{\theta} = 0$.

**Important:** These formulas are valid only in radians. In degrees, the Chain Rule introduces an extra factor of $\pi/180$.

### Worked Examples

**Example:** $f(x) = \sin(4x) \Rightarrow f'(x) = 4\cos(4x)$

**Example:** $f(x) = \sec(3x + 4) \Rightarrow f'(x) = \sec(3x + 4)\tan(3x + 4) \cdot 3$

**Example:** $f(x) = (4x^2 + 5)\cos(2x)$ (Product Rule)

$$f'(x) = (4x^2 + 5)(-\sin(2x) \cdot 2) + (\cos(2x))(8x)$$

**Example:** $f(x) = 3^{x^2+1}\tan(5x + 4)$ (Product + Chain)

$$f'(x) = 3^{x^2+1}\ln(3)(2x) \cdot \tan(5x+4) + 3^{x^2+1} \cdot \sec^2(5x+4) \cdot 5$$

**Example:** $f(x) = \frac{\csc(4x)}{e^{5x^2}}$ (Quotient + Chain)

$$f'(x) = \frac{e^{5x^2}(-\csc(4x)\cot(4x) \cdot 4) - \csc(4x)(e^{5x^2} \cdot 10x)}{(e^{5x^2})^2}$$

**Example:** $f(x) = \sqrt{\ln(\sin(e^{3x}))}$

$$f'(x) = \frac{1}{2}(\ln(\sin(e^{3x})))^{-1/2} \cdot \frac{1}{\sin(e^{3x})} \cdot \cos(e^{3x}) \cdot e^{3x} \cdot 3$$

### Derivatives as Rates of Change

The derivative $f'(x)$ is the **instantaneous rate of change**. Its sign tells us the direction of $f$:
- $f'(x) > 0$: $f$ is increasing.
- $f'(x) < 0$: $f$ is decreasing.
- $f'(x) = 0$: horizontal tangent (flat).

**Horizontal tangents** occur at relative maxima, minima, or plateaus. To find them, set $f'(x) = 0$ and solve.

**Example:** For $f(x) = \frac{1}{3}x^3 + 2x^2 - 12x + 1$:
$$f'(x) = x^2 + 4x - 12 = (x+6)(x-2) = 0$$
Horizontal tangents at $x = -6$ and $x = 2$.

### Related Rates

Related rates problems connect rates of change of linked quantities via differentiation with respect to time $t$.

**General strategy:**
1. Draw a diagram and label all changing quantities with variables.
2. Write an equation relating the variables.
3. Differentiate implicitly with respect to $t$.
4. Substitute known values after differentiating, then solve.

**Example 1 (Circle area):** Radius expanding at $2$ cm/s. How fast is area changing when $r = 10$ cm?

$$A = \pi r^2 \Rightarrow \frac{dA}{dt} = 2\pi r \frac{dr}{dt} = 2\pi(10)(2) = 40\pi \text{ cm}^2/\text{s}$$

**Example 2 (Ladder):** 13-foot ladder, base pulled at $10$ ft/s. How fast is top sliding when base is 5 ft from wall?

$$x^2 + y^2 = 169 \Rightarrow 2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$$
When $x = 5$, $y = 12$:
$$2(5)(10) + 2(12)\frac{dy}{dt} = 0 \Rightarrow \frac{dy}{dt} = -\frac{25}{6} \approx -4.17 \text{ ft/s}$$

**Example 3 (Rocket angle):** Observer 300 ft from launch, rocket rising at $100$ ft/s. Find $\frac{d\theta}{dt}$ at $t = 2$ s.

$$\tan(\theta) = \frac{y}{300} \Rightarrow \sec^2(\theta)\frac{d\theta}{dt} = \frac{1}{300}\frac{dy}{dt}$$
At $t = 2$, $y = 200$, $z = 100\sqrt{13}$, $\sec(\theta) = \frac{\sqrt{13}}{3}$:
$$\left(\frac{\sqrt{13}}{3}\right)^2 \frac{d\theta}{dt} = \frac{1}{300}(100) \Rightarrow \frac{d\theta}{dt} = \frac{3}{13} \text{ rad/s}$$

## Video Resources

### Core Lecture

[![Core Lecture](https://img.youtube.com/vi/S0_qX4VJhMQ/default.jpg)](https://www.youtube.com/watch?v=S0_qX4VJhMQ)

### Supplementary Videos

- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=HVvCbnrUxek) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Full lecture coverage with worked examples

## 3.5 — Derivatives of Trigonometric Functions

Trigonometric functions model periodic phenomena — sound waves, tides, seasonal temperature. 
Their derivatives follow beautiful patterns that mirror the original functions, shifted by phase.
The proofs rely on the squeeze theorem and two key limits: 
$\displaystyle\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$ 
and $\displaystyle\lim_{\theta \to 0} \frac{1 - \cos \theta}{\theta} = 0$.


### Key Definitions

Assuming $x$ is measured in **radians**:

| Function | Derivative |
| --- | --- |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\cot x$ | $-\csc^2 x$ |
| $\sec x$ | $\sec x \tan x$ |
| $\csc x$ | $-\csc x \cot x$ |

*Important:* These formulas are valid **only in radians**. In degrees, the Chain Rule introduces an extra factor of $\pi/180$.

### Worked Example

**Example 3.5.1**

Differentiate $f(x) = x^2 \sin x + \cos(3x)$.

**Step 1:** Apply the Product Rule to the first term and the Chain Rule to the second.


$$f'(x) = \underbrace{(2x)\sin x + x^2(\cos x)}_{\text{Product Rule}} + \underbrace{(-\sin(3x)) \cdot 3}_{\text{Chain Rule}}$$
**Step 2:** Simplify.


$$f'(x) = 2x\sin x + x^2\cos x - 3\sin(3x)$$

> **Figure:** The Unit Circle and Trigonometric Derivatives

### Practice Problems

- Differentiate $f(x) = \sin(2x) \cos(x)$.

- Differentiate $f(x) = \tan(x^2)$.

- Find $f'(\pi/4)$ if $f(x) = \sec x + \csc x$.

### Study Tips

- Always check the angle mode: calculus *requires radians*.

- Memorize $\sin x \to \cos x$ and $\cos x \to -\sin x$ first; the others follow from Quotient Rule.

- When differentiating $\tan x$, rewrite as $\sin x / \cos x$ and use the Quotient Rule if you forget the formula.

- For products like $\sin x \cos x$, the Product Rule gives $\cos^2 x - \sin^2 x = \cos(2x)$ — a useful identity to recognize.

---

[Previous](chapter-11.html) • [Curriculum](INDEX.md) • [Next](chapter-13.html)
