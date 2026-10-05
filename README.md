# ConnectDots - Premium Collaboration Discovery Platform

A LinkedIn-style collaboration platform that helps people find meaningful project partners, opportunities, and professional connections through intelligent matching.

## 🚀 Current Status

This is a working premium MVP demo with:
- ✅ Premium landing page
- ✅ Authentication flow (demo: demo@connectdots.com / demo123)
- ✅ Personalized dashboard
- ✅ Profile management
- ✅ People discovery with smart matching
- ✅ Project marketplace and creation
- ✅ Connection requests
- ✅ Notifications
- ✅ Messaging interface
- ✅ Pricing page
- ✅ Admin overview
- ✅ Local data persistence (localStorage)

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Storage**: Browser localStorage (demo)
- **Styling**: Tailwind CSS with custom components
- **Deployment Ready**: Vercel-compatible

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/kavithaofficial/connectdots.git
cd connectdots
npm install
npm run dev
```

Then open http://localhost:3000

## 🔐 Demo Login

**Email**: demo@connectdots.com
**Password**: demo123

Or create a new account via signup.

## 📱 Key Pages

- `/` - Landing page
- `/auth/login` - Login
- `/auth/signup` - Signup
- `/dashboard` - Personalized dashboard
- `/discover` - People discovery with matching
- `/projects` - Project marketplace
- `/projects/new` - Create a new project
- `/profile` - User profile
- `/connections` - Connection requests
- `/messages` - Messaging
- `/notifications` - Activity feed
- `/pricing` - Pricing plans
- `/admin` - Admin overview

## 🎯 Features Implemented

### Authentication
- Demo login flow
- Sign up with profile data
- Session persistence (localStorage)
- User-aware navigation

### Discovery
- Smart people matching with match scores
- Skill-based filtering
- Connection request flow
- Detailed match reasoning

### Projects
- Create new projects
- Dynamic project marketplace
- Project filtering by stage and domain
- Join/apply flow

### Social
- Connection management
- Notifications feed
- Real-time connection badges
- Activity tracking

### UI/UX
- Premium, polished design
- Responsive layout (mobile, tablet, desktop)
- Dark/light mode ready
- Accessibility-focused

## 📊 Next Phase Features

- [ ] Real backend (Node.js/Express or similar)
- [ ] PostgreSQL database
- [ ] Real authentication (JWT)
- [ ] AI-powered matching engine
- [ ] Real messaging with WebSocket
- [ ] Email notifications
- [ ] Stripe payment integration
- [ ] Advanced user analytics
- [ ] Recommendation algorithms
- [ ] Team/group features

## 🛣️ Roadmap

### Phase 1: MVP Foundation ✅
- Project structure and pages
- Premium UI design
- Demo auth and data persistence

### Phase 2: In Progress
- Interactive product flows
- Connection and project logic
- Better match recommendations

### Phase 3: Backend Integration (Upcoming)
- Real database
- Production authentication
- API endpoints

### Phase 4: Advanced Features (Future)
- AI recommendations
- Real-time messaging
- Analytics dashboard
- Payment integration

## 📝 Project Structure

```
connectdots/
├── app/
│   ├── api/              # API routes (future)
│   ├── auth/             # Authentication pages
│   │   ├── login/
│   │   └── signup/
│   ├── dashboard/        # Main dashboard
│   ├── discover/         # People discovery
│   ├── projects/         # Project marketplace
│   ├── projects/new/     # Create project
│   ├── profile/          # User profile
│   ├── connections/      # Connection management
│   ├── messages/         # Messaging
│   ├── notifications/    # Notification feed
│   ├── pricing/          # Pricing page
│   ├── admin/            # Admin dashboard
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
├── components/
│   └── Navbar.tsx        # Navigation header
├── lib/
│   └── mock-data.ts      # Demo data
├── public/               # Static assets
├── package.json
├── tailwind.config.ts
└── README.md
```

## 🎨 Design Philosophy

- Premium, modern aesthetic
- Clear information hierarchy
- Fast, snappy interactions
- Professional typography
- Cohesive color system
- Accessible components

## 🤝 Contributing

This is an actively developed project. Contributions welcome!

## 📄 License

MIT License

## 🎯 About

ConnectDots helps ambitious people find meaningful collaborations through intelligent matching, rich profiles, and a premium collaboration experience.

---

**Status**: Premium MVP Demo Ready to Use 🚀
