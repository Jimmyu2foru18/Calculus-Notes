# Day 16

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Anti-Derivatives Practice · [Source: 1.png](1.png)

1) $\int (3x^4 + 5x^2 + 10)dx =$

$$= \frac{3}{5}x^5 + \frac{5}{3}x^3 + 10x + C$$

---

2) $\int (14x^3 - \sqrt[4]{x})dx =$

$$= \int \left(14x^3 - x^{\frac{1}{4}}\right)dx$$

$$= \frac{14}{4}x^4 - \frac{4}{5}x^{\frac{5}{4}} + C$$

$$= \frac{7}{2}x^4 - \frac{4}{5}\sqrt[5]{x} + C$$

---

3) $\int \left(\frac{2}{3x^5} + \frac{3}{4x^2}\right)dx =$

$$= \int \left(\frac{2}{3}x^{-5} + \frac{3}{4}x^{-2}\right)dx$$

$$= \frac{2}{3} \cdot \frac{1}{-4}x^{-4} + \frac{3}{4} \cdot \frac{1}{-1}x^{-1} + C$$

$$= \frac{1}{6}x^{-4} + \frac{3}{4}x^{-1} + C$$

$$= -\frac{1}{6x^4} - \frac{3}{4x} + C$$

---

4) $\int \frac{5x^3 - 3x + 2}{x^5}dx =$

$$= \int \left(5x^{-2} - 3x^{-4} + 2x^{-5}\right)dx$$

$$= -\frac{5}{1}x^{-1} - \frac{3}{-3}x^{-3} + \frac{2}{-4}x^{-4} + C$$

$$= -\frac{5}{x} + \frac{1}{x^3} - \frac{1}{2x^4} + C$$

---

5) $\int \left(\frac{1}{x} + \sqrt{x^7}\right)dx =$

$$= \int \left(x^{-1} + x^{\frac{7}{2}}\right)dx$$

$$= \ln|x| + \frac{2}{9}x^9 + c$$

$$= \ln|x| + \frac{2}{9}x^9 + C$$

---

6) $\int (3\sin(x) - 4e^x + x^3)dx =$

$$= -3\cos(x) - 4e^x + \frac{1}{4}x^4 + C$$

---

## Page 2 — Continued Integral Practice · [Source: 2.png](2.png)

a) $\int (3\sec^2(x) + 2\cos(x))dx =$

$$= 3\tan(x) + 2\sin(x) + c$$

---

b) $\int \left(\frac{4}{x^5} + 3\csc(x)\cot(x)\right)dx =$

$$= \int \left(4x^{-5} + 3\csc(x)\cot(x)\right)dx$$

$$= \frac{4}{-4}x^{-4} - 3\csc(x) + c$$

$$= -\frac{1}{x^4} - 3\csc(x) + c$$

---

10) $\int (x^4 + 4^x)dx =$

$$= \frac{1}{5}x^5 + 4^x \cdot \frac{1}{\ln(4)} + c$$

$$= \frac{1}{5}x^5 + 4^x \cdot \frac{1}{\ln(4)} + c$$

---

11) $\int \left(\sqrt[3]{x^4} + 5e^x - \frac{8}{x}\right)dx =$

$$= \int \left(x^{\frac{4}{3}} + 5e^x - 8 \cdot \frac{1}{x}\right)dx$$

$$= \frac{3}{7}x^{\frac{7}{3}} + 5e^x - 8\ln|x| + c$$

$$= \frac{3}{7}\sqrt[3]{x^7} + 5e^x - 8\ln|x| + c$$

---

12) $\int \left(\frac{3}{4} + \frac{1}{4x^2}\right)dx =$

$$= \int \left(\frac{3}{4(1+x^2)}\right)dx = \int \left(\frac{3}{4} \cdot \frac{1}{1+x^2}\right)dx$$

$$= \frac{3}{4}\tan^{-1}(x) + c$$

---

13) $\int (12x^3 + 2\sec(x)\tan(x) - 5\cos(x))dx =$

$$= 3x^4 + 2\sec(x) - 5\sin(x) + c$$

---

## Page 3 — U-Substitution Method · [Source: 3.png](3.png)

- A technique we can sometimes use to find integrals that involve functions within other functions (Sort of a chain rule).
- **Note:** whatever the inner function is, we will need its derivative, or a constant multiple of its derivative, in the problem as well for this technique to work.

### Example

**Ex.** $\int 3x(x^2+5)^4 dx$

**Steps**
1. Call the inner function '$u$'
2. Find $\frac{du}{dx}$
3. Solve for $dx$
4. Substitute into the integral and cancel. We should get an integrand entirely in terms of '$u$'.
5. Integrate in terms of '$u$'
6. Substitute back in for '$u$'

Let $u = x^2 + 5$

$$\frac{du}{dx} = 2x$$

$$du = \frac{2x dx}{2x}$$

$$dx = \frac{du}{2x}$$

**Substitution & Evaluation:**

$$\int 3x(x^2+5)^4 dx = \int 3x \cdot u^4 \cdot \frac{du}{2x}$$

