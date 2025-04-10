export const Activity = () => {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            GitHub Activity
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <img
              src="https://github-readme-stats.vercel.app/api?username=DimitarHristovski&show_icons=true&theme=github_dark"
              alt="GitHub Activity"
              className="w-full rounded-lg shadow"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
