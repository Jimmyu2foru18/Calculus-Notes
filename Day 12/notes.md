# Day 12

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Rates examples · [Source: 1.png](1.png)

1) An Airplane is flying toward a radar station at a constant height of 6km above ground. If the distance between the Airplane and radar station is decreasing at a rate of 400km/hr when $S = 10$km, what is the horizontal speed of the plane?

We know: $\frac{ds}{dt} = -400$km/hr  
We Want: $\frac{dx}{dt}$  
When: $10$km  
Equation: $x^2 + 6^2 = 5^2$

$x$-Calculation  
$x^2 + 6^2 = 10^2$  
$x^2 + 36 = 100$  
$\sqrt{x^2} = \sqrt{64}$  
$x = 8$

$$2x\frac{dx}{dt} + 0 = 2s\frac{ds}{dt}$$

$$2(8)\frac{dx}{dt} = 2(10)(-400)$$

$$\frac{16\frac{dx}{dt}}{16} = \frac{-8000}{16}$$

$$\frac{dx}{dt} = -500\text{ km/hr}$$

---

## Page 2 — Conical cup and shadow · [Source: 2.png](2.png)

**Problem 3: THE CONICAL CUP PROBLEM**

A conical cup is 4 cm across and 6 cm deep. Water leaks out the bottom at a rate of 2 cm³/m. How fast is the water level height dropping when the height of the water is 3 cm?

We know: $\frac{dv}{dt} = -2\text{ cm}^3/\text{s}$  
We want: $\frac{dh}{dt}$  
When: $h = 3\text{ cm}$  
Equation: $V = \frac{1}{3}\pi rh^2$

$$v = \frac{1}{3}\pi\left(\frac{h}{3}\right)^2h$$  
$$v = \frac{1}{3}\pi h^3$$

$$\frac{dV}{dt} = \frac{1}{9}\pi h^2\frac{dh}{dt}$$

$$\frac{dh}{dt} = \frac{2}{\frac{1}{9}\pi(3)^2}$$  
$$-2 = \frac{1}{9}\pi\frac{dh}{dt}$$  
$$-2 = \pi \cdot \frac{dh}{dt}$$  
$$\frac{dh}{dt} = -\frac{2}{\pi}\text{ cm/s}$$

**Similar Triangles**

$$\frac{2}{6} = \frac{r}{h}$$  
$$r = \frac{h}{3}$$

Substitute $r = \frac{h}{3}$:

$$v = \frac{1}{3}\pi\left(\frac{h}{3}\right)^2h = \frac{27}{27}h^3$$

---

**Problem 4: STREET LIGHT & SHADOW**

A Man 6ft Tall walks at the rate of 5 ft/s towards a street light that is 16 ft above the ground.

a) At what rate is the tip of his shadow moving?  
b) At what rate is the length of his shadow changing when 10 ft from the base of the light?

We know: $\frac{dx}{dt} = -5\text{ ft/s}$

We want: Part a: $\frac{dx}{dt}$ ; Part b: $\frac{dy}{dt}$

When: $X = 10$

Equation: $\frac{16}{x} = \frac{6}{y}$  
$16y = 6(x+y)$  
$16y = 6x + 6y$  
$10y = 6x$

**PART B**  
$$\frac{10dy}{dt} = 6\frac{dx}{dt}$$  
$$\frac{10dy}{dt} = 6(-5)$$  
$$\frac{dy}{dt} = -3\text{ ft/s}$$

**PART A**  
$$\frac{dx}{dt} = \frac{ds}{dt} + \frac{dy}{dt}$$  
$$\frac{ds}{dt} = -5 + (-3)$$  
$$\frac{ds}{dt} = -8\text{ ft/s}$$

---

## Page 3 — First derivative and slope · [Source: 3.png](3.png)

**The First derivative and slope**

- The first derivative, $f'(x)$, of a function, $f(x)$, tells us the **slope** of $f(x)$ at any single 'x' for which $f(x)$ is differentiable.
- This means that the sign of $f'(x)$ can tell us the **direction** of $f(x)$ at a given point, 'x'.
- **When** $f'(x) > 0$ : $f(x)$ is **increasing**
- **When** $f'(x) < 0$ : $f(x)$ is **decreasing**
- **When** $f'(x) = 0$ : $f'(x)$ is flat (Horizontal tangent)

**Horizontal tangents**

- Relative Maximum
- Relative Minimum
- Plateau

**Ex.** Where is $f(x)$ increasing?  
Where is it decreasing?  
Where does it have **vertical** tangents? What kind?

