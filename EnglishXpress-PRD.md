# EnglishXpress Website - Product Requirements Document (PRD)

## Project Overview

**Project Name:** EnglishXpress  
**Tagline:** "Learn Better, Go Further"  
**Mission:** From Bangladesh to the World: Let English Be Your Passport  
**Target Audience:** IELTS test preparation students in Bangladesh  
**Core Purpose:** Professional IELTS training and English language education platform

## Technical Stack

- **Framework:** React 18+ with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** Radix UI primitives with shadcn/ui
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **State Management:** React Query (TanStack Query)
- **Animations:** Tailwind CSS animations and custom CSS

## Design System & Theme

### Color Palette (HSL Values)
- **Primary Red:** `hsl(0, 84%, 60%)` - Main brand color
- **Hero Red:** `hsl(0, 72%, 51%)` - For hero sections
- **Success Green:** `hsl(142, 76%, 36%)` - For achievements
- **Background:** `hsl(0, 0%, 100%)` (light) / `hsl(222.2, 84%, 4.9%)` (dark)
- **Text Colors:** Dark gray for primary text, white for hero overlays

### Typography
- **Hero Text:** Responsive clamp sizing (2.5rem to 4rem)
- **Section Headings:** Large, bold typography with gradient effects
- **Body Text:** Clean, readable sans-serif
- **Font Sizes:** Responsive scaling from mobile to desktop

### Layout System
- **Container:** Centered with responsive padding
- **Grid System:** CSS Grid and Flexbox for layouts
- **Responsive Design:** Mobile-first approach
- **Spacing:** Consistent spacing scale using Tailwind utilities

## Website Structure & Components

### 1. Header Component
**File:** `src/components/Header.tsx`

**Features:**
- Fixed position header with transparency effects
- Logo and brand name "EnglishXpress"
- Desktop navigation menu with smooth scroll
- Mobile hamburger menu (slide-out from right)
- Responsive design with mobile/desktop variants

**Navigation Items:**
- Home
- Our Approach
- Why Join Us
- Courses
- Achievers
- IELTS Tips
- FAQ
- Contact Us (prominent button)

**Functionality:**
- Smooth scrolling to page sections
- Mobile menu toggle
- Responsive breakpoints

### 2. Hero Section
**File:** `src/components/Hero.tsx`

**Layout:**
- Full-screen height with background image
- Overlay gradient (black/70 to black/30)
- Centered content with responsive text

**Content:**
- **Main Headline:** "From Bangladesh to the World: Let English Be Your Passport"
- **Subheading:** "Unlock new doors of opportunity with our expert mentor guide and dedicated support. Anytime, anywhere."
- **Trust Indicators Grid (2x2 on mobile, 4x1 on desktop):**
  - 10+ Years Experience
  - 3750+ Student Mentored
  - 8.5 Highest Band Score
  - 15 Max Batch Size

**Visual Elements:**
- Background: Hero student examination image
- Animated scroll indicator at bottom
- Responsive typography with gradient text effects

### 3. Our Approach Section
**File:** `src/components/OurApproach.tsx`

**Content Structure:**
- Section heading and description
- Classroom image (students in learning environment)
- 4-step approach methodology

**Steps:**
1. **Assessment:** Initial evaluation and goal setting
2. **Plan:** Customized study plan creation
3. **Practice:** Regular practice sessions and feedback
4. **Achieve:** Track progress and celebrate success

**Design:**
- Each step has colored backgrounds (red, blue, green, purple)
- Numbered steps with titles and descriptions
- Image integration with text content

### 4. Why Join Us Section
**File:** `src/components/WhyJoinUs.tsx`

**Benefits Grid (3 columns on desktop, 1 on mobile):**
1. **Experienced Instructors** - Cambridge certified with 10+ years experience
2. **Small Batch Size** - Maximum 15 students for personalized attention
3. **Proven Track Record** - 3750+ students mentored successfully
4. **Flexible Schedule** - Weekend and weekday options available
5. **Mock Tests** - Regular practice tests with detailed feedback
6. **Affordable Fees** - Quality education at reasonable prices

**Call-to-Action:**
- "Ready to Start Your Journey?" section
- Encouraging text about taking the first step

### 5. Courses Section
**File:** `src/components/Courses.tsx`

**Course Offerings (3 cards):**

**Course 1: Comprehensive IELTS Preparation**
- Duration: 3 months
- Timing: 8:00 PM - 10:00 PM
- Days: Saturday & Sunday
- Classes: 24 total classes
- Mock Tests: 6 full tests
- Fee: ৳8,000
- Suitable: All skill levels
- Features: Speaking practice, writing feedback, reading strategies, listening skills

**Course 2: IELTS Speaking Masterclass** (Most Popular)
- Duration: 1 month
- Timing: 7:00 PM - 8:00 PM
- Days: Daily (Mon-Fri)
- Classes: 20 classes
- Mock Tests: 4 speaking tests
- Fee: ৳3,500
- Suitable: Intermediate to Advanced
- Features: Fluency building, pronunciation, confidence building, interview practice

**Course 3: IELTS Writing Workshop**
- Duration: 6 weeks
- Timing: 9:00 PM - 10:30 PM
- Days: Tuesday & Thursday
- Classes: 12 classes
- Mock Tests: 3 writing assessments
- Fee: ৳2,500
- Suitable: All levels
- Features: Task 1 & 2 strategies, grammar improvement, vocabulary enhancement

