# Day 04 — One Sided Limits & Infinite Limits

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — FIN Each Limit Analytically · [Source: 1.png](1.png)

**FIN** Each Limit Analytically — *Pg. 1*

**1.** *(margin: boxed* $0/0$*)*

$$\lim_{x\to 5}\frac{x^2+2x-35}{x^2-25}=\left(\frac{x^2+7x-5x-35}{(x+5)(x-5)}\right)=\frac{x(x+7)-5(x+7)}{(x-5)(x+5)}=\frac{(x-5)(x+7)}{(x-5)(x+5)}$$

*(gray note, top right, with arrows pointing to* $x^2+7x-5x-35$ *and to* $x(x+7)-5(x+7)$*):* **\* Factor out (x+7)**

*(the matching* $(x-5)$ *factors in numerator and denominator are crossed out in red)*

$$=\frac{x+7}{x+5}=\frac{(5)+7}{(5)+5}=\frac{12}{10}=\frac{6}{5}$$

Answer: **6/5** *(boxed in blue)*

**2.** *(margin: boxed* $0/0$*)*

$$\lim_{x\to 3}\frac{x^2-9}{2-\sqrt{x+1}}\cdot\frac{2+\sqrt{x+1}}{2+\sqrt{x+1}}=\frac{(x-3)(x+3)(2+\sqrt{x+1})}{\left(2-\sqrt{x+1}\right)\left(2+\sqrt{x+1}\right)}=\frac{(x-3)(x+3)(2+\sqrt{x+1})}{4-x-1}=\frac{(x-3)(x+3)(2+\sqrt{x+1})}{3-x}$$

$$=\frac{(x-3)(x+3)(2+\sqrt{x+1})}{3-x}=(3+3)\left(-(\,2+\sqrt{x+1})\right)=-6-2+\sqrt{4}=-6.2+2=$$

$$-6\cdot 4=-24$$

Answer: **−24** *(boxed in blue)*

**3.** *(margin: boxed* $0/0$*)*

$$\lim_{x\to 0}\frac{\frac{1}{x-4}+\frac{1}{4}}{x}\qquad \text{LCD}: 4(x-4)$$

$$=\frac{\frac{1}{x-4}+\frac{1}{4}}{x}\cdot\frac{4(x-4)}{4(x-4)}=\frac{4x+4}{4x(x-4)}-\frac{4x}{4x(x-4)}$$

*(both numerators* $4x+4$ *and* $4x$ *are crossed out in red)*

$$=\frac{1}{4(x-4)}=\frac{1}{4(0-4)}=\frac{1}{4x-16}=\frac{1}{-16}$$

Answer: **1/−16** *(boxed in blue)*

**4.** *(margin: boxed* $\infty-\infty$*)*

$$\lim_{x\to 1}\left(\frac{1}{x-1}-\frac{2}{x^2-1}\right)=\left(\frac{1}{x-1}-\frac{2}{x^2-1}\right)$$

*(gray note below):* **\*LCD: (x−1)(x+1)**

$$=\frac{x+1}{(x-1)(x+1)}-\frac{2}{(x-1)(x+1)}=\frac{x+1-2}{(x-1)(x+1)}=\frac{x-1}{(x-1)(x+1)}=\frac{1}{x+1}=\frac{1}{2}$$

*(the matching* $(x-1)$ *factors are crossed out in red)*

Answer: **1/2** *(boxed in blue)*

**5.**

$$\lim_{x\to 5}\frac{\sqrt{x+4}-2}{3-\sqrt{x-1}}=\frac{\sqrt{5+4}-2}{3-\sqrt{5-1}}=\frac{\sqrt{9}-2}{3-\sqrt{4}}=\frac{3-2}{3-2}=\frac{1}{1}=1$$

Answer: **1** *(boxed in blue)*

*(orange starburst callout with arrow pointing up at problem 5):***\* This is a Reminder + Always plug in FIRST!**

---

## Page 2 — Example 1: Lim of Rational Functions · [Source: 2.png](2.png)

**Example 1: Lim of Rational Functions** *(blue heading)* — *Pg. 2*

