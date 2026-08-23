# Day 17

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Integration Practice · [Source: 1.png](1.png)

**INTEGRATION PRACTICE (U-SUBSTITUTION)**

**1.)** $\int 5x^2\sqrt{x^3-2}\,dx$

Let $u = x^3 - 2$

$du = 3x^2\,dx \Rightarrow \frac{2x^2\,dx}{3x^2} = \frac{du}{3x^2} = dx$

$\int 5x^2\sqrt{x^3-2}\,dx = \int 5\sqrt{u}\,\frac{du}{3}$

$\frac{5}{3}\int u^{1/2}\,du$

$\frac{5}{3} \cdot \frac{2}{3}u^{3/2} + c$

*Add 1 to power and multiply by reciprocal*

$= \frac{10}{9}(x^3-2)^{3/2} + c$

**2.)** $\int \frac{21x^6+15}{x^7+5x}\,dx$

Let $u = x^7 + 5x$

$\frac{du}{dx} = 7x^6+5 \Rightarrow du = (7x^6+5)\,dx$

$\frac{du}{dx} = \frac{dx}{7x^6+5}$

$\int \frac{21x^6+15}{x^7+5x}\cdot \frac{du}{7x^6+5} = \int \frac{3(7x^6+5)}{u}\,du = \int \frac{3}{u}\,du$

Integration Rule: $\int \frac{1}{u}\,du = \ln|u|$

$= 3\ln|x^7+5x| + c$

**3.)** $\int 3x(10-2x)^{10}\,dx$

Let $u = 10-2x \Rightarrow x = \frac{-10-u}{2} = \frac{1}{2}u+5$

$du = -2\,dx \Rightarrow dx = -\frac{du}{2}$

$\int 3x\,u^{10}\,\frac{-du}{2} = \int -\frac{3}{2}x\,u^{10}\,du$

$-\frac{3}{2}\left(\frac{1}{2}u+5\right)u^{10}\,du$

$\int \left(\frac{3}{4}u^{11} - \frac{15}{2}u^{10}\right)du$

$\frac{3}{4} \cdot \frac{u^{12}}{12} - \frac{15}{2} \cdot \frac{u^{11}}{11} + c$

$= \frac{1}{16}(10-2x)^{12} - \frac{15}{22}(10-2x)^{11} + c$

**4.)** $\int \cos(2x)e^{\sin(2x)}\,dx$

*Integration Tip: Power substitution for functions of composite functions*

Let $u = \sin(2x)$

$du = 2\cos(2x)\,dx \Rightarrow dx = \frac{du}{2\cos(2x)}$

$\int \cos(2x)e^u\,\frac{du}{2\cos(2x)}$

$\int \frac{1}{2}e^u\,du$

$\frac{1}{2}e^u + c$

Rule: $\int e^u\,du = e^u$

$= \frac{1}{2}e^{\sin(2x)} + c$

*Key Takeaway: The goal of a u-substitution is to match part of the integrand to a manageable form, transforming the integral into something directly integrable.*

---

## Page 2 — U-Substitution Practice · [Source: 2.png](2.png)

**5.)** $\int \frac{2x}{3+3x^4}\,dx$

1. Factor:
$\int \frac{2x}{3+3x^4}\,dx = \frac{1}{3}\int \frac{2x}{1+x^4}\,dx$

2. u-Substitution:
Let $u = x^2$
$du = 2x\cdot dx \Rightarrow \frac{du}{2x} = dx$

3. Substitute & Simplify:
$\int \frac{1}{3}\cdot\frac{2x}{1+u^2}\cdot\frac{du}{2x}$

$\int \frac{1}{3}\cdot\frac{2x}{1+u^2}\cdot du$

$\int \frac{1}{3}\cdot\frac{1}{1+u^2}du$

4. Integrate & Back-Substitute:
$\frac{1}{3}\tan^{-1}(u) + C$

$= \frac{1}{3}\tan^{-1}(x^2) + C$

**6.)** $\int \sec^2(x)\tan(x)\,dx$

Let u-Substitution:
Let $u = \tan(x)$

$du = \sec^2(x)\,dx \Rightarrow dx = \frac{du}{\sec^2(x)}$

$\int \sec^2(x)\cdot u \cdot \frac{du}{\sec^2(x)}$

$\int u\,du$

$= \frac{u^2}{2} + C$

$= \frac{1}{2}\tan^2(x) + C$

**U-Substitution Shortcut**

- Rule for use:
If $u$ will be just a constant times $x$, we can use this shortcut.

$\int f(kx)\,dx = \frac{1}{k}F(kx) + C$

**General Rule:**

$\int f(kx)\,dx = \frac{1}{k}F(kx) + C$

**EX.**

$\int \sin(5x)\,dx = \frac{1}{5}(-\cos(5x)) + C$

---

## Page 3 — Areas Under Curves · [Source: 3.png](3.png)

Some areas can be found geometrically.

**Ex.)** Find the area under $f(x) = 3$ from $x = 0$ to $x = 4$

**Graph description:** Rectangle with base from $x=0$ to $x=4$ on the x-axis, height $f(x)=3$, shaded region between curve and x-axis.

$A = L \cdot w = 3 \cdot 4 = 12$

**Ex.)** Find the area under $f(x) = 2x$ from $x = 0$ to $x = 4$

