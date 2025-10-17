// deal_with_ambiguity - Auto-consolidation index
import config from './deal_with_ambiguity_config.js';
import case1 from './deal_with_ambiguity_case1.js';
import case2 from './deal_with_ambiguity_case2.js';
import case3 from './deal_with_ambiguity_case3.js';
import case4 from './deal_with_ambiguity_case4.js';

export default {
  principle: config.principle,
  id: config.id,
  name: config.name,
  cases: [case1, case2, case3, case4]
};
