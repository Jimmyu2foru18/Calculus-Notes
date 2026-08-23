# Day 13

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Calculus Study Sheet: Function Analysis · [Source: 1.png](1.png)

1.) For each function, state the intervals over which it is increasing/decreasing and concave up/down. Identify all relative extrema and points of inflection. (Pg 1)

**Part A:** $f(x) = \frac{2}{3}x^3 + 5x^2 + 12x$

**(a)** $f(x) = \frac{2}{3}x^3 + 5x^2 + 12x$

**1. Find First Derivative**
$$f(x) = \frac{2x^3 + 5x^2 + 12x}{2} = \frac{2}{2}$$
$$x^2 + 5x + 6 = 0$$
$$(x+2)(x+3) = 0$$
$$x = -2, \quad x = -3$$

$$(\!-\!\infty) \quad \leftarrow \quad -3 \quad \leftarrow \quad -2 \quad \rightarrow \quad (+\infty)$$
$$\downarrow \qquad \quad -3 \rightarrow -2 \leftarrow \quad f(x)$$

- $f(x)$ is increasing on $(\!-\!\infty, -3) \cup (-2, \infty)$
- $f(x)$ is decreasing on $(-3, -2)$
- **Relative Maximum:** $x = -3$
- **Relative Minimum:** $x = -2$

**Testing Points**

| | $x = -4$ | $x = -2.5$ | $x = 0$ | |
|---|---|---|---|---|
| | $2(-4)^2+10(-4)+12$ | $2(-2.5)^2+10(-2.5)+12$ | $2(0)^2+10(0)+12$ | |
| | $32-40+12$ | $12.5-25+12$ | $0+0+12$ | |
| | $4$ | $-0.5$ | $12$ | |
| | $= +$ | $= -$ | $= +$ | $= +$ |

**2. Second Derivative**
$$f'(x) = 4x + 10$$
$$\begin{array}{c|c|c|c}
 & -2.5 & & f(x) \\
\hline
4x + 10 = 0 & \rightarrow & x = -2.5 & \\
\end{array}$$

**Fin Zeros:** $4x + 10 = 0 \rightarrow x = -2.5$

**Concavity:**
- $f'(x)$ is concave up $(-2.5, \infty)$ *(teal)*
- $f'(x)$ is concave down $(-\infty, -2.5)$ *(boxed in green)*

**Points of Inflection:** $x = -2.5$

---

**Part B:** $f(x) = \frac{x^2 - 1}{x^3}$

**(b)** $f(x) = \frac{x^2 - 1}{x^3}$

**Quotient Rule:**
$$f(x) = \frac{x^2(2x) - (x^2 - 1)(3x^2)}{(x^3)^2}$$
**Simplify**
$$\rightarrow -x^4 + 3x^2 = 0$$
$$\rightarrow x^2 = 0$$
$$\boxed{x = 0} \quad \boxed{x = \pm\sqrt{3}}$$

**Undefined:**
$x^4 = 0 \Rightarrow x = 0$
$x = 0$

$$(\!-\!\infty) \quad \leftarrow \quad -\sqrt{3} \quad \rightarrow \quad 0 \quad \leftarrow \quad \sqrt{3} \quad \rightarrow \quad (+\infty)$$
$$\downarrow \quad - \quad + \quad \quad \quad + \quad - \quad \quad f(x)$$

- $f(x)$ is increasing on $(-\sqrt{3}, 0) \cup (0, \sqrt{3})$ *(teal)*
- $f(x)$ is decreasing on $(-\infty, -\sqrt{3}) \cup (\sqrt{3}, \infty)$ *(boxed in green)*
- $f(x)$ is decreasing on $(-\infty, \sqrt{3})$ *(teal)*
- **Relative Maximum:** $x = \sqrt{3}$
- **Relative Minimum:** $x = -\sqrt{3}$

**Testing Points**

| | $x = -1$ | $x = -1/3$ | $x = -1/2$ | $x = -2$ |
|---|---|---|---|---|
| | $(-2)^3+3$ | $-4/3+3$ | $(-1)^3$ | $(-2)^3+3$ |
| | $-8+3$ | $-4/3+3 = 5/3$ | $-1$ | $-8+3$ |
| | $-5 = -$ | $5/3 = +$ | $-1 = -$ | $-5 = -$ |
| | $\frac{+}{-} = +$ | $\frac{+}{+} = +$ | $\frac{+}{-} = -$ | $\frac{-}{+} = -$ |

**2. Second Derivative**
$$f''(x) = \frac{2x^2 - 12}{x^3}$$
$$\begin{array}{c|c|c|c}
 & -\sqrt{6} & \eta \rightarrow \bigcirc \leftarrow \eta & \sqrt{6} \\
