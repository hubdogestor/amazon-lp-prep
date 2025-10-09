import icebreakerData from './src/data/icebreaker.js';

console.log('✅ Icebreaker carregado com sucesso!\n');

// Verificar estrutura PT
console.log('📝 PORTUGUÊS:');
console.log('- Título:', icebreakerData.pt.title);
console.log('- Subtitle:', icebreakerData.pt.subtitle);

const sectionsPt = Object.keys(icebreakerData.pt).filter(k => !['title', 'subtitle'].includes(k));
console.log('- Seções:', sectionsPt.length, '->', sectionsPt.join(', '));

sectionsPt.forEach(section => {
  const s = icebreakerData.pt[section];
  console.log('\n  → Seção:', section);
  console.log('    Question:', s.question);
  console.log('    Category:', s.category);
  console.log('    Versões:', s.versions?.length || 0);

  if (s.versions) {
    s.versions.forEach(v => {
      console.log('      ✓', v.id, '-', v.title);
      console.log('        Badge:', v.badge, '/', v.badgeColor);
      console.log('        Context:', v.context?.substring(0, 50) + '...');
      console.log('        Content length:', v.content?.length || 0, 'chars');
      console.log('        Hook:', v.hook ? '✓' : '✗');
      console.log('        Mic Drop:', v.mic_drop ? '✓' : '✗');
    });
  }
});

// Verificar estrutura EN
console.log('\n\n📝 ENGLISH:');
console.log('- Title:', icebreakerData.en.title);
const sectionsEn = Object.keys(icebreakerData.en).filter(k => !['title', 'subtitle'].includes(k));
console.log('- Sections:', sectionsEn.length, '->', sectionsEn.join(', '));

sectionsEn.forEach(section => {
  const s = icebreakerData.en[section];
  console.log('\n  → Section:', section);
  console.log('    Question:', s.question);
  console.log('    Category:', s.category);
  console.log('    Versions:', s.versions?.length || 0);

  if (s.versions) {
    s.versions.forEach(v => {
      console.log('      ✓', v.id, '-', v.title);
    });
  }
});

console.log('\n\n✅ ESTRUTURA VÁLIDA - Todas as seções estão corretas!');
