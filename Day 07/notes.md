# Day 07 — Deriveratives and All Rules

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Derivatives · [Source: 1.png](1.png)

**Derivatives** *(underlined)* — **Pg 1**

*(boxed in blue)* **Definition of Derivative**
*Def: $f' = \lim\limits_{h\to 0}\dfrac{f(x+h)-f(x)}{h}$*

**1) Find the derivative using the definition.**

**a)** $f(x) = \sqrt{3x-4} = f(x) = \lim\limits_{h\to 0}\dfrac{\sqrt{3(x+h)-4}-\sqrt{3x-4}}{h}$

*Multiply by conjugate*

$$f'(x) = \lim_{h\to 0}\frac{\left(\sqrt{3(x+h)-4}-\sqrt{3x-4}\right)\left(\sqrt{3(x+h)-4}+\sqrt{3x-4}\right)}{h\left(\sqrt{3(x+h)-4}+\sqrt{3x-4}\right)}$$

$$f'(x) = \lim_{h\to 0}\frac{3x+3h-4-3x+4}{h\left(\sqrt{3(x+h)-4}+\sqrt{3x-4}\right)}$$

$$f'(x) = \lim_{h\to 0}\frac{3}{h\left(\sqrt{3(x+h)-4}+\sqrt{3x-4}\right)} = \frac{3}{\sqrt{3x-4}+\sqrt{3x-4}}$$

**$f'(x) = \dfrac{3}{2\sqrt{3x-4}}$** *(boxed)*

**b)** $f(x) = \dfrac{5}{4x+1} = \lim\limits_{h\to 0}\dfrac{\frac{5}{4(x+h)+1}-\frac{5}{4x+1}}{h}$

$LCD = (4x+h+1)(4x+1)$

$$f'(x) = \lim_{h\to 0}\frac{5(4x+1+1)-5(4(x+h)+1)}{(4x+h+1)(4x+1)}$$

$$f'(x) = \lim_{h\to 0}\frac{20x+5-20x-20h-5}{h(4x+h+1)(4x+1)}$$

$$f'(x) = \lim_{h\to 0}\frac{-20h}{h(4x+h+1)(4x+1)} = \frac{-20}{(4x+h+1)(4x+1)}$$

**$f'(x) = \dfrac{-20}{(4x+1)^2}$** *(boxed)*

**2) Find each derivative using derivative rules.**

**a)** $f(x) = 3x^4 - 7x^2 + 3x$

*Power Rule + Constant Multiple Rule*

**$f'(x) = 12x^3 - 14x + 3$** *(boxed)*

**b)** $f(x) = 4x^5 - 20x^2 + 5$

*Power Rule + Constant Multiple Rule*

**$f'(x) = 20x^4 - 40x$** *(boxed)*

**c)** $f(x) = \sqrt{x} - 5x^2$

$f(x) = x^{1/2} - 5x^2$

$f'(x) = \frac{1}{2}x^{-1/2} - 10x$

$f'(x) = \frac{1}{2\sqrt{x}} - 10x$

**$f'(x) = \dfrac{1}{2\sqrt{x}} - 10x$** *(boxed)*

**d)** $f(x) = 3x + \dfrac{7}{x^3}$

$f(x) = 3x + 7x^{-3}$

$f'(x) = 3 - 21x^{-4}$

**$f'(x) = 3 - \dfrac{21}{x^4}$** *(boxed)*

**e)** $f(x) = \sqrt[3]{x^5} + 2x^2 - \dfrac{5}{x^2}$

*(curved arrows point from $\sqrt[3]{x^5}$ down to $x^{5/3}$ and from $\frac{5}{x^2}$ down to $5x^{-2}$)*

$x^{5/3} + 2x^{-2} - 5x^{-2}$

$f'(x) = \frac{5}{3}x^{2/3} + 4x - 10x^{-3}$

**$f'(x) = \dfrac{5}{3}\sqrt[3]{x^2} + 4x + \dfrac{10}{x^3}$** *(boxed)*

**F)** $f(x) = \dfrac{3x^5+4x^3-8x}{x^4}$

$f(x) = 3x + 4x^{-1} - 8x^{-3}$

$f'(x) = 3 - 4x^{-2} + 24x^{-4}$

**$f'(x) = 3 - \dfrac{4}{x^2} + \dfrac{24}{x^4}$** *(boxed)*

---

## Page 2 — Derivative Rules · [Source: 2.png](2.png)

**Product Rule:** *(underlined, top left)* — **Derivative Rules** *(centered, bold, underlined)* — **Pg 2** *(top right)*

