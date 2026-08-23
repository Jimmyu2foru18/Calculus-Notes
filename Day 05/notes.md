# Day 05 — Limits & Continuity

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Evaluating Limits by Substitution & Continuity · [Source: 1.png](1.png)

**AP CALCULUS: STUDY NOTES - FINDING LIMITS (PAGE 1)**

**1. Evaluating Limits by Substitution & Continuity.**

1. $\lim_{x \to 5} \frac{x^2+5x-2}{x^2-25}$ → Plug-in in → $\frac{5^2+5(5)-2}{5^2-25} = \frac{48}{0}$ → **Vertical Asymptote Note.**

| $x$ | $f(x)$ | $x$ | $f(x)$ |
|-----|--------|-----|--------|
| 4.9 | -16.98 | 5.1 | 49.02 |
| 4.97 | -199 | 5.01 | 44.02 |
| 4.999 | -4999 | 5.001 | 48.01 |

$\lim_{x \to 5^-} = -\infty$ $\lim_{x \to 5^+} = \infty$

$\lim_{x \to 5} \frac{x^2+5x-2}{x^2-25}$ → **DNE**

> *When top degree > bottom degree, look at signs of leading terms.*

2. $\lim_{x \to -\infty} \frac{3x^2+5x-2}{-2x+4}$ **Top Heavy** → $\lim_{x \to -\infty} \frac{3x^2}{-2x} = \frac{+}{-} = -\infty$

**3. Infinite Limit – Rational Function (Bottom Heavy)**

$\lim_{x \to \infty} \frac{5x^5-5x^3+3x}{x^7+10x^2-5}$ **Bottom Heavy** → $\frac{\frac{5x^5}{x^7}+\frac{5x^3}{x^7}+\frac{3x}{x^7}}{\frac{x^7}{x^7}+\frac{10x^2}{x^7}-\frac{5}{x^7}} = \frac{0+0+0}{1+0+0} = \frac{0}{1+0+0} = 0$

**4. Infinite Limit – Rational Function (Balanced)**

$\lim_{x \to \infty} \frac{3x^2-7x^2+10x}{2x^2+10x-9}$ **Balanced** → $\frac{3x^2-7x^2}{2x^2} = \frac{-4x^2}{2x^2} = \boxed{-2}$

**5. Infinite Limit – Rational Function (Top Heavy with negative x)**

$\lim_{x \to -\infty} \frac{2x^3+4x+1}{5x^2-10x} = \frac{2x^3}{5x^2} = \frac{-}{+} = -\infty$ *(why? $x \to -\infty$)*

> **Watch signs carefully when x approaches $-\infty$**

**6. Infinite Limit with Radical (Horizontal Asymptote)**

$\lim_{x \to \infty} \frac{5x^2+3x-\sqrt{9x^2}}{3x^2+5x+3} = \frac{5x^2-\sqrt{9x^2}}{3x^2} = \frac{-2x^2}{3x^2} = \boxed{-\frac{2}{3}}$

**7. Infinite Limit with Multiple Radicals (Watch Absolute Value!)**

$\lim_{x \to \infty} \frac{5x^3 \cdot 8x^4-9x+2}{\sqrt{2x^3} \cdot 3x^4+7x^2} = \frac{5x^3}{\sqrt{25x^6}} = \frac{5x^3}{5|x^3|} = \frac{5x^2-3|x^2|}{3x^2} = \frac{-2x^2}{3x^2} = \boxed{-\frac{2}{3}}$

> **Remember $x \to \infty$** → $-\frac{5}{5} = \boxed{-1}$

---

## Page 2 — Squeeze Theorem & sin(x)/x Limit · [Source: 2.png](2.png)

**8. Show That $\lim_{x \to 0} x^2 \cos\left(\frac{1}{x^2}\right) = 0$**

**Squeeze Theorem:** $-1 \le \cos\left(\frac{1}{x^2}\right) \le 1$  *Multiply by '$x^2$' So.*

$$-x^2 \le x^2 \cos\left(\frac{1}{x^2}\right) \le x^2$$

Now take the Limit $x \to 0$.

$$\lim_{x \to 0} -x^2 \le \lim_{x \to 0} x^2 \cos\left(\frac{1}{x^2}\right) \le \lim_{x \to 0} x^2$$

