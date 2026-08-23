# Day 11

> Verbatim transcription of lecture note images in this folder.

---

## Page 1 — Implicit Differentiation Practice · [Source: 1.png](1.png)

**CALCULUS: Implicit Differentiation Practice** | Page 1

Find $\frac{dy}{dx}$ for each

**Problem 1** $3x^2 + 5y = y^3 - 2x$

- Start: $\frac{d}{dx}[3x^2 + 5y] = \frac{d}{dx}[y^3 - 2x]$
- Differentiate: $6x + 5\frac{dy}{dx} = 3y^2\frac{dy}{dx} - 2$
- Collect terms: $6x + 2 = 3y^2\frac{dy}{dx} - 5\frac{dy}{dx}$
- Factor: $6x + 2 = \frac{dy}{dx}(3y^2 - 5)$

**Solution:** $\displaystyle\frac{dy}{dx} = \frac{6x + 2}{3y^2 - 5}$

**Problem 2** $4x^2y + y^2 = 5xy - x^2$

- Start: $\frac{d}{dx}[4x^2y + y^2] = \frac{d}{dx}[5xy - x^2]$
- Differentiate: $4x^2\frac{dy}{dx} + y(8x) + 2y\frac{dy}{dx} = 5x\frac{dy}{dx} + y(5) - 2x$
- Collect terms: $4x^2\frac{dy}{dx} + 2y\frac{dy}{dx} - 5x\frac{dy}{dx} = -8xy - 2x + 5y$
- Factor: $\frac{dy}{dx}(4x^2 + 2y - 5x) =$

**Solution:** $\displaystyle\frac{dy}{dx} = \frac{5y - 2x - 8xy}{4x^2 + 2y - 5x}$

**Problem 3** $(3x + 2y)^4 - y^2 = 4x + 1$

- Start: $\frac{d}{dx}[(3x + 2y)^4 - y^2] = \frac{d}{dx}[4x + 1]$
- Differentiate (using chain rule): $4(3x + 2y)^3 \cdot \left(3 + 2\frac{dy}{dx}\right) - 2y\frac{dy}{dx} = 4$
- Distribute & collect terms: $12(3x + 2y)^3 + 8(3x + 2y)^3\frac{dy}{dx} - 2y\frac{dy}{dx} = 4$
- Group $\frac{dy}{dx}$ terms: $8(3x + 2y)^3\frac{dy}{dx} - 2y\frac{dy}{dx} = 4 - 12(3x + 2y)^3$
- Factor and isolate: $\frac{dy}{dx}[8(3x + 2y)^3 - 2y] = 4 - 12(3x + 2y)^3$

**Solution:** *[blank in source]*

---

## Page 2 — Related Rates Definition · [Source: 2.png](2.png)

**Related Rates**

**Pg. 2**

- **Related Rates Problems:** Problems that involve using the **rate of change** of one variable in a formula to solve for that of another variable, with rates being calculated with respect to another variable, usually **time** ($t$).

**Example:**

The **radius** of a circle is expanding at a constant rate of **2 cm/s**. How **fast** will the **area** of the circle be changing when the radius is **10 cm**?

**[Diagram: circle with radius $r$]**

- **We Want:** $\displaystyle\frac{dA}{dt}$
- **When?** $r = 10\text{ cm}$
- **We Know:** $\displaystyle\frac{dr}{dt} = 2\text{ cm/s}$
- **Equation:** $A = \pi r^2$

Take the derivative with respect to time ($t$):

$$\frac{dA}{dt} = 2\pi r\,\frac{dr}{dt}$$

Plugin and Solve:

$$\frac{dA}{dt} = 2\pi(10\text{ cm})(2\text{ cm/s})$$

$$\boxed{\displaystyle\frac{dA}{dt} = 40\pi\text{ cm}^2/\text{s}}$$

---

## Page 3 — Ladder Related Rates · [Source: 3.png](3.png)

**CALCULUS NOTES: RELATED RATES**

**Ex.** A 13-foot ladder is leaning against a vertical wall with its base on the horizontal ground. The base of the ladder is pulled away from the wall at **1r** at a rate of **10 ft/s**, so that the top of the ladder slides down the wall.

How quickly, is the top of the ladder sliding down the wall, when the base is **5 ft** from the wall?

**[Diagram: right triangle with hypotenuse $13$, vertical leg $y$, horizontal leg $x$]**

- **WE KNOW:** $\displaystyle\frac{dx}{dt} = 10\text{ ft/s}$
- **WE WANT:** $\displaystyle\frac{dy}{dt}$
- **WHEN:** $X = 5\text{ ft}$
- **Equation:** $a^2 + b^2 = c^2$

**So.** $x^2 + y^2 = 16^2 = 256$

**Derivative with respect to time ($t$):**

$$2x\,\frac{dx}{dt} + 2y\,\frac{dy}{dt} = 0$$

**Plug in:**

$$2(5)(10) + 2(y)\,\frac{dy}{dt} = 0$$

$$2(5)(10) + 2(12)\,\frac{dy}{dt} = 0$$

> *We still need '$y$', so plug in '$x$':*
> $x^2 + y^2 = 169 \Rightarrow 5^2 + y^2 = 169$
> $-25 \qquad -25$
> $\sqrt{y^2} = \sqrt{144}$
> $y = 12$

$$100 + 24\,\frac{dy}{dt} = 0$$

$$24\,\frac{dy}{dt} = -100$$

$$\frac{24\,\frac{dy}{dt}}{24} = -\frac{25}{6} \approx \boxed{-4.16\text{ ft/s}}$$

---

## Page 4 — THE ROCKET PROBLEM · [Source: 4.png](4.png)

**CALCULUS STUDY NOTES: RELATED RATES - THE ROCKET PROBLEM**

**EX.** An observer stands on flat ground **300 ft** Away from a Launch site of a Model Rocket. The rocket takes off, maintaining a vertical velocity of **100 ft/s**. After 2 seconds, what is the rate of charge of Angle Otelevation the rocket?

| KNOWN VALUES | DESIRED RATE |
| --- | --- |
| $\frac{dy}{dt} = 100 \text{ ft/s}$ | $\frac{d\theta}{dt}$ |

| SPECIFIC TIME | RELATING EQUATION |
| --- | --- |
| When $t = 2\text{s}$ | $\tan(\theta) = \frac{y}{300}$ |

Launch site of a Model Rocket. Rocket takes off and maintaing a vertical velocity of 100 ft/s. After 2 seconds, what is the rate of charge of Angle Otelevation from the observer to the Rocket?

| We know: | $\frac{dy}{dt} = 100 \text{ ft/s}$ |
| --- | --- |
| We want: | $\frac{d\theta}{dt}$ |
| RELATING EQUATION | $\tan(\theta) = \frac{y}{300}$ |
| When: $t = 2\text{s}$ |  |

### Derivative with respect to time $(t)$

$$\tan(\theta) = \frac{y}{300}$$

$$\sec^2(\theta) \cdot \frac{d\theta}{dt} = \frac{1}{300} \frac{dy}{dt}$$

We need to know $\sec(\theta)$ to continue...

$$\sec(\theta) = \frac{1}{\cos(\theta)} = \frac{300}{100\sqrt{13}}$$

$$\sec(\theta) = \frac{100\sqrt{13}}{300} = \frac{\sqrt{13}}{3}$$

So, $\sec^2(\theta) \cdot \frac{d\theta}{dt} = \frac{1}{300} dt$

$$\left(\frac{\sqrt{13}}{3}\right)^2 \cdot \frac{d\theta}{dt} = \frac{1}{300}(100)$$

$$\frac{13}{9} \cdot \frac{d\theta}{dt} = \frac{1}{3}$$

$$\frac{d\theta}{dt} = \frac{3}{13} \text{ rad/s}$$

**SOLVING FOR** $\frac{d\theta}{dt}$

$$\sec(\theta) \cdot 100 \cdot \frac{d\theta}{dt} = \frac{1}{3} \frac{dy}{dt}$$

$$\left(\frac{\sqrt{13}}{3}\right)^2 \frac{d\theta}{dt} = \frac{1}{300}(100)$$

$$\frac{73}{9} \cdot \frac{d\theta}{dt} = \frac{1}{300} \cdot \frac{4\sqrt{3}}{13}$$

$$\boxed{\frac{d\theta}{dt} = \frac{3}{13} \text{ rad/s}}$$

**Right side:**

$y \text{ at } t = 2\text{s}$ $2 \cdot 100 = 200\text{ft}$

**Pythagorean Theorem for $z$**

$$300^2 + y^2 = z^2$$
$$300^2 + 200^2 = z^2$$
$$300^2 + 200^2 = z^2$$
$$400^2 + 9000^2 = z^2$$
$$\sqrt{130000}\sqrt{13} = z$$
$$x = 100\sqrt{13}$$

$\sec(\theta)$ at this time

$$\sec(\theta) = \frac{1}{\cos(\theta)}$$

$$\sec(\theta) = \frac{\sqrt{13}}{3}$$

---

## Page 5 — CONE SHAPED CUP · [Source: 5.png](5.png)

**Ex.** A cone shaped cup has a height of **8cm** and a radius at its base of **2cm**. Water leaks from the bottom of the cup at a rate of **5cm^3/s**. At what rate is hy the height of the cup changing at the moment of time when the height is **3cm**?

We know: $\frac{dV}{dt} = -5\text{cm}^3/\text{s}$

We want: $\frac{dh}{dt}$

Equation:
$$V = \frac{1}{3}\pi r^2 h$$

When: $h = 3\text{cm}$

We need to substitute to eliminate $r$ from the problem before we take the derivative. Otherwise, we would get a $\frac{dr}{dt}$ in the derivative, which we will **NOT** know the value of.

**Use similar triangles:**

$$\frac{r}{8} = \frac{2}{h} = \frac{2h}{8} = \frac{8r}{8} \Rightarrow r = \frac{h}{4}$$

Now substitute

$$V = \frac{1}{3}\pi\left(\frac{h}{4}\right)^2 h = \frac{1}{3}\pi\frac{h^2}{16}h = \frac{\pi h^3}{48}$$

$$\boxed{V = \frac{\pi}{48}h^3}$$

Now, Take the derivative with respect to time $(t)$

$$\frac{dV}{dt} = \frac{3\pi h^2}{48}\frac{dh}{dt}$$

$$-5 = \frac{\pi}{16}(3)^2\frac{dh}{dt} = -5\frac{9\pi}{16}\left(\frac{dh}{dt}\right)$$

$$= -5 = \frac{9\pi}{16}\left(\frac{dh}{dt}\right) \cdot \frac{16}{9\pi}$$

$$\frac{16}{9\pi} = -80 \cdot \frac{dh}{dt} \longrightarrow \boxed{\left(\frac{-80}{9\pi}\right) = \frac{dh}{dt}}$$
