import { Question } from '../types';

export const rawQuizData: Question[] = [
  {
    id: 1,
    periodo: "José Joaquín Prieto",
    eje: "Institucionalidad",
    tipo: "Fuente Escrita (Constitución 1833)",
    recurso: "ART. 82: Son facultades del Presidente: declarar el estado de sitio... nombrar y remover a voluntad a los ministros... ejercer el Patronato sobre la Iglesia.",
    pregunta: "A partir del texto, ¿qué característica del sistema portaliano se desprende?",
    opciones: [
      "El predominio del Poder Ejecutivo sobre los demás órganos.",
      "La descentralización del poder político.",
      "La instauración de una democracia directa.",
      "La limitación total de la figura presidencial."
    ],
    correcta: "El predominio del Poder Ejecutivo sobre los demás órganos.",
    explicacion: "El texto evidencia las facultades extraordinarias que hacían del Presidente el eje central del orden conservador.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Constitucion_Chile_1833.JPG/600px-Constitucion_Chile_1833.JPG"
  },
  {
    id: 2,
    periodo: "José Joaquín Prieto",
    eje: "Institucionalidad",
    tipo: "Imagen (Diego Portales)",
    recurso: "Carta de Portales (1822): 'La democracia... es un absurdo en los países como los nuestros, donde los ciudadanos carecen de virtud'.",
    pregunta: "Según el recurso, ¿cuál era la condición previa para Portales antes de aplicar la democracia?",
    opciones: [
      "La educación y moralización de la ciudadanía.",
      "La derrota militar de España.",
      "La eliminación de la religión católica.",
      "La riqueza de todos los habitantes."
    ],
    correcta: "La educación y moralización de la ciudadanía.",
    explicacion: "Portales planteaba que sin un pueblo 'moralizado', la democracia solo traería anarquía.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Diego_Portales_Palazuelos.jpg/600px-Diego_Portales_Palazuelos.jpg"
  },
  {
    id: 3,
    periodo: "José Joaquín Prieto",
    eje: "Economía",
    tipo: "Inferencia Económica",
    recurso: "En 1832, Juan Godoy descubre el mineral de Chañarcillo. En pocos años, la plata representó el 70% de las exportaciones mineras.",
    pregunta: "¿Cómo impactó este hallazgo en la estabilidad del gobierno de Prieto?",
    opciones: [
      "Permitió financiar la burocracia estatal y pagar la deuda externa.",
      "Provocó la caída inmediata de la agricultura.",
      "Obligó a Chile a pedir préstamos a Bolivia.",
      "Hizo que el Estado abandonara el puerto de Valparaíso."
    ],
    correcta: "Permitió financiar la burocracia estatal y pagar la deuda externa.",
    explicacion: "La riqueza minera fue el sustento material para consolidar las instituciones conservadoras.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Juan_Godoy_Chañarcillo.jpg/600px-Juan_Godoy_Chañarcillo.jpg"
  },
  {
    id: 4,
    periodo: "José Joaquín Prieto",
    eje: "Territorio",
    tipo: "Mapa (Guerra Confederación)",
    recurso: "Portales a Blanco Encalada: 'La Confederación debe desaparecer para siempre jamás del escenario de América'.",
    pregunta: "¿Cuál era el principal temor geopolítico de Chile respecto a la unión Perú-Boliviana?",
    opciones: [
      "La amenaza a la hegemonía comercial chilena en el Pacífico.",
      "La pérdida de la soberanía sobre el Estrecho de Magallanes.",
      "El temor a que Santa Cruz restaurara la monarquía española.",
      "La falta de soldados para defender Santiago."
    ],
    correcta: "La amenaza a la hegemonía comercial chilena en el Pacífico.",
    explicacion: "Chile veía en la Confederación un competidor comercial y político que rompería el equilibrio regional.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Confederacion_Peru-Boliviana.png/600px-Confederacion_Peru-Boliviana.png"
  },
  {
    id: 5,
    periodo: "José Joaquín Prieto",
    eje: "Institucionalidad",
    tipo: "Análisis de Coyuntura",
    recurso: "El asesinato de Portales en 1837 por oficiales amotinados generó indignación pública contra la Confederación.",
    pregunta: "¿Qué efecto político inesperado tuvo este asesinato?",
    opciones: [
      "La unión de la opinión pública en favor del conflicto bélico.",
      "El fin inmediato de la guerra.",
      "La entrega del mando a un general peruano.",
      "La renuncia masiva de todo el gabinete de Prieto."
    ],
    correcta: "La unión de la opinión pública en favor del conflicto bélico.",
    explicacion: "El magnicidio transformó una guerra impopular en una causa nacional de venganza y unidad.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Asesinato_de_Portales.jpg/600px-Asesinato_de_Portales.jpg"
  },
  {
    id: 6,
    periodo: "José Joaquín Prieto",
    eje: "Institucionalidad",
    tipo: "Documento (Voto Censitario)",
    recurso: "La ley exigía para votar: ser mayor de 25 (o 21 casado), saber leer y escribir, y poseer un capital o renta determinada.",
    pregunta: "¿Qué grupo social quedaba mayoritariamente excluido del proceso político?",
    opciones: [
      "Los sectores populares y el campesinado analfabeto.",
      "La aristocracia terrateniente.",
      "Los comerciantes de Valparaíso.",
      "Los oficiales de alto rango del ejército."
    ],
    correcta: "Los sectores populares y el campesinado analfabeto.",
    explicacion: "El voto censitario limitaba la ciudadanía a una élite económica, excluyendo a la gran masa de trabajadores.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Votación_en_Chile_siglo_XIX.jpg/600px-Votación_en_Chile_siglo_XIX.jpg"
  },
  {
    id: 7,
    periodo: "José Joaquín Prieto",
    eje: "Economía",
    tipo: "Retrato (Manuel Rengifo)",
    recurso: "Conocido como el 'mago de las finanzas', Rengifo eliminó impuestos internos y reformó las aduanas para atraer barcos extranjeros.",
    pregunta: "¿Cuál fue el principal resultado de las políticas de Rengifo?",
    opciones: [
      "La consolidación de Valparaíso como puerto principal del Pacífico.",
      "El aislamiento comercial de Chile.",
      "La quiebra del sistema bancario nacional.",
      "La prohibición de importar productos europeos."
    ],
    correcta: "La consolidación de Valparaíso como puerto principal del Pacífico.",
    explicacion: "Sus reformas hicieron de Valparaíso el centro logístico y financiero más importante de la costa oeste.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Manuel_Rengifo_y_Cárdenas.jpg/600px-Manuel_Rengifo_y_Cárdenas.jpg"
  },
  {
    id: 8,
    periodo: "José Joaquín Prieto",
    eje: "Cultura",
    tipo: "Ilustración Científica (Claudio Gay)",
    recurso: "En 1830, el Estado contrata a Gay para 'formar el inventario de la naturaleza de Chile'. De allí nace su obra 'Historia Física y Política'.",
    pregunta: "¿Qué buscaba el Estado conservador al financiar estas expediciones científicas?",
    opciones: [
      "Conocer los recursos naturales para su explotación económica.",
      "Entretener a la población con dibujos de animales.",
      "Ocultar la falta de libertades políticas.",
      "Vender los territorios explorados a potencias extranjeras."
    ],
    correcta: "Conocer los recursos naturales para su explotación económica.",
    explicacion: "El conocimiento del territorio era fundamental para el control estatal y el desarrollo de la economía.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Claudio_Gay.jpg/600px-Claudio_Gay.jpg"
  },
  {
    id: 9,
    periodo: "José Joaquín Prieto",
    eje: "Territorio",
    tipo: "Pintura (Batalla de Yungay)",
    recurso: "La victoria del 20 de enero de 1839 marcó la disolución de la Confederación y el regreso triunfal de las tropas chilenas.",
    pregunta: "¿Qué héroe militar emergió de esta batalla como figura política para el próximo decenio?",
    opciones: ["Manuel Bulnes", "Bernardo O'Higgins", "Ramón Freire", "José Miguel Carrera"],
    correcta: "Manuel Bulnes",
    explicacion: "El éxito en Yungay convirtió a Bulnes en el sucesor natural de Prieto.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Batalla_de_Yungay.jpg/600px-Batalla_de_Yungay.jpg"
  },
  {
    id: 10,
    periodo: "José Joaquín Prieto",
    eje: "Economía",
    tipo: "Inferencia Social",
    recurso: "Durante este decenio, el 'estanco' del tabaco y otros monopolios fueron claves para el financiamiento.",
    pregunta: "Este modelo de control estatal sobre el comercio se alineaba con:",
    opciones: [
      "El pensamiento autoritario y regulador de Portales.",
      "El liberalismo económico puro.",
      "El socialismo utópico de la época.",
      "La anarquía de mercado."
    ],
    correcta: "El pensamiento autoritario y regulador de Portales.",
    explicacion: "Portales provenía del mundo mercantil (Estanco) y creía que el Estado debía dirigir los hilos de la economía.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Valparaiso_1830.jpg/600px-Valparaiso_1830.jpg"
  },
  {
    id: 11,
    periodo: "Manuel Bulnes",
    eje: "Institucionalidad",
    tipo: "Fuente Escrita (Amnistía)",
    recurso: "Bulnes: 'En el campo de batalla de Yungay solo vi chilenos. Mi gobierno será para todos, sin distinción de bandos'.",
    pregunta: "¿Qué política social impulsó Bulnes tras asumir la presidencia?",
    opciones: [
      "La reconciliación nacional y el retorno de los exiliados políticos.",
      "La expulsión definitiva de los liberales.",
      "La prohibición de leer libros extranjeros.",
      "El inicio de una nueva guerra civil."
    ],
    correcta: "La reconciliación nacional y el retorno de los exiliados políticos.",
    explicacion: "Su decenio se conoce como de 'paz y reconciliación' tras el autoritarismo rígido de Portales.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Manuel_Bulnes_Pinto_retrato.jpg/600px-Manuel_Bulnes_Pinto_retrato.jpg"
  },
  {
    id: 12,
    periodo: "Manuel Bulnes",
    eje: "Territorio",
    tipo: "Mapa (Estrecho de Magallanes)",
    recurso: "La Goleta Ancud, enviada por Bulnes en 1843, toma posesión del Estrecho solo 24 horas antes que una expedición francesa.",
    pregunta: "¿Cuál fue la importancia estratégica de este hito?",
    opciones: [
      "Asegurar el control de la única ruta marítima entre el Atlántico y el Pacífico.",
      "Encontrar minas de oro en la Antártica.",
      "Establecer una prisión para los liberales en el sur.",
      "Evitar que Argentina se apoderara de Santiago."
    ],
    correcta: "Asegurar el control de la única ruta marítima entre el Atlántico y el Pacífico.",
    explicacion: "En un mundo sin canal de Panamá, el Estrecho de Magallanes era el paso vital para el comercio mundial.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Fuerte_Bulnes_Estrecho.jpg/600px-Fuerte_Bulnes_Estrecho.jpg"
  },
  {
    id: 13,
    periodo: "Manuel Bulnes",
    eje: "Cultura",
    tipo: "Fuente Escrita (Andrés Bello)",
    recurso: "Bello (1843): 'La Universidad no sería digna de este nombre si... no fuera una institución eminentemente nacional'.",
    pregunta: "Según el recurso, ¿cuál era la función principal de la Universidad de Chile?",
    opciones: [
      "Servir al progreso y desarrollo de la Nación y el Estado.",
      "Enseñar religión católica exclusivamente.",
      "Ser un club social para la aristocracia.",
      "Traducir libros franceses únicamente."
    ],
    correcta: "Servir al progreso y desarrollo de la Nación y el Estado.",
    explicacion: "La Universidad nació como el órgano estatal encargado de pensar y organizar el país.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Andrés_Bello_por_Monvoisin.jpg/600px-Andrés_Bello_por_Monvoisin.jpg"
  },
  {
    id: 14,
    periodo: "Manuel Bulnes",
    eje: "Cultura",
    tipo: "Análisis Literario (Generación del 42)",
    recurso: "Surgen autores como Lastarria, Bilbao y Salvador Sanfuentes, quienes proponen una literatura con identidad propia y liberal.",
    pregunta: "¿Cómo se relacionó este movimiento intelectual con el gobierno?",
    opciones: [
      "Fue la base del pensamiento crítico y liberal que desafiaría el orden portaliano.",
      "Fue un movimiento de apoyo total al conservadurismo.",
      "Fue un grupo que pedía el regreso de la corona española.",
      "Fue una escuela de científicos dedicados a la botánica."
    ],
    correcta: "Fue la base del pensamiento crítico y liberal que desafiaría el orden portaliano.",
    explicacion: "La Generación del 42 sembró las semillas del liberalismo que florecería años más tarde.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Jose_Victorino_Lastarria.jpg/600px-Jose_Victorino_Lastarria.jpg"
  },
  {
    id: 15,
    periodo: "Manuel Bulnes",
    eje: "Territorio",
    tipo: "Documento (Ley de Colonización)",
    recurso: "El agente Vicente Pérez Rosales reclutó a miles de colonos alemanes para 'civilizar' y producir en las selvas de Valdivia y Llanquihue.",
    pregunta: "¿Por qué el Estado prefirió inmigrantes europeos para estas zonas?",
    opciones: [
      "Por la creencia en que su cultura traería progreso técnico y disciplina laboral.",
      "Porque no había chilenos interesados en la agricultura.",
      "Porque Alemania era dueña de esos territorios.",
      "Porque los indígenas del sur pidieron colonos alemanes."
    ],
    correcta: "Por la creencia en que su cultura traería progreso técnico y disciplina laboral.",
    explicacion: "Existía una visión eurocéntrica que vinculaba la migración europea con el desarrollo civilizatorio.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Colonos_alemanes_Chile.jpg/600px-Colonos_alemanes_Chile.jpg"
  },
  {
    id: 16,
    periodo: "Manuel Bulnes",
    eje: "Economía",
    tipo: "Inferencia Económica (Trigo)",
    recurso: "En 1848 se descubre oro en California. Chile se convierte en el principal proveedor de harina para los mineros.",
    pregunta: "¿Qué sector de la economía chilena se vio más beneficiado?",
    opciones: [
      "Los grandes terratenientes de la zona central (agricultura).",
      "Los mineros de la plata en el norte.",
      "Los artesanos de Santiago.",
      "Los pescadores de Magallanes."
    ],
    correcta: "Los grandes terratenientes de la zona central (agricultura).",
    explicacion: "La exportación de trigo y harina hacia California trajo una era de riqueza a las haciendas chilenas.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Molino_antiguo_chile.jpg/600px-Molino_antiguo_chile.jpg"
  },
  {
    id: 17,
    periodo: "Manuel Bulnes",
    eje: "Cultura",
    tipo: "Imagen (Escuela de Artes y Oficios)",
    recurso: "Fundada en 1849, buscaba 'formar obreros hábiles y honrados' para las nuevas industrias.",
    pregunta: "¿Qué cambio social refleja esta institución?",
    opciones: [
      "El inicio de una preocupación estatal por la educación técnica de los sectores populares.",
      "El fin de la educación universitaria.",
      "La prohibición del trabajo infantil.",
      "El cierre de las iglesias."
    ],
    correcta: "El inicio de una preocupación estatal por la educación técnica de los sectores populares.",
    explicacion: "La EAO representó el esfuerzo por industrializar el país mediante la capacitación de mano de obra local.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Escuela_de_Artes_y_Oficios_Chile.jpg/600px-Escuela_de_Artes_y_Oficios_Chile.jpg"
  },
  {
    id: 18,
    periodo: "Manuel Bulnes",
    eje: "Institucionalidad",
    tipo: "Fuente Escrita (Francisco Bilbao)",
    recurso: "Bilbao en 'Sociabilidad Chilena': 'Nuestro pasado es la esclavitud, nuestro presente la lucha, nuestro futuro la igualdad'.",
    pregunta: "¿Qué ideología representaba Bilbao y la Sociedad de la Igualdad?",
    opciones: [
      "El liberalismo radical y democrático.",
      "El autoritarismo conservador.",
      "La defensa de los derechos de la Iglesia.",
      "El nacionalismo militarista."
    ],
    correcta: "El liberalismo radical y democrático.",
    explicacion: "Bilbao pedía reformas profundas para dar poder político a los artesanos y trabajadores.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Francisco_Bilbao_B.jpg/600px-Francisco_Bilbao_B.jpg"
  },
  {
    id: 19,
    periodo: "Manuel Bulnes",
    eje: "Cultura",
    tipo: "Ciencia (Ignacio Domeyko)",
    recurso: "Domeyko recorrió el norte estudiando los yacimientos. Impulsó la modernización de la química y física.",
    pregunta: "¿Cuál fue el legado más importante de Domeyko para Chile?",
    opciones: [
      "El impulso a la educación científica aplicada a la minería.",
      "Inventar una nueva moneda.",
      "El descubrimiento de petróleo en Santiago.",
      "La redacción de una nueva constitución."
    ],
    correcta: "El impulso a la educación científica aplicada a la minería.",
    explicacion: "Domeyko fue clave para que Chile pasara a un modelo minero científico.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ignacy_Domeyko_1884.jpg/600px-Ignacy_Domeyko_1884.jpg"
  },
  {
    id: 20,
    periodo: "Manuel Bulnes",
    eje: "Institucionalidad",
    tipo: "Análisis de Conflicto (Motín de 1851)",
    recurso: "La candidatura de Manuel Montt provocó una guerra civil liderada por el General Cruz en Concepción.",
    pregunta: "¿Qué reclamaban las provincias en esta revolución?",
    opciones: [
      "Mayor autonomía y el fin del centralismo autoritario de Santiago.",
      "El regreso a la monarquía española.",
      "Que el trigo fuera más barato.",
      "La anexión a la República de Argentina."
    ],
    correcta: "Mayor autonomía y el fin del centralismo autoritario de Santiago.",
    explicacion: "Las regiones se rebelaron contra el control absoluto que la élite de Santiago ejercía sobre las elecciones.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Combate_de_Loncomilla.jpg/600px-Combate_de_Loncomilla.jpg"
  },
  {
    id: 21,
    periodo: "Manuel Montt",
    eje: "Institucionalidad",
    tipo: "Imagen (Manuel Montt)",
    recurso: "Montt fue el primer presidente 'civil' puro, sin rango militar.",
    pregunta: "Este perfil de Montt simbolizaba:",
    opciones: [
      "La consolidación del poder civil y el orden institucional.",
      "La debilidad del Estado frente a los militares.",
      "La llegada de los liberales al poder.",
      "La desaparición de la figura del Presidente."
    ],
    correcta: "La consolidación del poder civil y el orden institucional.",
    explicacion: "Con Montt, la institucionalidad civil se impuso definitivamente sobre los caudillos militares.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Manuel_Montt_Torres.jpg/600px-Manuel_Montt_Torres.jpg"
  },
  {
    id: 22,
    periodo: "Manuel Montt",
    eje: "Economía",
    tipo: "Inferencia Tecnológica (Ferrocarril)",
    recurso: "La locomotora 'La Copiapó' unió la mina de plata con el puerto. Luego, Montt inició el tramo Santiago-Valparaíso.",
    pregunta: "¿Qué impacto tuvo el tren en la soberanía del Estado?",
    opciones: [
      "Permitió la movilización rápida de tropas para sofocar rebeliones.",
      "Hizo que los caballos se extinguieran en Chile.",
      "Hizo que el Estado fuera más lento en sus trámites.",
      "Obligó a Chile a depender de Bolivia para el carbón."
    ],
    correcta: "Permitió la movilización rápida de tropas para sofocar rebeliones.",
    explicacion: "Además de la economía, el tren fue una herramienta política para controlar el territorio.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/La_Copiapó_locomotive.jpg/600px-La_Copiapó_locomotive.jpg"
  },
  {
    id: 23,
    periodo: "Manuel Montt",
    eje: "Institucionalidad",
    tipo: "Análisis Jurídico (Código Civil)",
    recurso: "ART. 1: 'La ley es una declaración de la voluntad soberana...'. El Código Civil de 1855 reemplazó las leyes coloniales.",
    pregunta: "¿Qué importancia tiene este código para la vida cotidiana?",
    opciones: [
      "Reguló la propiedad, el matrimonio y los contratos de forma moderna.",
      "Solo servía para los abogados en los tribunales.",
      "Fue un libro de poemas escrito por Andrés Bello.",
      "Hizo que la Iglesia redactara todas las leyes."
    ],
    correcta: "Reguló la propiedad, el matrimonio y los contratos de forma moderna.",
    explicacion: "El Código Civil dio certeza jurídica y modernizó las relaciones entre particulares.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Codigo_civil_chile_primer.jpg/600px-Codigo_civil_chile_primer.jpg"
  },
  {
    id: 24,
    periodo: "Manuel Montt",
    eje: "Institucionalidad",
    tipo: "Conflicto (Cuestión del Sacristán)",
    recurso: "Un simple despido de un sacristán llegó a la Corte Suprema. El Presidente Montt apoyó a la justicia civil.",
    pregunta: "¿Qué principio estaba en juego en este conflicto?",
    opciones: [
      "El derecho de Patronato (Estado sobre Iglesia) vs Autonomía eclesiástica.",
      "El precio del pan en las iglesias.",
      "La elección de un nuevo Papa en Chile.",
      "La construcción de una catedral más grande."
    ],
    correcta: "El derecho de Patronato (Estado sobre Iglesia) vs Autonomía eclesiástica.",
    explicacion: "Fue el quiebre definitivo entre el Estado y el ala conservadora de la Iglesia.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sacristan_issue_chile.jpg/600px-Sacristan_issue_chile.jpg"
  },
  {
    id: 25,
    periodo: "Manuel Montt",
    eje: "Institucionalidad",
    tipo: "Evolución de Partidos",
    recurso: "La división conservadora dio origen al Partido Nacional (Montt-Varistas) y al Partido Conservador (Iglesia).",
    pregunta: "¿Qué consecuencia política tuvo esta división para el gobierno?",
    opciones: [
      "El debilitamiento de la base de apoyo conservadora y nuevas alianzas.",
      "El gobierno se volvió más fuerte que nunca.",
      "La desaparición del Partido Liberal.",
      "La prohibición de todos los partidos políticos."
    ],
    correcta: "El debilitamiento de la base de apoyo conservadora y nuevas alianzas.",
    explicacion: "La unidad conservadora que duró 25 años se rompió, permitiendo que la oposición creciera.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Escudo_Partido_Nacional_Chile.png/600px-Escudo_Partido_Nacional_Chile.png"
  },
  {
    id: 26,
    periodo: "Manuel Montt",
    eje: "Institucionalidad",
    tipo: "Análisis de Alianza (Fusión)",
    recurso: "Liberales y Conservadores ultramontanos se unieron en 1858 para derrotar al autoritarismo de Montt.",
    pregunta: "¿Por qué esta alianza se considera paradojal?",
    opciones: [
      "Porque unía a sectores enemigos (laicos y religiosos) contra el Ejecutivo fuerte.",
      "Porque ambos grupos querían que Chile fuera parte de España.",
      "Porque ambos grupos odiaban la educación gratuita.",
      "Porque estaba compuesta solo por extranjeros."
    ],
    correcta: "Porque unía a sectores enemigos (laicos y religiosos) contra el Ejecutivo fuerte.",
    explicacion: "La necesidad de limitar el poder del Presidente unió a quienes antes no podían estar en la misma mesa.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Alianza_Liberal_Conservadora.jpg/600px-Alianza_Liberal_Conservadora.jpg"
  },
  {
    id: 27,
    periodo: "Manuel Montt",
    eje: "Cultura",
    tipo: "Ley Educativa",
    recurso: "Ley de 1860: 'La instrucción primaria se dará gratuitamente... estará bajo la inspección del Estado'.",
    pregunta: "¿Qué rol asume el Estado con esta ley?",
    opciones: [
      "El de Estado Docente: responsable de asegurar la educación básica.",
      "El de Estado espectador: deja la educación solo en manos de privados.",
      "El de prohibir la educación a las mujeres.",
      "El de cobrar altos impuestos a las escuelas."
    ],
    correcta: "El de Estado Docente: responsable de asegurar la educación básica.",
    explicacion: "Esta ley es el pilar del sistema educacional público chileno del siglo XIX.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Escuela_publica_antigua_chile.jpg/600px-Escuela_publica_antigua_chile.jpg"
  },
  {
    id: 28,
    periodo: "Manuel Montt",
    eje: "Institucionalidad",
    tipo: "Retrato (Pedro León Gallo)",
    recurso: "En 1859, Pedro León Gallo formó un ejército en Copiapó contra Montt.",
    pregunta: "¿Qué representaba esta rebelión minera del norte?",
    opciones: [
      "El conflicto entre la riqueza regional y el centralismo de Santiago.",
      "El deseo de Copiapó de ser una colonia británica.",
      "La lucha por no pagar impuestos al tabaco.",
      "El apoyo incondicional a la candidatura de Antonio Varas."
    ],
    correcta: "El conflicto entre la riqueza regional y el centralismo de Santiago.",
    explicacion: "El norte rico (plata) no aceptaba que Santiago decidiera todo el destino político del país.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Pedro_Leon_Gallo_Goyenechea.jpg/600px-Pedro_Leon_Gallo_Goyenechea.jpg"
  },
  {
    id: 29,
    periodo: "Manuel Montt",
    eje: "Territorio",
    tipo: "Imagen (Puerto Montt)",
    recurso: "Fundada en 1853, fue la puerta para la colonización del lago Llanquihue.",
    pregunta: "¿Cuál fue el principal impacto ambiental y social de este proceso?",
    opciones: [
      "El despeje de selvas para agricultura y desplazamiento de fronteras naturales.",
      "La protección absoluta de los bosques vírgenes.",
      "La construcción de rascacielos industriales.",
      "El abandono total de la zona por parte del Estado."
    ],
    correcta: "El despeje de selvas para agricultura y desplazamiento de fronteras naturales.",
    explicacion: "Se transformó el paisaje del sur mediante la tala de bosques para crear granjas agrícolas.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Puerto_Montt_1862.jpg/600px-Puerto_Montt_1862.jpg"
  },
  {
    id: 30,
    periodo: "Manuel Montt",
    eje: "Institucionalidad",
    tipo: "Balance Histórico",
    recurso: "En 1861 asume Pérez bajo el lema 'gobierno para todos'. Los decenios conservadores terminaban.",
    pregunta: "¿Cuál fue el mayor legado institucional de estos 30 años (1831-1861)?",
    opciones: [
      "La consolidación de un Estado estable y con instituciones fuertes.",
      "La creación de un país sumido en el caos constante.",
      "La dependencia total de la corona española.",
      "La desaparición del puerto de Valparaíso."
    ],
    correcta: "La consolidación de un Estado estable y con instituciones fuertes.",
    explicacion: "A pesar del autoritarismo, Chile logró una estabilidad excepcional para el contexto latinoamericano.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Jose_Joaquin_Perez_Mascayano.jpg/600px-Jose_Joaquin_Perez_Mascayano.jpg"
  }
];
