import Head from "next/head";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Project = () => {
  return (
    <>
      <Head>
        <title>The PacMan Project</title>
      </Head>
      <main className="max-w-4xl mx-auto p-6 mt-12">
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <div className="text-blue-600 hover:text-blue-800 transition duration-200 font-semibold text-xl">
              <ArrowBackIcon></ArrowBackIcon> back
            </div>
          </Link>
        </div>
        <h1 className="text-gray-400 text-3xl font-bold">The PacMan Project</h1>
        <img src="/pacman-2.gif" alt="" width={4800} height={240} />
        <p className="text-black font-semibold mt-4">
          - Implemented AI techniques, including search algorithms,
          probabilistic inference, and reinforcement learning, in Pac-Man,
          resulting in enhanced game performance and demonstrating strong
          problem-solving and critical thinking skills
          <br></br>
          <br></br>- Developed a strong understanding of Markov decision
          processes and reinforcement learning with Python and PyTorch,
          significantly improving AI performance in gaming simulations through
          advanced computational thinking
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
