"use client"

import { useState } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import CourseCategories from "../components/CourseCategories"
import Achievements from "../components/Achievements"
import Courses from "../components/Courses"
import Team from "../components/Team"
import Testimonials from "../components/Testimonials"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <CourseCategories />
      <Achievements />
      <Courses />
      <Team />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}