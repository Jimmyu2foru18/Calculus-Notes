# Chapter 22: Graphing Functions

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Curve sketching using first and second derivative information.

## Lecture Notes

### Curve Sketching Checklist

1. **Find the Domain** — determine where $f$ is undefined (holes, vertical asymptotes).
2. **Find all x and y intercepts.**
3. **Find any asymptotes** — vertical (denominator $= 0$ after simplifying), horizontal ($\lim_{x \to \pm\infty} f(x)$), oblique (long division when numerator degree $=$ denominator degree $+ 1$).
4. **Check for symmetry** — even if $f(-x) = f(x)$, odd if $f(-x) = -f(x)$.
5. **First derivative** — critical points, intervals of increase/decrease.
6. **Second derivative** — inflection points, concavity.
7. **Key y-coordinates** — evaluate at critical points and inflection points.
8. **Sketch the graph.**

### Example: $f(x) = \frac{2}{3}x^3 + 5x^2 + 12x$

**Domain:** $\mathbb{R}$ (polynomial).

**Intercepts:** $f(0) = 0$, $f(x) = 0 \Rightarrow x = 0$ (other roots complex). y-intercept $(0, 0)$.

**Symmetry:** $f(-x) = -\frac{2}{3}x^3 + 5x^2 - 12x$ — neither even nor odd.

**Asymptotes:** None (polynomial).

**First Derivative:**
$$f'(x) = 2x^2 + 10x + 12 = 2(x+3)(x+2) = 0 \Rightarrow x = -3, -2$$
- Increasing on $(-\infty, -3) \cup (-2, \infty)$
- Decreasing on $(-3, -2)$
- Relative max at $x = -3$ ($f(-3) = -9$)
- Relative min at $x = -2$ ($f(-2) = -\frac{28}{3}$)

**Second Derivative:**
$$f''(x) = 4x + 10 = 0 \Rightarrow x = -2.5$$
- Concave down on $(-\infty, -2.5)$
- Concave up on $(-2.5, \infty)$
- Point of inflection at $(-2.5, -\frac{55}{6})$

### Example: $f(x) = \frac{x^2 - 1}{x^3}$

**Domain:** $(-\infty, 0) \cup (0, \infty)$

**Intercepts:** $x = \pm 1$, no y-intercept.

**Symmetry:** $f(-x) = -f(x)$ — odd (symmetric about origin).

**Asymptotes:**
- Vertical: $x = 0$ ($\lim_{x \to 0} f(x) = \pm\infty$).
- Horizontal: $y = 0$ ($\deg$ denominator $> \deg$ numerator).

**First Derivative:**
$$f'(x) = \frac{-x^4 + 3x^2}{x^6} = \frac{-x^2 + 3}{x^4} = 0 \Rightarrow x = \pm\sqrt{3}$$
- Increasing on $(-\sqrt{3}, 0) \cup (0, \sqrt{3})$
- Decreasing on $(-\infty, -\sqrt{3}) \cup (\sqrt{3}, \infty)$
- Relative min at $x = -\sqrt{3}$, relative max at $x = \sqrt{3}$.

**Second Derivative:**
$$f''(x) = \frac{2x^2 - 12}{x^5} = 0 \Rightarrow x = \pm\sqrt{6}$$
- Concave up on $(-\sqrt{6}, 0) \cup (0, \sqrt{6})$
- Concave down on $(-\infty, -\sqrt{6}) \cup (\sqrt{6}, \infty)$

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/S0_qX4VJhMQ/default.jpg)](https://www.youtube.com/watch?v=S0_qX4VJhMQ)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Full lecture coverage with worked examples

## 4.3 — Graphing Functions

A complete graph of $y = f(x)$ reveals its personality: where it rises and falls, where it bends, and where it has asymptotes. Derivatives give us a **recipe** for sketching accurate graphs without plotting hundreds of points.

### Key Definitions

**Guidelines for Curve Sketching**

Given $f$, use the following steps to sketch its graph:

- **Domain:** Find where $f$ is defined.
- **Intercepts:** Find $x$-intercepts (solve $f(x) = 0$) and $y$-intercept ($f(0)$).
- **Symmetry:** Check if $f$ is even, odd, or neither.
- **Asymptotes:** Find vertical, horizontal, and slant asymptotes.
- **First derivative:** Find critical points and intervals of increase/decrease.
- **Second derivative:** Find inflection points and intervals of concavity.
- **Local extrema:** Classify critical points using derivative tests.

### Worked Example

**Example 4.3.1**

Sketch the graph of $f(x) = x^3 - 3x^2 - 9x + 5$.

**Step 1:** Find critical points.

$$f'(x) = 3x^2 - 6x - 9 = 3(x-3)(x+1)$$
Critical points: $x = -1$ and $x = 3$.

**Step 2:** Sign chart for $f'$.

- On $(-\infty, -1)$: $f'(-2) = 3(-5)(-1) = 15 > 0$ → increasing.
- On $(-1, 3)$: $f'(0) = 3(-3)(1) = -9 < 0$ → decreasing.
- On $(3, \infty)$: $f'(4) = 3(1)(5) = 15 > 0$ → increasing.

**Step 3:** Find $f''(x)$ for concavity.

$$f''(x) = 6x - 6$$
Inflection point at $x = 1$. For $x < 1$, $f'' < 0$ (concave down); for $x > 1$, $f'' > 0$ (concave up).

**Step 4:** Evaluate at key points.

$$f(-1) = (-1)^3 - 3(1) + 9 + 5 = 10$$
$$f(3) = 27 - 27 - 27 + 5 = -22$$
$$f(0) = 5$$

**Step 5:** Sketch using this information — local max at $(-1, 10)$, local min at $(3, -22)$, inflection at $(1, -6)$.

> **Figure:** Sketching Using First and Second Derivative Information

### Practice Problems

- Sketch the graph of $f(x) = x^4 - 4x^3 + 4x^2$. Identify all local extrema and inflection points.
- Sketch the graph of $f(x) = \frac{x^2}{x-1}$. Find all asymptotes and critical points.
- For $f(x) = \sin x + \cos x$ on $[0, 2\pi]$, find all extrema and sketch one period.

### Study Tips

- Work through the checklist in order — missing asymptotes ruins the sketch.
- Plot critical points and inflection points *first*; they anchor the shape.
- Check end behavior: $\lim_{x \to \pm\infty} f(x)$ tells you what happens far left and far right.
- A sign chart for $f'$ and $f''$ is worth a thousand plotted points.

[Previous](chapter-21.html) • [Curriculum](INDEX.md) • [Next](chapter-23.html)
