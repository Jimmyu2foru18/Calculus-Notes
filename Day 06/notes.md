# Day 06 — Discontinuity & Deriveratives

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Discontinuity Analysis Study Guide · [Source: 1.png](1.png)

**Discontinuity Analysis Study Guide**

Find the Location and Identify the Types of Discontinuities (1-4)
Pg 1

1. $f(x)=\dfrac{x^2+2x-3}{x^2-9}$

Factor $f(x)=\dfrac{(x-1)(x+3)}{(x-3)(x+3)}$

Removable Discontinuity at $x=-3$

Infinite discontinuity at $x=3$

**Graph description:** Coordinate plane with factor labels "$x-3=0$" (vertical asymptote at $x=3$, infinite discontinuity) and "$x+3=0$" (hole/removable discontinuity at $x=-3$). Hyperbola branches in quadrants I and III shifted/scaled, with open circle at the hole and dashed vertical asymptote.

---

2. $f(x)=\dfrac{x^2+9x+22}{x^2-10x+25}$

$f(x)=\dfrac{(x+1)(x+5)}{(x-5)(x+5)}$

$x+5=0 \Rightarrow x=-5$ — Removable discontinuity (hole) at $x=-5$

$x-5=0 \Rightarrow x=5$ — Infinite discontinuity at $x=5$

**Graph description:** Coordinate plane showing vertical asymptote at $x=5$ with arrow pointing upward indicating infinite discontinuity. Parabola-like curve with hole at $x=-5$.

---

3. $f(x)=\begin{cases} \dfrac{3x-2}{x^2-4x+4}, & x<0 \text{ — Polynomial} \\ x^2-4x+4, & 0 \le x \le 3 \text{ = Polynomial} \\ \dfrac{-7}{(x+4)(x-4)}, & x > 4 \text{ [*illegible*]} \end{cases}$

At $x=0$
Bl(1), $3(0)-2=-2$
Bl(2), $a^2-16)+4+3=-7$
Jump discontinuity at $x=0$ = No discontinuity

At $x=3$
Bl(1), $3(1)-3(3)+4+(-2)$ [*illegible*]
Bl(2), $33-16+4,\ r^3-1$ [*illegible*]
outrize domain
Infinite discontinuity at $x=4$

**Graph description:** Left graph shows curve in quadrant II for $x<0$ and curve in quadrant I for $0<x<4$, with vertical asymptote at $x=4$. Right graph highlights $x=4$ infinite discontinuity with upward arrow.

---

4. $f(x)=\dfrac{|x-1|}{x^2-1}$

Wrote a Piecewise function
discontinuity at $x=1$ = undefined
Bl(1), $\dfrac{1}{1+1}=\dfrac{1}{2}$
Bl(2), $\dfrac{-1}{1+1}=\dfrac{-1}{2}$
Jump a $x=1$ a = Blanc 2 [*illegible*]
Infinite discontinuity at $x=-1$

$f(x)=\begin{cases} \dfrac{x-1}{x^2-1}=\dfrac{1}{x+1}, & x>1 \\ \dfrac{1-x}{x^2-1}=\dfrac{-1}{x+1}, & x<1 \end{cases}$

**Graph description:** Coordinate plane with jump discontinuity at $x=1$ (open and filled circles at different heights) and vertical asymptote at $x=-1$.

---

5. Find a value "$C$" such that $f(x)$ is continuous for all "$x$"

$$f(x)=\begin{cases} 3x^3+cx-2, & x\le 1 \\ 5x-c, & x>1 \end{cases}$$

Jump discontinuity

Set two branches equal at the switching point $(x=1)$

$3(1)^3+c(2)=5(c)-C$ [*illegible; likely $3(1)^3+c(1)-2=5(1)-c$*]

$3+c+2=5c-C$ [*illegible; likely $3+c-2=5-c$*]

$\dfrac{3+c+2}{1c}=\dfrac{5-c}{+c}$ [*illegible*]

$2c+1=\dfrac{5}{?}$ [*illegible*]

$2c=\dfrac{4}{2}$ [*or $2c=4$*]

$\boxed{C=2}$

---

## Page 2 — Derivatives Intro · [Source: 2.png](2.png)

**Chapter 3: Derivatives Intro.**
Pg 2

**Graph description:** Coordinate plane showing a smooth curve $f(x)$. Point $(x, f(x))$ on curve with tangent line. Point $(x+h, f(x+h))$ on curve with secant line connecting the two points. Horizontal distance $h$ between $x$ and $x+h$ labeled, with arrow indicating $h\to 0$.

Slope of secant line $\dfrac{f(x+h)-f(x)}{(x+h)-x} = \dfrac{f(x+h)-f(x)}{h}$

Slope of the tangent line $= \lim\limits_{h\to 0} \dfrac{f(x+h)-f(x)}{h}$

