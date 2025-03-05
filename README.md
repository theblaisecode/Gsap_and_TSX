# GSAP_and_TSX 🚀

A fun project exploring the power of **GSAP (GreenSock Animation Platform)** with **TypeScript (TSX)** in a React environment! 🎨✨

## 📌 Features
- Smooth animations using **GSAP**
- Fully typed animations with **TypeScript**
- React-friendly integration
- Performance-optimized animations

## 🛠️ Technologies Used
- **React** (TypeScript-based project)
- **GSAP** (GreenSock Animation Platform)
- **Vite** (for fast development)

## ✨ Example Animation
Here's a simple GSAP animation used in the project:
```tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBox = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, { x: 100, duration: 1, ease: "power2.out" });
    }
  }, []);

  return <div ref={boxRef} className="w-20 h-20 bg-blue-500" />;
};

export default AnimatedBox;
```


## 📦 Installation

Clone the repository:
```bash
git clone https://github.com/theblaisecode/GSAP_and_TSX.git
cd GSAP_and_TSX
npm install
```

**Install GSAP:**
```bash
npm install gsap
```

**Running the App**<br/>
Start the development server:

```bash
npm run dev
```

Build the project for production:
```bash
npm run build
```

## 📜 License
This project is licensed under the MIT License.

## 👥 Author  
- GitHub - [@theblaisecode](https://github.com/theblaisecode)  
- Twitter - [@theblaisecode](https://twitter.com/theblaisecode)  
- LinkedIn - [@theblaisecode](https://www.linkedin.com/in/theblaisecode)  
- Portfolio - [theblaisecode.netlify.app](https://theblaisecode.netlify.app/)
