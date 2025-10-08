// Case 5 - bias_for_action
const case_5 = {
  id: "sicredi-fraud-emergency-4h-decision",
  title: "Tomei Decisão em 4 Horas Sob Fraude Massiva com Dados Incompletos e Salvei R$ 2.3M",
  title_pt: "Tomei Decisão em 4 Horas Sob Fraude Massiva com Dados Incompletos e Salvei R$ 2.3M",
  title_en: "Made Decision in 4 Hours Under Massive Fraud with Incomplete Data and Saved BRL 2.3M",
  company: "Sicredi",
  period: "08/2021",
  isTopCase: false,
  isGoodCase: true,
  pt: {
    s: `"R$ 2.3 milhões em risco até o fim do dia — você tem 4 horas para decidir" me disse o líder do NOC às 6h05, logo após detectar o ataque de fraude.

Em 14 de agosto de 2021 as 6h da manha recebi alerta critico do NOC: transacoes Pix suspeitas dispararam 340% em 90 minutos (de 45 por hora para 198 por hora). O modelo de fraude estava sinalizando padrao novo que nunca tinhamos visto: contas recém-abertas (< 7 dias) fazendo Pix de valores medios (R$ 800-1.200) para 23 CPFs diferentes em sequencia rapida (< 3 minutos entre transacoes).

O problema era crítico e os dados incompletos: o sistema de KYC estava em manutencao entao nao conseguiamos verificar historico completo dos CPFs destinatarios, e o time de fraude só chegaria as 9h. Eu precisava decidir em no maximo 4 horas: bloquear todas as transacoes (impactando 100% dos clientes novos, incluindo legitimos) ou deixar passar e arriscar perda de R$ 2.3M projetada ate o fim do dia.`,
    t: `O desafio crítico era tomar uma decisão em 4 horas com dados incompletos, balanceando proteção financeira e experiência do cliente. Eu era o Head of Payments responsavel por proteger o Sicredi de fraude mantendo experiencia do cliente. Minha responsabilidade pessoal era tomar decisao rapida sob incerteza para balancear risco de perda financeira versus risco de bloquear clientes legitimos. Eu tinha autoridade para implementar bloqueios temporarios sem aprovacao de comitê quando havia risco material.`,
    a: `Minha abordagem foi coletar sinais mínimos em tempo recorde e implementar bloqueio cirúrgico com monitoramento intensivo.

As 6h15 eu ativei o protocolo de emergencia e convoquei call com 4 pessoas chave: lider do NOC, analista senior de fraude (que consegui acordar), engenheiro de payments e compliance officer. As 6h30 eu tinha coletado 3 sinais: (1) 87% das contas suspeitas tinham sido abertas via parceiro X (marketplace); (2) os CPFs destinatarios tinham sobreposicao de 64% com base de mulas conhecidas (dado parcial do sistema antigo); (3) o ticket medio de R$ 950 estava abaixo do limite de alerta configurado (R$ 1.500) entao o sistema nao bloqueou automaticamente.

Com esses 3 dados incompletos eu tinha 2 opcoes: (A) bloquear 100% das contas < 7 dias do parceiro X por 24h (impactaria 840 clientes, 15% falsos positivos estimados) ou (B) subir o limite de alerta para R$ 600 e monitorar (deixaria passar 40% das fraudes projetadas). As 7h15 eu tomei a decisao: implementei bloqueio cirurgico - bloqueei contas < 7 dias do parceiro X mas apenas para Pix acima de R$ 600 para CPFs fora da whitelist de relacionamento (ex: nao bloqueei pix para CPF de familiares). Isso reduzia falsos positivos de 15% para 4% mantendo protecao de 89% das fraudes.

As 7h30 eu liguei pessoalmente para o CEO do parceiro X e pedi suspensao temporaria de onboarding ate investigarmos (ele aceitou em 15 minutos). As 8h eu implementei painel live de monitoramento que eu checava a cada 20 minutos e estabeleci 3 gatilhos de rollback: se falsos positivos > 6%, se NPS cair > 5 pontos, ou se fraudes vazarem > R$ 200k, eu reverteria a decisao.`,
    r: `O impacto mensurável da decisão rápida foi significativo — economizamos R$ 2.05M e mantivemos a experiência dos clientes legítimos intacta.

O bloqueio cirurgico funcionou: contivemos 89% das fraudes projetadas economizando R$ 2.05M das R$ 2.3M em risco. Bloqueamos 312 transacoes fraudulentas confirmadas e tivemos apenas 34 falsos positivos (4.0%, dentro do gate de 6%). O NPS de clientes novos caiu apenas 2 pontos (de 64 para 62) e se recuperou em 3 dias quando liberamos gradualmente.

As 14h o time de fraude chegou e confirmou minha hipotese: era esquema coordenado de mulas usando vulnerabilidade no KYC do parceiro X. Fechamos a vulnerabilidade em 48h e o CEO do parceiro implementou verificacao adicional de documenting. Nos 30 dias seguintes fraude via parceiro X caiu 94%. A decisao rapida com dados incompletos mas criterios claros virou case study interno de bias for action com risk management: eu apresentei o playbook (sinais minimos, opcoes binaras, gates de rollback) e ele foi adotado em outros 3 casos de fraude emergencial.`,
    l: `A lição principal desse caso mudou minha compreensão sobre decisão sob incerteza: decisão rápida não é agir cegamente, é agir com sinais mínimos e mecanismos de controle.

Aprendi que decisao rapida sob incerteza exige 3 elementos: (1) Coletar sinais minimos suficientes (nao esperar dados perfeitos) - 3 sinais em 1h15min foram suficientes; (2) Definir opcoes binarias claras e gates objetivos de rollback - isso acelera a decisao; (3) Implementar monitorizacao intensiva pos-decisao para ajustar rapido se necessario - checava painel a cada 20min.

Usei esse modelo depois na Unimed quando modelo de IA de autorizacao medica comecou a aprovar 8% acima do esperado: em 2 horas coletei 3 sinais, implementei throttling cirurgico (reduzi aprovacao automatica de 82% para 65% temporariamente), estabeleci gates e monitorei intensivamente. Ajustei o modelo em 18 horas e voltei aos 82% sem incidentes. Bias for action nao e agir cegamente, e agir rapido com sinais minimos e mecanismos de controle.`
  },
  en: {
    s: `"BRL 2.3 million at risk by end of day — you have 4 hours to decide" the NOC leader told me at 6:05am, right after detecting the fraud attack.

On August 14, 2021 at 6am I received critical alert from NOC: suspicious Pix transactions spiked 340% in 90 minutes (from 45 per hour to 198 per hour). The fraud model was signaling a new pattern we'd never seen: newly-opened accounts (< 7 days) making medium-value Pix (BRL 800-1,200) to 23 different CPFs in rapid sequence (< 3 minutes between transactions).

The problem was critical and data incomplete: the KYC system was under maintenance so we couldn't verify complete history of recipient CPFs, and the fraud team would only arrive at 9am. I needed to decide in max 4 hours: block all transactions (impacting 100% of new customers, including legitimate ones) or let it pass and risk projected loss of BRL 2.3M by end of day.`,
    t: `The critical challenge was making a decision in 4 hours with incomplete data, balancing financial protection and customer experience. I was the Head of Payments responsible for protecting Sicredi from fraud while maintaining customer experience. My personal responsibility was to make fast decision under uncertainty to balance financial loss risk versus risk of blocking legitimate customers. I had authority to implement temporary blocks without committee approval when there was material risk.`,
    a: `My approach was to collect minimum signals in record time and implement surgical blocking with intensive monitoring.

At 6:15am I activated emergency protocol and called 4 key people: NOC leader, senior fraud analyst (whom I managed to wake up), payments engineer, and compliance officer. By 6:30am I had collected 3 signals: (1) 87% of suspicious accounts had been opened via partner X (marketplace); (2) recipient CPFs had 64% overlap with known mule database (partial data from old system); (3) average ticket of BRL 950 was below configured alert limit (BRL 1,500) so system didn't auto-block.

With these 3 incomplete data points I had 2 options: (A) block 100% of accounts < 7 days from partner X for 24h (would impact 840 customers, 15% false positives estimated) or (B) raise alert limit to BRL 600 and monitor (would let 40% of projected frauds pass). At 7:15am I made the decision: implemented surgical block - blocked accounts < 7 days from partner X but only for Pix above BRL 600 to CPFs outside relationship whitelist (e.g. didn't block pix to family member CPFs). This reduced false positives from 15% to 4% while maintaining 89% fraud protection.

At 7:30am I personally called partner X's CEO and requested temporary onboarding suspension until we investigated (he accepted in 15 minutes). At 8am I implemented live monitoring dashboard I checked every 20 minutes and established 3 rollback triggers: if false positives > 6%, if NPS drops > 5 points, or if frauds leak > BRL 200k, I would revert the decision.`,
    r: `The measurable impact of the fast decision was significant — we saved BRL 2.05M and kept legitimate customer experience intact.

The surgical block worked: we contained 89% of projected frauds saving BRL 2.05M of the BRL 2.3M at risk. We blocked 312 confirmed fraudulent transactions and had only 34 false positives (4.0%, within 6% gate). New customer NPS dropped only 2 points (from 64 to 62) and recovered in 3 days when we gradually released.

At 2pm the fraud team arrived and confirmed my hypothesis: it was coordinated mule scheme using vulnerability in partner X's KYC. We closed the vulnerability in 48h and the partner's CEO implemented additional document verification. In the following 30 days fraud via partner X dropped 94%. The fast decision with incomplete data but clear criteria became internal case study of bias for action with risk management: I presented the playbook (minimum signals, binary options, rollback gates) and it was adopted in 3 other emergency fraud cases.`,
    l: `The main lesson from this case changed my understanding of decision-making under uncertainty: fast decision isn't acting blindly, it's acting with minimum signals and control mechanisms.

I learned that fast decision under uncertainty requires 3 elements: (1) Collect minimum sufficient signals (don't wait for perfect data) - 3 signals in 1h15min were enough; (2) Define clear binary options and objective rollback gates - this accelerates decision; (3) Implement intensive post-decision monitoring to adjust quickly if needed - I checked dashboard every 20min.

I used this model later at Unimed when medical authorization AI model started approving 8% above expected: in 2 hours I collected 3 signals, implemented surgical throttling (reduced auto-approval from 82% to 65% temporarily), established gates and monitored intensively. I adjusted the model in 18 hours and returned to 82% without incidents. Bias for action isn't acting blindly, it's acting fast with minimum signals and control mechanisms.`
  },
  fups: [
    {
      q: "Quais foram os 3 sinais minimos que voce coletou em 1h15?",
      a: "Os 3 sinais foram: (1) 87% das contas suspeitas vinham do parceiro X; (2) 64% dos CPFs destinatarios tinham overlap com base de mulas conhecidas; (3) ticket medio de R$ 950 estava abaixo do limite de alerta entao sistema nao bloqueou auto. Com esses 3 sinais eu tinha confianca suficiente para agir.",
      q_en: "What were the 3 minimum signals you collected in 1h15?",
      a_en: "The 3 signals were: (1) 87% of suspicious accounts came from partner X; (2) 64% of recipient CPFs had overlap with known mule database; (3) average ticket of BRL 950 was below alert limit so system didn't auto-block. With these 3 signals I had sufficient confidence to act."
    },
    {
      q: "Por que voce escolheu bloqueio cirurgico em vez de bloqueio total?",
      a: "Eu escolhi cirurgico porque: (1) bloqueio total impactaria 840 clientes com 15% de falsos positivos; (2) cirurgico (só Pix > R$ 600 fora de whitelist) reduzia falsos positivos para 4% mantendo 89% de protecao; (3) isso balanceava risco financeiro (perda) com risco reputacional (NPS). Era o sweet spot.",
      q_en: "Why did you choose surgical block instead of total block?",
      a_en: "I chose surgical because: (1) total block would impact 840 customers with 15% false positives; (2) surgical (only Pix > BRL 600 outside whitelist) reduced false positives to 4% while maintaining 89% protection; (3) this balanced financial risk (loss) with reputational risk (NPS). It was the sweet spot."
    },
    {
      q: "Como voce definiu os gates de rollback?",
      a: "Eu defini 3 gates objetivos: (1) falsos positivos > 6% (dobraria o esperado); (2) NPS cair > 5 pontos (indicaria dano material); (3) fraudes vazarem > R$ 200k (9% do risco total). Se qualquer gate fosse acionado em qualquer hora, eu reverteria a decisao imediatamente e testaria opcao B.",
      q_en: "How did you define rollback gates?",
      a_en: "I defined 3 objective gates: (1) false positives > 6% (would double expected); (2) NPS drop > 5 points (would indicate material damage); (3) frauds leak > BRL 200k (9% of total risk). If any gate triggered at any hour, I would immediately revert decision and test option B."
    },
    {
      q: "Como voce conseguiu que o CEO do parceiro suspendesse onboarding em 15 minutos?",
      a: "Eu apresentei a ele: (1) dados dos 3 sinais mostrando que 87% vinha do dele; (2) projecao de R$ 2.3M em fraude com risco regulatorio BCB; (3) proposta de suspensao temporaria de 48h (nao permanente) para investigarmos juntos. Ele entendeu que era do interesse dele proteger a marca.",
      q_en: "How did you get partner's CEO to suspend onboarding in 15 minutes?",
      a_en: "I presented to him: (1) data from 3 signals showing 87% came from his platform; (2) projection of BRL 2.3M in fraud with BCB regulatory risk; (3) proposal for temporary 48h suspension (not permanent) to investigate together. He understood it was in his interest to protect the brand."
    },
    {
      q: "Que metricas voce monitorou intensivamente pos-decisao?",
      a: "Eu monitorei 4 metricas a cada 20 minutos: (1) numero de transacoes bloqueadas vs projecao (312 vs 350 esperadas); (2) falsos positivos em tempo real (34 = 4.0%); (3) NPS de clientes novos (caiu 2 pontos, dentro do gate de 5); (4) fraudes que vazaram (R$ 250k, acima do gate mas aceitavel dado savings de R$ 2M).",
      q_en: "What metrics did you intensively monitor post-decision?",
      a_en: "I monitored 4 metrics every 20 minutes: (1) number of blocked transactions vs projection (312 vs 350 expected); (2) real-time false positives (34 = 4.0%); (3) new customer NPS (dropped 2 points, within 5-point gate); (4) frauds that leaked (BRL 250k, above gate but acceptable given BRL 2M savings)."
    },
    {
      q: "O que voce teria feito diferente se tivesse mais tempo?",
      a: "Se eu tivesse mais 4-6 horas eu teria: (1) esperado o time de fraude chegar e validar hipotese com dados completos; (2) testado A/B em subgrupo menor (100 clientes) antes de aplicar a 840. Mas com risco de R$ 2.3M eu nao tinha esse luxo - precisava agir com dados minimos suficientes.",
      q_en: "What would you have done differently with more time?",
      a_en: "If I had 4-6 more hours I would have: (1) waited for fraud team to arrive and validate hypothesis with complete data; (2) A/B tested on smaller subset (100 customers) before applying to 840. But with BRL 2.3M at risk I didn't have that luxury - needed to act with minimum sufficient data."
    },
    {
      q: "Como voce balanceou velocidade de decisao com qualidade de decisao?",
      a: "Eu balancei definindo: (1) sinais minimos suficientes (3 sinais em 1h15 eram 60% de confianca, suficiente para decisao reversivel); (2) opcoes binarias claras (A ou B, nada de meio termo); (3) gates objetivos de rollback (se errar, reverter rapido). Velocidade com gates e melhor que perfeicao lenta.",
      q_en: "How did you balance decision speed with decision quality?",
      a_en: "I balanced by defining: (1) minimum sufficient signals (3 signals in 1h15 were 60% confidence, enough for reversible decision); (2) clear binary options (A or B, no middle ground); (3) objective rollback gates (if wrong, revert fast). Speed with gates is better than slow perfection."
    },
    {
      q: "Qual foi a reacao da lideranca quando voce apresentou o playbook?",
      a: "A lideranca adorou porque eu tinha: (1) salvo R$ 2M com decisao rapida; (2) mantido falsos positivos baixos (4%); (3) documentado o processo replicavel. O CFO pediu para eu aplicar o mesmo modelo em outros riscos emergenciais. Virou padrao em 3 outros casos de fraude nos meses seguintes.",
      q_en: "What was leadership's reaction when you presented the playbook?",
      a_en: "Leadership loved it because I had: (1) saved BRL 2M with fast decision; (2) kept false positives low (4%); (3) documented replicable process. The CFO asked me to apply same model to other emergency risks. It became standard in 3 other fraud cases in following months."
    },
    {
      q: "Como voce aplicou esse aprendizado na Unimed com o modelo de IA?",
      a: "Quando o modelo de IA comecou aprovando 8% acima do esperado eu apliquei o mesmo playbook: (1) coletei 3 sinais em 2 horas; (2) implementei throttling cirurgico (reduzi auto-aprovacao de 82% para 65% temp); (3) estabeleci gates de rollback; (4) monitorei intensivamente. Ajustei o modelo em 18h e voltei aos 82% sem incidentes.",
      q_en: "How did you apply this learning at Unimed with the AI model?",
      a_en: "When the AI model started approving 8% above expected I applied same playbook: (1) collected 3 signals in 2 hours; (2) implemented surgical throttling (reduced auto-approval from 82% to 65% temp); (3) established rollback gates; (4) monitored intensively. Adjusted model in 18h and returned to 82% without incidents."
    },
    {
      q: "Qual e a diferenca entre bias for action e imprudencia?",
      a: "Bias for action com risk management significa: (1) agir rapido com dados minimos SUFICIENTES (nao zero dados); (2) definir opcoes claras e gates objetivos de rollback; (3) monitorar intensivamente para ajustar. Imprudencia e agir sem sinais, sem gates, sem monitoramento. A diferenca esta nos mecanismos de controle, nao na velocidade.",
      q_en: "What's the difference between bias for action and recklessness?",
      a_en: "Bias for action with risk management means: (1) act fast with SUFFICIENT minimum data (not zero data); (2) define clear options and objective rollback gates; (3) monitor intensively to adjust. Recklessness is acting without signals, without gates, without monitoring. The difference is in control mechanisms, not speed."
    }
  ]
};

export default case_5;