We call this slope the **derivative of $f(x)$** and denote it as $f'(x)$.

Ex. Find the derivative of $f(x)=x^2-3x+2$

$$f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h} = \lim_{h\to 0}\frac{(x+h)^2-3(x+h)+2-(x^2-3x+2)}{h}$$

$$= \lim_{h\to 0}\frac{x^2+2xh+h^2-3x-3h+2-x^2+3x-2}{h}$$

$= \lim\limits_{h\to 0} \dfrac{2xh+h^2-3h}{h}$

$= \lim\limits_{h\to 0} \dfrac{(2x+h-3)}{h} : \text{Plug in } \lim\limits_{h\to 0} = 2x+0-3=2x-3$

$f'(x)=2x-3$

---

## Page 3 — Derivative of Radical Function · [Source: 3.png](3.png)

Page 3

**Ex. Find derivative of $f(x)=\sqrt{x+2}$**

**Problem 1: Using the Limit Definition**

Step 1: Write the limit definition and substitute $f(x)$ and $f(x+h)$.

$$f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}=\lim_{h\to 0}\frac{\sqrt{x+h+2}-\sqrt{x+2}}{h} \quad \text{Multiply by Conjugate}$$

$$f'(x)=\lim_{h\to 0}\frac{\sqrt{x+h+2}-\sqrt{x+2}}{h} \cdot \frac{\sqrt{x+h+2}+\sqrt{x+2}}{\sqrt{x+h+2}+\sqrt{x+2}}$$

→ **Technique: Multiply by Conjugate**

$$f'(x)=\lim_{h\to 0}\frac{(\sqrt{x+h+2}+\sqrt{x+2})(\sqrt{x+h+2}-\sqrt{x+2})}{h(\sqrt{x+h+2}+\sqrt{x+2})}$$

→ **Technique: Multiply by Conjugate**

$$f'(x)=\lim_{h\to 0}\frac{(x+h+2)-(x+2)}{h(\sqrt{x+h+2}+\sqrt{x+2})}$$

$$f'(x)=\lim_{h\to 0}\frac{h}{h(\sqrt{x+h+2}+\sqrt{x+2})}$$

Instruction: **Plug in** $\lim\limits_{h\to 0}$

$$f'(x)=\lim_{h\to 0}\frac{1}{\sqrt{x+h+2}+\sqrt{x+2}}$$

$$f'(x)=\frac{1}{\sqrt{x+2}+\sqrt{x+2}}$$

$$f'(x)=\frac{1}{2\sqrt{x+2}}$$

---

## Page 4 — Find the Derivative of 1/(3x−5) · [Source: 4.png](4.png)

*(Top right corner: Pg. 4)*

**Ex.** *(blue)* Find the derivative of $f(x) = \dfrac{1}{3x-5}$

*(Boxed in teal:)*

$$f'(x) = \lim_{h\to 0} \dfrac{f(x+h)-f(x)}{h}$$

$$f'(x) = \lim_{h\to 0} \dfrac{\dfrac{1}{3(x+h)-5} - \dfrac{1}{3x-5}}{h}$$ *(both fractions highlighted in green)* — **LCD** *(label in a teal box at right)*

**(Teal highlighted banner:)** LCD (Least Common Denominator)

$$LCD = (3x+3h-5)(3x-5)$$

**Step 1: Simplify Numerator & Combine Fractions**

*(Boxed in green:)*

$$f'(x) = \lim_{h\to 0} \dfrac{\dfrac{(3x+3h-5)(3x-5)}{3x+3h-5} - \dfrac{(3x+3h-5)(3x-5)}{3x-5}}{h(3x+3h-5)(3x-5)}$$

*(Boxed in red/pink; curved arrows lead down from the two fractions above into the numerator, annotated "Simplify":)*

$$f'(x) = \lim_{h\to 0} \dfrac{3x-5-(3x+3h-5)}{h(3x+3h-5)(3x-5)}$$

**Step 2: Cancel** *h*

$$f'(x) = \lim_{h\to 0} \dfrac{\cancel{3x}-5-3x\cancel{-3h}+5}{h(3x+3h-5)(3x-5)} = \dfrac{-3\cancel{h}}{\cancel{h}(3x+3h-5)(3x-5)}$$

$$f'(x) = \lim_{h\to 0} \dfrac{-3\cancel{h}}{(3x+3h-5)(3x-5)\cancel{h}}$$ *(small label above: "Plug in $h \to 0$")*

$$= \dfrac{-3}{(3x+3(0)-5)(3x-5)} = \dfrac{-3}{(3x-5)(3x-5)} = \dfrac{-3}{(3x-5)^2}$$

**Step 3: Evaluate Limit**

$$f'(x) = \lim_{h\to 0} \dfrac{-3}{(3x+3h-5)(3x-5)}$$ *(with "Plug in $h \to 0$" in a teal box at right)*

