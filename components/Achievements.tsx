const achievements = [
    { value: "+200", label: "Courses" },
    { value: "50K", label: "Members" },
    { value: "370K", label: "Students" },
    { value: "100+", label: "Recognition" },
  ]
  
  export default function Achievements() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement) => (
              <div key={achievement.label}>
                <div className="text-4xl font-bold text-primary mb-2">{achievement.value}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }