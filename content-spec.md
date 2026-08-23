# Calculus Textbook Website — Content Specification

## Overview

This document specifies the complete content for a calculus textbook website covering single-variable calculus across **5 chapters** and **35 sections**. Each section includes structured content designed for MathJax rendering with LaTeX and interactive TikZ/pgfplots diagrams.

**Conventions:**
- All mathematical notation uses LaTeX syntax (`$...$` for inline, `$$...$$` or `\[...\]` for display math).
- TikZ/pgfplots code blocks are enclosed in `\begin{tikzpicture}...\end{tikzpicture}` or `\begin{tikzpicture}...\end{tikzpicture}` with `\begin{axis}...\end{axis}` for pgfplots.
- Each section is self-contained but cross-references prior sections where appropriate.

---

## Chapter 1: LIMITS

### Section 2.1: The Limit of a Function

**Learning Objective:** Students will be able to evaluate limits numerically, graphically, and by direct substitution, and understand the intuitive concept of a limit.

**Key Definitions / Theorems:**
1. **Limit (Intuitive Definition):** We write $\lim_{x \to a} f(x) = L$ if $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently close to $a$ (but $x \neq a$).
2. **Left-hand Limit:** $\lim_{x \to a^-} f(x) = L$ means $f(x) \to L$ as $x$ approaches $a$ from the left.
3. **Right-hand Limit:** $\lim_{x \to a^+} f(x) = L$ means $f(x) \to L$ as $x$ approaches $a$ from the right.
4. **Theorem (Existence of Limit):** $\lim_{x \to a} f(x) = L$ if and only if $\lim_{x \to a^-} f(x) = L = \lim_{x \to a^+} f(x)$.
5. **Limit at Infinity:** $\lim_{x \to \infty} f(x) = L$ means $f(x)$ approaches $L$ as $x$ increases without bound.

**Worked Examples:**
1. **Direct Substitution:** Evaluate $\lim_{x \to 3} (2x^2 - 5x + 1)$. Solution: Substitute $x = 3$ to get $2(9) - 15 + 1 = 4$.
2. **Left and Right Limits:** For $f(x) = \frac{|x|}{x}$, evaluate $\lim_{x \to 0^-} f(x)$ and $\lim_{x \to 0^+} f(x)$. Solution: Left limit is $-1$, right limit is $1$, so the two-sided limit does not exist.
3. **Limit at Infinity:** Evaluate $\lim_{x \to \infty} \frac{3x^2 - 2x + 1}{x^2 + 5}$. Solution: Divide numerator and denominator by $x^2$ to get $\lim_{x \to \infty} \frac{3 - 2/x + 1/x^2}{1 + 5/x^2} = \frac{3}{1} = 3$.

**TikZ Diagram:**
- **Idea:** Graph of a function with a hole at $x = a$ (open circle) showing that the limit exists even though the function is undefined at $a$.
- **Implementation:** Use `\draw` to plot $f(x) = \frac{x^2 - 1}{x - 1}$ with a hole at $(1, 2)$. Include dashed vertical and horizontal lines to the limit value.

**Practice Problems:**
1. Evaluate $\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$.
2. Use the graph of $f(x)$ to determine $\lim_{x \to 1^-} f(x)$ and $\lim_{x \to 1^+} f(x)$ if the left limit is 3 and right limit is 5.
3. Determine if $\lim_{x \to \infty} \frac{5x^3 + 2x}{2x^3 - x^2 + 1}$ exists.

**Study Tips:**
- Always check left and right limits separately when a piecewise function or absolute value is involved.
- Remember: the limit concerns the behavior *near* $a$, not *at* $a$.

---

### Section 2.2: Calculating Limits Using the Limit Laws

**Learning Objective:** Students will apply limit laws (sum, difference, product, quotient, power, root) to evaluate limits algebraically.

**Key Definitions / Theorems:**
1. **Sum Law:** $\lim_{x \to a} [f(x) + g(x)] = \lim_{x \to a} f(x) + \lim_{x \to a} g(x)$.
2. **Difference Law:** $\lim_{x \to a} [f(x) - g(x)] = \lim_{x \to a} f(x) - \lim_{x \to a} g(x)$.
3. **Constant Multiple Law:** $\lim_{x \to a} [c \cdot f(x)] = c \cdot \lim_{x \to a} f(x)$.
4. **Product Law:** $\lim_{x \to a} [f(x) \cdot g(x)] = \lim_{x \to a} f(x) \cdot \lim_{x \to a} g(x)$.
5. **Quotient Law:** $\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{\lim_{x \to a} f(x)}{\lim_{x \to a} g(x)}$ provided $\lim_{x \to a} g(x) \neq 0$.

**Worked Examples:**
1. Evaluate $\lim_{x \to 2} (3x^2 - 4x + 5)$ using limit laws. Solution: Apply sum, constant multiple, and power laws to get $3(4) - 8 + 5 = 9$.
2. Evaluate $\lim_{x \to 1} \frac{x^2 + 2x - 3}{x - 1}$. Solution: Factor numerator: $\lim_{x \to 1} \frac{(x+3)(x-1)}{x-1} = \lim_{x \to 1} (x+3) = 4$.
3. Evaluate $\lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x}$. Solution: Multiply by conjugate to get $\lim_{x \to 0} \frac{1}{\sqrt{x+4}+2} = \frac{1}{4}$.

**TikZ Diagram:**
- **Idea:** Visual demonstration of the Sum Law: two functions approaching their limits, and their sum approaching the sum of limits.
- **Implementation:** Plot $f(x) = x^2$ (approaching 1 as $x \to 1$) and $g(x) = \sin(x)$ (approaching $\sin(1)$) near $x = 1$, plus $f(x) + g(x)$ approaching $1 + \sin(1)$. Use different colors and a legend.

**Practice Problems:**
1. Use limit laws to evaluate $\lim_{x \to -1} (2x^3 + 3x^2 - x)$.
2. Find $\lim_{x \to 3} \frac{x^2 - 9}{x - 3}$ using algebraic simplification.
3. Compute $\lim_{x \to 2} \sqrt{3x + 1}$.

**Study Tips:**
- Always check if direct substitution works before applying more complex techniques.
- For rational functions, factor and cancel common terms when the denominator approaches zero.

---

### Section 2.3: The Precise Definition of a Limit

**Learning Objective:** Students will understand and apply the epsilon-delta ($\varepsilon$-$\delta$) definition of a limit to prove limit statements.

**Key Definitions / Theorems:**
1. **Epsilon-Delta Definition:** $\lim_{x \to a} f(x) = L$ means: for every $\varepsilon > 0$, there exists a $\delta > 0$ such that if $0 < |x - a| < \delta$, then $|f(x) - L| < \varepsilon$.
2. **Triangle Inequality:** $|a + b| \leq |a| + |b|$.
3. **Theorem (Uniqueness of Limits):** If $\lim_{x \to a} f(x) = L$ and $\lim_{x \to a} f(x) = M$, then $L = M$.
4. **Theorem (Limit of Constant Function):** $\lim_{x \to a} c = c$.
5. **Theorem (Identity Law):** $\lim_{x \to a} x = a$.

**Worked Examples:**
1. Prove $\lim_{x \to 2} (3x - 5) = 1$ using the $\varepsilon$-$\delta$ definition. Solution: Given $\varepsilon > 0$, choose $\delta = \varepsilon/3$. Then if $0 < |x - 2| < \delta$, we have $|3x - 5 - 1| = 3|x - 2| < 3\delta = \varepsilon$.
2. Prove $\lim_{x \to 3} x^2 = 9$. Solution: Given $\varepsilon > 0$, note $|x^2 - 9| = |x-3||x+3|$. If $|x-3| < 1$, then $2 < x < 4$, so $|x+3| < 7$. Choose $\delta = \min(1, \varepsilon/7)$.
3. Show that $\lim_{x \to 0} \sin(x) = 0$. Solution: For $\varepsilon > 0$, use $|\sin(x)| \leq |x|$, so choose $\delta = \varepsilon$.

**TikZ Diagram:**
- **Idea:** Epsilon-delta visualization showing the vertical strip $0 < |x-a| < \delta$ and horizontal strip $|f(x) - L| < \varepsilon$ on the graph of $f(x)$.
- **Implementation:** Draw $f(x) = x^2$ near $a = 2$, with a vertical band around $x = 2$ of width $2\delta$ and a horizontal band around $L = 4$ of height $2\varepsilon$. Shade the intersection region.

**Practice Problems:**
1. Prove $\lim_{x \to 1} (2x + 3) = 5$ using the $\varepsilon$-$\delta$ definition.
2. Find a suitable $\delta$ for $\varepsilon = 0.1$ to prove $\lim_{x \to 2} (x^2 - 1) = 3$.
3. Use the definition to show $\lim_{x \to a} c = c$ for any constant $c$.

**Study Tips:**
- Work backwards: assume $|f(x) - L| < \varepsilon$ and solve for $|x - a|$ to determine $\delta$.
- The choice of $\delta$ often depends on both $\varepsilon$ and the function's behavior near $a$.

---

### Section 2.4: Continuity

**Learning Objective:** Students will define continuity, identify continuous functions, and apply continuity properties including the Intermediate Value Theorem.

**Key Definitions / Theorems:**
1. **Continuity at a Point:** $f$ is continuous at $a$ if $\lim_{x \to a} f(x) = f(a)$. Equivalently, $f$ is continuous at $a$ if (i) $f(a)$ is defined, (ii) $\lim_{x \to a} f(x)$ exists, and (iii) the limit equals $f(a)$.
2. **Continuity on an Interval:** $f$ is continuous on $I$ if it is continuous at every point in $I$.
3. **Theorem (Continuity of Polynomials and Rational Functions):** Every polynomial is continuous on $\mathbb{R}$; a rational function is continuous wherever its denominator is nonzero.
4. **Intermediate Value Theorem:** If $f$ is continuous on $[a, b]$ and $N$ is any number between $f(a)$ and $f(b)$, then there exists $c \in (a, b)$ such that $f(c) = N$.
5. **Theorem (Composition of Continuous Functions):** If $g$ is continuous at $a$ and $f$ is continuous at $g(a)$, then $f \circ g$ is continuous at $a$.

**Worked Examples:**
1. Determine where $f(x) = \frac{x^2 - 4}{x - 2}$ is continuous. Solution: Factor to $f(x) = x + 2$ for $x \neq 2$, so continuous everywhere except $x = 2$ (removable discontinuity).
2. Use the Intermediate Value Theorem to show $f(x) = x^3 - x - 1$ has a root in $(1, 2)$. Solution: $f(1) = -1$, $f(2) = 5$, and $f$ is continuous, so by IVT there is $c \in (1, 2)$ with $f(c) = 0$.
3. Determine continuity of $f(x) = \begin{cases} x^2 & x \leq 1 \\ 2x - 1 & x > 1 \end{cases}$ at $x = 1$. Solution: $\lim_{x \to 1} f(x) = 1$ and $f(1) = 1$, so continuous.

**TikZ Diagram:**
- **Idea:** Graph of a continuous function on $[a, b]$ with a horizontal line at $y = N$ crossing the curve, illustrating the Intermediate Value Theorem.
- **Implementation:** Plot $f(x) = x^3 - x - 1$ from $x = 1$ to $x = 2$. Draw horizontal line at $y = 0$. Mark $f(1) = -1$ and $f(2) = 5$. Add annotation "IVT guarantees root here."

**Practice Problems:**
1. Determine the points of discontinuity of $f(x) = \frac{1}{x-3}$ and classify each.
2. Show that $f(x) = \cos(x)$ has a root in $(0, \pi/2)$ using the IVT.
3. Find $\lim_{x \to 0} f(x)$ where $f(x) = \begin{cases} \sin(x)/x & x \neq 0 \\ 1 & x = 0 \end{cases}$ and determine continuity at 0.

**Study Tips:**
- A function can have a limit at a point without being continuous there (e.g., hole in the graph).
- The IVT is useful for proving existence of roots but does not give the root's exact value.

---

### Section 2.5: Infinite Limits and Vertical Asymptotes

**Learning Objective:** Students will identify vertical asymptotes, evaluate infinite limits, and understand the relationship between limits and asymptotic behavior.

