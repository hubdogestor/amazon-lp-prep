// customer_obsession - Auto-consolidation index
import config from './customer_obsession_config.js';
import case1 from './customer_obsession_case1.js';
import case2 from './customer_obsession_case2.js';
import case3 from './customer_obsession_case3.js';

export default {
  principle: config.principle,
  id: config.id,
  name: config.name,
  cases: [case1, case2, case3]
};
