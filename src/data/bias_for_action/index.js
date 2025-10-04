// bias_for_action - Auto-consolidation index
import config from './bias_for_action_config.js';
import case1 from './bias_for_action_case1.js';
import case2 from './bias_for_action_case2.js';
import case3 from './bias_for_action_case3.js';
import case4 from './bias_for_action_case4.js';

export default {
  principle: config.principle,
  id: config.id,
  name: config.name,
  cases: [case1, case2, case3, case4]
};
