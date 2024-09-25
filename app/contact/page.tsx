export default function ContactPage() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-lg py-2 px-4" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-lg py-2 px-4" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full border-gray-300 rounded-lg py-2 px-4"></textarea>
        </div>
        <button type="submit" className="bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700">Send</button>
      </form>
    </div>
  );
}
