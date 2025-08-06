# MiniChrome – Chrome-Style Browser UI in React

A fully responsive Chrome-like browser UI built with **Vite + React**, featuring:
- Chrome-style tab bar with active/inactive tabs
- Address bar with navigation controls
- Search box with Google-style icons
- Shortcut tiles like Chrome’s new tab page
- Window control buttons (Minimize, Maximize, Close)

---

## 🚀 Features

### 🗂 Tabs
- Chrome-style rounded tab design
- Active tab seamlessly connects with address bar
- Click to switch between tabs

### 🔍 Address Bar
- **Back**, **Forward**, **Refresh** icons
- Lock icon for secure connection indicator
- Bookmark (star) and vertical menu icons

### 🔎 Search Box
- Search icon (left)
- Microphone and Google Lens icons (right)
- Styled like Google’s homepage search

### ⏱ Shortcuts
- Demo shortcut tiles below the search box
- Hover animation for better UI feel

### 🖥 Window Controls
- Minimize, Maximize, and Close buttons (Windows-style icons)
- Styled for a realistic browser look

---

## 📦 Folder Structure

```
src/
│
├── components/
│   ├── AddressBar.jsx
│   ├── BrowserWindow.jsx
│   ├── IconButton.jsx
│   ├── SearchBoxWithShortcuts.jsx
│   ├── Tab.jsx
│   ├── TabBar.jsx
│   ├── WindowControls.jsx
│
├── App.jsx
├── main.jsx
├── styles.css
```

---

## 🛠 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/minichrome.git
   cd minichrome
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

### **Deploy to Netlify**
1. Run:
   ```bash
   npm run build
   ```
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder
4. Get your live URL instantly
5. live url:https://cute-marigold-da014b.netlify.app/

---


## 📜 License
This project is licensed under the MIT License.  
You may use and modify it for personal or commercial projects.

---

## 🙌 Credits
- Built with [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
