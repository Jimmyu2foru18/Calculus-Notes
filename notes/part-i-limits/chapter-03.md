# Chapter 03: Techniques for Computing Limits

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Algebraic techniques for computing limits: factoring, rationalizing, and the Squeeze Theorem.

## Lecture Notes

### Rational Function Summary

The **Horizontal Asymptote** for a rational function $f(x) = \frac{p(x)}{q(x)}$ is determined by comparing degrees:
- If $\deg(q) > \deg(p)$, the HA is $y = 0$.
- If $\deg(p) = \deg(q)$, the HA is the ratio of leading coefficients.
- If $\deg(p) > \deg(q)$, there is no HA (but there may be an oblique asymptote if $\deg(p) = \deg(q) + 1$).

To find an oblique asymptote, perform polynomial long division of $p(x)$ by $q(x)$.

### Introduction to Limits

$$\lim_{x \to c} f(x) = L$$

Meaning: as $x$ gets arbitrarily close to $c$, $f(x)$ gets arbitrarily close to $L$. The value $f(c)$ may differ from $L$ or be undefined.

**One-Sided Limits:**
- Left-hand limit: $\displaystyle\lim_{x \to c^-} f(x)$ — approach from values less than $c$.
- Right-hand limit: $\displaystyle\lim_{x \to c^+} f(x)$ — approach from values greater than $c$.

**Existence Theorem:** If $\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = L$, then $\lim_{x \to c} f(x) = L$. If the one-sided limits disagree, the limit **DNE**.

### Evaluating Limits Numerically

When direct substitution gives an indeterminate form, evaluate one-sided limits numerically by plugging in values increasingly close to $c$ from each side.

**Example:** $\displaystyle\lim_{x \to 1} \frac{x^2 - 1}{x - 1}$

Plugging in $x = 1$ gives $\frac{0}{0}$ (undefined/indeterminate). Evaluating numerically:

| $x$ | $f(x)$ |
|-----|--------|
| 0.9 | 1.9 |
| 0.99 | 1.99 |
| 0.999 | 1.999 |
| 1.001 | 2.001 |
| 1.01 | 2.01 |
| 1.1 | 2.1 |

$\lim_{x \to 1^-} f(x) = 2$ and $\lim_{x \to 1^+} f(x) = 2$, so $\lim_{x \to 1} f(x) = 2$.

### Finding Limits Algebraically

**Theorem:** For any polynomial, rational, radical, exponential, logarithmic, trigonometric, or inverse trigonometric function, if $f(c)$ is defined then:

$$\lim_{x \to c} f(x) = f(c)$$

**Limit Laws:** If $\lim_{x \to c} f(x)$ and $\lim_{x \to c} g(x)$ both exist:
1. $\lim_{x \to c} [kf(x)] = k \cdot \lim_{x \to c} f(x)$
2. $\lim_{x \to c} [f(x) + g(x)] = \lim_{x \to c} f(x) + \lim_{x \to c} g(x)$
3. $\lim_{x \to c} [f(x) - g(x)] = \lim_{x \to c} f(x) - \lim_{x \to c} g(x)$
4. $\lim_{x \to c} [f(x) \cdot g(x)] = \Bigl(\lim_{x \to c} f(x)\Bigr)\Bigl(\lim_{x \to c} g(x)\Bigr)$
5. $\lim_{x \to c} \frac{f(x)}{g(x)} = \frac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)}$, provided $\lim_{x \to c} g(x) \neq 0$

**Key Concept:** If direct substitution gives an indeterminate form ($\frac{0}{0}$, $\frac{\infty}{\infty}$, $\infty - \infty$, $0^0$, $\infty^0$, $1^\infty$, $0 \cdot \infty$), simplify the function algebraically. If $f(x) = g(x)$ at all but finitely many points, their limits are equal.

**Example (Factoring):** $\displaystyle\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = \lim_{x \to 1} \frac{(x+1)\cancel{(x-1)}}{\cancel{x-1}} = \lim_{x \to 1} (x+1) = 2$.

**Example (Radicals):** $\displaystyle\lim_{x \to 4} \frac{x - 4}{\sqrt{x} - 2}$ — multiply numerator and denominator by the conjugate $\sqrt{x} + 2$ to get $\lim_{x \to 4} (\sqrt{x} + 2) = 4$.

**Example (Complex Fractions):** $\displaystyle\lim_{x \to 3} \frac{x - 3}{\frac{1}{9} - \frac{1}{x^2}}$ — eliminate complex fractions by multiplying by LCD $= 9x^2$, then factor and cancel to get $\frac{27}{2}$.

### Squeeze Theorem

If $g(x) \le f(x) \le h(x)$ for all $x$ near $c$, and $\lim_{x \to c} g(x) = \lim_{x \to c} h(x) = L$, then $\lim_{x \to c} f(x) = L$.

