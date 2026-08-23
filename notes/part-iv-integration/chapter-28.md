# Chapter 28: Approximating Areas Under Curves

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Riemann sums and approximating areas under curves.

## Lecture Notes

No separate Day lecture notes are available for this chapter. The content below is synthesized from the textbook section and worked examples.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/FnJqaIESC2s/default.jpg)](https://www.youtube.com/watch?v=FnJqaIESC2s)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=FnJqaIESC2s) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=FnJqaIESC2s) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=FnJqaIESC2s) - Full lecture coverage with worked examples

## 5.1 — Approximating Areas Under Curves

The definite integral formalizes the idea of **accumulated area** under a curve. Before defining it precisely, we approximate using **Riemann sums** — sums of rectangular areas that become more accurate as the rectangles grow thinner. The three common choices for the sample point in each subinterval are the **left endpoint**, **right endpoint**, and **midpoint**.

### Key Definitions

**Definition — Riemann Sum**

Let $f$ be defined on $[a, b]$. Partition $[a, b]$ into $n$ subintervals of equal width $\Delta x = \dfrac{b-a}{n}$. For each subinterval $[x_{i-1}, x_i]$, choose a sample point $x_i^*$. The **Riemann sum** is:

$$S_n = \sum_{i=1}^{n} f(x_i^*)\,\Delta x$$

As $n \to \infty$ (and $\Delta x \to 0$), the Riemann sum approaches the exact area under the curve (when $f \ge 0$), provided the limit exists.

### Worked Example

**Example 5.1.1**

Approximate $\displaystyle\int_0^4 (x^2 + 1)\,dx$ using $n = 4$ subintervals with left, right, and midpoint rules.

**Step 1:** Compute the width of each subinterval.

$$\Delta x = \frac{4 - 0}{4} = 1$$

**Step 2:** Set up the partition points: $x_0 = 0, x_1 = 1, x_2 = 2, x_3 = 3, x_4 = 4$.

**Step 3:** Left Riemann sum (sample at left endpoints $0, 1, 2, 3$):

$$L_4 = \sum_{i=0}^{3} f(x_i)\Delta x = [f(0) + f(1) + f(2) + f(3)] \cdot 1$$
$$= [1 + 2 + 5 + 10] = \boxed{18}$$

**Step 4:** Right Riemann sum (sample at right endpoints $1, 2, 3, 4$):

$$R_4 = \sum_{i=1}^{4} f(x_i)\Delta x = [f(1) + f(2) + f(3) + f(4)] \cdot 1$$
$$= [2 + 5 + 10 + 17] = \boxed{34}$$

**Step 5:** Midpoint Riemann sum (sample at midpoints $0.5, 1.5, 2.5, 3.5$):

$$M_4 = [f(0.5) + f(1.5) + f(2.5) + f(3.5)] \cdot 1$$
$$= [1.25 + 3.25 + 7.25 + 13.25] = \boxed{25}$$

**Note:** The true value is $\displaystyle\int_0^4 (x^2+1)\,dx = \left[\frac{x^3}{3} + x\right]_0^4 = \frac{64}{3} + 4 \approx 25.33$, so the midpoint rule is most accurate here.

### Riemann Sum Rectangles

> **Figure:** Left, Right, and Midpoint Approximations

### Practice Problems

- Use $n = 2$ left endpoints to approximate $\displaystyle\int_0^2 x^2\,dx$. Is it an underestimate or overestimate?
- Use $n = 4$ right endpoints to approximate $\displaystyle\int_0^2 x^2\,dx$. Compare to the true value $8/3$.
- Explain why the midpoint rule is generally more accurate than left or right sums for the same $n$.

### Study Tips

- Always compute $\Delta x = (b-a)/n$ first — it's the foundation of every Riemann sum.
- For $f \ge 0$: left sums on an increasing function **underestimate**; right sums **overestimate** (and vice versa).
- The midpoint rule error is roughly $\frac{1}{24}$ of the trapezoid rule error for smooth functions.
- Draw the rectangles — the picture tells you whether your sum is too high or too low.
- When $n$ doubles, the midpoint error shrinks by about a factor of 4.

[Previous](chapter-27.html) • [Curriculum](INDEX.md) • [Next](chapter-29.html)

