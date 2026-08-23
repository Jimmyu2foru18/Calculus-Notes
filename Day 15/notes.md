# Day 15

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Graph Analysis of Derivative · [Source: 1.png](1.png)

Identify the intervals where $f(x)$ is increasing/decreasing, and concave up/down and location of any relative extrema and points of inflection for $f(x)$, based on the graph of $f'(x)$ below.

1) **Increasing on:** $(-4,0)$
2) **Decreasing on:** $(-\infty,-4) \cup (0,2) \cup (2,\infty)$
3) **Concave up on:** $(-\infty,-2) \cup (1,2)$
4) **Concave down on:** $(-2,1) \cup (2,\infty)$
5) **Relative Maximum at:** $x=0$
6) **Relative Minimum at:** $x=-4$
7) **Plateau on:** $x=2$
8) **Points of Inflection at:** Turning points $x=[-2,1,2]$

---

## Page 2 — Optimization Problems · [Source: 2.png](2.png)

### Problem 1: Rectangular Field

We are going to fence in a rectangular field. If we look at the field from above the vertical sides are $\$10/\text{ft}$, if the cost of the bottom is $\$2/\text{ft}$ and the top of the $\$7/\text{ft}$. If we have $\$700$, determine the dimension of the field that will maximize the enclosed area?

1) **Objective function:** $A = L \cdot W$
2) **Maximum Area:** $A = xy$
3) **Constraint is:** $2x + 7x + 10y + 10y = 700$
   $$9x + 2y = 700$$
4) **Derivative:** $A' = 35 - 0.9x$
5) $\frac{d}{dx} = 0$: $35 - 0.9x = 0$
   $$35 = 0.9x$$
   $$x = \frac{35}{0.9}$$
   $$x = 38.\overline{8}$$
   
   $$y = 35 - 0.45x$$
   $$y = 35 - 0.45(38.\overline{8})$$
   $$y = 35 - 17.5$$
   $$\boxed{A = 17.5}$$

6) **Actual Maximized Area:**
   $$A = x(35 - 0.45x)$$
   $$A = 35x - 0.45x^2$$

### Problem 2: Open-Top Box

We have a piece of cardboard that is $50\text{cm}$ by $20\text{cm}$ and we are going to cut it out of the corners and fold UP the sides to form a box. Determine the height of the box that will give a maximum Volume.

**Objective function:** $V = L \cdot W \cdot H$

**Maximum Volume:**
$$V = (50 - 2x)(20 - 2x)x$$
$$V = (1000 - 100x - 40x + 4x^2)x$$
$$V = 1000x - 100x^2 - 40x^2 + 4x^3$$
$$V = 4x^3 - 140x^2 + 1000x$$

**Derivative:**
$$V' = 12x^2 - 280x + 1000 = 0$$

$$\frac{12x^2 - 280x + 1000}{4} = 0$$

$$3x^2 - 70x + 250 = 0$$

$$x = \frac{-70 \pm \sqrt{(-70)^2 - 4(3)(250)}}{2 \cdot 3}$$

$$= \frac{70 \pm \sqrt{4900 - 3000}}{6}$$

$$= \frac{70 \pm \sqrt{1900}}{6}$$

$$= \frac{70 \pm 10\sqrt{19}}{6}$$

$$= \frac{35 \pm 5\sqrt{19}}{3}$$

$$x = \frac{70 \pm \sqrt{1900}}{6}$$

$$x \approx -8.93, \quad x = 4.40$$

$$\boxed{X = 4.40\text{ cm} = \text{MAX Volume}}$$

---

## Page 3 — Integration · [Source: 3.png](3.png)

For a function $f(x)$, we say that another function $F(x)$ is its **Anti-derivative** or **indefinite integral** if $F'(x) = f(x)$.

The Notation we use to indicate we are taking an antiderivative is:

$$F(x) = \int f(x)\,dx$$

- ↑ *Integral of*
- ↑ *with respect to $x$*

### Defining How Derivatives Work for Power Functions

If we want to find $\int x\,dx$, we need to ask ourselves, what function has a derivative of $x$?

**So,**
If $f(x) = x^2$, $f'(x) = 2x$

**So,**
If $f(x) = \frac{1}{2}x^2$, $f'(x) = \frac{1}{2} \cdot 2x = x$

**therefore,**
$$\int x\,dx = \frac{1}{2}x^2$$

> **Note:** this is **Not** a unique Solution

If $f(x) = \frac{1}{2}x^2 + 1$, $f'(x) = x$

**So we also say**
$$\int x\,dx = \frac{1}{2}x^2 + 1$$

---

## Page 4 — Antiderivatives & Power Rule · [Source: 4.png](4.png)

This is true for any constant we could add to the $\frac{1}{2}x^2$.

So we define the antiderivative of '$x$' as:

$$\int x \, dx = \frac{1}{2}x^2 + C$$

Where '$C$' is any **arbitrary constant**.

**EX.** Find $\int x^2 \, dx$

