# Financial Analysis Report

### **Scenario:**

The **Chaos Labs** team is developing a new product that generates financial reports based on user queries. The report is built using several AI models, such as **GPT-4o, Groq, Gemini**, and more.

The server generates a series of **blocks**, where each block represents a **section of the report**. Each block has a **type** and associated **properties** relevant to that type.

### **Block Types & Properties:**

1. **Text Block (`text`)**
    - `variant`: Defines the text style (`h1`, `h2`, `h3`, `p`).
    - `fontSize`: A number representing the font size.
2. **Image Block (`image`)**
    - `src_url`: The source URL of the image.
    - `width`: A number representing the image width.
    - `height`: A number representing the image height.

### **Task 1: Implement the `ReportRenderer` Component**

Implement a **`ReportRenderer`** component that receives an array of blocks and renders them accordingly.

Example usage:

```tsx

const App = () => {
   const blocks = useReportBlocks(); // Fetches report blocks

   return <ReportRenderer ...;
};

```

---

### **Task 2: Enhancing Streaming UX**

One of the key features in products like this is a **real-time streaming experience**, where users can see the report being generated **live** as new blocks arrive.

### **Question:**

Before implementing streaming, what changes should be made to your `ReportRenderer` component to support incremental updates efficiently? Explain your approach and how it would improve the user experience.
