# Chapter 15: Implicit Differentiation — Calculus Foundations
[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Implicit differentiation for curves defined by equations in x and y.

## Lecture Notes

### Implicit Differentiation — Practice Problems

**Strategy:** Differentiate both sides with respect to $x$, treating $y$ as a function of $x$. Collect all $\frac{dy}{dx}$ terms on one side, factor, and solve.

**Problem 1:** $3x^2 + 5y = y^3 - 2x$
$$\frac{d}{dx}[3x^2 + 5y] = \frac{d}{dx}[y^3 - 2x]$$
$$6x + 5\frac{dy}{dx} = 3y^2\frac{dy}{dx} - 2$$
$$6x + 2 = \frac{dy}{dx}(3y^2 - 5)$$
$$\frac{dy}{dx} = \frac{6x + 2}{3y^2 - 5}$$

**Problem 2:** $4x^2y + y^2 = 5xy - x^2$
$$\frac{d}{dx}[4x^2y + y^2] = \frac{d}{dx}[5xy - x^2]$$
$$4x^2\frac{dy}{dx} + y(8x) + 2y\frac{dy}{dx} = 5x\frac{dy}{dx} + 5y - 2x$$
$$\frac{dy}{dx}(4x^2 + 2y - 5x) = 5y - 2x - 8xy$$
$$\frac{dy}{dx} = \frac{5y - 2x - 8xy}{4x^2 + 2y - 5x}$$

**Problem 3:** $(3x + 2y)^4 - y^2 = 4x + 1$
$$4(3x + 2y)^3 \cdot \left(3 + 2\frac{dy}{dx}\right) - 2y\frac{dy}{dx} = 4$$
$$\frac{dy}{dx}[8(3x + 2y)^3 - 2y] = 4 - 12(3x + 2y)^3$$

### Second Derivatives Implicitly

The derivative of $\frac{dy}{dx}$ is $\frac{d^2y}{dx^2}$. After solving for $\frac{dy}{dx}$, differentiate again and substitute $\frac{dy}{dx}$ wherever it appears.

**Example:** From $3x^2 - 2y + y^2 = 5x - 4$, we have $\frac{dy}{dx} = \frac{5 - 6x}{2y - 2}$.

$$\frac{d^2y}{dx^2} = \frac{(2y - 2)(-6) - (5 - 6x)\left(2\frac{dy}{dx}\right)}{(2y - 2)^2}$$

Substitute $\frac{dy}{dx} = \frac{5 - 6x}{2y - 2}$:
$$\frac{d^2y}{dx^2} = \frac{(2y - 2)(-6) - (5 - 6x)\left(2 \cdot \frac{5 - 6x}{2y - 2}\right)}{(2y - 2)^2}$$

### Linear Motion Problems

If a particle's position is $S(t)$, then:
- **Velocity:** $V(t) = S'(t)$
- **Acceleration:** $a(t) = V'(t) = S''(t)$

**Example:** $S(t) = \frac{1}{3}t^3 + t^2 - 32t$
$$V(t) = t^2 + 4t - 32, \quad a(t) = 2t + 4$$
- Particle is stopped when $V(t) = 0$: $t^2 + 4t - 32 = (t+8)(t-4) = 0 \Rightarrow t = 4$ (ignoring negative time).
- $a(5) = 2(5) + 4 = 14$.

### Differentiability

A function is **differentiable at $x = c$** if:
1. $f$ is continuous at $x = c$.
2. $f$ is smooth (no sharp points) at $x = c$.
3. $f$ does not have a vertical tangent at $x = c$.

**Not differentiable at:** discontinuities, sharp points (kinks/cusps), vertical tangents.

**Example:** $f(x) = |x|$ — continuous at $x = 0$ but not differentiable:
$$f'(x) = \begin{cases} -1, & x < 0 \\ 1, & x > 0 \end{cases}$$
Derivative branches do not match at $x = 0$.

## Video Resources

### Core Lecture

[![Core Lecture](https://img.youtube.com/vi/qb40J4N1fa4/default.jpg)](https://www.youtube.com/watch?v=qb40J4N1fa4)

### Supplementary Videos

- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=qb40J4N1fa4) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=qb40J4N1fa4) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=qb40J4N1fa4) - Full lecture coverage with worked examples

## 3.8 — Implicit Differentiation

Most curves in calculus — circles, ellipses, hyperbolas — are not functions $y = f(x)$ at all. 
They are defined **implicitly** by an equation involving both $x$ and $y$, like $x^2 + y^2 = 1$. 
**Implicit differentiation** lets us find $\dfrac{dy}{dx}$ without solving for $y$ explicitly, 
by differentiating both sides of the equation and remembering that $y$ is a function of $x$.


### Key Definitions

- Differentiate both sides of the equation with respect to $x$.

- Treat $y$ as a function of $x$: when differentiating $y$, write $\dfrac{dy}{dx}$ (or $y'$).

- Collect all terms containing $\dfrac{dy}{dx}$ on one side.

- Factor out $\dfrac{dy}{dx}$ and solve for it.

### Worked Example

**Example 3.8.1**

Find $\dfrac{dy}{dx}$ for the circle $x^2 + y^2 = 25$.

**Step 1:** Differentiate both sides with respect to $x$.


$$\frac{d}{dx}(x^2) + \frac{d}{dx}(y^2) = \frac{d}{dx}(25)$$
$$2x + 2y\frac{dy}{dx} = 0$$
**Step 2:** Solve for $\dfrac{dy}{dx}$.


$$2y\frac{dy}{dx} = -2x$$
$$\frac{dy}{dx} = -\frac{x}{y}$$
**Answer:** For any point $(x,y)$ on the circle, the slope is $\boxed{-\dfrac{x}{y}}$.

> **Figure:** An Implicit Curve and Its Tangent

### Practice Problems

- Find $\dfrac{dy}{dx}$ for the ellipse $4x^2 + 9y^2 = 36$.

- Find $\dfrac{dy}{dx}$ for $x^3 + y^3 = 6xy$ (the folium of Descartes).

- Find the equation of the tangent line to $x^2 + xy + y^2 = 7$ at the point $(1, 2)$.

### Study Tips

- When differentiating $y^n$, use the Chain Rule: $\dfrac{d}{dx}(y^n) = n y^{n-1} \dfrac{dy}{dx}$.

- Don't solve for $y$ first — that's usually harder and often impossible in closed form.

- After finding $\dfrac{dy}{dx}$, check its sign against the curve's shape to verify.

- At points where the tangent is vertical, $\dfrac{dy}{dx}$ is undefined but $\dfrac{dx}{dy}$ may be zero.

---

[Previous](chapter-14.html) • [Curriculum](INDEX.md) • [Next](chapter-16.html)
