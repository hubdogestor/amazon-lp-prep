// disagree_and_commit - Auto-consolidation index
import config from './disagree_and_commit_config.js';
import case1 from './disagree_and_commit_case1.js';
import case2 from './disagree_and_commit_case2.js';
import case3 from './disagree_and_commit_case3.js';
import case4 from './disagree_and_commit_case4.js';

export default {
  principle: config.principle,
  id: config.id,
  cases: [case1, case2, case3, case4]
};