**Design Features:**
- Card-based layout with hover effects
- "Most Popular" badge for highlighted course
- Gradient background
- Feature lists with checkmark icons
- Responsive grid layout

### 6. Achievers Section
**File:** `src/components/Achievers.tsx`

**Student Testimonials Carousel:**

**Achiever Profiles:**
1. **Ahmed Hassan** - Band 8.5
   - Image: Professional headshot
   - Testimonial: Success story about IELTS preparation
   
2. **Saifuddin Rahman** - Band 8.0
   - Image: Student photo
   - Testimonial: Journey and results
   
3. **Alamgir Hossain** - Band 7.5
   - Image: Professional photo
   - Testimonial: Experience with EnglishXpress
   
4. **Ikramul Islam** - Band 7.5
   - Image: Student photo
   - Testimonial: Achievement story
   
5. **Jahid Ahmed** - Band 7.0
   - Image: Professional headshot
   - Testimonial: Learning experience

**Features:**
- Carousel with navigation dots
- Colored band score badges (dynamic coloring based on score)
- Decorative frame corners for photos
- Quote icons for testimonials
- Star ratings based on band scores

**Success Statistics Grid:**
- 3750+ Students Mentored
- 85% Success Rate
- 8.5 Highest Band Score
- 50+ Students with 7+ Band

### 7. IELTS Tips Section
**File:** `src/components/IeltsTips.tsx`

**Three Information Tables:**

**Preparation Checklist:**
- 8-step preparation guide
- Tabular format with step numbers and tasks
- Covers assessment to final practice

**Vocabulary Building Steps:**
- 4-step vocabulary strategy
- Detailed descriptions for each step
- Focus on systematic learning approach

**Reading Tips:**
- 5 essential reading strategies
- Practical advice for IELTS reading section
- Tips for time management and comprehension

**Design:**
- Card-based layout for each table
- Responsive table design
- Call-to-action section to join EnglishXpress

### 8. FAQ Section
**File:** `src/components/FAQ.tsx`

**Frequently Asked Questions (Accordion Style):**
1. What is the duration of the IELTS preparation course?
2. What is the class size?
3. Do you provide study materials?
4. What is your success rate?
5. Do you offer online classes?
6. What is the fee structure?
7. Do you provide mock tests?
8. What qualifications do your instructors have?

**Contact CTA:**
- "Still have questions?" section
- Prominent phone number display
- Encouragement to call for more information

### 9. Footer Component
**File:** `src/components/Footer.tsx`

**Footer Sections:**
- **Brand Section:** Logo, tagline, description
- **Contact Information:** Email, phone, address
- **Quick Links:** Navigation menu
- **Social Media:** Facebook, Instagram, LinkedIn icons

**Contact Details:**
- Email: info@englishxpress.com
- Phone: +8801XXXXXXXXX
- Address: Dhaka, Bangladesh

**Copyright:** EnglishXpress branding and rights

## Content Strategy

### Key Messages
1. **From Bangladesh to the World** - Global aspirations
2. **Expert Mentorship** - Professional guidance
3. **Proven Results** - Success statistics and testimonials
4. **Small Batch Sizes** - Personalized attention
5. **Affordable Quality** - Value proposition

### Tone of Voice
- Professional yet approachable
- Encouraging and motivational
- Results-focused
- Culturally aware (Bangladesh context)
- Supportive and understanding

## Visual Assets Required

### Images
- **Hero Background:** Student in examination setting
- **Classroom Image:** Students learning environment
- **Student Photos:** Professional headshots for testimonials
- **Logo:** EnglishXpress branding

### Image Specifications
- High resolution (minimum 1920px width for hero)
- Professional quality
- Consistent styling and lighting
- Cultural relevance (Bangladeshi students)

## Interactive Features

### Navigation
- Smooth scrolling to sections
- Mobile-responsive menu
- Fixed header with transparency

### User Engagement
- Carousel for testimonials
- Accordion for FAQ
- Hover effects on cards and buttons
- Animated scroll indicators

### Call-to-Actions
- Contact Us buttons throughout
- Phone number display
- Social media links
- Section-specific CTAs

## Responsive Design Requirements

### Mobile (≤768px)
- Single column layouts
- Stacked navigation
- Compressed hero content
- Touch-friendly interactions

### Tablet (769px-1024px)
- 2-column layouts where appropriate
- Balanced content distribution
- Readable typography

### Desktop (≥1025px)
- Multi-column layouts
- Full navigation menu
- Enhanced visual hierarchy
- Optimal spacing and proportions

## Performance Requirements
- Fast loading times
- Optimized images
- Smooth animations
- Cross-browser compatibility
- SEO optimization

## SEO Considerations
- Semantic HTML structure
- Meta tags and descriptions
- Proper heading hierarchy
- Alt text for images
- Mobile-friendly design
- Fast loading speeds

## Implementation Notes

### Component Architecture
- Modular component structure
- Reusable UI components
- Consistent prop interfaces
- TypeScript for type safety

### Styling Approach
- Utility-first with Tailwind CSS
- Custom design tokens
- Responsive design patterns
- Consistent spacing and colors

### State Management
- React hooks for local state
- React Query for data fetching
- Context for global state if needed

## Future Enhancement Opportunities
- Online booking system
- Student portal
- Progress tracking
- Online mock tests
- Payment integration
- Multi-language support
- Video testimonials
- Live chat support

---

**Document Version:** 1.0  
**Last Updated:** Current Date  
**Created for:** AI-assisted website recreation