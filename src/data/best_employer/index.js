// best_employer - Auto-consolidation index
import config from './best_employer_config.js';
import case1 from './best_employer_case1.js';
import case2 from './best_employer_case2.js';
import case3 from './best_employer_case3.js';
import case4 from './best_employer_case4.js';

export default {
  principle: config.principle,
  id: config.id,
  name: config.name,
  cases: [case1, case2, case3, case4]
};
