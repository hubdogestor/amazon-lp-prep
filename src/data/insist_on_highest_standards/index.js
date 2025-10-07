// insist_on_highest_standards - Auto-consolidation index
import config from './insist_on_highest_standards_config.js';
import case1 from './insist_on_highest_standards_case1.js';
import case2 from './insist_on_highest_standards_case2.js';
import case3 from './insist_on_highest_standards_case3.js';
import case4 from './insist_on_highest_standards_case4.js';
import case5 from './insist_on_highest_standards_case5.js';

export default {
  principle: config.principle,
  id: config.id,
  name: config.name,
  cases: [case1, case2, case3, case4, case5]
};
