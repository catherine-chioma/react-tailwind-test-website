export default function MainContent() {
    return (
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to Your Test</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This is a clean, responsive website built with React.js and Tailwind CSS.
            Follow the instructions carefully during your test.
          </p>
        </section>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Test Details</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Date:</strong> May 29, 2025</li>
              <li><strong>Time:</strong> 10:00 AM - 11:00 AM</li>
              <li><strong>Duration:</strong> 1 hour</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Instructions</h3>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>Use only laptop/desktop</li>
              <li>Stable internet connection required</li>
              <li>No additional time for late submissions</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }