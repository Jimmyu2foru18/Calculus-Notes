# Day 08 — High Order Deriveratives and Implicit Differentiation
> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Derivatives · [Source: 1.png](1.png)

# Derivatives

Find the derivative of each function

**1)** $f(x) = \dfrac{5x^2 - 7x}{3x + 9}$

> *(boxed, with annotation "Quotient Rule:")* $\Rightarrow f'(x) = \dfrac{h'(x)}{g(x)} = \dfrac{g(x)h'(x) - h(x)g'(x)}{(g(x))^2}$

- $f'(x) = \dfrac{(3x+9)(10x-7) - (5x^2 - 7x)(3)}{(3x+9)^2}$

**2)** $f(x) = \sqrt[3]{4x^3 - 2x} = (4x^3 - 2x)^{\frac{1}{3}}$ *(annotation: "Chain rule")*

So,

- $f'(x) = \dfrac{1}{3}(4x^3 - 2x)^{-\frac{2}{3}}\cdot(12x^2 - 2)$

or

- $f'(x) = \dfrac{12x^2 - 2}{3\sqrt[3]{(4x^3 - 2x)^2}}$

**3)** $f(x) = e^{5x^2 + 3x + 1}$

- $f'(x) = e^{5x^2 + 3x + 1}\cdot(10x + 3)$

**4)** $f(x) = \ln\left(4x^6 - 3x^2 + 2\right)$

- $f'(x) = \dfrac{1}{4x^6 - 3x^2 + 2}\left(24x^5 - 6x\right)$

or

- $f'(x) = \dfrac{24x^5 - 6x}{4x^6 - 3x^2 + 2}$

**5)** $f(x) = \sin(4x)$

- $f'(x) = \cos(4x)\cdot 4$
- $f'(x) = 4\cos(4x)$

**6)** $f(x) = \sec(3x + 4)$

- $f'(x) = \sec(3x + 4)\cdot\tan(3x + 4)\cdot 3$

**7)** $f(x) = (4x^2 + 5)\cos(2x)$

> *(boxed, with annotation "Product Rule:")* If $f(x) = h(x)g(x) \Rightarrow f'(x) = h(x)g'(x) + g(x)h'(x)$

- $f'(x) = (4x^2 + 5)(-\sin(2x)\cdot 2) + (\cos(2x))(8x)$

**8)** $f(x) = \left(3^{x^2+1}\right)\tan(5x + 4)$

$h(x) = 3^{x^2+1}\cdot\ln(3)(2x)$ *(margin: $g(x) = \tan(5x+4)$, $g'(x) = \sec^2(5x+4)(5)$)*

- $f'(x) = 3^{x^2+1}\cdot\sec^2(5x+4)(5) + \tan(5x + 4)\cdot 3^{x^2+1}\cdot\ln(3)(2x)$

**9)** $f(x) = \dfrac{\csc(4x)}{e^{5x^2}}$

*(bracketed margin work)* $h(x) = \csc(4x)$, $h'(x) = -\csc(4x)\cot(4x)\cdot 4$; $g(x) = e^{5x^2}$, $g'(x) = e^{5x^2}\cdot 10x$

- $f'(x) = \dfrac{e^{5x^2}(-\csc(4x)\cot(4x)\cdot 4) - \csc(4x)\left(e^{5x^2}\cdot 10x\right)}{\left(e^{5x^2}\right)^2}$

**10)** *(boxed in teal)* $f(x) = \sqrt{\ln\left(\sin\left(e^{3x}\right)\right)} = \left(\ln\left(\sin\left(e^{3x}\right)\right)\right)^{\frac{1}{2}}$

*(teal)* $f'(x) = \dfrac{1}{2}\left(\ln\left(\sin\left(e^{3x}\right)\right)\right)^{-\frac{1}{2}}\cdot\left(\dfrac{1}{\sin\left(e^{3x}\right)}\right)\cdot\cos\left(e^{3x}\right)$

*(teal)* $\cdot e^{3x}\cdot 3$

---

## Page 2 — Inverse Trig Functions Derivative Rules · [Source: 2.png](2.png)

