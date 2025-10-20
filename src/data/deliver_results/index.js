// deliver_results - Auto-consolidation index
import config from './deliver_results_config.js';
import case1 from './deliver_results_case1.js';
import case2 from './deliver_results_case2.js';
import case3 from './deliver_results_case3.js';
import case4 from './deliver_results_case4.js';
import case5 from './deliver_results_case5.js';
import case6 from './deliver_results_case6.js';
import case7 from './deliver_results_case7.js';

export default {
  principle: config.principle,
  id: config.id,
  cases: [case1, case2, case3, case4, case5, case6, case7]
};
