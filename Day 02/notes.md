# Day 02 — Functions & Limits
> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Rational Functions · [Source: 1.png](1.png)

**Rational Functions** — *Pg. 1*

### Rational Functions

**Rational Functions** — of the form $f(x) = \dfrac{p(x)}{q(x)}$ where $p(x)$ and $q(x)$ are polynomials.

**Domain:** All real numbers except 'x' such that $q(x) = 0$.

**Range:** Check the y-coordinates of any holes and the locations of any Horizontal Asymptotes to see if any other points substitute as y-coordinates. If not, these value(s) are not in the range.

**y-intercept:** $\left(0, \dfrac{p(0)}{q(0)}\right)$ if $x = 0$ is in the domain.

**Ex.**

**Graph description:**
- Small hand-drawn sketch beside the Range text: $x$/$y$ axes with unnumbered tick marks.
- Two curve branches showing asymptotic behavior near a vertical line just right of the y-axis: one branch sweeps down from the upper left, the other rises very steeply along that vertical line.
- Annotations to the right of the sketch:
  - **D:** $\{x \mid x \neq -1\}$ or $(-\infty,-1)\cup(1)\cup(1,\infty)$
  - **R:** $\{y \mid y \neq 1,2\}$ or $(-\infty,1)\cup(1,2)\cup(2,\infty)$

**x-intercepts:** (Where $p(x) = 0$ and $q(x) \neq 0$)

**Holes:** occur at values of 'x' for which $p(x) = 0$ and $q(x) = 0$

- **Ex.**
  if $f(x) = \dfrac{x^2 - 4}{x^2 + 3x + 2} = \dfrac{(x-2)(x+2)}{(x+2)(x+1)}$  —  $f(x) = \dfrac{x-2}{x+1}$  **Hole at -2**

- To find y-coordinate of hole, plug in to Simplify p(x):

$$f(-2) = \frac{-2-2}{-2+1} = \frac{-4}{-1} = 4$$

**Hole: (-2, 4)**

### Vertical Asymptotes:

- Occur when $q(x) = 0$ and $p(x) \neq 0$

### Horizontal Asymptotes:

- **HAND Waving Rule:**
  1. **Bottom Heavy:** If the degree of $q(x)$ > degree of $p(x)$ then there is a **"HA" at $y = 0$**

     Ex. $f(x) = \dfrac{3x^2+4x-5}{9x^2+3x-1}$ — "HA" at $y = 0$
  2. **Balanced:** If the degree of $p(x)$ = degree of $q(x)$, then the Horizontal Asymptote is the ratio of the leading coefficients.

     Ex. $f(x) = \dfrac{3x^2+4x-2}{5x^2+2x+9}$ — "HA" at $y = \dfrac{3}{5}$
  3. **Top Heavy:** If the degree of $p(x)$ > degree of $q(x)$, then there is **No** Horizontal Asymptote.

     Ex. $f(x) = \dfrac{3x^3+4x^2+2x+1}{3x-9}$ — NO "HA"

---

## Page 2 — Example 2 · Oblique Asymptotes · III. Radical Functions · [Source: 2.png](2.png)

**1.**

**Graph description:**
- Hand-drawn $x$/$y$ axes; no numeric scale on the axes themselves.
- Dashed vertical lines at $x = -4$ and $x = 2$ (vertical asymptotes).
- Dashed horizontal line at $y = 3$.
- Open circle at $(3,8)$ labeled **Hole (3,8)**.
- Curve branches: a far-left branch approaching $y=3$ as $x \to -\infty$ and plunging downward along $x=-4$; a middle branch rising from below alongside $x=-4$, passing through the origin region, and climbing steeply alongside $x=2$; a right branch rising steeply past $x=2$ up to the hole at $(3,8)$, then leveling off toward $y=3$ as $x \to \infty$.

### Example 2

**Domain:**
D: $\{x \mid x \neq -4,\ 2,\ 3\}$ or
$(-\infty,-4)\cup(-4,2)\cup(2,3)\cup(3,\infty)$

