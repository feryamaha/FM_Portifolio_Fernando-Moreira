import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    description: "Base e estrutura dos conteúdos de páginas web.",
  },
  {
    id: "css3",
    name: "CCS3",
    icon: <DiCss3 />,
    description: "Aparências e estilo das páginas web.",
  },
  {
    id: "sass",
    name: "SASS",
    icon: <DiSass />,
    description: "Recursos avançados de estilização no CSS.",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <DiJsBadge />,
    description: "Interatividade e funcionalidades dinâmicas em páginas web.",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    description: "Execusão de javascript no servidor, backend eficiente.",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    description:
      "Criação de interfaces de usuário interativas e componentes reutilizáveis.",
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
