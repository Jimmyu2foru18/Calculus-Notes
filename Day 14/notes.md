# Day 14

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Curve Sketch · [Source: 1.png](1.png)

Perform a full curve sketch for,
$$f(x) = \frac{x^2-3}{2x-4}$$

**1. Find the Domain:** $2x - 4 \neq 0$, so $2x \neq 4$, $x \neq 2$

$$\text{Domain: } (-\infty, 2) \cup (2, \infty) \quad \text{from setting denominator = 0}$$

**2. Intercepts:** $x$-intercepts: $\frac{x^2-3}{2x-4} = 0 \implies x^2 - 3 = 0 \implies x^2 = 3 \implies x = \pm\sqrt{3} \implies (-\sqrt{3},0), (\sqrt{3},0)$

$y$-intercept: $f(0) = \frac{0^2-3}{2(0)-4} = \frac{-3}{-4} = \frac{3}{4} \implies \left(0, \frac{3}{4}\right) \quad \text{The points are}$

**3. Asymptotes:** Vertical Asymptote: $x = 2$ *(from setting denominator = 0)*

Horizontal Asymptote: *No* $\quad \lim_{x \to \infty} \frac{x^2-3}{2x-4} = \infty$. *(No H-Asymptote)*

Oblique Asymptote: $2x - 4\sqrt{x^2} + 0x - 3 = \frac{1}{2}x + 1 \implies y = \frac{1}{2}x + 1$

**4. Symmetry:** $f(-x) = \frac{(-x)^2 - 3}{2(-x) - 4} = \frac{x^2 - 3}{-2x - 4} = \frac{x^2 - 3}{-(2x + 4)} \implies [f(-x) \neq f(x) \text{ (So Not even)}]$ $[f(-x) \neq -f(x) \text{ (So Not odd)}]$

**5. Direction:** Derivative "Quotient rule" $\quad f'(x) = \frac{(2x-4)(2x) - (x^2-3)(2)}{(2x-4)^2} = \frac{2x^2 - 8x + 6}{(2x-4)^2}$

**Zeros:** $\frac{2x^2 - 8x + 6}{2} = \frac{2(x^2 - 4x + 3)}{2} = \frac{2(x-3)(x-1)}{(x-4)^2}$

$$x < 0 \quad 1 < x \quad 1.5 = 2 \quad x > 3 \quad x > 4$$

$f'(0) = \frac{2(0)^2 + 8(0) + 6}{(-4)^2} = \frac{+6}{16} = \boxed{+}$ $\quad f'(2) = \frac{2(0)^2 + 8(0) + 6}{(-4)^2} = \frac{+6}{16} = \boxed{+}$

$f'(2) = \frac{(0)^2 - 4(2)^2)}{(-4)^2)} = \frac{-8}{16} = \frac{1}{2}$ $\quad f'(4) = \frac{2(0)^2 + 4}{(-4+2)^2)} = \frac{3}{8} = \boxed{+}$

$\frac{3}{8} \longrightarrow +$ $\quad \frac{4}{16} \longrightarrow \boxed{-}$ $\quad \frac{2.5-24}{-16} \longrightarrow \boxed{+}$ $\quad \frac{6+32+6}{x(2-4)^2} \longrightarrow \boxed{+}$

$\quad \quad \quad \frac{4}{-16} \longrightarrow \boxed{-}$ $\quad \frac{4}{-16} \longrightarrow \boxed{-}$

$\frac{-8}{x} \longrightarrow \frac{-8}{8} = -1$ $\quad \frac{-8}{x} = -1$ $\quad \frac{-8}{x} = -1$

**Undefined at:** $(2x - 4)^2 = 0 \implies 2x - 4 = 0 \implies 2x = 4 \implies x = 2$

So: $\begin{cases} x = 3 \\ x = 1 \end{cases}$

So: Increasing on: $(-\infty, 1) \cup (3, \infty)$

Decreasing on: $(1, 2) \cup (2, 3)$

Relative max: $x = 1$

Relative min: $x = 3$

**6. Concavity:** $f''(x) = \frac{(2x-4)^2(4x-8) - 2(2x-4) \cdot 2(x^2-4x+3)}{(2x-4)^4} = \frac{8x - 16}{(2x-4)^3}$

$f''(x) = \frac{8(x-2)}{(2x-4)^3}$

Concave up on: $(-\infty, 2)$

Concave down on: $(-2, \infty)$