*(boxed)* **Product Rule: If $f(x) = h(x)\cdot g(x)$ then $f'(x) = h(x)\cdot g'(x) + g(x)\cdot h'(x)$** *(the formula $f'(x) = h(x)\cdot g'(x) + g(x)\cdot h'(x)$ highlighted in light blue)*

**Proof:**

$$\lim_{h\to 0}\frac{f(x+h)-f(x)}{h} = \lim_{h\to 0}\frac{h(x+h)g(x+h)-h(x)g(x)}{h}$$

$$\frac{d}{dx}\left(f(x)\cdot g(x)\right) = \lim_{h\to 0}\frac{h(x+h)g(x+h)+h(x+h)g(x)-h(x+h)g(x)-h(x)g(x)}{h}$$

$$\frac{d}{dx}\left(f(x)\cdot g(x)\right) = \lim_{h\to 0}\frac{h(x+h)g(x+h)-hg(x)}{h} + \lim_{h\to 0}\frac{h(x+h)g(x)-h(x)g(x)}{h}$$

$$\frac{d}{dx}\left(f(x)\cdot g(x)\right) = \lim_{h\to 0} h(x+h)\frac{g(x+h)-g(x)}{h} + \lim_{h\to 0} g(x)\frac{h(x+h)-h(x)}{h}$$

$$\frac{d}{dx}\left(f(x)\cdot g(x)\right) = h(x)g'(x) + g(x)h'(x)$$ *(with $h(x)g'(x) + g(x)h'(x)$ highlighted in light blue)*

**Examples** *(underlined)*

**Ex.** $f(x) = \left(3x^5-7x+2\right)\left(4x^2+8x\right)$ — with $h(x)$ labeled above $\left(3x^5-7x+2\right)$ and $g(x)$ labeled above $\left(4x^2+8x\right)$

Find $f'(x)$:

$f'(x) = \left(3x^5-7x+2\right)\left(8x+8\right) + \left(4x^2+8x\right)\left(15x^4-7\right)$ *(with $\left(8x+8\right)$ and $\left(15x^4-7\right)$ highlighted in light blue)*

**Ex.** $f(x) = \left(4x^3-2x^2+9x\right)\left(\sqrt{x}\right) = \left(4x^3-2x^2+9x\right)\left(x^{\frac{1}{2}}\right)$ — with $h(x)$ labeled above $\left(4x^3-2x^2+9x\right)$ and $g(x)$ labeled above $\left(x^{\frac{1}{2}}\right)$

Find $f'(x)$:

$f'(x) = \left(4x^3-2x^2+9x\right)\left(\frac{1}{2}x^{-\frac{1}{2}}\right) + \left(x^{\frac{1}{2}}\right)\left(12x^2-4x+9\right)$

$f'(x) = \left(4x^3-2x^2+9x\right)\left(\frac{1}{2}x^{-\frac{1}{2}}\right) + \left(x^{\frac{1}{2}}\right)\left(12x^2-4x+9\right)$ *(second line with $\left(\frac{1}{2}x^{-\frac{1}{2}}\right)$ and $\left(12x^2-4x+9\right)$ highlighted in light blue)*

---

## Page 3 — Derivative Rules · [Source: 3.png](3.png)

**Derivative Rules** *(top left)* — **Pg 3.** *(top right)*

*(boxed)* **Quotient Rule: If $f(x) = \dfrac{h(x)}{g(x)}$, then $f'(x) = \dfrac{g(x)h'(x)-h(x)g'(x)}{(g(x))^2}$.**

*(boxed)* **Definition:** $f'(x) = f'(x) = \dfrac{h'(x)}{g'(x)}$, then $\dfrac{h(x)h'(x)-h(x)g'(x)}{(g(x))^2}$

**Proof**

**Step 1** *(label boxed)* — *(highlighted in light blue)* Definition: $f'(x) = \lim\limits_{h\to 0}\dfrac{f(x+h)-f(x)}{h}$

$$f'(x) = \lim_{h\to 0}\frac{\frac{h(x+h)}{g(x+h)}-\frac{h(x)}{g(x)}}{h}$$

**Step 2** *(label boxed)* — *(highlighted in light blue)* Multiply by LCD $g(x+h)g(x)$

$$f'(x) = \lim_{h\to 0}\frac{\frac{h(x+h)g(x+h)g(x)}{g(x+h)}-\frac{h(x)g(x+h)g(x)}{g(x)}}{h\cdot g(x+h)g(x)}$$

