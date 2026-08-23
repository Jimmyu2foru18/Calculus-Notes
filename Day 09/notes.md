# Day 09

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Calculus Practice Problems · [Source: 1.png](1.png)

**CALCULUS: PRACTICE PROBLEMS on DERIVATIVES & APPLICATIONS** *(Fig. 1, top right)*

**1. DERIVATIVE OF INVERSE TRIG FUNCTIONS** *(teal header)*

Find the derivative of $f(x) = \sec^{-1}(5x^3)$.

$$u = 5x^3$$
$$u' = 15x^2$$

**FORMULA:** $f'(u(x)) = \frac{1}{|u|\sqrt{u^2-1}} \cdot u'$

Find the derivative of $f(x) = \sec^{-1}(5x^3)$, $f'(u(x))\sec^{-1}(u) = \frac{1}{|u|\sqrt{u^2-1}} \cdot u' \left|\frac{1}{5x^3\sqrt{25x^6-1}}\right|$

$$f'(x) = \frac{15x^3}{5x^3\sqrt{25x^6-1}} \quad \text{or} \quad f'(x) = \frac{3}{x\sqrt{25x^6-1}} \quad \text{(simplified)}$$

**2. HIGHER-ORDER DERIVATIVES (Polynomial)** *(teal header)*

Find $f^{(\text{IV})}(x)$ of $f(x) = 3x^6 + 5x^5 - 3x^4 + 3x^3 - 9x^2 + 10x - 4$.

$$f'(x) = 18x^5 + 5x^4 - 3x^4 + 2x^3 - 9x^2 + 10x - 4$$
$$f''(x) = 90x^4 + 100x^3 - 36x^2 + 12x - 18 - 0$$
$$f'''(x) = 360x^3 + 30x^2 - 72x + 12 + 0 - 0$$
$$f^{(\text{IV})}(x) = 1080x^2 + 60x - 72$$

**3. HIGHER-ORDER DERIVATIVES (Trig with Chain Rule)** *(purple header)*

Find $f^{(\text{IV})}(x)$ of $f(x) = \cos(2x)$.

$$u = 2x; \quad u' = 2$$

$$f'(x) = -\sin(2x) \cdot 2 = -2\sin(2x)$$
$$f''(x) = -4\cos(2x) \cdot 2 = 8\sin(2x)$$
$$f'''(x) = 8\cos(2x) \cdot 2 = 16\cos(2x)$$

**4. APPLICATIONS: TANGENT & NORMAL LINES** *(teal header)*

Find the equation of the line tangent and normal to $f(x) = 5x^2 + 3x - 1$ $y$-coordinate: $f(x) = 5(-2)^2 + 3(-2) - 1 = 13$ $x = -2$

**For:** $f(x) = 5x^2 + 3x - 1$
Points: $(-2, f(-2))$
$y$-coordinate Calculation: $y = f(-2) = 5(-2)^2 + 3(-2) - 1 = 13$
Points: $(-2, 13)$

Slope Calculation:
$$f'(x) = 10x + 3$$
**Tangent Line:** $y - 13 = -17(x + 2)$ *(teal box)*
**Normal Line:** $y - 13 = \frac{1}{17}(x + 2)$ *(teal box)*

Tangent: $y - 13 = -17(x + 2)$
Normal: $y - 13 = \frac{1}{17}(x + 2)$

Slope Calculation:
Slope of Tangent $(m_{\text{tan}}) = f'(-2) = -17$
Slope of Normal $(m_{\text{norm}}) = \frac{1}{17}$

Lines:
Tangent Line: $y - 13 = -17(x + 2)$
Normal Line: $y - 13 = \frac{1}{17}(x + 2)$

---

## Page 2 — Horizontal Tangents Implicit · [Source: 2.png](2.png)

**5. Find the location of all Horizontal Tangents to $f(x) = \frac{1}{4}x^4 + 8x - 2$** *(yellow/gold box: Horizontal Tangents)*

