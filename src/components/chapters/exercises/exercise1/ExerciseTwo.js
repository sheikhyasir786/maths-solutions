import React from 'react'
import useMathJaxEffect from './MathJax';
import './Exercise.css';
function ExerciseTwo() {
    useMathJaxEffect();
  return (
    <div className="component-container">
    <div className="content-container">
      <div className="solution-container">
        <h1 className="heading">Real Numbers</h1>
        <div className="solution-content">
            <h1 class="content-heading">Exercise 1.2</h1>
            <p class="answers"><strong>1. Express each number as a product of its prime factors:
                <br />
                (i) 140
                <br />
                (ii) 156
                <br />
                (iii) 3825
                <br />
                (iv) 5005
                <br />
                (v) 7429
                <br /><br />
                Solutions:</strong>
                <br /><br />
                <strong>(i) 140</strong>
                <br /><br />
                By taking the LCM of 140, we will get the product of its prime factor.
                <br /><br />
                Therefore, \(140 = 2 \times 2 \times 5 \times 7 \times 1 = 2^2 \times 5 \times 7\)
                <br /><br />
                <strong>(ii) 156</strong>
                <br /><br />
                By taking the LCM of 156, we will get the product of its prime factor.
                <br /><br />
                Therefore, \(156 = 2 \times 2 \times 13 \times 3 \times 1 = 2^2 \times 13 \times 3\) 
                <br /><br />
                <strong>(iii) 3825</strong>
                <br /><br />
                By taking the LCM of 3825, we will get the product of its prime factor.
                <br /><br />
                Therefore, \(3825 = 3 \times 3 \times 5 \times 5 \times 17 = 3^2 \times 5^2 \times 17\)
                <br /><br />
                <strong>(iv) 5005</strong>
                <br /><br />
                By taking the LCM of 5005, we will get the product of its prime factor.
                <br /><br />
                Therefore, \(5005 = 5 \times 7 \times 11 \times 13\)
                <br /><br />
                <strong>(v) 7429</strong>
                <br /><br />
                By taking the LCM of 7429, we will get the product of its prime factor.
                <br /><br />
                Therefore, \(7429 = 17 \times 19 \times 23\)
                <br /><br />

                <strong>2. Find the LCM and HCF of the following pairs of integers and verify that \(LCM \times HCF\) = product of the two numbers.
                    <br/>
                    (i) 26 and 91
                    <br/>
                    (ii) 510 and 92
                    <br/>
                    (iii) 336 and 54
                </strong>
                <br /><br />

                <strong>Solution:</strong>
                <br /><br />
                <strong>(i) 26 and 91</strong>
                <br /><br />
                Expressing 26 and 91 as products of their prime factors, we get,
                <br /><br />
                \(26 = 2 \times 13 \times 1\)
                <br /><br />
                \(91 = 7 \times 13 \times 1\)
                <br /><br />
                Therefore, LCM (26, 91) = \(2 \times 7 \times 13 \times 1 = 182\)
                <br /><br />
                And HCF (26, 91) = \(13\)
                <br /><br />
                Now, the product of 26 and 91 = \(26 \times 91 = 2366\)
                <br /><br />
                And the product of LCM and HCF = \(182 \times 13 = 2366\)
                <br /><br />
                Hence, \(LCM \times HCF =\) product of 26 and 91.
                <br /><br />
                <strong>(ii) 510 and 92</strong>
                <br /><br />
                Expressing 510 and 92 as products of their prime factors, we get,
                <br /><br />
                \(510 = 2 \times 3 \times 17 \times 5 \times 1\)
                <br /><br />
                \(92 = 2 \times 2 \times 23 \times 1\)
                <br /><br />
                Therefore, LCM(510, 92) = \(2 \times 2 \times 3 \times 5 \times 17 \times 23 = 23460\)
                <br /><br />
                And HCF (510, 92) = \(2\)
                <br /><br />
                Now, the product of 510 and 92 = \(510 \times 92 = 46920\)
                <br /><br />
                And the product of LCM and HCF = \(23460 \times 2 = 46920\)
                <br /><br />
                Hence, \(LCM \times HCF =\) product of 510 and 92.
                <br /><br />
                <strong> (iii) 336 and 54</strong>
                <br /><br />
                Expressing 336 and 54 as products of their prime factors, we get,
                <br /><br />
                \(336 = 2 \times 2 \times 2 \times 2 \times 7 \times 3 \times 1\)
                <br /><br />
                \(54 = 2 \times 3 \times 3 \times 3 \times 1\)
                <br /><br />
                Therefore, LCM(336, 54) = \(3024\)
                <br /><br />
                And HCF(336, 54) = \(2 \times 3 = 6\)
                <br /><br />
                Now, the product of 336 and 54 = \(336 \times 54 = 18,144\)
                <br /><br />
                And the product of LCM and HCF = \(3024 \times 6 = 18,144\)
                <br /><br />
                Hence, \(LCM \times HCF =\) product of 336 and 54.
                Let us assume, that √5 is rational number.
                <br /><br />

                <strong>
                    3. Find the LCM and HCF of the following integers by applying the prime factorisation method.
                    <br />
                    (i) 12, 15 and 21
                    <br />
                    (ii) 17, 23 and 29
                    <br />
                    (iii) 8, 9 and 25
                </strong>
                <br /><br />
                <strong>Solution:</strong>
                <br /><br />
                <strong>(i) 12, 15 and 21</strong>
                <br /><br />
                Writing the product of prime factors for all the three numbers, we get,
                <br /><br />
                \(12 = 2 \times 2 \times 3\)
                <br /><br />
                \(15 = 5 \times 3\)
                <br /><br />
                \(21 = 7 \times 3\)
                <br /><br />
                Therefore,
                <br /><br />
                HCF(12,15,21) = \(3\)
                <br /><br />
                LCM(12,15,21) = \(2 \times 2 \times 3 \times 5 \times 7 = 420\)
                <br /><br />
                <strong>(ii) 17, 23 and 29</strong>
                <br /><br />
                Writing the product of prime factors for all the three numbers, we get,
                <br /><br />
                \(17 = 17 \times 1\)
                <br /><br />
                \(23 = 23 \times 1\)
                <br /><br />
                \(29 = 29 \times 1\)
                <br /><br />
                Therefore,
                <br /><br />
                HCF(17,23,29) = \(1\)
                <br /><br />
                LCM(17,23,29) = \(17 \times 23 \times 29 = 11339\)
                <br /><br />
                <strong>(iii) 8, 9 and 25</strong>
                <br /><br />
                Writing the product of prime factors for all the three numbers, we get,
                <br /><br />
                \(8 = 2 \times 2 \times 2 \times 1\)
                <br /><br />
                \(9 = 3 \times 3 \times 1\)
                <br /><br />
                \(25 = 5 \times 5 \times 1\)
                <br /><br />
                Therefore,
                <br /><br />
                HCF(8,9,25) = \(1\)
                <br /><br />
                LCM(8,9,25) = \(2 \times 2 \times 2 \times 3 \times 3 \times 5 \times 5 = 1800\)
                <br /><br />

                <strong>4. Given that HCF (306, 657) = 9, find LCM (306, 657).</strong>
                <br /><br />
                <strong>Solution:</strong>
                <br /><br />
                \(HCF \times LCM\) = Product of the two given numbers
                <br /><br />
                Therefore,
                <br /><br />
                \(9 \times LCM = 306 \times 657\)
                <br /><br />
                LCM = \( 306 \times 657 / 9 = 22338 \)
                <br /><br />
                Hence, LCM(306,657) = \(22338\)
                <br /><br />

                <strong>5. Check whether 6n can end with the digit 0 for any natural number n.</strong>
                <br /><br />
                <strong>Solution:</strong>
                <br /><br />
                If the number \(6n\) ends with the digit zero (0), then it should be divisible by 5, as we know any number with the unit place as 0 or 5 is divisible by 5.
                <br /><br />
                Prime factorization of \(6n = (2 \times 3)^n\)
                <br /><br />
                Therefore, the prime factorization of \(6n\) doesn’t contain the prime number 5.
                <br /><br />
                Hence, it is clear that for any natural number \(n\), \(6n\) is not divisible by 5, and thus it proves that \(6n\) cannot end with the digit 0 for any natural number \(n\).
                <br /><br />

                <strong>6. Explain why 7 × 11 × 13 + 13 and 7 × 6 × 5 × 4 × 3 × 2 × 1 + 5 are composite numbers.</strong>
                <br /><br />
                <strong>Solution:</strong>
                <br /><br />
                By the definition of a composite number, we know, if a number is composite, then it means it has factors other than 1 and itself. Therefore, for the given expression;
                <br /><br />
                \(7 \times 11 \times 13 + 13\)
                <br /><br />
                Taking 13 as a common factor, we get,
                <br /><br />
                \(13(7 \times 11 \times 1 + 1) = 13(77 + 1) = 13 \times 78 = 13 \times 3 \times 2 \times 13\)
                <br /><br />
                Hence, \(7 \times 11 \times 13 + 13\) is a composite number.
                <br /><br />
                Now let’s take the other number,
                <br /><br />
                \(7 \times 6 \times 5 \times 4 \times 3 \times 2 \times 1 + 5\)
                <br /><br />
                Taking 5 as a common factor, we get,
                <br /><br />
                \(5(7 \times 6 \times 4 \times 3 \times 2 \times 1 + 1) = 5(1008 + 1) = 5 \times 1009\)
                <br /><br />
                Hence, \(7 \times 6 \times 5 \times 4 \times 3 \times 2 \times 1 + 5\) is a composite number.
                <br /><br />

                <strong>7. There is a circular path around a sports field. Sonia takes 18 minutes to drive one round of the field, while Ravi takes 12 minutes for the same. Suppose they both start at the same point and at the same time, and go in the same direction. After how many minutes will they meet again at the starting point?</strong>
                <br /><br />
                <strong>Solution:</strong>
                <br /><br />
                Since both Sonia and Ravi move in the same direction and at the same time, the method to find the time when they will be meeting again at the starting point is the LCM of 18 and 12.
                <br /><br />
                Therefore, LCM(18,12) = \(2 \times 3 \times 3 \times 2 \times 1 = 36\)
                <br /><br />
                Hence, Sonia and Ravi will meet again at the starting point after 36 minutes.
                <br /><br />
            </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ExerciseTwo