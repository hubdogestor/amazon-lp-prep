// dive_deep - Auto-consolidation index
import config from './dive_deep_config.js';
import case1 from './dive_deep_case1.js';
import case2 from './dive_deep_case2.js';
import case3 from './dive_deep_case3.js';
import case4 from './dive_deep_case4.js';
import case6 from './dive_deep_case6.js';
import case7 from './dive_deep_case7.js';

export default {
  principle: config.principle,
  id: config.id,
  cases: [case1, case2, case3, case4, case6, case7]
};