**So,** $0 \le \lim_{x \to 0} x^2 \cos\left(\frac{1}{x^2}\right) \le 0$

**Meaning:** $\lim_{x \to 0} x^2 \cos\left(\frac{1}{x^2}\right) = 0$ **by the Squeeze Theorem.**

**Ex. Find $\lim_{x \to 0} \frac{\sin(x)}{x}$ using the Squeeze Theorem**

if we try to start with... $-\frac{1}{x} \le \frac{\sin(x)}{x} \le \frac{1}{x}$ ...we take the limit as $x \to 0$.

$$\lim_{x \to 0} -\frac{1}{x} \le \lim_{x \to 0} \frac{\sin(x)}{x} \le \lim_{x \to 0} \frac{1}{x} = \textbf{Inconclusive!}$$

> **DNE** $\quad$ **DNE**

**So, How do we Solve?** **Unit Circle**

**Graph description:** Unit circle centered at origin with radius 1. Angle $x$ marked in first quadrant. Right triangle shown with vertical side labeled $\sin(x)$, horizontal side adjacent to angle, hypotenuse = 1. Tangent line from point $(1,0)$ extended shows $\tan(x)$ as length of segment from $(1,0)$ to tangent line intersection.

$A_{\text{small } \Delta} \le A_{\text{sector}} \le A_{\text{large } \Delta}$

$\frac{1}{2}(1)\sin(x) \le \frac{1}{2}x \cdot (1) \le \frac{1}{2}(1)\tan(x)$

$\frac{1}{2}\sin(x) \le \frac{1}{2}x \le \frac{1}{2}\tan(x)$

---

## Page 3 — Limit of Trigonometric Functions · [Source: 3.png](3.png)

**LIMIT OF TRIGONOMETRIC FUNCTIONS** Page 3

**SECTION 1: How To Solve: Divide Through by $\sin(x)$**

$\frac{1}{2}\sin(x) \le \frac{1}{2}x \le \frac{1}{2}\tan(x)$

**[BOX 1: DIVIDE BY 1/2*sin(x)]**

$$\frac{\frac{1}{2}\sin(x)}{\frac{1}{2}\sin(x)} \le \frac{\frac{1}{2}x}{\frac{1}{2}\sin(x)} \le \frac{\frac{1}{2}\tan(x)}{\frac{1}{2}\sin(x)} \Rightarrow 1 \le \frac{x}{\sin(x)} \le \frac{1}{\cos(x)}$$

$$\Rightarrow 1 \le \frac{\sin(x)}{x} \le \frac{1}{\cos(x)} \quad \text{(inequalities flip when taking reciprocal)}$$

**SECTION 2: Reciprocate all Parts & Take Limit**

$1 \ge \frac{\sin(x)}{x} \ge \cos(x) \Rightarrow \cos(x) \le \frac{\sin(x)}{x} \le 1$ *(inequalities flip when taking reciprocal)*

Now take limit as $x \to 0$:

$$\lim_{x \to 0} \cos(x) \le \lim_{x \to 0} \frac{\sin(x)}{x} \le \lim_{x \to 0} 1$$

$1 \le \lim_{x \to 0} \frac{\sin(x)}{x} \le 1$

**So:** $\lim_{x \to 0} \frac{\sin(x)}{x} \le 1$

$$\boxed{\lim_{x \to 0} \frac{\sin(x)}{x} = 1}$$

**THEOREM**

$$\lim_{x \to 0} \frac{\sin(x)}{x} = 1$$

$$\lim_{x \to 0} \frac{\sin(x)}{x} = 1$$

**THEOREMS & COROLLARIES SUMMARY**

**COROLLARY 1**

$$\lim_{x \to 0} \frac{\sin(ax)}{bx} = \frac{a}{b}$$

**Ex.** $\lim_{x \to 0} \frac{\sin(5x)}{3x} = \frac{5}{3}$

**COROLLARY 2**

$$\lim_{x \to 0} \frac{1-\cos(x)}{x} = 0$$

---

## Page 4 — Definition: Continuity · [Source: 4.png](4.png)

**DEFINITION: CONTINUITY** *(header, dark navy banner)* — Pg. 4

### THE THREE CONDITIONS OF CONTINUITY:

