# Chapter 13: Derivatives as Rates of Change — Calculus Foundations
[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Derivatives as rates of change in physics, engineering, and related rates.

## Lecture Notes

### First Derivative Test

Used to find relative extrema (minima or maxima):

1. Take the derivative of $f(x)$ to get $f'(x)$.
2. Find all critical values of $f'(x)$ (where $f'(x) = 0$ or $f'(x)$ is undefined).
3. Plot critical values on a number line and test a point in each section.
4. Examine the sign changes:
   - $-$ to $+$ $\Rightarrow$ relative minimum.
   - $+$ to $-$ $\Rightarrow$ relative maximum.
   - No sign change $\Rightarrow$ plateau.

**Example:** $f(x) = \frac{1}{3}x^3 + 3x^2 + 8x$
$$f'(x) = x^2 + 6x + 8 = (x+4)(x+2)$$
Critical values: $x = -4, -2$.
- $f'(-5) = 3 > 0$ (increasing on $(-\infty, -4)$)
- $f'(-3) = -1 < 0$ (decreasing on $(-4, -2)$)
- $f'(0) = 8 > 0$ (increasing on $(-2, \infty)$)
- Relative maximum at $x = -4$, relative minimum at $x = -2$.

### Curve Sketching Steps

1. **Find the domain** — identify holes and vertical asymptotes.
2. **Find all x and y intercepts.**
3. **Find any asymptotes** — vertical (denominator $= 0$), horizontal ($\lim_{x \to \pm\infty} f(x)$), oblique (long division when numerator degree $=$ denominator degree $+ 1$).
4. **Check for symmetry** — plug in $f(-x)$; even if $f(-x) = f(x)$, odd if $f(-x) = -f(x)$.
5. **Find relative extrema and intervals of increasing/decreasing** — use first derivative.
6. **Find points of inflection and intervals of concave up/down** — use second derivative.
7. **Find y-coordinates** of key points.
8. **Sketch the graph.**

### Second Derivative and Concavity

The second derivative $f''(x)$ tells us about the curvature:
- If $f''(x) > 0$, $f'(x)$ is increasing $\Rightarrow$ $f$ is **concave up**.
- If $f''(x) < 0$, $f'(x)$ is decreasing $\Rightarrow$ $f$ is **concave down**.
- At a **point of inflection**, concavity switches.

**Example:** $f(x) = \frac{1}{3}x^3 + 3x^2 + 8x$
$$f''(x) = 2x + 6 = 0 \Rightarrow x = -3$$
- Concave down on $(-\infty, -3)$
- Concave up on $(-3, \infty)$
- Point of inflection at $x = -3$

### Absolute (Global) Extrema

The **absolute maximum** and **absolute minimum** are the highest and lowest points anywhere in the domain.

**To find on $[a, b]$:**
1. Find relative extrema using $f'(x)$.
2. Plug in relative extrema and endpoints into $f(x)$.
3. The highest/lowest values are the absolute extrema.

**Example:** $f(x) = \frac{1}{3}x^3 + 2x^2 + 3x$ on $[-4, 1]$
$$f'(x) = x^2 + 4x + 3 = (x+3)(x+1) = 0 \Rightarrow x = -3, -1$$
Check: $f(-4) = -\frac{4}{3}$, $f(-3) = 0$, $f(-1) = -\frac{4}{3}$, $f(1) = \frac{16}{3}$.
- Absolute max at $(1, \frac{16}{3})$
- Absolute min at $(-4, -\frac{4}{3})$ and $(-1, -\frac{4}{3})$

### Analyzing Functions via $f'(x)$ Graph

From the graph of $f'(x)$:
- $f'(x) > 0 \Rightarrow f$ is increasing.
- $f'(x) < 0 \Rightarrow f$ is decreasing.
- $f'(x) = 0$ or undefined $\Rightarrow$ possible relative extrema.
- Turning points of $f'(x)$ $\Rightarrow$ possible inflection points of $f$.

**Example:** Given $f'(x)$ graph with x-intercepts at $-5, 2, 4, 8$ and turning points at $-2, 1, 6$:
- $f$ increasing on $(-5, 2) \cup (8, \infty)$
- $f$ decreasing on $(-\infty, -5) \cup (4, 8)$
- Relative max at $x = 4$, relative minima at $x = -5, 8$
- Inflection points at $x = -2, 1, 6$

### Optimization

The process of using derivatives to find minimum or maximum values.

**Steps:**
1. Draw a diagram.
2. Write the objective function.
3. Write a constraint equation to eliminate extra variables.
4. Take the derivative of the objective function.
5. Set the derivative equal to zero and solve.
6. Answer the question.

**Example:** Maximize area of rectangle with perimeter 80 cm.

$$P = 2x + 2y = 80 \Rightarrow y = 40 - x$$
$$A = xy = x(40 - x) = 40x - x^2$$
$$A' = 40 - 2x = 0 \Rightarrow x = 20$$
Max area $= 20(20) = 400$ cm$^2$.

**Example:** Minimize surface area of a cylindrical can with $V = 150$.

$$SA = 2\pi rh + 2\pi r^2, \quad h = \frac{150}{\pi r^2}$$
$$SA = \frac{300}{r} + 2\pi r^2$$
$$SA' = -\frac{300}{r^2} + 4\pi r = 0 \Rightarrow r^3 = \frac{75}{\pi} \Rightarrow r \approx 2.88, \quad h \approx 5.76$$

## Video Resources

### Core Lecture

[![Core Lecture](https://img.youtube.com/vi/9vKqVkMQHKk/default.jpg)](https://www.youtube.com/watch?v=9vKqVkMQHKk)

### Supplementary Videos

- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=9vKqVkMQHKk) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=9vKqVkMQHKk) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=9vKqVkMQHKk) - Full lecture coverage with worked examples

