import Card from "../Card/Card";

const Column = ({title}) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
      <Card 
      category="Web Design"
       title="Задизайнить карточку" 
       date="21.02.2023"
       />
       <Card 
      category="Research"
       title="Изучить аудиторию" 
       date="21.02.2023"
       />
      </div>
    </div>
  );
};

export default Column;
