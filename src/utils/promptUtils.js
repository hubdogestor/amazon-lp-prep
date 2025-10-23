import { getCaseFups } from "./caseUtils.js";
import { getDisplayName } from "./principleLabels.js";

export function generatePrompt(caseData, principleData, lang, t, getDisplayCaseTitle) {
  const isPortuguese = lang === 'pt';
  const caseContent = caseData[lang] || {};
  const fups = getCaseFups(caseData);

  let prompt = '';

  if (isPortuguese) {
    prompt = `# ${t('prompt.interviewContext')} - ${t('prompt.amazonLp')}

## ${t('prompt.principle')}: ${getDisplayName(principleData, lang)}

${principleData.principle ? `**${t('prompt.principleDescription')}:** ${principleData.principle.description}\n` : ''}

## ${t('prompt.case')}: ${getDisplayCaseTitle(caseData, lang)}

### ${t('prompt.starFramework')}:

**${t('situation')}:**
${caseContent.s || ''}

**${t('task')}:**
${caseContent.t || ''}

**${t('action')}:**
${caseContent.a || ''}

**${t('result')}:**
${caseContent.r || ''}

**${t('learning')}:**
${caseContent.l || ''}
`;

    if (fups.length > 0) {
      prompt += `\n### ${t('prompt.followupQuestions')}:\n\n`;
      fups.forEach((fup, idx) => {
        const question = fup.q || '';
        const answer = fup.a || '';
        prompt += `**${idx + 1}. ${question}**\n`;
        if (answer) {
          prompt += `${answer}\n\n`;
        } else {
          prompt += '\n';
        }
      });
    }

    prompt += `\n---\n\n**${t('prompt.instructions')}:**
${t('prompt.instructionsText', { principleName: getDisplayName(principleData, lang) })}`;

  } else {
    prompt = `# ${t('prompt.interviewContext')} - ${t('prompt.amazonLp')}

## ${t('prompt.principle')}: ${getDisplayName(principleData, lang)}

${principleData.principle ? `**${t('prompt.principleDescription')}:** ${principleData.principle.description_en || principleData.principle.description}\n` : ''}

## ${t('prompt.case')}: ${getDisplayCaseTitle(caseData, lang)}

### ${t('prompt.starFramework')}:

**${t('situation')}:**
${caseContent.s || ''}

**${t('task')}:**
${caseContent.t || ''}

**${t('action')}:**
${caseContent.a || ''}

**${t('result')}:**
${caseContent.r || ''}

**${t('learning')}:**
${caseContent.l || ''}
`;

    if (fups.length > 0) {
      prompt += `\n### ${t('prompt.followupQuestions')}:\n\n`;
      fups.forEach((fup, idx) => {
        const question = fup.q_en || fup.q || '';
        const answer = fup.a_en || fup.a || '';
        prompt += `**${idx + 1}. ${question}**\n`;
        if (answer) {
          prompt += `${answer}\n\n`;
        } else {
          prompt += '\n';
        }
      });
    }

    prompt += `\n---\n\n**${t('prompt.instructions')}:**
${t('prompt.instructionsText', { principleName: getDisplayName(principleData, lang) })}`;
  }

  return prompt;
}
