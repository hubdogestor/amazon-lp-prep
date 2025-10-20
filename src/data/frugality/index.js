// frugality - Auto-consolidation index
import config from './frugality_config.js';
import case1 from './frugality_case1.js';
import case2 from './frugality_case2.js';
import case3 from './frugality_case3.js';

export default {
  principle: config.principle,
  id: config.id,
  cases: [case1, case2, case3]
};