**Key Definitions / Theorems:**
1. **Infinite Limit:** $\lim_{x \to a} f(x) = \infty$ means $f(x)$ can be made arbitrarily large positive by taking $x$ sufficiently close to $a$ (but $x \neq a$).
2. **Vertical Asymptote:** The line $x = a$ is a vertical asymptote of $y = f(x)$ if at least one of $\lim_{x \to a^+} f(x) = \pm\infty$ or $\lim_{x \to a^-} f(x) = \pm\infty$ is true.
3. **Theorem (Vertical Asymptotes of Rational Functions):** If $f(x) = \frac{p(x)}{q(x)}$ where $p$ and $q$ are polynomials with no common factors, then $x = a$ is a vertical asymptote iff $q(a) = 0$ and $p(a) \neq 0$.
4. **Infinite Limit Laws:** If $\lim_{x \to a} f(x) = \infty$ and $\lim_{x \to a} g(x) = \infty$, then $\lim_{x \to a} [f(x) + g(x)] = \infty$.
5. **Limit at Infinity (Horizontal Asymptote):** If $\lim_{x \to \infty} f(x) = L$ (finite), then $y = L$ is a horizontal asymptote.

**Worked Examples:**
1. Evaluate $\lim_{x \to 2^+} \frac{1}{x - 2}$. Solution: As $x \to 2^+$, $x - 2 \to 0^+$, so $\frac{1}{x-2} \to \infty$.
2. Find vertical asymptotes of $f(x) = \frac{x^2 - 1}{(x-1)(x+2)}$. Solution: Simplify to $\frac{x+1}{x+2}$ for $x \neq 1$. Vertical asymptote at $x = -2$. $x = 1$ is a removable discontinuity.
3. Evaluate $\lim_{x \to \infty} \frac{2x^2 + 3}{x^2 - 1}$. Solution: Divide by $x^2$: $\lim_{x \to \infty} \frac{2 + 3/x^2}{1 - 1/x^2} = 2$. Horizontal asymptote $y = 2$.

**TikZ Diagram:**
- **Idea:** Graph of $f(x) = \frac{1}{(x-2)(x+1)}$ showing vertical asymptotes at $x = -1$ and $x = 2$, and a horizontal asymptote at $y = 0$.
- **Implementation:** Use pgfplots with `axis lines = center`, plot the function with a domain that avoids the asymptotes (split into three domains), draw dashed vertical lines at $x = -1$ and $x = 2$.

**Practice Problems:**
1. Determine the vertical asymptotes of $f(x) = \frac{x^2 + 2x - 3}{x^2 - 9}$.
2. Evaluate $\lim_{x \to 0^+} \frac{1}{x^2}$.
3. Find $\lim_{x \to \infty} \frac{3x^2 + 5x}{2x^2 - 7}$ and identify any horizontal asymptotes.

**Study Tips:**
- Always check one-sided limits when approaching a point where the denominator is zero.
- For rational functions, compare degrees of numerator and denominator to find horizontal asymptotes.

---

### Section 2.6: Limits at Infinity; Horizontal Asymptotes

**Learning Objective:** Students will compute limits at infinity, identify horizontal and slant asymptotes, and apply these concepts to rational, exponential, and trigonometric functions.

**Key Definitions / Theorems:**
1. **Limit at Infinity:** $\lim_{x \to \infty} f(x) = L$ means values of $f(x)$ get arbitrarily close to $L$ as $x$ increases without bound.
2. **Horizontal Asymptote:** The line $y = L$ is a horizontal asymptote if $\lim_{x \to \infty} f(x) = L$ or $\lim_{x \to -\infty} f(x) = L$.
3. **Theorem (Rational Functions):** If $f(x) = \frac{p(x)}{q(x)}$ with $\deg(p) = m$ and $\deg(q) = n$: if $m < n$, $y = 0$ is horizontal asymptote; if $m = n$, $y = \text{leading coeff ratio}$; if $m > n$, no horizontal asymptote (possible slant if $m = n+1$).
4. **Squeeze Theorem:** If $g(x) \leq f(x) \leq h(x)$ near $a$ and $\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L$, then $\lim_{x \to a} f(x) = L$.
5. **Important Trigonometric Limit:** $\lim_{x \to 0} \frac{\sin(x)}{x} = 1$.

**Worked Examples:**
1. Evaluate $\lim_{x \to \infty} \frac{5x^3 + 2x}{3x^3 - x^2 + 4}$. Solution: Leading terms give $5/3$.
2. Use the Squeeze Theorem to prove $\lim_{x \to 0} x^2 \sin(1/x) = 0$. Solution: Since $-|x^2| \leq x^2 \sin(1/x) \leq |x^2|$ and both bounds $\to 0$, the limit is 0.
3. Evaluate $\lim_{x \to \infty} \frac{\ln(x)}{x}$. Solution: By L'Hôpital's Rule (or growth rates), the limit is 0.

**TikZ Diagram:**
- **Idea:** Plot multiple rational functions on the same axes to illustrate different horizontal asymptote behaviors based on degree comparison.
- **Implementation:** Plot $y = \frac{1}{x}$ (degree num < den), $y = \frac{x}{x+1}$ (equal degree), and $y = \frac{x^2}{x+1}$ (degree num > den) on a shared axis. Add dashed horizontal asymptote lines.

**Practice Problems:**
1. Find $\lim_{x \to \infty} \frac{2x^2 + 3x}{5x^2 - 1}$.
2. Show that $\lim_{x \to \infty} e^{-x} = 0$ using a sketch.
3. Determine if $f(x) = \frac{x^2 - 1}{x}$ has a slant asymptote and find it.

**Study Tips:**
- When degrees are equal, only the leading coefficients matter.
- For exponential vs. polynomial, exponentials always dominate (except when exponent is 0).

---

### Section 2.7: Derivatives and Rates of Change (Preview)

**Learning Objective:** Students will understand the derivative as an instantaneous rate of change and compute it as a limit of difference quotients.

**Key Definitions / Theorems:**
1. **Tangent Line Problem:** The slope of the tangent line to $y = f(x)$ at $P(a, f(a))$ is $m = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$ (if the limit exists).
2. **Instantaneous Velocity:** If $s(t)$ is position, then velocity at time $t$ is $v(t) = \lim_{h \to 0} \frac{s(t+h) - s(t)}{h}$.
3. **Average Rate of Change:** $\frac{f(b) - f(a)}{b - a}$.
4. **Derivative (Limit Definition):** $f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h} = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}$.
5. **Theorem (Differentiability Implies Continuity):** If $f$ is differentiable at $a$, then $f$ is continuous at $a$.

**Worked Examples:**
1. Find the equation of the tangent line to $f(x) = x^2$ at $x = 1$. Solution: $f'(1) = \lim_{h \to 0} \frac{(1+h)^2 - 1}{h} = \lim_{h \to 0} (2 + h) = 2$. Tangent line: $y - 1 = 2(x - 1)$.
2. Compute $f'(x)$ for $f(x) = \sqrt{x}$ using the definition. Solution: $f'(x) = \lim_{h \to 0} \frac{\sqrt{x+h} - \sqrt{x}}{h} = \frac{1}{2\sqrt{x}}$.
3. A ball is dropped from height 100 m. Find its velocity after 2 seconds if $s(t) = 100 - 4.9t^2$. Solution: $v(t) = s'(t) = -9.8t$, so $v(2) = -19.6$ m/s.

**TikZ Diagram:**
- **Idea:** Secant lines approaching a tangent line on a curve, visualizing the limit definition of the derivative.
- **Implementation:** Draw $f(x) = x^2$ with point at $(1,1)$. Draw secant lines from $(1,1)$ to $(1+h, (1+h)^2)$ for $h = 1, 0.5, 0.2$, approaching the tangent line $y = 2x - 1$. Use different colors for each secant.

**Practice Problems:**
1. Use the definition to find $f'(3)$ where $f(x) = x^3$.
2. Find the tangent line to $f(x) = 1/x$ at $x = 2$.
3. If $s(t) = t^3 - 6t^2$, find the velocity at $t = 2$.

**Study Tips:**
- The derivative is a limit; if you can evaluate limits, you can find derivatives from the definition.
- Geometric interpretation: derivative = slope of tangent line.

---

## Chapter 2: DERIVATIVES

### Section 3.1: Derivatives as Functions

**Learning Objective:** Students will treat the derivative as a function, compute $f'(x)$ from the definition, and relate $f$ and $f'$ graphically.