No Point of Inflection

**7. y-coordinates of key points:** $\begin{cases} x = 1: f(1) = \frac{1^2-3}{2(1)-4} = \frac{-2}{-2} = 1 \\ x = 3: f(3) = \frac{3^2-3}{2(3)-4} = \frac{9-3}{6-4} = \frac{6}{2} = 3 \end{cases}$

$\begin{cases} x = \sqrt{3}: f(\sqrt{3}) = \frac{3-3}{2\sqrt{3}-4} = 0 \implies (-\sqrt{3}, 0) \\ x = -\sqrt{3}: f(-\sqrt{3}) = \frac{3-3}{-2\sqrt{3}-4} = 0 \implies (\sqrt{3}, 0) \end{cases}$

**8. Sketch the Graph**

$\begin{cases} \text{Relative Max at } (1, 1) \\ \text{Relative Min at } (3, 3) \end{cases}$

---

## Page 2 — Absolute Min/Max · [Source: 2.png](2.png)

Find absolute Minimum and absolute Maximum of:
$$f(x) = \frac{x^2}{3x-6} \quad \text{on } [3, 8]$$

$$\text{Differentiation} = (3x-6) = (x-6)$$

$$f'(x) = \frac{(3x-6)(2x) - x^2(3)}{(3x-6)^2} = \frac{6x^2 - 12x - 3x^2}{(3x-6)^2} = \frac{3x^2 - 12x}{(3x-6)^2}$$

$$\frac{3x^2 - 12x}{(3x-6)^2} = 0 \implies \begin{cases} 3x^2 - 12x = 0 \\ 3x(x-4) = 0 \\ 3x = 0 \\ x = 4 \end{cases}$$

**Need to check X at 3, 8, 4**

$$f(3) = \frac{3^2}{3(3)-6} = \frac{9}{9-6} = \frac{9}{3} = \mathbf{3}$$

$$f(4) = \frac{4^2}{3(4)-6} = \frac{16}{12-6} = \frac{16}{6} = \frac{8}{3} = \mathbf{2.666\overline{6}}$$

$$f(8) = \frac{8^2}{3(8)-6} = \frac{64}{24-6} = \frac{64}{18} = \frac{32}{9} = \mathbf{3.555\overline{5}}$$

**Absolute Min at:** $(4, 2.\overline{6})$

**Absolute Max at:** $(8, 3.\overline{5})$

![Graph showing curve with min at (4, ~2.67) and max at (8, ~3.56)]()

**Graph description:**
- Axes: x-axis from 0 to 8+, y-axis from 0 to 4
- Curve starts near x=3, y≈2.5, dips to minimum at (4, 2.67), rises to endpoint at (8, 3.56)
- Points marked at (4, 2.67) and (8, 3.56)

---

## Page 3 — Derivatives Table · [Source: 3.png](3.png)

Relationship between graphs of a function and its derivatives: $f(x)$, $f'(x)$, and $f''(x)$:

| $f(x)$ | $f'(x)$ | $f''(x)$ |
|--------|---------|----------|
| ↑ Increasing | *(teal)* + Positive | |
| ↓ Decreasing | *(teal)* - Negative | |
| → Plateau | *(teal)* - Negative | |
| Min<br>Max<br>Plateau | *(boxed in green)* $0$ | |
| $\frown$ Concave up | *(teal)* increasing | *(boxed in green)* + Positive |
| $\frown$ Concave down | *(teal)* decreasing | *(teal)* - Negative |
| Possible<br>Point of<br>Inflection | Min or Max<br>or<br>Plateau | *(boxed in green)* $0$ |

---

## Page 4 — Analyzing Functions via f'(x) · [Source: 4.png](4.png)

Calculus Study Notes: Analyzing Functions via $f'(x)$ Pg. 4

**Analysis from $f'(x)$ (Visual Rules):**
Relative Extremas at $f'(x)$ x-intercepts (=0 or undefined),
Concavity changes at turning points, etc.

**1.** Tell where $f(x)$ is increasing/decreasing, has Relative Extrema, is concave up/down and has points of inflection, based on the graph of $f'(x)$.

**Concavity**
• Concave up on:
$(-\infty, -4) \cup (-2, 0) \cup (6, \infty)$

• Concave down on:
$(-4, -2) \cup (0, 6)$

• Turning Point $\rightarrow$ Potential Point of Inflection

