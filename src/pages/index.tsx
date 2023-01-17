import img from '../assets/images/portrait-cropped.png';

const Home = () => {
  return (
    <div className="home">
      <div className="about_me container-md p-0 mb-4">
        <img className="portrait" aria-label="Picture of me" src={img} />
        <h3 className="font-subsection-title">About Me</h3>
        <p className="col-lg-8 ms-5 me-5">
          I'm a junior at the University of Hawai'i at Manoa, majoring in
          Computer Science. I love working on personal projects, like this one,
          in my free time. My dream is to become a developer and create products
          for a living. This is a website that I built from scratch to hold
          anything I wish to share, so have a look around!
        </p>
        <p className="col-lg-8 ms-5 me-5">
          I am currently learning React and TypeScript. <br /> Things I'm
          looking forward to learning in the future: Next.js, SQL, Pocketbase,
          Remix, Svelte.
        </p>
      </div>
    </div>
  );
};

export default Home;
