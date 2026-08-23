# Day 08 — High Order Deriveratives and Implicit Differentiation
> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Derivatives · [Source: 1.png](1.png)

# Derivatives

Find the derivative of each function

**1)** $f(x) = \dfrac{5x^2 - 7x}{3x + 9}$

> *(boxed, with annotation "Quotient Rule:")* $\Rightarrow f'(x) = \dfrac{h'(x)}{g(x)} = \dfrac{g(x)h'(x) - h(x)g'(x)}{(g(x))^2}$

- $f'(x) = \dfrac{(3x+9)(10x-7) - (5x^2 - 7x)(3)}{(3x+9)^2}$

**2)** $f(x) = \sqrt[3]{4x^3 - 2x} = (4x^3 - 2x)^{\frac{1}{3}}$ *(annotation: "Chain rule")*

So,

- $f'(x) = \dfrac{1}{3}(4x^3 - 2x)^{-\frac{2}{3}}\cdot(12x^2 - 2)$

or

- $f'(x) = \dfrac{12x^2 - 2}{3\sqrt[3]{(4x^3 - 2x)^2}}$

**3)** $f(x) = e^{5x^2 + 3x + 1}$

- $f'(x) = e^{5x^2 + 3x + 1}\cdot(10x + 3)$

**4)** $f(x) = \ln\left(4x^6 - 3x^2 + 2\right)$

- $f'(x) = \dfrac{1}{4x^6 - 3x^2 + 2}\left(24x^5 - 6x\right)$

or

- $f'(x) = \dfrac{24x^5 - 6x}{4x^6 - 3x^2 + 2}$

**5)** $f(x) = \sin(4x)$

- $f'(x) = \cos(4x)\cdot 4$
- $f'(x) = 4\cos(4x)$

**6)** $f(x) = \sec(3x + 4)$

- $f'(x) = \sec(3x + 4)\cdot\tan(3x + 4)\cdot 3$

**7)** $f(x) = (4x^2 + 5)\cos(2x)$

> *(boxed, with annotation "Product Rule:")* If $f(x) = h(x)g(x) \Rightarrow f'(x) = h(x)g'(x) + g(x)h'(x)$

- $f'(x) = (4x^2 + 5)(-\sin(2x)\cdot 2) + (\cos(2x))(8x)$

**8)** $f(x) = \left(3^{x^2+1}\right)\tan(5x + 4)$

$h(x) = 3^{x^2+1}\cdot\ln(3)(2x)$ *(margin: $g(x) = \tan(5x+4)$, $g'(x) = \sec^2(5x+4)(5)$)*

- $f'(x) = 3^{x^2+1}\cdot\sec^2(5x+4)(5) + \tan(5x + 4)\cdot 3^{x^2+1}\cdot\ln(3)(2x)$

**9)** $f(x) = \dfrac{\csc(4x)}{e^{5x^2}}$

*(bracketed margin work)* $h(x) = \csc(4x)$, $h'(x) = -\csc(4x)\cot(4x)\cdot 4$; $g(x) = e^{5x^2}$, $g'(x) = e^{5x^2}\cdot 10x$

- $f'(x) = \dfrac{e^{5x^2}(-\csc(4x)\cot(4x)\cdot 4) - \csc(4x)\left(e^{5x^2}\cdot 10x\right)}{\left(e^{5x^2}\right)^2}$

**10)** *(boxed in teal)* $f(x) = \sqrt{\ln\left(\sin\left(e^{3x}\right)\right)} = \left(\ln\left(\sin\left(e^{3x}\right)\right)\right)^{\frac{1}{2}}$

*(teal)* $f'(x) = \dfrac{1}{2}\left(\ln\left(\sin\left(e^{3x}\right)\right)\right)^{-\frac{1}{2}}\cdot\left(\dfrac{1}{\sin\left(e^{3x}\right)}\right)\cdot\cos\left(e^{3x}\right)$

*(teal)* $\cdot e^{3x}\cdot 3$

---

## Page 2 — Inverse Trig Functions Derivative Rules · [Source: 2.png](2.png)

# Inverse Trig Functions Derivative Rules *(top right, boxed: "Pg 2.")*

**1.)** *(boxed in light blue)* $f(x) = \sin^{-1}(x)$ then $f'(x) = \dfrac{1}{\sqrt{1-x^2}}$

**2.)** *(boxed in light blue)* $f(x) = \cos^{-1}(x)$ then $f'(x) = \dfrac{-1}{\sqrt{1-x^2}}$

**3.)** *(boxed in light blue)* $f(x) = \tan^{-1}(x)$ then $f'(x) = \dfrac{1}{1+x^2}$

**4.)** *(boxed in light blue)* $f(x) = \cot^{-1}(x)$ then $f'(x) = \dfrac{-1}{1+x^2}$

**5.)** *(boxed in light blue)* $f(x) = \sec^{-1}(x)$ then $f'(x) = \dfrac{1}{|x|\sqrt{x^2-1}}$

**6.)** *(boxed in light blue)* $f(x) = \csc^{-1}(x)$ then $f'(x) = \dfrac{-1}{|x|\sqrt{x^2-1}}$

---

**Ex.)** Find $f'(x)$ if $f(x) = \sin^{-1}(5x^2 + 7x)$

$$f'(x) = \frac{1}{\sqrt{1-(5x^2+7x)^2}}\cdot(10x+7) = \frac{10x+7}{\sqrt{1-(5x^2+7x)^2}}$$ *(result boxed in green)*

**Ex.)** find $f'(x)$ if $f(x) = \cot^{-1}(e^x)$

$$f'(x) = \frac{-1}{1+(e^x)^2}\cdot e^x = \frac{-e^x}{1+(e^x)^2}$$ *(result boxed in green)*

**Ex.)** Find $f'(x)$ if $f(x) = \sec^{-1}(\ln(x))$

$$f'(x) = \frac{1}{|\ln(x)|\sqrt{(\ln(x))^2-1}}\cdot\frac{1}{x} = \frac{1}{x|\ln(x)|\sqrt{(\ln(x))^2-1}}$$ *(result boxed in green)*

---
