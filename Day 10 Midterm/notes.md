# Day 10 — Midterm
> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Limits, Continuity & Derivatives · [Source: mid1.png](mid1.png)

**Calculus I Midterm Review Sheet**

### LIMITS

1. Direct Substitution: Substitute $x = a$. If answer exists, stop.
2. If $0/0$ Appears: Factor, simplify, then substitute.

$$\text{Example: } \lim_{x \to 2} \frac{x^2 - 4}{x - 2} = \lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = \lim_{x \to 2} (x+2) = 4$$

3. Rationalize radicals using conjugates.
4. Infinite Limits: denominator $\to 0$ while numerator $\neq 0$.
5. Limits at Infinity:
   - Same degree $\to$ ratio of leading coefficients
   - Top degree larger $\to \pm\infty$
   - Bottom degree larger $\to 0$
   - TI: limit(expression, x, value)

**(Squeeze Theorem Example box — orange)**

$$\lim_{x \to 0} \sin\left(\frac{1}{x}\right)$$

$$-1 \leq \sin\left(\frac{1}{x}\right) \leq 1$$

$$-x \leq \sin\left(\frac{1}{x}\right) \leq x$$

$$-x \leq \sin\left(\frac{1}{x}\right) \leq x$$

$$\lim_{x \to 0} -x = 0 \text{ and } \lim_{x \to 0} x = 0$$

So, $\lim_{x \to 0} \sin\left(\frac{1}{x}\right) = 0$

### CONTINUITY

1. Direct Substitution: Substitute $x=a$. If answer exists, stop.
2. If $0/0$ Appears: Factor, simplify, then substitute.

$$\text{Example: } \lim_{x \to -2} \frac{x^2-4}{x-2} = \frac{(x-2)(x+2)}{x-2} = x+2 = -4$$

3. Rationalize radicals using conjugates.
4. Infinite Limits: denominator $= 0$ while numerator $\neq 0$.
5. Limits at Infinity:
   - Same degree $\to$ ratio of leading coefficients
   - Top degree larger $\to \pm\infty$
   - Bottom degree larger $\to 0$
   - TI: limit(expression, x, value)

**Continuity at $x=a$:**
1. $f(a)$ exists
2. $\lim_{x \to a} f(x)$ exists
3. $\lim_{x \to a} f(x) = f(a)$

**Piecewise Continuity:**
Find left limit, right limit, set equal, solve for $c$.

**Intermediate Value Theorem:**
If $f$ is continuous on $[a,b]$ and $f(a)$, $f(b)$ have opposite signs, a root exists.

### ASYMPTOTES

- **Vertical:** denominator $= 0$
- **Horizontal:**
  - (degree$>$top) $<$ (degree$>$bottom): $y=0$
  - same degree: ratio of leading coefficients
  - (degree$>$top) $>$ (degree$>$bottom): none

**(DERIVATIVES box — red)**

**Definition:**
$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

**Derivatives Rule:**
- Power: $\frac{d}{dx}[x^n] = nx^{n-1}$
- $\frac{d}{dx}[cf] = cf'$
- $\frac{d}{dx}[cf] = cf'$
- $\frac{d}{dx}[f \pm g] = f' \pm g'$
- $\frac{d}{dx}[f \pm g] = cf'$
- Product: $(fg)' = fg' + gf'$
- Chain: $f(g(x))' = g'$
- Product: $(fg)' = fg' + gf'$
- Quotient: $\left(\frac{f}{g}\right)' = \frac{fg' - gf'}{g^2}$
- Chain: $f(g(x))' = g'(x) \cdot f'(g(x))$

**(Corner box — orange)**

- Left derivative $\neq$ Right derivative
- If not continuous $\to$ not differentiable.

**(Example box — orange)**

- $f(x) = |x|$
- Not differentiable at $x=0$ (corner)

**(IVT note — gray)**

IVT – if it's not violated but undefined IVT does not apply

---

## Page 2 — Tangent Lines, Motion & Implicit Diff · [Source: mid2.png](mid2.png)

### TANGENT & NORMAL LINES

1. Find derivative.
2. Plug in x-value for slope.
3. TI: Slope at point: (d(exprpr), x|x=value).

**Tangent:** $y - y_1 = m(x - x_1)$

**Normal:** $m_{\text{normal}} = -1/m_{\text{tangent}}$

### MOTION

- Position: $s(t)$
- Velocity: $v(t) = s'(t)$
- Acceleration: $a(t) = s''(t)$

### DERIVATIVES FROM TABLES

- $(fg)' = f'g'$
- $\left(\frac{f}{g}\right)' = \frac{f'g - g'f}{g^2}$
- $\left(\frac{f}{g}\right)' = \frac{fg' - g f'}{g^2}$

### IMPLICIT DIFFERENTIATION

1. Differentiate both sides.
2. Put all $y'$ terms on one side.
3. Factor out $y'$.
4. Solve for $y'$.

**Example:** $x^2 + y^2 = 25$

$$2x + 2yy' = 0$$

$$y' = -\frac{x}{y}$$

- TI: deSolve($x^2+y^2=25$, $y$)

### HIGHER DERIVATIVES

- $f'$ = first
- $f''$ = second
- $f'''$ = third
- TI: d(expression, x, 3)

**Worked Example:**
- $f(x) = x^2 - 3x - 1$, $x = 2$
- $f'(x) = 2x + 3$
- $m_{\text{tan}} = f'(2) = 7$
- Point $= (2, 9)$
- $y - 9 = 7(x - 2)$
- $m_{\text{normal}} = -1/7$
- $m_{\text{normal}} = -1/m_{\text{tangent}}$
- $y - y_1 = m_{\text{normal}}(x - x_1)$
- $m_{\text{normal}} = -1/7$
- $y - 9 = -\frac{1}{7}(x - 2)$
- TI: d($x^2 - 3x - 1$)$x = x|2$

**(Blue box)**

**Given:** $X^2 - 3xy + y^2 = 3$

**a)** Find derivative $(dy/dx)$

Differentiate both sides:
$$2x - 3y' + 2xy' + y^2 = 3y'$$

$$\frac{dy}{dx} = \frac{2x - 3y}{3x - 2y}$$

**b)** Find derivative $(dy/dx)''$

Differentiate again:
$$-2x - 6y'y' + 6xy'y' + y^2 = 3y'$$

$$\frac{dy}{dx}'' = \frac{-2x - 6y'(y')^2 + y^3}{(3x - 2y)^2}$$

**(Yellow box)**

**Given:** $X^2 - 3xy + y^2 = 3$

**Definition of derivative:**
$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

**Step 1: Substitute**
$$f(x+h) = (x+h)^2 + 1$$
$$f'(x) = \lim_{h \to 0} \frac{(x+h)^2 + 1 - (x^2 + 1)}{h}$$

**Step 2: Combine fractions**
$$= \lim_{h \to 0} \frac{x^2 + 2xh + h^2 + 1 - x^2 - 1}{h}$$
$$= \lim_{h \to 0} \frac{2xh + h^2}{h}$$

**Step 3: Simplify numerator**
$$= \lim_{h \to 0} \frac{(2xh + h^2)}{h}$$
$$= \lim_{h \to 0} [2x + h]$$

**Step 4: Cancel h**
$$= \lim_{h \to 0} [2x + h]$$

**Step 5: Take limit**
$$f'(x) = \frac{2}{(x + 1)^2}$$
