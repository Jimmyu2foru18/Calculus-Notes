# Day 03 — Limits intro
> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Limits continued · [Source: 1.png](1.png)

# Limits continued

*(Entire page is enclosed in a thin rectangular frame; a "Page 1" tab sits at the top right of the frame; a small notebook icon appears at the top-right corner of the sheet.)*

**Limits Continues** *(heading highlighted in tan in source)*

**1.**

**Graph description:**
- Hand-drawn coordinate plane; x-axis ticks labeled −5, −4, −3, −2, −1, 1, 2, 3, 4, 5, 6 with arrows on both ends; y-axis ticks labeled 1, 2, 3, 4 above the x-axis and −2, −4 below, with arrows on both ends.
- Solid segment with an arrowhead at its lower-left end rises from about (−5, −2) and ends at an open circle at about (−3, 0); it passes through roughly (−4, −1) (consistent with answers A–C = −1).
- From that open circle, a dashed U-shaped arc dips below the x-axis (lowest around (−2, −2.5)) and ends at an open circle at about (−1, −2).
- Filled dot at about (−1, −4) with a handwritten label reading "f(x)=1" beside it (best reading of the label; its placement/exact value is unclear), and a short solid segment rises from the dot to the right, ending near an open circle at about (1, −1).
- Dashed segment(s) continue from around (1, −1) rising toward (3, 0).
- Open circle at (3, 0) on the x-axis where two branches cross in an X shape: a solid branch descends from the upper left (about (2, −0.5)) through the open circle and continues steeply down-right to an arrowhead near (5, −4); a dashed branch ascends from the lower left (about (2, −2.5)) up to the open circle.
- Label "f(x)" with a small arrow pointing to the descending right-hand branch.
- Filled dot at (3, 3) labeled "f(x)=2", lying on a vertical dashed line at x = 3 that runs the height of the graph down through the open circle at (3, 0); faint dashed segment(s) also lead from the left toward the point (3, 3).
- Overall behavior: increasing into the open circle at (−3, 0); decreasing along the dashed arc to the open circle at (−1, −2); jump at x = −1 (defined point plotted lower at (−1, −4)); increasing afterward toward the hole at (3, 0) while f(3) = 2 is plotted above it; decreasing branch beyond x = 3.

Find each of the following:

| (a) $\lim_{x \to -4^-} f(x)$ | (b) $\lim_{x \to -4^+} f(x)$ | (c) $\lim_{x \to -4} f(x)$ |
|---|---|---|
| (d) $\lim_{x \to -1^-} f(x)$ | (e) $\lim_{x \to -1^+} f(x)$ | (f) $\lim_{x \to -1} f(x)$ |
| (g) $\lim_{x \to 3^-} f(x)$ | (h) $\lim_{x \to 3^+} f(x)$ | (i) $\lim_{x \to 3} f(x)$ |

*(letters a–i are circled in source)*

Ans.

| A. = -1= | D. = -2 | G. = 0 |
|---|---|---|
| B. = -1 | E. = -4 | H. = 0 |
| C. = -1 | F. DNE | I. = 0 |

*(the trailing "=" after "A. = -1" is reproduced exactly as written in source)*

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

**Evaluating Limits Numerically** *(heading highlighted in tan in source)*

Ex: $\lim_{x \to 1} \dfrac{x^2-1}{x-1}$

How to Solve?

| X | f(x) |
|---|---|
| 0.9 | 1.9 |
| 0.99 | 1.99 |
| 0.999 | 1.999 |
| 0.9999 | 1.9999 |

$\lim_{x \to 1^-} f(x) = 2$

| X | f(x) |
|---|---|
| 1.1 | 2.1 |
| 1.01 | 2.01 |
| 1.001 | 2.001 |
| 1.0001 | 2.0001 |

$\lim_{x \to 1^+} = 2$ *(written without "f(x)" in source)*

- Plug in a series of values for "x", which get closer and closer to 1, from each side to estimate the one sided limits.

\*Why?

- If we plug in x = 1 here, we get $\dfrac{1^2-1}{1-1} = \dfrac{0}{0}$ which is: **Undefined** *(underlined; annotated `"Indeterminate"` in small print above it in source)*

- Since $\lim_{x \to 1^-} f(x) = \lim_{x \to 1^+} f(x) = 2$

> **Calculator Instructions** *(gray box in source)*
>
> $y = \dfrac{(x^2-1)}{x-1}$
>
> 2nd -> Window -> IndPnt -> Ask
>
> input your 'x' to get f(x)

$\boxed{\lim_{x \to 1} f(x) = 2}$ *(result enclosed in a highlighted/tinted box in source)*

---

## Page 2 — Numerical Limits Examples · [Source: 2.png](2.png)