\end{array} \quad f'(x)$$

**FindZeros:** $2x^2 - 12 = 0$
$x^2 = 6$ undefined
$x = \pm\sqrt{6}$

**Concavity:**
- $f''(x)$ is concave up $(-\sqrt{6}, 0) \cup (0, \sqrt{6})$ *(teal)*
- $f''(x)$ is concave down $(-\infty, -\sqrt{6}) \cup (0, \sqrt{6})$ *(boxed in green)*

**Points of Inflection:** $x = \sqrt{6}$ and $x = -\sqrt{6}$

---

## Page 2 — Curve Sketching Steps · [Source: 2.png](2.png)

**Curve Sketching** (Pg 2)

1. **FIND THE DOMAIN**
   - Determine where the function is undefined, identifying holes, vertical asymptotes, etc.

2. **FIND ALL 'X' AND 'Y' INTERCEPTS**
   - To find y-intercepts, plug in $x = 0$. To find x-intercepts, set $y = 0$.

3. **FIND ANY ASYMPTOTES**
   - **Vertical Asymptote:** Occurs when denominator = 0 after simplifying is done.
   - **Horizontal asymptote:** $\lim_{x \to \pm\infty} f(x)$. If finite, for rational functions, use horizontal rule.
   - **Oblique asymptotes:** Occurs in rational functions where the numerator has degree 1 higher than the denominator. — Found using long division —

4. **CHECK FOR SYMMETRY**
   - Plug in $f(-x)$.
   - If $f(-x) = f(x)$, the function is **EVEN**.
   - If $f(-x) = -f(x)$, the function is **ODD**.

5. **FIND RELATIVE EXTREMA AND INTERVALS OF INCREASING/DECREASING**
   - Use first derivative.

6. **FIND POINTS OF INFLECTION AND INTERVALS OF CONCAVE UP/DOWN**
   - Use second derivative.

7. **FIND Y-COORDINATES**
   - Found in key points in steps 5, 6.

8. **SKETCH THE GRAPH**

---

## Page 3 — Curve Sketching Analysis · [Source: 3.png](3.png)

**CURVE SKETCHING ANALYSIS** (Pg. 3)

**Example:** Complete a curve sketch for $f(x) = \frac{2}{3}x^3 + 5x^2 + 12x$

**1. Domain**
- **Domain:** $\mathbb{R}$ (Polynomial)

**2. Intercepts**

**x-intercepts:**
Set $f(x) = 0$:
$$\frac{2}{3}x^3 + 5x^2 + 12x = 0$$
$$x\!\left(\frac{2}{3}x^2 + 5x + 12\right) = 0$$

- **Result 1:** $x = 0$
- **Result 2:** $\frac{2}{3}x^2 + 5x + 12 = 0$
  Multiply by 3: $2x^2 + 15x + 36 = 0$
  $$x = \frac{-15 \pm \sqrt{(15)^2 - 4(2)(36)}}{2(2)}$$
  $$x = \frac{-15 \pm \sqrt{225 - 288}}{4}$$
  $$x = \frac{-15 \pm \sqrt{-63}}{4}$$
  ⚠️ **No real solution** (Discriminant < 0)

**y-intercept:**
Evaluate $f(0)$:
$$f(0) = \frac{2}{3}(0)^3 + 5(0)^2 + 12(0) = 0$$
- **Result:** $y = 0$

**3. Asymptotes:** None (Polynomial function)

**4. Symmetry**
Test $f(-x)$: $f(-x) = \frac{2}{3}(-x)^3 + 5(-x)^2 + 12(-x)$
$$= -\frac{2}{3}x^3 + 5x^2 - 12x$$
- $f(-x) \neq f(x)$ **(Not Even)**
- $f(-x) \neq -f(x)$ **(Not Odd)**
- **Conclusion:** **No symmetry**

**5. First Derivative Analysis**
- **Increasing on:** $(-\infty, -3) \cup (-2, \infty)$
- **Decreasing on:** $(-3, -2)$
- **Relative Max:** at $x = -3$
- **Relative Min:** at $x = -2$

**6. Second Derivative Analysis**
- **Concave Up:** $(-2.5, \infty)$
- **Concave Down:** $(-\infty, -2.5)$
- **Point of Inflection:** at $x = -2.5$

---

## Page 4 — y-coordinates of key points · [Source: 4.png](4.png)

**CALCULUS STUDY NOTES**  pg 4

**7 y-coordinates of key points**

**x = −3**
$$f(-3) = \frac{2}{3}(-3)^3 + 5(-3)^2 + 12(-3)$$
$$f(-3) = \frac{2}{3}(27) + 5(9) - 36$$
$$f(-3) = -18 + 45 - 36 = -9$$

