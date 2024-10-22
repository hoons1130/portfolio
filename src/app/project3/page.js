import Head from "next/head";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Project = () => {
  return (
    <>
      <Head>
        <title>BYOW</title>
      </Head>
      <main className="max-w-4xl mx-auto p-6 mt-12">
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <div className="text-blue-600 hover:text-blue-800 transition duration-200 font-semibold text-xl">
              <ArrowBackIcon></ArrowBackIcon> back
            </div>
          </Link>
        </div>
        <h1 className="text-gray-400 text-3xl font-bold">BYOW</h1>
        <img src="/project3.gif" alt="1" width={4800} height={240} />
        <p className="text-black font-semibold mt-4">
          - Developed a procedurally generated 2D world in Java, creating unique
          terrains, rooms, and hallways using random seed values to ensure every
          gameplay experience is distinct
          <br></br>
          <br></br>- Integrated game mechanics, including player movement and
          world interaction, with save/load functionality, resulting in a more
          immersive and seamless user experience
        </p>
        <div className="flex gap-2 mt-4">
          {["Python", "PyTorch"].map((tech) => (
            <span
              key={tech}
              className="bg-custom2 text-custom3 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </main>
    </>
  );
};

export default Project;
