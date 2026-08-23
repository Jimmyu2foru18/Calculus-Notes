# Chapter 18: Higher-Order Derivatives — Calculus Foundations
[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Higher-order derivatives, concavity, and inflection points.

## Lecture Notes

### Function Analysis from First and Second Derivatives

**First Derivative Test:**
- $f'(x) > 0$: $f$ is increasing.
- $f'(x) < 0$: $f$ is decreasing.
- $f'(x) = 0$ or undefined: possible relative extremum.

**Second Derivative:**
- $f''(x) > 0$: $f'$ is increasing $\Rightarrow$ $f$ is **concave up**.
- $f''(x) < 0$: $f'$ is decreasing $\Rightarrow$ $f$ is **concave down**.
- At a **point of inflection**, concavity switches.

### Example: $f(x) = \frac{2}{3}x^3 + 5x^2 + 12x$

**First Derivative:**
$$f'(x) = 2x^2 + 10x + 12 = 2(x+3)(x+2) = 0 \Rightarrow x = -3, -2$$

| Interval | Test Point | $f'$ | Behavior |
|----------|-----------|------|----------|
| $(-\infty, -3)$ | $x = -4$ | $4 > 0$ | Increasing |
| $(-3, -2)$ | $x = -2.5$ | $-0.5 < 0$ | Decreasing |
| $(-2, \infty)$ | $x = 0$ | $12 > 0$ | Increasing |

- Relative maximum at $x = -3$, $f(-3) = -9$.
- Relative minimum at $x = -2$, $f(-2) = -\frac{28}{3}$.

**Second Derivative:**
$$f''(x) = 4x + 10 = 0 \Rightarrow x = -2.5$$
- Concave down on $(-\infty, -2.5)$.
- Concave up on $(-2.5, \infty)$.
- Point of inflection at $(-2.5, -\frac{55}{6})$.

### Example: $f(x) = \frac{x^2 - 1}{x^3}$

**First Derivative (Quotient Rule):**
$$f'(x) = \frac{(2x)(x^3) - (x^2 - 1)(3x^2)}{(x^3)^2} = \frac{-x^4 + 3x^2}{x^6}$$
Critical points: $x = \pm\sqrt{3}$ (and $x = 0$ undefined).

- $f$ increasing on $(-\sqrt{3}, 0) \cup (0, \sqrt{3})$
- $f$ decreasing on $(-\infty, -\sqrt{3}) \cup (\sqrt{3}, \infty)$
- Relative min at $x = -\sqrt{3}$, relative max at $x = \sqrt{3}$.

**Second Derivative:**
$$f''(x) = \frac{2x^2 - 12}{x^5}$$
Inflection points at $x = \pm\sqrt{6}$.

- Concave up on $(-\sqrt{6}, 0) \cup (0, \sqrt{6})$
- Concave down on $(-\infty, -\sqrt{6}) \cup (\sqrt{6}, \infty)$

### Curve Sketching Checklist

1. **Domain** — find where $f$ is undefined.
2. **Intercepts** — x-intercepts and y-intercept.
3. **Asymptotes** — vertical, horizontal, oblique.
4. **Symmetry** — even, odd, or neither.
5. **First derivative** — critical points, intervals of increase/decrease.
6. **Second derivative** — inflection points, concavity.
7. **Key y-coordinates** — evaluate $f$ at critical points.
8. **Sketch** — assemble all information.

### Absolute Extrema on a Closed Interval

To find absolute max/min on $[a, b]$:
1. Find relative extrema using $f'(x)$.
2. Evaluate $f$ at relative extrema AND endpoints.
3. Compare all values; the highest/lowest wins.

**Example:** $f(x) = \frac{1}{3}x^3 + 2x^2 + 3x$ on $[-4, 1]$
Critical points: $x = -3, -1$. Endpoints: $x = -4, 1$.
- $f(-4) = -\frac{4}{3}$, $f(-3) = 0$, $f(-1) = -\frac{4}{3}$, $f(1) = \frac{16}{3}$.
- Absolute max: $(1, \frac{16}{3})$; absolute min: $(-4, -\frac{4}{3})$ and $(-1, -\frac{4}{3})$.

## Video Resources

### Core Lecture

[![Core Lecture](https://img.youtube.com/vi/BLkz5LGWihw/default.jpg)](https://www.youtube.com/watch?v=BLkz5LGWihw)

### Supplementary Videos

- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=BLkz5LGWihw) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=BLkz5LGWihw) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=BLkz5LGWihw) - Full lecture coverage with worked examples

## Higher-Order Derivatives

The **second derivative** is the derivative of the derivative: $f''(x) = \dfrac{d}{dx}(f'(x))$. 
It measures how the *rate of change* itself is changing. 
In physics, if $s(t)$ is position, then $s'(t) = v(t)$ is velocity and $s''(t) = a(t)$ is acceleration.
In geometry, the second derivative reveals the **concavity** of a curve.


### Key Definitions

Let $f$ be twice differentiable on an interval $I$.


- $f$ is **concave up** on $I$ if $f''(x) > 0$ for all $x \in I$.

- $f$ is **concave down** on $I$ if $f''(x) < 0$ for all $x \in I$.

- A point $c$ is an **inflection point** if $f$ changes concavity at $c$.

### Worked Example

**Example — Second Derivative**

Find $f''(x)$ for $f(x) = x^3 - 6x^2 + 9x + 1$ and determine its concavity.

**Step 1:** Find $f'(x)$.


$$f'(x) = 3x^2 - 12x + 9$$
**Step 2:** Differentiate again.


$$f''(x) = 6x - 12$$
**Step 3:** Find where $f''(x) = 0$ (possible inflection point).


$$6x - 12 = 0 \;\Rightarrow\; x = 2$$
**Step 4:** Test concavity on each side of $x = 2$.


- For $x < 2$ (e.g., $x = 0$): $f''(0) = -12 < 0$ → **concave down**

- For $x > 2$ (e.g., $x = 3$): $f''(3) = 6 > 0$ → **concave up**
**Conclusion:** $f$ has an inflection point at $x = 2$, changing from concave down to concave up.

> **Figure:** Concavity: $f''(x) > 0$ vs. $f''(x) < 0$

### Practice Problems

- Find $f''(x)$ for $f(x) = x^4 - 4x^3 + 6x^2$. Where is $f$ concave up and concave down?

- A particle has position $s(t) = t^3 - 6t^2 + 9t$. Find its acceleration at $t = 2$.

- Find all inflection points of $f(x) = x^3 - 3x$.

### Study Tips

- Higher derivatives follow the same rules — just differentiate repeatedly.

- $f''(x) > 0$ means the *slope is increasing*: the tangent line rotates counterclockwise as $x$ grows.

- An inflection point requires a *sign change* in $f''(x)$, not just $f''(c) = 0$.

- For polynomials, the number of inflection points is at most $n-2$.

---

[Previous](chapter-17.html) • [Curriculum](INDEX.md) • [Next](chapter-19.html)
