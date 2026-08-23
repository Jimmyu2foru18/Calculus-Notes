# Chapter 09: Working with Derivatives

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Interpreting derivatives: increasing/decreasing, slope, and motion.

## Lecture Notes

### Derivative Definition and Basic Rules

**Definition:** $f'(x) = \lim\limits_{h \to 0} \frac{f(x+h) - f(x)}{h}$

**Power Rule:** If $f(x) = x^n$, then $f'(x) = n \cdot x^{n-1}$.

**Constant Multiple Rule:** If $f(x) = c \cdot g(x)$, then $f'(x) = c \cdot g'(x)$.

**Sum/Difference Rule:** If $f(x) = g(x) \pm h(x)$, then $f'(x) = g'(x) \pm h'(x)$.

**Examples:**
- $f(x) = 3x^4 - 7x^2 + 3x \Rightarrow f'(x) = 12x^3 - 14x + 3$
- $f(x) = \sqrt{x} - 5x^2 \Rightarrow f'(x) = \frac{1}{2\sqrt{x}} - 10x$
- $f(x) = 3x + \frac{7}{x^3} \Rightarrow f'(x) = 3 - \frac{21}{x^4}$

### Product Rule

If $f(x) = h(x) \cdot g(x)$:

$$f'(x) = h(x) \cdot g'(x) + g(x) \cdot h'(x)$$

**Example:** $f(x) = (3x^5 - 7x + 2)(4x^2 + 8x)$

$$f'(x) = (3x^5 - 7x + 2)(8x + 8) + (4x^2 + 8x)(15x^4 - 7)$$

### Quotient Rule

If $f(x) = \frac{h(x)}{g(x)}$:

$$f'(x) = \frac{g(x)h'(x) - h(x)g'(x)}{[g(x)]^2}$$

**Example:** $f(x) = \frac{3x^2 + 5}{4x - 3}$

$$f'(x) = \frac{(4x - 3)(6x) - (3x^2 + 5)(4)}{(4x - 3)^2}$$

### Chain Rule

If $f(x) = g(h(x))$:

$$f'(x) = g'(h(x)) \cdot h'(x)$$

**Example:** $f(x) = (3x^4 + 9x^2)^{10}$

$$f'(x) = 10(3x^4 + 9x^2)^9 \cdot (12x^3 + 18x)$$

**Example (quotient inside chain):** $f(x) = \left(\frac{3x - 5}{12x + 7}\right)^9$

$$f'(x) = 9\left(\frac{3x - 5}{12x + 7}\right)^8 \cdot \frac{(12x + 7)(3) - (3x - 5)(12)}{(12x + 7)^2}$$

### Derivatives of Transcendental Functions

**Exponential:**
- $\frac{d}{dx}(e^x) = e^x$
- $\frac{d}{dx}(a^x) = a^x \ln(a)$

**Logarithmic:**
- $\frac{d}{dx}(\ln x) = \frac{1}{x}$
- $\frac{d}{dx}(\log_a x) = \frac{1}{x \ln(a)}$

**Trigonometric:**
- $\frac{d}{dx}(\sin x) = \cos x$
- $\frac{d}{dx}(\cos x) = -\sin x$
- $\frac{d}{dx}(\tan x) = \sec^2 x$
- $\frac{d}{dx}(\cot x) = -\csc^2 x$
- $\frac{d}{dx}(\sec x) = \sec x \tan x$
- $\frac{d}{dx}(\csc x) = -\csc x \cot x$

**Inverse Trigonometric:**
- $\frac{d}{dx}(\sin^{-1} x) = \frac{1}{\sqrt{1 - x^2}}$
- $\frac{d}{dx}(\cos^{-1} x) = \frac{-1}{\sqrt{1 - x^2}}$
- $\frac{d}{dx}(\tan^{-1} x) = \frac{1}{1 + x^2}$
- $\frac{d}{dx}(\cot^{-1} x) = \frac{-1}{1 + x^2}$
- $\frac{d}{dx}(\sec^{-1} x) = \frac{1}{|x|\sqrt{x^2 - 1}}$
- $\frac{d}{dx}(\csc^{-1} x) = \frac{-1}{|x|\sqrt{x^2 - 1}}$

