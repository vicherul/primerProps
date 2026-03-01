

// Definimos qué datos necesita recibir este componente
interface NoticiaCardProps {
  titulo: string;
  subtitulo: string;
  cuerpo: string;
  rutaImagen: string;
}

const NoticiaCard = ({ titulo, subtitulo, cuerpo, rutaImagen }: NoticiaCardProps) => {
  return (
    <article className="noticia-card">
      <div className="noticia-imagen-wrapper">
        <img 
          src={rutaImagen} 
          alt={titulo} 
          className="noticia-img" 
          loading="lazy" 
        />
      </div>
      <div className="noticia-contenido">
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <p>{cuerpo}</p>
      </div>
    </article>
  );
};

export default NoticiaCard;