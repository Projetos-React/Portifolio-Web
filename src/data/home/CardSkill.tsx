interface PropsCardSkill {
  title: string;
  src: string;
}

export default function CardSkill({ title, src }: PropsCardSkill) {
  return (
    <div className="cardSkill">
      <img src={src} alt="Logo Skill" />
      <p>{title}</p>
    </div>
  );
}