$$f'(x) = \lim_{h\to 0}\frac{h(x+h)g(x)-h(x)g(x+h)}{h\cdot g(x+h)g(x)}$$

**Step 3** *(label boxed)* — *(highlighted in light blue)* Add and subtract $h(x)g(x)$ in the numerator

$$f'(x) = \lim_{h\to 0}\frac{h(x+h)g(x)-h(x)g(x)+h(x)g(x)-h(x)g(x+h)}{h\cdot g(x+h)g(x)}$$

**Step 4** *(label boxed)* — *(highlighted in light blue)* Split the limit

$$f'(x) = \lim_{h\to 0}\frac{h(x+h)g(x)-h(x)g(x)}{h\cdot g(x+h)g(x)} + \lim_{h\to 0}\frac{h(x)g(x+h)-h(x)g(x)}{h\cdot g(x+h)g(x)}$$

**Step 5** *(label boxed)* — *(highlighted in light blue)* Group terms

$$f'(x) = \left(\lim_{h\to 0}\frac{h(x+h)-h(x)}{h}\right)\frac{g(x)}{h(x+h)g(x)} - h(x)\left(\lim_{h\to 0}\frac{g(x+h)-g(x)}{h}\right)\frac{1}{g(x+h)g(x)}$$

**Step 6** *(label boxed)* — *(highlighted in light blue)* Evaluate limits

**Key Concept: Recognize Derivative Definitions**

*(boxed in green)* $\lim\limits_{h\to 0}\dfrac{h(x+h)-h(x)}{h} = h'(x)$ *(boxed in green)* $\lim\limits_{h\to 0}\dfrac{g(x+h)-g(x)}{h} = g'(x)$

$$f'(x) = g(x)\cdot\frac{h'(x)}{(h(x))^2} - h(x)\cdot\frac{g'(x)}{(g(x))^2}$$

**Conclusion**

*(boxed in blue)* $f'(x) = \dfrac{g(x)h'(x)-h(x)g'(x)}{(g(x))^2}$ **Proven** *(sparkle/star icon at right)*

---

## Page 4 — Quotient Rule Examples · [Source: 4.png](4.png)

**Quotient Rule Examples** Pg. 4

### Example 1

Find $f'(x)$ for:

$$f(x) = \frac{3x^2 + 5}{4x - 3}$$

**Let...**

$h(x) = 3x^2 + 5$

$g(x) = 4x - 3$

**Quotient Rule Formula**

$$f'(x) = \frac{g(x)h'(x) - h(x)g'(x)}{(g(x))^2}$$

$$f'(x) = \frac{(4x - 3)(6x + 5) - (3x^2 + 5)(4)}{(4x - 3)^2}$$

### Example 2

Find $f'(x)$ for:

$$f(x) = \frac{7x^3 + 3x^2}{5x^2 + 8x - 5}$$

**Let...**

$h(x) = 7x^3 + 3x^2$

$g(x) = 5x^2 + 8x - 5$

**Quotient Rule Formula**

$$f'(x) = \frac{g(x)h'(x) - h(x)g'(x)}{(g(x))^2}$$

$$f'(x) = \frac{(5x^2 + 8x - 5)(2x^2 + 6x) - (7x^3 + 3x^2)(10x + 8)}{(5x^2 + 8x - 5)^2}$$

---

## Page 5 — Derivative Rules · [Source: 5.png](5.png)

**Derivative Rules** Page 5

**Definition:**

If $f(x) = g(h(x))$ then $f'(x) = g'(h(x)) \cdot h'(x)$.

### Example 1

$f(x) = (3x^4 + 9x^2)^{10}$

$h(x) = 3x^4 + 9x^2$

$g(x) = x^{10}$

$$f'(x) = 10(3x^4 + 9x^2)^9 \cdot (12x^3 + 18x)$$

### Example 2

$f(x) = \sqrt[4]{4x^3 - 10x} = (4x^3 - 10x)^{\frac{1}{3}}$

$h(x) = 4x^3 - 10x$

$g(x) = x^{\frac{1}{3}}$

$$f'(x) = \frac{1}{3}(4x^3 - 10x)^{-\frac{2}{3}} \cdot (12x^2 - 10)$$

or

$$f'(x) = \frac{12x^2 - 10}{3\sqrt[4]{(4x^3 - 10x)^2}}$$

$f(x) = (5x - 3)^4 \cdot (x^2 + 10x)$

*Product Rule*

To find "derivative of" $(5x - 3)^4$ we need chain rule.

$$f'(x) = (5x-3)^4 \cdot (2x+10) + (x^2+10x) \cdot 4(5x-3)^3 \cdot 5$$

*Chain Rule*

$$f'(x) = \left[(5x-3)^4 \cdot (2x+10)\right] + \left[(x^2+10x) \cdot (4(5x-3)^3 \cdot 5)\right]$$

*Product Rule Application*

---

## Page 6 — Chain Rule & Transcendental Functions · [Source: 6.png](6.png)

**CALCULUS NOTES: CHAIN RULE & TRANSCENDENTAL FUNCTIONS** Pg. 6

**Example: Chain Rule with Quotient Inside**

$$f(x) = \left(\frac{3x - 5}{12x + 7}\right)^9$$

* Chain Rule with quotient inside *

**Derivative $f'(x)$:**

$$f'(x) = 9\left(\frac{3x - 5}{12x + 7}\right)^8 \cdot \frac{(12x + 7)(3) - (3x - 5)(12)}{(12x + 7)^2}$$

**Derivatives of Exponential and Log functions**

**1.** If $f(x) = e^x$, then $f'(x) = e^x$

EX. $f(x) = e^{x^2}$ *Using Chain rule with $h(x) = x^2$ and $g(x) = e^x$*

$g(x) = e^x$

$$f'(x) = e^{x^2} \cdot 2x$$

EX. $f(x) = e^{3x^3 - 7x} = f'(x) = e^{3x^3 - 7x} \cdot (9x^2 - 7)$

**2.** If $f(x) = a^x$ where 'a' is any positive constant, then

$$f'(x) = a^x \cdot \ln(a)$$

EX. $f(x) = 2^x$ EX. $f(x) = 5^{x^2 + 4}$

$$f'(x) = 2^x \cdot \ln(2)$$ $$f'(x) = 5^{x^2 + 4} \cdot \ln(5) \cdot (2x + 4)$$

**3.** If $f(x) = \ln(x)$, then $f'(x) = \frac{1}{x}$

EX. $f(x) = \ln(3x + 1)$ EX. $f(x) = \ln(3x^2 + 4x)$

$$f'(x) = \frac{1}{3x + 1} \cdot 3 = \boxed{\frac{3}{3x + 1}}$$

$$f'(x) = \frac{1}{3x^2 + 4x} \cdot (6x + 4) = \frac{6x + 4}{3x^2 + 4x}$$

---

## Page 7 — Derivatives of Logarithmic Functions · [Source: 7.png](7.png)

**4.) Derivatives of Logarithmic Functions** *(teal)*

