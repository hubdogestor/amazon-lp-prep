// ownership - Auto-consolidation index
import config from './ownership_config.js';
import case1 from './ownership_case1.js';
import case2 from './ownership_case2.js';
import case3 from './ownership_case3.js';
import case4 from './ownership_case4.js';
import case5 from './ownership_case5.js';
import case6 from './ownership_case6.js';

export default {
  principle: config.principle,
  id: config.id,
  name: config.name,
  cases: [case1, case2, case3, case4, case5, case6]
};
