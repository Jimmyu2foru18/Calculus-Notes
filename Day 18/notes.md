# Day 18

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Riemann Sums (4 subintervals) · [Source: 1.png](1.png)

1.) Find the left, right, Midpoint, and Trapezoid Sums to estimate the area under $f(x) = 2x^3$ on $[1,5]$, using **four** subintervals.

a.) Left Riemann Sum

$\Delta x = \frac{b-a}{n} = \frac{5-1}{4} = \frac{4}{4} = 1$

$L_4 = \Delta x(f(1), f(2), f(3), f(4))$

$L_4 = 1\left(2(1)^3 + 2(2)^3 + 2(3)^3 + 2(4)^3\right)$

$L_4 = 1\left(2 + 16 + 54 + 128\right) = 1(200) = \boxed{200}$

**Graph description:** Curve increasing and concave up on $[1,5]$. Four left-endpoint rectangles shown with heights at $x=1,2,3,4$; leftmost rectangle shortest, rightmost tallest.

b.) Right Riemann Sum

$R_4 = \Delta x(f(2), f(3), f(4), f(5))$

$R_4 = 1\left(2(2)^3 + 2(3)^3 + 2(4)^3 + 2(5)^3\right)$

$R_4 = 1\left(16 + 54 + 128 + 250\right)$

$R_4 = 1(448) = \boxed{448}$

**Graph description:** Curve increasing and concave up on $[1,5]$. Four right-endpoint rectangles shown with heights at $x=2,3,4,5$; leftmost rectangle shortest, rightmost tallest.

c.) Midpoint Sum

$M_4 = 1\left(f(1.5) + f(2.5) + f(3.5) + f(4.5)\right)$

$M_4 = 1\left(2(1.5)^3 + 2(2.5)^3 + 2(3.5)^3 + 2(4.5)^3\right)$

$M_4 = 1\left(6.75 + 31.25 + 85.75 + \right)$

$M_4 = 1\left(6.75 + 31.25 + 85.75 + 182.25\right)$

$M_4 = 1(306) = \boxed{306}$

**Graph description:** Curve increasing and concave up on $[1,5]$. Four midpoint rectangles shown with heights at $x=1.5,2.5,3.5,4.5$; leftmost rectangle shortest, rightmost tallest.

d.) Trapezoid Sum

$T_4 = \frac{1}{2}\Delta x\left(f(1) + f(2) + f(3) + f(4) + f(5)\right)$

$T_4 = \frac{1}{2}(1)\left(2(1)^3 + 2(2)^3 + 2(3)^3 + 2(4)^3 + 2(5)^3\right)$

$T_4 = \frac{1}{2}\left(2 + 16 + 54 + 128 + 250\right)$

$T_4 = \frac{1}{2}(648) = \boxed{324}$

or $T_4 = \frac{L_4 + R_4}{2} = \frac{200+448}{2} = \boxed{324}$

**Graph description:** Curve increasing and concave up on $[1,5]$. Four trapezoids shown connecting points at $x=1,2,3,4,5$; trapezoids lie above the curve.

---

## Page 2 — Riemann Sums (8 subintervals) · [Source: 2.png](2.png)

2.) Find the left, right, midpoint, and trapezoid sums to estimate the area under $f(x) = 2x^3$ on $[1,5]$, using eight subintervals.

a.) Left Riemann sum

$\Delta x = \frac{b-a}{n} = \frac{5-1}{8} = \frac{4}{8} = \frac{1}{2}$

$L_8 = \frac{1}{2}\left(f(1) + f(1.5) + f(2) + f(2.5) + f(3) + f(3.5) + f(4) + f(4.5)\right)$

$L_8 = \frac{1}{2}\left(2(1)^3 + 2(1.5)^3 + 2(2)^3 + 2(2.5)^3 + 2(3)^3 + 2(3.5)^3 + 2(4)^3 + 2(4.5)^3\right)$

$L_8 = \frac{1}{2}\left(2 + 6.75 + 16 + 31.25 + 54 + 85.75 + 128 + 182.25\right)$

$L_8 = \frac{1}{2}(506) = \boxed{253}$

b.) Right Riemann sum

$R_8 = \frac{1}{2}\left(f(1.5) + f(2) + f(2.5) + f(3) + f(3.5) + f(4) + f(4.5) + f(5)\right)$

$R_8 = \frac{1}{2}\left(6.75 + 16 + 31.25 + 54 + 85.75 + 128 + 182.25 + 2(5)^3\right)$

$2(5)^3 = 250$

$R_8 = \frac{1}{2}(754)$

$R_8 = \boxed{377}$

c.) Midpoint sum

$M_8 = \Delta x\left(f(1.25) + f(1.75) + f(2.25) + f(2.75) + f(3.25) + f(3.75) + f(4.25) + f(4.75)\right)$

