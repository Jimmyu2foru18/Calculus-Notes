# Chapter 26: L'Hopital's Rule

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> L'Hopital's Rule for evaluating indeterminate forms.

## Lecture Notes

No separate Day lecture notes are available for this chapter. The content below is synthesized from the textbook section and worked examples.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/kfF40MiS7zA/default.jpg)](https://www.youtube.com/watch?v=kfF40MiS7zA)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=kfF40MiS7zA) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=kfF40MiS7zA) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=kfF40MiS7zA) - Full lecture coverage with worked examples

## 4.7 — L'Hôpital's Rule

Limits of the form $\dfrac{0}{0}$ or $\dfrac{\infty}{\infty}$ are called **indeterminate forms** — they do not have a predetermined value. **L'Hôpital's Rule** says that under the right conditions, we can replace the numerator and denominator with their derivatives and evaluate the limit of the ratio of derivatives instead.

### Key Theorem

**Theorem — L'Hôpital's Rule**

Suppose $\displaystyle\lim_{x \to a} f(x) = \lim_{x \to a} g(x) = 0$ (or both are $\pm\infty$), and $g'(x) \ne 0$ near $a$ (except possibly at $a$). If $\displaystyle\lim_{x \to a} \frac{f'(x)}{g'(x)}$ exists (or is $\pm\infty$), then:

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

The rule also applies for limits as $x \to \infty$ and for one-sided limits.

**Important:** You may need to apply L'Hôpital's Rule *multiple times*.

### Worked Example

**Example 4.7.1**

Evaluate $\displaystyle\lim_{x \to 0} \frac{\sin 3x}{x}$.

**Step 1:** Verify it is indeterminate: $\sin(0) = 0$ and denominator $\to 0$, so form is $\frac{0}{0}$.

**Step 2:** Apply L'Hôpital's Rule.

$$\lim_{x \to 0} \frac{\sin 3x}{x} = \lim_{x \to 0} \frac{3\cos 3x}{1} = \frac{3 \cdot 1}{1} = 3$$

**Answer:** $\boxed{3}$

### Worked Example

**Example 4.7.2**

Evaluate $\displaystyle\lim_{x \to \infty} \frac{\ln x}{x}$.

**Step 1:** As $x \to \infty$, both $\ln x \to \infty$ and $x \to \infty$: form $\frac{\infty}{\infty}$.

**Step 2:** Apply L'Hôpital's Rule.

$$\lim_{x \to \infty} \frac{\ln x}{x} = \lim_{x \to \infty} \frac{\frac{1}{x}}{1} = \lim_{x \to \infty} \frac{1}{x} = 0$$

**Answer:** $\boxed{0}$

### Indeterminate Forms Comparison

> **Figure:** Common Indeterminate Forms and Their Resolutions

### Worked Example

**Example 4.7.3**

Evaluate $\displaystyle\lim_{x \to 0^+} (1 + 2x)^{1/x}$.

**Step 1:** Let $y = (1+2x)^{1/x}$. This is a $1^\infty$ indeterminate form.

**Step 2:** Take the natural logarithm.

$$\ln y = \frac{\ln(1+2x)}{x}$$

**Step 3:** Apply L'Hôpital's Rule to $\displaystyle\lim_{x \to 0^+} \frac{\ln(1+2x)}{x}$ (form $\frac{0}{0}$).

$$\lim_{x \to 0^+} \frac{\ln(1+2x)}{x} = \lim_{x \to 0^+} \frac{\frac{2}{1+2x}}{1} = 2$$

**Step 4:** Exponentiate to find $y$.

$$\ln y = 2 \;\Rightarrow\; y = e^2$$

**Answer:** $\boxed{e^2}$

### Practice Problems

- Evaluate $\displaystyle\lim_{x \to 0} \frac{e^x - 1}{x}$.
- Evaluate $\displaystyle\lim_{x \to 0} \frac{\sin 5x}{\sin 3x}$.
- Evaluate $\displaystyle\lim_{x \to \infty} x \sin\left(\frac{\pi}{x}\right)$. (Rewrite first.)
- Evaluate $\displaystyle\lim_{x \to 0^+} x^x$.

### Study Tips

- Verify the limit is indeterminate *before* applying L'Hôpital's Rule. Applying it to a determinate form gives wrong answers.
- For $0^0$, $1^\infty$, $\infty^0$, and $\infty - \infty$, first rewrite to get a fraction.
- Apply L'Hôpital's Rule *one step at a time* — recheck the form after each application.
- If $f'(x)/g'(x)$ oscillates or fails to converge, L'Hôpital's Rule is inconclusive; try another method.

[Previous](chapter-25.html) • [Curriculum](INDEX.md) • [Next](chapter-27.html)

