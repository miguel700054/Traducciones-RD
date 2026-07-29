export const AGENCY_INFO = {
  name: 'Traducciones RD',
  tagline: 'Agencia de Traductores Certificados',
  founder: 'Gilda Amelia Julián',
  founderTitle: 'Traductora Legal Certificada',
  experience: '+30 años de trayectoria',
  phone: '(829) 345-6136',
  phoneClean: '8293456136',
  address: 'Avenida Rómulo Betancourt #1308, 2do piso, Suite 211, 1308 Corporate Center, Santo Domingo, Dominican Republic 10112',
  website: 'traducciones-rd.com',
  websiteUrl: 'https://traducciones-rd.com',
  instagram: 'traducciones_rd',
  instagramUrl: 'https://instagram.com/traducciones_rd',
  languages: 'Traducciones en todos los idiomas'
};

export const CATEGORIES = [
  { id: 'todos', name: 'Todos los Artículos', icon: 'Sparkles' },
  { id: 'legal', name: 'Traducción Legal Certificada', icon: 'Scale' },
  { id: 'idiomas', name: 'Idiomas & Traductores', icon: 'Globe' },
  { id: 'novedades', name: 'Novedades & Noticias', icon: 'Sparkles' }
];

export const BLOG_POSTS = [
  {
    id: 'guia-completa-sobre-las-traducciones-legales-en-rd',
    title: 'Guía Completa sobre las Traducciones Legales en República Dominicana',
    subtitle: 'Todo lo que necesitas saber sobre procesos, requisitos y validez jurídica.',
    category: 'legal',
    categoryName: 'Traducción Legal Certificada',
    author: {
      name: 'Lcda. Gilda Amelia Julián',
      role: 'Traductora Legal Certificada',
      avatar: '/hero-bg.png'
    },
    date: '29 de Julio, 2026',
    readTime: '5 min de lectura',
    featuredImage: '/blog-legal.png',
    tags: ['Traducción Legal', 'República Dominicana', 'Documentos Oficiales', 'Validez Jurídica'],
    likes: 42,
    audioDuration: '4:30',
    excerpt: 'En un mundo globalizado, realizar trámites internacionales requiere que cada palabra mantenga su validez jurídica exacta. Descubre qué es una traducción legal, qué documentos la requieren y cómo evitar demoras.',
    content: `
      <p className="text-lg leading-relaxed font-serif text-[var(--text-primary)]">
        En un mundo globalizado, realizar trámites internacionales —como solicitar una visa, expandir un negocio al extranjero, estudiar en una universidad internacional o validar documentos oficiales— requiere que cada palabra mantenga su validez jurídica exacta en el idioma de destino. En la República Dominicana, una simple traducción no siempre es suficiente; la <strong>traducción legal o jurada</strong> es la única que otorga validez legal ante organismos públicos y privados.
      </p>

      <p>A continuación, te explicamos en qué consiste este proceso, qué documentos la requieren y cómo garantizar que tus trámites se realicen sin contratiempos.</p>

      <h3 className="font-serif text-2xl font-bold text-[var(--brand-sage)] pt-4">1. ¿Qué es una Traducción Legal en República Dominicana?</h3>
      <p>Una traducción legal (o traducción jurada) es la traducción fiel e íntegra de un documento con valor jurídico, realizada por un Intérprete Judicial designado por el Poder Judicial o autorizado según la normativa dominicana.</p>

      <p>A diferencia de una traducción comercial o informal, la traducción legal lleva la firma, sello y certificación oficial del traductor. Esto le otorga fe pública, lo que significa que las autoridades estatales, tribunales y embajadas la reconocen como una copia auténtica y con validez jurídica del documento original.</p>

      <div className="p-5 rounded-2xl bg-[var(--brand-sage-light)] border-l-4 border-[var(--brand-sage)] my-6">
        <h4 className="font-bold text-sm text-[var(--brand-sage)] uppercase tracking-wider mb-1">Dato Clave</h4>
        <p className="text-sm text-[var(--text-primary)] leading-relaxed">
          Los documentos emitidos en idiomas distintos al español deben ser traducidos legalmente para tener validez ante instituciones oficiales en República Dominicana (como la Junta Central Electoral, embajadas o tribunales). De igual manera, si presentas documentos dominicanos en el exterior, deberán traducirse al idioma del país receptor.
        </p>
      </div>

      <h3 className="font-serif text-2xl font-bold text-[var(--brand-sage)] pt-4">2. Documentos que Requieren Traducción Legal</h3>
      <p>Los trámites gubernamentales, corporativos y académicos suelen exigir traducciones juradas. Los documentos más comunes incluyen:</p>

      <div className="overflow-x-auto my-6 border border-[var(--border-color)] rounded-2xl">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-[var(--brand-teal)] text-white font-serif">
              <th className="p-3.5 border-b border-emerald-900">Categoría</th>
              <th className="p-3.5 border-b border-emerald-900">Ejemplos de Documentos</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-color)] bg-[var(--bg-card)]">
            <tr>
              <td className="p-3.5 font-bold text-[var(--text-primary)]">Documentos Personales y Civiles</td>
              <td className="p-3.5 text-[var(--text-secondary)]">Actas de nacimiento, matrimonio, divorcio o defunción; certificados de antecedentes penales.</td>
            </tr>
            <tr>
              <td className="p-3.5 font-bold text-[var(--text-primary)]">Documentos Académicos</td>
              <td className="p-3.5 text-[var(--text-secondary)]">Títulos universitarios, certificados de bachillerato, récord de notas y diplomas.</td>
            </tr>
            <tr>
              <td className="p-3.5 font-bold text-[var(--text-primary)]">Documentos Corporativos</td>
              <td className="p-3.5 text-[var(--text-secondary)]">Estatutos sociales, registros mercantiles, actas de asambleas, estados financieros y contratos de licitación.</td>
            </tr>
            <tr>
              <td className="p-3.5 font-bold text-[var(--text-primary)]">Documentos Judiciales y Notariales</td>
              <td className="p-3.5 text-[var(--text-secondary)]">Sentencias de divorcio, poderes notariales, declaraciones juradas, exhortos y demandas.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-serif text-2xl font-bold text-[var(--brand-sage)] pt-4">3. El Proceso de Legalización y Verificación</h3>
      <p>Para que una traducción legal tenga plena validez internacional o institucional, a menudo debe pasar por un proceso de verificación:</p>

      <ol className="list-decimal list-inside space-y-2 pl-2 text-[var(--text-secondary)]">
        <li><strong>Traducción Oficial:</strong> El documento original es traducido y certificado por el intérprete judicial.</li>
        <li><strong>Certificación de Firma:</strong> La firma del traductor es validada ante la Procuraduría General de la República (PGR).</li>
        <li><strong>Legalización o Verificación Consular:</strong> Si el país de destino forma parte de convenios internacionales o embajadas oficiales, se completa la certificación requerida por la institución.</li>
      </ol>

      <h3 className="font-serif text-2xl font-bold text-[var(--brand-sage)] pt-6">4. ¿Por Qué es Crucial la Precisión en la Traducción Jurada?</h3>
      <p>Un error de traducción en un contrato o certificado puede tener consecuencias costosas:</p>

      <ul className="list-disc list-inside space-y-2 pl-2 text-[var(--text-secondary)]">
        <li><strong>Rechazo de expedientes de visado</strong> por inconsistencias en la información personal.</li>
        <li><strong>Retrasos en procesos judiciales o comerciales</strong>, lo que genera costos adicionales de tiempo y dinero.</li>
        <li><strong>Invalidez de contratos internacionales</strong> si los términos legales no se corresponden exactamente con la jurisdicción de origen.</li>
      </ul>

      <div className="mt-10 p-8 rounded-3xl bg-[var(--brand-teal)] text-white shadow-xl space-y-4">
        <h4 className="font-serif text-xl sm:text-2xl font-bold" style={{ color: '#F5EFE6' }}>
          TRADUCCIONES RD: Tus Documentos en Manos Profesionales
        </h4>
        <p className="text-xs sm:text-sm text-[#E1EDE7] leading-relaxed">
          En TRADUCCIONES RD comprendemos la urgencia y la responsabilidad que conlleva cada documento legal. Nuestro equipo de profesionales garantiza traducciones precisas, confidenciales y ajustadas a los estándares exigidos por embajadas, ministerios e instituciones judiciales dentro y fuera del país.
        </p>
        <p className="text-xs sm:text-sm text-[#E1EDE7] leading-relaxed">
          Si necesitas traducir o legalizar tus documentos para trámites académicos, migratorios o empresariales, TRADUCCIONES RD te ofrece un servicio rápido, confiable y adaptado a tus tiempos.
        </p>
        <p className="text-sm font-bold text-[#F5EFE6] pt-2">
          TELÉFONO DE CONTACTO: (829) 345-6136
        </p>
      </div>
    `
  }
];