**Graph description:** Coordinate plane with x-axis showing values approximately from -5 to 4 and y-axis showing positive and negative values. Curve starts low on left, rises to a peak (relative maximum) at $x \approx -3$, descends to a flat horizontal segment (plateau) at $x \approx -1$, then descends further to a valley (relative minimum) at $x \approx 2$, then rises again toward the right. The curve appears to have a steep positive slope segment between the plateau and the minimum.

- Increasing: $(-3, 2)$
- Decreasing: $(-\infty, -3)$
- Relative maximum : $x = -3$
- Relative minimum : $x = 2$
- Plateau : $x = -1$

---

## Page 4 — First Derivative Test · [Source: 4.png](4.png)

**FIRST DERIVATIVE TEST**
*Used to find relative extrema (Minima or Maxima).*

1. Take the derivative of $f(x)$ to get $f'(x)$.
2. Find all **critical values** of $f'(x)$ (Values for which $f'(x) = 0$ or $f'(x)$ is undefined).
3. Plot the critical values on a number line.
   -Test a point in each section that the critical values break the number line into, and note the sign of $f'(x)$ at these points.
4. Examine the zeroes of $f'(x)$ on the number line.
   -For each:
     -If sign changes from $-$ to $+$ → it is a **rel. min**.
     -If sign changes from $+$ to $-$ → it is a **rel. max**.
     -If sign does **not** change → it is a **plateau**

**EXAMPLE:** Find all relative extrema of $f(x)$.

$$f(x) = \frac{1}{3}x^3 + 3x^2 + 8x$$

$$f'(x) = x^2 + 6x + 8 \quad \text{``No undefined values''}$$

$$x^2 + 6x + 8 = 0$$

$$(x+2)(x+4) = 0$$

| $x=-2$ | $x=-4$ |
|:---:|:---:|

Number line: $[\textbf{-4}] \qquad [\textbf{-2}] \qquad [0]$ with sign indicators: $+$ (left of $-4$), $-$ (between $-4$ and $-2$), $+$ (right of $-2$). Directional arrows: $\uparrow$ at $x=-4$ (left side), $\downarrow$ at $x=-4$ (right side), $\downarrow$ at $x=-2$ (left side), $\uparrow$ at $x=-2$ (right side).

$$f'(-5) = (-5)^2 + 6(-5) + 8$$
$$= 25 - 30 + 8$$
$$= 3$$

$$f'(-3) = (-3)^2 + 6(-3) + 8$$
$$= 9 - 18 + 8$$
$$= -1$$

$$f'(0) = (0)^2 + 6(0) + 8$$
$$= 8$$

- $f(x)$ is increasing on $(-\infty,-4) \cup (-2,\infty)$
- $f(x)$ is decreasing on $(-4,-2)$
- Relative Maximum at $x=-4$
- Relative Minimum at $x=-2$

---

## Page 5 — Curve Sketching and Relative Extrema · [Source: 5.png](5.png)

**Calculus Study Notes:** Curve Sketching and Relative Extrema
*Fig. 5*

**Introductory Sketch**

*Example Sketch (Not including curvature $f''(x)$)*

**Rough sketch of $f(x)$**

**Graph description:** Coordinate plane with unlabeled $x$-axis and $y$-axis. The curve enters from the upper left (second quadrant), descends crossing the $x$-axis, reaches a local minimum in the third/fourth quadrant area, rises crossing the $y$-axis, continues upward to a local maximum in the first quadrant, then descends crossing the $x$-axis and continuing downward to the right. No axis scales or specific coordinates labeled.

**Analyzing Function Behavior:** $\displaystyle f(x) = \frac{1}{x^2-1}$

*Ex.* Determine where $f(x)$ is increasing/decreasing, and find all relative extrema.

$$f(x) = \frac{1}{x^2-1} = (x^2-1)^{-1}$$

$$f'(x) = -1(x^2-1)^{-2} \cdot 2x = \frac{-2x}{(x^2-1)^2}$$

**zeros of $f'(x)$**
$$\frac{-2x}{(x^2-1)^2} = 0$$
$$\Rightarrow x = 0$$

**undefined values of $f'(x)$**
$$(x^2-1) = 0$$
$$\Rightarrow (x+1)(x-1) = 0$$
$$\Rightarrow x = -1, x = 1$$

**Graph description:** Number line with vertical asymptotes indicated at $x=-1$ and $x=1$. The curve of $f(x)$ approaches $+\infty$ as $x \to -1^-$, approaches $-\infty$ as $x \to -1^+$, has a peak at $(0,-1)$, approaches $-\infty$ as $x \to 1^-$, approaches $+\infty$ as $x \to 1^+$, and approaches $0$ from above as $x \to \pm\infty$.