**Range:**
R: $\mathbb{R}$ or $(-\infty,\infty)$

### Oblique Asymptotes

- Occur when the degree of P(x) is **exactly 1 more than** the degree of q(x).
- To find the equation of the asymptote, divide p(x) by q(x) with long division.
- To find the equation of the asymptote, divide p(x) by q(x) with long division. *(bullet repeated as in source)*

**Ex.)** $f(x) = \dfrac{4x^3+5x^2-7}{x^2-2x+1}$

Long division:

$$
\begin{array}{r}
4x+13\\
x^2-2x+1\ \big)\ 4x^3+5x^2+0x-7\\
-(4x^3-8x^2+4x)\\
13x^2-4x-7\\
-\ 13x^2-26x+13\\
22x-20 \quad \text{Remainder}
\end{array}
$$

Oblique Asymptote:

> $y = 4x+13$ *(green highlight in source)*

### III. Radical functions

Of the form $f(x) = \sqrt[n]{x}$
where n is a **natural number**.

**Even n**

**Graph description:**
- Curve starting at the origin and rising to the right, labeled $\sqrt{x}$; exists only right of the y-axis.

- **D:** $[0,\infty)$ or $x \geq 0$
- **R:** $[0,\infty)$ or $y \geq 0$
- **Intercepts:** $(0,0)$

**Odd n**

**Graph description:**
- S-shaped curve passing through the origin, extending into all quadrants with arrowheads, labeled $\sqrt[3]{x}$.

- **D:** $(-\infty,\infty)$ or $\mathbb{R}$
- **R:** $(-\infty,\infty)$ or $\mathbb{R}$
- **Intercepts:** $(0,0)$
- *(faint grey background text, partially cut off: "Intercepts: (od-n)")*

---

## Page 3 — Types of Functions · [Source: 3.png](3.png)

# Types of Functions

### IV. Exponential Functions

of the form: $f(x) = b^x$
Where $b > 0$ and $b \neq 1$

**$0 < b < 1$ (Exponential Decay)**

**Graph description:**
- Decreasing exponential curve on grid-paper axes, arrowheads at both ends, flattening toward the negative x-direction (horizontal asymptote along the x-axis).
- Marked points: $(0,1)$ and $(b,1)$.

**$b > 1$ (Exponential Growth)**

**Graph description:**
- Increasing exponential curve on grid-paper axes, arrowheads at both ends, flattening toward the negative x-direction (horizontal asymptote along the x-axis).
- Marked points: $(0,1)$ and $(1,b)$, with a dotted drop line from $(1,b)$ down to the tick $1$ on the x-axis.

- Domain: $(-\infty,\infty)$ or $\mathbb{R}$
- Range: $(0,\infty)$ or $y > 0$
- X-intercept: None
- Y-intercept: $(0,1)$
- Horizontal Asymptote: $y = 0$

### V. Logarithmic Functions

of the form: $f(x) = \log_b(x)$
Inverse of $g(x) = b^x$

**Graph description:**
- Increasing logarithmic curve defined only right of the y-axis, hugging a vertical asymptote at $x=0$, bending rightward with an arrowhead.
- Marked points: $(1,0)$ and $(b,1)$, with dashed guide lines connecting the tick $1$ on the y-axis and the tick $1$ on the x-axis to the marked points.

- Domain: $(0,\infty)$ or X > 0
- Range: $(-\infty,\infty)$ or $\mathbb{R}$
- X-Intercept: $(1,0)$
- Y-Intercept: None
- Vertical Asymptote: X = 0

*(page number: 3)*

---

## Page 4 — II. Trigonometric Functions · [Source: 4.png](4.png)

### II. Trigonometric Functions

#### A: Sine

**Graph description:**
- Teal sine curve labeled $y = \sin(x)$ on $x$/$y$ axes.
- y-axis ticks: $1$, $-1$; x-axis ticks: $-\frac{\pi}{2}$, $\frac{\pi}{2}$, $\pi$, $\frac{3\pi}{2}$, $2\pi$, $\frac{5\pi}{2}$, $3\pi$.
- Filled dots at several zero crossings of the curve (including $x = \pi$, $2\pi$, $3\pi$).