# Inverse Trig Functions Derivative Rules *(top right, boxed: "Pg 2.")*

**1.)** *(boxed in light blue)* $f(x) = \sin^{-1}(x)$ then $f'(x) = \dfrac{1}{\sqrt{1-x^2}}$

**2.)** *(boxed in light blue)* $f(x) = \cos^{-1}(x)$ then $f'(x) = \dfrac{-1}{\sqrt{1-x^2}}$

**3.)** *(boxed in light blue)* $f(x) = \tan^{-1}(x)$ then $f'(x) = \dfrac{1}{1+x^2}$

**4.)** *(boxed in light blue)* $f(x) = \cot^{-1}(x)$ then $f'(x) = \dfrac{-1}{1+x^2}$

**5.)** *(boxed in light blue)* $f(x) = \sec^{-1}(x)$ then $f'(x) = \dfrac{1}{|x|\sqrt{x^2-1}}$

**6.)** *(boxed in light blue)* $f(x) = \csc^{-1}(x)$ then $f'(x) = \dfrac{-1}{|x|\sqrt{x^2-1}}$

---

**Ex.)** Find $f'(x)$ if $f(x) = \sin^{-1}(5x^2 + 7x)$

$$f'(x) = \frac{1}{\sqrt{1-(5x^2+7x)^2}}\cdot(10x+7) = \frac{10x+7}{\sqrt{1-(5x^2+7x)^2}}$$ *(result boxed in green)*

**Ex.)** find $f'(x)$ if $f(x) = \cot^{-1}(e^x)$

$$f'(x) = \frac{-1}{1+(e^x)^2}\cdot e^x = \frac{-e^x}{1+(e^x)^2}$$ *(result boxed in green)*

**Ex.)** Find $f'(x)$ if $f(x) = \sec^{-1}(\ln(x))$

$$f'(x) = \frac{1}{|\ln(x)|\sqrt{(\ln(x))^2-1}}\cdot\frac{1}{x} = \frac{1}{x|\ln(x)|\sqrt{(\ln(x))^2-1}}$$ *(result boxed in green)*

---

---

## Page 3 — Table of Derivatives · [Source: 3.png](3.png)

**TABLE OF DERIVATIVES**
--(With chain rule built in)

| $f(u(x))$ | Derivative: $f'(u(x))$ |
|---|---|
| $u^n$ | $nu^{n-1} \cdot u'$ |
| $e^u$ | $e^u \cdot u'$ |
| $a^u$ | $a^u \cdot \text{Ln}(a) \cdot u'$ |
| $\text{Ln}(u)$ | $\frac{1}{u} \cdot u' = \frac{u'}{u}$ |
| $\text{Log}_a(u)$ | $\frac{1}{u\,\text{Ln}(a)} \cdot u' = \frac{u'}{u\,\text{Ln}(a)}$ |

**Trig.**
| $\text{Sin}(u)$ | $\text{Cos}(u) \cdot u'$ |
| $\text{Cos}(u)$ | $-\text{Sin}(u) \cdot u'$ |
| $\text{tan}(u)$ | $\text{Sec}^2(u) \cdot u'$ |
| $\text{cot}(u)$ | $-\text{csc}^2(u) \cdot u'$ |
| $\text{Sec}(u)$ | $\text{sec}(u)\text{tan}(u) \cdot u'$ |
| $\text{csc}(u)$ | $-\text{csc}(u)\text{cot}(u) \cdot u'$ |

