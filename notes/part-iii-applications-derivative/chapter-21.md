# Chapter 21: What Derivatives Tell Us

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> First and Second Derivative Tests for classifying critical points.

## Lecture Notes

### First Derivative Test

Suppose $c$ is a critical point of continuous $f$:
- If $f'$ changes from $+$ to $-$ at $c$ $\Rightarrow$ **local maximum**.
- If $f'$ changes from $-$ to $+$ at $c$ $\Rightarrow$ **local minimum**.
- If $f'$ does not change sign $\Rightarrow$ no local extremum (plateau).

**Example:** $f(x) = x^3 - 3x^2 + 1$
$$f'(x) = 3x^2 - 6x = 3x(x - 2)$$
Critical points: $x = 0, 2$.
- $f'(-1) = 9 > 0$ (increasing on $(-\infty, 0)$)
- $f'(1) = -3 < 0$ (decreasing on $(0, 2)$)
- $f'(3) = 9 > 0$ (increasing on $(2, \infty)$)
- Local max at $x = 0$ ($f(0) = 1$); local min at $x = 2$ ($f(2) = -3$).

### Second Derivative Test

Suppose $f''$ is continuous near $c$ and $f'(c) = 0$:
- If $f''(c) > 0$ $\Rightarrow$ **local minimum**.
- If $f''(c) < 0$ $\Rightarrow$ **local maximum**.
- If $f''(c) = 0$ $\Rightarrow$ inconclusive; use First Derivative Test.

**Example:** $f(x) = x^4 - 4x^3 + 4x^2$
$$f'(x) = 4x^3 - 12x^2 + 8x = 4x(x-1)(x-2) = 0 \Rightarrow x = 0, 1, 2$$
$$f''(x) = 12x^2 - 24x + 8$$
- $f''(0) = 8 > 0$ $\Rightarrow$ local min at $x = 0$.
- $f''(1) = -4 < 0$ $\Rightarrow$ local max at $x = 1$.
- $f''(2) = 8 > 0$ $\Rightarrow$ local min at $x = 2$.

### Relationship Between $f$, $f'$, and $f''$

| $f(x)$ behavior | $f'(x)$ sign | $f''(x)$ sign |
|-----------------|--------------|---------------|
| Increasing | $+$ | |
| Decreasing | $-$ | |
| Plateau (max/min/plateau) | $0$ | |
| Concave up | increasing | $+$ |
| Concave down | decreasing | $-$ |
| Possible inflection | min/max/plateau of $f'$ | $0$ |

### Curve Sketching from $f'(x)$

Given the graph of $f'(x)$:
- Where $f'(x) > 0$, $f$ is increasing.
- Where $f'(x) < 0$, $f$ is decreasing.
- x-intercepts of $f'(x)$ are possible relative extrema of $f$.
- Turning points of $f'(x)$ are possible inflection points of $f$.

### Mean Value Theorem for Derivatives

If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, there exists at least one $c \in (a, b)$ such that:

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

**Example:** $f(x) = 5x^2 + 10x - 3$ on $[2, 4]$.
$$f(2) = 37, \quad f(4) = 117$$
$$\text{Slope of secant} = \frac{117 - 37}{4 - 2} = 40$$
$$f'(x) = 10x + 10 = 40 \Rightarrow x = 3$$

**Example:** $f(x) = \sqrt{x}$ on $[0, 9]$.
$$f(0) = 0, \quad f(9) = 3$$
$$\text{Slope} = \frac{3 - 0}{9 - 0} = \frac{1}{3}$$
$$f'(x) = \frac{1}{2\sqrt{x}} = \frac{1}{3} \Rightarrow x = \frac{9}{4}$$

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/9vKqVkMQHKk/default.jpg)](https://www.youtube.com/watch?v=9vKqVkMQHKk)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=9vKqVkMQHKk) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=9vKqVkMQHKk) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=9vKqVkMQHKk) - Full lecture coverage with worked examples

## 4.2 — What Derivatives Tell Us

The derivative is more than a slope — it is a **diagnostic tool**. The sign of $f'(x)$ tells us whether $f$ is increasing or decreasing. The sign of $f''(x)$ tells us whether $f$ is concave up or concave down. Together, they let us classify every critical point as a local max, local min, or neither.

### Key Theorems

**Theorem — First Derivative Test**

Suppose $c$ is a critical point of a continuous function $f$.

- If $f'$ changes from **positive** to **negative** at $c$, then $f$ has a **local maximum** at $c$.
- If $f'$ changes from **negative** to **positive** at $c$, then $f$ has a **local minimum** at $c$.
- If $f'$ does **not** change sign at $c$, then $f$ has **no local extremum** at $c$.

**Theorem — Second Derivative Test**

Suppose $f''$ is continuous near $c$ and $f'(c) = 0$.

- If $f''(c) > 0$, then $f$ has a **local minimum** at $c$.
- If $f''(c) < 0$, then $f$ has a **local maximum** at $c$.
- If $f''(c) = 0$, the test is **inconclusive**; use the First Derivative Test.

### Worked Example

**Example 4.2.1**

Find and classify the critical points of $f(x) = x^3 - 3x^2 + 1$.

**Step 1:** Find $f'(x)$ and critical points.

$$f'(x) = 3x^2 - 6x = 3x(x - 2)$$
Critical points: $x = 0$ and $x = 2$.

**Step 2:** Apply the First Derivative Test (sign chart).

- On $(-\infty, 0)$: $f'(-1) = 3(-1)(-3) = 9 > 0$ → increasing.
- On $(0, 2)$: $f'(1) = 3(1)(-1) = -3 < 0$ → decreasing.
- On $(2, \infty)$: $f'(3) = 3(3)(1) = 9 > 0$ → increasing.

**Step 3:** Classify.

- At $x = 0$: $f'$ changes $+$ to $-$ → **local maximum**.
- At $x = 2$: $f'$ changes $-$ to $+$ → **local minimum**.

**Answer:** Local max at $x = 0$ ($f(0) = 1$); local min at $x = 2$ ($f(2) = -3$).

> **Figure:** The First Derivative Test: Sign Changes at Critical Points

### Practice Problems

- Find and classify all critical points of $f(x) = x^4 - 4x^3 + 4x^2$ using the First Derivative Test.
- Use the Second Derivative Test to classify the critical points of $f(x) = x^3 - 3x + 1$.
- Show that $f(x) = x^4$ has a local minimum at $x = 0$ even though $f''(0) = 0$.

### Study Tips

- Always draw a sign chart for $f'$; it makes classification instant.
- The Second Derivative Test is faster when it works, but fail back to the First Derivative Test when $f''(c) = 0$.
- A critical point where $f'$ does not change sign is a **saddle point** (or inflection point with horizontal tangent).
- Verify your classification by checking values of $f$ on either side of the critical point.

[Previous](chapter-20.html) • [Curriculum](INDEX.md) • [Next](chapter-22.html)