Ex. $\lim_{x\to 0}\left(\frac{4}{x^2+x}-\frac{4}{x}\right)$ — *(speech-bubble callout):* Plug in: $\frac{4}{0^2+0}=\frac{4}{0}=\infty-\infty$ **Indeterminate.**

Ans.

$$\lim_{x\to 0}\frac{4}{x(x+1)}-\frac{4}{x}\qquad \text{LCD} = x(x+1)$$

*(LCD = x(x+1) is highlighted in green)*

$$=\frac{4}{x(x+1)}-\frac{4}{x}\cdot\frac{x+1}{x+1}=\frac{4}{x(x+1)}-\frac{4(x+1)}{x(x+1)}=\frac{4-4x-4}{x(x+1)}$$

$$=\frac{-4x}{x(x+1)}=\frac{-4}{(0)+1}=\frac{-4}{1}=-4$$

Answer: **−4** *(boxed in green)*

**Example 2: Lim with Radicals and Conjugates** *(blue heading)*

Ex.

$$\lim_{x\to 2}\frac{\sqrt{3x-2}-x}{x^2-4}=\frac{\sqrt{3(2)}-(2)}{(2)^2-4}=\frac{\sqrt{4}-2}{4-4}=\frac{2-2}{4-4}=\frac{0}{0}$$

**Indeterminate** *(bold)*

Ans.

$$\lim_{x\to 2}\frac{\sqrt{3x-2}-x}{x^2-4}$$

*(mint-green rounded note with arrow pointing to the work):* Multiply Numerator conjugate

$$=\frac{\sqrt{3x-2}-x}{x^2-4}\cdot\frac{\sqrt{3x-2}+x}{\sqrt{3x-2}+x}=\frac{3x-2+x\sqrt{3x-2}-x\sqrt{3x-2}-x^2}{(x+2)(x-2)\left(\sqrt{3x-2}+x\right)}$$

*(the two middle radical terms* $x\sqrt{3x-2}$ *and* $-x\sqrt{3x-2}$ *are crossed out in red)*

$$=\frac{-\left(x^2-3x+2\right)}{(x-2)\left(\sqrt{3x-2}+x\right)}=\frac{-(x-1)(x-2)}{(x-2)\left(\sqrt{3x-2}+x\right)}=\frac{-(x-1)}{(x+2)\left(\sqrt{3x-2}+x\right)}$$

*(the matching* $(x-2)$ *factors are crossed out in red)*

*(gray note with arrow pointing down):* Plug in

$$=\frac{-(2-1)}{(2+2)\left(\sqrt{3(2)-2}+2\right)}=\frac{-1}{4\left(\sqrt{4}+2\right)}=\frac{-1}{4(2+2)}=\frac{-1}{4(4)}=\frac{-1}{16}$$

Answer: **−1/16** *(boxed in green)*

---

## Page 3 — INFINITE LIMITS · [Source: 3.png](3.png)

**INFINITE LIMITS** *(double-bordered box title)* — *Pg. 3*

- As a function approaches the location of a **Vertical Asymptote**, one of several things will happen.
- **Each one-sided Limit** will go to Limit will go to **infinity** ($\infty$) or **negative infinity** ($-\infty$) depending on whether the curve goes up or down on that side of the Asymptote.
- **If the** **one-sided limits limits** agree, we can say that the overall Limit tends to $\infty$ or $-\infty$. Otherwise its **DNE**.

*(green rounded callout box):* **Reminder:** Vertical Asymptotes occur at values of 'x' for which $f(x)=\frac{a}{0},\ a\neq 0$, as well as in **Log functions** and some **Trig functions**.

EX.

$$\lim_{x\to 3}\frac{x+4}{x-3}\qquad \text{Plug in: } \frac{3+4}{3-3}=\frac{7}{0}$$

*(the words "Plug in:" are highlighted in green; stacked as "Plug / in:")*

Number over '0' means vertical Asymptote.

Evaluate one-sided Limits Numerically, or from graph