$$f'(x) = \dfrac{-3}{(3x+3(0)-5)(3x-5)}$$

*(Final answer boxed in olive/yellow:)*

$$f'(x) = \boxed{\dfrac{-3}{(3x-5)^2}}$$

---

## Page 5 — Finding the Derivative (Using Limits) · [Source: 5.png](5.png)

*(Large blue heading across the top:)* **FINDING THE DERIVATIVE (USING LIMITS)** *(small "Pg. 5" tab at top right)*

**Ex. FIND THE DERIVATIVE OF $f(x) = x$** *(header bar shaded blue, with a "Pg. 5" tab at its right end)*

$$f'(x) = \lim_{h\to 0} \dfrac{f(x+h)-f(x)}{h} = \lim_{h\to 0} \dfrac{\cancel{x+h}-\cancel{x}}{h} = \lim_{h\to 0} \dfrac{h}{h} = \boxed{1}$$

**Ex. FIND THE DERIVATIVE OF $f(x) = x^2$** *(header bar shaded green)*

$$f'(x) = \lim_{h\to 0} \dfrac{f(x+h)-f(x)}{h} = \dfrac{(x+h)^2 - x^2}{h} = \dfrac{\cancel{x^2}+2xh+h^2\cancel{-x^2}}{h}$$

$$= \dfrac{2xh+h^2}{h} = \dfrac{h(2x+h)}{h} = 2x+h \quad \text{then plug in } h \to 0$$

$$= 2x + 0 = 2x$$

$$f'(x) = \boxed{2x}$$

**Ex. FIND THE DERIVATIVE OF $f(x) = x^3$** *(header bar shaded orange/tan)*

$$f'(x) = \lim_{h\to 0} \dfrac{f(x+h)-f(x)}{h} = \dfrac{(x+h)^3 - x^3}{h} = \dfrac{\cancel{x^3}+3x^2h+3xh^2+h^3\cancel{-x^3}}{h}$$

$$= \dfrac{3x^2\cancel{h}+3x\cancel{h^2}+\cancel{h^3}}{\cancel{h}} = 3x^2 + 3xh + h^2 = 3x^2 + 3x(0) + 0^2$$

*(Band shaded red/pink:)*

$$f'(x) = \boxed{3x^2}$$

**Ex. FIND THE DERIVATIVE OF $f(x) = x^4$** *(bottom example; page is cut off at the bottom edge)*

$$f'(x) = \lim_{h\to 0} \dfrac{f(x+h)-f(x)}{h} = \dfrac{(x+h)^4 - x^4}{h} = \dfrac{x^4+x^3h+3x^2h^2+3xh^3+\cancel{x^4}+h^4-x^4}{h}$$

$$= \dfrac{4x^3\cancel{h}+6x^2h^2+4x\cancel{h^3}+\cancel{h^4}}{\cancel{h}} = 4x^3 + 6x^2h + 4xh^2 + h^3 = 4x^3 + 6x^2(0) + 4x(0)^2 + 0^3$$

$$f'(x) = \boxed{4x^3}$$

---

## Page 6 — Power Rule · [Source: 6.png](6.png)

*(Top right corner: Pg 6)*

**Power Rule:** *(blue text)*

**1.** *(boxed in blue)* If our $f(x) = x^n$, then $f'(x) = n \cdot x^{n-1}$

**2. Constant Multiple Rule:** *(boxed in red/pink)*
If our $f(x) = c \cdot g(x)$, then $f'(x) = c \cdot g'(x)$

> **Ex.** *(dark red)* find derivative of $f(x) = 5x^2$
> Well $f'(x) = 5 \cdot (2x) = 5x^2$
> Well $f'(x) = 5 \cdot (2x) = \boxed{10x}$ *("10x" highlighted in yellow)*

**3. Sum/Difference Rule:** *(boxed in green)*
If $f(x) = g(x) \pm h(x)$, then $f'(x) = g'(x) \pm h'(x)$

**Ex.** If $f(x) = x^3 - x^2$

$$f'(x) = 3x^2 - 2x$$

*(A long dashed diagonal line runs across the full width of the page here, separating the rules above from the worked problems below.)*

**Ex Problem 1.**

$$f(x) = 3x^2 + 5x^1 - 1x^0$$ *(margin note to the right: "(Another way of looking at this)")*

$$f'(x) = 6x^1 + 5x^0 + 0$$

$$f'(x) = \boxed{6x + 5}$$ *(highlighted in blue)*

**Ex Problem 2.**

$$f(x) = 3x^5 - \sqrt{x}$$

$$f'(x) = 3x^5 - x^{\frac{1}{2}}$$

$$f'(x) = 15x^4 - \dfrac{1}{2}x^{-\frac{1}{2}} = \boxed{15x^4 - \dfrac{1}{2}\left(\dfrac{1}{\sqrt{x}}\right)}$$ *(final answer boxed in orange/tan)*