$$= \frac{3}{2} \cdot \frac{u^5}{5} + c = \frac{3}{10}u^5 + c$$

$$\boxed{= \frac{3}{10}(x^2+5)^5 + c}$$

---

## Page 4 — Integration by Substitution · [Source: 4.png](4.png)

**CALCULUS STUDY NOTES**
**SECTION: INTEGRATION TECHNIQUES**
Pg. 4

---

**Ex: Integration by Substitution (u-Sub)**

$$\int \left(5\cos(x)\sqrt{\sin(x)}\right)dx$$

**Let $u = \sin(x)$**

$$= \int \left(5\cos(x)\sqrt{u}\right)dx$$

$$\frac{du}{dx} = \cos(x)$$

$$du = \cos(x)dx$$

$$dx = \frac{du}{\cos(x)}$$

$$= \int \left(5\cancel{\cos(x)}\sqrt{u}\right)\frac{du}{\cancel{\cos(x)}}$$

$$= \int \left(5\sqrt{u}\right)du = \int 5u^{\frac{1}{2}}du$$

*Integrate in terms of $u$*

$$= 5\cdot\frac{2}{3}u^{\frac{3}{2}} + C$$

*Substitute back into $u$*

$$\boxed{= \frac{10}{3}\left(\sin(x)\right)^{\frac{3}{2}} + C}$$

---

**Ex: Visual/Differential Check**

$$y = x^{2}$$

$$\frac{dy}{dx} = 2x$$

*$\xrightarrow{dx}$ Rearranged*

$$dy = 2xdx$$

$$\int dy = \int 2xdx$$

$$y = \frac{\cancel{2}x^{2}}{\cancel{2}} + C$$

$$\boxed{y = x^{2}}$$

---

## Page 5 — Rational & Tangent Integration · [Source: 5.png](5.png)

**EX. 1: Integration of a Rational Function**

**Problem:** Integrate the following expression with respect to $x$:

$$\int \frac{18x+9}{3x^{2}+3x}dx$$

**Method:** Use u-substitution.

**Step 1: Choose $u$**
Let $u = 3x^{2} + 3x$

**Step 2: Find $du/dx$**
$$\frac{du}{dx} = 6x+3$$

**Step 3: Rearrange for $dx$**
$$du = (6x+3)dx$$
$$dx = \frac{du}{6x+3}$$

**Step 4: Substitute into the integral**
$$\int \frac{18x+9}{3x^{2}+3x}dx = \int \frac{18x+9}{u}\cdot\frac{du}{6x+3} = \int \frac{3}{u}\cdot du$$

**Step 5: Simplify and integrate**
*Integrate in terms of 'u'*
$$= 3\ln|u| + C$$

**Step 6: Integrate in terms of $u$**
$$= 3\ln|u| + C$$

**Step 7: Substitute back into 'u'**
$$= 3\ln\left|3x^{2}+3\right| + C$$

---

**EX. 2: Integration of Tangent Function**

**Problem:** Integrate the following expression with respect to $x$:

$$\int \tan(x)dx$$

**Method:** Convert tangent to sine/cosine and use u-substitution.

**Step 1: Rewrite $\tan(x)$**
$$\int \frac{\sin(x)}{\cos(x)}dx$$

**Step 2: Choose $u$**
Let $u = \cos(x)$

**Step 3: Find $du/dx$**
$$\frac{du}{dx} = -\sin(x)$$

**Step 4: Rearrange for $dx$**
$$du = -\sin(x)dx$$
$$dx = \frac{du}{-\sin(x)}$$

**Step 5: Substitute into the integral**
$$\int \frac{\sin(x)}{\cos(x)}dx = \int \frac{\sin(x)}{u}\cdot\frac{du}{-\sin(x)}$$

**Step 6: Simplify and integrate**
$$= \int -\frac{1}{u}du \text{ (Cancel }-\sin(x)\text{)}$$
*Integrate in terms of 'u'*
$$= -\ln|u| + C$$
$$= -$$

**Step 7: Substitute back in for '$u$**
$$= -\ln|\cos(x)| + C$$

**or**

$$= -\ln|\sec(x)| + C$$

---

## Page 6 — U-Sub Practice Problems · [Source: 6.png](6.png)

**1)** $\int x^{2}(2x^{3}-5)^{5}dx$

*Call the inner Function 'u'*
Let $u = 2x^{3}-5$

*Find $\dfrac{du}{dx}$*
$$\frac{du}{dx} = 6x^{2} \qquad du = 6x^{2}dx$$

*Solve for $dx$*
$$dx = \frac{du}{6x^{2}}$$

*Substitute Integral & cancel*
$$\int x^{2}(2x^{3}-5)^{5}dx = \int x^{2}u^{5}\frac{du}{6x^{2}} = \int \frac{1}{6}u^{5}du$$

*Integrate in terms of 'u'*
$$\int \frac{1}{6}u^{5}du = \frac{1}{6}\cdot\frac{u^{6}}{6} + C$$

*Substitute back in for 'u'*
$$= \frac{1}{36}u^{6} + C$$

$$\boxed{= \frac{1}{36}(2x^{3}-5)^{6} + C}$$

---

**2)** $\int 3x^{5}\sqrt{1-x^{6}}dx$
Ps. 6

*Call the inner Function 'u'*
Let $u = 1-x^{6}$

*Find $\dfrac{du}{dx}$*
$$\frac{du}{dx} = -6x^{5} \qquad du = -6x^{5}dx$$

*Solve for $dx$*
$$dx = \frac{du}{-6x^{5}}$$

*Substitute Integral & cancel*
$$\int 3x^{5}\sqrt{1-x^{6}}dx = \int 3x^{5}\sqrt{u}\frac{du}{-6x^{5}} = \int -\frac{1}{2}u^{\frac{1}{2}}du$$

*Integrate in terms of 'u'*
$$-\frac{1}{2}\cdot\frac{2}{3}u^{\frac{3}{2}} + C = -\frac{1}{3}u^{\frac{3}{2}} + C$$

*Substitute back in for 'u'*

$$\boxed{= -\frac{1}{3}(1-x^{6})^{\frac{3}{2}} + C}$$

---

## Page 7 — Substitution Exponential & Logarithmic · [Source: 7.png](7.png)

3.) Integration by Substitution: Exponential Function

$$\int (10x+4)e^{5x^2+2x} \, dx$$

Call the inner function 'u':

$$u = 5x^2 + 2x$$

Find $\frac{du}{dx}$:

$$\frac{du}{dx} = 10x + 2$$

$$du = (10x+2)dx$$

Solve for $dx$:

$$dx = \frac{du}{10x+2}$$

Substitute integrals & cancel:

$$\int (10x+4)e^{5x^2+2x}dx = \int (10x+4)e^u \frac{du}{10x+2}$$

Integrate in terms of 'u':

$$\int \frac{10x+2}{10x+2} e^u \, du$$

Substitute back in for 'u':

$$2e^u + c = \boxed{2e^{5x^2+2x} + c}$$

---

4.) Integration by Substitution: Logarithmic Function

$$\int \frac{\sin(\ln(x)) + 2}{x} \, dx$$

Call the inner function 'u':

$$u = \ln(x)$$

Find $\frac{du}{dx}$:

$$\frac{du}{dx} = \frac{1}{x} \quad du = \frac{dx}{x}$$

Solve for $dx$:

$$dx = x \, du$$

Substitute integrals & cancel:

$$\int \frac{\sin(\ln(x)) + 2}{x} \, dx = \int \frac{\sin(u) + 2}{x} \, x \, du = \int (\sin(u) + 2)du$$

Integrate in terms of 'u':

$$-\cos(u) + 2u + c$$

Substitute back in for 'u':

$$= -\cos(\ln(x)) + 2\ln(x) + c$$

---

## Page 8 — Substitution Trig & Example · [Source: 8.png](8.png)

5.) $\int \sin(3x) \cos(3x) \, dx$

Find $\frac{du}{dx}$

$$\frac{du}{dx} = 3\cos(3x)$$

$$du = 3\cos(3x)dx$$

Solve for $dx$:

$$dx = \frac{du}{3\cos(3x)}$$

Substitute integral & cancel:

$$\int \sin(3x)\cos(3x)dx = \int u \frac{\cos(3x)}{3\cos(3x)} du = \int u \frac{du}{3} = \frac{1}{3}\int u \, du$$

Integrate in terms of 'u':

$$= \frac{1}{3} \cdot \frac{1}{2}u^2 + C = \frac{1}{6}u^2 + C$$

Substitute back in for 'u':

$$\frac{1}{6}\sin^2(3x) + C$$

**Final Solution**

$$\int \sin(3x)\cos(3x)dx = \frac{1}{6}\sin^2(3x) + C$$

---

Ex. $\int 2x\sqrt{2x-8} \, dx$ **Back Substitution**

Ex. $\int 2x\sqrt{2x-8} \, dx$

Let $u = 2x-8 \rightarrow u+8 = 2x$

$$\frac{du}{dx} = 2$$

$$du = 2 \, dx$$

$$dx = \frac{du}{2}$$

$$\int 2x\sqrt{2x-8} \, dx = \int 2x\sqrt{u} \frac{du}{2} = \int x\sqrt{u} \, du$$

So, $\int \left(\frac{1}{2}u + 4\right)u^{\frac{1}{2}} \, du$

$$= \int \left(\frac{1}{2}u^{\frac{3}{2}} + 4u^{\frac{1}{2}}\right) du$$

$$= \frac{1}{2} \cdot \frac{2}{5}u^{\frac{5}{2}} + 4 \cdot \frac{2}{3}u^{\frac{3}{2}} + C$$

$$= \frac{1}{5}u^{\frac{5}{2}} + \frac{8}{3}u^{\frac{3}{2}} + C$$

**Final Solution**

$$\int \frac{1}{5}(2x-8)^{\frac{5}{2}} + \frac{8}{3}(2x-8)^{\frac{3}{2}} + C$$