**Horizontal Tangents occur when $f'(x) = 0$.**

$$f'(x) = x^3 + 8 = 0$$
$$(-8) \quad (-8)$$
$$\sqrt[3]{x^3} = \sqrt[3]{-8}$$
$$x = -2$$

---

**6. Find the first derivative of each Implicitly.**

**(a)** $3x^3 - 2y + y^2 = 5x - 4$

$$\frac{d}{dx}[3x^3 - 2y + y^2] = \frac{d}{dx}[5x - 4]$$
$$6x - 2\frac{dy}{dx} + 2y\frac{dy}{dx} = 5$$
$$(-6x)$$
$$2y\frac{dy}{dx} - 2\frac{dy}{dx} = 5 - 6x$$
$$\frac{dy}{dx}(2y - 2) = 5 - 6x$$

Factor out $\frac{dy}{dx}$:
$$\frac{dy}{dx} = \frac{5 - 6x}{2y - 2}$$

**(b)** $3x^2 - 4xy = y - 7x$

$$\frac{d}{dx}[3x^2 - 4xy] = \frac{d}{dx}[y - 7x]$$
$$6x + \left(4x\frac{dy}{dx} + y^2 \cdot 4\right) = \frac{dy}{dx} - 7$$
$$6x + (4x)\left(2y\frac{dy}{dx}\right) + y^2 \cdot 4 = \frac{dy}{dx} - 7$$
$$+7$$
$$6x + 8xy\frac{dy}{dx} + 4y^2 = \frac{dy}{dx} - 7$$
$$-8xy\frac{dy}{dx} \quad -8xy\frac{dy}{dx}$$
$$6x + 4y^2 + 7 = \frac{dy}{dx}(1 - 8xy)$$

$$\frac{dy}{dx} = \frac{6x + 4y^2 + 7}{1 - 8xy}$$

---

## Page 3 — Second Derivatives Implicitly · [Source: 3.png](3.png)

**SECOND DERIVATIVES IMPLICITLY**

The derivative of $\frac{dy}{dx}$ (the second derivative of $y$ with respect to $x$) is written $\frac{d^2y}{dx^2}$. To find this, take the derivative again after solving for $\frac{dy}{dx}$, and plug in the value of $\frac{dy}{dx}$ anywhere that it appears in the answer.

**EX.** $3x^2 - 2y + y^2 = 5x - 4 \quad \Rightarrow \quad \frac{dy}{dx} = \frac{5 - 6x}{2y - 2}$

**QUOTIENT RULE** *(teal box)*

$$\frac{d^2y}{dx^2} = \frac{(2y - 2)(-6) - (5 - 6x)\left(2\frac{dy}{dx}\right)}{(2y - 2)^2}$$

$$\frac{d^2y}{dx^2} = \frac{(2y - 2)(-6) - (5 - 6x)\left(2 \cdot \frac{5 - 6x}{2y - 2}\right)}{(2y - 2)^2}$$

Can simplify but this is good.

**OPTIONAL:** Multiply top and bottom by $(2y - 2)$. *(teal box)*

$$\frac{d^2y}{dx^2} = \frac{(2y - 2)^2(-6) - 2(5 - 6x)^2}{(2y - 2)^3}$$

---

## Page 4 — Implicit Derivatives & Linear Motion · [Source: 4.png](4.png)

**CALCULUS NOTES:**
**APPLICATIONS OF DERIVATIVES**                        Page 4

### 1. IMPLICIT & SECOND DERIVATIVES (Ex. 2)

$$3x^2 + 4xy^2 = y - 7 \rightarrow \frac{dy}{dx} = \frac{6x + 4y^2}{1 - 8xy}$$

**Quotient Rule Solution for $\frac{d^2y}{dx^2}$**

So,  Quotient Rule

$$\frac{d^2y}{dx^2} = \frac{(1-8xy)\left(6+8y\frac{dy}{dx}\right) - (6x+4y^2)\left(-8y-8x\frac{dy}{dx}\right)}{(1-8xy)^2}$$

Substitute $\frac{dy}{dx}$

$$\frac{d^2y}{dx^2} = \frac{(1-8xy)\left(6+8y\left(\frac{6x+4y^2}{1-8xy}\right)\right) - \left(6x+4y^2\right)\left(-8y\left(\frac{6x+4y^2}{1-8xy}\right)-8y\right)}{(1-8xy)^2}$$

---

### 2. LINEAR MOTION PROBLEMS

If a moving particle moves along a straight line, such that its position at time '*t*' is given by a function $S(t)$, then $V(t) = S'(t)$ represents the particle's Velocity at time '*t*', and $a(t) = V'(t) = S''(t)$ represents the particle's Acceleration at time '*t*'.

**Ex.** Let $S(t) = \frac{1}{3}t^3 + t^2 - 32t$ represent the location of a particle on the x-Axis at time '*t*'.

**A)** Find the times when the particle is stopped.

→ @ Particle is stopped means $V(t)=0$

$$V(t) = S'(t) = t^2 + 4t - 32$$

$$a(t) = V'(t) = 2t + 4$$

① $V(t) = t^2 + 4t - 32$
 $(-ve$ time often ignored in contexts, but mathematically correct$)$

② $a(t) = 2t + 4$

$$a(5) = 2(5) + 4 = 10 + 4 = \boxed{14}$$

**B)** Find the acceleration at $t = 5$.

$$V(t) = S'(t) = t^2 + 4t - 32$$
$$a(t) = V'(t) = 2t + 4$$

① $a(t) = 2t + 4$
② $a(5) = 2(5) + 4 = 10 + 4 = \boxed{14}$

---

## Page 5 — Differentiability · [Source: 5.png](5.png)

**Differentiability**                                    Pg. 5

We say that a function whose derivative exists at points $x = c$ is differentiable at $x = c$.

For this to be the case, $f(x)$ must:

1. Be **continuous** at $x = c$.
2. Be **smooth** (No sharp points) at $x = c$.
3. Not have a **vertical tangent** at $x = c$.

**EX.**

[Graph description: Coordinate plane with x-axis and y-axis. Key features marked:
- $x = -5$ (hole) — open circle on left curve
- $x = -2$ (jump) — discontinuity with open and closed circles
- $x = 1$ (kink) ✓ — closed circle at origin area, sharp point
- $x = 7$ (cusp) $\checkmark$ or $\wedge$ — closed circle with cusp shape above
- $x = 5$ (vertical asymptote) — dashed vertical line with arrow pointing down
- $x = 8$ vertical tangent — closed circle with upward arrow indicating vertical tangent]

Where is the function **Not differentiable**?

- **Discontinuities:** $x = -5$ (hole)
              $x = -2$ (jump)
              $x = 5$ (vertical asymptote)
- **Sharp Points:** $x = 1$ (kink) $\checkmark$
              $x = 7$ (cusp) $\checkmark$ or $\wedge$
- **Vertical Tangent:** $x = 8$

---

## Page 6 — Sharp Points (Kinks or Cusps) · [Source: 6.png](6.png)

**Sharp Points** (kinks or cusps)                           Pg. 6

### DEFINITION OF SHARP POINTS

occur in **Piecewise functions** at points where the function changes and the $f(x)$ values are equal.

(So the function is continuous) but $f'x$ branches are **Not Equal**

### EXAMPLE 1: $f(x) = |x|$

$$f(x) = |x| = \begin{cases} -x, & x < 0 \\ x, & x \geq 0 \end{cases} \rightarrow \text{derivative}$$

$$f'(x) = \begin{cases} -1, & x < 0 \\ 1, & x > 0 \end{cases}$$

**ANALYSIS OF THE SHARP POINT**

- **Continuity at X=0:**
 - Branch 1: $-x = -(0) = 0$  Equal so continuous
 - Branch 2: $x = (0) = 0$

