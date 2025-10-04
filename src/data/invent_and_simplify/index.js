// invent_and_simplify - Auto-consolidation index
import config from './invent_and_simplify_config.js';
import case1 from './invent_and_simplify_case1.js';
import case2 from './invent_and_simplify_case2.js';
import case3 from './invent_and_simplify_case3.js';
import case4 from './invent_and_simplify_case4.js';
import case5 from './invent_and_simplify_case5.js';
import case6 from './invent_and_simplify_case6.js';

export default {
  principle: config.principle,
  id: config.id,
  name: config.name,
  cases: [case1, case2, case3, case4, case5, case6]
};
