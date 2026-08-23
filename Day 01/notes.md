# Day 01 — Functions

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Chapter 0: Functions · [Source: 1.png](1.png)

**\* Chapter 0: Functions** *(page heading, underlined, teal in source)*

A **Function** *(teal)* is a **Relation** *(teal)* between two or more variables, usually an **Input** *(teal)* variable $x$ and an **Output** *(teal)* variable $y$, such that for each value of $x$, its exactly one value of $y$.

Ex.

**Function** *(teal)* vs. **Not Function** *(red)* vs. **Function** *(blue)* — three side-by-side tables:

| $x$ | $y$ |
|-----|-----|
| 1   | 5   |
| 2   | 4   |
| 3   | 10  |
| 5   | 7   |

Yes — One-to-One *(teal, below first table)*

| $x$ | $y$ |
|-----|-----|
| 2   | 3   |
| 4   | 5   |
| 5   | 7   |
| 4   | 8   |
| 2   | 10  |

*(red arrows point at the repeated $x$ entries — 2, 4, 4, 2; small arrows map each $x$ to its $y$)*

No: Same '$x$' *(red, below second table)*

| $x$ | $y$ |
|-----|-----|
| 1   | 2   |
| 2   | 3   |
| 3   | 6   |
| 4   | 3   |
| 5   | 2   |

Function *(blue)* — each '$x$' goes to one '$y$' — Not one-to-one *(blue, below third table)*

If a function also has exactly one '$x$' value for each '$y$' value, then we call it a **one-to-one function** *(purple)*.

On a Graph, we can use the **vertical line test** *(gold)* to determine if a relation is a function.

If you can draw a vertical line which intercepts the graph more than once, then it is **NOT A Function** *(dark red)*.

Ex. — three graphs:

• Function
• Not-one-to-one

**Graph description:** Horizontal and vertical axes, no labeled scale; smooth black wave resembling a sine curve oscillating above and below the horizontal axis with several $x$-intercepts; faint gray vertical test lines drawn across the curve.

• Not A function *(red)*

**Graph description:** Horizontal and vertical axes; black sideways parabola opening to the right with its vertex near the vertical axis; a dark red vertical line drawn through the curve intersects it at two points; faint gray vertical test lines in the background.

• One-to-one function *(orange)*

**Graph description:** Horizontal and vertical axes; straight orange line rising from lower left to upper right, passing through the origin; faint gray vertical test lines in the background.

### Important Properties of A Function *(green, underlined in source)*

**Domain:** *(green, underlined)* The set of all '$x$' values for which the function is defined.

**Range:** *(green, underlined)* The set of all '$y$' values which the function returns for some '$x$' in its Domain.

**D:** $\{1, 2, 3, 5\}$
**R:** $\{4, 5, 7,10\}$
*(green — corresponds to the first table)*

**D:** $\{2, 4, 5\}$
**R:** $\{3,5,7,8,10\}$
*(red — corresponds to the second table)*

**D:** $\{1,2,3,4,5\}$
**R:** $\{2, 3, 6\}$
*(blue — corresponds to the third table)*

**D:** $x \le 6$ or $(-\infty, 6]$
**R:** $y \ge 3$ or $[3, \infty)$
*(green, annotated on the graph below)*

**Graph description:** Horizontal and vertical axes with unlabeled tick marks; smooth green curve shaped like a stretched "W" — descending from the upper left, rising to a local peak, dipping to a second low, then rising to the upper right; the annotations $D$: $x \le 6$ or $(-\infty, 6]$ and $R$: $y \ge 3$ or $[3, \infty)$ appear at the lower right of the graph.

---

## Page 2 — INTERCEPTS, ASYMPTOTES, SYMMETRY · [Source: 2.png](2.png)

# INTERCEPTS

**x-Intercept** *(teal)*
- A point where the function touches the X-AXIS.
  - Also called a **real root** of the function where $y=0$

**y-Intercept** *(teal)*
- A point where the function crosses the $y$-AXIS, where $x=0$

# ASYMPTOTES

- Lines that the graph of a function approaches but does not cross.

**Types:** *(black)*

| EX. | EX. | EX. |
|---|---|---|
| Vertical Asymptotes *(teal)* | Horizontal Asymptotes *(brown/orange)* | Oblique (slat) Asymptotes *(purple)* |