*(boxed in teal)*

$$\textcircled{1}\ f(c) \text{ is } \underline{\textbf{defined}} \text{ at } x = c.$$

$$\textcircled{2}\ \lim_{x \to c} f(x)\ \underline{\textbf{exists}}.$$

$$\textcircled{3}\ \lim_{x \to c} f(x) = f(c).$$

We say, **THE FUNCTION $f(x)$ IS CONTINUOUS AT POINT** $x = c$ only if all three conditions are met.

*(boxed in pink/red)* If **ANY** of these conditions do not hold, then **THE FUNCTION $f(x)$ IS DISCONTINUOUS AT $x = c$.**
(Using tal !her conditionss preserved)

### TYPES OF DISCONTINUITIES *(teal header)*

**1.) REMOVABLE DISCONTINUITY (HOLE)** *(teal box)*

Occurs when a function has a **single point undefined**, but the limits from both sides are equal.

**Graph description:**
- $x$- and $y$-axes with double-headed arrows.
- A straight line with arrows on both ends passing through the origin at a $45°$ slope.
- An **open circle** at $(2, 2)$ on the line, annotated: **HOLE** at (2,2).

**2.) NON-REMOVABLE DISCONTINUITY (e.g., JUMP)** *(purple box)*

Occurs when the limit of the function does not exist at a point because of a **step** or **jump** in the graph.

**Graph description:**
- $x$- and $y$-axes with double-headed arrows.
- Upper branch: an **open circle** with a dashed **purple arrow** pointing up/up-right from it.
- Just below/right of the open circle, a **filled dot** ending a solid line segment rising from the lower left.
- Lower branch: a line through the origin with an **open circle** at its upper end, arrows on both ends.

---

## Page 5 — Infinite Discontinuities (Vertical Asymptotes) · [Source: 5.png](5.png)

Ps. 5 *(top right)*

### 2.) Infinite Discontinuities (Vertical Asymptotes)

**Graph description:**
- Square grid; $y$-axis and $x$-axis with arrows.
- A dashed vertical line at $x = 1$ with arrows at both ends (vertical asymptote).
- $f(x)$ left branch: arrow at far left, curve rising through the origin region, then bending sharply downward along the asymptote to an arrow at the bottom.
- $f(x)$ right branch: arrow at top near the asymptote, curve descending to the right and leveling off toward the $x$-axis with an arrow at far right; labeled $f(x)$.

- * $f(x)$ has a vertical asymptote at $x = 1$
- * $f(1)$ is **undefined**
- * $\lim\limits_{x \to 1} f(x)$ **DNE** (in some cases maybe $\pm\infty$)

*(boxed in blue)* Infinite discontinuities can occur where conditions **1** and **2** are both **Not** Met.

### 3.) Jump Discontinuity

**Graph description:**
- Square grid; $y$-axis and $x$-axis with arrows.
- Left branch: S-shaped curve from an arrow at the lower left, rising and flattening, ending in a **filled dot** at approximately $(0, 2)$ at the top of the $y$-axis.
- Right branch: an **open circle** at approximately $(0, -2)$, curve rising to an arrow at the upper right.
- Labeled $f(x)$ with a small arrow pointing to the curve.

- * $f(x)$ has a jump at $x = 0$
- * $f(0) = 2$
- * but $\lim\limits_{x \to 0} f(x) = $ DNE
  - because $\lim\limits_{x \to 0^-} f(x) = 2$ and $\lim\limits_{x \to 0^+} f(x) = -2$

*(boxed in green)* Occurs at x-values where condition **2** is violated and condition **1** may **not** be met.

### 4.) Point-jump discontinuity

**Graph description:**
- $x$- and $y$-axes with tick marks on the $x$-axis; tick labeled **2**.
- Curve: an arc from an arrow at the left rising to a peak, then descending.
- An **open circle** on the curve at approximately $(2, 2)$; a **filled dot** directly below it at approximately $(2, 1)$.
- Curve continues down to the right ending in an arrow; labeled $f(x)$ below the $x$-axis.

- * $f(2) = 1$
- * $\lim\limits_{x \to 2} f(x) = 2$
- * $f(2) \neq \lim\limits_{x \to 2} f(x)$

