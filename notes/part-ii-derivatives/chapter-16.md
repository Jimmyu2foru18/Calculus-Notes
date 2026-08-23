# Chapter 16: Derivatives of Logarithmic and Exponential Functions — Calculus Foundations
[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](../reviews/index.html) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

> Derivatives of exponential, logarithmic, and logarithmic differentiation.

## Lecture Notes

### Derivatives of Exponential Functions

**1.** If $f(x) = e^x$, then $f'(x) = e^x$.

**Example:** $f(x) = e^{x^2}$ (Chain Rule with $h(x) = x^2$)
$$f'(x) = e^{x^2} \cdot 2x$$

**Example:** $f(x) = e^{3x^3 - 7x}$
$$f'(x) = e^{3x^3 - 7x} \cdot (9x^2 - 7)$$

**2.** If $f(x) = a^x$ where $a > 0$:
$$f'(x) = a^x \cdot \ln(a)$$

**Example:** $f(x) = 2^x$
$$f'(x) = 2^x \cdot \ln(2)$$

**Example:** $f(x) = 5^{x^2 + 4}$
$$f'(x) = 5^{x^2 + 4} \cdot \ln(5) \cdot (2x + 4)$$

### Derivatives of Logarithmic Functions

**3.** If $f(x) = \ln(x)$, then $f'(x) = \frac{1}{x}$.

**Example:** $f(x) = \ln(3x + 1)$
$$f'(x) = \frac{1}{3x + 1} \cdot 3 = \frac{3}{3x + 1}$$

**Example:** $f(x) = \ln(3x^2 + 4x)$
$$f'(x) = \frac{1}{3x^2 + 4x} \cdot (6x + 4) = \frac{6x + 4}{3x^2 + 4x}$$

**4.** If $f(x) = \log_a(x)$ where $a > 0$:
$$f'(x) = \frac{1}{x \ln(a)}$$

**Example:** $f(x) = \log_3(x)$
$$f'(x) = \frac{1}{x \ln(3)}$$

### Table of Derivatives (with Chain Rule built in)

| $f(u(x))$ | $f'(u(x))$ |
|------------|------------|
| $u^n$ | $nu^{n-1} \cdot u'$ |
| $e^u$ | $e^u \cdot u'$ |
| $a^u$ | $a^u \cdot \ln(a) \cdot u'$ |
| $\ln(u)$ | $\frac{1}{u} \cdot u' = \frac{u'}{u}$ |
| $\log_a(u)$ | $\frac{1}{u \ln(a)} \cdot u'$ |
| $\sin(u)$ | $\cos(u) \cdot u'$ |
| $\cos(u)$ | $-\sin(u) \cdot u'$ |
| $\tan(u)$ | $\sec^2(u) \cdot u'$ |
| $\cot(u)$ | $-\csc^2(u) \cdot u'$ |
| $\sec(u)$ | $\sec(u)\tan(u) \cdot u'$ |
| $\csc(u)$ | $-\csc(u)\cot(u) \cdot u'$ |
| $\sin^{-1}(u)$ | $\frac{1}{\sqrt{1-u^2}} \cdot u'$ |
| $\cos^{-1}(u)$ | $\frac{-u'}{\sqrt{1-u^2}}$ |
| $\tan^{-1}(u)$ | $\frac{1}{1+u^2} \cdot u'$ |
| $\cot^{-1}(u)$ | $\frac{-u'}{1+u^2}$ |
| $\sec^{-1}(u)$ | $\frac{1}{|u|\sqrt{u^2-1}} \cdot u'$ |
| $\csc^{-1}(u)$ | $\frac{-u'}{|u|\sqrt{u^2-1}}$ |

## Video Resources

### Core Lecture

[![Core Lecture](https://img.youtube.com/vi/m2MIpDrF7Es/default.jpg)](https://www.youtube.com/watch?v=m2MIpDrF7Es)

### Supplementary Videos

- [3Blue1Brown — Essence of Calculus](https://www.youtube.com/watch?v=m2MIpDrF7Es) - Visual intuition for the core concepts
- [Khan Academy — Calculus](https://www.youtube.com/watch?v=m2MIpDrF7Es) - Step-by-step tutorials and practice
- [Professor Leonard — Calculus Lecture](https://www.youtube.com/watch?v=m2MIpDrF7Es) - Full lecture coverage with worked examples

## 3.9 — Derivatives of Logarithmic and Exponential Functions

Exponential and logarithmic functions model growth, decay, and information scales. 
Their derivatives have a remarkable property: **the exponential function is its own derivative** (up to a constant factor). 
This makes $e^x$ the natural choice for modeling continuous growth.


### Key Definitions

| Function | Derivative | Conditions |
| --- | --- | --- |
| $e^x$ | $e^x$ | all $x$ |
| $a^x$ ($a>0$) | $a^x \ln a$ | all $x$ |
| $\ln x$ | $\dfrac{1}{x}$ | $x > 0$ |
| $\log_a x$ | $\dfrac{1}{x \ln a}$ | $x > 0$ |

The constant $e \approx 2.71828$ is the unique base for which $\dfrac{d}{dx}(e^x) = e^x$.

### Worked Example

**Example 3.9.1**

Differentiate $f(x) = x^x$ for $x > 0$.

**Step 1:** Take the natural logarithm of both sides.


$$\ln(f(x)) = \ln(x^x) = x \ln x$$
**Step 2:** Differentiate implicitly with respect to $x$.


$$\frac{f'(x)}{f(x)} = \ln x + x \cdot \frac{1}{x} = \ln x + 1$$
**Step 3:** Solve for $f'(x)$.


$$f'(x) = f(x)(\ln x + 1) = x^x(\ln x + 1)$$

> **Figure:** Exponential Growth and Its Derivative

### Practice Problems

- Differentiate $f(x) = e^{3x} + \ln(x^2 + 1)$.

- Differentiate $f(x) = 2^{x^2}$.

- Use logarithmic differentiation to find $f'(x)$ for $f(x) = (x+1)^{\sqrt{x}}$.

### Study Tips

- Memorize $\frac{d}{dx}(e^x) = e^x$ cold — it is the most useful derivative in all of calculus.

- For $a^x$, recall the proof: $a^x = e^{x\ln a}$, so the Chain Rule gives $a^x \ln a$.

- Logarithmic differentiation shines for $x^x$, products of many factors, or quotients with exponents.

- Always check the domain: $\ln x$ requires $x > 0$; $\log_a x$ requires $x > 0$ and $a \ne 1$.

---

[Previous](chapter-15.html) • [Curriculum](INDEX.md) • [Next](chapter-17.html)
