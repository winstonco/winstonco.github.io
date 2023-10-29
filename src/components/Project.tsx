import { Component } from 'solid-js';
import { For } from 'solid-js';
import { Badge, Card } from 'solid-bootstrap';

const Project: Component<{
  img: string;
  title: string;
  link: string;
  date: { start: Date; end?: Date };
  body: string;
  tags: string[];
  foot?: string;
}> = (props) => {
  const { img, title, link, date, body, tags, foot } = props;
  const datePart = () => {
    return `${date.start.toLocaleDateString()} - ${
      date.end?.toLocaleDateString() ?? 'Today'
    }`;
  };

  const footer = () => {
    if (foot) {
      return <Card.Text class="text">{foot}</Card.Text>;
    }
    return;
  };

  return (
    <Card class="project">
      <div class="mx-auto">
        <Card.Img src={img} class="project-img" />
      </div>

      <div class="card-body">
        <Card.Title
          as="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          class="card-title font-article-title"
        >
          {title}
        </Card.Title>
        <Card.Subtitle class="font-date">{datePart()}</Card.Subtitle>
        <Card.Text class="text">{body}</Card.Text>
        <For each={tags}>
          {(tag, _) => (
            <Badge pill bg="secondary" class="me-1">
              {tag}
            </Badge>
          )}
        </For>
        {footer()}
      </div>
    </Card>
  );
};

export default Project;