**Example:** $\lim_{x \to 0} x\sin\left(\frac{1}{x}\right) = 0$ because $-x \le x\sin(1/x) \le x$ and both outer limits are 0.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/kfF40MiS7zA/default.jpg)](https://www.youtube.com/watch?v=kfF40MiS7zA)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=kfF40MiS7zA) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=kfF40MiS7zA) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=kfF40MiS7zA) - Full lecture coverage with worked examples

## 2.3 — Techniques for Computing Limits

Most limits in calculus are not proved from scratch; they are *computed* using 
algebraic techniques. This section presents the standard toolbox: direct substitution, 
factoring, rationalizing, using the conjugate, combining fractions, and applying 
the **Squeeze (Sandwich) Theorem**.

### Limit Laws

#### Theorem — Algebraic Limit Laws

Suppose $\lim_{x \to c} f(x)$ and $\lim_{x \to c} g(x)$ both exist. Then:

1. $\displaystyle\lim_{x \to c} [f(x) + g(x)] = \lim_{x \to c} f(x) + \lim_{x \to c} g(x)$
2. $\displaystyle\lim_{x \to c} [f(x) - g(x)] = \lim_{x \to c} f(x) - \lim_{x \to c} g(x)$
3. $\displaystyle\lim_{x \to c} [k\,f(x)] = k\,\lim_{x \to c} f(x)$ for any constant $k$
4. $\displaystyle\lim_{x \to c} [f(x) \cdot g(x)] = \Bigl(\lim_{x \to c} f(x)\Bigr)\Bigl(\lim_{x \to c} g(x)\Bigr)$
5. $\displaystyle\lim_{x \to c} \frac{f(x)}{g(x)} = \frac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)}$, 
provided $\lim_{x \to c} g(x) \neq 0$

Additionally, for *polynomials* and *rational functions* (and other "nice" 
functions continuous at $c$):

$$\text{If $f$ is continuous at $c$, then } \lim_{x \to c} f(x) = f(c).$$

### Worked Examples

#### Example 2.3.1 — Direct Substitution

Evaluate $\displaystyle\lim_{x \to 2} (x^3 - 4x + 5)$.

**Solution:** Since this is a polynomial, it is continuous everywhere. 
Substitute $x = 2$:

$$\lim_{x \to 2} (x^3 - 4x + 5) = 2^3 - 4(2) + 5 = 8 - 8 + 5 = \boxed{5}.$$

#### Example 2.3.2 — Factoring (0/0 Form)

Evaluate $\displaystyle\lim_{x \to 3} \frac{x^2 - 9}{x - 3}$.

**Solution:** Direct substitution yields $\frac{0}{0}$, an indeterminate form. 
Factor the numerator:

$$\frac{x^2 - 9}{x - 3} = \frac{(x - 3)(x + 3)}{x - 3} = x + 3 \quad \text{for } x \neq 3.$$

The simplified function agrees with the original everywhere except at $x = 3$, 
so their limits are equal:

$$\lim_{x \to 3} \frac{x^2 - 9}{x - 3} = \lim_{x \to 3} (x + 3) = 3 + 3 = \boxed{6}.$$

#### Example 2.3.3 — Rationalizing

Evaluate $\displaystyle\lim_{x \to 4} \frac{x - 4}{\sqrt{x} - 2}$.

**Solution:** Direct substitution gives $0/0$. Multiply numerator and denominator 
by the conjugate $\sqrt{x} + 2$:

$$\frac{x - 4}{\sqrt{x} - 2} \cdot \frac{\sqrt{x} + 2}{\sqrt{x} + 2} 
= \frac{(x - 4)(\sqrt{x} + 2)}{x - 4} = \sqrt{x} + 2 \quad (x \neq 4).$$

Therefore,

$$\lim_{x \to 4} \frac{x - 4}{\sqrt{x} - 2} = \lim_{x \to 4} (\sqrt{x} + 2) = \sqrt{4} + 2 = \boxed{4}.$$

#### Example 2.3.4 — Squeeze Theorem

Show that $\displaystyle\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = 0$.

**Solution:** Since $-1 \leq \sin(1/x) \leq 1$ for all $x \neq 0$, we have

$$-x^2 \;\leq\; x^2 \sin\!\left(\frac{1}{x}\right) \;\leq\; x^2.$$

Because $\lim_{x \to 0} (-x^2) = \lim_{x \to 0} x^2 = 0$, the Squeeze Theorem gives

$$\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = \boxed{0}.$$

### Visual Summary — Algebraic Steps

> **Figure:** Figure 2.3.1 — Decision Tree for Computing Limits

### Practice Problems

**Problem 1 — Factor and cancel**

Compute $\displaystyle\lim_{x \to -2} \frac{x^2 - 4}{x + 2}$.

**Answer:**

Factor $x^2 - 4 = (x-2)(x+2)$. Cancel $(x+2)$ to get $x-2$, 
then substitute $-2$ to obtain $-4$.

---

**Problem 2 — Complex fraction**

Compute $\displaystyle\lim_{x \to 3} \frac{x - 3}{\dfrac{1}{9} - \dfrac{1}{x^2}}$.

**Answer:**

Multiply numerator and denominator by the LCD $9x^2$, 
factor, cancel $(x-3)$, and substitute $x = 3$ to get $\dfrac{27}{2}$.

---

**Problem 3 — Radical conjugate**

Compute $\displaystyle\lim_{x \to 9} \frac{9 - x}{3 - \sqrt{x}}$.

**Answer:**

Multiply by $3 + \sqrt{x}$ to get $\frac{(9-x)(3+\sqrt{x})}{9 - x} = 3 + \sqrt{x}$. 
The limit is $3 + 3 = 6$.

---

### Study Tips

**1.** Always try *direct substitution first*. If it produces a finite number, you are done.

**2.** If substitution gives $\frac{0}{0}$, look for a common factor to cancel, 
a conjugate to multiply by, or a trigonometric identity to apply.

**3.** Keep a list of *indeterminate forms*: $\frac{0}{0}$, $\frac{\infty}{\infty}$, 
$0 \cdot \infty$, $\infty - \infty$, $0^0$, $1^\infty$, $\infty^0$. Each signals that algebraic 
manipulation is needed.

[Previous](chapter-02.html) • [Curriculum](INDEX.md) • [Next](chapter-04.html)