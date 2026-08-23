# Chapter 33: Area Between Curves

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Area between curves using definite integrals.

## Lecture Notes

No separate Day lecture notes are available for this chapter. The content below is synthesized from the textbook section and worked examples.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/FnJqaIESC2s/default.jpg)](https://www.youtube.com/watch?v=FnJqaIESC2s)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=FnJqaIESC2s) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=FnJqaIESC2s) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=FnJqaIESC2s) - Full lecture coverage with worked examples

## 5.1 — Area Between Curves

The definite integral $\int_a^b f(x)\,dx$ computes the signed area between the graph of $y = f(x)$ and the $x$-axis. When two curves $y = f(x)$ and $y = g(x)$ enclose a region, **subtracting** their integrals yields the area of the region between them.

### Key Definitions

**Definition — Area Between Two Curves**

If $f$ and $g$ are continuous on $[a, b]$ and $f(x) \ge g(x)$ for all $x \in [a, b]$, the area of the region bounded by $y = f(x)$, $y = g(x)$, $x = a$, and $x = b$ is:

$$A = \int_a^b [\,f(x) - g(x)\,]\,dx$$

The **height** of a typical vertical strip is $f(x) - g(x)$; the **width** is $dx$.

When the curves intersect at $x = a$ and $x = b$, these become the limits of integration.

### Worked Example

**Example 5.1.1**

Find the area of the region bounded by $y = x^2$ and $y = x + 2$.

**Step 1:** Find the intersection points by solving $x^2 = x + 2$.

$$x^2 - x - 2 = 0 \;\Rightarrow\; (x-2)(x+1) = 0$$
So $x = -1$ and $x = 2$. These are the limits of integration.

**Step 2:** Determine which curve is on top on $[-1, 2]$.

Test $x = 0$: $x^2 = 0$ and $x + 2 = 2$, so $x + 2 \ge x^2$. The upper curve is $f(x) = x + 2$ and the lower curve is $g(x) = x^2$.

**Step 3:** Set up the integral.

$$A = \int_{-1}^{2} \big[(x+2) - x^2\big]\,dx$$

**Step 4:** Evaluate.

$$A = \left[\frac{x^2}{2} + 2x - \frac{x^3}{3}\right]_{-1}^{2}$$
$$= \left(2 + 4 - \frac{8}{3}\right) - \left(\frac{1}{2} - 2 + \frac{1}{3}\right)$$
$$= \left(6 - \frac{8}{3}\right) - \left(-\frac{3}{2} + \frac{1}{3}\right)$$
$$= \frac{10}{3} + \frac{11}{6} = \frac{20}{6} + \frac{11}{6} = \frac{31}{6}$$

**Answer:** The area is $\boxed{\dfrac{31}{6}\text{ square units}}$.

### Worked Example

**Example 5.1.2**

Find the area enclosed by $y = \sin x$ and the $x$-axis on $[0, 2\pi]$.

**Step 1:** Sketch or note that $\sin x \ge 0$ on $[0, \pi]$ and $\sin x \le 0$ on $[\pi, 2\pi]$.

**Step 2:** Split the integral at the zero $x = \pi$.

$$A = \int_0^{2\pi} |\sin x|\,dx = \int_0^{\pi} \sin x\,dx + \int_{\pi}^{2\pi} (-\sin x)\,dx$$

**Step 3:** Evaluate each piece.

$$\int_0^{\pi} \sin x\,dx = [-\cos x]_0^{\pi} = -(-1) - (-1) = 2$$
$$\int_{\pi}^{2\pi} (-\sin x)\,dx = [\cos x]_{\pi}^{2\pi} = 1 - (-1) = 2$$

**Answer:** Total area $= \boxed{4}$ square units.

> **Figure:** Area Between $y = x+2$ and $y = x^2$

### Integrating with Respect to y

### Key Definitions

**Horizontal Strips**

Sometimes it is easier to integrate with respect to $y$. If the curves are given as $x = f(y)$ and $x = g(y)$, with $f(y) \ge g(y)$ on $[c, d]$, then:

$$A = \int_c^d [\,f(y) - g(y)\,]\,dy$$

Use horizontal strips when the region is "tall and narrow" rather than "wide and short."

### Practice Problems

- Find the area bounded by $y = x^3$ and $y = x$.
- Find the area bounded by $y = \sqrt{x}$, $y = 0$, and $x = 4$.
- Find the area enclosed by $y = \cos x$ and $y = \sin x$ on $\left[0, \frac{\pi}{2}\right]$.
- Set up (but do not evaluate) the integral for the area bounded by $y = e^x$, $y = e^{-x}$, and $x = 1$.

### Study Tips

- Always sketch the region first. Identifying which curve is on top avoids sign errors.
- When curves cross, split the integral at every intersection point.
- For regions described by $x = f(y)$, integrating with respect to $y$ can be simpler.
- If the curves are given implicitly, solve for $y$ (or $x$) before setting up the integral.

[Previous](chapter-32.html) • [Curriculum](INDEX.md) • [Next](chapter-34.html)

