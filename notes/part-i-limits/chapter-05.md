# Chapter 05: Infinite Limits

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Infinite limits and vertical asymptotes — when functions grow without bound.

## Lecture Notes

### Evaluating Limits by Substitution

**Step 1:** Try direct substitution. If $f(c)$ is defined and finite, $\lim_{x \to c} f(x) = f(c)$.

**Step 2:** If substitution yields $\frac{0}{0}$, the function may have a removable discontinuity or the limit may exist after simplification.

**Step 3:** If substitution yields $\frac{\text{nonzero}}{0}$, there is a vertical asymptote. Evaluate one-sided limits numerically.

### Infinite Limits at Infinity

For rational functions, use the **Hand Waving Rule**:
- **Bottom Heavy** ($\deg(q) > \deg(p)$): limit is 0.
- **Balanced** ($\deg(p) = \deg(q)$): limit is the ratio of leading coefficients.
- **Top Heavy** ($\deg(p) > \deg(q)$): limit is $\pm\infty$, determined by signs of leading terms.

**Watch signs carefully when $x \to -\infty$:**

$$\lim_{x \to -\infty} \frac{2x^3 + 4x + 1}{5x^2 - 10x} = \frac{2x^3}{5x^2} = \frac{-}{+} = -\infty$$

### Infinite Limits with Radicals

$$\lim_{x \to \infty} \frac{5x^2 + 3x - \sqrt{9x^2}}{3x^2 + 5x + 3} = \lim_{x \to \infty} \frac{5x^2 - 3x}{3x^2} = -\frac{2}{3}$$

$$\lim_{x \to \infty} \frac{5x^3 \cdot 8x^4 - 9x + 2}{\sqrt{2x^3} \cdot 3x^4 + 7x^2} = \frac{5x^3}{5|x^3|} = \frac{x^3}{|x^3|}$$

When $x \to \infty$, $\frac{x^3}{|x^3|} = 1$. When $x \to -\infty$, $\frac{x^3}{|x^3|} = -1$.

### Squeeze Theorem

If $g(x) \le f(x) \le h(x)$ for all $x$ near $c$, and $\lim_{x \to c} g(x) = \lim_{x \to c} h(x) = L$, then $\lim_{x \to c} f(x) = L$.

**Example:** Show $\lim_{x \to 0} x^2 \cos(1/x^2) = 0$.

Since $-1 \le \cos(1/x^2) \le 1$, multiply by $x^2$:
$$-x^2 \le x^2\cos(1/x^2) \le x^2$$
Taking limits: $0 \le \lim_{x \to 0} x^2\cos(1/x^2) \le 0$, so the limit is 0.

**Key Trig Limit:**

$$\lim_{x \to 0} \frac{\sin x}{x} = 1$$

**Corollaries:**
$$\lim_{x \to 0} \frac{\sin(ax)}{bx} = \frac{a}{b}, \qquad \lim_{x \to 0} \frac{1 - \cos x}{x} = 0$$

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/kfF40MiS7zA/default.jpg)](https://www.youtube.com/watch?v=kfF40MiS7zA)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=kfF40MiS7zA) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=kfF40MiS7zA) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=kfF40MiS7zA) - Full lecture coverage with worked examples

## 2.4 — Infinite Limits

Not every limit produces a finite number. When $f(x)$ grows without bound as $x$ approaches $c$, 
we describe this with **infinite limits**. These capture the behavior near a 
**vertical asymptote**.

### Definition

#### Definition — Infinite Limit

We write $\displaystyle\lim_{x \to c} f(x) = \infty$ if for every $M > 0$ there exists 
$\delta > 0$ such that

$$0 < |x - c| < \delta \;\Longrightarrow\; f(x) > M.$$

Similarly, $\lim_{x \to c} f(x) = -\infty$ if $f(x) < -M$ for all $x$ sufficiently close to $c$.

*Note:* Saying a limit "equals infinity" is a shorthand for **unbounded growth**. 
Technically, the limit does not exist, but the description tells us *how* it fails to exist.

### Vertical Asymptotes

The line $x = c$ is a **vertical asymptote** of $f$ if at least one of 
$\lim_{x \to c^-} f(x)$, $\lim_{x \to c^+} f(x)$ equals $\pm\infty$.

### Visualization

> **Figure:** Figure 2.4.1 — Vertical Asymptote

As $x \to 2$ from either side, $f(x) \to +\infty$. The dashed orange line at $x = 2$ is the 
vertical asymptote.

### Worked Examples

#### Example 2.4.1

Evaluate $\displaystyle\lim_{x \to 0^+} \frac{1}{x}$ and $\displaystyle\lim_{x \to 0^-} \frac{1}{x}$.

**Solution:** 

- For $x > 0$ small, $\frac{1}{x}$ is large and positive, so $\lim_{x \to 0^+} \frac{1}{x} = +\infty$.
- For $x < 0$ small, $\frac{1}{x}$ is large and negative, so $\lim_{x \to 0^-} \frac{1}{x} = -\infty$.

Because the one-sided limits disagree in sign, $\lim_{x \to 0} \frac{1}{x}$ does not exist.

#### Example 2.4.2

Evaluate $\displaystyle\lim_{x \to 2} \frac{3}{x - 2}$.

**Solution:** As $x \to 2^+$, $x - 2 > 0$ and small, so the fraction $\to +\infty$. 
As $x \to 2^-$, $x - 2 < 0$ and small, so the fraction $\to -\infty$. 
The two-sided limit DNE. The line $x = 2$ is a vertical asymptote.

### Practice Problems

**Problem 1 — Infinite logarithmic limit**

Show that $\displaystyle\lim_{x \to 0^+} \ln x = -\infty$.

**Hint:** As $x \to 0^+$, values like $e^{-10}$, $e^{-100}$, $e^{-1000}$ show 
the logarithm dives without bound.

---

**Problem 2 — Squared denominator**

Evaluate $\displaystyle\lim_{x \to 1} \frac{1}{(x - 1)^2}$.

**Answer:**

Both one-sided limits are $+\infty$ because $(x-1)^2 > 0$ for $x \neq 1$.
We write $\lim_{x \to 1} \frac{1}{(x - 1)^2} = +\infty$.

---

### Study Tips

**1.** Infinite limits describe *unbounded behavior*, not actual numbers. 
Never write $\infty$ as a term in an algebraic equation.

**2.** A two-sided infinite limit requires *both* one-sided limits to be $+\infty$ 
(or both $-\infty$). Mixed signs mean DNE.

**3.** Rational functions with a factor $(x - c)^n$ in the denominator 
(and not canceled) always have a vertical asymptote at $x = c$. The sign of $n$ and 
the remaining numerator determine the direction of blow-up.

[Previous](chapter-04.html) • [Curriculum](INDEX.md) • [Next](chapter-06.html)