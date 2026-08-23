# Chapter 19: Related Rates — Calculus Foundations
[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Related rates: connecting the rates of change of linked quantities.

## Lecture Notes

### Related Rates Strategy

1. Draw a diagram and label all changing quantities with variables.
2. Write an equation relating the variables.
3. Differentiate implicitly with respect to $t$.
4. Substitute known values after differentiating, then solve.

### Worked Examples

**Example 1 (Oil Spill):** Radius increases at $2$ m/s. How fast is area increasing when $r = 10$ m?

$$A = \pi r^2 \Rightarrow \frac{dA}{dt} = 2\pi r \frac{dr}{dt} = 2\pi(10)(2) = 40\pi \text{ m}^2/\text{s}$$

**Example 2 (Ladder):** 13-foot ladder, base pulled at $10$ ft/s. How fast is top sliding when base is 5 ft from wall?

$$x^2 + y^2 = 169 \Rightarrow 2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$$
When $x = 5$, $y = 12$:
$$\frac{dy}{dt} = -\frac{x}{y}\frac{dx}{dt} = -\frac{5}{12}(10) = -\frac{25}{6} \approx -4.17 \text{ ft/s}$$

**Example 3 (Rocket):** Observer 300 ft from launch, rocket rising at $100$ ft/s. Find $\frac{d\theta}{dt}$ at $t = 2$.

$$\tan(\theta) = \frac{y}{300} \Rightarrow \sec^2(\theta)\frac{d\theta}{dt} = \frac{1}{300}\frac{dy}{dt}$$
At $t = 2$, $y = 200$, $z = 100\sqrt{13}$, $\sec(\theta) = \frac{\sqrt{13}}{3}$:
$$\frac{13}{9}\frac{d\theta}{dt} = \frac{1}{3} \Rightarrow \frac{d\theta}{dt} = \frac{3}{13} \text{ rad/s}$$

**Example 4 (Conical Cup):** Cone with $h = 8$ cm, $r = 2$ cm. Water leaks at $5$ cm$^3$/s. Find $\frac{dh}{dt}$ when $h = 3$ cm.

$$V = \frac{1}{3}\pi r^2 h$$
Using similar triangles: $\frac{r}{8} = \frac{2}{h} \Rightarrow r = \frac{h}{4}$.
$$V = \frac{1}{3}\pi\left(\frac{h}{4}\right)^2 h = \frac{\pi h^3}{48}$$
$$\frac{dV}{dt} = \frac{3\pi h^2}{48}\frac{dh}{dt} = \frac{\pi}{16}h^2\frac{dh}{dt}$$
$$-5 = \frac{9\pi}{16}\frac{dh}{dt} \Rightarrow \frac{dh}{dt} = -\frac{80}{9\pi}$$

**Example 5 (Airplane):** Flying at 6 km altitude, distance to radar decreasing at 400 km/h when $s = 10$ km. Find horizontal speed.

$$x^2 + 6^2 = s^2 \Rightarrow 2x\frac{dx}{dt} = 2s\frac{ds}{dt}$$
When $s = 10$, $x = 8$:
$$2(8)\frac{dx}{dt} = 2(10)(-400) \Rightarrow \frac{dx}{dt} = -500 \text{ km/hr}$$

**Example 6 (Street Light):** Man 6 ft tall walks at 5 ft/s toward a 16 ft street light.
a) Rate of tip of shadow: $\frac{ds}{dt} = -8$ ft/s.
b) Rate of shadow length when 10 ft from light: $\frac{dy}{dt} = -3$ ft/s.

## Video Resources

### Core Lecture

[![Core Lecture](https://img.youtube.com/vi/9vKqVkMQHKk/default.jpg)](https://www.youtube.com/watch?v=9vKqVkMQHKk)

### Supplementary Videos

- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=9vKqVkMQHKk) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=9vKqVkMQHKk) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=9vKqVkMQHKk) - Full lecture coverage with worked examples

## 3.11 — Related Rates

Calculus does not describe motion — it **quantifies** it. 
**Related rates** problems arise whenever two or more quantities change together, 
linked by an equation. By differentiating that equation with respect to time $t$, 
we relate their rates of change and solve for the unknown speed.


### Key Definitions

A **related rates** problem involves finding the rate of change of one quantity 
when the rate of change of another (usually with respect to time $t$) is known, 
and the two are connected by a geometric or physical equation.

The general strategy is:


- Draw a diagram and label all changing quantities with variables.

- Write an equation relating the variables.

- Differentiate *implicitly* with respect to $t$.

- Substitute known values *after* differentiating, then solve.

### Worked Example

**Example 3.11.1**

The radius of a circular oil spill increases at a constant rate of $2$ m/s. 
How fast is the area increasing when the radius is $10$ m? 
(Recall $A = \pi r^2$.)

**Step 1:** Identify given and wanted rates.


$$\frac{dr}{dt} = 2 \text{ m/s}, \quad r = 10 \text{ m}, \quad \text{find } \frac{dA}{dt}$$
**Step 2:** Differentiate $A = \pi r^2$ with respect to $t$.


$$\frac{dA}{dt} = 2\pi r \frac{dr}{dt}$$
**Step 3:** Substitute the known values.


$$\frac{dA}{dt} = 2\pi(10)(2) = 40\pi \text{ m}^2/\text{s}$$
**Answer:** The area is growing at $\boxed{40\pi \text{ m}^2/\text{s}}$.

### Worked Example

**Example 3.11.2**

A $10$-ft ladder leans against a vertical wall. The bottom slides away at $1$ ft/s. 
How fast is the top sliding down when the bottom is $6$ ft from the wall?

**Step 1:** Let $x$ = distance of base from wall, $y$ = height of top on wall.
By the Pythagorean theorem:


$$x^2 + y^2 = 100$$
**Step 2:** Differentiate implicitly with respect to $t$.


$$2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$$
**Step 3:** Solve for $\dfrac{dy}{dt}$ and substitute.


$$\frac{dy}{dt} = -\frac{x}{y}\frac{dx}{dt}$$
When $x = 6$: $y = \sqrt{100 - 36} = 8$, and $\dfrac{dx}{dt} = 1$.
$$\frac{dy}{dt} = -\frac{6}{8}(1) = -\frac{3}{4}$$
**Answer:** The top is sliding down at $\boxed{0.75\text{ ft/s}}$.

> **Figure:** Ladder Sliding Against a Wall

> **Figure:** Rocket Launch and Angle of Elevation

### Practice Problems

- A spherical balloon is inflated so that its radius increases at $3$ cm/s. How fast is the volume increasing when $r = 10$ cm? $(V = \frac{4}{3}\pi r^3)$

- A plane flies horizontally at $500$ mph at an altitude of $3$ miles. How fast is the distance from the plane to a point on the ground increasing when the plane is $4$ miles away horizontally?

- Water drains from a conical tank (height $12$ ft, radius $4$ ft) at $10$ ft$^3$/min. How fast is the water level dropping when the depth is $6$ ft?

### Study Tips

- Draw a diagram and label every quantity with a variable *before* writing equations.

- Differentiate *implicitly* with respect to time — every variable depends on $t$.

- Substitute known values *after* differentiating; don't plug in too early or you'll lose variables.

- Always check units on your final answer. A negative rate means the quantity is decreasing.

---

[Previous](chapter-18.html) • [Curriculum](INDEX.md) • [Next](chapter-20.html)
