import React from 'react'
import useMathJaxEffect from './MathJax';
function ExerciseThree() {
    useMathJaxEffect();
  return (
    <div className="component-container">
    <div className="content-container">
      <div className="solution-container">
        <h1 className="heading">Real Numbers</h1>
        <div className="solution-content">
        <h1 className="content-heading">Exercise 1.3</h1>
        <p className="answers">
            <strong>1. Prove that √5 is irrational.</strong>
            <br /><br />
            <strong>Solution:</strong>
            <br /><br />
            Let us assume √5 is rational. That means it can be expressed as:
            <br /><br />
            <span>{"$$\\sqrt{5} = \\frac{a}{b}$$"}</span>
            where a and b are integers with no common factor other than 1, and <span>{"$$b \\ne 0$$"}</span>.
            <br /><br />
            Squaring both sides, we get: <span>{"$$5 = \\frac{a^2}{b^2} \\Rightarrow a^2 = 5b^2$$"}</span>
            <br /><br />
            This implies that <span>{"$$a^2$$"}</span> is divisible by 5. Hence, a is also divisible by 5. Let <span>{"$$a = 5k$$"}</span> for some integer k.
            <br /><br />
            Substituting: <span>{"$$a^2 = (5k)^2 = 25k^2$$"}</span> So, <span>{"$$5b^2 = 25k^2 \\Rightarrow b^2 = 5k^2$$"}</span>, implying b is also divisible by 5.
            <br /><br />
            But this contradicts the assumption that a and b have no common factor other than 1.
            <br /><br />
            <strong>Hence, √5 is irrational.</strong>
            <br /><br />

            <strong>2. Prove that 3 + 2√5 is irrational.</strong>
            <br /><br />
            <strong>Solution:</strong>
            <br /><br />
            Let us assume that <span>{"$$3 + 2\\sqrt{5}$$"}</span> is rational.
            <br /><br />
            Then, <span>{"$$3 + 2\\sqrt{5} = r$$"}</span>, where r is rational.
            <br /><br />
            Rearranging: <span>{"$$2\\sqrt{5} = r - 3 \\Rightarrow \\sqrt{5} = \\frac{r - 3}{2}$$"}</span>
            <br /><br />
            Since r is rational, <span>{"$$\\frac{r - 3}{2}$$"}</span> is also rational, so √5 is rational, which is a contradiction.
            <br /><br />
            <strong>Therefore, 3 + 2√5 is irrational.</strong>
            <br /><br />

            <strong>3. Prove that the following are irrational:</strong>
            <br /><br />

            <strong>(i)</strong> <span>{"$$\\frac{1}{\\sqrt{2}}$$"}</span>
            <br /><br />
            Let us assume <span>{"$$\\frac{1}{\\sqrt{2}}$$"}</span> is rational.
            <br /><br />
            Then, <span>{"$$\\sqrt{2} = \\frac{1}{r}$$"}</span>, where r is rational.
            <br /><br />
            Since r is rational, <span>{"$$\\sqrt{2}$$"}</span> becomes rational. But this contradicts the fact that <span>{"$$\\sqrt{2}$$"}</span> is irrational.
            <br /><br />
            <strong>Hence,</strong> <span>{"$$\\frac{1}{\\sqrt{2}}$$"}</span> <strong>is irrational.</strong>
            <br /><br />

            <strong>(ii)</strong> <span>{"$$7\\sqrt{5}$$"}</span>
            <br /><br />
            Let us assume <span>{"$$7\\sqrt{5}$$"}</span> is rational.
            <br /><br />
            Then, <span>{"$$\\sqrt{5} = \\frac{7\\sqrt{5}}{7}$$"}</span>, which would be rational.
            <br /><br />
            But <span>{"$$\\sqrt{5}$$"}</span> is irrational. Hence, contradiction.
            <br /><br />
            <strong>Therefore,</strong> <span>{"$$7\\sqrt{5}$$"}</span> <strong>is irrational.</strong>
            <br /><br />

            <strong>(iii)</strong> <span>{"$$6 + \\sqrt{2}$$"}</span>
            <br /><br />
            Let us assume <span>{"$$6 + \\sqrt{2}$$"}</span> is rational.
            <br /><br />
            Then, <span>{"$$\\sqrt{2} = (6 + \\sqrt{2}) - 6$$"}</span>, which would also be rational.
            <br /><br />
            But <span>{"$$\\sqrt{2}$$"}</span> is irrational. Hence, contradiction.
            <br /><br />
            <strong>Therefore,</strong> <span>{"$$6 + \\sqrt{2}$$"}</span> <strong>is irrational.</strong>
            <br /><br />
        </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ExerciseThree