**Key Definitions / Theorems:**
1. **Derivative Function:** $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$.
2. **Domain of $f'$:** The set of all $x$ for which the limit defining $f'(x)$ exists.
3. **Higher Derivatives:** $f''(x) = (f')'(x)$, $f'''(x) = (f'')'(x)$, etc.
4. **Notation:** Leibniz notation $\frac{dy}{dx}$, Lagrange notation $f'(x)$, and Newton notation $\dot{y}$.
5. **Theorem:** If $f$ is differentiable at $a$, then $f$ is continuous at $a$.

**Worked Examples:**
1. Find $f'(x)$ for $f(x) = x^3 - 4x$. Solution: $f'(x) = 3x^2 - 4$.
2. Determine where $f(x) = |x|$ is differentiable. Solution: For $x > 0$, $f'(x) = 1$; for $x < 0$, $f'(x) = -1$; at $x = 0$, left derivative is $-1$, right derivative is $1$, so not differentiable.
3. Sketch $f$ and $f'$ for $f(x) = x^3 - 3x^2 + 2$. Solution: $f'(x) = 3x^2 - 6x = 3x(x-2)$. $f$ has local max at $x = 0$, local min at $x = 2$.

**TikZ Diagram:**
- **Idea:** Graph of $f(x) = x^3 - 3x^2 + 2$ with its derivative $f'(x) = 3x^2 - 6x$ plotted below or on the same axis with a different color, showing where $f'$ crosses zero corresponding to extrema of $f$.
- **Implementation:** Use `groupplot` from pgfplots to show $f(x)$ in top axis and $f'(x)$ in bottom axis, aligned vertically, with vertical dashed lines at critical points.

**Practice Problems:**
1. Find the derivative function of $f(x) = 2x^4 - 3x^2 + x - 5$.
2. Sketch the graph of $f'(x)$ given the graph of $f(x)$ showing increasing/decreasing intervals.
3. Determine if $f(x) = x^{2/3}$ is differentiable at $x = 0$.

**Study Tips:**
- Practice moving between the graph of $f$ and the graph of $f'$: $f$ increases when $f' > 0$, decreases when $f' < 0$.
- Differentiability implies continuity, but the converse is false (e.g., $|x|$ at 0).

---

### Section 3.2: Differentiation Rules

**Learning Objective:** Students will master the basic differentiation rules (power, sum, constant multiple, product, quotient) to compute derivatives efficiently.

**Key Definitions / Theorems:**
1. **Power Rule:** $\frac{d}{dx}[x^n] = nx^{n-1}$ for any real number $n$.
2. **Constant Rule:** $\frac{d}{dx}[c] = 0$.
3. **Sum/Difference Rule:** $\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$.
4. **Constant Multiple Rule:** $\frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x)$.
5. **Product Rule:** $\frac{d}{dx}[f(x)g(x)] = f(x)g'(x) + f'(x)g(x)$.

**Worked Examples:**
1. Differentiate $f(x) = 3x^4 - 2x^3 + 5x - 7$. Solution: $f'(x) = 12x^3 - 6x^2 + 5$.
2. Differentiate $f(x) = x^2 \sin(x)$ using the Product Rule. Solution: $f'(x) = 2x\sin(x) + x^2\cos(x)$.
3. Differentiate $f(x) = \frac{x^2 + 1}{x - 3}$ using the Quotient Rule. Solution: $f'(x) = \frac{(x-3)(2x) - (x^2+1)(1)}{(x-3)^2} = \frac{x^2 - 6x - 1}{(x-3)^2}$.

**TikZ Diagram:**
- **Idea:** Visual proof of the Product Rule using areas of rectangles changing as $x$ changes.
- **Implementation:** Draw a rectangle with sides $f(x)$ and $g(x)$. Show how the area changes when $x$ increases by $\Delta x$, with labels for $f \Delta g$, $g \Delta f$, and $\Delta f \Delta g$.

**Practice Problems:**
1. Differentiate $f(x) = (3x^2 - 1)^4$ using the Chain Rule (prepare for next section) or expand first.
2. Find $\frac{d}{dx}\left[\frac{\sqrt{x}}{x^2+1}\right]$.
3. Differentiate $f(x) = x^3 \ln(x)$.

**Study Tips:**
- Apply rules in the correct order: simplify first, then differentiate.
- For products, use the Product Rule; for quotients, use the Quotient Rule—don't try to differentiate term by term.

---

### Section 3.3: The Chain Rule

**Learning Objective:** Students will apply the Chain Rule to differentiate composite functions and understand its geometric interpretation.

**Key Definitions / Theorems:**
1. **Composite Function:** If $y = f(u)$ and $u = g(x)$, then $y = f(g(x))$.
2. **Chain Rule:** If $f$ and $g$ are differentiable, then $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$.
3. **General Power Rule:** $\frac{d}{dx}[u^n] = n u^{n-1} \frac{du}{dx}$.
4. **Chain Rule in Leibniz Notation:** $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$.
5. **Theorem (Derivative of $a^x$):** $\frac{d}{dx}[a^x] = a^x \ln(a)$.

**Worked Examples:**
1. Differentiate $f(x) = (3x^2 + 1)^5$. Solution: $f'(x) = 5(3x^2 + 1)^4 \cdot 6x = 30x(3x^2 + 1)^4$.
2. Differentiate $f(x) = \sin(x^3)$. Solution: $f'(x) = \cos(x^3) \cdot 3x^2 = 3x^2\cos(x^3)$.
3. Differentiate $f(x) = e^{x^2}$. Solution: $f'(x) = e^{x^2} \cdot 2x = 2xe^{x^2}$.

**TikZ Diagram:**
- **Idea:** Function composition diagram: $x \xrightarrow{g} u \xrightarrow{f} y$, with arrows showing how changes in $x$ propagate through $g$ and $f$.
- **Implementation:** Use `\node` to place $x$, $u = g(x)$, $y = f(u)$ in a row with arrows between them. Show derivatives as labels on arrows: $g'(x)$ and $f'(u)$.

**Practice Problems:**
1. Find $\frac{d}{dx}[\sqrt{1 + x^3}]$.
2. Differentiate $f(x) = \ln(x^2 + 1)$.
3. Find the derivative of $f(x) = \cos^3(2x)$.

**Study Tips:**
- Work from the outside in: identify the outer function and inner function(s).
- The Chain Rule is used almost everywhere in calculus—master it early.

---

### Section 3.4: Implicit Differentiation

**Learning Objective:** Students will differentiate equations implicitly to find $\frac{dy}{dx}$ and use it to find tangent lines and analyze curves.

**Key Definitions / Theorems:**
1. **Explicit Function:** $y$ is expressed directly as a function of $x$, e.g., $y = x^2$.
2. **Implicit Function:** $y$ is related to $x$ by an equation, e.g., $x^2 + y^2 = 1$.
3. **Implicit Differentiation:** Differentiate both sides of an equation with respect to $x$, treating $y$ as a function of $x$ and using the Chain Rule for $y$ terms.
4. **Derivative of $y^n$:** $\frac{d}{dx}[y^n] = n y^{n-1} \frac{dy}{dx}$.
5. **Related Rates Connection:** Implicit differentiation is the foundation for related rates problems.

**Worked Examples:**
1. Find $\frac{dy}{dx}$ for the circle $x^2 + y^2 = 25$. Solution: $2x + 2y\frac{dy}{dx} = 0$, so $\frac{dy}{dx} = -\frac{x}{y}$.
2. Find the tangent line to $x^3 + y^3 = 6xy$ at $(3, 3)$. Solution: Differentiate: $3x^2 + 3y^2 y' = 6y + 6xy'$. Solve for $y'$: $y' = \frac{6y - 3x^2}{3y^2 - 6x}$. At $(3,3)$, $y' = \frac{18 - 27}{27 - 18} = -1$. Tangent line: $y - 3 = -1(x - 3)$.
3. Find $\frac{d^2y}{dx^2}$ for $x^2 + y^2 = 1$. Solution: First derivative $\frac{dy}{dx} = -x/y$. Differentiate again using quotient rule and implicit differentiation.

**TikZ Diagram:**
- **Idea:** Graph of the circle $x^2 + y^2 = 1$ with a tangent line at a point, showing the slope calculated via implicit differentiation.
- **Implementation:** Plot unit circle. Pick point $(\cos(\theta), \sin(\theta))$, e.g., $(\sqrt{2}/2, \sqrt{2}/2)$. Draw tangent line with slope $-x/y = -1$. Label the point and slope.

**Practice Problems:**
1. Find $\frac{dy}{dx}$ for $x^2y + y^3 = 4$.
2. Determine the equation of the tangent line to $xy = 1$ at $x = 2$.
3. Find all points on $x^2 + y^2 = 4$ where the tangent line is horizontal.

**Study Tips:**
- Always multiply by $\frac{dy}{dx}$ when differentiating a term containing $y$.
- After finding $\frac{dy}{dx}$, you can often simplify by substituting the original equation.

---

### Section 3.5: Derivatives of Logarithmic and Exponential Functions

**Learning Objective:** Students will differentiate logarithmic and exponential functions with arbitrary bases and apply logarithmic differentiation.

**Key Definitions / Theorems:**
1. **Natural Logarithm Derivative:** $\frac{d}{dx}[\ln(x)] = \frac{1}{x}$ for $x > 0$.
2. **Logarithm with Base $a$:** $\frac{d}{dx}[\log_a(x)] = \frac{1}{x \ln(a)}$.
3. **Exponential Function:** $\frac{d}{dx}[e^x] = e^x$.
4. **General Exponential:** $\frac{d}{dx}[a^x] = a^x \ln(a)$.
5. **Logarithmic Differentiation:** For complicated products/quotients/powers, take $\ln$ of both sides, differentiate implicitly, then solve for $y'$.

**Worked Examples:**
1. Differentiate $f(x) = \ln(x^2 + 1)$. Solution: $f'(x) = \frac{1}{x^2+1} \cdot 2x = \frac{2x}{x^2+1}$.
2. Differentiate $f(x) = x^x$ using logarithmic differentiation. Solution: $\ln(y) = x\ln(x)$, so $\frac{y'}{y} = \ln(x) + 1$, giving $y' = x^x(\ln(x) + 1)$.
3. Find $\frac{d}{dx}[5^{x^2}]$. Solution: $5^{x^2} \ln(5) \cdot 2x = 2x \cdot 5^{x^2} \ln(5)$.

**TikZ Diagram:**
- **Idea:** Graph of $y = \ln(x)$ with tangent lines at various points, illustrating that the slope at $x$ is $1/x$.
- **Implementation:** Plot $\ln(x)$ for $x > 0$. Draw tangent lines at $x = 1$ (slope 1), $x = 2$ (slope 1/2), $x = 1/2$ (slope 2). Label slopes.

**Practice Problems:**
1. Differentiate $f(x) = \log_2(x^3 + 1)$.
2. Use logarithmic differentiation to find $y'$ for $y = (x^2 + 1)^{\sin(x)}$.
3. Find $\frac{d}{dx}[e^{3x} \ln(x)]$.

**Study Tips:**
- Logarithmic differentiation is especially useful for functions of the form $f(x)^{g(x)}$.
- Always apply the Chain Rule when the argument of $\ln$ or $e^x$ is not just $x$.

---

### Section 3.6: Related Rates

**Learning Objective:** Students will set up and solve related rates problems by differentiating equations that relate multiple changing quantities.

**Key Definitions / Theorems:**
1. **Related Rates:** Problems where two or more quantities are related by an equation, and we seek the rate of change of one quantity in terms of others.
2. **Strategy:** (1) Draw a diagram, (2) assign variables, (3) write an equation relating variables, (4) differentiate with respect to time $t$, (5) substitute known values and solve for the desired rate.
3. **Common Formulas:** Pythagorean theorem, volume of a sphere $V = \frac{4}{3}\pi r^3$, area of a circle $A = \pi r^2$.
4. **Theorem:** All rates in a related rates problem must be taken with respect to the same independent variable (usually time $t$).
5. **Implicit Differentiation Connection:** Related rates is just implicit differentiation with respect to $t$.

**Worked Examples:**
1. A 10 ft ladder leans against a wall. If the bottom slides away at 1 ft/s, how fast is the top sliding down when the bottom is 6 ft from the wall? Solution: $x^2 + y^2 = 100$. Differentiate: $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$. At $x = 6$, $y = 8$, $\frac{dx}{dt} = 1$: $\frac{dy}{dt} = -\frac{6}{8} = -0.75$ ft/s.
2. A spherical balloon is inflated at $10\pi$ in³/s. Find the rate at which the radius increases when $r = 5$ in. Solution: $V = \frac{4}{3}\pi r^3$, $\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$. At $r = 5$, $10\pi = 4\pi(25)\frac{dr}{dt}$, so $\frac{dr}{dt} = \frac{1}{10}$ in/s.
3. Two cars start from the same point, one going east at 60 mph, the other north at 80 mph. How fast is the distance between them increasing after 2 hours? Solution: $x^2 + y^2 = z^2$. Differentiate: $2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 2z\frac{dz}{dt}$. After 2 hours: $x = 120$, $y = 160$, $z = 200$. Solve: $\frac{dz}{dt} = 100$ mph.

**TikZ Diagram:**
- **Idea:** Ladder sliding down a wall with labeled right triangle showing changing sides $x(t)$ and $y(t)$.
- **Implementation:** Draw a right triangle with vertical wall, horizontal ground, and ladder as hypotenuse. Label $x(t)$ (bottom distance), $y(t)$ (height), and $dx/dt$, $dy/dt$ as arrows. Use `decorations.pathreplacing` for braces if needed.

**Practice Problems:**
1. Water is poured into a conical tank (radius 3 m, height 9 m) at 2 m³/min. How fast is the water level rising when the depth is 6 m?
2. A rocket rises vertically from a point 5 miles from a camera. If the rocket's altitude is increasing at 600 mph, how fast is the elevation angle changing when the altitude is 3 miles?
3. Two ships sail: one east at 20 knots, another north at 15 knots. Find the rate of change of distance between them after 3 hours.

**Study Tips:**
- Before differentiating, make sure all variables are defined and consistent.
- After solving, check units and whether the sign makes physical sense.

---

### Section 3.7: Exponential Growth and Decay

**Learning Objective:** Students will model exponential growth and decay, solve differential equations of the form $y' = ky$, and apply these models to real-world situations.

**Key Definitions / Theorems:**
1. **Exponential Growth/Decay Equation:** $\frac{dy}{dt} = ky$, where $k$ is a constant.
2. **Solution:** $y(t) = y_0 e^{kt}$, where $y_0$ is initial value. If $k > 0$, exponential growth; if $k < 0$, exponential decay.
3. **Doubling Time:** The time required for a quantity undergoing exponential growth to double: $T_d = \frac{\ln(2)}{k}$.
4. **Half-Life:** The time required for a quantity undergoing exponential decay to halve: $T_{1/2} = \frac{\ln(2)}{|k|}$.
5. **Newton's Law of Cooling:** $\frac{dT}{dt} = -k(T - T_s)$, where $T_s$ is the surrounding temperature.

**Worked Examples:**
1. A bacteria culture starts with 100 bacteria and grows at a rate proportional to its size. After 3 hours there are 400 bacteria. Find the population after 5 hours. Solution: $y(t) = 100e^{kt}$. $400 = 100e^{3k} \Rightarrow k = \frac{\ln(4)}{3}$. $y(5) = 100e^{5\ln(4)/3} \approx 630$ bacteria.
2. Radium-226 has a half-life of 1600 years. If a sample initially contains 50 mg, how much remains after 500 years? Solution: $k = -\frac{\ln(2)}{1600}$. $y(500) = 50e^{-500\ln(2)/1600} \approx 41.4$ mg.
3. A cup of coffee at 90°C is placed in a room at 20°C. After 10 minutes it is 60°C. When will it reach 30°C? Solution: $T(t) = 20 + 70e^{-kt}$. $60 = 20 + 70e^{-10k} \Rightarrow k = \frac{\ln(7/4)}{10}$. Solve $30 = 20 + 70e^{-kt}$ for $t \approx 33.8$ minutes.

**TikZ Diagram:**
- **Idea:** Plot of exponential growth and exponential decay on the same axes, showing the effect of positive vs. negative $k$.
- **Implementation:** Use pgfplots to plot $y = e^{0.5x}$ (growth) and $y = e^{-0.3x}$ (decay) for $x \geq 0$. Add horizontal asymptote $y = 0$ for decay. Label doubling time and half-life with dashed lines.

**Practice Problems:**
1. A population of rabbits grows exponentially. If there are 200 rabbits initially and 800 after 3 years, find the population after 7 years.
2. Carbon-14 has a half-life of 5730 years. A fossil contains 25% of its original C-14. Estimate its age.
3. A thermometer reads 80°F and is brought into a room at 60°F. After 5 minutes it reads 70°F. Find the temperature after 15 minutes.

**Study Tips:**
- Always identify $k$ first using given data before solving for other values.
- Exponential growth is extremely fast—small changes in $k$ lead to large differences over time.

---

### Section 3.8: Derivatives of Inverse Trigonometric Functions

**Learning Objective:** Students will differentiate inverse trigonometric functions using implicit differentiation and the relationship between a function and its inverse.

**Key Definitions / Theorems:**
1. **Inverse Sine Derivative:** $\frac{d}{dx}[\arcsin(x)] = \frac{1}{\sqrt{1-x^2}}$ for $|x| < 1$.
2. **Inverse Cosine Derivative:** $\frac{d}{dx}[\arccos(x)] = -\frac{1}{\sqrt{1-x^2}}$ for $|x| < 1$.
3. **Inverse Tangent Derivative:** $\frac{d}{dx}[\arctan(x)] = \frac{1}{1+x^2}$.
4. **Inverse Secant, Cosecant, Cotangent:** $\frac{d}{dx}[\arcsec(x)] = \frac{1}{|x|\sqrt{x^2-1}}$ for $|x| > 1$.
5. **Derivative of Inverse Function:** If $y = f^{-1}(x)$, then $\frac{dy}{dx} = \frac{1}{f'(y)}$.

**Worked Examples:**
1. Differentiate $f(x) = \arcsin(3x)$. Solution: $f'(x) = \frac{1}{\sqrt{1-(3x)^2}} \cdot 3 = \frac{3}{\sqrt{1-9x^2}}$.
2. Find $\frac{d}{dx}[\arctan(x^2)]$. Solution: $\frac{1}{1+(x^2)^2} \cdot 2x = \frac{2x}{1+x^4}$.
3. Differentiate $f(x) = \arcsin(x) + \arccos(x)$. Solution: $\frac{1}{\sqrt{1-x^2}} - \frac{1}{\sqrt{1-x^2}} = 0$, consistent with $\arcsin(x) + \arccos(x) = \pi/2$.

**TikZ Diagram:**
- **Idea:** Unit circle diagram showing the relationship between an angle $\theta = \arcsin(x)$ and the right triangle with opposite side $x$ and hypotenuse 1.
- **Implementation:** Draw a right triangle inscribed in a unit circle. Label angle $\theta$, opposite side $x$, adjacent side $\sqrt{1-x^2}$, hypotenuse 1. Show $\sin(\theta) = x$ so $\theta = \arcsin(x)$.

**Practice Problems:**
1. Differentiate $f(x) = \arccos(\sqrt{x})$.
2. Find $\frac{d}{dx}[\arctan\left(\frac{x}{2}\right)]$.
3. Simplify $\arcsin(x) + \arccos(x)$ and verify by differentiation.

**Study Tips:**
- Memorize the derivatives of $\arcsin$, $\arccos$, and $\arctan$; the others can be derived.
- Watch the domain restrictions carefully when using these derivatives.

---

### Section 3.9: Hyperbolic Functions

**Learning Objective:** Students will define hyperbolic functions, derive their derivatives, and solve problems involving hyperbolic identities.

**Key Definitions / Theorems:**
1. **Hyperbolic Sine:** $\sinh(x) = \frac{e^x - e^{-x}}{2}$.
2. **Hyperbolic Cosine:** $\cosh(x) = \frac{e^x + e^{-x}}{2}$.
3. **Identities:** $\cosh^2(x) - \sinh^2(x) = 1$; $\sinh(2x) = 2\sinh(x)\cosh(x)$.
4. **Derivatives:** $\frac{d}{dx}[\sinh(x)] = \cosh(x)$, $\frac{d}{dx}[\cosh(x)] = \sinh(x)$.
5. **Inverse Hyperbolic Functions:** $\frac{d}{dx}[\sinh^{-1}(x)] = \frac{1}{\sqrt{1+x^2}}$.

**Worked Examples:**
1. Verify the identity $\cosh^2(x) - \sinh^2(x) = 1$. Solution: Expand both using definitions: $\left(\frac{e^x+e^{-x}}{2}\right)^2 - \left(\frac{e^x-e^{-x}}{2}\right)^2 = \frac{e^{2x} + 2 + e^{-2x} - (e^{2x} - 2 + e^{-2x})}{4} = 1$.
2. Differentiate $f(x) = \sinh(x^2)$. Solution: $f'(x) = \cosh(x^2) \cdot 2x = 2x\cosh(x^2)$.
3. Find the derivative of $f(x) = \tanh(x) = \frac{\sinh(x)}{\cosh(x)}$. Solution: $f'(x) = \frac{\cosh^2(x) - \sinh^2(x)}{\cosh^2(x)} = \frac{1}{\cosh^2(x)} = \text{sech}^2(x)$.

**TikZ Diagram:**
- **Idea:** Graph of $\sinh(x)$, $\cosh(x)$, and $\tanh(x)$ on the same axes to show their shapes and relationships.
- **Implementation:** Use pgfplots to plot all three functions for $x \in [-3, 3]$. Use distinct colors. Label asymptotes for $\tanh(x)$.

**Practice Problems:**
1. Show that $\sinh(x + y) = \sinh(x)\cosh(y) + \cosh(x)\sinh(y)$.
2. Differentiate $f(x) = \cosh(3x - 1)$.
3. Find $\frac{d}{dx}[\tanh^{-1}(x)]$ using the inverse function derivative formula.

**Study Tips:**
- Hyperbolic functions are analogous to trigonometric functions but with sign changes in identities.
- Remember: $\cosh$ is always $\geq 1$; $\sinh$ and $\tanh$ behave like sine and tangent.

---

### Section 3.10: Linear Approximations and Differentials

**Learning Objective:** Students will use linear approximations (tangent line approximations) to estimate function values and understand differentials.

**Key Definitions / Theorems:**
1. **Linear Approximation:** If $f$ is differentiable at $a$, then $L(x) = f(a) + f'(a)(x-a)$ approximates $f(x)$ near $a$.
2. **Differential:** If $y = f(x)$, then $dy = f'(x)\,dx$ is the differential of $y$.
3. **Approximation Formula:** $f(a + \Delta x) \approx f(a) + f'(a)\Delta x$, so $\Delta y \approx dy$.
4. **Error Estimation:** The error in linear approximation is bounded by $\frac{1}{2}M|(\Delta x)^2|$ where $M = \max|f''(x)|$ on the interval.
5. **Relative Error:** $\frac{\Delta y}{y} \approx \frac{dy}{y}$.

**Worked Examples:**
1. Use linear approximation to estimate $\sqrt{26}$ using $f(x) = \sqrt{x}$ at $a = 25$. Solution: $f(25) = 5$, $f'(x) = \frac{1}{2\sqrt{x}}$, $f'(25) = \frac{1}{10}$. $L(26) = 5 + \frac{1}{10}(1) = 5.1$.
2. The radius of a sphere is measured as 10 cm with a possible error of 0.1 cm. Estimate the maximum error in the calculated volume. Solution: $V = \frac{4}{3}\pi r^3$, $dV = 4\pi r^2 dr$. At $r = 10$, $dr = 0.1$, $dV = 4\pi(100)(0.1) = 40\pi \approx 125.6$ cm³.
3. Estimate $\Delta y$ for $y = x^3$ when $x$ changes from 2 to 2.1. Solution: $dy = 3x^2 dx = 3(4)(0.1) = 1.2$. Actual $\Delta y = 2.1^3 - 2^3 = 9.261 - 8 = 1.261$.

**TikZ Diagram:**
- **Idea:** Graph of a function with its tangent line at $a$, showing the approximation $L(x)$ near $a$ and the actual function diverging further away.
- **Implementation:** Plot $f(x) = \sqrt{x}$ and its linear approximation at $a = 4$: $L(x) = 2 + \frac{1}{4}(x-4)$. Show the small error near $x = 4$ and increasing error as $x$ moves away. Add dashed vertical lines to show $\Delta x$.

**Practice Problems:**
1. Use linear approximation to estimate $(1.001)^{10}$.
2. A cube has edge length 20 cm with measurement error 0.05 cm. Estimate the maximum error in the surface area.
3. Find the linearization of $f(x) = \sin(x)$ at $a = 0$ and use it to approximate $\sin(0.1)$.

**Study Tips:**
- Choose $a$ close to the target value and easy to compute.
- Linear approximation works best for small $\Delta x$; error grows as you move away from $a$.

---

### Section 3.11: Higher-Order Derivatives

**Learning Objective:** Students will compute second, third, and higher-order derivatives and interpret their physical and geometric meanings.

**Key Definitions / Theorems:**
1. **Second Derivative:** $f''(x) = \frac{d}{dx}[f'(x)]$.
2. **Third Derivative:** $f'''(x) = \frac{d}{dx}[f''(x)]$.
3. **$n$-th Derivative:** $f^{(n)}(x) = \frac{d}{dx}[f^{(n-1)}(x)]$.
4. **Notation:** $f^{(n)}(x)$, $\frac{d^n y}{dx^n}$, or $D^n f(x)$.
5. **Physical Interpretation:** If $s(t)$ is position, then $s'(t)$ is velocity, $s''(t)$ is acceleration, $s'''(t)$ is jerk.

**Worked Examples:**
1. Find $f''(x)$ for $f(x) = x^4 - 3x^3 + 2x$. Solution: $f'(x) = 4x^3 - 9x^2 + 2$, $f''(x) = 12x^2 - 18x$.
2. Find $f'''(x)$ for $f(x) = e^{2x}$. Solution: $f'(x) = 2e^{2x}$, $f''(x) = 4e^{2x}$, $f'''(x) = 8e^{2x}$. In general, $f^{(n)}(x) = 2^n e^{2x}$.
3. A particle moves with position $s(t) = t^3 - 6t^2 + 9t$. Find acceleration at $t = 2$. Solution: $s'(t) = 3t^2 - 12t + 9$, $s''(t) = 6t - 12$. At $t = 2$, $s''(2) = 0$.

**TikZ Diagram:**
- **Idea:** Graph of a function with labeled concavity changes corresponding to inflection points where $f''(x) = 0$.
- **Implementation:** Plot $f(x) = x^3 - 3x$ and show that $f''(x) = 6x$. Highlight the inflection point at $x = 0$ where concavity changes from down to up. Add labels for concave up/down regions.

**Practice Problems:**
1. Find the fourth derivative of $f(x) = \ln(x)$.
2. Find $f^{(5)}(x)$ for $f(x) = \sin(x)$.
3. If $s(t) = t^4 - 4t^3$, find the velocity, acceleration, and jerk at $t = 1$.

**Study Tips:**
- Higher-order derivatives follow the same rules as first derivatives—just apply them repeatedly.
- Look for patterns in derivatives of trigonometric and exponential functions.

---

## Chapter 3: APPLICATIONS OF THE DERIVATIVE

### Section 3.11: Linear Approximations and Differentials (Applications Focus)

**Learning Objective:** Students will apply linear approximations to estimate physical quantities and use differentials for error propagation in applied problems.

**Key Definitions / Theorems:**
1. **Linear Approximation:** $f(x) \approx f(a) + f'(a)(x-a)$ for $x$ near $a$.
2. **Differential:** $dy = f'(x)\,dx$ approximates the change in $y$ for a small change $dx$ in $x$.
3. **Percentage Error:** $\frac{\Delta y}{y} \times 100\% \approx \frac{dy}{y} \times 100\%$.
4. **Propagation of Error:** If $R = R(x, y, z)$, then $dR = \frac{\partial R}{\partial x}dx + \frac{\partial R}{\partial y}dy + \frac{\partial R}{\partial z}dz$.
5. **Theorem:** The linear approximation is the first-order Taylor polynomial of $f$ at $a$.

**Worked Examples:**
1. A cylindrical tank of radius 5 m is being filled with water at $0.5$ m³/min. How fast is the water level rising? Solution: $V = \pi r^2 h$, $dV = \pi r^2 dh$. At $r = 5$, $0.5 = \pi(25)\frac{dh}{dt}$, so $\frac{dh}{dt} \approx 0.00637$ m/min.
2. A conical tank (radius 3 m, height 9 m) is draining. Find the rate at which the water level falls when the depth is 6 m and the water is draining at $2$ m³/min. Solution: By similar triangles, $r = h/3$. $V = \frac{1}{3}\pi r^2 h = \frac{\pi h^3}{27}$. $\frac{dV}{dt} = \frac{\pi h^2}{9}\frac{dh}{dt}$. At $h = 6$, $-2 = \frac{\pi(36)}{9}\frac{dh}{dt}$, so $\frac{dh}{dt} \approx -0.159$ m/min.
3. Use differentials to estimate the maximum error in the area of a circle of radius $r = 10$ cm if $r$ is measured with error 0.1 cm. Solution: $A = \pi r^2$, $dA = 2\pi r\,dr = 2\pi(10)(0.1) = 2\pi \approx 6.28$ cm².

**TikZ Diagram:**
- **Idea:** Cross-section of a conical tank showing the water level $h(t)$ and radius $r(t)$, with similar triangles illustrating $r = \frac{R}{H}h$.
- **Implementation:** Draw a cone with height $H$ and top radius $R$. Draw a horizontal water line at depth $h$ with radius $r$. Label $h$, $r$, $H$, $R$, and show the similar triangles with $\frac{r}{h} = \frac{R}{H}$.

**Practice Problems:**
1. The side of a square is measured as 10 cm with error 0.05 cm. Estimate the error in the area.
2. A spherical balloon is inflated. When the radius is 5 m and increasing at 0.1 m/s, how fast is the surface area increasing?
3. A 13 ft ladder leans against a wall. If the bottom slides away at 2 ft/s, how fast is the angle between the ladder and the ground changing when the bottom is 5 ft from the wall?

**Study Tips:**
- Draw a clear diagram before setting up any related rates problem.
- Use similar triangles to eliminate extra variables when dealing with conical or pyramidal tanks.

---

### Section 4.1: Related Rates (Advanced Applications)

**Learning Objective:** Students will solve complex related rates problems involving multiple variables and trigonometric relationships.

**Key Definitions / Theorems:**
1. **Related Rates Strategy:** (1) Draw and label diagram, (2) write equation relating variables, (3) differentiate implicitly w.r.t. $t$, (4) substitute known values, (5) solve for desired rate.
2. **Angular Rate:** If $\theta$ is an angle, $\frac{d\theta}{dt}$ is the angular rate.
3. **Trigonometric Relations:** In a right triangle, $\sin(\theta) = \frac{\text{opp}}{\text{hyp}}$, etc.
4. **Similar Triangles:** If two triangles are similar, ratios of corresponding sides are equal.
5. **Pythagorean Theorem:** $a^2 + b^2 = c^2$ for right triangles.

**Worked Examples:**
1. A kite 100 m high is being blown away horizontally at 10 m/s. How fast is the string running out when 200 m of string is out? Solution: $x^2 + 100^2 = s^2$. Differentiate: $2x\frac{dx}{dt} = 2s\frac{ds}{dt}$. At $s = 200$, $x = \sqrt{30000} \approx 173.2$. $\frac{ds}{dt} = \frac{x}{s}\frac{dx}{dt} \approx 8.66$ m/s.
2. A balloon rises at 5 ft/s from a point 50 ft from an observer. Find the rate of change of the angle of elevation when the balloon is 30 ft high. Solution: $\tan(\theta) = y/50$. $\sec^2(\theta)\frac{d\theta}{dt} = \frac{1}{50}\frac{dy}{dt}$. At $y = 30$, $\sec^2(\theta) = \frac{3400}{2500} = 1.36$. $\frac{d\theta}{dt} = \frac{5}{50 \cdot 1.36} \approx 0.0735$ rad/s.
3. A conical tank (radius 10 m, height 30 m) is being filled. Find how fast the radius of the water surface is increasing when the depth is 20 m, given $\frac{dh}{dt} = 0.2$ m/s. Solution: By similar triangles, $r = h/3$. $\frac{dr}{dt} = \frac{1}{3}\frac{dh}{dt} \approx 0.0667$ m/s.

**TikZ Diagram:**
- **Idea:** Kite problem diagram: observer at ground, kite at height $y$, string length $s$, horizontal distance $x$.
- **Implementation:** Draw right triangle with vertical side $y$, horizontal side $x$, hypotenuse $s$. Label observer, kite, string, height, and horizontal distance. Add arrow for $dy/dt$ and $ds/dt$.

**Practice Problems:**
1. A 10 ft ladder leans against a wall. The bottom slides away at 1 ft/s. How fast is the angle between the ladder and the wall changing when the bottom is 6 ft from the wall?
2. A baseball diamond is a 90 ft square. A player runs from first to second at 20 ft/s. How fast is the player's distance from home plate changing when 30 ft from first base?
3. A plane flies at 5 km altitude directly over a telescope. When the plane is 10 km from the telescope, its speed is 800 km/h. How fast is the angle of elevation changing?

**Study Tips:**
- Label your diagram clearly with all variables and their rates.
- Convert all units to be consistent before solving.

---

### Section 4.2: Maximum and Minimum Values

**Learning Objective:** Students will find absolute and local extrema of functions using the Extreme Value Theorem and critical points.

**Key Definitions / Theorems:**
1. **Absolute Maximum/Minimum:** $f(c)$ is the absolute maximum if $f(c) \geq f(x)$ for all $x$ in the domain.
2. **Local Maximum/Minimum:** $f(c)$ is a local maximum if $f(c) \geq f(x)$ for all $x$ near $c$.
3. **Extreme Value Theorem:** If $f$ is continuous on $[a, b]$, then $f$ has an absolute max and min on $[a, b]$.
4. **Critical Number:** $c$ is a critical number if $f'(c) = 0$ or $f'(c)$ does not exist.
5. **Fermat's Theorem:** If $f$ has a local extremum at $c$ and $f'(c)$ exists, then $f'(c) = 0$.

**Worked Examples:**
1. Find absolute extrema of $f(x) = x^3 - 3x^2 + 1$ on $[-1, 3]$. Solution: $f'(x) = 3x^2 - 6x = 3x(x-2)$. Critical points: $x = 0, 2$. Evaluate: $f(-1) = -1$, $f(0) = 1$, $f(2) = -3$, $f(3) = 1$. Absolute max: 1 at $x = 0$ and $x = 3$; absolute min: -3 at $x = 2$.
2. Find local extrema of $f(x) = x^4 - 4x^3 + 4x^2$. Solution: $f'(x) = 4x^3 - 12x^2 + 8x = 4x(x-1)(x-2)$. Critical points: $0, 1, 2$. First derivative test: sign changes from + to - at $x = 1$ (local max), - to + at $x = 2$ (local min), no change at $x = 0$ (neither).
3. Find the absolute maximum of $f(x) = x - \ln(x)$ on $[0.1, 2]$. Solution: $f'(x) = 1 - 1/x$. Critical point at $x = 1$. $f(0.1) \approx 3.4$, $f(1) = 1$, $f(2) \approx 1.3$. Absolute max at $x = 0.1$.

**TikZ Diagram:**
- **Idea:** Graph of a function with labeled absolute and local maxima/minima, and critical points marked on the x-axis.
- **Implementation:** Plot $f(x) = x^3 - 3x^2 + 1$ on $[-1, 3]$. Mark critical points at $x = 0$ (local max), $x = 2$ (local min). Mark endpoints. Label absolute max and min with dots and coordinates.

**Practice Problems:**
1. Find absolute extrema of $f(x) = \sin(x) + \cos(x)$ on $[0, 2\pi]$.
2. Find critical numbers of $f(x) = x^{2/3}(x-1)^2$.
3. A farmer has 1000 m of fencing and wants to enclose a rectangular field. Find the dimensions that maximize the area.

**Study Tips:**
- Always check endpoints when finding absolute extrema on a closed interval.
- A critical number is where $f'(c) = 0$ or $f'(c)$ does not exist—don't forget the latter!

---

### Section 4.3: The Mean Value Theorem

**Learning Objective:** Students will state, prove, and apply the Mean Value Theorem and understand its connection to Rolle's Theorem.

**Key Definitions / Theorems:**
1. **Rolle's Theorem:** If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there exists $c \in (a, b)$ such that $f'(c) = 0$.
2. **Mean Value Theorem (MVT):** If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists $c \in (a, b)$ such that $f'(c) = \frac{f(b) - f(a)}{b - a}$.
3. **Geometric Meaning:** There is at least one point where the tangent line is parallel to the secant line from $a$ to $b$.
4. **Consequence:** If $f'(x) = 0$ on an interval, then $f$ is constant on that interval.
5. **Consequence:** If $f'(x) > 0$ on $(a, b)$, then $f$ is increasing on $[a, b]$; if $f'(x) < 0$, then $f$ is decreasing.

**Worked Examples:**
1. Verify MVT for $f(x) = x^2$ on $[1, 3]$. Solution: $f$ is continuous and differentiable. $f'(c) = \frac{f(3)-f(1)}{3-1} = \frac{9-1}{2} = 4$. Solve $2c = 4 \Rightarrow c = 2 \in (1, 3)$.
2. Find all $c$ satisfying Rolle's Theorem for $f(x) = \sin(x)$ on $[0, \pi]$. Solution: $f(0) = f(\pi) = 0$. $f'(c) = \cos(c) = 0 \Rightarrow c = \pi/2$.
3. Prove that if $f'(x) \geq 0$ on $[a, b]$, then $f$ is increasing. Solution: For $x_1 < x_2$, MVT gives $f(x_2) - f(x_1) = f'(c)(x_2 - x_1) \geq 0$, so $f(x_2) \geq f(x_1)$.

**TikZ Diagram:**
- **Idea:** Graph of a function on $[a, b]$ with the secant line from $(a, f(a))$ to $(b, f(b))$ and the tangent line at $c$ parallel to it.
- **Implementation:** Plot $f(x) = x^2$ on $[1, 3]$. Draw secant line from $(1, 1)$ to $(3, 9)$. Draw tangent line at $x = 2$ (slope 4), parallel to secant. Label $c$ and the slopes.

**Practice Problems:**
1. Verify MVT for $f(x) = \sqrt{x}$ on $[0, 4]$.
2. Find $c$ in $(1, 4)$ satisfying MVT for $f(x) = x^3 - 3x$.
3. Use MVT to prove that $|\sin(b) - \sin(a)| \leq |b - a|$.

**Study Tips:**
- MVT requires continuity on $[a, b]$ and differentiability on $(a, b)$—check both conditions.
- The value $c$ is not unique; there may be multiple points satisfying the theorem.

---

### Section 4.4: How Derivatives Affect the Shape of a Graph

**Learning Objective:** Students will use first and second derivatives to determine intervals of increase/decrease and concavity, and classify critical points.

**Key Definitions / Theorems:**
1. **Increasing/Decreasing:** $f$ is increasing on $I$ if $f'(x) > 0$ for all $x \in I$; decreasing if $f'(x) < 0$.
2. **First Derivative Test:** If $f'$ changes from positive to negative at $c$, $f$ has a local max at $c$; if negative to positive, local min; if no sign change, neither.
3. **Concavity:** $f$ is concave up on $I$ if $f''(x) > 0$; concave down if $f''(x) < 0$.
4. **Inflection Point:** A point where concavity changes.
5. **Second Derivative Test:** If $f'(c) = 0$ and $f''(c) > 0$, local min; if $f''(c) < 0$, local max; if $f''(c) = 0$, test is inconclusive.

**Worked Examples:**
1. Analyze $f(x) = x^3 - 3x^2 + 1$. Solution: $f'(x) = 3x^2 - 6x = 3x(x-2)$. Critical points: $0, 2$. $f''(x) = 6x - 6$. At $x = 0$, $f''(0) = -6 < 0$ (local max, $f(0) = 1$). At $x = 2$, $f''(2) = 6 > 0$ (local min, $f(2) = -3$). Inflection point at $x = 1$.
2. Find intervals of increase/decrease and concavity for $f(x) = x e^{-x}$. Solution: $f'(x) = e^{-x}(1-x)$. Increasing on $(-\infty, 1)$, decreasing on $(1, \infty)$. Local max at $x = 1$. $f''(x) = e^{-x}(x-2)$. Concave down on $(-\infty, 2)$, concave up on $(2, \infty)$. Inflection point at $x = 2$.
3. Sketch $f(x) = x^4 - 4x^3 + 4x^2$. Solution: Factor $f(x) = x^2(x-2)^2$. Critical points at $x = 0, 1, 2$. $f(0) = 0$ (neither), $f(1) = 1$ (local max), $f(2) = 0$ (neither, flat inflection).

**TikZ Diagram:**
- **Idea:** Comprehensive graph showing increasing/decreasing intervals, local extrema, concave up/down regions, and inflection points for a polynomial.
- **Implementation:** Plot $f(x) = x^3 - 3x^2 + 1$. Add arrows indicating increasing/decreasing intervals. Shade concave up region. Mark local max at $x = 0$ and local min at $x = 2$. Label inflection point at $x = 1$.

**Practice Problems:**
1. Find local extrema of $f(x) = \ln(x^2 + 1)$.
2. Determine concavity of $f(x) = x^4 - 4x^3 + 6x^2$.
3. Find inflection points of $f(x) = x^5 - 5x^4 + 10x^3$.

**Study Tips:**
- Always check second derivative for concavity and inflection points.
- Use a sign chart for $f'$ and $f''$ to organize your analysis.

---

### Section 4.5: Curve Sketching

**Learning Objective:** Students will synthesize first and second derivative information to sketch accurate graphs of functions.

**Key Definitions / Theorems:**
1. **Domain:** The set of all $x$ for which $f(x)$ is defined.
2. **Intercepts:** Find $x$-intercepts (solve $f(x) = 0$) and $y$-intercept ($f(0)$).
3. **Symmetry:** Even function: $f(-x) = f(x)$ (y-axis symmetry). Odd function: $f(-x) = -f(x)$ (origin symmetry).
4. **Asymptotes:** Vertical ($x = a$ where $\lim_{x \to a} f(x) = \pm\infty$), horizontal ($y = L$), slant ($y = mx + b$).
5. **Curve Sketching Checklist:** Domain, intercepts, symmetry, asymptotes, intervals of increase/decrease, local extrema, concavity/inflection points, sketch.

**Worked Examples:**
1. Sketch $f(x) = \frac{x}{x-1}$. Solution: Domain: $x \neq 1$. Vertical asymptote $x = 1$. Horizontal asymptote $y = 1$. No intercepts. $f'(x) = \frac{-1}{(x-1)^2} < 0$ everywhere—decreasing. $f''(x) = \frac{2}{(x-1)^3}$. Concave up for $x > 1$, concave down for $x < 1$.
2. Sketch $f(x) = x^4 - 4x^2$. Solution: Factor $x^2(x^2 - 4) = x^2(x-2)(x+2)$. Intercepts at $0, \pm 2$. Even function. $f'(x) = 4x^3 - 8x = 4x(x^2 - 2)$. Critical points: $0, \pm\sqrt{2}$. $f''(x) = 12x^2 - 8$. Inflection points at $x = \pm\sqrt{2/3}$.
3. Sketch $f(x) = \ln(x^2 + 1)$. Solution: Domain: all real. Even function. $f(0) = 0$. $f'(x) = \frac{2x}{x^2+1}$. Increasing for $x > 0$, decreasing for $x < 0$. $f''(x) = \frac{2(1-x^2)}{(x^2+1)^2}$. Inflection points at $x = \pm 1$.

**TikZ Diagram:**
- **Idea:** Complete curve sketch of a function showing all key features: intercepts, critical points, inflection points, and asymptotes.
- **Implementation:** Plot $f(x) = x^4 - 4x^2$ with axes. Mark x-intercepts with dots, local max at $x = 0$, local min at $x = \pm 2$, inflection points. Add grid lines or annotations for clarity.

**Practice Problems:**
1. Sketch $f(x) = \frac{x^2}{x^2 - 1}$.
2. Sketch $f(x) = x\sqrt{x+1}$.
3. Sketch $f(x) = e^{-x^2}$ (Gaussian bell curve).

**Study Tips:**
- Follow the checklist systematically to ensure no features are missed.
- Use symmetry to reduce the amount of work needed.

---

### Section 4.6: Optimization Problems

**Learning Objective:** Students will set up and solve optimization problems using derivatives to find maximum or minimum values in applied contexts.

**Key Definitions / Theorems:**
1. **Optimization Problem:** Find the maximum or minimum value of a quantity subject to constraints.
2. **Strategy:** (1) Understand the problem, (2) draw diagram, (3) assign variables, (4) express quantity to optimize, (5) express constraint, (6) substitute to get single-variable function, (7) find critical points, (8) verify answer.
3. **Closed Interval Method:** Check critical points and endpoints for absolute extrema.
4. **Theorem:** Absolute extrema on a closed interval occur at critical numbers or endpoints.
5. **Physical Constraints:** Dimensions, volumes, areas must be positive.

**Worked Examples:**
1. Find the rectangle of maximum area inscribed in a semicircle of radius $R$. Solution: Place rectangle with width $2x$ and height $y = \sqrt{R^2 - x^2}$. Area $A(x) = 2x\sqrt{R^2 - x^2}$. $A'(x) = \frac{2(R^2 - 2x^2)}{\sqrt{R^2 - x^2}} = 0$ when $x = R/\sqrt{2}$. Maximum area is $R^2$.
2. Find the dimensions of a cylindrical can of volume $500$ cm³ that minimizes surface area. Solution: $V = \pi r^2 h = 500 \Rightarrow h = \frac{500}{\pi r^2}$. $S = 2\pi r^2 + 2\pi rh = 2\pi r^2 + \frac{1000}{r}$. $S'(r) = 4\pi r - \frac{1000}{r^2} = 0 \Rightarrow r^3 = \frac{250}{\pi}$. $h = 2r$. Optimal can has height equal to diameter.
3. Find the point on $y = x^2$ closest to $(0, 3)$. Solution: Minimize distance squared: $D(x) = x^2 + (x^2 - 3)^2$. $D'(x) = 2x + 4x(x^2 - 3) = 2x(2x^2 - 5) = 0$ at $x = 0, \pm\sqrt{5/2}$. Minimum at $x = \pm\sqrt{5/2}$, $y = 5/2$.

**TikZ Diagram:**
- **Idea:** Rectangle inscribed in a semicircle, showing the optimization problem geometrically.
- **Implementation:** Draw semicircle of radius $R$. Draw rectangle inside with width $2x$ and height $y$. Label $x$, $y$, $R$, and angle $\theta$ if helpful. Show the area function and critical point visually.

**Practice Problems:**
1. Find the dimensions of a Norman window (rectangle topped by a semicircle) with perimeter 30 ft that maximizes area.
2. Find two numbers whose sum is 20 whose product of squares is maximized.
3. A cone-shaped paper cup is made from a circular sector of radius $R$. Find the angle that maximizes the cup's volume.

**Study Tips:**
- Express everything in terms of a single variable before differentiating.
- Always check that your solution makes physical sense (e.g., positive dimensions).
- Maximize the square of distance or area when possible to simplify algebra.

---

### Section 4.7: Antiderivatives

**Learning Objective:** Students will find antiderivatives (indefinite integrals) of basic functions and understand the general antiderivative formula.

**Key Definitions / Theorems:**
1. **Antiderivative:** $F$ is an antiderivative of $f$ on $I$ if $F'(x) = f(x)$ for all $x \in I$.
2. **General Antiderivative:** If $F$ is an antiderivative of $f$, then the general antiderivative is $F(x) + C$ where $C$ is any constant.
3. **Power Rule (Antiderivative Form):** $\int x^n dx = \frac{x^{n+1}}{n+1} + C$ for $n \neq -1$.
4. **Exponential and Logarithmic Antiderivatives:** $\int e^x dx = e^x + C$, $\int \frac{1}{x} dx = \ln|x| + C$.
5. **Theorem:** If $F' = f$ and $G' = f$, then $F(x) = G(x) + C$ for some constant $C$.

**Worked Examples:**
1. Find the general antiderivative of $f(x) = 3x^2 - 4x + 5$. Solution: $F(x) = x^3 - 2x^2 + 5x + C$.
2. Find the antiderivative of $f(x) = \frac{1}{x^2 + 1}$. Solution: $F(x) = \arctan(x) + C$.
3. Find $F(x)$ such that $F'(x) = \cos(x) + e^x$ and $F(0) = 2$. Solution: $F(x) = \sin(x) + e^x + C$. $F(0) = 0 + 1 + C = 2 \Rightarrow C = 1$. So $F(x) = \sin(x) + e^x + 1$.

**TikZ Diagram:**
- **Idea:** Family of antiderivative curves $F(x) + C$ for a given derivative function $f(x) = 2x$.
- **Implementation:** Plot several curves: $y = x^2 + C$ for $C = -2, 0, 2, 4$ on the same axes. These all have the same derivative $f(x) = 2x$. Label one as the specific antiderivative satisfying an initial condition.

**Practice Problems:**
1. Find the general antiderivative of $f(x) = \frac{1}{\sqrt{x}}$.
2. Find $F(x)$ if $F'(x) = \sec^2(x) + x^{-1}$ and $F(\pi/4) = 0$.
3. Find the antiderivative of $f(x) = 3x^2 e^{x^3}$.

**Study Tips:**
- Always add $+C$ for indefinite integrals.
- Check your answer by differentiating the antiderivative.

---

## Chapter 4: INTEGRATION

### Section 4.9: Integration by Parts

**Learning Objective:** Students will apply integration by parts to evaluate integrals of products of functions and derive the reduction formula.

**Key Definitions / Theorems:**
1. **Integration by Parts Formula:** $\int u \, dv = uv - \int v \, du$.
2. **Derivation:** Based on the product rule for differentiation: $\frac{d}{dx}[uv] = u\frac{dv}{dx} + v\frac{du}{dx}$.
3. **LIATE Rule:** Choose $u$ from Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential (in that order of priority).
4. **Definite Integral Version:** $\int_a^b u \, dv = [uv]_a^b - \int_a^b v \, du$.
5. **Tabular Integration:** A shortcut for repeated integration by parts using a table.

**Worked Examples:**
1. Evaluate $\int x e^x dx$. Solution: Let $u = x$, $dv = e^x dx$. Then $du = dx$, $v = e^x$. $\int x e^x dx = x e^x - \int e^x dx = x e^x - e^x + C = e^x(x-1) + C$.
2. Evaluate $\int \ln(x) dx$. Solution: Let $u = \ln(x)$, $dv = dx$. Then $du = \frac{1}{x}dx$, $v = x$. $\int \ln(x) dx = x\ln(x) - \int dx = x\ln(x) - x + C$.
3. Evaluate $\int_0^{\pi/2} x \sin(x) dx$. Solution: $u = x$, $dv = \sin(x)dx$. $du = dx$, $v = -\cos(x)$. $= [-x\cos(x)]_0^{\pi/2} + \int_0^{\pi/2} \cos(x)dx = 0 + [\sin(x)]_0^{\pi/2} = 1$.

**TikZ Diagram:**
- **Idea:** Visual representation of integration by parts as rearranging areas under curves.
- **Implementation:** Draw a rectangle with sides $u$ and $v$. Show that area $uv$ is split into $\int u dv$ and $\int v du$. Use colors to distinguish the two parts and the overlap.

**Practice Problems:**
1. Evaluate $\int x^2 e^x dx$.
2. Find $\int \arctan(x) dx$.
3. Evaluate $\int x \ln(x) dx$.

**Study Tips:**
- LIATE is a guideline, not a strict rule—practice develops intuition.
- For definite integrals, apply the limits after integrating by parts.

---

### Section 5.1: Areas and Distances

**Learning Objective:** Students will approximate areas using Riemann sums and understand the relationship between area and integration.

**Key Definitions / Theorems:**
1. **Area Problem:** Find the area under a curve $y = f(x)$ from $x = a$ to $x = b$.
2. **Riemann Sum:** $S = \sum_{i=1}^n f(x_i^*)\Delta x$ where $\Delta x = \frac{b-a}{n}$ and $x_i^*$ is a sample point in the $i$-th subinterval.
3. **Left/Right Endpoint Approximations:** $L_n = \sum_{i=0}^{n-1} f(x_i)\Delta x$, $R_n = \sum_{i=1}^{n} f(x_i)\Delta x$.
4. **Definite Integral (Limit of Riemann Sums):** $\int_a^b f(x)dx = \lim_{n \to \infty} \sum_{i=1}^n f(x_i^*)\Delta x$.
5. **Net Area:** The definite integral equals the net signed area (area above x-axis minus area below).

**Worked Examples:**
1. Express $\int_0^2 (x^2 + 1)dx$ as a limit of Riemann sums using right endpoints. Solution: $\lim_{n \to \infty} \sum_{i=1}^n \left(\left(\frac{2i}{n}\right)^2 + 1\right)\frac{2}{n}$.
2. Use the Midpoint Rule with $n = 4$ to estimate $\int_0^2 x^2 dx$. Solution: $\Delta x = 0.5$. Midpoints: $0.25, 0.75, 1.25, 1.75$. $M_4 = 0.5[(0.25)^2 + (0.75)^2 + (1.25)^2 + (1.75)^2] = 0.5[0.0625 + 0.5625 + 1.5625 + 3.0625] = 2.625$.
3. Evaluate $\int_0^3 (2x + 1)dx$ by interpreting as area. Solution: Area of trapezoid with heights $f(0) = 1$, $f(3) = 7$, width 3. Area $= \frac{1+7}{2} \cdot 3 = 12$.

**TikZ Diagram:**
- **Idea:** Visualization of Riemann sums (left, right, midpoint) approximating the area under a curve.
- **Implementation:** Plot $f(x) = x^2$ on $[0, 2]$. Draw rectangles for left, right, and midpoint approximations with $n = 4$. Use different colors for each method. Label $\Delta x$ and heights.

**Practice Problems:**
1. Express $\int_1^3 \sqrt{x} dx$ as a limit of Riemann sums.
2. Use $L_4$ and $R_4$ to estimate $\int_0^2 (x^2 + 1)dx$ and determine if the estimate is an underestimate or overestimate.
3. Find $\int_0^2 (3x + 2)dx$ using geometric area formulas.

**Study Tips:**
- The more rectangles, the better the approximation—limits make it exact.
- For increasing functions, left sums underestimate and right sums overestimate (and vice versa for decreasing).

---

### Section 5.2: The Definite Integral

**Learning Objective:** Students will define the definite integral formally, apply properties of integrals, and evaluate integrals using the Fundamental Theorem of Calculus.

**Key Definitions / Theorems:**
1. **Definite Integral:** $\int_a^b f(x)dx$ represents the net signed area under $y = f(x)$ from $a$ to $b$.
2. **Properties:** $\int_a^b c dx = c(b-a)$; $\int_a^b [f \pm g]dx = \int_a^b f dx \pm \int_a^b g dx$; $\int_a^b c f(x)dx = c \int_a^b f(x)dx$.
3. **Additivity:** $\int_a^b f(x)dx + \int_b^c f(x)dx = \int_a^c f(x)dx$.
4. **Comparison Theorem:** If $f(x) \leq g(x)$ on $[a, b]$, then $\int_a^b f(x)dx \leq \int_a^b g(x)dx$.
5. **Mean Value Theorem for Integrals:** If $f$ is continuous on $[a, b]$, there exists $c \in [a, b]$ such that $f(c) = \frac{1}{b-a}\int_a^b f(x)dx$.

**Worked Examples:**
1. Evaluate $\int_0^2 (3x^2 - 2x + 1)dx$ using the Fundamental Theorem of Calculus (FTC). Solution: $[x^3 - x^2 + x]_0^2 = (8 - 4 + 2) - 0 = 6$.
2. Interpret $\int_{-1}^2 |x| dx$ as area. Solution: $= \int_{-1}^0 (-x)dx + \int_0^2 x dx = [-\frac{x^2}{2}]_{-1}^0 + [\frac{x^2}{2}]_0^2 = \frac{1}{2} + 2 = \frac{5}{2}$.
3. Use the comparison theorem to show $\int_0^1 e^{-x^2} dx < 1$. Solution: Since $e^{-x^2} \leq 1$ on $[0, 1]$, the integral is $\leq \int_0^1 1 dx = 1$.

**TikZ Diagram:**
- **Idea:** Signed area visualization showing positive area above the x-axis and negative area below for a function crossing the axis.
- **Implementation:** Plot $f(x) = x^2 - 1$ on $[-2, 2]$. Shade area above axis (positive) and below axis (negative) in different colors. Show that the definite integral from $-2$ to $2$ is the net signed area.

**Practice Problems:**
1. Evaluate $\int_0^1 (4x^3 - 2x)dx$.
2. Interpret $\int_{-2}^1 (x+1)dx$ as net area and compute it.
3. If $\int_0^3 f(x)dx = 7$ and $\int_3^5 f(x)dx = -2$, find $\int_0^5 f(x)dx$.

**Study Tips:**
- The definite integral is a number (net area), not a function.
- When a function changes sign, split the integral at the x-intercepts.

---

### Section 5.3: The Fundamental Theorem of Calculus

**Learning Objective:** Students will state and apply both parts of the Fundamental Theorem of Calculus to evaluate definite integrals and understand the relationship between differentiation and integration.

**Key Definitions / Theorems:**
1. **FTC Part 1:** If $f$ is continuous on $[a, b]$, then $g(x) = \int_a^x f(t)dt$ is continuous on $[a, b]$ and differentiable on $(a, b)$, with $g'(x) = f(x)$.
2. **FTC Part 2:** If $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$ on $[a, b]$, then $\int_a^b f(x)dx = F(b) - F(a)$.
3. **Net Change Theorem:** $\int_a^b F'(x)dx = F(b) - F(a)$ represents the net change in $F$ from $a$ to $b$.
4. **Derivative of an Integral with Variable Upper Limit:** $\frac{d}{dx}\left[\int_a^x f(t)dt\right] = f(x)$.
5. **Derivative of an Integral with Variable Limits:** $\frac{d}{dx}\left[\int_{g(x)}^{h(x)} f(t)dt\right] = f(h(x))h'(x) - f(g(x))g'(x)$.

**Worked Examples:**
1. Use FTC Part 2 to evaluate $\int_0^{\pi/2} \cos(x)dx$. Solution: $[\sin(x)]_0^{\pi/2} = 1 - 0 = 1$.
2. Find $\frac{d}{dx}\left[\int_0^{x^2} \sqrt{1+t^3} dt\right]$. Solution: $f(t) = \sqrt{1+t^3}$, upper limit $h(x) = x^2$. By chain rule: $\sqrt{1+(x^2)^3} \cdot 2x = 2x\sqrt{1+x^6}$.
3. A particle moves with velocity $v(t) = t^2 - 4t + 3$. Find displacement from $t = 0$ to $t = 3$. Solution: $\int_0^3 (t^2 - 4t + 3)dt = [\frac{t^3}{3} - 2t^2 + 3t]_0^3 = 9 - 18 + 9 = 0$.

**TikZ Diagram:**
- **Idea:** Area accumulation function $A(x) = \int_0^x f(t)dt$ showing how the area builds up as the upper limit increases.
- **Implementation:** Plot $f(t) = t$ on $[0, 3]$. Show $A(x)$ as a separate function below or to the side. For several values of $x$, shade the accumulated area $\int_0^x t dt$ and show that $A(x) = x^2/2$. Connect $A(x)$ values on the graph.

**Practice Problems:**
1. Evaluate $\int_1^4 \frac{1}{x} dx$.
2. Find $\frac{d}{dx}\left[\int_x^{x^2} e^t dt\right]$.
3. If $F(x) = \int_0^x \sin(t^2)dt$, find $F'(0)$ and $F'(\sqrt{\pi})$.

**Study Tips:**
- FTC Part 2 turns integration into evaluation of antiderivatives—easy!
- FTC Part 1 shows that integration and differentiation are inverse operations.

---

### Section 5.4: Indefinite Integrals and the Net Change Theorem

**Learning Objective:** Students will evaluate indefinite integrals using basic integration rules and apply the Net Change Theorem to physical problems.

**Key Definitions / Theorems:**
1. **Indefinite Integral:** $\int f(x)dx = F(x) + C$ where $F'(x) = f(x)$.
2. **Net Change Theorem:** $\int_a^b F'(x)dx = F(b) - F(a)$ is the net change in $F$ over $[a, b]$.
3. **Basic Integration Rules:** Power rule, constant multiple, sum/difference, exponential, trigonometric.
4. **Integration of $1/x$:** $\int \frac{1}{x}dx = \ln|x| + C$.
5. **Position, Velocity, Acceleration:** $s(t) = \int v(t)dt$, $v(t) = \int a(t)dt$.

**Worked Examples:**
1. Evaluate $\int (4x^3 - 6x^2 + 2x - 1)dx$. Solution: $x^4 - 2x^3 + x^2 - x + C$.
2. A particle has velocity $v(t) = 3t^2 - 12t + 9$. Find displacement from $t = 0$ to $t = 4$ and total distance traveled. Solution: Displacement: $\int_0^4 v(t)dt = [t^3 - 6t^2 + 9t]_0^4 = 4$. Total distance: find when $v(t) = 0$ (at $t = 1, 3$). Distance $= \int_0^1 v dt + \int_1^3 |v| dt + \int_3^4 v dt = 2 + 4 + 4 = 10$.
3. Water leaks from a tank at rate $r(t) = 100e^{-0.5t}$ gal/min. How much water leaks in first 10 minutes? Solution: $\int_0^{10} 100e^{-0.5t}dt = 100\left[\frac{e^{-0.5t}}{-0.5}\right]_0^{10} = 200(1 - e^{-5}) \approx 199.3$ gal.

**TikZ Diagram:**
- **Idea:** Velocity-time graph showing displacement as net area and total distance as total area.
- **Implementation:** Plot $v(t) = 3t^2 - 12t + 9$ on $[0, 4]$. Shade positive areas (above axis) and negative areas (below axis) in different colors. Label displacement (net) and total distance (sum of absolute areas).

**Practice Problems:**
1. Find the most general antiderivative of $f(x) = \frac{1}{x^2} - \frac{2}{x^3}$.
2. A car accelerates from rest at $a(t) = 6t$ m/s² for 5 seconds. Find velocity and displacement.
3. If $F(x) = \int_0^x (t^2 + 1)dt$, find $F(2)$ and verify $F'(x) = x^2 + 1$.

**Study Tips:**
- Displacement considers direction (signed); distance traveled is always positive (absolute value).
- Always include $+C$ for indefinite integrals.

---

### Section 5.5: The Substitution Rule

**Learning Objective:** Students will apply $u$-substitution to evaluate definite and indefinite integrals, including trigonometric and exponential substitutions.

**Key Definitions / Theorems:**
1. **Substitution Rule:** If $u = g(x)$ is differentiable and $f$ is continuous on the range of $u$, then $\int f(g(x))g'(x)dx = \int f(u)du$.
2. **Definite Integral Substitution:** $\int_a^b f(g(x))g'(x)dx = \int_{g(a)}^{g(b)} f(u)du$.
3. **Trigonometric Substitution:** $\sqrt{a^2 - x^2} \to x = a\sin(\theta)$; $\sqrt{a^2 + x^2} \to x = a\tan(\theta)$; $\sqrt{x^2 - a^2} \to x = a\sec(\theta)$.
4. **Substitution for Rational Functions:** Partial fraction decomposition complements substitution.
5. **Symmetry:** For even $f$ on $[-a, a]$, $\int_{-a}^a f(x)dx = 2\int_0^a f(x)dx$; for odd $f$, the integral is 0.

**Worked Examples:**
1. Evaluate $\int x\sqrt{x^2+1}dx$. Solution: Let $u = x^2+1$, $du = 2x dx$. $\int \sqrt{u}\frac{du}{2} = \frac{1}{2} \cdot \frac{2}{3}u^{3/2} + C = \frac{1}{3}(x^2+1)^{3/2} + C$.
2. Evaluate $\int_0^{\pi/2} \sin(x)\cos(x)dx$. Solution: Let $u = \sin(x)$, $du = \cos(x)dx$. $\int_0^1 u du = [\frac{u^2}{2}]_0^1 = \frac{1}{2}$.
3. Evaluate $\int \frac{1}{x\sqrt{x^2-1}}dx$ for $x > 1$. Solution: Use substitution $x = \sec(\theta)$, $dx = \sec(\theta)\tan(\theta)d\theta$. Integral becomes $\int \frac{1}{\sec(\theta)\tan(\theta)} \cdot \sec(\theta)\tan(\theta)d\theta = \int d\theta = \theta + C = \arcsec(x) + C$.

**TikZ Diagram:**
- **Idea:** Right triangle for trigonometric substitution showing relationships between $x$, $a$, and $\theta$.
- **Implementation:** For $x = a\tan(\theta)$, draw a right triangle with opposite side $x$, adjacent side $a$, hypotenuse $\sqrt{x^2+a^2}$. Label all sides and angle $\theta$. Show that $\theta = \arctan(x/a)$.

**Practice Problems:**
1. Evaluate $\int x e^{x^2} dx$.
2. Find $\int_0^1 \frac{x}{\sqrt{1-x^2}} dx$.
3. Evaluate $\int \cos^2(x) dx$ using substitution and trig identity.

**Study Tips:**
- The substitution must account for the differential $du$ in the integral.
- For definite integrals, you can change limits or substitute back and evaluate at original limits.

---

## Chapter 5: APPLICATIONS OF INTEGRATION

### Section: Area Between Curves

**Learning Objective:** Students will compute the area between two curves by integrating the difference of the functions and apply this to real-world problems.

**Key Definitions / Theorems:**
1. **Area Between Two Curves:** If $f(x) \geq g(x)$ on $[a, b]$, then area $= \int_a^b [f(x) - g(x)]dx$.
2. **Intersection Points:** Find $a$ and $b$ by solving $f(x) = g(x)$.
3. **Integration with Respect to $y$:** If curves are given as $x = f(y)$ and $x = g(y)$, area $= \int_c^d [f(y) - g(y)]dy$.
4. **Theorem:** The area between curves is always positive; ensure the top function minus the bottom function is non-negative.
5. **Piecewise Regions:** Split the integral at points where the curves cross or where the top/bottom relationship changes.

**Worked Examples:**
1. Find the area between $y = x^2$ and $y = x + 2$. Solution: Intersection: $x^2 = x+2 \Rightarrow x^2 - x - 2 = 0 \Rightarrow (x-2)(x+1) = 0$, so $x = -1, 2$. Area $= \int_{-1}^2 [(x+2) - x^2]dx = [\frac{x^2}{2} + 2x - \frac{x^3}{3}]_{-1}^2 = \frac{9}{2}$.
2. Find the area enclosed by $y = \sin(x)$ and $y = \cos(x)$ between $x = 0$ and $x = \pi/2$. Solution: They cross at $x = \pi/4$. Area $= \int_0^{\pi/4} (\cos x - \sin x)dx + \int_{\pi/4}^{\pi/2} (\sin x - \cos x)dx = [\sin x + \cos x]_0^{\pi/4} + [-\cos x - \sin x]_{\pi/4}^{\pi/2} = 2\sqrt{2} - 2 \approx 0.828$.
3. Find the area between $x = y^2$ and $x = 2y + 3$. Solution: Intersection: $y^2 = 2y + 3 \Rightarrow y^2 - 2y - 3 = 0 \Rightarrow (y-3)(y+1) = 0$, so $y = -1, 3$. Area $= \int_{-1}^3 [(2y+3) - y^2]dy = [y^2 + 3y - \frac{y^3}{3}]_{-1}^3 = \frac{32}{3}$.

**TikZ Diagram:**
- **Idea:** Region between two curves shaded, with intersection points marked and vertical/horizontal slices indicated.
- **Implementation:** Plot $y = x^2$ and $y = x+2$ on the same axes. Shade the region between them from $x = -1$ to $x = 2$. Mark intersection points with dots and coordinates. Add a vertical slice to show the integration element $(f(x) - g(x))dx$.

**Practice Problems:**
1. Find the area enclosed by $y = x^3$ and $y = x$.
2. Find the area between $y = e^x$ and $y = x^2$ from $x = 0$ to $x = 1$.
3. Find the area enclosed by $y^2 = x$ and $y = x - 2$.

**Study Tips:**
- Always sketch the region first to identify the top and bottom curves (or left and right).
- When in doubt, solve for $x$ in terms of $y$ and integrate with respect to $y$.

---

### Section: Volumes by Disks

**Learning Objective:** Students will compute volumes of solids of revolution using the disk method and washer method.

**Key Definitions / Theorems:**
1. **Disk Method (Rotation about x-axis):** If $y = f(x) \geq 0$ on $[a, b]$, the volume of the solid obtained by rotating $y = f(x)$ about the x-axis is $V = \pi \int_a^b [f(x)]^2 dx$.
2. **Disk Method (Rotation about y-axis):** If $x = f(y) \geq 0$ on $[c, d]$, $V = \pi \int_c^d [f(y)]^2 dy$.
3. **Washer Method:** If the region between $y = f(x)$ and $y = g(x)$ ($f \geq g \geq 0$) is rotated about the x-axis, $V = \pi \int_a^b ([f(x)]^2 - [g(x)]^2)dx$.
4. **Theorem:** The volume is the integral of cross-sectional area perpendicular to the axis of rotation.
5. **General Formula:** $V = \int_a^b A(x)dx$ where $A(x)$ is the cross-sectional area.

**Worked Examples:**
1. Find the volume of the solid obtained by rotating $y = \sqrt{x}$ from $x = 0$ to $x = 4$ about the x-axis. Solution: $V = \pi \int_0^4 (\sqrt{x})^2 dx = \pi \int_0^4 x dx = \pi [\frac{x^2}{2}]_0^4 = 8\pi$.
2. Find the volume when the region between $y = x^2$ and $y = \sqrt{x}$ is rotated about the x-axis. Solution: Intersection at $x = 0, 1$. Washer method: $V = \pi \int_0^1 (x - x^4)dx = \pi [\frac{x^2}{2} - \frac{x^5}{5}]_0^1 = \frac{3\pi}{10}$.
3. Find the volume when the region bounded by $y = x$, $y = 0$, $x = 1$, $x = 2$ is rotated about the y-axis. Solution: Using shells (or disks with respect to $y$): $V = \pi \int_1^2 (2^2 - 1^2)dy$? No, better with disks about y-axis: $x = y$ for $y \in [0, 1]$, $x = 2$ for $y \in [1, 2]$... actually simpler with cylindrical shells: $V = 2\pi \int_1^2 x(x)dx$? Let me redo: Region is trapezoid. Rotate about y-axis. Using shells: $V = 2\pi \int_1^2 x(x)dx$? No, height is $y = x$? Wait, region bounded by $y = x$, $y = 0$, $x = 1$, $x = 2$. So for $x \in [1, 2]$, $y$ goes from $0$ to $x$. Shells: $V = 2\pi \int_1^2 x \cdot x dx = 2\pi [\frac{x^3}{3}]_1^2 = \frac{14\pi}{3}$.

**TikZ Diagram:**
- **Idea:** Solid of revolution generated by rotating a curve around the x-axis, showing a 3D-like perspective with the generating curve and disks.
- **Implementation:** Draw the x-axis and the curve $y = f(x)$ above it. Draw several circular disks perpendicular to the x-axis at different $x$ values. Show the 3D shape with perspective lines connecting the disks. Label radius $f(x)$ and thickness $dx$.

**Practice Problems:**
1. Find the volume generated by rotating $y = 1/x$ from $x = 1$ to $x = 2$ about the x-axis.
2. Find the volume when the region bounded by $y = \sin(x)$, $y = 0$, $x = 0$, $x = \pi$ is rotated about the x-axis.
3. Find the volume of the solid obtained by rotating the region bounded by $y = x^2$ and $y = 0$ from $x = 0$ to $x = 1$ about the y-axis using disks.

**Study Tips:**
- Always sketch the region and axis of rotation before setting up the integral.
- For washers, remember: outer radius squared minus inner radius squared.

---

### Section: Volumes by Cylindrical Shells

**Learning Objective:** Students will compute volumes of solids of revolution using the cylindrical shell method, especially when the disk method is difficult.

**Key Definitions / Theorems:**
1. **Cylindrical Shell Method:** If a region is rotated about the y-axis, the volume is $V = 2\pi \int_a^b x f(x) dx$ (for rotation about y-axis, where $f(x)$ is the height).
2. **Shell Method (General):** $V = 2\pi \int_a^b (\text{radius})(\text{height})dx$ or $dy$.
3. **Rotation about x-axis:** $V = 2\pi \int_c^d y g(y) dy$ where $x = g(y)$.
4. **Rotation about vertical line $x = k$:** $V = 2\pi \int_a^b |x - k| f(x) dx$.
5. **Comparison:** Shells are often easier when rotating vertical strips about a vertical axis, or when integrating with respect to the other variable would require solving for $y$ in terms of $x$.

**Worked Examples:**
1. Find the volume when the region under $y = \sqrt{x}$ from $x = 0$ to $x = 4$ is rotated about the y-axis. Solution: Using shells: $V = 2\pi \int_0^4 x\sqrt{x}dx = 2\pi \int_0^4 x^{3/2}dx = 2\pi [\frac{2}{5}x^{5/2}]_0^4 = \frac{128\pi}{5}$.
2. Find the volume of the solid obtained by rotating the region bounded by $y = x^2$ and $y = 0$ from $x = 0$ to $x = 1$ about the line $x = 2$. Solution: Radius $= 2 - x$, height $= x^2$. $V = 2\pi \int_0^1 (2-x)x^2 dx = 2\pi [\frac{2x^3}{3} - \frac{x^4}{4}]_0^1 = \frac{5\pi}{6}$.
3. Find the volume when the region bounded by $y = x$ and $y = x^2$ is rotated about the x-axis. Solution: Using shells with respect to $y$: $x = y$ and $x = \sqrt{y}$ for $y \in [0, 1]$. Radius $= y$, height $= \sqrt{y} - y$. $V = 2\pi \int_0^1 y(\sqrt{y} - y)dy = 2\pi [\frac{2}{5}y^{5/2} - \frac{y^3}{3}]_0^1 = \frac{2\pi}{15}$.

**TikZ Diagram:**
- **Idea:** Cylindrical shell generated by rotating a vertical strip around the y-axis, showing radius and height.
- **Implementation:** Draw the y-axis and a vertical strip at position $x$ with width $dx$ and height $f(x)$. Show it rotating to form a cylindrical shell. Label inner radius $x$, outer radius $x + dx$, height $f(x)$. Add annotations for the shell method formula.

**Practice Problems:**
1. Find the volume when the region under $y = 1/x$ from $x = 1$ to $x = 2$ is rotated about the y-axis.
2. Find the volume of the solid obtained by rotating the region bounded by $y = x^2$ and $y = 2x$ about the y-axis.
3. Use the shell method to find the volume of the solid obtained by rotating $y = \sin(x)$ from $x = 0$ to $x = \pi$ about the y-axis.

**Study Tips:**
- If rotating about a vertical axis, use shells (integrate with respect to $x$).
- If rotating about a horizontal axis, use shells (integrate with respect to $y$).
- Shells often avoid the need to solve for the inverse function.

---

## Summary Table

| Chapter | Title | Sections |
|---------|-------|----------|
| 1 | LIMITS | 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7 |
| 2 | DERIVATIVES | 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11 |
| 3 | APPLICATIONS OF THE DERIVATIVE | 3.11, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7 |
| 4 | INTEGRATION | 4.9, 5.1, 5.2, 5.3, 5.4, 5.5 |
| 5 | APPLICATIONS OF INTEGRATION | Area Between Curves, Volumes (Disks), Volumes (Shells) |

**Total Sections: 35**

---

## Implementation Notes

1. **MathJax Configuration:** Ensure MathJax is configured to support `$...$` for inline math, `$$...$$` or `\[...\]` for display math, and AMSmath environments (`\begin{align}`, `\begin{equation}`, etc.).
2. **TikZ/pgfplots:** All TikZ code should be wrapped in `\begin{tikzpicture}...\end{tikzpicture}`. For plots, use `\begin{tikzpicture}\begin{axis}...\end{axis}\end{tikzpicture}`. Include necessary libraries (`\usetikzlibrary{...}`, `\pgfplotsset{compat=1.18}`).
3. **Navigation:** Each section should have links to previous/next sections and a table of contents for the chapter.
4. **Interactivity:** Consider using `pgfplots` with `\addplot+[domain=...]` for interactive feel, and allow SVG rendering if MathJax + TikZ performance is an issue.
5. **Accessibility:** Provide alt-text descriptions for diagrams and ensure LaTeX is readable by screen readers via MathJax's accessibility features.
6. **Cross-References:** Use labels and references (`\label{}`, `\ref{}`, `\autoref{}`) for theorems, equations, and sections.
7. **Practice Problem Solutions:** Include a toggle or separate page for solutions to practice problems.
8. **Study Tips Sidebar:** Render study tips in a distinct visual style (e.g., a colored box or callout).
