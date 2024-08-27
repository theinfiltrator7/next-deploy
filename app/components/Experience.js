export default function Experience() {
  return (
    <>
      <div className="experience-section-container">
        <h1 className="text-6xl font-bold text-white mb-4 text-center mb-12 mt-32 w-full text-center md:text-6xl md:mt-32">
          Experience
        </h1>
        <div className="flex flex-col items-center">
          <div className="max-w-2xl mb-12">
            <h3 className="text-lg font-semibold text-cyan-300">
              Software Engineer @Google
            </h3>
            <h4 className="text-md text-gray-500">
              2022-Present | Mountain View, CA
            </h4>
            <p className="mt-2 text-white">
              Worked on a team responsible for developing new features for
              Google's search engine, including improving the accuracy and
              relevance of search results and developing new tools for data
              analysis and visualization.
            </p>
          </div>
          <div className="max-w-2xl mb-12">
            <h3 className="text-lg font-semibold text-cyan-300">
              Intern @Facebook
            </h3>
            <h4 className="text-md text-gray-500">
              Summer 2021 | Menlo Park, CA
            </h4>
            <p className="mt-2 text-white">
              Worked on a team responsible for developing a new mobile app
              feature that allowed users to create and share short-form video
              content, including designing and implementing a new user interface
              and developing the backend infrastructure to support the feature.
            </p>
          </div>
          <div className="max-w-2xl mb-12">
            <h3 className="text-lg font-semibold text-cyan-300">
              Software Developer @Amazon
            </h3>
            <h4 className="text-md text-gray-500">2020-2021 | Seattle, WA</h4>
            <p className="mt-2 text-white">
              Worked on a team responsible for developing Amazon's mobile app,
              including implementing new features such as product
              recommendations and user reviews, and optimizing the app's
              performance and reliability.
            </p>
          </div>
          <div className="max-w-2xl mb-12">
            <h3 className="text-lg font-semibold text-cyan-300">
              Software Developer Intern @Microsoft
            </h3>
            <h4 className="text-md text-gray-500">Summer 2019 | Redmond, WA</h4>
            <p className="mt-2 text-white">
              Worked on a team responsible for developing new features for
              Microsoft's Windows operating system, including implementing a new
              user interface for a system settings panel and optimizing the
              performance of a core system component.
            </p>
          </div>
        </div>

        <h1 className="text-6xl mb-12 font-bold text-white mb-4 text-center mt-32 w-full text-center md:text-6xl md:mt-32">
          Education
        </h1>
        <div className="flex flex-col items-center">
          <div className="max-w-2xl mb-12">
            <h3 className="text-lg font-semibold text-cyan-300">
              Bachelor Of Science In Computer Science
            </h3>
            <h4 className="text-md text-gray-500">
              2016-2020 | Massachusetts Institute Of Technology (MIT)
            </h4>
            <p className="mt-2 text-white">
              Relevant courses included Data Structures and Algorithms, Computer
              Systems Engineering, and Artificial Intelligence.
            </p>
          </div>
          <div className="max-w-2xl mb-12">
            <h3 className="text-lg font-semibold text-cyan-300">
              Master Of Computer Science
            </h3>
            <h4 className="text-md text-gray-500">
              2020-2022 | Stanford University
            </h4>
            <p className="mt-2 text-white">
              Completed a master's project on deep learning, developing a new
              neural network architecture for natural language understanding.
            </p>
          </div>
          <div className="max-w-2xl mb-12">
            <h3 className="text-lg font-semibold text-cyan-300">
              Online Coursework
            </h3>
            <h4 className="text-md text-gray-500">
              2016-2020 | Coursera And EdX
            </h4>
            <p className="mt-2 text-white">
              Completed coursework in advanced topics such as Reinforcement
              Learning, Computer Vision, and Machine Learning Engineering.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