| $f(u(x))$ | Derivative: $f'(u(x))$ |
|---|---|
| $\sin^{-1}(u)$ | $\frac{1}{\sqrt{1-u^2}} \cdot u' = \frac{u'}{\sqrt{1-u^2}}$ |
| $\cos^{-1}(u)$ | $\frac{-u'}{\sqrt{1-u^2}}$ |
| $\tan^{-1}(u)$ | $\frac{1}{1+u^2} \cdot u' = \frac{u'}{1+u^2}$ |
| $\cot^{-1}(u)$ | $\frac{-u'}{1+u^2}$ |
| $\sec^{-1}(u)$ | $\frac{1}{|u|\sqrt{u^2-1}} \cdot u' = \frac{u'}{|u|\sqrt{u^2-1}}$ |
| $\csc^{-1}(u)$ | $\frac{-u'}{|u|\sqrt{u^2-1}}$ |

---

## Page 4 — Tangent Lines & Normal Lines · [Source: 4.png](4.png)

**Tangent Lines & Normal Lines**

- A **Tangent line** is a line that touches a curve at one point, without crossing through it.

- Remember that the **derivative** $f'(x)$ of a function, $f(x)$, tells us **the slope** of the line tangent to $f(x)$ at any given point '$x$'.

- A **Normal line** is the line perpendicular to the tangent line at a given point. The slope of the normal line is: $\displaystyle \frac{-1}{f'(x)}$

**Graph description:**
- Coordinate plane with $x$-axis and $y$-axis
- A wavy curve with two labeled arrows
- At a point on the curve, two lines intersect perpendicularly:
  - **Tangent** — line touching the curve at the point, labeled with an arrow
  - **Normal** — line perpendicular to the tangent, labeled with an arrow
- A right-angle symbol marks the perpendicular intersection

**Ex.** Find the equation of the lines tangent and Normal to

$$f(x) = 3x^3 + 4x - 5 \text{ at } x = -2$$

*use point-slope form $\quad y - y_1 = m(x - x_1)$

y-coordinate: $f(-2) = 3(-2)^3 + 4(-2) - 5 = 3(-8) - 8 - 5 = -24 - 8 - 5 = \boxed{-37}$

Point is $(-2, -37)$

Slope of Tangent: $f'(x) = 9x^2 + 4 \quad f'(-2) = 9(-2)^2 + 4 = 9(4) + 4 = 36 + 4 = \boxed{40}$

---

## Page 5 — Tangent & Normal Lines Cont. · [Source: 5.png](5.png)

Continued...

**Tangent & Normal Lines - Cont.**

**Tangent Line:** $y - (-37) = 40(x - (-2)) \quad \text{or} \quad y + 37 = 40(x + 2)$

**Normal Line:** Normal slope $= -\frac{1}{40}$; $\displaystyle y + 37 = -\frac{1}{40}(x + 2)$

---

**Example:** Find the Equation of the Tangent & Normal Line

$f(x) = 3\sin(x) \text{ at } x = \frac{\pi}{3}$

**Y-coordinate:** $\displaystyle f\!\left(\frac{\pi}{3}\right) = 3 \cdot \frac{\sqrt{3}}{2} = \frac{3\sqrt{3}}{2}$

**Slope of tangent:** $\displaystyle f'(x) = 3\cos\!\left(\frac{\pi}{3}\right) = 3 \cdot \frac{1}{2} = \frac{3}{2}$

**Tangent Line Equation**
$$\displaystyle y - \frac{3\sqrt{3}}{2} = \frac{3}{2}\!\left(x - \frac{\pi}{3}\right)$$

**Normal Line Equation**
$$\displaystyle y - \frac{3\sqrt{3}}{2} = -\frac{2}{3}\!\left(x - \frac{\pi}{3}\right)$$

---

**Horizontal Tangents**

- **Key Takeaway:** We are often interested in the locations of points on a curve where the tangent line is horizontal, because these may be turning points of the curve.

**Graph description:**
- Coordinate plane showing a smooth curve with a local maximum and a local minimum
- Horizontal tangent lines drawn at the peak (filled/open point) and at the trough
- Arrows on the tangent lines indicate they are horizontal
- Callout box: "To find these points, set $f'(x) = 0$ and solve for $x$."

---

## Page 6 — Example Horizontal Tangent Lines · [Source: 6.png](6.png)

**Example: Finding Horizontal Tangent Lines** *(teal box)*

Find the location of all Horizontal tangent lines to: $f(x) = \frac{1}{3}x^3 + 2x^2 - 12x + 1$

- **Step 1:** Find the derivative
  $$f'(x) = x^2 + 4x - 12$$
- **Step 2:** Set the derivative equal to zero to find horizontal tangents ($m = 0$)
  $$x^2 + 4x - 12 = 0$$
- **Step 3:** Factor and Solve
  $$(x + 6)(x - 2) = 0$$
  - $x + 6 = 0 \Rightarrow \mathbf{x = -6}$
  - $x - 2 = 0 \Rightarrow \mathbf{x = 2}$

**Higher Order Derivatives** *(boxed in green)*

- We call the derivative of $f'(x)$ the **second derivative** of $f(x)$, and denote $f''(x)$.
- Similarly, the derivative of $f''(x)$ is called the **third derivative**, denoted by $f'''(x)$.
- The **fourth derivative** is denoted by $f^{(\mathrm{IV})}(x)$ and so on.

---

## Page 7 — Higher-Order & Implicit Differentiation · [Source: 7.png](7.png)

**EXAMPLE 1: HIGHER-ORDER DERIVATIVES**

Find the $3^{\mathrm{rd}}$ derivative of $f(x) = 3x^5 + 4x^3 - 2x + 1$

$$f'(x) = 15x^4 + 12x^2 - 2$$

$$f''(x) = 60x^3 + 24x$$

$$f'''(x) = 180x^2 + 24$$

---

**EXAMPLE 2: PRODUCT RULE WITH HIGHER-ORDER DERIVATIVES**

Find the second derivative of $f(x) = 5x^3e^x$

\*\*KEY NOTE:\*\* **USE PRODUCT RULE**

Find the Second derivative of $f(x) = 5x^3e^x$

$$f'(x) = \underbrace{(5x^3 \cdot e^x)}_{h(x)} + \underbrace{(e^x \cdot 15x^2)}_{g(x)}$$

$$f''(x) = 5x^3e^x + e^x15x^2 + e^x \cdot 30x + 15x^2e^x$$

\*Product rule again for $f''(x)$\*

---

**IMPLICIT DIFFERENTIATION**

**Newtonian Notation:** Derivative of $f(x)$ is $f'(x)$
Derivative of $y$ is $y'$

**Leibniz Notation:** $\left(\frac{dy}{dx}\right)$ is derivative of '$y$' with respect to '$x$'

**Operator Notation:** $\frac{d}{dx}(\text{something})$ means to take derivative of ... with respect to '$x'$

**IMPLICIT DIFFERENTIATION (The "Why" and "How"):** *(boxed in green)*

- Sometimes we may not be able to isolate '$y$' in the equation/notation of a curve.
- However we can still take the derivative **\*\*IMPLICITLY\*\*** by taking its derivative of the equation in its present form and treating $y$ as a function of '$x$'. We solve for $\frac{dy}{dx}$ then.

---

## Page 8 — Implicit Differentiation Example · [Source: 8.png](8.png)

**IMPLICIT DIFFERENTIATION EXAMPLE**

**Ex.** $3x^2 + y^2 = x^3 - 7y$

**Step 1:** Differentiate both sides with respect to $x$

$$\frac{d}{dx}[3x^2 + y^2] = \frac{d}{dx}[x^3 - 7y]$$

$$6x + 2y\frac{dy}{dx} = 3x^2 - 7\frac{dy}{dx}$$

> *Remember to use the Chain Rule for terms with $y$.*

Now solve for $\frac{dy}{dx}$

**Gather $\frac{dy}{dx}$ terms**

$$6x + 8y\frac{dy}{dx} = 3x^2 - 7\frac{dy}{dx}$$

$$-6x + 7\frac{dy}{dx} = -6x + 7\frac{dy}{dx}$$

$$8y\frac{dy}{dx} + 7\frac{dy}{dx} = -6x + 3x^2$$

> *Factor out $\frac{dy}{dx}$ and divide.*

**Combine like terms (Factor out $\frac{dy}{dx}$):**

$$\frac{dy}{dx}(8y + 7) = 3x^2 - 6x$$

**Divide both sides by $(8y + 7)$:**

$$\frac{\frac{dy}{dx}(8y + 7)}{8y + 7} = \frac{3x^2 - 6x}{8y + 7}$$

**FINAL RESULT** *(boxed)*

$$\frac{dy}{dx} = \frac{3x^2 - 6x}{8y + 7}$$