- Domain: $(-\infty,\infty)$ or $\mathbb{R}$
- Range: $[-1,1]$
- Period: $2\pi$
- Symmetry: Odd

#### b: Cosine

**Graph description:**
- Maroon cosine curve labeled $y = \cos(x)$ on $x$/$y$ axes.
- y-axis ticks: $1$, $-1$; x-axis ticks: $-\frac{\pi}{2}$, $\frac{\pi}{2}$, $\pi$, $\frac{3\pi}{2}$, $2\pi$, $\frac{5\pi}{2}$, $3\pi$.
- Filled dots at extrema and zero crossings: peak at $(0,1)$ and $(2\pi,1)$, trough at $(\pi,-1)$, dots at zero crossings ($-\frac{\pi}{2}$, $\frac{\pi}{2}$, $\frac{3\pi}{2}$, $\frac{5\pi}{2}$, $3\pi$), with the curve continuing to another peak left of the y-axis.

- Domain: $(-\infty,\infty)$ or $\mathbb{R}$
- Range: $[-1,1]$
- Period: $2\pi$
- Symmetry: Even

#### c: Tangent

**Graph description:**
- Green tangent branches labeled $y = \tan(x)$; each branch increasing with arrowheads at both ends (upward arrows at top, downward arrows at bottom).
- Dashed vertical asymptotes at odd multiples of $\frac{\pi}{2}$ (e.g., $-\frac{3\pi}{2}$, $-\frac{\pi}{2}$, $\frac{\pi}{2}$, $\frac{3\pi}{2}$).
- Filled dots at x-intercepts at integer multiples of $\pi$: $-2\pi$, $-\pi$, $0$, $\pi$, $2\pi$.
- x-axis ticks: $-2\pi$, $-\frac{3\pi}{2}$, $-\pi$, $-\frac{\pi}{2}$, $\frac{\pi}{2}$, $\pi$, $\frac{3\pi}{2}$, $2\pi$.

- Domain: $\left\{x \mid x \neq (2n+1)\dfrac{\pi}{2},\ n \in \mathbb{Z}\right\}$
- Range: $(-\infty,\infty)$ or $\mathbb{R}$
- Period: $\pi$
- Symmetry: Odd

---

## Page 5 — d. Cosecant Function · e. Secant Function · f. Cotangent Function · [Source: 5.png](5.png)

*(top-right corner: PAGE 5)*

### d. COSECANT FUNCTION

Boxed formula: $y = \csc(x) = \dfrac{1}{\sin(x)}$

**Graph description:**
- Purple cosecant branches drawn over a dashed grey sine guide curve.
- Blue dashed vertical asymptotes at multiples of $\pi$.
- y-axis ticks: $1$, $-1$; x-axis ticks: $-2\pi$, $\frac{3\pi}{2}$, $-\pi$, $-\frac{\pi}{2}$, $0$, $\frac{\pi}{2}$, $\pi$, $\frac{3\pi}{2}$, $2\pi$, $\frac{5\pi}{2}$, $3\pi$.
- Filled purple dots at branch vertices touching $y = 1$ and $y = -1$ (e.g., at $\frac{\pi}{2}$-type and $-\frac{\pi}{2}$-type positions), with arrowheads at the outer ends of branches.

**Properties of y=csc(x):**

| | |
|---|---|
| Domain: | $\{x \mid x \neq n\pi,\ n \in \mathbb{Z}\}$ |
| Range: | $(-\infty,-1]\cup[1,\infty)$ |
| Period: | $2\pi$ |
| Symmetry: | Odd |

### e. SECANT FUNCTION

Boxed formula: $y = \sec(x) = \dfrac{1}{\cos(x)}$

