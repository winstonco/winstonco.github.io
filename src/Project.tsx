import { Card } from 'react-bootstrap';
// import * as image from './assets/images/this-site.png';

const Project = (props: {
  img: string;
  title: string;
  link: string;
  date: { start: string; end?: string };
  body: string;
}) => {
  const { img, title, link, date, body } = props;

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
        <Card.Subtitle className="font-date">
          {date.start} - {date.end ?? 'Today'}
        </Card.Subtitle>
        <Card.Text>
          <p className="text">{body}</p>
        </Card.Text>
      </div>
    </Card>
  );
};

export default Project;