**Graph description:**
- First box (Vertical Asymptotes): x-y axes; two teal dashed vertical lines, one just left of the y-axis and one to its right; solid black curve branches with arrows that rise/fall steeply alongside the dashed vertical lines (arrows pointing up and down), and a horizontal-branch curve with arrows extending left and right across the x-axis.
- Second box (Horizontal Asymptotes): x-y axes; a brown/orange dashed horizontal line just above the x-axis; a solid S-shaped curve with arrows at both left and right ends that crosses the dashed line in the middle, flattening toward it on the far left and far right.
- Third box (Oblique (slat) Asymptotes): x-y axes; a purple dashed diagonal (slanted) line through the origin; a solid wavy curve with arrows at both ends (lower-left and upper-right) that oscillates and follows the slanted line's direction at the ends.

**NOTE:** *(bold, black)* Can cross in the middle, *but approaches without crossing on far left and far right.*

# SYMMETRY

**Even Symmetry:** *(blue)* A function is called **even** if it has line symmetry over the $y$-axis.

- Even if: $f(x) = f(-x)$

**Graph description:**
- x-y axes with double-headed arrows; a W/U-shaped even curve (like a quartic) symmetric about the y-axis, with arrows pointing up at both ends, touching the x-axis at two symmetric points and a local maximum at the origin.

**Odd Symmetry:** *(blue)* A function is called **odd** if it has rotation of 180° around the origin algebraically.

- $f(x)$ is odd if: $f(-x) = f(x)$

**Graph description:**
- x-y axes with double-headed arrows; a cubic-like S-shaped curve passing through the origin, symmetric by 180° rotation about the origin, with arrows pointing up-right and down-left.

---

## Page 3 — Particular Types of Functions · [Source: 3.png](3.png)

*(Page label, top right, boxed in tan):* Page 3

# Particular Types of Functions

## I. Polynomials *(gold/yellow)*

- Functions of the form $f(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_2 x^2 + a_1 x + a_0$ *(highlighted in yellow)*
- where $n$ is a whole number.
- and each $a_i$ is a real coefficient.

*(Annotation with curved arrow pointing to the formula):* The standard form.

$$f(x) = 3x^5 + 2x^2 - 4x + 1$$ *(boxed in blue)*

$$f(x) = 2x^3 - \sqrt{2x} + 5$$ *(boxed in pink/red)*

*(red ✗)* **This is NOT** *(dark red)* a polynomial because the second term, $\sqrt{2x} = (2x)^{1/2}$, contains a fractional exponent (n=1/2), which is not a whole number.

**Correction:** $f(x) = 2x^3 - 2x + 5$ is a polynomial.

*(highlighted in yellow)* We call $n$ (the highest power) the **degree** of the polynomial.

## A. Constant Function *(green)*

- Polynomial of degree $n = 0$

$$f(x) = c,$$
where "$c$" is constant

**Graph description:**
- x-y axes with double-headed arrows; a solid green horizontal line at height $c$ above the x-axis, crossing the y-axis at a filled dot labeled $c$; labeled $f(x) = c$ to the right of the line.
- Caption below: Even Symmetry

**D)**: $(-\infty, \infty)$ or $\mathbb{R}$ *(green)*

**R)**: $\{c\}$ *(green)*

**y-Intercept:** $(0, c)$ *(green)*

**x-Intercept:** None, unless $c = 0$, then all points are x-intercepts. *(green)*

## B. Linear Functions *(blue)*

- Polynomial of degree $n = 1$
- $f(x) = mx + b$ with $m = \dfrac{y_2 - y_1}{x_2 - x_1}$ *(slope formula boxed in blue)*

$m =$ Slope

$b\ = y$-intercept

**Graph description:**
- x-y axes with double-headed arrows; a solid blue line with arrows at both ends rising from lower-left to upper-right; filled dot at $(0, b)$ on the y-axis labeled $b$; a general point labeled $(x, y)$ with a dotted vertical drop to another labeled $(x, y)$; filled dot on the x-axis labeled $\left(-\dfrac{b}{m}, 0\right)$.

**D:** $(-\infty, \infty)$ or $\mathbb{R}$ *(blue)*

**R:** $(-\infty, \infty)$ or $\mathbb{R}$ *(blue)*

**y-Intercept:** $(0, b)$ *(blue)*

**x-Intercept:** $\left(-\dfrac{b}{m}, 0\right)$ *(blue)*

---

## Page 4 — C. Quadratic Functions · [Source: 4.png](4.png)

# C. Quadratic Functions

*\*Polynomials of degree $n = 2$*

