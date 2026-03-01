import './Noticias.css';

// Importaciones de imágenes
import triatlon1 from '../assets/img/triatlon1.jpg';
import triatlon2 from '../assets/img/triatlon2.jpg';
import vermut from '../assets/img/vermut.jpg';
import escalada from '../assets/img/escalada.jpg';
import turia from '../assets/img/turia.jpg';
import fallas from '../assets/img/fallas.jpg';
import cerveza from '../assets/img/cerveza.jpg';
import natacion from '../assets/img/natacion.jpg';


// 1. Definimos la Interfaz: El "contrato" que debe cumplir cada noticia
interface Noticia {
  id: number;
  titulo: string;
  subtitulo: string;
  cuerpo: string;
  rutaImagen: string; 
}

// 2. Aplicamos la interfaz al array (Noticia[])
const listaNoticias: Noticia[] = [
  {
     id: 1,
    titulo: 'MTri Valencia 2026: Récord de inscripciones',
    subtitulo: 'Triatlón',
    cuerpo: 'La edición de este año promete ser histórica. Con más de 3.000 participantes confirmados, el MTri Valencia se consolida como la cita ineludible del Mediterráneo. La Mediterránea Triatlón (MTRI) València 2026 se celebrará el 27 y 28 de junio de 2026 en la Playa de la Malvarrosa, formando parte de la "Gay Games Edition". Será una prueba abierta a federados y no federados con distancias Supersprint, Sprint y Olímpico, además de incluir paratriatlón y dúatlon familiar, consolidándose como un gran evento internacional.',
    rutaImagen: triatlon1,
  },
  {
    id: 2,
    titulo: 'Sprint',
    subtitulo: 'Deporte',
    cuerpo: 'La distancia Sprint triatlón es justo la mitad que la del triatlón estándar: 750 metros de natación, 20 km de ciclismo y 5 km de carrera a pie. Esta modalidad, con un volumen moderado de kilómetros de triatlón, es muy practicada por deportistas populares.El sprint es el punto de entrada más habitual: suficientemente real como para sentir que has hecho un triatlón completo, pero todavía manejable si no tienes un volumen de entrenamiento enorme.',
    rutaImagen: triatlon2,
  },
  {
    id: 3,
    titulo: 'Alex Honnold y su presunto desprecio por la vida: "No es un suicida, sino todo lo contrario"',
    subtitulo: 'Aventura',
    cuerpo: 'Honnold fue el protagonista de la ascensión al rascacielos Taipei 101, de 508 metros de altura, retransmitida en directo por Netflix. Sin cuerdas, ni ninguna otra medida de seguridad, como es su costumbre. Un logro sencillo a nivel técnico para él, empeñado, desde hace años, en burlar a la muerte.',
    rutaImagen: escalada,
  },
  {
    id: 4,
    titulo: 'Circuito Turia: El pulmón verde',
    subtitulo: 'Running',
    cuerpo: 'El Jardín del Turia sigue siendo el lugar preferido por los valencianos para entrenar. Repasamos los mejores tramos para series y rodajes largos. El ‘Circuit 5K Jardí del Turia’ es una infraestructura deportiva destinada a ordenar el uso de los corredores en un espacio ideal para correr. Un carril específico para la práctica del running, con 5.731 metros de un especial trazado para corredores y la práctica del running, con muchas ventajas para los usuarios y amantes de este deporte.',
    rutaImagen: turia,
  },
  {
    id: 5,
    titulo: 'Fallas 2026',
    subtitulo: 'Cultura',
    cuerpo: 'València disparará más de 7 toneladas de pólvora estas Fallas en la plaza de L’Ajuntament, en los castillos que se celebran en el Pont de Montolivet y en varios espectáculos pirotécnicos. En total, el Ayuntamiento disparará 19 mascletades en la plaza de L’Ajuntament, 8 espectáculos nocturnos, L’Alba de les Falles, 2 castillos de fuegos artificiales, 1 cierre de la Cavalcada del Foc, la Nit del Foc y la Nit de la Cremà. Son, en total, 7.002,18 kilos de material pirotécnico reglamentado, de los que 3.465,11 se dispararán en las mascletades del mediodía en la plaza de L’Ajuntament. El resto se repartirá entre los espectáculos nocturnos, los castillos y la Nit del Foc.',
    rutaImagen: fallas,
  },
  {
    id: 6,
    titulo: 'Cerveza Artesanal',
    subtitulo: 'Gastronomía',
    cuerpo: 'Hort de Montanya. En Familia Serra nos hemos unido al mundo de las cervezas artesanas descubriendo una gama de sabores y aromas que desconocíamos y que nos han sorprendido gratamente. Las cervezas artesanas se caracterizan por ser elaboradas en pequeñas cantidades poniendo mucho énfasis en el sabor y la técnica de fermentación. Todo el proceso es natural y se utiliza una técnica de doble fermentación, primero en barril y luego en botella. A través de métodos de elaboración que estaban en desuso se consigue una cerveza de alta calidad. Usando ingredientes naturales como agua, malta de cebada, malta de trigo, lúpulo, levadura y con cortezas de nuestros cítricos, conseguimos unos sabores, matices y aromas imposibles de descubrir en las cervezas industriales.lizamos las mejores microcervecerías locales donde disfrutar de una recompensa bien fría tras una dura sesión de entrenamiento.',
    rutaImagen: cerveza,
  },
  {
    id: 7,
    titulo: 'Consejos para iniciarse en la natación en aguas abiertas',
    subtitulo: 'Entrenamiento',
    cuerpo: 'Por mucha experiencia que tengamos nadando en la piscina, hacerlo en el mar no es lo mismo. La técnica varía significativamente, teniendo en cuenta que en el mar nos encontramos en un entorno cambiante y en constante movimiento. En un momento podemos estar nadando tranquilamente y al siguiente tener que acelerar nuestra brazada para poder seguir avanzando. Estos cambios de ritmo, al contrario que en la piscina, pueden llegar a ser constantes en aguas abiertas, por lo que será importante trabajarlos a conciencia en nuestras sesiones de trabajo técnico.',
    rutaImagen: natacion,
  },
  {
    id: 8,
    titulo: 'El ritual del Vermut en el Cabanyal',
    subtitulo: 'Ocio',
    cuerpo: 'El Cabanyal se viste de nuevo de fiesta para celebrar uno de sus rituales más emblemáticos: la hora del vermut. Este próximo sábado 7 de febrero de 2026, el gastromercado Mercader organiza una feria dedicada al aperitivo mediterráneo, combinando degustaciones de vermut, propuestas gastronómicas de sus operadores y música en directo durante toda la jornada. Una cita que conecta memoria, barrio y cultura, recuperando la esencia de un tiempo suspendido entre la mañana y la comida.',
    rutaImagen: vermut,
  }
];

// 3. El componente permanece limpio y tipado
// 3. El componente con el titular añadido
function Noticias() {
  return (
    // Usamos un contenedor principal o fragment para envolver el título y la sección
    <main className="noticias-wrapper">
      
      {/* Tu nuevo titular en negrita */}
      <h1 className="noticias-principal-title">NOTICIAS</h1>

      <section className="noticias-container">
        {listaNoticias.map((noticia) => (
          <article key={noticia.id} className="noticia-card">
            <div className="noticia-imagen-wrapper">
              <img
                src={noticia.rutaImagen}
                alt={noticia.titulo}
                className="noticia-img"
                loading="lazy"
              />
            </div>

            <div className="noticia-contenido">
              <h1>{noticia.titulo}</h1>
              <h2>{noticia.subtitulo}</h2>
              <p>{noticia.cuerpo}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Noticias;