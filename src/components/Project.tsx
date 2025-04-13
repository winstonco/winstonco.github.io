import { For, type Component, Show } from 'solid-js';

const Project: Component<{
  img: string;
  title: string;
  link: string;
  date: { start: string; end?: string };
  body: string;
  tags: string[];
  foot?: string;
}> = (props) => {
  const { img, title, link, date, body, tags, foot } = props;
  const datePart = () => {
    return `${date.start} - ${date.end ?? 'Today'}`;
  };

  return (
    <div class="project-card">
      <img src={img} class="project-img" />

      <div class="body">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          class="title font-article-title"
        >
          {title}
        </a>
        <div class="font-date">{datePart()}</div>
        <div class="text">{body}</div>
        <For each={tags}>{(tag, _) => <div class="pill">{tag}</div>}</For>
        <Show when={foot}>
          <div class="text">{foot}</div>
        </Show>
      </div>
    </div>
  );
};

export default Project;
