import './Noticias.css';

interface NoticiasProps {
    userName: string;
    content: string;
    completedModules: number;
    isActive: boolean;
    
}

const Noticias = (props: NoticiasProps) => {
  return (
        <div className="card-profile">
            <h2 className='name'>{props.userName}</h2>
            <p className='content'>{props.content}</p>

          {props.isActive ?  <span className='tag-state'>Activo</span> : null}
        </div>
    )
}

export default Noticias