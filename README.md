# 🗳️ EVM Practice Machine

An interactive Electronic Voting Machine (EVM) practice application built with Next.js. This application helps users learn how to vote using an EVM and identify their representative candidates in a safe, practice environment.

## 🌟 Features

### 📱 Main Voting Interface
- **Tabbed Navigation**: Switch between Ward, Block, and District elections
- **Candidate Information**: View candidate names in both English and local language (Malayalam)
- **Visual Feedback**: Red indicator lights that illuminate when you cast a vote
- **Interactive Voting**: Click the blue VOTE button to cast your vote
- **Responsive Design**: Works on desktop, tablet, and mobile devices

### ✅ Confirmation Page
- **Bilingual Success Message**: Confirmation in English and Malayalam
- **Vote Summary**: Review your selected category and candidate
- **Practice Again**: Easy option to practice voting multiple times
- **Educational Tips**: Helpful tips for actual voting day

### 📚 Tutorial Page
- **Step-by-Step Guide**: Comprehensive instructions on how to use an EVM
- **Visual Examples**: Clear explanations with visual aids
- **Important Tips**: Best practices for voting
- **Easy Navigation**: Quick access to practice mode

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd voting
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 📂 Project Structure

```
voting/
├── app/
│   ├── page.tsx              # Main voting page
│   ├── confirmation/
│   │   └── page.tsx          # Vote confirmation page
│   ├── tutorial/
│   │   └── page.tsx          # Tutorial/instructions page
│   ├── data.ts               # Candidate and election data
│   ├── types.ts              # TypeScript type definitions
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── package.json
└── README.md
```

## 🎯 How to Use

### For Users

1. **Select Election Category**
   - Click on Ward, Block, or District tab
   - Each category has different candidates

2. **Review Candidates**
   - See candidate number, name (English & Malayalam), and party
   - Take your time to review all options

3. **Cast Your Vote**
   - Click the blue VOTE button next to your preferred candidate
   - Watch the red indicator light fill up
   - You'll be automatically redirected to the confirmation page

4. **Practice Again**
   - Click "Practice Again" to try voting in different categories
   - Visit the Tutorial page for detailed instructions

### For Developers

#### Adding New Candidates

Edit `app/data.ts` to add or modify candidates:

```typescript
{
  id: 'unique-id',
  number: 1,
  name: 'Candidate Name',
  nameLocal: 'പേര് (മലയാളം)',
  party: 'Party Name',
}
```

#### Adding New Election Categories

Add new categories to the `electionData` array in `app/data.ts`:

```typescript
{
  id: 'category-id',
  name: 'Category Name',
  nameLocal: 'വിഭാഗം',
  candidates: [/* candidate objects */]
}
```

## 🎨 Design Features

- **Clean Interface**: Inspired by real EVM designs
- **Color-Coded Feedback**: Blue for actions, red for selection indicators, green for success
- **Accessibility**: Large buttons and clear text for easy reading
- **Smooth Animations**: Visual feedback for user interactions
- **Bilingual Support**: English and Malayalam (easily extendable to other languages)

## 🛠️ Technologies Used

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: Modern React state management

## 📱 Pages

### 1. Home Page (`/`)
The main voting interface with:
- Election category tabs
- Candidate list with voting buttons
- Red indicator lights
- Instructions panel

### 2. Confirmation Page (`/confirmation`)
Displays after voting with:
- Success message (bilingual)
- Vote summary
- Practice again option
- Educational tips

### 3. Tutorial Page (`/tutorial`)
Educational content including:
- Step-by-step voting guide
- Visual explanations
- Important tips
- Quick reference cards

## 🔒 Privacy & Security

This is a **practice application only**. No votes are stored permanently:
- Votes are stored in browser sessionStorage only
- Data is cleared when you close the browser
- No backend server or database
- No personal information is collected

## 🌍 Localization

Currently supports:
- English
- Malayalam (മലയാളം)

To add more languages:
1. Add `nameLocal` fields to candidate data
2. Add translations to UI text
3. Update the confirmation page messages

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is created for educational purposes to help citizens learn how to vote using Electronic Voting Machines.

## 🎓 Educational Use

This application is perfect for:
- **First-time voters** learning the voting process
- **Educational institutions** teaching civic participation
- **Election commissions** conducting voter awareness programs
- **Community organizations** promoting voter education

## 📞 Support

For questions or issues:
- Check the Tutorial page within the app
- Review this README
- Practice as many times as needed!

## 🙏 Acknowledgments

- Designed to match real EVM interfaces for authentic practice
- Built with accessibility and ease of use in mind
- Inspired by the need to make voting accessible to everyone

---

**Remember**: This is a practice tool. On actual election day, follow the instructions provided by poll workers and take your time to make your choice!

🗳️ **Happy Practicing!**
