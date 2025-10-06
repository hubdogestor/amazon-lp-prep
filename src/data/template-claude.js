// ============================================================
// TEMPLATE PERFEITO PARA LEADERSHIP PRINCIPLES
// ============================================================
//
// INSTRUÇÕES DE USO:
// 1. Copie este arquivo e renomeie (ex: customer_obsession.js)
// 2. Preencha os campos do 'principle' com título e descrição do LP
// 3. Atualize o 'id' (snake_case) e 'name' do LP
// 4. Adicione de 3 a 5 cases no array 'cases'
// 5. Cada case DEVE ter exatamente 10 FUPs (follow-up questions)
// 6. Use STAR+L framework: Situation, Task, Action, Result + Learning
// 7. Seja específico com métricas e resultados mensuráveis
//
// DICAS:
// - Use números e percentuais nos resultados (ex: "redução de 40%")
// - Descreva ações concretas que VOCÊ tomou (não "nós", mas "eu")
// - FUPs devem explorar detalhes, desafios, trade-offs, aprendizados
// - Marque isTopCase: true nos seus melhores cases
//
// ============================================================

const template_principle = {
  principle: {
    title: "[Nome do Princípio em Português]",
    title_en: "[Principle Name in English]",
    description: "[Descrição completa do princípio em português]",
    description_en: "[Full principle description in English]",
    icon: ""
  },
  id: "template_principle",
  name: "[Nome do Princípio]",
  cases: [
    {
      id: "case-id-1",
      title: "[Título do Case 1]",
      title_pt: "[Título em Português]",
      title_en: "[Title in English]",
      company: "[Nome da Empresa]",
      period: "MM/YYYY–MM/YYYY",
      isTopCase: false, // ou true se for um TOP case destacado
      pt: {
        s: "[SITUAÇÃO: Descreva o contexto e o problema que você enfrentou. Seja específico sobre a empresa, o time, e o desafio.]",
        t: "[TAREFA: Qual era sua responsabilidade? O que você precisava alcançar?]",
        a: "[AÇÃO: O que você FEZ especificamente? Quais decisões tomou? Como executou? Detalhe suas ações concretas.]",
        r: "[RESULTADO: Quais foram os resultados mensuráveis? Use números, percentuais, métricas. Qual foi o impacto?]",
        l: "[APRENDIZADO: O que você aprendeu? Como isso moldou sua forma de trabalhar? O que faria diferente hoje?]"
      },
      en: {
        s: "[SITUATION: Describe the context and problem you faced. Be specific about the company, team, and challenge.]",
        t: "[TASK: What was your responsibility? What did you need to achieve?]",
        a: "[ACTION: What did you DO specifically? What decisions did you make? How did you execute? Detail your concrete actions.]",
        r: "[RESULT: What were the measurable results? Use numbers, percentages, metrics. What was the impact?]",
        l: "[LEARNING: What did you learn? How did it shape your way of working? What would you do differently today?]"
      },
      fups: [
        {
          q: "[FUP 1: Pergunta de follow-up em português sobre métricas, validação, ou detalhes específicos]",
          a: "[Resposta detalhada com dados concretos, números, e contexto específico]",
          q_en: "[FUP 1: Follow-up question in English about metrics, validation, or specific details]",
          a_en: "[Detailed answer with concrete data, numbers, and specific context]"
        },
        {
          q: "[FUP 2: Pergunta sobre feedback negativo ou desafios inesperados]",
          a: "[Resposta sobre como você lidou com o feedback e iterou]",
          q_en: "[FUP 2: Question about negative feedback or unexpected challenges]",
          a_en: "[Answer about how you handled feedback and iterated]"
        },
        {
          q: "[FUP 3: Pergunta sobre trade-offs ou decisões difíceis]",
          a: "[Resposta sobre as opções consideradas e por que escolheu aquela]",
          q_en: "[FUP 3: Question about trade-offs or difficult decisions]",
          a_en: "[Answer about options considered and why you chose that one]"
        },
        {
          q: "[FUP 4: Pergunta sobre colaboração com stakeholders]",
          a: "[Resposta sobre como engajou e influenciou diferentes times]",
          q_en: "[FUP 4: Question about collaboration with stakeholders]",
          a_en: "[Answer about how you engaged and influenced different teams]"
        },
        {
          q: "[FUP 5: Pergunta sobre escalabilidade ou impacto de longo prazo]",
          a: "[Resposta sobre como a solução escalonou ou teve impacto duradouro]",
          q_en: "[FUP 5: Question about scalability or long-term impact]",
          a_en: "[Answer about how the solution scaled or had lasting impact]"
        },
        {
          q: "[FUP 6: Pergunta sobre priorização ou gestão de recursos]",
          a: "[Resposta sobre como priorizou e alocou recursos limitados]",
          q_en: "[FUP 6: Question about prioritization or resource management]",
          a_en: "[Answer about how you prioritized and allocated limited resources]"
        },
        {
          q: "[FUP 7: Pergunta sobre riscos identificados e mitigação]",
          a: "[Resposta sobre riscos que antecipou e como mitigou]",
          q_en: "[FUP 7: Question about identified risks and mitigation]",
          a_en: "[Answer about risks you anticipated and how you mitigated them]"
        },
        {
          q: "[FUP 8: Pergunta sobre dados ou análise que guiou decisões]",
          a: "[Resposta sobre dados específicos que coletou e como usou]",
          q_en: "[FUP 8: Question about data or analysis that guided decisions]",
          a_en: "[Answer about specific data you collected and how you used it]"
        },
        {
          q: "[FUP 9: Pergunta sobre o que mudaria se fizesse novamente]",
          a: "[Resposta honesta sobre melhorias e aprendizados aplicados depois]",
          q_en: "[FUP 9: Question about what you would change if you did it again]",
          a_en: "[Honest answer about improvements and learnings applied afterwards]"
        },
        {
          q: "[FUP 10: Pergunta sobre influência em outros projetos ou pessoas]",
          a: "[Resposta sobre como esse case influenciou trabalhos futuros ou inspirou outros]",
          q_en: "[FUP 10: Question about influence on other projects or people]",
          a_en: "[Answer about how this case influenced future work or inspired others]"
        }
      ]
    },
    {
      id: "case-id-2",
      title: "[Título do Case 2]",
      title_pt: "[Título em Português]",
      title_en: "[Title in English]",
      company: "[Nome da Empresa]",
      period: "MM/YYYY–MM/YYYY",
      isTopCase: false,
      pt: {
        s: "[SITUAÇÃO]",
        t: "[TAREFA]",
        a: "[AÇÃO]",
        r: "[RESULTADO]",
        l: "[APRENDIZADO]"
      },
      en: {
        s: "[SITUATION]",
        t: "[TASK]",
        a: "[ACTION]",
        r: "[RESULT]",
        l: "[LEARNING]"
      },
      fups: [
        // Repita a estrutura de 10 FUPs como no case 1
        {
          q: "[FUP 1]",
          a: "[Resposta]",
          q_en: "[FUP 1 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 2]",
          a: "[Resposta]",
          q_en: "[FUP 2 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 3]",
          a: "[Resposta]",
          q_en: "[FUP 3 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 4]",
          a: "[Resposta]",
          q_en: "[FUP 4 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 5]",
          a: "[Resposta]",
          q_en: "[FUP 5 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 6]",
          a: "[Resposta]",
          q_en: "[FUP 6 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 7]",
          a: "[Resposta]",
          q_en: "[FUP 7 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 8]",
          a: "[Resposta]",
          q_en: "[FUP 8 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 9]",
          a: "[Resposta]",
          q_en: "[FUP 9 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 10]",
          a: "[Resposta]",
          q_en: "[FUP 10 EN]",
          a_en: "[Answer]"
        }
      ]
    },
    {
      id: "case-id-3",
      title: "[Título do Case 3]",
      title_pt: "[Título em Português]",
      title_en: "[Title in English]",
      company: "[Nome da Empresa]",
      period: "MM/YYYY–MM/YYYY",
      isTopCase: false,
      pt: {
        s: "[SITUAÇÃO]",
        t: "[TAREFA]",
        a: "[AÇÃO]",
        r: "[RESULTADO]",
        l: "[APRENDIZADO]"
      },
      en: {
        s: "[SITUATION]",
        t: "[TASK]",
        a: "[ACTION]",
        r: "[RESULT]",
        l: "[LEARNING]"
      },
      fups: [
        // Repita a estrutura de 10 FUPs
        {
          q: "[FUP 1]",
          a: "[Resposta]",
          q_en: "[FUP 1 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 2]",
          a: "[Resposta]",
          q_en: "[FUP 2 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 3]",
          a: "[Resposta]",
          q_en: "[FUP 3 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 4]",
          a: "[Resposta]",
          q_en: "[FUP 4 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 5]",
          a: "[Resposta]",
          q_en: "[FUP 5 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 6]",
          a: "[Resposta]",
          q_en: "[FUP 6 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 7]",
          a: "[Resposta]",
          q_en: "[FUP 7 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 8]",
          a: "[Resposta]",
          q_en: "[FUP 8 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 9]",
          a: "[Resposta]",
          q_en: "[FUP 9 EN]",
          a_en: "[Answer]"
        },
        {
          q: "[FUP 10]",
          a: "[Resposta]",
          q_en: "[FUP 10 EN]",
          a_en: "[Answer]"
        }
      ]
    }
    // Adicione mais 1-2 cases se necessário (total de 3-5 cases por princípio)
  ]
};

module.exports = template_principle;