**$f'(x)$ at X=0:**
- at $X = 0$ branches of $f'(x)$ are **Not Equal**
- Branch 1: $-x = -1$
- Branch 2: $x = 1$

[Graph description: Coordinate plane with origin marked. Two lines forming a V-shape meeting at the origin. Left branch is line $y = -x$ for $x < 0$ (going down-left). Right branch is line $y = x$ for $x > 0$ (going up-right). Star marker at the sharp point labeled "Sharp Point (Kink/Cusp)"]

---

## Page 7 — Intermediate Value Theorem · [Source: 7.png](7.png)

**Intermediate Value Theorem (IVT)**

If $f(x)$ is a function which is **continuous** on the closed interval from $[a,b]$, then for any value of $c$ which lies between $f(a)$ and $[a,b]$, then for any value of $c$ which lies between $f(a)$ and $[a,b]$, there is at least one value of $x$ such that that $\boldsymbol{a \leq x \leq b}$ and $\boldsymbol{f(x) = c}$.

**Graph description:**
- Axes: $x$-axis and $y$-axis with origin marked $0$
- $x$-axis points labeled $a$ and $b$
- $y$-axis points labeled $f(a)$, $c$, $f(b)$
- Dashed horizontal lines from $f(a)$, $c$, $f(b)$ to curve
- Dashed vertical lines from $a$ and $b$ down to $x$-axis
- Curve labeled $f(x)$ starting below $f(a)$, rising through $f(a)$ at $x=a$, passing through $c$, and ending at $f(b)$ at $x=b$

**Ex.** Does the function $f(x) = x^3 - 3x - 2$ have at least one root between $x = 0$ and $x = 5$?

*Note:* $f(x)$ is **continuous** on $[0,5]$

So, $\cdot f(0) = (0)^3 - 3(0) - 2 = -2$
$- f(5) = (5)^3 - 3(5) - 2 = 108$

* Since '$0$' is between $f(0) = -2$ and $f(5) = 108$, by the IVT, there must be a root *(point where $f(x) = 0$)* between **'$x = 0$'** and **'$x = 5$'** on this function.

---

## Page 8 — Intermediate Value Theorem Applied Problem · [Source: 8.png](8.png)

**CALCULUS NOTES | Page 8**
**Topic:** Intermediate Value Theorem

**INTERMEDIATE VALUE THEOREM | APPLIED PROBLEM**

**Example 1:**

**Question:** Does the function $f(x) = \frac{2}{x+1}$ have a **root** (zero) on the interval $[-2, 0]$?

*IVT Requirement:* A function *must* be **continuous** on the closed interval $[a,b]$ for the Intermediate Value Theorem to guarantee a root.

**Analysis:**
1. Evaluate function at the endpoints:

$$f(-2) = \frac{2}{-2+1} = \frac{2}{-1} = -2$$

$$f(0) = \frac{2}{0+1} = \frac{2}{1} = 2$$

→ *Appears there should be a root between these... but...*

2. Examine for a root:
   - If we set $f(x) = 0$, we get $\frac{2}{x+1} = 0 \Rightarrow 2(x+1) = 0$ → **NO SOLUTION**

*This does not **contradict** the IVT, because $f(x)$ is **discontinuous** at $x = -1$ (a Vertical Asymptote)*

**Final Answer:** No, the function does not have a root.

**Graph description:**
- $y$-axis labeled, $x$-axis with tick marks at $-2$, $-1$, $0$, $1$, $2$, $3$, $4$
- Dashed vertical asymptote at $x = -1$ with arrows pointing up and down
- Point $(0,2)$ marked on curve in first quadrant
- Point $(-2, -2)$ marked on curve in third quadrant
- Label: **No Root ($f(x)=0$) found here.**
- Label at bottom: $\boldsymbol{x = -1}$ *(Discontinuity: Vertical Asymptote)*
