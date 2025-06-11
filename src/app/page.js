import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6">Welcome to Our Website</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Experience smooth scrolling with Lenis and beautiful design with
            Next.js and Tailwind CSS.
          </p>
          <a
            href="#features"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-block"
          >
            Explore Features
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Next.js",
                description:
                  "Built with the latest Next.js features for optimal performance",
                icon: "🚀",
              },
              {
                title: "Smooth Scroll",
                description: "Butter-smooth scrolling experience with Lenis",
                icon: "✨",
              },
              {
                title: "Tailwind CSS",
                description: "Modern and responsive design using Tailwind CSS",
                icon: "🎨",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join us and experience the power of modern web development.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
