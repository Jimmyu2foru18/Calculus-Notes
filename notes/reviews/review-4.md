# Review: Differentiation Rules

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](reviews/INDEX.md) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

Use this sheet to test your understanding before moving forward. Try each problem without looking at your notes, then check the formulas below.

## Key Formulas at a Glance

> **Definition of Derivative**
>
> Def: $f' = \lim\limits_{h\to 0}\dfrac{f(x+h)-f(x)}{h}$

$$f'(x) = \lim_{h\to 0}\frac{\left(\sqrt{3(x+h)-4}-\sqrt{3x-4}\right)\left(\sqrt{3(x+h)-4}+\sqrt{3x-4}\right)}{h\left(\sqrt{3(x+h)-4}+\sqrt{3x-4}\right)}$$

$$f'(x) = \lim_{h\to 0}\frac{3x+3h-4-3x+4}{h\left(\sqrt{3(x+h)-4}+\sqrt{3x-4}\right)}$$

$$f'(x) = \lim_{h\to 0}\frac{3}{h\left(\sqrt{3(x+h)-4}+\sqrt{3x-4}\right)} = \frac{3}{\sqrt{3x-4}+\sqrt{3x-4}}$$

$LCD = (4x+h+1)(4x+1)$

$$f'(x) = \lim_{h\to 0}\frac{5(4x+1+1)-5(4(x+h)+1)}{(4x+h+1)(4x+1)}$$

$$f'(x) = \lim_{h\to 0}\frac{20x+5-20x-20h-5}{h(4x+h+1)(4x+1)}$$

$$f'(x) = \lim_{h\to 0}\frac{-20h}{h(4x+h+1)(4x+1)} = \frac{-20}{(4x+h+1)(4x+1)}$$

- $f(x) = x^{1/2} - 5x^2$
- $f'(x) = \frac{1}{2}x^{-1/2} - 10x$
- $f'(x) = \frac{1}{2\sqrt{x}} - 10x$
- $f(x) = 3x + 7x^{-3}$
- $f'(x) = 3 - 21x^{-4}$
- (curved arrows point from $\sqrt[3]{x^5}$ down to $x^{5/3}$ and from $\frac{5}{x^2}$ down to $5x^{-2}$)
- $x^{5/3} + 2x^{-2} - 5x^{-2}$
- $f'(x) = \frac{5}{3}x^{2/3} + 4x + 10x^{-3}$
- $f(x) = 3x + 4x^{-1} - 8x^{-3}$
- $f'(x) = 3 - 4x^{-2} + 24x^{-4}$

> **Product Rule: If $f(x) = h(x)\cdot g(x)$ then $f'(x) = h(x)\cdot g'(x) + g(x)\cdot h'(x)$**

## Practice Problems

1. Be **continuous** at $x = c$.
2. Be **smooth** (No sharp points) at $x = c$.
3. Not have a **vertical tangent** at $x = c$.
4. 1. Evaluate function at the endpoints:
5. 2. Examine for a root:
