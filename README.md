# Online Learning Website - Responsive UI 🌐

This project is a **responsive online learning platform UI**, developed based on a custom **Figma design**. The goal of the project is to provide a seamless user experience for exploring courses, getting started with learning, and building skills online.

## ✨ Features
- **Hero Section**:
  - Clear and engaging headline: *"Learn new skills online with ease."*
  - Subheadline explaining the benefits of the platform.
  - Primary and secondary call-to-action buttons: `Start Learn` and `Explore Courses`.
  - Hero image of a student adds a personal, welcoming touch.

- **Trusted by Companies**:
  - Logos of well-known companies showcasing trust and credibility.

- **Responsive Design**:
  - Ensures the website is optimized for desktops, tablets, and mobile devices.

- **Modular Components**:
  - Organized into reusable components for easier scalability.

## 📂 File Structure
```
├── app
│   ├── Layout.tsx          # Main layout of the website
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Tailwind CSS styling
│
├── components
│   ├── Header.tsx          # Navigation bar with login/signup
│   ├── Hero.tsx            # Hero section with headline, buttons, and image
│   ├── CourseCategories.tsx # Course categories section
│   ├── Achievements.tsx    # Achievements section
│   ├── Courses.tsx         # Courses section
│   ├── Team.tsx            # Team section
│   ├── Testimonials.tsx    # Testimonials (reviews) section
│   ├── Newsletter.tsx      # Newsletter subscription section
│   ├── Footer.tsx          # Footer section
│
├── components/ui
│   ├── Button.tsx          # Reusable button component
│   ├── Card.tsx            # Card component
│   ├── Avatar.tsx          # Avatar component
│   ├── Input.tsx           # Input component
│
├── public                  # Images folder
│
```

## 🚀 Tech Stack
- **Next.js**: Framework for building fast, server-rendered React apps.
- **Tailwind CSS**: Utility-first CSS framework for responsive design and styling.
- **Figma**: Source of design inspiration.

## 💻 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Tahasaif3/Figma-Assignment-6.git
   cd Figma-Assignment-6
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## 🖼️ Figma Design
This project is based on the provided **Figma design**:  
[View Figma Design](https://www.figma.com/design/f7Ydw99tYhb7zb1jt9Wbd1/Simple-U.I-Design?node-id=1-665&node-type=frame&t=7HPLIN9BRewgJFeJ-0)

## 🤝 Contribution
Contributions are welcome! Feel free to fork this repository, improve the UI, or add features. Submit a pull request, and I'll review it promptly.
