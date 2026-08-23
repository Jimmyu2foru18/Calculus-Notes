# Chapter 25: Mean Value Theorem

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Mean Value Theorem, Rolle's Theorem, and their geometric meaning.

## Lecture Notes

No separate Day lecture notes are available for this chapter. The content below is synthesized from the textbook section and worked examples.

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/S0_qX4VJhMQ/default.jpg)](https://www.youtube.com/watch?v=S0_qX4VJhMQ)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Full lecture coverage with worked examples

## 4.6 — Mean Value Theorem

The **Mean Value Theorem (MVT)** is one of the most important results in calculus. It guarantees that under mild conditions, a function's instantaneous rate of change at some point equals its average rate of change over an interval. Its special case, **Rolle's Theorem**, applies when the endpoint values are equal.

### Key Theorems

**Theorem — Rolle's Theorem**

Suppose $f$ satisfies:

- $f$ is continuous on $[a, b]$.
- $f$ is differentiable on $(a, b)$.
- $f(a) = f(b)$.

Then there exists at least one $c \in (a, b)$ such that $f'(c) = 0$.

**Theorem — Mean Value Theorem**

Suppose $f$ satisfies:

- $f$ is continuous on $[a, b]$.
- $f$ is differentiable on $(a, b)$.

Then there exists at least one $c \in (a, b)$ such that:

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

Geometrically, the tangent line at $c$ is parallel to the secant line from $(a, f(a))$ to $(b, f(b))$.

### Worked Example

**Example 4.6.1**

Verify that $f(x) = x^2$ satisfies the MVT on $[1, 3]$ and find $c$.

**Step 1:** Check hypotheses. $f(x) = x^2$ is continuous on $[1, 3]$ and differentiable on $(1, 3)$.

**Step 2:** Compute the average rate of change.

$$\frac{f(3) - f(1)}{3 - 1} = \frac{9 - 1}{2} = 4$$

**Step 3:** Set $f'(c)$ equal to this average and solve.

$$f'(c) = 2c = 4 \;\Rightarrow\; c = 2$$

**Answer:** The MVT applies and $c = \boxed{2}$ lies in $(1, 3)$.

> **Figure:** Mean Value Theorem: Secant and Parallel Tangent

> **Figure:** Rolle's Theorem: A Horizontal Tangent Exists When $f(a) = f(b)$

### Practice Problems

- Verify the MVT for $f(x) = x^3$ on $[0, 2]$ and find all values of $c$.
- Show that $f(x) = \sin x$ satisfies Rolle's Theorem on $[0, \pi]$ and find $c$.
- Use the MVT to prove that if $f'(x) = 0$ for all $x$, then $f$ is constant.

### Study Tips

- Always check continuity and differentiability *before* applying the MVT.
- The MVT does not tell you *which* $c$ works — only that at least one exists.
- Rolle's Theorem is a special case of the MVT where $f(a) = f(b)$; keep this in mind for proofs.
- The MVT is the theoretical backbone of many other results (including the First Derivative Test and L'Hôpital's Rule).

[Previous](chapter-24.html) • [Curriculum](INDEX.md) • [Next](chapter-26.html)

