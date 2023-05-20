import { Badge, Card } from 'react-bootstrap';

const Project: React.FC<{
  img: string;
  title: string;
  link: string;
  date: { start: Date; end?: Date };
  body: string;
  tags: string[];
  foot?: string;
}> = ({ img, title, link, date, body, tags, foot }) => {
  const datePart = () => {
    return `${date.start.toLocaleDateString()} - ${
      date.end?.toLocaleDateString() ?? 'Today'
    }`;
  };

  const footer = () => {
    if (foot) {
      return <Card.Text className="text">{foot}</Card.Text>;
    }
  };

  return (
    <Card className="project">
      <div className="mx-auto">
        <Card.Img src={img} className="project-img" />
      </div>

      <div className="card-body">
        <Card.Title
          as="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-title font-article-title"
        >
          {title}
        </Card.Title>
        <Card.Subtitle className="font-date">{datePart()}</Card.Subtitle>
        <Card.Text className="text">{body}</Card.Text>
        {tags.map((tag) => (
          <Badge pill bg="secondary" key={tag} className="me-1">
            {tag}
          </Badge>
        ))}
        {footer()}
      </div>
    </Card>
  );
};

export default Project;