• Points of Inflection:
- At turning points: $x = \{-4, -2, 0, 6\}$

• $f(x)$ is increasing on:
**$(-5, 2) \cup (-2, 4) \cup (8, \infty)$** *(green box)*

• $f(x)$ is decreasing on:
**$(-\infty, -5) \cup (4, 8)$** *(red box)*

**Relative Extrema**
• Relative Maximum on:
**$x = 4$** *(red)*

• Relative Minimum on:
**$x = -5, x = 8$** *(blue)*

• Plateau on: **$x = 2$** *(teal)*

based on this we can sketch $f(x)$

**Graph description:** Graph of $f(x)$ on coordinate plane with x-axis labeled -4, -2, 2, 4, 6, 8 and y-axis with upward arrow. Curve starts upper left, decreases to a relative minimum at $x=-5$, increases with a plateau at $x=2$, continues increasing to a relative maximum at $x=4$, decreases to a relative minimum at $x=8$, then increases again. Annotations: "Concavity changes" with arrow pointing to inflection points on curve, "Relative Min at $x=-5$ and $x=8$", "Relative Max at $x=4$", "Plateau at $x=2$".

**Visual Summary (from $f'(x)$ to $f(x)$):**
• $f(x)$ is increasing on:
**$(-5, 2) \cup (-2, 4) \cup (8, \infty)$** *(green box)*

• $f(x)$ is decreasing on:
**$(-\infty, -5) \cup (4, 8)$** *(red box)*

---

## Page 5 — Optimization · [Source: 5.png](5.png)

**Optimization** Pg. 5
* The Process of Using Derivatives to Find Minimum or Maximum Values of Functions.

**Steps:**
1. Draw a Diagram (if applicable)
2. Write the Objective Function ("Thing to minimize or maximize")
3. If necessary, write an equation or constraint, to eliminate extra variables in the objective function through substitution.
4. Take the derivative of the objective function.
5. Set the derivative equal to zero and solve.
6. Answer the question asked of us.

**Example:**
Find the Maximum area of a rectangle, with a perimeter of 80 cm.

[Diagram: rectangle with horizontal side labeled $x$ and vertical side labeled $y$; text "$A=L\cdot W$"]

Objective Function:
$A = L \cdot W$

rectangle, with a perimeter of 80 cm.

Maximum Area: $A = xy$
Constraint is: $P = 80$

So:
$2x + 2y = 80$
$2y = 80 - 2x$
$\frac{2y}{2} = \frac{80 - 2x}{2}$ $\rightarrow$ **$y = 40 - x$** *(green)*

$A = x(40 - x)$
$A = 40x - x^2$

Derivative:
**$A' = 2x - 40 = 0$** *(boxed in blue)*

So:
$\frac{40}{2} = \frac{2x}{2}$
**$20 = x$** *(boxed in yellow)*

The Actual max Area is:
$A = 40(20) - (20)^2 = 800 - 400 =$ **$400$** *(red/brown)*

---

## Page 6 — Cylindrical Can Optimization · [Source: 6.png](6.png)

**EX.** A cylindrical can closed on top and bottom must hold $V$ of liquid. Find height and radius of the can with the minimum amount of surface area. Pg 6

Minimum Surface Area:
**$SA = 2\pi rh + 2\pi r^2$** *(teal)*

Constraint: $V = 150$

So,
$\frac{\pi r^2 h}{\pi r^2} = \frac{150}{\pi r^2}$ $\rightarrow$ **$h = \frac{150}{\pi r^2}$** *(green)*

$SA = 2\pi r\left(\frac{150}{\pi r^2}\right) + 2\pi r^2$
$SA = \frac{300}{r} + 2\pi r^2$
$SA = 300r^{-1} + 2\pi r^2$

Derivative:
$SA' = -300r^{-2} + 4\pi r = 0$

$4\pi r = 300r^{-2}$
$4\pi r = \frac{300}{r^2}$
**$4\pi r^3 = 300$** *(boxed in yellow)*

$r^3 = \frac{300}{4\pi} = \frac{75}{\pi}$

$\sqrt[3]{r^3} = \sqrt[3]{\frac{75}{\pi}}$ $\rightarrow$ **$r = 2.88$** *(boxed in red)*

Now solve for $h$: $h = \frac{150}{\pi r^2} = \frac{150}{\pi (2.88)^2}$ $\rightarrow$ **$h = 5.76$** *(boxed in green)*
