import { Card } from 'react-bootstrap';

const Project = (props: {
  img: string;
  title: string;
  link: string;
  date: { start: string; end?: string };
  body: string;
  stack: string;
  foot?: string;
}) => {
  const { img, title, link, date, body, stack, foot } = props;

  const datePart = () => {
    return `${date.start} - ${date.end ?? 'Today'}`;
  };

  const footer = () => {
    if (foot) {
      return <Card.Text className="text">{foot}</Card.Text>;
    }
  };

  return (
    <Card className="project_item">
      <div className="col-sm-4 mx-auto">
        <Card.Img src={img} className="project_img img-fluid" />
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
        <Card.Text className="text">{stack}</Card.Text>
        {footer()}
      </div>
    </Card>
  );
};

export default Project;