### Tangent and Normal Lines

A **tangent line** touches a curve at one point. The derivative $f'(x)$ gives its slope.

A **normal line** is perpendicular to the tangent line. Its slope is $-\frac{1}{f'(x)}$.

**Example:** Tangent and normal to $f(x) = 3x^3 + 4x - 5$ at $x = -2$:
- $f(-2) = -37$, point is $(-2, -37)$.
- $f'(x) = 9x^2 + 4$, $f'(-2) = 40$.
- Tangent: $y + 37 = 40(x + 2)$
- Normal: $y + 37 = -\frac{1}{40}(x + 2)$

### Higher-Order Derivatives

- $f''(x)$ is the **second derivative** (derivative of $f'(x)$).
- $f'''(x)$ is the **third derivative**.
- $f^{(\mathrm{IV})}(x)$ is the **fourth derivative**, and so on.

**Example:** $f(x) = 3x^5 + 4x^3 - 2x + 1$
- $f'(x) = 15x^4 + 12x^2 - 2$
- $f''(x) = 60x^3 + 24x$
- $f'''(x) = 180x^2 + 24$

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/S0_qX4VJhMQ/default.jpg)](https://www.youtube.com/watch?v=S0_qX4VJhMQ)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Full lecture coverage with worked examples

## 3.2 — Working with Derivatives

Once we know the derivative exists, what does it *mean*? The derivative $f'(x)$ is the 
**instantaneous rate of change** of $f$ with respect to $x$. 
Its value tells us the slope of the tangent line, and its **sign** tells us whether $f$ is increasing, decreasing, or flat at that point.

### Key Definitions

#### Definition — Increasing, Decreasing, and Constant

Let $f$ be differentiable on an interval $I$.

- $f$ is **increasing** on $I$ if $f'(x) > 0$ for all $x \in I$.
- $f$ is **decreasing** on $I$ if $f'(x) < 0$ for all $x \in I$.
- $f$ is **constant** on $I$ if $f'(x) = 0$ for all $x \in I$.

### Worked Example — Interpreting the Derivative

**Example 3.2.1**

Let $f(x) = x^3 - 6x^2 + 9x + 1$. Determine where $f$ is increasing and decreasing.

**Step 1:** Compute $f'(x)$ using the Power Rule.

$$f'(x) = 3x^2 - 12x + 9$$

**Step 2:** Factor $f'(x)$ to find critical points.

$$f'(x) = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$$

**Step 3:** Test the sign of $f'$ on each interval.

- On $(-\infty, 1)$: pick $x = 0 \Rightarrow f'(0) = 3(0-1)(0-3) = 9 > 0$ → **increasing**
- On $(1, 3)$: pick $x = 2 \Rightarrow f'(2) = 3(1)(-1) = -3 < 0$ → **decreasing**
- On $(3, \infty)$: pick $x = 4 \Rightarrow f'(4) = 3(3)(1) = 9 > 0$ → **increasing**

**Conclusion:** $f$ increases on $(-\infty, 1) \cup (3, \infty)$ and decreases on $(1, 3)$.

### Derivative as Slope

> **Figure:** Figure 3.2 — The Derivative Gives the Slope of the Tangent Line

Figure 3.2: The derivative $f'(x)$ equals the slope of the tangent line at $(x, f(x))$.

### Practice Problems

1. Find $f'(x)$ for $f(x) = 4x^3 - x^2 + 7$. Where is $f$ increasing?
2. Find $f'(x)$ for $f(x) = \frac{1}{3}x^3 - 2x^2 + 3x$. Determine the intervals of increase and decrease.
3. True or False: If $f'(2) = 0$, then $f$ has a local maximum at $x = 2$. Explain.

---

### Study Tips

- Sign charts are your friend — draw them for every sign-analysis problem.
- Always factor the derivative completely before testing intervals.
- Remember: $f'(c) = 0$ is necessary but not sufficient for a local extremum.
- Relate the algebraic result back to the graph: "positive slope → rising curve."

[Previous](chapter-08.html) • [Curriculum](INDEX.md) • [Next](chapter-10.html)