**\*\*Relative MAX at: $(−3, −9)$**  **\*\*Relative min at: $\left(-2, -\frac{28}{3}\right)$**

**x = −2.5**
$$f(-2.5) = \frac{2}{3}(-2.5)^3 + 5(-2.5)^2 + 12(-2.5) = -\frac{55}{6}$$

**\*\*Point of inflection at: $\left(-2.5, -\frac{55}{6}\right)$**

**x = −2**
$$f(-2) = \frac{2}{3}(-2)^3 + 5(-2)^2 + 12(-2)$$
$$f(-2) = \frac{2}{3}(-8) + 5(4) - 24$$
$$f(-2) = -\frac{16}{3} + 20 - 24 = -\frac{16}{3} - 4$$
$$f(-2) = -\frac{28}{3}$$

---

**8 Graphing and Additional Problems**

**Graph description:**
- Axes: Cartesian coordinate system with labeled tick marks
- Curve labeled $f(x)$: decreases from left (arrow pointing down-left), has a local minimum, increases through the x-axis, has a local maximum, then increases to the right (arrow pointing up-right)
- Curve appears to cross the y-axis in the positive region and x-axis in the positive region near the origin

**all 8 steps**
**≡ do same for:** $\displaystyle f(x) = \frac{x^2 - 1}{x^3}$

---

## Page 5 — Curve sketching analysis · [Source: 5.png](5.png)

**CALCULUS STUDY NOTES**  page 5

For $f(x) = \dfrac{x^2 - 1}{x^3}$, we will perform the full curve sketching analysis.

**1. Find Domain**
- Find where the denominator is zero: Set $x^3 = 0$, which gives $x = 0$.
- Domain: $(-\infty, 0) \cup (0, \infty)$

**2. All $x$ and $y$ Intercepts**
- $y$-intercept: Set $x = 0$. Since 0 js not in the domain, there is no $y$-intercept.
- $x$-intercepts: Set $f(x) = 0$. $x^2 - 1 = 0 \to x^2 = 1 \to x = \pm 1$.
- Intercepts are at $(-1, 0)$ and $(1, 0)$

**3. Any Asymptotes**
- Vertical Asymptote (V.A.): The function is undefined at $x = 0$. Limit $\lim_{x \to 0} f(x) = +\infty$, and from right, is $-\infty$. V.A. at $x = 0$.
- Horizontal Asymptote (H.A.): Limit $\lim_{x \to x} f(x)$. The degree of the denominator is larger than the numerator, so limit is 0. H.A. at $y = 0$.

**4. Check for Symmetry**
- $f(-x) = \dfrac{(-x)^2 - 1}{(-x)^3} = \dfrac{x^2 - 1}{-x^3} = -f(x)$
- The function is an odd function, so it is symmetric about the origin.

