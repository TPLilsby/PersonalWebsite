import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white py-24 flex items-center justify-center rounded-xl shadow-black shadow-2xl">
      <div className="bg-gray-800 text-white rounded-xl shadow-3xl p-8 max-w-md mx-auto">
        <div className="flex flex-col items-center">
          <Image
            src="/images/profile-pic.jpg" // Corrected path
            alt="Profile Picture"
            className="rounded-full border-4 border-indigo-600"
            width={150}
            height={150}
          />
          <h1 className="text-4xl font-extrabold mt-6 mb-4">Hello, I&apos;m Tobias</h1>
          <p className="text-lg text-center mb-6">
            I&apos;m a passionate web developer with a keen eye for design and a love for coding. I specialize in creating sleek, modern, and user-friendly web applications. With expertise in various technologies, I deliver high-quality solutions tailored to your needs.
          </p>
          <a href="/projects" className="bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300">View My Work</a>
        </div>
      </div>
    </div>
  );
}