If $f(x) = \log_a(x)$ where "$a$" is any positive constant, then $\underline{f'(x) = \frac{1}{x \ln(a)}}$

Ex. $f(x) = \log_3(x)$ then $\underline{f'(x) = \frac{1}{x \ln(3)}}$

$$\underline{f'(x) = \frac{1}{x \ln(3)}}$$

---

**Rules for Trig-functions - Derived** *(teal)*

**1.)** *(teal)* $f(x) = \sin(x)$ then $f'(x) = \cos(x)$

**2.)** *(teal)* $f(x) = \cos(x)$ then $f'(x) = -\sin(x)$

**3.)** *(green)* $f(x) = \tan(x)$ then $f'(x) = \sec^2(x)$

**4.)** *(green)* $f(x) = \cot(x)$ then $f'(x) = -\csc^2(x)$ **[Corrected to include squared symbol]** *(boxed in green)*

**5.)** *(teal)* $f(x) = \sec(x)$ then $f'(x) = \sec(x) \cdot \tan(x)$

**6.)** *(teal)* $f(x) = \csc(x)$ then $f'(x) = -\csc(x) \cdot \cot(x)$

---

## Page 8 — Rules of Differentiation · [Source: 8.png](8.png)

**Rules of Differentiation**

**Constant Rule** *(blue)*
If $c$ is a real number (constant), then $\frac{d}{dx}(c) = 0$

**Power Rule** *(green)*
$\frac{d}{dx}(x^n) = nx^{n-1}$, $n$ is a real number and $x > 0$

**Constant Multiple Rule** *(orange)*
$\frac{d}{dx}[c \cdot f(x)] = c \cdot f'(x)$, $c$ is a constant

**Sum and Difference Rules** *(purple)*
$\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$

**Product Rule** *(teal)*
$\frac{d}{dx}[f(x) \cdot g(x)] = f'(x) \cdot g(x) + f(x) \cdot g'(x)$

**Quotient Rule** *(red)*
$\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{g(x)f'(x) - f(x)g'(x)}{[g(x)]^2}$

**Chain Rule** *(yellow)*
$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$
