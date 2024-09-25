import Image from 'next/image';
import Link from 'next/link';

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    title: 'Car Management System',
    description: 'A comprehensive system for managing car inventories and sales.',
    image: '/images/carManagement.png',
    link: 'https://github.com/TPLilsby/Skolepraktik/tree/main/CarManagement', // Replace with actual GitHub link
    technologies: ['C#'],
  },
  {
    title: 'Planet Simulator',
    description: 'A platform where you can visualize the distance between the planets.',
    image: '/images/PlanetSimulator.png',
    link: 'https://github.com/TPLilsby/PlanetSimulator', // Replace with actual GitHub link
    technologies: ['Python'],
  },
  {
    title: 'Dart Marster',
    description: 'A calculator for dart game scores with advanced features.',
    image: '/images/DartCalculator.jpg',
    link: 'https://github.com/TPLilsby/H2/tree/main/DartMaster', // Replace with actual GitHub link
    technologies: ['C#'],
  },
];

export default function Projects() {
  return (
    <div className="bg-gray-50 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-gray-500 mb-4">
              <span className="font-semibold">Technologies:</span> {project.technologies.join(', ')}
            </p>
            <Link
              href={project.link}
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
