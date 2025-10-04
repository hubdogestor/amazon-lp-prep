// deliver_results - Auto-consolidation index
import config from './deliver_results_config.js';
import case1 from './deliver_results_case1.js';
import case2 from './deliver_results_case2.js';
import case3 from './deliver_results_case3.js';
import case4 from './deliver_results_case4.js';

export default {
  principle: config.principle,
  id: config.id,
  name: config.name,
  cases: [case1, case2, case3, case4]
};