$M_8 = \frac{1}{2}\left(2(1.25)^3 + 2(1.75)^3 + 2(2.25)^3 + 2(2.75)^3 + 2(3.25)^3 + 2(3.75)^3 + 2(4.25)^3 + 2(4.75)^3\right)$

$M_8 = \frac{1}{2}\left(3.900625 + 10.1875 + 22.78125 + 41.59375 + 68.66625 + 105.46675\right)$

$M_8 = \frac{1}{2}(621)$

$M_8 = \boxed{310.5}$

d.) Trapezoid sum

$\boxed{\text{[Fill in Here]}}$

Shortcut way

$T_4 = \frac{L_8 + R_8}{2} = \frac{253 + 377}{2} = \boxed{315}$

---

## Page 3 — Over and Under Estimates · [Source: 3.png](3.png)

**Graph description:** Four graphs arranged in a 2×2 grid, each with a colored border and a sketch of a curve with rectangles illustrating Riemann sum approximations.

**Top left — Increasing, Concave Up** *(teal border)*
Curve rises from lower left with increasing slope. Three rectangles shown: left endpoint (red, shortest), midpoint (yellow, medium), right endpoint (blue, tallest).
$$L \leq M \leq A \leq T \leq R$$

**Top right — Increasing, Concave Down** *(blue border)*
Curve rises from lower left with decreasing slope. Three rectangles shown: left endpoint (red, shortest), trapezoid/midpoint (yellow, medium-tall), right endpoint (blue, tallest).
$$L \leq T \leq A \leq M \leq R$$

**Bottom left — Decreasing, Concave Up** *(red border)*
Curve falls from upper left with decreasing slope (steep to flat). Three rectangles shown: left endpoint (red, tallest), midpoint (yellow, medium), right endpoint (blue, shortest).
$$R \leq M \leq A \leq T \leq L$$

**Bottom right — Decreasing, Concave Down** *(yellow border)*
Curve falls from upper left with increasing slope (flat to steep). Three rectangles shown: left endpoint (red, tallest), trapezoid/midpoint (yellow, medium-short), right endpoint (blue, shortest).
$$R \leq T \leq A \leq M \leq L$$

---

## Page 4 — Definite Integral and FTC · [Source: 4.png](4.png)

**Calculus Study Notes: The Definite Integral**

**What about the actual area?**

$A = \lim\limits_{n\to\infty} R_n = \lim\limits_{n\to\infty} L_n = \lim\limits_{n\to\infty} M_n = \lim\limits_{n\to\infty} T_n = \int_a^b f(x)dx$

which is called the *definite integral* of f(x) from a to b, with respect to x.

**How do we evaluate it?**

> **Fundamental Theorem of Calculus, Part I**
> 
> $\int_a^b f(x)dx = F(b) - F(a)$

**Examples**

**Ex.** Find the area where $f(x) = 2x^3$ on $[1, 5]$

$$\int_1^5 2x^3dx = \frac{2}{4}x^4\bigg|_{x=1}^{x=5} = \frac{1}{2}x^4\bigg|_{x=1}^{x=5} = \frac{1}{2}(5)^4 - \frac{1}{2}(1)^4 = \frac{625}{2} - \frac{624}{2} = \boxed{312}$$

**Ex.** Find the area under $f(x) = x^2$ on $[0, 4]$

$$\int_0^4 x^2dx = \frac{1}{3}x^3\bigg|_{x=0}^{x=4} = \frac{1}{3}(4)^3 - \frac{1}{3}(0)^3 = \frac{64}{3} - 0 = \frac{64}{3} = \boxed{21.\overline{3}}$$

---

## Page 5 — U-Substitution for Definite Integrals · [Source: 5.png](5.png)

**Definite Integrals Using U-Substitution**

**Two Options:**

1. Convert the bounds to equivalent values of *u*, and complete the problem **in terms of *u***.
2. Leave bounds **in terms of *x***: convert back to *x* before plugging them in.

**Example:**

$$\int_0^2 3x(x^2-1)^3 \; dx$$

**1** Let $u = x^2 - 1$

**2** Differentiate:

$$\frac{du}{dx} = 2x \quad\Rightarrow\quad dx = \frac{du}{2x}$$

**3** Bounds:

$u = x^2 - 1$

$x = 0 \quad\Rightarrow\quad u = 0^2 - 1 = -1$

$x = 2 \quad\Rightarrow\quad u = (2)^2 - 1 = 3$

**4** Solve:

$$\int_{-1}^3 3xu^3 \; \frac{du}{2x}$$

$$\int_{-1}^3 \frac{3}{2}u^3 \, du = \frac{3}{2}\cdot\frac{1}{4}u^4\bigg|_{-1}^3$$

$$= \frac{3}{8}u^4\bigg|_{-1}^3$$