## 3.6 — Derivatives as Rates of Change

In physics and engineering, the derivative is rarely just a slope — it is a **rate**: 
velocity is the rate of change of position, acceleration is the rate of change of velocity, 
and marginal cost is the rate of change of total cost. 
The units of $f'(x)$ are $\dfrac{\text{units of }f}{\text{units of }x}$.


### Key Definitions

The **average rate of change** of $f$ on $[a, b]$ is:


$$\frac{f(b) - f(a)}{b - a}$$
The **instantaneous rate of change** at $x = c$ is $f'(c)$. 
This is the limit of the average rate as $b \to c$.

### Worked Example

**Example 3.6.1**

A ladder 10 ft long rests against a vertical wall. The bottom slides away from the wall at $2$ ft/s. 
How fast is the top sliding down when the bottom is 6 ft from the wall?

**Step 1:** Let $x$ = distance of bottom from wall, $y$ = height of top on wall. By Pythagoras:


$$x^2 + y^2 = 100$$
**Step 2:** Differentiate implicitly with respect to time $t$.


$$2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$$
**Step 3:** Solve for $\dfrac{dy}{dt}$ and substitute known values.


$$\frac{dy}{dt} = -\frac{x}{y}\frac{dx}{dt}$$
When $x = 6$: $y = \sqrt{100 - 36} = 8$, and $\dfrac{dx}{dt} = 2$.
$$\frac{dy}{dt} = -\frac{6}{8}(2) = -\frac{12}{8} = -\frac{3}{2}$$
**Answer:** The top is sliding down at $\boxed{1.5\text{ ft/s}}$.

> **Figure:** Ladder Sliding Against a Wall

### Practice Problems

- A spherical balloon is inflated so that its radius increases at $3$ cm/s. How fast is the volume increasing when $r = 10$ cm? $(V = \frac{4}{3}\pi r^3)$

- A plane flies horizontally at $500$ mph at an altitude of $3$ miles. How fast is the distance from the plane to a point on the ground increasing when the plane is $4$ miles away horizontally?

### Study Tips

- Draw a diagram and label every quantity with a variable before writing equations.

- Differentiate *implicitly* with respect to time — every variable depends on $t$.

- Substitute known values *after* differentiating; don't plug in too early or you'll lose variables.

- Always check units on your final answer. A negative rate means the quantity is decreasing.

---

[Previous](chapter-12.html) • [Curriculum](INDEX.md) • [Next](chapter-14.html)