**Graph description:**
- Green secant branches; dashed green vertical asymptotes at odd multiples of $\frac{\pi}{2}$ (e.g., $-\frac{\pi}{2}$, $\frac{\pi}{2}$, $\frac{3\pi}{2}$, $\frac{5\pi}{2}$).
- Upward-opening branches touch $y = 1$ (green filled dots at $x = 0$, $2\pi$); downward-opening branches touch $y = -1$ (green filled dots at $x = -\pi$, $\pi$).
- y-axis ticks: $1$, $-1$; x-axis ticks: $-\pi$, $-\frac{\pi}{2}$, $\frac{\pi}{2}$, $\pi$, $2\pi$, $\frac{3\pi}{2}$, $\frac{5\pi}{2}$.

**Properties of y=sec(x):**

| | |
|---|---|
| Domain: | $\left\{x \mid x \neq (2n+1)\dfrac{\pi}{2},\ n \in \mathbb{Z}\right\}$ |
| Range: | $(-\infty,-1]\cup[1,\infty)$ |
| Period: | $2\pi$ |
| Symmetry: | Even |

### f. COTANGENT FUNCTION

Properties of boxed formula: $y = \cot(x) = \dfrac{1}{\tan(x)}$

**Graph description:**
- Orange cotangent branches, each decreasing from upper left to lower right, with arrowheads at both ends.
- Dashed orange vertical asymptotes at multiples of $\pi$ (e.g., $-2\pi$, $-\pi$, $\pi$, $2\pi$).
- Filled orange dots at the zero crossings between asymptotes: $-\frac{3\pi}{2}$, $-\frac{\pi}{2}$, $\frac{\pi}{2}$, $\frac{3\pi}{2}$.
- x-axis ticks: $-2\pi$, $-\frac{3\pi}{2}$, $-\pi$, $-\frac{\pi}{2}$, $\frac{\pi}{2}$, $\pi$, $\frac{3\pi}{2}$, $2\pi$.

| | |
|---|---|
| Domain: | $\{x \mid x \neq n\pi,\ n \in \mathbb{Z}\}$ |
| Range: | $(-\infty,\infty)$ or $\mathbb{R}$ |
| Period: | $\pi$ |
| Symmetry: | Odd |

---

## Page 6 — VII. Inverse Trigonometric Functions · [Source: 6.png](6.png)

*(page number: 6)*

### VII. Inverse Trigonometric Functions

#### A) $y = \sin^{-1}(x)$

**Graph description:**
- Blue increasing curve through the origin with arrowheads at both ends, rising from near $(-1,-\frac{\pi}{2})$ to near $(1,\frac{\pi}{2})$.
- y-axis ticks: $\frac{\pi}{2}$, $-\frac{\pi}{2}$; x-axis ticks: $-1$, $1$.

- D: $[-1,1]$
- R: $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$

#### B) $y = \cos^{-1}(x)$

**Graph description:**
- Dark red decreasing curve from a filled point at $(-1,\pi)$ down to a filled point at $(1,0)$.
- y-axis tick: $\pi$; x-axis ticks: $-1$, $0$, $1$.

- D: $[-1,1]$
- R: $[0,\pi]$

#### C) $y = \tan^{-1}(x)$

**Graph description:**
- Green increasing S-shaped curve through the origin.
- Dashed horizontal asymptotes at $\frac{\pi}{2}$ and $-\frac{\pi}{2}$; arrowheads at both ends of the curve.
- Marked points: $(-1,-\frac{\pi}{4})$ and $(1,\frac{\pi}{4})$; x-axis tick: $1$.

- D: $(-\infty,\infty)$ or $\mathbb{R}$
- R: $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$

#### D) $y = \csc^{-1}(x)$

**Graph description:**
- Purple branches: an upper branch descending from an arrowhead (top right area) toward an open circle at $(1,\frac{\pi}{2})$, and a lower branch ascending from an arrowhead toward an open circle at $(-1,-\frac{\pi}{2})$.
- An additional open circle on the curve at the origin region of the x-axis.
- y-axis ticks: $\frac{\pi}{2}$, $-\frac{\pi}{2}$; x-axis ticks: $-1$, $1$.

