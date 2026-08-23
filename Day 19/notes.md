# Day 19

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Study Guide and Properties · [Source: 1.png](1.png)

**Calculus Study Guide**

Find Each Definite Integral

**1)** $\displaystyle \int_0^3 (2x^3 - 4x^2 + 2)\,dx$
$$= \left[\frac{1}{2}x^4 - \frac{4}{3}x^3 + 2x\right]_0^3$$
$$= \left(\frac{1}{2}(3)^4 - \frac{4}{3}(3)^3 + 2(0)\right) - \left(\frac{1}{2}(0)^4 - \frac{4}{3}(0)^3 + 2(0)\right)$$
$$= 40.5 - 36 + 6 - 0$$
$$= 10.5$$

$\boxed{= 10.5}$

**2)** $\displaystyle \int_0^3 e^{3x}\,dx$
$$= \left[\frac{1}{3}e^{3x}\right]_0^3$$
$$= \frac{1}{3}e^{3(3)} - \frac{1}{3}e^{3(0)}$$
$$= \frac{1}{3}e^{15} - \frac{1}{3}e^0$$
$$= \frac{1}{3}e^{15} - \frac{1}{3}$$

$\boxed{= \frac{1}{3}e^{15} - \frac{1}{3}}$

**3)** $\displaystyle \int_{\pi/2}^{2\pi} 2\sin(\pi - x)\,dx$

Let $u = \pi - x$

$\displaystyle \frac{du}{dx} = -1 \Rightarrow du = -dx \Rightarrow dx = -du$

$\displaystyle x = \frac{\pi}{2} \Rightarrow u = \pi - \frac{\pi}{2} = \frac{\pi}{2}$

$x = 2\pi \Rightarrow u = \pi - 2\pi = -\pi = 0$

$\displaystyle \int_{\pi/2}^{2\pi} 2\sin(\pi - x)\,dx = \int_{-\pi}^{\pi/2} -2\sin(u)\,du$

$= [2\cos(u)]_{-\pi}^{\pi/2}$

$= 2\cos\!\left(\frac{\pi}{2}\right) - 2\cos(0)$

$= 2(0) - 2(1) = -2$

$\boxed{= -2}$

---

**Integral Properties**

**4)** If $\displaystyle \int_8^\infty f(x)\,dx = 10$ and $\displaystyle \int_3^8 f(x)\,dx = 7$

**a)** What is $\displaystyle \int_3^8 f(x)\,dx$?

$= -\displaystyle\int_3^8 f(x)\,dx = -7$

$\boxed{= -7}$

**b)** Find $\displaystyle \int_1^3 f(x)\,dx$?

$\displaystyle \int_1^3 f(x)\,dx + \int_3^8 f(x)\,dx = \int_1^8 f(x)\,dx$

$\displaystyle \int_1^3 f(x)\,dx + 7 = 10$

$-7 - 7$

$\boxed{= 3}$

---

**5)** Find the derivative of

$$f(x) = \int_1^{\ln(x)} e^{\tan(\frac{2}{t})}\,dt$$

$f'(x) = e^{\tan(\frac{2}{\ln x})}\cdot \frac{1}{x}$

$f'(x) = \dfrac{e^{\tan(\frac{2}{\ln x})}}{x}$

$f'(x) = \dfrac{e^{\tan(\frac{2}{\ln x})}}{x}$

