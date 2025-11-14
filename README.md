# 🎓 Acadify ERP - Smart Academic Management Platform

**Acadify** is a comprehensive Enterprise Resource Planning (ERP) platform designed specifically for educational institutions. It seamlessly connects students, teachers, and university administration to manage and plan academic activities effortlessly.

## 🌟 Overview

Acadify serves as your **Smart Academic Companion**, providing a unified platform where:
- **Students** can track their academic progress and manage their coursework
- **Teachers** can efficiently manage classes, attendance, and student evaluations
- **Universities** can oversee institutional operations and maintain comprehensive records

---

## 🚀 Key Features

### 👨‍🎓 **For Students**
- **📊 Attendance Monitoring** - Real-time attendance tracking with percentage calculations
- **📝 Assignment Management** - Upload assignments and track submission deadlines
- **📅 Smart Timetable** - Simplified and organized class schedules
- **📋 Exam Tracking** - Monitor upcoming exams and preparation schedules
- **📈 Grade Tracking** - View marks and academic performance analytics
- **💻 Course Management** - Access course materials and track progress
- **📚 Study Materials** - Download and access educational resources
- **💰 Fee Management** - Check fee status and payment history

### 👩‍🏫 **For Teachers**
- **🏢 Division Management** - Organize and manage class divisions
- **✅ Attendance Management** - Mark attendance with intuitive interfaces
- **📊 Class Analytics** - View class attendance statistics and insights
- **📝 Assignment Distribution** - Create and distribute assignments to students
- **⏰ Timetable Management** - Manage personal teaching schedules
- **👥 Student Evaluation** - Grade assignments and track student performance
- **💬 Student Queries** - Handle and respond to student questions
- **📋 Course Management** - Manage assigned courses and subjects

### 🏛️ **For University Administration**
- **👥 Staff Management** - Add, manage, and assign teachers to departments
- **🎓 Student Records** - Maintain comprehensive student databases
- **📚 Course Administration** - Create and manage academic courses
- **🏢 Department Management** - Organize institutional departments
- **💼 Teacher Assignment** - Assign teachers to specific courses and subjects
- **📊 Institutional Analytics** - Monitor overall academic performance
- **💰 Fee Management** - Oversee student fee collection and status
- **📋 Academic Planning** - Plan and schedule academic activities

---

## 🛠️ Tech Stack

### **Frontend**
- **⚡ Next.js 15.5.6** - React framework with App Router
- **⚛️ React 19.1.0** - Modern React with latest features
- **🎨 Tailwind CSS 4** - Utility-first CSS framework
- **🧩 Radix UI** - Accessible and customizable UI components
- **📊 Recharts 2.15.4** - Composable charting library for React
- **🎯 Lucide React** - Beautiful & consistent icon toolkit
- **📝 React Hook Form** - Performant forms with easy validation
- **🔍 Zod** - TypeScript-first schema validation

### **Backend & Database**
- **🛢️ Supabase** - Backend-as-a-Service with PostgreSQL
- **🔐 Supabase Auth** - Authentication and user management
- **🔄 Supabase SSR** - Server-side rendering support

### **Development & Build Tools**
- **📘 TypeScript 5** - Static type checking
- **🚀 Turbopack** - Ultra-fast bundler for development
- **🔍 ESLint** - Code quality and consistency
- **📦 PostCSS** - CSS transformation and optimization

### **UI Components & Styling**
- **🎨 Class Variance Authority** - CSS-in-JS variant management
- **🎭 Tailwind Merge** - Intelligent Tailwind class merging
- **📅 React Day Picker** - Flexible date picker component
- **⭕ React Circular Progressbar** - Circular progress indicators
- **✨ TW Animate CSS** - Tailwind CSS animations

### **Code Quality & Developer Experience**
- **📝 Monaco Editor React** - VS Code editor integration
- **🕐 Date-fns** - Modern JavaScript date utility library
- **🔧 Hookform Resolvers** - Validation resolvers for React Hook Form

---

## 🏗️ Project Structure

```
acadify/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Administrative interfaces
│   │   ├── add_student/   # Student registration system
│   │   ├── add_teacher/   # Teacher onboarding system
│   │   ├── departments/   # Department management
│   │   └── staff/         # Staff management dashboard
│   ├── student/           # Student portal
│   │   ├── dashboard/     # Student dashboard
│   │   ├── attendance/    # Attendance tracking
│   │   ├── courses/       # Course management
│   │   └── profile/       # Student profile
│   ├── teacher/           # Teacher portal
│   │   ├── dashboard/     # Teacher dashboard
│   │   ├── attendance/    # Attendance management
│   │   ├── courses/       # Course teaching interface
│   │   └── myclass/       # Class management
│   └── login/             # Authentication system
├── backend/               # Server-side functions
│   ├── authfuncs.ts      # Authentication logic
│   ├── addfuncs.ts       # Data insertion functions
│   └── dashboard.ts      # Dashboard data management
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   └── appSidebar.tsx    # Navigation sidebar
└── lib/                  # Utility libraries
    ├── supabase.ts       # Supabase client configuration
    └── utils.ts          # Helper functions
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun**
- **Supabase Account** for backend services

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prashant-180206/Acadify-ERP.git
   cd Acadify-ERP/acadify
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🌐 Deployment

### Vercel (Recommended)
The easiest way to deploy Acadify is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables
4. Deploy with one click

### Other Platforms
- **Netlify** - For static site deployment
- **Railway** - For full-stack deployment
- **DigitalOcean App Platform** - For containerized deployment

---

## 🤝 Contributing

We welcome contributions to make Acadify even better! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

For support, feedback, or questions:
- **GitHub Issues**: [Create an issue](https://github.com/prashant-180206/Acadify-ERP/issues)
- **Email**: your-email@domain.com
- **Documentation**: [Project Wiki](https://github.com/prashant-180206/Acadify-ERP/wiki)

---

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Supabase** for the powerful backend-as-a-service
- **Radix UI** for accessible component primitives
- **Tailwind CSS** for the utility-first styling approach

---

*Acadify - Empowering Education Through Technology* 🎓✨