- D: $(-\infty,-1]\cup[1,\infty)$
- R: $\left[-\dfrac{\pi}{2},0\right)\cup\left(0,\pi\right]$
- $\left(0,-\dfrac{\pi}{2}\right)$ *(label printed beneath the R line)*

#### E) $y = \sec^{-1}(x)$

**Graph description:**
- Orange-brown branches: an upper-left branch ending in an arrowhead with a filled point at $(-1,\pi)$, and a right branch rising from a filled point at $(1,0)$ toward an arrowhead.
- Dashed horizontal line at $\frac{\pi}{2}$.
- y-axis ticks: $\pi$, $\frac{\pi}{2}$; x-axis ticks: $-1$, $1$.

- D: $(-\infty,-1]\cup[1,\infty)$
- R: $\left[0,\dfrac{\pi}{2}\right)\cup\left(\dfrac{\pi}{2},\pi\right]$

#### F) $y = \cot^{-1}(x)$

**Graph description:**
- Dark red-brown decreasing curve passing through the y-axis at $\frac{\pi}{2}$, with arrowheads at both ends.
- Dashed horizontal asymptote at $\pi$.
- y-axis ticks: $\pi$, $\frac{\pi}{2}$.

- D: $(-\infty,\infty) \in \mathbb{R}$
- R: $(0,\pi)$

---

## Page 7 — Chapter 1: Limits & Continuity · [Source: 7.png](7.png)

*(page number: 7)*

### Chapter 1: Limits & Continuity

- **Limits**

$$\lim_{x \to c} f(x) = L$$

- Reads as "The limit of $f(x)$ as $x$ approaches $c$ is equal to $L$".
- Meaning: We can make the value of $f(x)$ **arbitrarily close to a number**, $L$, by making the value of $x$ **close enough to the constant**, $c$. *(key phrases highlighted in blue in source)*

- **One-Sided Limits**
  - Left-hand limit: $\displaystyle\lim_{x \to c^-} f(x)$ = limit of $f(x)$ as $x$ approaches $c$ from the **left**.
  - Right-hand limit: $\displaystyle\lim_{x \to c^+} f(x)$ = limit of $f(x)$ as $x$ approaches $c$ from the **right**.

> If the limits are...
> - **...equal (Existence):** If
>   $$\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = L, \text{ then we say } \lim_{x \to c} f(x) = L.$$
> - **...not equal (Non-existence):** If
>   $$\lim_{x \to c^-} f(x) \neq \lim_{x \to c^+} f(x), \text{ then } \lim_{x \to c} f(x) \text{ is } \textbf{(DNE)}, \text{ does } \underline{\text{Not}} \text{ exist.}$$

---

## Page 8 — ex) Investigating Limits from a Graph · [Source: 8.png](8.png)

**ex)**

**Graph description:**
- Black $x$/$y$ axes with unnumbered tick marks; green curve labeled $f(x)$.
- Jump discontinuity at $x = -2$: the lower-left piece rises toward an **open circle** at about $(-2,-1)$; the upper piece begins at a **closed dot** at about $(-2,1)$ and continues rightward.
- A solid dot on the curve near $x = 1$ at height $2$.
- Small black arrows drawn along the curve pointing toward the open circle (approaching from the left/below) and toward the solid dot at $x = 1$ (from both directions), indicating the direction of approach.
- Right of $x = 1$: the curve rises to a smooth hump, then falls through the x-axis and levels off toward the lower right; left of $x = -2$: the curve descends from the lower left.

Investigate the limits of $f(x)$ as
x approaches 1 and as x approaches -2.

$\displaystyle\lim_{x \to 1^-} f(x) = 2$ and $\displaystyle\lim_{x \to 1^+} f(x) = 2.$ *(shown in blue)*

so $\displaystyle\lim_{x \to 1} f(x) = \boxed{2}$

$\displaystyle\lim_{x \to -2^-} f(x) = -1$ and $\displaystyle\lim_{x \to -2^+} f(x) = 1.$ *(shown in orange-brown)*

so $\displaystyle\lim_{x \to -2} f(x) = \boxed{\text{DNE}}$
