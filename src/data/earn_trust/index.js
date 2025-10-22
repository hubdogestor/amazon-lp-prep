// earn_trust - Auto-consolidation index
import config from './earn_trust_config.js';
import case1 from './earn_trust_case1.js';
import case2 from './earn_trust_case2.js';
import case3 from './earn_trust_case3.js';
import case4 from './earn_trust_case4.js';
import case5 from './earn_trust_case5.js';
import case6 from './earn_trust_case6.js';

export default {
  principle: config.principle,
  id: config.id,
  cases: [case1, case2, case3, case4, case5, case6]
};
