# Chapter 06: Limits at Infinity

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Limits at infinity and horizontal asymptotes — understanding end behavior.

## Lecture Notes

No separate Day lecture notes are available for this chapter. The content below is synthesized from the textbook section and worked examples.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/kfF40MiS7zA/default.jpg)](https://www.youtube.com/watch?v=kfF40MiS7zA)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=WUvTyaaNkzM) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=kfF40MiS7zA) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=kfF40MiS7zA) - Full lecture coverage with worked examples

## 2.5 — Limits at Infinity

Infinite limits describe what happens as $x$ approaches a *finite* value. 
**Limits at infinity** describe what happens as $x$ itself grows without bound: 
$x \to +\infty$ or $x \to -\infty$. These characterize the **end behavior** of 
functions and define **horizontal asymptotes**.

### Definitions

#### Definition — Limit at $+\infty$

$\displaystyle\lim_{x \to \infty} f(x) = L$ means: as $x$ grows larger and larger, 
the values of $f(x)$ get arbitrarily close to $L$. 

Geometrically: the right tail of the graph enters and stays inside a horizontal 
neighborhood of $L$.

#### Definition — Limit at $-\infty$

$\displaystyle\lim_{x \to -\infty} f(x) = L$ means: as $x$ grows more and more negative, 
the values of $f(x)$ get arbitrarily close to $L$.

Geometrically: the left tail of the graph enters and stays inside a horizontal 
neighborhood of $L$.

### Horizontal Asymptotes

The line $y = L$ is a **horizontal asymptote** of $f$ if 
$\lim_{x \to \infty} f(x) = L$ or $\lim_{x \to -\infty} f(x) = L$ (or both).

### Visualization

> **Figure:** Figure 2.5.1 — Horizontal Asymptote

Both tails approach $y = 2$. The dashed orange line is the horizontal asymptote.

### Worked Examples

#### Example 2.5.1 — Rational Function

Evaluate $\displaystyle\lim_{x \to \infty} \frac{3x^2 + 2x - 1}{5x^2 - x + 4}$.

**Solution:** Divide numerator and denominator by $x^2$:

$$\frac{3 + \frac{2}{x} - \frac{1}{x^2}}{5 - \frac{1}{x} + \frac{4}{x^2}} \;\xrightarrow{x \to \infty}\; \frac{3 + 0 - 0}{5 - 0 + 0} = \boxed{\frac{3}{5}}.$$

The horizontal asymptote is $y = \dfrac{3}{5}$.

#### Example 2.5.2 — Exponential Decay

Evaluate $\displaystyle\lim_{x \to \infty} e^{-x}$.

**Solution:** As $x \to \infty$, $-x \to -\infty$, so $e^{-x} \to 0$. 
Thus $\lim_{x \to \infty} e^{-x} = \boxed{0}$. 
The line $y = 0$ (the $x$-axis) is a horizontal asymptote.

#### Example 2.5.3 — End Behavior of a Polynomial

Find $\displaystyle\lim_{x \to \infty} (2x^3 - 7x + 4)$.

**Solution:** The leading term $2x^3$ dominates. As $x \to \infty$, 
$2x^3 \to +\infty$, and lower-degree terms become negligible:

$$\lim_{x \to \infty} (2x^3 - 7x + 4) = +\infty.$$

There is *no* horizontal asymptote; the polynomial grows without bound.

### Practice Problems

**Problem 1 — Rational limit at infinity**

Compute $\displaystyle\lim_{x \to -\infty} \frac{4x^3 - x}{2x^3 + 5}$.

**Answer:**

Divide by $x^3$: $\frac{4 - 1/x^2}{2 + 5/x^3} \to \frac{4}{2} = 2$.

---

**Problem 2 — Root over linear**

Compute $\displaystyle\lim_{x \to \infty} \frac{\sqrt{9x^2 + 2}}{3x}$.

**Answer:**

Divide numerator and denominator by $x$: 
$\frac{\sqrt{9 + 2/x^2}}{3} \to \frac{\sqrt{9}}{3} = 1$.

---

**Problem 3 — Exponential dominates polynomial**

Compute $\displaystyle\lim_{x \to \infty} \frac{x^5}{e^x}$.

**Answer:**

The exponential grows faster than any polynomial, so the limit is $0$.
(Repeated L'Hôpital's Rule or the known fact $\lim_{x \to \infty} \frac{x^n}{e^x} = 0$.)

---

### Study Tips

**1.** For rational functions, compare the degrees of numerator and denominator. 
If degrees match, the limit is the ratio of leading coefficients.

**2.** When a square root is involved, divide by the highest power of $x$ 
*under* the root, then simplify.

**3.** Remember the hierarchy: constants $<$ polynomials $<$ exponentials $<$ factorials. 
This tells you which term "wins" at infinity.

[Previous](chapter-05.html) • [Curriculum](INDEX.md) • [Next](chapter-07.html)