*(boxed in yellow)* Conditions **1** and **2** are met but condition **3** is **Not**.

---

## Page 6 — Theorem on Discontinuities & Example · [Source: 6.png](6.png)

**Calc. Notes | Pg 6.**

## Theorem

For any **polynomial, rational, radical, exponential, logarithmic, or trigonometric** function, the function will be **discontinuous only at points where it is undefined**.

> **Note:** JUMP and point-jump discontinuities only occur in piece-wise functions.

## Example

Find and classify all discontinuities of $f(x)$

$$f(x) = \frac{x^2 + 4x - 45}{x^2 - 25}$$

First find where $f(x)$ is undefined

$$f(x) = \frac{(x + 9)\cancel{(x - 5)}}{(x + 5)\cancel{(x - 5)}} = \frac{x + 9}{x + 5}$$

undefined where:

**Removable Discontinuity** *(green callout box)*
**\*\* $(x - 5)$ \*\***

$$x - 5 = 0$$
$$x = 5$$

**Infinite Discontinuity** *(orange callout box)*
**\*\* $(x + 5)$ \*\***

$$x + 5 = 0$$
$$x = -5$$

**Graph description:**
- Axes: standard $x$/$y$ axes with tick marks at each integer.
- A vertical dashed orange asymptote at $x = -5$ (left of the $y$-axis).
- Left branch: a curve in the third quadrant approaching $-\infty$ as $x \to -5^-$ and approaching the asymptote going down; it extends leftward along/near the $x$-axis.
- Right branch: a curve coming down from $+\infty$ near the asymptote $x = -5$, decreasing and flattening out toward the right.
- An open circle (unfilled point) on the right branch at approximately $(5, 2)$, marking the removable discontinuity at $x = 5$.

---

## Page 7 — Piecewise Function Discontinuities Example · [Source: 7.png](7.png)

**Pg 7** *(pink, top right)*

**Ex:** Find and classify all discontinuities of the piecewise function:

$$f(x) = \begin{cases} 2x - 3, & x \leq -1 \\ x^2 + 3x - 3, & -1 < x \leq 2 \\ \dfrac{x + 4}{x - 1}, & x > 2 \end{cases}$$

**1. First check for discontinuities within each branch** *(highlighted heading)*

- **First and second branches are polynomials:** These are **defined** for **all real numbers**, so **never discontinuous**.
- **For third branch:** $\frac{x+4}{x-1}$ undefined at **x=1** b/c would make the denominator zero.
- Since **x=1** is **outside the domain** for each branch of this function in **f(x)** (x>2) we have <u>**No discontinuities**</u> within our branches.

**2. Next check for jumps by plugging in values of 'x' where the branch switches to both branches** *(highlighted heading)*

**- at x=−1:**
- Branch 1: $2(-1) - 3 = -2 - 3 = \mathbf{-5}$
- Branch 2: $(-1)^2 + 3(-1) - 3 = 1 - 3 - 3 = \mathbf{-5}$

**- at x=2:**
- Branch 2: $(2)^2 + 3(2) - 3 = 4 + 6 - 3 = \mathbf{7}$
- Branch 3: $\frac{(2) + 4}{(2) - 1} = \frac{6}{1} = \mathbf{6}$

> \* **Since values are different there is a jump at x = 2.**

**Graph description:** *(labeled "[No jumps]")*
- Axes: grid with $x$-axis from about $-6$ to $6$ and $y$-axis from about $-8$ to $7$.
- Branch 1 (blue line): the line $y = 2x - 3$ for $x \leq -1$, rising from the lower left, ending at a filled point at $(-1, -5)$.
- Branch 2 (red/purple parabola): $y = x^2 + 3x - 3$ for $-1 < x \leq 2$, starting just right of $x = -1$ near $(-1, -5)$ (open there) and rising to a filled point at $(2, 7)$.
- Branch 3 (blue curve): $y = \frac{x+4}{x-1}$ for $x > 2$, starting at an open circle at $(2, 6)$, decreasing and flattening toward a horizontal asymptote at $y = 1$ (dashed horizontal line at $y = 1$) as $x \to \infty$.
- Arrows on curve ends indicate continuation; a vertical dashed asymptote at $x = 1$ is implied outside the domain (not part of the graphed branches).