Since $f(x) = x^3$ has a derivative $f'(x) = 3x^2$,

We can use $f(x) = \frac{1}{3}x^3 \rightarrow f'(x) = \frac{1}{3} \cdot 3x^2 = x^2$

So $\int x^2 dx = \frac{1}{3}x^3 + C$

**EX.** Find $\int x^3 dx$

Since $f(x) = x^4$ has a derivative $f'(x) = 4x^3$,

We can use $f(x) = \frac{1}{4}x^4 = f'(x) = \frac{1}{4} \cdot 4x^3 = x^3$

So $\int x^3 dx = \frac{1}{4}x^4 + C$

---

## Page 5 — Integration Rules & Antiderivatives · [Source: 5.png](5.png)

$$\boxed{\int \left(f(x) + g(x)\right) dx = \int f(x)dx \pm \int g(x)dx = F(x) \pm G(x)}$$

**Ex.** $\int \left(x^2 + x^3 - x^4\right) dx = \boxed{\frac{1}{3}x^3 + \frac{1}{4}x^4 - \frac{1}{5}x^5 + C}$

---

$$\boxed{\int k \, f(x) \, dx = k \int f(x) \, dx = kF(x)}$$

**Ex.** $\int 5x^2 dx = 5 \cdot \frac{1}{3}x^3 + C = \boxed{\frac{5}{3}x^3 + C}$

---

**Additional Work and Examples**

**Ex.** $\int \left(3x^4 - 2x^2 + 7\right) dx$

$= \boxed{\frac{3}{5}x^5 - \frac{2}{3}x^3 + 7x + C}$

**Ex.** $\int \left(3x^3 - \sqrt{x}\right) dx \quad = \quad \int \left(3x^3 - x^{\frac{1}{2}}\right) dx$

$= \boxed{\frac{3}{4}x^4 - \frac{2}{3}x^{\frac{3}{2}} + C}$

**Ex.** $\int \left(\frac{3}{x^2} + \frac{5}{x^3}\right) dx$

$= \int \left(3x^{-2} + 5x^{-3}\right) dx \quad = \quad \boxed{\frac{-3}{x} - \frac{5}{2x^2} + C}$

---

$$\boxed{\int x^n dx = \frac{x^{n+1}}{n+1}} \quad \text{For } n \neq -1.$$

---

## Page 6 — Integral Practice · [Source: 6.png](6.png)

1. $\int (2x^2 - 3x + 4) dx$
   $= \frac{2}{3}x^3 - \frac{3}{2}x^2 + 4x + C$

2. $\int (7x^5 + 3x^2 - 14x) dx$
   $= \frac{7}{6}x^6 + x^3 - 7x^2 + C$

3. $\int \left(8x^{10} + \sqrt[3]{x^2}\right) dx = \int \left(8x^{10} + x^{2/3}\right) dx$
   $= \frac{8}{11}x^{11} + \frac{3}{5}x^{5/3} + C$

4. $\int \left(6x^2 - \frac{4}{x^5}\right) dx = \int \left(6x^2 - 4x^{-5}\right) dx$
   $= 2x^3 + x^{-4} + C$

5. $\int \left(\frac{3x^2 + 7x - 2}{\sqrt{x}}\right) dx = \int \left(\frac{3x^2 + 7x - 2}{x^{1/2}}\right) dx$
   $= \int \left(3x^{3/2} + 7x^{1/2} - 2x^{-1/2}\right) dx$
   $= \frac{6}{5}x^{5/2} + \frac{14}{3}x^{3/2} - 4x^{1/2} + C$

---

## Page 7 — Table of anti-derivative rules · [Source: 7.png](7.png)

**Table of anti-derivative rules**

| $f(x)$ | $F(x) = \int f(x) dx$ |
| --- | --- |
| $x^n$, $n \neq -1$ | $\frac{1}{n+1}x^{n+1} + c$ |
| $g(x) \pm h(x)$ | $G(x) \pm H(x) + c$ |
| $Kg(x)$ | $KG(x) + c$ |
| $e^x$ | $e^x + c$ |
| $a^x$ | $a^x \cdot \frac{1}{\ln(a)} + c$ |
| $\frac{1}{x} = x^{-1}$ | $\ln|x| + c$ |
| $\cos(x)$ | $\sin(x) + c$ |
| $\sin(x)$ | $-\cos(x) + c$ |
| $\sec^2(x)$ | $\tan(x) + c$ |
| $\csc^2(x)$ | $-\cot(x) + c$ |
| $\sec(x)\tan(x)$ | $\sec(x) + c$ |
| $\csc(x)\cot(x)$ | $-\csc(x) + c$ |
| $\frac{1}{\sqrt{1-x^2}}$ | $\sin^{-1}(x) + c$ |
| $\frac{1}{1+x^2}$ | $\tan^{-1}(x) + c$ |
| $\frac{1}{|x|\sqrt{x^2-1}}$ | $\sec^{-1}(x) + c$ |

**IMPORTANT FORMULA** *(teal)*
