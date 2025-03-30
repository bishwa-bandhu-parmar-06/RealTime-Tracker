# **Real-time Location Tracking Web App**

**[LIVE]((https://realtime-tracker-wbrt.onrender.com/))**

## **📌 Project Overview**
This is a **real-time location tracking web application** built using **Node.js, Express.js, Socket.io, and Leaflet.js**. Users can share their location, and it will be displayed on an interactive map. Multiple users can see each other's locations in real-time.

---

## **⚙️ Tech Stack**
- **Frontend:** HTML, CSS, JavaScript, Leaflet.js (for maps)
- **Backend:** Node.js, Express.js, Socket.io
- **Hosting (Optional):** Render, Railway, DigitalOcean, AWS

---

## **📂 Project Structure**
```
📂 Real-time-Location-Tracker
├── 📂 public
│   ├── index.html  # Frontend UI
│   ├── script.js   # Client-side JavaScript
│   ├── style.css   # Styling
├── 📂 views
│   ├── index.ejs   # Main template file
├── 📂 node_modules  # Dependencies
├── server.js       # Main server file
├── .env            # Environment variables (PORT)
├── package.json    # Project dependencies
├── README.md       # Project Documentation
```

---

## **🚀 Features**
✅ **Real-time location tracking** using WebSockets (Socket.io)
✅ **Interactive map** using Leaflet.js
✅ **Multiple users** can track each other
✅ **Automatic marker updates** for moving users
✅ **Mobile and Desktop Support**

---

## **🛠️ Installation & Setup**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/Real-time-Location-Tracker.git
cd Real-time-Location-Tracker
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Create a `.env` File**
Create a **.env** file in the root directory and add:
```env
PORT=3000
```

### **4️⃣ Start the Server**
```sh
npm start
```
Server will run on **http://localhost:3000**

---

## **📡 Deployment Guide**
### **1️⃣ Deploy the Backend (Server) on Render/Railway**
1. Create an account on **[Render](https://render.com)** or **[Railway](https://railway.app)**.
2. Create a new **Node.js** project.
3. Upload your project files.
4. Set **Environment Variables** (PORT = 3000).
5. Deploy and get your **public URL**.

### **2️⃣ Update Frontend Socket Connection**
Change:
```js
const socket = io("https://your-deployed-server.com");
```

### **3️⃣ Open the Web App on Mobile**
- Open **https://your-deployed-server.com** on your **mobile browser**.
- Allow **location access**.
- Your location will appear on the map!

---

## **📜 License**
This project is **MIT Licensed**.

---

## **🙌 Contribution**
Feel free to **fork**, improve, and submit a **pull request**!

🚀 **Happy Coding!** 🎯