*(Screenshot with black letterbox bars at top and bottom; "Pg. 2" tab at top right; blue vertical accent bar to the left of the first line.)*

Find $\lim_{x \to 0} \dfrac{e^x-1}{x}$ Numerically:

| x | f(x) |
|---|---|
| -1 | 0.6321 |
| -0.1 | 0.9516 |
| -0.01 | 0.995 |
| -0.001 | 0.9995 |

$\lim_{x \to 0^-} f(x) = 1$ *(callout highlighted in blue in source)*

| X | f(x) |
|---|---|
| 1 | 1.7183 |
| .1 | 1.0517 |
| .01 | 1.005 |
| .001 | 1.0005 |

$\lim_{x \to 0^+} f(x) = 1$ *(callout highlighted in blue in source)*

*(arrows lead down from both one-sided results to the combined box:)*

$\lim_{x \to 0} f(x) = 1$ *(boxed; the result 1 colored green in source)*

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

**EX.** *(highlighted in green in source)* Evaluate $\lim_{x \to 0} \dfrac{|\sin(x)|}{x}$ numerically

| x | f(x) |
|---|---|
| -0.1 | -0.9983 |
| -0.01 | -0.9998 |
| -0.001 | -0.999998 |
| -0.0001 | -0.99999998 |

*(table shaded pink/red in source)* $\lim_{x \to 0^-} f(x) = -1$ *(callout highlighted red/pink; −1 in red)*

| x | f(x) |
|---|---|
| 0.1 | 0.9983 |
| 0.01 | 0.9998 |
| 0.001 | 0.999998 |
| 0.0001 | 0.99999998 |

*(x-column header shaded green, body shaded blue in source)* $\lim_{x \to 0^+} f(x) = 1$ *(callout highlighted blue)*

$\lim_{x \to 0^-} f(x) \neq \lim_{x \to 0^+} f(x) = $ **DNE** *(final statement in bold dark red in source)*

---

## Page 3 — Finding Limits Algebraically · [Source: 3.png](3.png)

# Finding Limits Algebraically

> **<u>Theorem</u>**: For any **polynomial**, **rational**, **radical**, **exponential**, **logarithmic**, **Trigonometric**, or **inverse trigonometric function**, if $f(c)$ is defined, then:
>
> $$\boxed{\lim_{x \to c} f(x) = f(c)}$$
>
> *In other words, for most functions ("except piecewise functions"), if the function is defined at a given value of 'x', we can just plug in the value to find the limit.*

*(whole passage enclosed in a rounded light-blue box in source)*

——— **Examples** ———

**Ex. 1** *(tag shaded green; box tinted light green in source)*

$$\lim_{x \to 3} \frac{x^2-5x+2}{x+4} \ \text{then} \ \frac{(3)^2-5(3)+2}{(3)+4} = \frac{9-15+2}{7} = \boxed{-\frac{4}{7}}$$

**Ex. 2** *(tag shaded green; box tinted light green in source)*

$$\lim_{x \to 2} \frac{3x-4^x}{x-1} \ \text{then} \ \frac{3(2)-4^{(2)}}{(2)-1} = \frac{6-16}{1} \qquad \boxed{-10}$$

> **<u>Theorem</u>**: For two functions, $f(x)$ and $g(x)$, if $\lim_{x \to c} f(x)$ and $\lim_{x \to c} g(x)$ both exist, then:
>
> 1.) $\lim_{x \to c} [kf(x)] = k \cdot \lim_{x \to c} f(x)$ for any constant.
>
> 2.) $\lim_{x \to c} (f(x) + g(x)) = \lim_{x \to c} f(x) + \lim_{x \to c} g(x)$
>
> 3.) $\lim_{x \to c} [f(x) - g(x)] = \lim_{x \to c} f(x) - \lim_{x \to c} g(x)$
>
> 4.) $\lim_{x \to c} [f(x) \cdot g(x)] = \left(\lim_{x \to c} f(x)\right) \cdot \left(\lim_{x \to c} g(x)\right)$
>
> 5.) $\lim_{x \to c} \dfrac{f(x)}{g(x)} = \dfrac{\lim_{x \to c} f(x)}{\lim_{x \to c} g(x)} \quad \text{if} \ \lim_{x \to c} g(x) \neq 0.$

*(passage enclosed in a rounded peach/orange box in source)*

---

## Page 4 — Limits & Indeterminate Forms · [Source: 4.png](4.png)

*(page number "4" at top right)*

**CALCULUS: LIMITS & INDETERMINATE FORMS** *(header in blue capitals)*

