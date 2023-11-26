import { MdArrowOutward } from "react-icons/md";

interface CardProps {
  title: string;
  description: string;
  src_image: string;
  src_project: string;
}

export default function CardProject({
  title,
  description,
  src_image,
  src_project,
}: CardProps) {
  return (
    <div className="CardProject">
      <div className="imageProject">
        <img src={src_image} alt="Representação do funcionamento do projeto." />
      </div>
      <div className="infoProject">
        <div>
          <h2 className="titleProject">{title.replace(/-/g, " ")}</h2>
          <p className="descriptionProject">{description}</p>
        </div>
        <button>
          <a href={src_project} target="blank">
            Veja no GitHub <MdArrowOutward className="iconProject" />
          </a>
        </button>
      </div>
    </div>
  );
}
