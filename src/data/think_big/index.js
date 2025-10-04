// think_big - Auto-consolidation index
import config from './think_big_config.js';
import case1 from './think_big_case1.js';
import case2 from './think_big_case2.js';
import case3 from './think_big_case3.js';
import case4 from './think_big_case4.js';

export default {
  principle: config.principle,
  id: config.id,
  name: config.name,
  cases: [case1, case2, case3, case4]
};
