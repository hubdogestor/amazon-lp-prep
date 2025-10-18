// program_management - Auto-consolidation index
import config from './program_management_config.js';
import case1 from './program_management_case1.js';
import case2 from './program_management_case2.js';
import case3 from './program_management_case3.js';
import case4 from './program_management_case4.js';
import case5 from './program_management_case5.js';
import case6 from './program_management_case6.js';

export default {
  principle: config.principle,
  id: config.id,
  name: config.name,
  cases: [case1, case2, case3, case4, case5, case6]
};
