# Review: Advanced Limits

[Home](../index.html) • [Curriculum](INDEX.md) • [Review Sheets](reviews/INDEX.md) • [GitHub](https://github.com/Jimmyu2foru18/Calculus-Notes)

Use this sheet to test your understanding before moving forward. Try each problem without looking at your notes, then check the formulas below.

## Key Formulas at a Glance

- $$\lim_{x\to 5}\frac{x^2+2x-35}{x^2-25}=\left(\frac{x^2+7x-5x-35}{(x+5)(x-5)}\right)=\frac{x(x+7)-5(x+7)}{(x-5)(x+5)}=\frac{(x-5)(x+7)}{(x-5)(x+5)}$$
- *Factor out (x+7)* — pointing to $x^2+7x-5x-35$ and to $x(x+7)-5(x+7)$
- (the matching $(x-5)$ factors in numerator and denominator are crossed out in red)
- $$=\frac{x+7}{x+5}=\frac{(5)+7}{(5)+5}=\frac{12}{10}=\frac{6}{5}$$
- $$\lim_{x\to 3}\frac{x^2-9}{2-\sqrt{x+1}}\cdot\frac{2+\sqrt{x+1}}{2+\sqrt{x+1}}=\frac{(x-3)(x+3)(2+\sqrt{x+1})}{\left(2-\sqrt{x+1}\right)\left(2+\sqrt{x+1}\right)}=\frac{(x-3)(x+3)(2+\sqrt{x+1})}{4-x-1}=\frac{(x-3)(x+3)(2+\sqrt{x+1})}{3-x}$$
- $$=\frac{(x-3)(x+3)(2+\sqrt{x+1})}{3-x}=(3+3)\left(-(\,2+\sqrt{x+1})\right)=-6-2+\sqrt{4}=-6.2+2=$$
- $$-6\cdot 4=-24$$
- $$\lim_{x\to 0}\frac{\frac{1}{x-4}+\frac{1}{4}}{x}\qquad \text{LCD}: 4(x-4)$$
- $$=\frac{\frac{1}{x-4}+\frac{1}{4}}{x}\cdot\frac{4(x-4)}{4(x-4)}=\frac{4x+4}{4x(x-4)}-\frac{4x}{4x(x-4)}$$
- (both numerators $4x+4$ and $4x$ are crossed out in red)
- $$=\frac{1}{4(x-4)}=\frac{1}{4(0-4)}=\frac{1}{4x-16}=\frac{1}{-16}$$
- $$\lim_{x\to 1}\left(\frac{1}{x-1}-\frac{2}{x^2-1}\right)=\left(\frac{1}{x-1}-\frac{2}{x^2-1}\right)$$
- **LCD: (x−1)(x+1)**
- $$=\frac{x+1}{(x-1)(x+1)}-\frac{2}{(x-1)(x+1)}=\frac{x+1-2}{(x-1)(x+1)}=\frac{x-1}{(x-1)(x+1)}=\frac{1}{x+1}=\frac{1}{2}$$
- (the matching $(x-1)$ factors are crossed out in red)
- $$\lim_{x\to 5}\frac{\sqrt{x+4}-2}{3-\sqrt{x-1}}=\frac{\sqrt{5+4}-2}{3-\sqrt{5-1}}=\frac{\sqrt{9}-2}{3-\sqrt{4}}=\frac{3-2}{3-2}=\frac{1}{1}=1$$
- *This is a Reminder + Always plug in FIRST!* — orange starburst callout with arrow pointing up at problem 5
- Ex. $\lim_{x\to 0}\left(\frac{4}{x^2+x}-\frac{4}{x}\right)$ — speech-bubble callout: Plug in: $\frac{4}{0^2+0}=\frac{4}{0}=\infty-\infty$ **Indeterminate.**
- $$\lim_{x\to 0}\frac{4}{x(x+1)}-\frac{4}{x}\qquad \text{LCD} = x(x+1)$$
- $$=\frac{4}{x(x+1)}-\frac{4}{x}\cdot\frac{x+1}{x+1}=\frac{4}{x(x+1)}-\frac{4(x+1)}{x(x+1)}=\frac{4-4x-4}{x(x+1)}$$

## Practice Problems

1. $\lim_{x \to 5} \frac{x^2+2x-35}{x^2-25}$ → Plug-in in → $\frac{5^2+2(5)-35}{5^2-25} = \frac{0}{0}$ → **Vertical Asymptote Note.**
2. $\lim_{x \to -\infty} \frac{3x^2+5x-2}{-2x+4}$ **Top Heavy** → $\lim_{x \to -\infty} \frac{3x^2}{-2x} = \frac{+}{-} = -\infty$