| $x$ | $f(x)$ |
| ---- | ---- |
| 2.9 | $-69$ |
| 2.99 | $-699$ |
| 2.999 | $-6999$ |

$$\lim_{x\to 3^+}\frac{x+4}{x-3}=-\infty$$

| $x$ | $f(x)$ |
| ---- | ---- |
| 3.1 | $71$ |
| 3.01 | $701$ |
| 3.001 | $7001$ |

$$\lim_{x\to 3^-}\frac{x+4}{x-3}=\infty$$

*(the two tables sit side by side with the limit statements placed between/beside them)*

**SO.** *(underlined)*

**Graph description:**
- x-y coordinate plane; the y-axis is labeled with $\infty$ at the top and $-\infty$ at the bottom, with tick marks at $4$, $2$, $-2$, $-4$; the x-axis is labeled $-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6$.
- A dashed vertical line at $x=3$ (vertical asymptote).
- Left branch: a curve entering from the far left (arrowhead on the left end) at about $y\approx 2$–$3$, gradually decreasing, then plunging steeply downward just left of $x=3$, falling to $-\infty$ with an arrowhead pointing down below the x-axis at the dashed line.
- Right branch: descending from $+\infty$ at the top of the dashed line (arrowhead pointing up just right of $x=3$), curving down and flattening out to about $y\approx 2$ as it moves right toward $x=6$, with an arrowhead at the right end.
- Annotation at the right of the graph: $\lim_{x\to 3}\dfrac{x+4}{x-3}=$ **DNE** *(boxed in pink)*

$$\lim_{x\to 3}\frac{x+4}{x-3}=\text{DNE}$$

*(bottom of page;* **DNE** *(boxed in blue))*

---

## Page 4 — Vertical Asymptote · [Source: 4.png](4.png)

*(top-right corner: Pg. 4)*

**Ex.** $\lim\limits_{x \to 0} \dfrac{x+2}{x^2}$ *(limit expression highlighted in light blue)* plug in, $\dfrac{0+2}{0^2} = \dfrac{2}{0}$ **Vertical Asymptote.** *(white text on dark teal box)*

**Ans.**

| **x** | **f(x)** |
|------:|---------:|
| -0.1 | 190 |
| -0.01 | 19900 |
| -0.001 | 1999000 |

$\lim\limits_{x \to 0^-} \dfrac{x+2}{x^2} = \infty$

| **x** | **f(x)** |
|------:|---------:|
| 0.1 | 210 |
| 0.01 | 20100 |
| 0.001 | 2001000 |

$\lim\limits_{x \to 0^+} \dfrac{x+2}{x^2} = \infty$

So $\lim\limits_{x \to 0} \dfrac{x+2}{x^2} = \infty$

**Graph description:**
- Black coordinate axes with arrowheads; an extra downward-pointing arrow extends below the $x$-axis along the negative $y$-axis.
- Blue curve of $f(x)=\dfrac{x+2}{x^2}$ drawn in two branches, one on each side of the $y$-axis.
- Both branches rise steeply alongside the $y$-axis, each tipped with an upward-pointing arrow (curve goes to $+\infty$ on both sides of $x=0$): vertical asymptote $x=0$ (dashed-line behavior at the $y$-axis).
- Outward from the origin, both branches flatten and run just above the $x$-axis, ending in a left-pointing arrow (far left) and a right-pointing arrow (far right): horizontal asymptote $y=0$.

### Limits of infinity *(heading highlighted in light blue)*

- Taking a limit as $x \to \pm\infty$ tells us about the **end behavior** of the function.
- If $f(x)$ has a **Horizontal Asymptote,** then the Limit will equal the '**y**' value of that Asymptote.
- If the function **increases or decreases infinitely,** then the Limit will **go to $\infty$ or $-\infty$**
- If the function **oscillates** without closing in on any particular value, then the Limit **'DNE'**.

---

## Page 5 — For Rational Functions · [Source: 5.png](5.png)

*(top-right corner: Pg. 5)*

### For Rational Functions *(title in dark blue, underlined)*

**Formal Method**

**① Divide through by the highest power of 'x' in the denominator.** *(step number in a blue filled circle)*

