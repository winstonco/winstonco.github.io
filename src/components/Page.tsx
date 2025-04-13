import { ParentComponent } from 'solid-js';

const Page: ParentComponent<{ id?: string }> = (props) => {
  return (
    <div id={props.id} class="custom-page">
      {props.children}
    </div>
  );
};

export default Page;
