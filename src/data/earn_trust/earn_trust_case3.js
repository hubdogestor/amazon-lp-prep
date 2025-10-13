const case_3 = {
  id: "bradesco-partner-recovery",
  title: "Reconquistei parceiro chave com plano de saldo garantido em 30 dias",
  title_pt: "Reconquistei parceiro chave com plano de saldo garantido em 30 dias",
  title_en: "Won back key partner with 30-day guaranteed settlement plan",
  company: "Bradesco Payments",
  period: "09/2017-01/2018",
  isTopCase: true,
  isGoodCase: true,

  pt: {
    s: `Em setembro de 2017, como Program Manager de pagamentos B2B no Bradesco, vi nosso marketplace mais relevante – responsável por 18% do TPV – suspender operações após três ciclos de atraso na liquidação D+1. R$ 420 milhões ficaram bloqueados, 8.700 sellers protestaram publicamente e o parceiro anunciou migração para a concorrência. Internamente, o CFO culpava o comercial por prometer prazos irreais; o comercial responsabilizava a tesouraria. A ruptura interna paralisou a resposta imediata, colocando em risco R$ 52 milhões anuais e a reputação de principal provedor de liquidez. O CEO me designou para restaurar estabilidade e reconquistar o parceiro em até 30 dias.`,

    t: `Defini três metas: normalizar o backlog em 10 dias, reduzir a variação de saldo para menos de 0,2% e implementar um modelo de liquidez garantida sob minha supervisão direta, mensurando sucesso pelo retorno do parceiro e pela colaboração entre financeiro, comercial e operações.`,

    a: `Primeiro, reconstruí alinhamento interno. Facilitei reunião entre tesouraria e comercial apresentando dados de fluxo que mostravam o desalinhamento entre janelas de recompra e crédito. Propus um buffer de R$ 80 milhões sob minha responsabilidade, atualizado a cada quatro horas. O CFO resistiu por não querer imobilizar capital em ambiente de juros altos; levei projeções provando que perder o parceiro custaria R$ 52 milhões ao ano e aceitei cortar 18% do meu budget de marketing para compensar. O gesto gerou credibilidade e o fundo foi aprovado em 48 horas.

    Com o capital assegurado, foquei na transparência externa. Lancei o programa “Saldo Garantido 7h”: diariamente, às 7h, o parceiro recebia extrato assinado por mim com saldo futuro, previsão de repasse e ajustes. Assumi publicamente nossa falha e disse “não posso prometer ausência de erros, mas posso garantir ausência de surpresas”. Aceitei auditoria externa integral e abri acesso em tempo real aos dashboards de liquidação e risco. Operações temia exposição de logs; mostrei que a opacidade já havia nos custado 18% de market share e defini limites de compliance. Ao entender os critérios, o time aderiu e passou a sugerir indicadores extras. Instituí um “monitor de confiança” com 12 métricas (SLA, backlog, saldo, NPS, divergências) revisado em stand-up diário com o CFO do marketplace.`,

    r: `Em nove dias zeramos o backlog de R$ 420 milhões e retomamos o SLA D+1. A variação de saldo caiu para 0,08%, o churn de sellers reduziu 3,9 p.p. e o NPS do parceiro subiu de 18 para 63 em seis semanas. O contrato foi renovado por dois anos com revisões trimestrais coassinadas. O modelo “Saldo Garantido” foi replicado em quatro marketplaces adicionais, cobrindo R$ 1,2 bilhão em TPV e reduzindo em 46% os chamados sobre liquidação. Internamente, o caso virou workshop de governança de confiança e transformou transparência em vantagem competitiva.`,

    l: `Aprendi que Earn Trust nasce quando vulnerabilidade encontra estrutura. Ao admitir falhas e entregar garantias tangíveis, converti desconfiança em cooperação e criei previsibilidade que escalou para outros contratos.`
  },

  en: {
    s: `In September 2017, as Program Manager for Bradesco’s B2B payments, I faced our biggest trust crisis. A marketplace representing 18% of TPV halted operations after three consecutive D+1 settlement delays. BRL 420M were frozen, 8,700 sellers protested, and the partner announced migration. Internal blame between finance and sales stalled any response. Losing that partner meant BRL 52M in annual revenue and a reputational hit. The CEO appointed me to rebuild confidence and win the partner back in 30 days.`,

    t: `I set three goals: clear the backlog within 10 days, keep balance deviation below 0.2%, and deploy a guaranteed liquidity model personally supervised—measured by restored SLA, contract renewal, and cross-team alignment.`,

    a: `I rebuilt internal alignment first. Presented cash-flow evidence proving delays came from misaligned buyback and credit windows, and proposed an BRL 80M buffer under my accountability, refreshed every four hours. The CFO opposed immobilizing capital, so I modeled that losing the partner would cost BRL 52M yearly and offered to cut 18% of my marketing budget to fund the buffer. He approved it within 48 hours.

    With financial cover in place, I turned to transparency. Created the “7 a.m. Guaranteed Balance” ritual: every morning the partner received a forecast statement signed by me. I admitted the breakdown publicly—“I can’t promise zero errors, but I can promise zero surprises”—accepted full external audit, and opened live dashboards of liquidity and risk. Operations feared exposure; I clarified compliance boundaries and they agreed, even proposing new indicators. We instituted a “Trust Monitor” with 12 metrics and held daily stand-ups with the partner CFO reviewing SLA, backlog, balances, and actions. Transparency became a daily discipline shared by both teams.`,

    r: `Within nine days the BRL 420M backlog was cleared, D+1 SLA restored, balance variance hit 0.08%, seller churn fell 3.9 p.p., and partner NPS climbed from 18 to 63 in six weeks. The contract was renewed for two years with quarterly co-signed reviews. The model scaled to four additional partners (BRL 1.2B TPV) and cut settlement escalations by 46%. Internally the case became a governance reference—structured transparency turned a crisis into competitive differentiation.`,

    l: `I learned that trust returns when accountability is paired with rhythm and data. Tangible guarantees, daily updates, and open dashboards turned a hostile relationship into a collaborative one.`
  },

  fups: [
    {
      q: "Qual foi seu maior erro ou falha neste caso?",
      a: "Demorei dois dias para me posicionar publicamente; aprendi que silêncio prolongado aumenta a percepção de descontrole.",
      q_en: "What was your biggest mistake or failure in this case?",
      a_en: "I waited two days to speak publicly; silence amplified the sense of chaos."
    },
    {
      q: "O que você faria diferente hoje?",
      a: "Criaria protocolo preventivo de comunicação com parceiros e relatórios diários de liquidez antes do corte D+1.",
      q_en: "What would you do differently today?",
      a_en: "I would set preventive partner communication and daily liquidity reports before the D+1 cutoff."
    },
    {
      q: "Qual foi o obstáculo mais difícil de superar?",
      a: "Convencer o CFO e operações ao mesmo tempo: um resistia por custo, o outro por exposição. Resolvi com simulações financeiras e limites claros de compliance.",
      q_en: "What was the hardest obstacle to overcome?",
      a_en: "Convincing both CFO and operations—one worried about cost, the other about exposure. I solved it with financial simulations and clear compliance boundaries."
    },
    {
      q: "Quais foram os principais riscos e como você os mitigou?",
      a: "Perder o contrato definitivamente e sofrer dano reputacional. Mitiguei com transparência diária, auditoria externa e garantia financeira dedicada.",
      q_en: "What were the main risks and how did you mitigate them?",
      a_en: "Permanent contract loss and reputational damage. Mitigated with daily transparency, external audit, and a dedicated liquidity guarantee."
    },
    {
      q: "Como o parceiro reagiu às medidas de transparência?",
      a: "Relatou sentir-se \"dentro da sala de controle\" e passou a cocriar indicadores conosco, sinal de confiança restabelecida.",
      q_en: "How did the partner react to the transparency measures?",
      a_en: "They said they felt “inside the control room” and began co-creating indicators—evidence trust was rebuilt."
    },
    {
      q: "Como o caso foi reaplicado em outros clientes?",
      a: "O modelo 'Saldo Garantido' foi expandido para quatro marketplaces adicionais e reduziu chamados de liquidação em 46%.",
      q_en: "How was the case replicated elsewhere?",
      a_en: "The ‘Guaranteed Balance’ model scaled to four more marketplaces and cut settlement tickets by 46%."
    }
  ]
};

export default case_3;
