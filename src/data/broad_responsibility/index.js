// broad_responsibility - Auto-consolidation index
import config from './broad_responsibility_config.js';
import case1 from './broad_responsibility_case1.js';
import case2 from './broad_responsibility_case2.js';
import case3 from './broad_responsibility_case3.js';

export default {
  principle: config.principle,
  id: config.id,
  name: config.name,
  cases: [case1, case2, case3]
};