$$\frac{3}{8}(3)^4 - \frac{3}{8}(-1)^4 = \frac{243}{8} - \frac{3}{8} = \frac{240}{8} = \boxed{30}$$

---

## Page 6 — Practice Definite Integrals · [Source: 6.png](6.png)

**Find each definite integral of:**

**1)** $\int_2^7 (3x^2 - 4x)dx$

$$x^3 - \frac{4}{2}x^2\bigg|_2^7$$

$$(7)^3 - 2(7)^2 - ((2)^3 - 2(2)^2)$$

$$(343 - 98) - 8 - 8$$

$$245 - 0$$

$$\boxed{245}$$

**2)** $\int_0^{2\pi} \sin(x)dx$

$$-\cos(x)\big|_{x=0}^{x=2\pi}$$

$$-\cos(2\pi) - (-\cos(0))$$

$$-\cos(2\pi) - (-\cos(0))$$

$$-1 + 1 = \boxed{0}$$

**Graph description:** Sine wave on $[0, 2\pi]$. y-axis from -1 to 1. x-axis marked at $0, \pi/2, \pi, 3\pi/2, 2\pi$. Curve starts at origin $(0,0)$, rises to peak at $(\pi/2, 1)$, crosses x-axis at $(\pi, 0)$, reaches trough at $(3\pi/2, -1)$, returns to $(2\pi, 0)$.

**3)** $\int_3^9 3\sqrt{2x-2} \, dx$

> **Substitution**
> 
> Let $u = 2x - 2$
> 
> $\frac{du}{dx} = 2dx \Rightarrow dx = \frac{du}{2}$
> 
> **Change of Bounds**
> 
> $x = 9 \Rightarrow u = 2(9) - 2 = 16$
> 
> $x = 3 \Rightarrow u = 2(3) - 2 = 4$

$$\int_4^{16} 3\sqrt{u} \; \frac{du}{2} = \int_4^{16} \frac{3}{2}u^{1/2}du$$

$$\frac{3}{2}\cdot\frac{2}{3} u^{3/2}\bigg|_{u=4}^{u=16} = 16^{3/2} - 4^{3/2}$$

$$= (\sqrt{16})^3 - (\sqrt{4})^3 = 4^3 - 2^3$$

$$= 64 - 8 = \boxed{56}$$

---

## Page 7 — Rules for Evaluating Definite Integrals · [Source: 7.png](7.png)

**Rules for Evaluating Definite Integrals**

**I.)** $\displaystyle \int_{a}^{a} f(x)\,dx = 0$

**II.)** $\displaystyle \int_{b}^{a} f(x)\,dx = -\int_{a}^{b} f(x)\,dx$

**III.)** $\displaystyle \int_{a}^{b} f(x)\,dx + \int_{b}^{c} f(x)\,dx = \int_{a}^{c} f(x)\,dx$

**Graph description:** Curve above x-axis; shaded regions between $a$–$b$ and $b$–$c$. Brackets show intervals $\underline{ab}$ and $\underline{bc}$ spanning $\underline{ac}$.

$\underline{ab} + \underline{bc} = \underline{ac}$

$\underline{\text{Area}} + \underline{\text{Area}} = \underline{\text{Area}}$

---

**Fundamental Theorem of Calculus, Part II**

If we have a function

$g(x) = \displaystyle \int_{c}^{x} f(t)\,dt$ where $C$ is constant then

$g'(x) = f(x)$

*Follows from Part I*

$g(x) = \displaystyle \int_{0}^{x} f(t)\,dt = F(t)\Big|_{t=c}^{t=x} = g(x) = F(x) - F(c)$

$g'(x) = F'(x) - 0$

$g'(x) = f(x)$

---

## Page 8 — Fundamental Theorem of Calculus & Exam Topics · [Source: 8.png](8.png)

**Applications of the Fundamental Theorem of Calculus**

**Example 1:**
Find the derivative of $f(x) = \displaystyle \int_{3}^{x} e^{\sin(\sqrt{t})}\,dt$

> $\displaystyle \boldsymbol{f'(x) = e^{\sin(\sqrt{x})}}$
> Due to Fundamental Theorem of Calculus Part 2

**Example 2:**
Find the derivative of $f(x) = \displaystyle \int_{0}^{5x^{2}} \ln\!\left(\frac{t-2}{\tan(t)}\right)dt$

Chain Rule:

> $\displaystyle \boldsymbol{f'(x) = \ln\!\left(\frac{5x^{2}-2}{\tan(5x^{2})}\right) \cdot 10x}$

---

**Final Review**

**What to Practice**

- Related Rates
- Optimization
- Curve Sketching
- Points of Inflection
- Max/Min
- $\boldsymbol{f'}$ (First Derivative) Graphs
- Antiderivatives
- Definite & Indefinite Integrals
- Riemann Sums (Right, Left, Midpoint, Trapezoid)
