# 🧮 Calculator Web Part — SPFx + React

A lightweight, fully functional **Calculator Web Part** built using the **SharePoint Framework (SPFx)** and **React with useState Hook**. Designed to be deployed directly into any SharePoint Online site with zero backend dependencies.

---

## 🚀 Features

- ✅ Basic arithmetic operations: Addition, Subtraction, Multiplication, Division
- ✅ Real-time UI updates using React `useState` Hook
- ✅ Clean, responsive interface that fits natively inside SharePoint pages
- ✅ No external API calls or backend dependencies
- ✅ Fully packaged as a deployable `.sppkg` file

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| SharePoint Framework (SPFx) | Web part scaffolding & SharePoint integration |
| React | Component-based UI |
| useState Hook | Local state management |
| TypeScript | Type safety & better developer experience |
| SCSS | Component-scoped styling |

---

## 📦 Prerequisites

- [Node.js](https://nodejs.org/) v16.x or v18.x
- Yeoman & SPFx Generator:
```bash
  npm install -g yo @microsoft/generator-sharepoint
```
- A SharePoint Online tenant

---

## ⚙️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally
```bash
gulp serve
```
Opens the workbench at `https://localhost:4321/temp/workbench.html`

---

## 📤 Deployment to SharePoint Online
```bash
gulp bundle --ship
gulp package-solution --ship
```

Then upload the `.sppkg` from `/sharepoint/solution/` to your **App Catalog**, trust it, and add the web part to any SharePoint page.

---

## 💡 Key Concepts

**Why SPFx?**  
SPFx is Microsoft's recommended model for building client-side extensions for SharePoint and Teams — React under the hood, fully integrated with Microsoft 365.

**Why useState?**  
For a calculator, local component state (input, operator, result) is best handled with `useState` — self-contained, reactive, and no global state overhead needed.