**5. First Derivative and Critical Points**
- Use the quotient rule $f'(x) = \dfrac{u'v - uv'}{v^2}$ where $u = x^2 - 1$ and $v = x^3$.
- Then $u' = 2x$ and $v' = 3x^2$.
- $f'(x) = \dfrac{(2x)(x^3) - (x^2 - 1)(3x^2)}{(x^3)^2} = \dfrac{2x^4 - (3x^4 - 3x^2)}{x^6} = \dfrac{-x^4 + 3x^2}{x^6}$
- Critical points: Set $f'(x) = 0$. $-x^2 + 3 = 0 \to x^2 = 3 \to x = \pm\sqrt{3}$.
(Also $f'(x)$ is undefined at $x = 0$). Critical points are $x = \pm\sqrt{3}$.

**6. Second Derivative and Points of Inflection**
- Use the quotient rule $f''(x) = \dfrac{u'v - uv'}{v^2}$ where $u = -x^2 + 3$ and $v = x^4$.
- Then $u' = -2x$ and $v' = 4x^3$.
- $f''(x) = \dfrac{(-2x)(x^4) - (-x^2 + 3)(4x^3)}{(x^4)^2} = \dfrac{-2x^5 - (-4x^5 + 12x^3)}{x^8} = \dfrac{2(x^5 - 6)}{x^8}$
- Potential inflection points: Set $f''(x) = 0$. $x^2 - 6 = 0 \to x = \pm\sqrt[5]{6}$.
- Verify sign changes around $x = \pm\sqrt{6}$ to confirm inflection points.

**7. Relative Max and Relative Min, and Points of Inflection**
- Relative Extrema: Check sign of $f'(x)$ around critical points $x = \pm\sqrt{3}$.
  - $x = -\sqrt{3}$: Test $x = -2$ ($f'(-2) > 0$), test $x = -1$ ($f'(-1) > 0$). $f'(x) > 0$ on $(-\infty, \sqrt{3})$, so $x = -\sqrt{3}$ is not a minimum.
  - Correct Sign Analysis for $f'(x)$: $(-\infty, -\sqrt{3})$ $f'(-2)$ is negative; $(-\sqrt{3}, 0)$ $f'(-1)$ is positive; $(0, \sqrt{3})$ $f'(1)$ is positive; $(\sqrt{3}, \infty)$ $f'(2)$ is negative.
  - $f'(x)$ changes from neg to pos at $x = -\sqrt{3}$ (Relative Min). $(-\sqrt{3}, f(-\sqrt{3}))$
  - $f'(x)$ changes from pos to neg at $x = \sqrt{3}$ (Relative Max). $(\sqrt{3}, f(\sqrt{3}))$
- Points of Inflection: Coordinates: $\left(\pm\sqrt{6}, f\left(\frac{(\pm\sqrt{6})^2 - 1}{(\pm\sqrt{6})^3}\right) = \pm\frac{5}{6\sqrt{6}}\right)$

**8. Graph the Coordinates**
- Plot the critical points (Max, Min), Inflection Points, and intercepts. Sketch the curve using all collected information (domain, asymptotes, symmetry, increasing/decreasing, concavity).

**Graph description:**
- Axes: Cartesian coordinate system with vertical dashed line at $x = \pm\sqrt{3}$ and $x = \pm\sqrt{6}$
- Curve: passes through $x = -1$ and $x = 1$ on x-axis, has vertical asymptote at $x = 0$, approaches horizontal asymptote $y = 0$ at both ends
- Shows relative minimum near $x = -\sqrt{3}$ and relative maximum near $x = \sqrt{3}$
- Shows inflection points at $x = \pm\sqrt{6}$

---

## Page 6 — Absolute (Global) Extrema · [Source: 6.png](6.png)

**Definition**

The highest and lowest points anywhere in a function's domain are called the **absolute maximum** and **absolute minimum**, respectively.

**Key Concepts**

Functions defined on an **open interval** may **not** always have absolute extrema.

However, any **continuous function** defined on a **closed interval** will always have an **absolute maximum** and **absolute minimum**.

In this scenario, the only candidates for the absolute extrema are the **relative extrema** and the **endpoints**.

**To Find Absolute Extrema**

1. Find the **relative extrema** using $f'(x)$.
2. **Plug** in the locations of the relative extrema and the endpoints to $f(x)$.
3. See which points have the overall **highest** and lowest $y$-values.

---

## Page 7 — Absolute Max/Min Example · [Source: 7.png](7.png)

**Example:** Find the absolute maximum/minimum of

$$f(x) = \frac{1}{3}x^3 + 2x^2 + 3x \text{ on } [-4,1]$$

$$f'(x) = x^2 + 4x + 3 = 0$$

$$(x+3)(x+1) = 0$$

| A | B |
|---|---|
| $x = -3$ | $x = -1$ |

**Need to check:** $x = \{-4, -3, -1, 1\}$

| C | D |
|---|---|
| $f(-4) = \frac{1}{3}(-4)^3 + 2(-4)^2 + 3(-4)$<br>$f(-4) = \frac{-64}{3} + 32 - 12$<br>$f(-4) = -\frac{4}{3}$ | $f(-3) = \frac{1}{3}(-3)^3 + 2(-3)^2 + 3(-3)$<br>$f(-3) = -9 + 18 - 9$<br>$f(-3) = 0$ |

| C | D |
|---|---|
| $f(-1) = \frac{1}{3}(-1)^3 + 2(-1)^2 + 3(-1)$<br>$f(-1) = -\frac{1}{3} + 2 - 3$<br>$f(-1) = -\frac{4}{3}$ | $f(1) = \frac{1}{3}(1)^3 + 2(1) + 3(1)$<br>$f(1) = \frac{1}{3} + 2 + 31 + 3$<br>$f(1) = \frac{16}{3}$ |

*(teal)* **Absolute Max at:** $\left(1, \frac{16}{3}\right)$ **E**

*(boxed in green)* **Absolute Min at:** $\left(-4, -\frac{4}{3}\right)$ and $\left(-1, -\frac{4}{3}\right)$ **F**

**Graph description:**
- Coordinate plane with x-axis from $-6$ to $5$, y-axis from $-4$ to $5$
- Cubic curve entering from lower left near $(-5, -5)$, descending to a local minimum near $(-2, -2)$, ascending through the origin $(0,0)$ to a local maximum near $(-3, 0)$, then continuing upward through $(1, 4)$ toward $(2, 5)$
- Absolute minimum points marked at $(-4, -\frac{4}{3})$ and $(-1, -\frac{4}{3})$
- Absolute maximum point marked at $(1, \frac{16}{3})$
