// CustomHook.js
import { useEffect } from 'react';

function useMathJaxEffect() {
  useEffect(() => {
    const addScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    };

    const polyfillScript = addScript('https://polyfill.io/v3/polyfill.min.js?features=es6');
    const mathJaxScript = addScript('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML');

    mathJaxScript.onload = () => {
      window.MathJax.Hub.Config({
        tex2jax: { inlineMath: [['$', '$'], ['\\(', '\\)']] }
      });
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
    };

    return () => {
      document.body.removeChild(polyfillScript);
      document.body.removeChild(mathJaxScript);
    };
  }, []);
}

export default useMathJaxEffect;