**Graph description:** Right triangle under line $f(x)=2x$ from $x=0$ to $x=4$, height at $x=4$ is $f(4)=8$, shaded triangular region.

$A = \frac{1}{2}bh = \frac{1}{2}(4)(8) = 16$

**What if we don't have a known Geometric Formula?**

**Ex.)** Find the area under $f(x) = x^2$ on $[0,4]$

**Graph description:** Parabola $f(x)=x^2$ opening upward, with a series of rectangles underneath approximating the area from $x=0$ to $x=4$.

— we can break the region up into shapes that we do know the area of, and add up those areas to approximate the total area under the curve.

**Riemann Sums**

- using rectangles with one side along the x-axis to approximate the area under the curve.

---

## Page 4 — Right Riemann Sum · [Source: 4.png](4.png)

**Right Riemann Sum**
- The heights of the rectangles are determined by the height of **the function at the right-hand side** of each sub-interval.
- **Definition:**
$$\Delta x = \frac{b-a}{n}$$

**Right Riemann Sum**
- The heights of rectangles are determined by the height of the function at the **light-hand side** of each sub-interval.
- First, determine (if many SubInterval) we want to blenk the interval into horizontally and calculate the width, $\Delta x$ of each subsection
- For an internal $[a,b]$ with $A$ subsections, we have: $$\Delta x = \frac{b-a}{n}$$
- The heights of rectangles are the Value of $f(x)$ at ant the right end of each sub interval.
- So, the sums is: $$R_n = \Delta x f(a+\Delta x) + \Delta x f(a+2\Delta x) + ... + \Delta x f(b)$$ or $$R_n = \Delta x(f(a+\Delta x) + f(a+2\Delta x) + ... + f(b))$$

**Ex.** Find $R_8$ for $f(x) = x^2$ on $[0,4]$

The initial estimate is significantly an overestimate, because the rectangles extend a large amount over the curve.
We can lessen this effect by using a large number of smaller sub-intervals.
So, $\Delta x = \frac{b-a}{n} = \frac{4-0}{8} = \frac{4}{8} = \frac{1}{2}$

$R_8 = \Delta x(f(0.5) + f(1) + f(1.5) + ... + f(3.5) + f(4))$
$R_8 = \frac{1}{2}(0.5^2 + 1^2 + 1.5^2 + 2^2 + ... + 3.5^2 + 4^2)$
$R_8 = \frac{1}{2}(51) = \boxed{25.5}$

The larger we make $n$, the closer we get to our actual area.

---

## Page 5 — Left & Midpoint Sums · [Source: 5.png](5.png)

**Left Riemann Sum**
- Uses rectangles with heights determined by the function on the **left side** of each subinterval.
$$L_n = \Delta x(f(a) + f(a+\Delta x) + f(a+2\Delta x) + ..., + f(b-\Delta x))$$

**Ex.** Find $L_4$ for $f(x) = x^2$ on $[0,4]$

$L_4 = \Delta x(f(0) + f(1) + f(2) + f(3))$
$L_4 = 1(0^2 + 1^2 + 2^2 + 3^2)$
$L_4 = 1(0 + 1 + 4 + 9)$
$$\boxed{L_4 = 14}$$

**Midpoint Riemann Sum**
- Uses rectangles with heights determined by the height of the function at the **Midpoint** of each subinterval.
$$M_n = \Delta x\left(f\left(a+\frac{1}{2}\Delta x\right) + f\left(a+\frac{3}{2}\Delta x\right) + f\left(a+\frac{5}{2}\Delta x\right) + ... + f\left(b-\frac{1}{2}\Delta x\right)\right)$$

**Ex.** Find $M_4$ for $f(x) = x^2$ on $[0,4]$

So, $\Delta x = 1$
$M_4 = \Delta x(f(0.5) + f(1) + f(1.5) + ... + f(3.5) + f(4))$
$M_4 = 1(0.5^2 + 1.5^2 + 2.5^2 + 3.5^2)$
$M_4 = 1(0.25 + 2.25 + 6.25 + 12.25)$
$$\boxed{M_4 = 21}$$

---

## Page 6 — Trapezoid Sums · [Source: 6.png](6.png)

**Trapezoid Sums**
- Use **right trapezoids** with the orthogonal leg along the $x$-axis.
- The heights of the function at the end points of the sub-intervals are the bases.

$$\text{Area}_{\text{trapezoid}} = \frac{1}{2}(b_1 + b_2)h$$
where $h = \Delta x$

$$T_n = \frac{1}{2}\Delta x(f(a) + f(a+\Delta x) + f(a+2\Delta x) + ... + 2f(b-\Delta))$$
$$T_n = \frac{1}{2}\Delta x(f(a) + 2f(a+\Delta x) + 2f(a+2\Delta x) + 2f(a+3\Delta x) + ... + f(b))$$
or $$T_n = \frac{L_n + R_n}{2}$$

**Example:** Find $T_4$ for $f(x) = x^2$ on $[0,4]$

So,
$T_4 = \frac{1}{2}\Delta x(f(0) + 2f(1) + 2f(2) + 2f(3) + f(4))$
$T_4 = \frac{1}{2}(1)(0^2 + 2 \cdot 1^2 + 2 \cdot 2^2 + 2 \cdot 3^2 + 4^2)$
$T_4 = \frac{1}{2}(0 + 2 + 8 + 18 + 16)$
$$T_4 = \frac{1}{2}(44) = \boxed{22}$$