| General Form *(header boxed in blue)* | Vertex Form *(header boxed in green)* |
|---|---|
| $f(x) = ax^2 + bx + c$ | $f(x) = a(x - h)^2 + k$ |
| y-intercept: $(0, c)$ | y-intercepts:<br>$(0, ah^2 + k)$ |
| x-intercepts:<br>$x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ | x-intercepts:<br>$x = h \pm \sqrt{\dfrac{-k}{a}}$ |
| Axis of Symmetry: $x = \dfrac{-b}{2a}$ | Vertex: $(h, k)$<br><br>Axis of Symmetry: $x = h$ |
| Vertex: $\left(\dfrac{-b}{2a}, f\left(\dfrac{-b}{2a}\right)\right)$ | Domain:<br>$(-\infty, \infty)$ or $\mathbb{R}$<br><br>Range:<br>$[k, \infty)$ if $a > 0$<br>$(-\infty, k]$ if $a < 0$ |
| Domain: $(-\infty, \infty)$ or $\mathbb{R}$<br><br>Range: $\left(-\infty, f\left(\dfrac{-b}{2a}\right)\right]$ if $a < 0$<br>$\left[f\left(\dfrac{-b}{2a}\right), \infty\right)$ if $a > 0$ | |

**Graph description:** *(top-left panel)* Upward-opening parabola with dotted vertical line labeled "Axis of Symmetry"; vertex marked with filled dot labeled $(h, k)$; annotation "Axis of Symmetry" at top right of panel; label "$a > 0$" at right.
**Graph description:** *(top-right panel)* Downward-opening parabola with dotted vertical axis of symmetry through its vertex (filled dot at vertex); annotation "Axis of Symmetry" at top right; label "$a < 0$" at lower right.
**Graph description:** *(middle-left panel)* Upward-opening parabola crossing the x-axis twice, each crossing marked with a filled dot; caption below: "Two (2) x-intercepts".
**Graph description:** *(middle-right panel)* Upward-opening parabola touching the x-axis once at a single filled dot to the right of the y-axis; caption below: "One (1) x-intercept".
**Graph description:** *(bottom panel)* Upward-opening parabola entirely above the x-axis with no crossings; caption below (with "Zero" underlined and "(0)" crossed out): "~~(0)~~ Zero x-intercepts".

# Properties of Polynomials In General

Domain: $(-\infty, \infty)$ or $\mathbb{R}$

Range:&nbsp;&nbsp;&nbsp;&nbsp;If $n$ is odd*,* $(-\infty, \infty)$ or $\mathbb{R}$

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If $n$ is even*, there is a* **Lowest** *or* **Highest Point**.

Number of $x$-intercepts: up to $n$ $x$-intercepts.

Number of Turning Points: up to $n - 1$ turning points.

End Behavior:* Depends on whether* $n$ *is even or odd, and whether* $a$, *the leading coefficient, is positive or negative.*

---

## Page 5 — Polynomial Function End Behavior · [Source: 5.png](5.png)

# POLYNOMIAL FUNCTION END BEHAVIOR

Depends on the degree (**n**) and the leading coefficient (**a**)

| *(row/column headers in dark blue-green)* | Leading Coefficient<br>**(a)** > 0 | Leading Coefficient<br>**(a)** < 0 |
|---|---|---|
| Degree (n)<br>is EVEN | **Graph description:** W-shaped curve (upward ends, two valleys and one central hump) on a gridded coordinate plane, arrows pointing up on both ends.<br>as $x \to -\infty$, $f(x) \to +\infty$<br>as $x \to +\infty$, $f(x) \to +\infty$<br>[a is positive] *(highlighted blue)* [n is even] *(highlighted green)* | **Graph description:** ∩-shaped double-hump curve (downward ends, two humps and one central valley) on a gridded coordinate plane, arrows pointing down on both ends.<br>as $x \to -\infty$, $f(x) \to -\infty$<br>as $x \to +\infty$, $f(x) \to -\infty$<br>[a is negative] *(highlighted blue)* [n is even] *(highlighted green)* |
| Degree (n)<br>is ODD | **Graph description:** S-shaped cubic-like curve rising from lower left through the origin to upper right on a gridded coordinate plane, arrows pointing up-right and down-left.<br>as $x \to -\infty$, $f(x) \to -\infty$<br>as $x \to +\infty$, $f(x) \to +\infty$<br>[a is positive] *(highlighted blue)* [n is odd] *(highlighted green)* | **Graph description:** Reverse-S-shaped curve falling from upper left through the origin to lower right on a gridded coordinate plane, arrows pointing up-left and down-right.<br>as $x \to -\infty$, $f(x) \to +\infty$<br>as $x \to +\infty$, $f(x) \to -\infty$<br>[a is negative] *(highlighted blue)* [n is odd] *(highlighted green)* |
