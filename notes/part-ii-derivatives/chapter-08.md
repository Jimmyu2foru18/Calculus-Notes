# Chapter 08: Introducing the Derivative

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> The derivative as instantaneous rate of change and the limit definition.

## Lecture Notes

### Discontinuity Analysis

To classify discontinuities of $f(x)$:
1. Find where $f(x)$ is undefined (denominator $= 0$ for rational functions).
2. Factor and simplify to distinguish holes from vertical asymptotes.
3. For piecewise functions, check for jumps at branch-switching points by comparing left and right limits.

**Example:** $f(x) = \frac{x^2 + 4x - 45}{x^2 - 25} = \frac{(x+9)\cancel{(x-5)}}{(x+5)\cancel{(x-5)}} = \frac{x+9}{x+5}$
- Removable discontinuity at $x = 5$ (hole).
- Infinite discontinuity at $x = -5$ (vertical asymptote).

**Example (Piecewise):** $f(x) = \begin{cases} 2x - 3, & x \leq -1 \\ x^2 + 3x - 3, & -1 < x \leq 2 \\ \frac{x+4}{x-1}, & x > 2 \end{cases}$
- At $x = -1$: both branches give $-5$, so no jump.
- At $x = 2$: branch 2 gives $7$, branch 3 gives $6$, so there is a jump discontinuity.

### Differentiability

A function is **differentiable at $x = c$** if its derivative exists there. Requirements:
1. $f$ is continuous at $x = c$.
2. $f$ is smooth (no sharp points) at $x = c$.
3. $f$ does not have a vertical tangent at $x = c$.

**Not differentiable at:**
- Discontinuities (holes, jumps, vertical asymptotes)
- Sharp points (kinks, cusps) — e.g., $f(x) = |x|$ at $x = 0$
- Vertical tangents

**Example:** $f(x) = |x|$ is continuous at $x = 0$ but not differentiable: $f'(x) = -1$ for $x < 0$ and $f'(x) = 1$ for $x > 0$; the derivative branches do not match at $x = 0$.

### Derivative Definition

The **derivative** of $f$ at $x$ is:

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

Geometrically, this is the slope of the tangent line at $(x, f(x))$.

**Example:** $f(x) = x^2 - 3x + 2$

$$f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - 3(x+h) + 2 - (x^2 - 3x + 2)}{h} = \lim_{h \to 0} (2x + h - 3) = 2x - 3$$

**Example:** $f(x) = \sqrt{x+2}$

Multiply by conjugate:
$$f'(x) = \lim_{h \to 0} \frac{\sqrt{x+h+2} - \sqrt{x+2}}{h} \cdot \frac{\sqrt{x+h+2} + \sqrt{x+2}}{\sqrt{x+h+2} + \sqrt{x+2}} = \frac{1}{2\sqrt{x+2}}$$

**Example:** $f(x) = \frac{1}{3x-5}$

$$f'(x) = \lim_{h \to 0} \frac{\frac{1}{3(x+h)-5} - \frac{1}{3x-5}}{h} = \frac{-3}{(3x-5)^2}$$

### Power Rule

From the limit definition:
- $\frac{d}{dx}(x) = 1$
- $\frac{d}{dx}(x^2) = 2x$
- $\frac{d}{dx}(x^3) = 3x^2$
- $\frac{d}{dx}(x^4) = 4x^3$

**Power Rule:** If $f(x) = x^n$, then $f'(x) = n \cdot x^{n-1}$.

**Constant Multiple Rule:** If $f(x) = c \cdot g(x)$, then $f'(x) = c \cdot g'(x)$.

**Sum/Difference Rule:** If $f(x) = g(x) \pm h(x)$, then $f'(x) = g'(x) \pm h'(x)$.

**Examples:**
- $f(x) = 3x^2 + 5x - 1 \Rightarrow f'(x) = 6x + 5$
- $f(x) = 3x^5 - \sqrt{x} \Rightarrow f'(x) = 15x^4 - \frac{1}{2}x^{-1/2} = 15x^4 - \frac{1}{2\sqrt{x}}$

