# Chapter 23: Optimization Problems

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Optimization problems: maximizing profit, minimizing material, and more.

## Lecture Notes

### Optimization Strategy

1. Draw a diagram and label all quantities with variables.
2. Write the **objective function** (what to maximize/minimize).
3. Write the **constraint equation** (what limits the variables).
4. Solve the constraint for one variable; substitute into the objective.
5. Find critical points by setting the derivative to zero.
6. Check endpoints and verify physical sense.

### Worked Examples

**Example 1 (Rectangle perimeter):** Maximize area with perimeter 80 cm.

$$2x + 2y = 80 \Rightarrow y = 40 - x$$
$$A = x(40 - x) = 40x - x^2$$
$$A' = 40 - 2x = 0 \Rightarrow x = 20$$
Max area $= 20 \times 20 = 400$ cm$^2$.

**Example 2 (Cylindrical can):** Minimize surface area with $V = 150$.

$$V = \pi r^2 h = 150 \Rightarrow h = \frac{150}{\pi r^2}$$
$$SA = 2\pi r^2 + 2\pi rh = 2\pi r^2 + \frac{300}{r}$$
$$SA' = 4\pi r - \frac{300}{r^2} = 0 \Rightarrow r^3 = \frac{75}{\pi}$$
$$r \approx 2.88, \quad h \approx 5.76$$

**Example 3 (Open-top box):** 50 cm by 20 cm cardboard, cut squares of side $x$ from each corner.

$$V = (50 - 2x)(20 - 2x)x = 4x^3 - 140x^2 + 1000x$$
$$V' = 12x^2 - 280x + 1000 = 0$$
$$x = \frac{35 \pm 5\sqrt{19}}{3} \approx 4.40 \text{ cm (max volume)}$$

**Example 4 (Fenced field):** Vertical sides \$10/ft, bottom \$2/ft, top \$7/ft. Budget \$700.

$$9x + 20y = 700 \Rightarrow y = 35 - 0.45x$$
$$A = x(35 - 0.45x)$$
$$A' = 35 - 0.9x = 0 \Rightarrow x \approx 38.89, \quad y = 17.5$$

### Key Principles

- Always express the objective function in terms of **one variable** before differentiating.
- Use similar triangles or geometric constraints to eliminate extra variables.
- After finding the critical point, verify it gives a maximum or minimum using the Second Derivative Test ($f'' < 0$ for max, $f'' > 0$ for min) or endpoint analysis.
- Check that the solution makes physical sense (positive lengths, etc.).

## Video Resources

### Core Lecture
[![Core Lecture](https://img.youtube.com/vi/S0_qX4VJhMQ/default.jpg)](https://www.youtube.com/watch?v=S0_qX4VJhMQ)

### Supplementary Videos
- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=S0_qX4VJhMQ) - Full lecture coverage with worked examples

## 4.4 — Optimization Problems

**Optimization** is the art of finding the "best" value — largest profit, shortest distance, least material, maximum volume. Every optimization problem follows the same pattern: express the quantity to optimize as a function of one variable, find its critical points, and determine which gives the optimum.

### Key Strategy

### Key Definitions

**Optimization Procedure**

- Draw a diagram and label all quantities.
- Write the **objective function** (what you want to maximize or minimize).
- Write the **constraint equation** (what limits the variables).
- Solve the constraint for one variable and substitute into the objective.
- Find critical points of the resulting single-variable function.
- Check endpoints and verify the answer makes physical sense.

### Worked Example

**Example 4.4.1**

Among all rectangles with perimeter $40$ ft, which has the maximum area?

**Step 1:** Let $x$ and $y$ be the side lengths. Perimeter constraint:

$$2x + 2y = 40 \;\Rightarrow\; x + y = 20 \;\Rightarrow\; y = 20 - x$$

**Step 2:** Objective: maximize area $A = xy$.

$$A(x) = x(20 - x) = 20x - x^2$$

**Step 3:** Find critical points of $A(x)$ on $(0, 20)$.

$$A'(x) = 20 - 2x = 0 \;\Rightarrow\; x = 10$$

**Step 4:** Verify it is a maximum using $A''(x) = -2 < 0$ (concave down).

**Answer:** A $10 \times 10$ square gives the maximum area of $\boxed{100\text{ ft}^2}$.

### Worked Example

**Example 4.4.2**

Find the dimensions of the cylinder with fixed volume $V = 1000\pi$ cm$^3$ that has minimum surface area.

**Step 1:** Let $r$ = radius, $h$ = height.

$$V = \pi r^2 h = 1000\pi \;\Rightarrow\; h = \frac{1000}{r^2}$$

**Step 2:** Surface area objective: $S = 2\pi r^2 + 2\pi rh$.

$$S(r) = 2\pi r^2 + 2\pi r \cdot \frac{1000}{r^2} = 2\pi r^2 + \frac{2000\pi}{r}$$

**Step 3:** Minimize $S(r)$ for $r > 0$.

$$S'(r) = 4\pi r - \frac{2000\pi}{r^2} = 0$$
$$4\pi r = \frac{2000\pi}{r^2} \;\Rightarrow\; r^3 = 500 \;\Rightarrow\; r = 5\sqrt[3]{4}$$
$$h = \frac{1000}{r^2} = \frac{1000}{100 \cdot 4^{2/3}} = 10 \cdot 4^{1/3}$$

**Answer:** Minimum surface area occurs when $r = 5\sqrt[3]{4}$ cm and $h = 10\sqrt[3]{4}$ cm.

> **Figure:** Maximizing Area Under a Fence

### Practice Problems

- A farmer has $400$ m of fencing to enclose a rectangular field along a river (no fence needed on the river side). Find the dimensions that maximize the enclosed area.
- Find the dimensions of the right circular cone with fixed slant height $L$ that has maximum volume.
- A box with no top is to be made from a $12$-inch square sheet of cardboard by cutting squares of side $x$ from each corner and folding up the sides. Find $x$ that maximizes volume.

### Study Tips

- Express everything in terms of **one variable** before differentiating.
- Draw the diagram with all labels before writing a single equation.
- Always include physical constraints: lengths are positive, radii are positive, etc.
- After finding the critical point, verify it gives a maximum or minimum using the Second Derivative Test or endpoint analysis.

[Previous](chapter-22.html) • [Curriculum](INDEX.md) • [Next](chapter-24.html)
