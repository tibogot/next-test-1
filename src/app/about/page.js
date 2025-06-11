export default function About() {
  return (
    <div className="pt-16">
      {/* About Hero */}
      <section className="min-h-[60vh] flex items-center bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            We're passionate about creating beautiful and performant web
            experiences using the latest technologies.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "CEO" },
              { name: "Jane Smith", role: "Designer" },
              { name: "Mike Johnson", role: "Developer" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To deliver exceptional web experiences that combine cutting-edge
              technology with beautiful design. We believe in creating websites
              that not only look amazing but also perform flawlessly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