**② As $x \to \pm\infty$, any term with 'x' in their denominator goes to '0'.** *(step number in a blue filled circle)*

**Ex.** $\displaystyle\lim_{x \to \infty} \frac{5x^2-7x+3}{4x^2+2x-1}$ *(red hand-drawn circle around $4x^2$, the highest-power term in the denominator)*

$$= \frac{\frac{5x^2}{\cancel{x^2}}-\frac{7x}{\cancel{x^2}}+\frac{3}{\cancel{x^2}}}{\frac{4x^2}{\cancel{x^2}}+\frac{2x}{\cancel{x^2}}-\frac{1}{\cancel{x^2}}} = \frac{5-\frac{7}{x}+\frac{3}{x^2}}{4+\frac{2}{x}-\frac{1}{x^2}} \overset{\text{Plug in }0}{\longrightarrow} \frac{5-0+0}{4+0-0} = \boxed{\frac{5}{4}}$$

*(the $x^2$ denominators in the division step are struck out in red; handwritten annotation "Plug in 0" with a small arrow points to the substitution step; final answer $\frac{5}{4}$ in a box)*

---

**Ex.** $\displaystyle\lim_{x \to -\infty} \frac{5x^2+3x+1}{7x^4-2x}$ *(red hand-drawn circle around $7x^4$, the highest-power term in the denominator)*

$$= \frac{\frac{5x^2}{\cancel{x^4}}+\frac{3x}{\cancel{x^4}}+\frac{1}{\cancel{x^4}}}{\frac{7x^4}{\cancel{x^4}}-\frac{2x}{\cancel{x^4}}} = \frac{\frac{5}{x^2}+\frac{3}{x^3}+\frac{1}{x^4}}{7-\frac{2}{x^3}} = \frac{0+0+0}{7-0} = \boxed{\frac{0}{7}}$$

*(the $x^4$ denominators in the division step are struck out in red; final $\frac{0}{7}$ in a box)*

$$\frac{0}{7} = \boxed{0}$$

---

**Ex.** $\displaystyle\lim_{x \to -\infty} \frac{-2x^3+4x^2+3}{2x^2+4x}$ *(red hand-drawn circle around $2x^2$, the highest-power term in the denominator)*

$$= \frac{\frac{-2x^3}{\cancel{x^2}}+\frac{4x^2}{\cancel{x^2}}+\frac{3}{\cancel{x^2}}}{\frac{2x^2}{\cancel{x^2}}+\frac{4x}{\cancel{x^2}}} = \frac{-2x+4+\frac{3}{x^2}}{2+\frac{4}{x}} =$$

$$\frac{-2x+4}{2} = \frac{+}{+} = \boxed{+\infty}$$

*(the $x^2$ denominators in the division step are struck out in red; final $+\infty$ in a box)*

---

## Page 6 — Can Evaluate With Handwaving Rule · [Source: 6.png](6.png)

*(Header right: Pg. 6)*

**Can Evaluate With Handwaving Rule:** *(dark teal heading)*

**Bottom Heavy:** *(teal)* $\lim \to 0$ *(highlighted blue)*

**Ex.**
$$\lim_{x \to \infty} \frac{3x+1}{2x^2+5x+4} = 0$$
— with $2x^2$ in the denominator *(circled in green)*

**Balanced:** *(teal)* Take the **Ratio** *(highlighted yellow)* of the **Leading Coefficients** *(highlighted orange)*

**Ex.**
$$\lim_{x \to -\infty} \frac{(5x^3)+2x+1}{(8x^3)-3x^2} = \frac{5}{8}$$
— with $5x^3$ in the numerator and $8x^3$ in the denominator *(each circled)*

**Top Heavy:** *(teal)* **Limits** *(highlighted orange)* will go to $\infty$ or $-\infty$ depending on **Signs** *(highlighted red)* and **Powers** *(highlighted yellow)* of the **Leading terms** *(highlighted orange)* of the Numerator *(highlighted gray)* and Denominator *(highlighted gray)*

**Ex.**
$$\lim_{x \to -\infty} \frac{3x^2+4x+2}{-5x+3} = \lim_{x \to -\infty} \frac{3x^2}{-5x} = \frac{+\infty}{+\infty} = \boxed{+\infty}$$
— with $3x^2$ in the numerator *(circled)*; final answer $[+\infty]$ *(boxed)*

⚠ *(warning triangle icon; callout box shaded pale gray-green)*

This rule can also be applied to functions involving <u>**Radicals**</u>. Treat the Radical as a **fractional Power** *(red)*.

• **BUT** •

- Be careful of **Signs** *(red)* on Problems involving **even Roots** *(red)* and $x \rightarrow -\infty$ when **Powers** are **balanced.** *(red)*

---

## Page 7 — Limits Involving Infinity · [Source: 7.png](7.png)

# Limits Involving Infinity *(white text on dark banner; header right: Page 7)*

**Ex.**
$$\lim_{x \to \infty} \frac{x^2+3x-\sqrt{9x^4+3x^2}}{2x^2+x} = \underbrace{\frac{x^2 - \sqrt{9x^4}}{2x^2}}_{\text{*(highlighted yellow)}} = \underbrace{\frac{x^2 - 3|x^2|}{2x^2}}_{\text{*(highlighted blue-gray)}} = \frac{-2x^2}{2x^2} = -\frac{2}{2} = \boxed{-1}$$

— with $x^2$ in the numerator and $2x^2$ in the denominator *(each circled)*; final answer $[-1]$ *(boxed)*

**Ex.** *(callout box shaded pale green)*
$$\lim_{x \to -\infty} \frac{\sqrt{25x^6+3x-1}}{8x^3+2x^2+4} = \frac{5|x^3|}{8x^3} = \left[-\frac{5}{8}\right]$$
- "**Positive**" *(bold, with arrow pointing to $|x^3|$ in the numerator)*
- "**Negative as $x \to -\infty$**" *(bold, with arrow pointing to the denominator $8x^3$)*
- Speech-bubble note *(pale blue)*: **'Note:'** Square Root of a Variable is its Absolute Value. Ex. $\sqrt{x^6} = |x^3|$

**Squeeze Theorem** *(heading in orange-shaded box; body shaded pale orange)*

If $g(x) \le f(x) \le h(x)$ for all $x$

and

$$\lim_{x \to c} g(x) = \lim_{x \to c} h(x) = L$$

Then

$$\lim_{x \to c} f(x) = L$$

**Graph description:**

- Standard $x$/$y$ axes (no tick scale shown); vertical axis unlabeled, horizontal axis unlabeled.
- Dashed vertical line at $x = C$, labeled $C$ below the horizontal axis.
- Three solid curves converge to the same point on the dashed line at $x = C$: $h(x)$ *(blue, upper curve)*, $f(x)$ *(black, middle curve)*, $g(x)$ *(orange, lower curve)*.
- Small **open circle** where the curves meet at $x = C$ (point $(C,\,L)$ not filled).
- Curves extend leftward spread apart (blue above, black middle, orange below) and continue rightward past $C$, pinching together through the open circle; labels $h(x)$, $f(x)$, $g(x)$ placed at curve right ends.

**Ex.** *(heading in purple-shaded box)*
$$\lim_{x \to 0} x\sin\left(\tfrac{1}{x}\right)$$

- We can say Sine of anything is between $-1$ and $1$
- $-1 \le \sin\left(\tfrac{1}{x}\right) \le 1$
- Multiply through by '$x$'
- $-x \le x\sin\left(\tfrac{1}{x}\right) \le x$
- **Now Take the Limit**

*(bracketed work to the right of the bullets):*
$$\lim_{x \to 0} -x \le \lim_{x \to 0} x\sin\left(\tfrac{1}{x}\right) \le \lim_{x \to 0} x$$

$$0 \le \lim_{x \to 0} x\sin\left(\tfrac{1}{x}\right) \le 0$$

So, $\displaystyle\lim_{x \to 0} x\sin\left(\tfrac{1}{x}\right) = 0$
