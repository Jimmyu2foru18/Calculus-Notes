# Chapter 20: Maxima and Minima — Calculus Foundations
[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Absolute and local extrema, critical points, and the Extreme Value Theorem.

## Lecture Notes

### Definitions

- **Absolute maximum** at $c$: $f(c) \ge f(x)$ for all $x$ in domain.
- **Absolute minimum** at $c$: $f(c) \le f(x)$ for all $x$ in domain.
- **Local maximum** at $c$: $f(c) \ge f(x)$ for all $x$ near $c$.
- **Local minimum** at $c$: $f(c) \le f(x)$ for all $x$ near $c$.

**Extreme Value Theorem:** If $f$ is continuous on $[a, b]$, then $f$ attains both an absolute maximum and minimum on $[a, b]$.

### Finding Absolute Extrema on $[a, b]$

1. Find critical points (where $f'(c) = 0$ or $f'$ undefined).
2. Evaluate $f$ at critical points and endpoints.
3. The largest value is the absolute max; the smallest is the absolute min.

**Example:** $f(x) = \frac{1}{3}x^3 + 2x^2 + 3x$ on $[-4, 1]$

$$f'(x) = x^2 + 4x + 3 = (x+3)(x+1) = 0 \Rightarrow x = -3, -1$$

Check $f$ at $x = -4, -3, -1, 1$:
- $f(-4) = -\frac{4}{3}$
- $f(-3) = 0$
- $f(-1) = -\frac{4}{3}$
- $f(1) = \frac{16}{3}$

Absolute max at $(1, \frac{16}{3})$; absolute min at $(-4, -\frac{4}{3})$ and $(-1, -\frac{4}{3})$.

**Example:** $f(x) = \frac{x^2}{3x - 6}$ on $[3, 8]$

$$f'(x) = \frac{3x^2 - 12x}{(3x - 6)^2} = 0 \Rightarrow x = 4$$

Check $f$ at $x = 3, 4, 8$:
- $f(3) = 3$
- $f(4) = \frac{8}{3} \approx 2.67$
- $f(8) = \frac{32}{9} \approx 3.56$

Absolute min at $(4, \frac{8}{3})$; absolute max at $(8, \frac{32}{9})$.

### Analyzing $f'(x)$ Graph

From the graph of $f'(x)$:
- $f'(x) > 0$ (above x-axis) $\Rightarrow$ $f$ is increasing.
- $f'(x) < 0$ (below x-axis) $\Rightarrow$ $f$ is decreasing.
- $f'(x) = 0$ (x-intercepts) $\Rightarrow$ possible relative extrema.
- Turning points of $f'(x)$ $\Rightarrow$ possible inflection points of $f$.

**Example:** Given $f'(x)$ with x-intercepts at $-4, 0, 2$ and turning points at $-2, 1$:
- $f$ increasing on $(-4, 0) \cup (2, \infty)$... wait, checking the specific example from Day 15 notes:
  - Increasing: $(-4, 0)$ — hmm, but the notes say $(-\infty, -4) \cup (0, 2) \cup (2, \infty)$ is decreasing.

Actually from Day 15 Page 1:
- Increasing on: $(-4, 0)$
- Decreasing on: $(-\infty, -4) \cup (0, 2) \cup (2, \infty)$
- Concave up on: $(-\infty, -2) \cup (1, 2)$
- Concave down on: $(-2, 1) \cup (2, \infty)$
- Relative max at $x = 0$
- Relative min at $x = -4$
- Plateau at $x = 2$
- Points of inflection at $x = -2, 1, 2$

### Optimization

**Steps:**
1. Draw a diagram.
2. Write the objective function.
3. Write the constraint equation.
4. Eliminate extra variables via substitution.
5. Find critical points of the single-variable function.
6. Verify using the Second Derivative Test or endpoint analysis.

**Example 1 (Rectangle):** Maximize area with perimeter 80 cm.
$$2x + 2y = 80 \Rightarrow y = 40 - x$$
$$A = x(40 - x) = 40x - x^2$$
$$A' = 40 - 2x = 0 \Rightarrow x = 20$$
Max area $= 20(20) = 400$.

**Example 2 (Cylindrical Can):** Minimize surface area with $V = 150$.
$$SA = 2\pi r^2 + \frac{300}{r}$$
$$SA' = 4\pi r - \frac{300}{r^2} = 0 \Rightarrow r^3 = \frac{75}{\pi}$$
$$r \approx 2.88, \quad h \approx 5.76$$

**Example 3 (Open-top box):** 50 cm by 20 cm cardboard, cut corners of side $x$.
$$V = (50 - 2x)(20 - 2x)x = 4x^3 - 140x^2 + 1000x$$
$$V' = 12x^2 - 280x + 1000 = 0 \Rightarrow x \approx 4.40 \text{ cm}$$

**Example 4 (Rectangular field):** Fence with vertical sides \$10/ft, bottom \$2/ft, top \$7/ft. Budget \$700.
$$9x + 20y = 700 \Rightarrow y = 35 - 0.45x$$
$$A = x(35 - 0.45x)$$
$$A' = 35 - 0.9x = 0 \Rightarrow x \approx 38.89, \quad y = 17.5$$

## Video Resources

### Core Lecture

[![Core Lecture](https://img.youtube.com/vi/S0_qX4VJhMQ/default.jpg)](https://www.youtube.com/watch?v=S0_qX4VJhMQ)

### Supplementary Videos

- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Full lecture coverage with worked examples

## 4.1 — Maxima and Minima

Finding the **highest** or **lowest** value of a function is one of the most 
practical applications of calculus. From maximizing profit in business to minimizing material 
in engineering, **optimization** is everywhere. 
The first step is understanding what local and absolute extrema are, and where they can occur.


### Key Definitions

Let $f$ be defined on an interval $I$.


- $f$ has an **absolute maximum** at $c \in I$ if $f(c) \ge f(x)$ for all $x \in I$.

- $f$ has an **absolute minimum** at $c \in I$ if $f(c) \le f(x)$ for all $x \in I$.

- $f$ has a **local maximum** at $c$ if $f(c) \ge f(x)$ for all $x$ near $c$.

- $f$ has a **local minimum** at $c$ if $f(c) \le f(x)$ for all $x$ near $c$.
The values $f(c)$ are called **extreme values**; the points $c$ are **extreme points**.


#### Theorem — Extreme Value Theorem
If $f$ is **continuous** on a closed interval $[a, b]$, then $f$ attains both an absolute maximum and an absolute minimum on $[a, b]$.

These extrema occur either at **critical points** (where $f'(c) = 0$ or $f'(c)$ does not exist) or at the **endpoints** $a$ and $b$.

### Worked Example

**Example 4.1.1**

Find the absolute maximum and minimum of $f(x) = x^3 - 3x^2 + 1$ on $[-1, 3]$.

**Step 1:** Find critical points by solving $f'(x) = 0$.


$$f'(x) = 3x^2 - 6x = 3x(x - 2)$$
Critical points: $x = 0$ and $x = 2$.
**Step 2:** Evaluate $f$ at critical points and endpoints.


$$f(-1) = -1 - 3 + 1 = -3$$
$$f(0) = 1$$
$$f(2) = 8 - 12 + 1 = -3$$
$$f(3) = 27 - 27 + 1 = 1$$
**Step 3:** Identify the largest and smallest values.

**Answer:** Absolute max $= 1$ at $x = 0$ and $x = 3$; absolute min $= -3$ at $x = -1$ and $x = 2$.

> **Figure:** Absolute Maximum and Minimum on a Closed Interval

### Practice Problems

- Find the absolute extrema of $f(x) = x^2 - 4x + 3$ on $[0, 5]$.

- Find the absolute extrema of $f(x) = \sqrt{x+1}$ on $[-1, 3]$.

- Show that $f(x) = x^3$ on $(-1, 1)$ has no absolute extrema (open interval).

### Study Tips

- On a **closed interval**, always check endpoints — the Extreme Value Theorem guarantees extrema there too.

- Critical points include places where $f'(c)$ does not exist (sharp corners, cusps).

- Evaluate $f$ at every critical point and endpoint; compare values to find the largest and smallest.

- An absolute maximum is also a local maximum, but not every local maximum is absolute.

---

[Previous](chapter-19.html) • [Curriculum](INDEX.md) • [Next](chapter-21.html)