### Intermediate Value Theorem (IVT)

If $f(x)$ is continuous on $[a, b]$, then for any value $c$ between $f(a)$ and $f(b)$, there exists at least one $x$ such that $a \leq x \leq b$ and $f(x) = c$.

**Example:** $f(x) = x^3 - 3x - 2$ on $[0, 5]$: $f(0) = -2$, $f(5) = 108$. Since $0$ is between $-2$ and $108$, there is at least one root in $[0, 5]$.

**Important:** The function must be continuous on the *entire* closed interval. If there is a discontinuity inside $[a, b]$ (e.g., a vertical asymptote), the IVT does not apply.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/9vKqVkMQHKk/default.jpg)](https://www.youtube.com/watch?v=9vKqVkMQHKk)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=9vKqVkMQHKk) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=HVvCbnrUxek) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=9vKqVkMQHKk) - Full lecture coverage with worked examples

## 3.1 — Introducing the Derivative

Calculus is the mathematics of **change**. While limits let us describe behavior near a point, 
**derivatives** let us measure *how fast* something is changing at an instant. 
The derivative is the single most important tool in calculus — it bridges algebra, geometry, and real-world motion.

### Key Definitions

#### Definition — The Derivative

Let $f$ be a function defined on an open interval containing $x$. The **derivative** of $f$ at $x$ is

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h},$$

provided the limit exists. If the limit exists, we say $f$ is **differentiable** at $x$.

The expression $\dfrac{f(x+h)-f(x)}{h}$ is the **difference quotient**. 
Geometrically, it is the slope of the **secant line** through the points $(x, f(x))$ and $(x+h, f(x+h))$.
As $h \to 0$, the secant line approaches the **tangent line**, and its slope becomes the derivative.

### Worked Example — Using the Limit Definition

**Example 3.1.1**

Find $f'(x)$ for $f(x) = x^2 - 3x + 2$ using the limit definition.

**Step 1:** Write $f(x+h)$ and form the difference quotient.

$$f(x+h) = (x+h)^2 - 3(x+h) + 2 = x^2 + 2xh + h^2 - 3x - 3h + 2$$
$$f(x+h) - f(x) = \underbrace{x^2 + 2xh + h^2 - 3x - 3h + 2}_{f(x+h)} - \underbrace{(x^2 - 3x + 2)}_{f(x)}$$
$$= 2xh + h^2 - 3h$$

**Step 2:** Divide by $h$ and simplify.

$$\frac{f(x+h) - f(x)}{h} = \frac{2xh + h^2 - 3h}{h} = \frac{h(2x + h - 3)}{h} = 2x + h - 3$$

**Step 3:** Take the limit as $h \to 0$.

$$f'(x) = \lim_{h \to 0} (2x + h - 3) = 2x - 3$$

**Answer:** $f'(x) = \boxed{2x - 3}$

### Visualizing the Secant-to-Tangent Transition

> **Figure:** Figure 3.1 — Secant Lines Approaching the Tangent Line

Figure 3.1: As $h$ shrinks, the secant line (red, dashed) rotates toward the tangent line (green) at $(x, f(x))$.

### Practice Problems

1. Use the limit definition to find $f'(x)$ for $f(x) = 3x - 7$.
2. Use the limit definition to find $f'(x)$ for $f(x) = x^2 + 4$.
3. Show that $f(x) = |x|$ is **not** differentiable at $x = 0$ by computing the left- and right-hand limits.

---

### Study Tips

- Memorize the limit definition verbatim — every other rule derives from it.
- When expanding $(x+h)^n$, use the binomial theorem for $n \ge 3$.
- Always cancel $h$ before substituting $h = 0$; a $0$ in the denominator signals an algebraic mistake.
- Sketch the curve and tangent line before computing; the picture tells you whether your answer is reasonable.

[Previous](chapter-07.html) • [Curriculum](INDEX.md) • [Next](chapter-09.html)