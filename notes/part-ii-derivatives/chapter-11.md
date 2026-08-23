# Chapter 11: Product and Quotient Rules — Calculus Foundations
[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Product Rule and Quotient Rule for differentiating products and quotients.

## Lecture Notes

### Product Rule

If $f(x) = h(x) \cdot g(x)$:

$$f'(x) = h(x) \cdot g'(x) + g(x) \cdot h'(x)$$

**Proof sketch:** Start from the limit definition, add and subtract $h(x+h)g(x)$ in the numerator, then split the limit into two recognizable derivative forms.

**Example:** $f(x) = (3x^5 - 7x + 2)(4x^2 + 8x)$

$$f'(x) = (3x^5 - 7x + 2)(8x + 8) + (4x^2 + 8x)(15x^4 - 7)$$

**Example:** $f(x) = (4x^3 - 2x^2 + 9x)\sqrt{x}$

$$f'(x) = (4x^3 - 2x^2 + 9x)\left(\frac{1}{2}x^{-1/2}\right) + \left(x^{1/2}\right)(12x^2 - 4x + 9)$$

### Quotient Rule

If $f(x) = \frac{h(x)}{g(x)}$:

$$f'(x) = \frac{g(x)h'(x) - h(x)g'(x)}{[g(x)]^2}$$

**Proof sketch:** Multiply by LCD $g(x+h)g(x)$, add and subtract $h(x)g(x)$ in numerator, split the limit, and evaluate.

**Example 1:** $f(x) = \frac{3x^2 + 5}{4x - 3}$

$$f'(x) = \frac{(4x - 3)(6x) - (3x^2 + 5)(4)}{(4x - 3)^2}$$

**Example 2:** $f(x) = \frac{7x^3 + 3x^2}{5x^2 + 8x - 5}$

$$f'(x) = \frac{(5x^2 + 8x - 5)(2x^2 + 6x) - (7x^3 + 3x^2)(10x + 8)}{(5x^2 + 8x - 5)^2}$$

### Chain Rule

If $f(x) = g(h(x))$:

$$f'(x) = g'(h(x)) \cdot h'(x)$$

**Example 1:** $f(x) = (3x^4 + 9x^2)^{10}$

$$f'(x) = 10(3x^4 + 9x^2)^9 \cdot (12x^3 + 18x)$$

**Example 2:** $f(x) = \sqrt[4]{4x^3 - 10x} = (4x^3 - 10x)^{1/3}$

$$f'(x) = \frac{1}{3}(4x^3 - 10x)^{-2/3} \cdot (12x^2 - 10)$$

**Example 3 (Chain with Quotient):** $f(x) = \left(\frac{3x - 5}{12x + 7}\right)^9$

$$f'(x) = 9\left(\frac{3x - 5}{12x + 7}\right)^8 \cdot \frac{(12x + 7)(3) - (3x - 5)(12)}{(12x + 7)^2}$$

**Example 4 (Product + Chain):** $f(x) = (5x - 3)^4(x^2 + 10x)$

$$f'(x) = (5x - 3)^4(2x + 10) + (x^2 + 10x) \cdot 4(5x - 3)^3 \cdot 5$$

## Video Resources

### Core Lecture

[![Core Lecture](https://img.youtube.com/vi/YG15m2VwSjA/default.jpg)](https://www.youtube.com/watch?v=YG15m2VwSjA)

### Supplementary Videos

- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=YG15m2VwSjA) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=YG15m2VwSjA) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=YG15m2VwSjA) - Full lecture coverage with worked examples

## 3.4 — The Product and Quotient Rules

The derivative of a sum is the sum of derivatives, but **multiplication and division require special rules**. 
The Product Rule and Quotient Rule are easy to misapply — memorizing them is half the battle; using them correctly is the other half.



### Key Theorems

#### Theorem — Product Rule
If $f(x) = u(x) \cdot v(x)$, where $u$ and $v$ are differentiable:


$$f'(x) = u(x) \cdot v'(x) + v(x) \cdot u'(x)$$
*Memory aid:* "First times derivative of second, plus second times derivative of first."


#### Theorem — Quotient Rule
If $f(x) = \dfrac{u(x)}{v(x)}$, where $v(x) \ne 0$ and both are differentiable:


$$f'(x) = \frac{v(x) \cdot u'(x) - u(x) \cdot v'(x)}{[v(x)]^2}$$
*Memory aid:* "Low d-high minus high d-low, over the square of what's below."

### Worked Example

**Example 3.4.1**

Differentiate $f(x) = (3x^2 - 1)(x^3 + 2x)$.

**Step 1:** Identify $u$ and $v$ and their derivatives.


$$u(x) = 3x^2 - 1 \quad \Rightarrow \quad u'(x) = 6x$$
$$v(x) = x^3 + 2x \quad \Rightarrow \quad v'(x) = 3x^2 + 2$$
**Step 2:** Apply the Product Rule.


$$f'(x) = u(x) \cdot v'(x) + v(x) \cdot u'(x)$$
$$= (3x^2 - 1)(3x^2 + 2) + (x^3 + 2x)(6x)$$
**Step 3:** Expand and simplify.


$$= (9x^4 + 6x^2 - 3x^2 - 2) + (6x^4 + 12x^2)$$
$$= 15x^4 + 15x^2 - 2$$

> **Figure:** Visualizing the Product Rule

### Practice Problems

- Differentiate $f(x) = (2x+1)(x^2 - 3x)$ using the Product Rule.

- Differentiate $f(x) = \dfrac{x^2 + 1}{x - 2}$ using the Quotient Rule.

- Simplify $(x^2+1)(x^3-2)' + (x^3-2)(x^2+1)'$ using the Product Rule.

### Study Tips

- Label $u$ and $v$ (or "high" and "low") explicitly before writing the rule — it prevents mix-ups.

- For the Quotient Rule, remember the **minus sign**: it's $v \cdot u' \mathbf{-} u \cdot v'$, not plus.

- Never simplify the denominator of the Quotient Rule prematurely; you may need to factor it later.

- The Product Rule generalizes to three or more factors: take the derivative of *exactly one* factor at a time.

---

[Previous](chapter-10.html) • [Curriculum](INDEX.md) • [Next](chapter-12.html)