$\boxed{f'(x) = \dfrac{e^{\tan(\frac{2}{\ln x})}}{x}}$

---

## Page 2 — Average Value Theorem · [Source: 2.png](2.png)

**Average Value Theorem for Integrals**

For a **continuous function**, $f(x)$, on a **closed interval** $[a,b]$, the Average value of the function is:

$$f_{average} = \frac{1}{b-a} \int_a^b f(x)\,dx$$

**Graph description:**
- Axes: $x$-axis horizontal, $y$-axis vertical.
- Curve labeled $f(x)$ is wavy, crossing above and below the $x$-axis.
- Horizontal dashed line labeled $f_{average}$ intersects the curve at three points.
- Shaded vertical strips between $f_{average}$ and $f(x)$ over $[a,b]$.
- Vertical lines mark endpoints $a$ and $b$ on the $x$-axis.

---

**Ex.** Find the average value of $f(x) = x^3$ on $[1,4]$

$$f_{average} = \frac{1}{b-a} \int_a^b f(x)\,dx$$

$$f_{average} = \frac{1}{4-1} \int_1^4 (x^3)\,dx = \frac{1}{3}\cdot\frac{x^4}{4}\Bigg|_1^4$$

$$= \frac{1}{12}(4)^4 - \frac{1}{12}(1)^4$$

$$= \frac{256}{12} - \frac{1}{12} = \boxed{\frac{255}{12}}$$

---

## Page 3 — Study Notes · [Source: 3.png](3.png)

**Example:** Find the average value of $f(x) = 6x^2 - 4x$ on $[2,5]$

$$f_{average} = \frac{1}{b-a} \int_a^b f(x)\,dx$$

$$f_{average} = \frac{1}{5-2} \int_2^5 (6x^2 - 4x)\,dx$$

$$= \frac{1}{3}\cdot 2x^3 - 2x^2\Big|_2^5$$

$$= \frac{1}{3}\big[2(5)^3 - 2(5)^2\big] - \frac{1}{3}\big[2(2)^3 - 2(2)^2\big]$$

$$= \left[\frac{1}{3}\cdot (250 - 50)\right] - \left[\frac{1}{3}\cdot (16 - 8)\right]$$

$$= \left[\frac{1}{3}\cdot 200\right] - \left[\frac{1}{3}\cdot 8\right]$$

$$= 66.\overline{6} - 2.\overline{6}$$

$\boxed{= 64}$

---

**Mean Value Theorem for Derivatives**

- If a function $f(x)$ is continuous on a closed interval, $[a,b]$, then there is at least 1 point $c$, such that $a \le c \le b$, and:

$$f'(c) = \frac{f(b) - f(a)}{b-a}$$

**Graph description:**
- Axes: $x$-axis horizontal, $y$-axis vertical.
- Curve labeled $f(x)$ has a local minimum near $x=a$, then rises.
- Secant line drawn from point $(a, f(a))$ to point $(b, f(b))$.
- Tangent line at point $(c, f'(c))$ is parallel to the secant line.
- Points labeled: $(a)$, $(c)$, $(b)$ on $x$-axis; $f(a)$, $f(b)$, $f'(c)$ on curve.
- Dashed vertical lines drop from $a$, $c$, $b$ to $x$-axis.

---

## Page 4 — Mean Value Theorem Example · [Source: 4.png](4.png)

Ex. Find the locations of all points $x=c$ guaranteed by the Mean Value Theorem on $f(x) = 5x^2 + 10x - 3$ for the interval $[2, 4]$.

**Step 1: Evaluate Function at Endpoints**

$f(2) = 5(2)^2 + 10(2) - 3 = 5(4) + 20 - 3 = 37$

$f(4) = 5(4)^2 + 10(4) - 3 = 5(16) + 40 - 3 = 117$

**Step 2: Calculate Slope of Secant Line**

$$\text{Slope of secant} = \frac{f(4) - f(2)}{4 - 2} = \frac{117 - 37}{4 - 2} = \frac{80}{2} = 40$$

**Step 3: Find $x = c$**

Next.

1. Find the derivative $f'(x)$:
   $$f'(x) = 10x + 10$$

2. Set the derivative equal to the slope (40):
   $$10x + 10 = 40$$

3. Solve for $x$:
   $$10x + 10 = 40$$
   $$\frac{-10 \quad -10}{10x = 30}$$
   $$\frac{10x}{10} = \frac{30}{10}$$
   $$x = 3$$

---

## Page 5 — MVT Example and Area Curves · [Source: 5.png](5.png)

**Mean Value Theorem Example**

Ex. Find the point $x=c$, guaranteed by the Mean Value Theorem on $[0, 9]$ for the function $f(x) = \sqrt{x}$.

- $f(0) = \sqrt{0} = 0$
- $f(9) = \sqrt{9} = 3$
- Slope of Secant $= \dfrac{f(9) - f(0)}{9 - 0} = \dfrac{3 - 0}{9 - 0} = \dfrac{3}{9} = \dfrac{1}{3}$
- $f'(x) = \dfrac{1}{2}x^{-1/2} = \dfrac{1}{2\sqrt{x}}$
- $f'(c) = \dfrac{1}{2\sqrt{x}} = \dfrac{1}{3} \Rightarrow \dfrac{3}{2} = 2\sqrt{x} \Rightarrow \dfrac{3}{2} = \sqrt{x} \Rightarrow x = \left(\dfrac{3}{2}\right)^2 = \dfrac{9}{4}$

**Area Between Two Curves**

**Graph description:**
- Coordinate plane with x-axis and y-axis
- Curve $g(x)$: upper boundary, U-shaped/parabolic opening upward
- Curve $f(x)$: lower boundary with a local minimum between intersection points
- Intersection points at $x = a$ (left) and $x = b$ (right)
- Shaded region bounded above by $g(x)$ and below by $f(x)$ between $x = a$ and $x = b$
- Arrows on both curves indicate they continue beyond the shaded region

$$A_{\text{between}} = \int_a^b (g(x) - f(x))\, dx$$

- Has to be top $-$ bottom of curve ✓
- $a, b$ are the Points of Intersection ✓

---

## Page 6 — Area Between Curves Example · [Source: 6.png](6.png)

Ex. Find the area between $f(x) = x^2$ and $g(x) = x^3$

**Graph description:**
- Standard Cartesian coordinate plane with x-axis and y-axis with arrows indicating positive direction
- $f(x) = x^2$: upward-opening parabola with vertex at origin
- $g(x) = x^3$: cubic curve passing through origin, below parabola for $0 < x < 1$, above for $x < 0$
- Curves intersect at origin $(0,0)$ and at $(1,1)$
- Shaded region between curves from $x = 0$ to $x = 1$

1. Set the functions equal to find endpoints:
   $x^2 = x^3$
   $-x^2 - x^2 \quad -x^2$
   $0 = x^3 - x^2$
   $0 = x^2(x - 1)$
   $x^2 = 0 \quad | \quad x - 1 = 0$
   $x = 0 \quad | \quad x = 1$

   *(teal box: Integrate top curve – bottom curve between the end points.)*

   $A = \displaystyle\int_0^1 (x^2 - x^3)\,dx$

   $A = \left[\frac{1}{3}x^3 - \frac{1}{4}x^4\right]_0^1$

   $A = \left(\frac{1}{3}(1)^3 - \frac{1}{4}(1)^4\right) - \left(\frac{1}{3}(0)^3 - \frac{1}{4}(0)^4\right)$

   $A = \frac{1}{3} - \frac{1}{4} = \frac{4}{12} - \frac{3}{12} =$ **1/12** *(boxed in red)*

---

## Page 7 — Final Review Velocity Problem · [Source: 7.png](7.png)

Final Review: Packet 1.

Q18. $v(t) = t^2 - 5t + 6$ if $d(t)$, $d(0)=0$

(a) $d(t) = \int v(t)dt$
    $= \int(t^2 - 5t + 6)dt$
    $= \frac{1}{3}t^3 - \frac{5}{2}t^2 + 6t + c$ -General Solution
    $= \frac{1}{3}(t^3 - \frac{5}{2}t + 6t)+c$

    $d(t) = \frac{1}{3}t^3 - \frac{5}{2}t^2 + 6t$

(b) $a(t) = v'(t) \quad a(t) = 2t - 5$

(c) At rest means velocity $= 0$

    $(t - 3)(t - 2) = 0$

    $t = 3 \qquad t = 2$

(d) Absolute maximum $v(t)$ on $[0,6]$

    $t^2 - 5t + 6 = 0$
    $(t - 3)(t - 2) = 0$
    $+3 \quad +2$

    **Absolute maximum $v(t)$ on $[0,6]$**

    Critical Values: $v'(t) = a(t) = 0$

    $v(0) = 0^2 - 5(0) + 6 = 6$
    $v(2) = 2^2 - 5(2) + 6 = 0.25$
    $v(6) = 6^2 - 5(6) + 6 = 12$

    Maximum velocity $= 12$

    [Handwritten average value computation:]
    $V_{avg} = \frac{1}{4} \cdot \int v(t)dt$
    $= \frac{1}{3} \int (t^2 - 5t + 6)dt$
    $= \frac{1}{3} \left( \frac{1}{3}t^3 - \frac{5}{2}t^2 + 6t \right) \Big|$
    $= \frac{1}{3} \left( \frac{1}{3}(6)^3 - \frac{5}{2}(6)^2 + 6(6) \right) - \left( \frac{1}{3}(0)^3 - \frac{5}{2}(0)^2 + 6(0) \right)$
    $= \frac{1}{3} \left( \frac{1}{3}(216) - \frac{5}{2}(36) + 36 \right)$
    $= \frac{1}{3} (72 - 90 + 36)$
    $= \frac{1}{3} (18)$
    $= \frac{1}{3} \left( \frac{1}{2} \right) = \frac{1}{6}$
