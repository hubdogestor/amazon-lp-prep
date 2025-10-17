// stakeholder_management - Auto-consolidation index
import config from './stakeholder_management_config.js';
import case1 from './stakeholder_management_case1.js';
import case2 from './stakeholder_management_case2.js';

export default {
  principle: config.principle,
  id: config.id,
  name: config.name,
  cases: [case1, case2]
};