|  |  |  |  |
|:---:|:---:|:---:|:---:|
| $+$ | $\downarrow$ | $-$ |  |
| $x = -2$ | $x = -\frac{1}{2}$ | $x = \frac{1}{2}$ | $x = 2$ |
| $\displaystyle f'(-2) = \frac{(-2)(-2)}{\left((-2)^2-1\right)^2}$ | $\displaystyle f'\!\left(-\frac{1}{2}\right) = \frac{(-2)\left(-\frac{1}{2}\right)}{\left(\left(-\frac{1}{2}\right)^2-1\right)^2}$ | $\displaystyle f'\!\left(\frac{1}{2}\right) = \frac{(-2)\left(\frac{1}{2}\right)}{\left(\left(\frac{1}{2}\right)^2-1\right)^2}$ | $\displaystyle f'(2) = \frac{(-2)(2)}{\left((2)^2-1\right)^2}$ |
| $= \frac{4}{9}$ | $= \frac{1}{\left(-\frac{3}{4}\right)^2}$ |  | $= \frac{-4}{9}$ |
|  | $= \frac{1}{\frac{9}{16}}$ |  |  |

**Conclusions:**
- $f(x)$ is increasing on: $(-\infty,-1) \cup (0,1)$
- $f(x)$ is decreasing on: $(-1,0) \cup (1,\infty)$
- $x = 0$ is a relative maximum
- No relative minimum

---

## Page 6 — Second Derivative and Concavity · [Source: 6.png](6.png)

The **Second Derivative and Curvature**

The second derivative $f''(x)$ is the derivative of the first derivative $f'(x)$. This means the sign of $f''(x)$ can tell us about direction of $f(x)$ (whether the slope of $f(x)$ is increasing or decreasing), just like the sign of $f'(x)$ tells us about direction of $f(x)$.

- If $f''(x) > 0$, then $f'(x)$ is increasing. (The slope of $f(x)$ is increasing), we say in this case $f(x)$ is **concave up**.

> *[Green callout box with green arrows]:*
> $$f''(x) > 0$$
> $$f'(x) > 0$$
>
> *(teal)*
> $$f''(x) > 0$$
> $$f'(x) < 0$$

- If $f''(x) < 0$, then $f'(x)$ is decreasing. (The slope of $f(x)$ is we can say in this case $f(x)$ is **concave down**.

> *[Red callout box with red arrows]:*
> $$f''(x) < 0$$
> $$f'(x) > 0$$
>
> *[Red callout box with red arrows]:*
> $$f''(x) < 0$$
> $$f'(x) < 0$$

- At points where concavity switches from **concave up** to **concave down**, or vice-versa, it is called an **inflection point**. These may occur at points where $f''(x) = 0$.

*[Margin note: pg 6]*

---

## Page 7 — Second Derivative Test and Inflection · [Source: 7.png](7.png)

We replicate the process of the first derivative test using the second derivative to find the points of inflection of a function.

**Ex.** For $f(x) = \frac{1}{3}x^3 + 3x^2 + 8x$, determine where $f(x)$ is concave up, where $f(x)$ is concave down, and identify any points of inflection.

*Remember:* $f'(x) = x^2 + 6x + 8$

$$f''(x) = 2x + 6$$

**Find Zeros of $f''(x)$:**

$$2x + 6 = 0$$
$$-6 \quad -6$$

$$\frac{2x}{2} = \frac{-6}{2}$$

*[Boxed in green]:* $\boxed{x = -3}$

[Graph description:]
- Horizontal number line with tick marks labeled $X = -5$ and $X = 0$ around $-3$.
- Sign analysis:
  - Left of $x = -3$ (test $x = -5$): $f''(-5) = 2(-5) + 6 = -10 + 6 = -4$ (negative)
  - Right of $x = -3$ (test $x = 0$): $f''(0) = 2(0) + 6 = 6$ (positive)

*[Graph]:* A cubic curve with:
- A local max on the left side (labeled *Relative max*)
- An inflection point at $x = -3$ labeled *Inflection point*
- An inflection point to the right labeled *Inflection point*
- Arrow pointing to a point labeled *Inflection point* on the right branch

**Conclusion**
- $f(x)$ is **concave down** on $(-\infty, -3)$
- $f(x)$ is **concave up** on $(-3, \infty)$
- Point of inflection at $x = -3$

*[Margin note: Pg 7]*
