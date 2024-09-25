import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto p-6 bg-white shadow-2xl rounded-xl">
        {/* Introduction Section */}
        <section className="text-center">
          <h1 className="text-4xl font-extrabold mb-4">About Me</h1>
          <div className="flex justify-center">
            <Image
              src="/images/profile-pic.jpg" // Ensure image exists in public/images
              alt="Tobias"
              className="rounded-full border-4 border-indigo-600 shadow-lg"
              width={150}
              height={150}
            />
          </div>
          <p className="text-lg mt-6">
            I’m Tobias, a web developer passionate about creating modern, sleek, and user-friendly web experiences. I enjoy solving problems, and my attention to detail helps me craft high-quality projects tailored to the needs of my clients.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
          <div className="flex justify-around flex-wrap gap-6">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold">Frontend Development</h3>
              <p className="mt-2">HTML, CSS, JavaScript, React, Next.js, Tailwind</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold">Backend Development</h3>
              <p className="mt-2">Node.js, Express, PostgreSQL, Prisma</p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold">Tools & Frameworks</h3>
              <p className="mt-2">Git, Docker, Supabase, Stripe, OAuth</p>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6">Fun Facts</h2>
          <div className="flex flex-wrap justify-around gap-6 text-center">
            <div className="w-full sm:w-1/3 bg-pink-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">🌍</h3>
              <p className="mt-2">I love traveling and exploring new places.</p>
            </div>
            <div className="w-full sm:w-1/3 bg-purple-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">🥁</h3>
              <p className="mt-2">In my free time, I enjoy playing drums.</p>
            </div>
            <div className="w-full sm:w-1/3 bg-red-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">🎵</h3>
              <p className="mt-2">Music is a big part of my day.</p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="mt-12 text-center">
          <a href="/contact" className="bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300">
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
}