> **EXAMPLE: LIMIT LAWS**  *(top-right corner of the box: $\lim_{x \to 2}$ Limits)*
>
> **Ex.** If $\lim_{x \to 2} f(x) = 5$ and $\lim_{x \to 2} g(x) = -3$
>
> Find $\lim_{x \to 2} \big(7f(x) - g(x)\big)$
>
> **Final Answer: 38** *(enclosed in a blue-bordered box, placed at the right in source)*
>
> **Ans.**
> $$\lim_{x \to 2} \big(7f(x)-g(x)\big) = 7\lim_{x \to 2} f(x) - \lim_{x \to 2} g(x) = 7 \cdot 5 - (-3) = 35 + 3 = \boxed{38}$$

*(passage enclosed in a light-blue box in source)*

What if $f(x)$ is **Not** defined at $x = c$? *(Not is bold and underlined)*

*(green tab with a scroll icon:* **Theorem** *)*

> **<u>Theorem</u>**: If two functions, $f(x)$ and $g(x)$ are equal at all parts a finite number of points $\{c_1, c_2, \ldots, c_n\}$ then
>
> $$\lim_{x \to c} f(x) = \lim_{x \to c} g(x) \qquad \text{for } \underline{\textbf{All}} \text{ values of 'c'}$$
>
> - even $\{c_1, c_2, \ldots, c_n\}$

*(passage enclosed in a light-green box in source)*

In other words, if we can simplify a function to find a new function which is **Not** undefined at the point we are interested in, we can take the limit of this **New** function and it will be equal to the Limit we are looking for. *(Not is highlighted yellow and underlined; New is highlighted yellow in source)*

**KEY CONCEPT** *(label highlighted yellow in source)*  *(tab at right, with a "? over ÷" icon:* **Indeterminate Forms** *)*

> This can allow us to evaluate the limits where just plugging in $x = c$ gives one of the **<u>indeterminate Forms</u>**.
>
> $$\frac{0}{0}, \quad \frac{\infty}{\infty}, \quad \infty - \infty, \quad 0^0, \quad \infty^0, \quad 1^\infty, \quad 0 \cdot \infty$$

*(passage enclosed in a pale-yellow box in source)*

---

## Page 5 — Indeterminate Forms & Radicals · [Source: 5.png](5.png)

*(page number "5" at top right)*

**LIMITS: INDETERMINATE FORMS (0/0)** *(section header bar shaded blue-gray)*

Example: $\lim_{x \to 1} \dfrac{x^2-1}{x-1}$

> **Plug-in** gives: $\dfrac{1^2-1}{1-1} = \dfrac{0}{0}$ *(green-bordered box; followed by a small red × mark after the bottom 0 in source)*

**Ans.** *(work enclosed in a gray box; the label "Factor it" has a blue arrow pointing down to "cancel out" beneath it)*

$$\lim_{x \to 1} \frac{(x+1)\cancel{(x-1)}}{\cancel{x-1}} = \lim_{x \to 1} (x+1) = 1+1 = \boxed{2}$$

*(the $(x-1)$ factors are struck through with cancellation slashes, with a blue arrow from "cancel out" pointing to them, in source)*

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

**LIMITS: INDETERMINATE FORMS (0/0) (cont.)** *(section header bar shaded blue-gray)*

Example: $\lim_{x \to 3} \dfrac{4x-12}{x^2-x-6}$

> **Plug-in** gives: $\dfrac{4(3)-12}{(3)^2-(3)-6} = \dfrac{12-12}{9-3-6} = \dfrac{0}{0}$ *(green-bordered box; the 0s colored red in source)*

**Ans.** Factor *(blue arrow pointing down to)* cancel out

$$\lim_{x \to 3} \frac{4\cancel{(x-3)}}{\cancel{(x-3)}(x+2)}$$

*(blue arrow pointing down-right to:)*

$$\frac{4}{x+2} = \frac{4}{(3)+2} = \boxed{\frac{4}{5}}$$

*(the $(x-3)$ factors struck through with cancellation slashes in source)*

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

**LIMITS: DEALING WITH RADICALS** *(section header bar shaded peach)*

Example: $\lim_{x \to 4} \dfrac{x-4}{\sqrt{x}-2}$

> **Plug-in** gives: $\dfrac{4-4}{\sqrt{4}-2} = \dfrac{0}{2-2} = \dfrac{0}{0}$ *(green-bordered box; the 0s colored red in source)*

**How to Solve?** *(peach box in source)*

\* *Multiply* numerator &amp; denominator by the **conjugate** of side with the radical.

**Solution:**

$$\lim_{x \to 4} \frac{(x-4)(\sqrt{x}+2)}{(\sqrt{x}-2)(\sqrt{x}+2)}$$

*(blue arrow pointing left to a blue-bordered callout at right:)* **Multiply by conjugate** $\dfrac{\sqrt{x}+2}{\sqrt{x}+2}$

