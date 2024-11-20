# Online Learning Website - Responsive UI 🌐

This project is a **responsive online learning platform UI**, developed based on a custom **Figma design**. The goal of the project is to provide a seamless user experience for users to explore courses, get started with learning, and build their skills online.

## ✨ Features
- **Hero Section**:
  - Clear and engaging headline: *"Learn new skills online with ease."*
  - Subheadline: Explains the benefits of the platform.
  - Primary and secondary call-to-action buttons: `Start Learn` and `Explore Courses`.
  - Hero image of a student to add a personal touch.

- **Trusted by Companies**:
  - Logos of well-known companies showcasing trust and credibility.

- **Responsive Design**:
  - Ensures the website looks great on desktops, tablets, and mobile devices.

## 📂 File Structure
```
├──app
|───|──Layout.tsx.tsx      # Main Layout of website
│   ├── page.tsx           # Main landing page
|── |── globals.css        # Tailwind css styling
|
├── components
│   ├── Header.tsx          # Navigation bar with login/signup
│   ├── Hero.tsx     # Hero section with headline, buttons, and image
│   ├── CourseCategories.tsx. # Trusted by companies section
|   |── Achievements.tsx  # Achievements of comapany section
|   |── Courses.tsx  # Courses section
|   |── Team.tsx    # Teams Sections
|   |── Testimonials.tsx  # Testimonials section (reviews of company)
|   |── Newsletter.tsx #  Newsletter section
|   |── Footer.tsx  # Footer section  
|
├── components/ui folder
│   ├── button.tsx          # Navigation bar with login/signup
│   ├── card.tsx     # Hero section with headline, buttons, and image
│   ├── avatar.tsx. # Trusted by companies section
|   |── input.tsx  # Achievements of comapany section
|
├── public                 #Images Folder 
│ 

## 🚀 Tech Stack
- **Next.js**: Framework for server-rendered React apps.
- **Tailwind CSS**: Utility-first CSS for fast and responsive styling.
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
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🖼️ Figma Design
Design inspiration for this project is taken from the provided **Figma file**. *(https://www.figma.com/design/f7Ydw99tYhb7zb1jt9Wbd1/Simple-U.I-Design?node-id=1-665&node-type=frame&t=7HPLIN9BRewgJFeJ-0)*

## 🤝 Contribution
Feel free to fork this repository and submit PRs to improve the UI or add features!
