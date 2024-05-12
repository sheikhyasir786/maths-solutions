import React from 'react';
import useMathJaxEffect from './MathJax';
function ExerciseOne() {
  useMathJaxEffect();
  return (
    <div className="component-container">
      <div className="content-container">
        <div className="solution-container">
          <h1 className="heading">Real Numbers</h1>
          <div className="solution-content">

            {/* Definition with Example */}
            <h1 className="content-heading">1.1 Euclid's Division Lemma</h1>
            <p className="answers">
              Euclid's Division Lemma is a fundamental concept in number theory that deals with division and remainders.
              It states that for any two positive integers {" "}\(a\) and \(b\), there exist unique \(q\) (quotient) and \(r\) (remainder) such that
              \( a = bq + r, \quad 0 \leq r &lt; b \).
              <br /><br />
              In simpler terms, when you divide one positive integer by another, you can always express the first number as a multiple of the second plus a remainder, and that remainder will always be less than the divisor.
              This lemma is the basis for the Euclidean Algorithm, which is used to find the greatest common divisor (GCD) of two numbers.
              <br /><br />
              <strong>Example 1: Use Euclid's Division Lemma to find the quotient and remainder of \(17/5 \)</strong><br />
              <strong>Solution:</strong> According to Euclid's Division Lemma, we can express 17 as:
              <br /><br />
              \(17 = 5q + r \)
              <br /><br />
              Where \(q\) is the quotient and \(r\) is the remainder, and \(0 \leq r &lt; b \)
              <br /><br />
              To find \(q\) and \(r\), we need to find the largest multiple of \(5\) that is less than or equal to \(17\), and then find the remainder.
              <br /><br />
              The largest multiple of \(5\) less than \(17\) is \(5 \times 3 = 15\)
              <br /><br />
              So, \(q = 3\)
              <br /><br />
              So, when we divide \(17\) by \(5\) using Euclid's Division Lemma, we get:
              <br /><br />
              \(17 = 5 \times 3 + 2\)
              <br /><br />
              Thus, \(q = 3\) and \(r = 2\)
            </p>

            {/* Exercise 1.1 solutions */}
            <h1 className="content-heading">Exercise 1.1</h1>
            <p className="answers">
                <strong>
                    1. Use Euclid's division algorithm to find the HCF of: <br />
                    i. 135 and 225 <br/>
                    ii. 196 and 38220 <br/>
                    iii. 867 and 225
                </strong>
                <br/><br/>
                <strong>Solution:</strong>
                <br/><br/>
                {/* Question No. 1 Starts Here */}
                {/*solution of question 1 part i */}
                <strong>i. 135 and 225</strong>
                <br/><br/>
                As we can see that 225 is greater than 135. Therefore, by Euclid's division algorithm, we have,
                <br/><br/>
                \(225=135 \times 1 + 90\)
                <br/><br/>
                Now, remainder 90 is not equal to 0, thus using divison lemma for 90, we get,
                <br/><br/>
                \(135=90\times1 + 45\)
                <br/><br/>
                Again, 45 is not equal to 0, thus using division lemma for 45, we get,
                <br/><br/>
                \(90=45\times2+ 0\)
                <br/><br/>
                The remainder is now zero, so we stop here. Since, in the last step, the divisor is 45
                <br/><br/>
                Hence, the HCF of 225 and 135 is 45.
                <br/><br/>

                {/*solution of question 1 part ii */}
               <strong>ii. 196 and 38220</strong>
                <br/><br/>
                As we can see that 38220 is greater than 196. Therefore, by Euclid's division algorithm, we have,
                <br/><br/>
                \(38220 = 196\times 196 + 0\)
                <br/><br/>
                The remainder is zero now, so we stop here. Since, in the above step, the divisor is 196
                <br/><br/>
                Hence, the HCF of 196 and 38220 is 196.
                <br/><br/>

                {/*solution of question 1 part iii */}
                <strong>iii. 867 and 255</strong>
                <br/><br/>
                As we can see that 867 is greater than 255. Therefore, by Euclid's division algorithm, we have,
                <br/><br/>
                \(867 = 255 \times 3 + 102\)
                <br/><br/>
                Now, remainder 102 is not equal to 0, thus using division lemma for 102, we get,
                <br/><br/>
                \(255 = 102 \times2 + 51\)
                <br/><br/>
                Again, remainder 51 is not equal to 0, thus using division lemma for 51, we get,
                <br/><br/>
                \(102 = 51 \times2 + 0\)
                <br/><br/>
                The remainder is zero now, so we stop here. Sinxe, in the last step, the divisor is 51
                <br/><br/>
                Hence, the HCF of 867 and 255 is 51.
                <br/><br/>
                {/* Question No. 1 Ends Here */}

                {/* Question No. 2 Starts from Here */}
                <strong>2. Show that any positive odd integer is of the form \(6q + 1\), or \(6q + 3\), or \(6q + 5\), where \(q\) is some integer.</strong>
                <br/><br/>
                <strong>Solution:</strong>
                <br/><br/>
                let \(a\) be any positive integer and \(b = 6\). Then, by Euclid's algorithm, \(a = bq + r\), for some integer \(q \geq 0\), and \(r= 0, 1, 2, 3, 4, 5\), because \(0 \leq r &lt; 6\)
                <br/><br/>
                Now substituting the value of r, we get,
                <br/><br/>
                if \(r=0\), then \(a=6q\)
                <br/><br/>
                Similarly, for \(r=1, 2, 3, 4\) and \(5\), the value of \(a\) is 
                <br/><br/>
                \(6q+1\), \(6q+2\), \(6q+3\), \(6q+4\), and \(6q+5\), respectively.
                <br/><br/>
                If \(a= 6q\), \(a= 6q+2\), \(a= 6q+4\), then \(a\) is an even number and divisible by \(2\).
                <br/><br/>
                A positive integer can be either even or odd Therefore, any positive odd integer is of the form of \(6q + 1\), or \(6q + 3\), or \(6q + 5\), where \(q\) is some integer.
                <br/><br/>
                {/* Question No. 2 Ends Here */}

                {/* Question No. 3 Starts Here */}
                <strong>3. An army contingent of \(616\) members is to march behind an army band of \(32\) members in a parade. The two groups are to march in the same number of columns. What is the maximum number of columns in which they can march?</strong>
                <br/><br/>
                <strong>Solution:</strong>
                <br/><br/>
                To find the maximum number of columns in which both the army groups can march, we need to find the HCF of 616 and 32.
                <br/><br/>
                The HCF of 616 and 32 can be found using the Euclid's algorithm.
                <br/><br/>
                HCF(616, 32)
                <br/><br/>
                \(616 = 32 \times19 + 8\)
                <br/><br/>
                Now, remainder 8 is not equal to 0, thus using division lemma for 8, we get,
                <br/><br/>
                \(32 = 8 \times4 + 0\)
                <br/><br/>
                The remainder is zero now and the divisor is 8.
                <br/><br/>
                Therefore, the HCF of 616 and 32 is 8.
                <br/><br/>
                Hence, the maximum number of columns in which they can march is 8.
                <br/><br/>
                {/* Question No. 3 Ends Here */}

                {/* Question No. 4 Starts Here */}
                <strong>4. Use Euclid's division lemma to show that the square of any positive integer is either of the form \(3m\) or \(3m+1\) for some integer \(m\).</strong>
                <br/><br/>
                <strong>Solution:</strong>
                  Let \(a\) be any positive Integer and \(b = 3\).
                <br/><br/>
                According to Euclid's Division lemma, we can write \(a\) as 
                <br/><br/>
                \(3q\), \(3q+1\), or \(3q+2\) for some integer \(q\).
                <br/><br/>
                Now, let's find the square of \(a\) and examine its possible forms:
                <br/><br/>
               When \(a = 3q:\)
               <br/>
                then, \(a^2 = (3q)^2 = 9q^2\)
               <br/><br/>
               When \(a = 3q+1:\) 
               <br/>
               then, \(a^2 = (3q+1)^2 = 9q^2 + 6q + 1 = 3(3q^2 + 2q)+1\)
               <br/><br/>
               When \(a = 3q+2:\) 
               <br/>
               then, \(a^2 = (3q+2)^2 = 9q^2 + 12q + 4 = 3(3q^2 + 4q + 1) + 1\)
               <br/><br/>
                In all cases, we can express \(a^2\) in the form of \(3m\) or \(3m+1\), where \(m\) is an integer:
                <br/><br/>
                When \(a\) is of the form \(3q\), then \(n^2\) is of the form \(3m\), where \(m=3q^2\)
                <br/><br/>
                When \(a\) is of the form \(3q+1\), then \(n^2\) is of the form \(3m+1\), where \(m=3q^2 + 2q\)
                <br/><br/>
                When \(a\) is of the form \(3q+2\), then \(n^2\) is of the form \(3m+1\), where \(m=3q^2 +4q+ 1\)
                <br/><br/>
                Therefore, the square of any positive integer is either of the form \(3m\) or \(3m+1\) for some integer \(m\)
                <br/><br/>
                {/* Question No. 4 Ends Here */}

                {/* Question No. 5 Starts Here */}
                
                <strong>5. Use Euclid’s division lemma to show that the cube of any positive integer is of the form \(9m\), \(9m + 1\) or \(9m + 8\).</strong>
                <br/><br/>
                <strong>Solution:</strong>
                  Let \(a\) be any positive Integer and \(b = 3\).
                <br/><br/>
                According to Euclid's Division lemma, we can write \(a\) as 
                <br/><br/>
                \(3q\), \(3q+1\), or \(3q+2\) for some integer \(q\).
                <br/><br/>
                Now, by taking cubes of all the three above equations we get,
                <br/><br/>
                <strong>Case (i): When r=0, then</strong>
                <br/>
                \(x^3 = (3q)^3 = 27q^3 = 9(3q^3)\); where \(m = 3q^3\)
                <br/>
                \(x^3 = 9m\)
                <br/><br/>
                <strong>Case (ii): When r=1, then</strong>
                <br/>
                \(x^3 = (3q+1)^3 = (3q)^3 + 1^3 + 3 \times 3q \times 1(3q + 1)\) <span class="formulla-text">\((a + b)^3 = a^3 + b^3 + 3ab(a+b)\)</span>
                <br/>
                \(= 27q^3 + 1 + 27q^2 + 9q;\) taking 9 as common factor, we get,
                <br/>
                \(= 9(3q^3 + 3q^2 + q) + 1;\) where m = \(3q^3 + 3q^2 + q\)
                <br/>
                \(x^3= 9m + 1\)
                <br/><br/>
                <strong>Case (iii): When r=2, then,</strong>
                <br/>
                \(x^3 = (3q+2)^3 = (3q)^3 + 2^3 + 3 \times 3q \times 2(3q + 2)\)
                <br/>
                \(= 27q^3 + 8 + 54q^2 + 36q;\) taking 9 as common factor, we get,
                <br/>
                \(= 9(3q^3 + 6q^2 + 4q) + 8;\) where m = \(3q^3 + 6q^2 + 4q\)
                <br/>
                \(x^3= 9m + 8\)
                <br/><br/>
                Therefore, from all the three cases explained above, it is proved that the cube of any positive integer is of the form \(9m\), \(9m + 1\) or \(9m + 8\)
                {/* Question No. 5 Ends Here */}   
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseOne;
