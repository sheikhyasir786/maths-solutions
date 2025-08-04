import React from 'react'
import useMathJaxEffect from './MathJax';
function ExerciseFour() {
    useMathJaxEffect();
  return (
    <div className="component-container">
    <div className="content-container">
      <div className="solution-container">
        <h1 className="heading">Real Numbers</h1>
            <div className="solution-content">
            <h1 className="content-heading">Exercise 1.4</h1>
            <p className="answers">

                <strong>1. Without actually performing the long division, state whether the following rational numbers will have a terminating decimal expansion or a non-terminating repeating decimal expansion. Give reasons for your answer.</strong>
                <br /><br />
                (i) 13/3125 <br />
                (ii) 17/8 <br />
                (iii) 64/455 <br />
                (iv) 15/1600 <br />
                (v) 29/343 <br /><br />

                <strong>Solution:</strong><br /><br />

                A rational number <span>{"$$\\frac{p}{q}$$"}</span> has a <strong>terminating decimal expansion</strong> if the denominator <span>{"$$q$$"}</span> has only 2 and/or 5 as its prime factors (i.e. <span>{"$$q = 2^n \\times 5^m$$"}</span>).
                <br /><br />

                <strong>(i)</strong> <span>{"$$\\frac{13}{3125}$$"}</span> → 3125 = <span>{"$$5^5$$"}</span> ✅ Terminating<br />
                <strong>(ii)</strong> <span>{"$$\\frac{17}{8}$$"}</span> → 8 = <span>{"$$2^3$$"}</span> ✅ Terminating<br />
                <strong>(iii)</strong> <span>{"$$\\frac{64}{455}$$"}</span> → 455 = <span>{"$$5 \\times 7 \\times 13$$"}</span> ❌ Non-terminating repeating<br />
                <strong>(iv)</strong> <span>{"$$\\frac{15}{1600}$$"}</span> → 1600 = <span>{"$$2^6 \\times 5^2$$"}</span> ✅ Terminating<br />
                <strong>(v)</strong> <span>{"$$\\frac{29}{343}$$"}</span> → 343 = <span>{"$$7^3$$"}</span> ❌ Non-terminating repeating
                <br /><br />

                <strong>2. Write down the decimal expansions of those rational numbers in Question 1 above which have terminating decimal expansions. Also, write them in the form <span>{"$$\\frac{p}{q}$$"}</span>, where p and q are coprime and q is of the form <span>{"$$2^n \\times 5^m$$"}</span>.</strong>
                <br /><br />

                <strong>Solution:</strong><br /><br />

                <strong>(i)</strong> <span>{"$$\\frac{13}{3125} = 0.00416$$"}</span>, where 13 and 3125 are coprime.<br />
                <strong>(ii)</strong> <span>{"$$\\frac{17}{8} = 2.125$$"}</span>, where 17 and 8 are coprime.<br />
                <strong>(iv)</strong> <span>{"$$\\frac{15}{1600} = 0.009375$$"}</span>, where 15 and 1600 are coprime.
                <br /><br />

                All three denominators are of the form <span>{"$$2^n \\times 5^m$$"}</span>, so they have terminating decimals.
                <br /><br />

                <strong>3. The following real numbers have decimal expansions as given below. In each case, decide whether they are rational or not. If they are rational and of the form <span>{"$$\\frac{p}{q}$$"}</span>, what can you say about the prime factors of <span>{"$$q$$"}</span>?</strong>
                <br /><br />
                (i) 43.123456789<br />
                (ii) 0.120120012000120000…<br />
                (iii) <span>{"$$43.\\overline{123456789}$$"}</span> (repeating block)
                <br /><br />

                <strong>Solution:</strong><br /><br />

                <strong>(i)</strong> 43.123456789 is a decimal that <strong>terminates</strong>.<br />
                Hence, it's a <strong>rational number</strong> because terminating decimals can be written in <span>{"$$\\frac{p}{q}$$"}</span> form.<br />
                The prime factorization of <span>{"$$q$$"}</span> will include only 2 and/or 5.
                <br /><br />

                <strong>(ii)</strong> 0.120120012000120000… does not have a fixed repeating pattern.<br />
                It is a <strong>non-terminating and non-repeating decimal</strong>.<br />
                Therefore, this is an <strong>irrational number</strong> — it cannot be expressed as <span>{"$$\\frac{p}{q}$$"}</span>.
                <br /><br />

                <strong>(iii)</strong> <span>{"$$43.\\overline{123456789}$$"}</span> has a repeating block.<br />
                This is a <strong>non-terminating but repeating decimal</strong>.<br />
                Hence, it is a <strong>rational number</strong>, and it can be written in the form <span>{"$$\\frac{p}{q}$$"}</span>.<br />
                However, the prime factorization of <span>{"$$q$$"}</span> will include primes other than 2 and 5.
                <br /><br />

            </p>
            </div>
      </div>
    </div>
  </div>
  )
}

export default ExerciseFour