$$= \lim_{x \to 4} \frac{(x-4)(\sqrt{x}+2)}{x+\cancel{2\sqrt{x}}-\cancel{2\sqrt{x}}-4} = \lim_{x \to 4} \frac{(x-4)(\sqrt{x}+2)}{x-4}$$

$$= \lim_{x \to 4} \frac{\cancel{(x-4)}(\sqrt{x}+2)}{\cancel{x-4}}$$

$$= \lim_{x \to 4} (\sqrt{x}+2) = \sqrt{4}+2 = 2+2 = \boxed{4}$$

*(the middle terms $2\sqrt{x}-2\sqrt{x}$ and the $(x-4)$ factors are crossed out with red strikethroughs in source)*

---

## Page 6 — Complex Fractions & Limits · [Source: 6.png](6.png)

*Calculus | Week 1: Complex Fractions & Limits* *(italic serif header)*

**Topic: Complex Fractions in Limits** *(sub-header bar shaded lavender)*

**EX.** $\lim_{x \to 3} \dfrac{x-3}{\frac{1}{9}-\frac{1}{x^2}}$ Plug-in gives us:

$$\frac{3-3}{\frac{1}{9}-\frac{1}{3^2}} = \frac{0}{\frac{1}{9}-\frac{1}{9}} = \frac{0}{0}$$

> Eliminate complex fractions by multiplying by the LCD
>
> LCD = $9x^2$

*(callout highlighted yellow in source)*

**Ans.**

$$\lim_{x \to 3} \frac{(x-3)\,9x^2}{\left(\tfrac{1}{9}-\tfrac{1}{x^2}\right)9x^2} \to \lim_{x \to 3} \frac{9x^2(x-3)}{\tfrac{9x^2}{9}-\tfrac{9x^2}{x^2}} = \lim_{x \to 3} \frac{9x^2(x-3)}{x^2-9} =$$

$$\lim_{x \to 3} \frac{9x^2\cancel{(x-3)}}{\cancel{(x-3)}(x+3)} = \lim_{x \to 3} \frac{9x^2}{x+3} = \frac{9(3)^2}{(3)+3} = \frac{9(9)}{6} = \frac{81}{6} = \boxed{\dfrac{27}{2}}$$

*(the $(x-3)$ factors struck through with diagonal cancellation slashes in source)*

════════════════════════════════════════════════════════════════════ *(double-rule divider in source)*

**EX.** $\lim_{x \to 0} \dfrac{4}{x\sqrt{1+x}} - \dfrac{4}{x}$ Plug-in gives us:

$$\frac{4}{0\sqrt{1+0}} - \frac{4}{0} = \underbrace{\infty - \infty}_{\text{indeterminate}}$$

**What to do?** *(tag highlighted green in source)*

$$\lim_{x \to 0} \frac{4}{x\sqrt{1+x}} - \frac{4}{x} \cdot \frac{\sqrt{1+x}}{\sqrt{1+x}} = \lim_{x \to 0} \frac{4}{x\sqrt{1+x}} - \frac{4\sqrt{1+x}}{x\sqrt{1+x}} = \lim_{x \to 0} \frac{4-4\sqrt{1+x}}{x\sqrt{1+x}}$$

**Now what?** *(tag highlighted green in source)*

Multiply by the conjugate of "$4-4\sqrt{1+x}$". So,

$$\lim_{x \to 0} \frac{4-4\sqrt{1+x}}{x\sqrt{1+x}} \cdot \frac{4+4\sqrt{1+x}}{4+4\sqrt{1+x}} = \lim_{x \to 0} \frac{16+\cancel{16\sqrt{1+x}}-\cancel{16\sqrt{1+x}}-16(1+x)}{x\sqrt{1+x}\left(4+4\sqrt{1+x}\right)} =$$

$$\lim_{x \to 0} \frac{16-16(1+x)}{x\sqrt{1+x}\left(4+4\sqrt{1+x}\right)} = \frac{\cancel{16}-\cancel{16}-16x}{x\sqrt{1+x}\left(4+4\sqrt{1+x}\right)} = \frac{-16\cancel{x}}{\cancel{x}\sqrt{1+x}\left(4+4\sqrt{1+x}\right)} = \frac{-16}{\sqrt{1+x}\left(4+4\sqrt{1+x}\right)} =$$

$$\frac{-16}{\sqrt{1+0}\left(4+4\sqrt{1+0}\right)} = \frac{-16}{\sqrt{1}\,(4+4)} = \frac{-16}{8} = \boxed{-2}$$

*(the repeated $16\sqrt{1+x}$ terms, the $16-16$, and the cancelled $x$ are crossed out with strikethroughs in source; an arc groups the $\sqrt{1+x}$ terms)*

*(printed at bottom right of the page:)* Page 6
