# 📝 Content Editing Guide - आसान तरीके से Content Edit करें

## 🎯 Overview
सारा regularly editable content अब `content/` folder में JSON files में है। इन files को directly edit करके आप website का content बदल सकते हो - **कोई coding नहीं!**

---

## 📁 Content Files

### 1️⃣ Blog Posts (`content/blog-posts.json`)

**कैसे Edit करें:**
```json
{
  "id": 1,
  "title": "आपका blog title",
  "excerpt": "Short description (2-3 lines)",
  "date": "March 15, 2025",
  "category": "SEO",
  "link": "https://your-blog-url.com"
}
```

**नया Blog Post Add करने के लिए:**
1. File खोलें: `content/blog-posts.json`
2. Array में नया object add करें
3. `id` को increase करें
4. Save करें
5. Browser refresh करें - done! ✅

**Example - नया post add करना:**
```json
[
  {
    "id": 1,
    "title": "Old Post",
    ...
  },
  {
    "id": 2,
    "title": "New Post Title",
    "excerpt": "This is my new blog post about...",
    "date": "April 1, 2025",
    "category": "Marketing",
    "link": "https://blog.example.com/new-post"
  }
]
```

---

### 2️⃣ Testimonials (`content/testimonials.json`)

**कैसे Edit करें:**
```json
{
  "id": 1,
  "name": "Client Name",
  "role": "Founder, Company Name",
  "content": "Their testimonial text...",
  "rating": 5,
  "image": "/path-to-image.jpg"
}
```

**नया Testimonial Add करने के लिए:**
1. `content/testimonials.json` खोलें
2. नया object add करें
3. Photo को `public/` folder में डालें
4. Save & refresh! ✅

---

### 3️⃣ FAQs (`content/faq.json`)

**कैसे Edit करें:**
```json
{
  "id": 1,
  "question": "Your question here?",
  "answer": "Your answer here..."
}
```

**बहुत Easy!** बस question और answer change करो।

---

## 🚀 Quick Steps - कुछ भी Edit करने के लिए

### Method 1: VS Code में (Recommended)
1. VS Code में `content/` folder खोलें
2. जो file edit करनी है उसे खोलें (`.json` file)
3. Text edit करें (title, description, etc.)
4. **Save** करें (Ctrl+S)
5. Browser में website refresh करें (Ctrl+R)
6. ✅ Done! Changes दिखने चाहिए

### Method 2: Notepad से
1. `content/` folder में जाएं
2. JSON file को Notepad में खोलें
3. Text edit करें
4. Save करें
5. Browser refresh करें

---

## ⚠️ Important Tips

### ✅ DO's:
- ✅ Double quotes (`"`) use करें, single quotes नहीं
- ✅ Commas सही जगह रखें
- ✅ ID numbers unique रखें
- ✅ Images को `public/` folder में रखें
- ✅ File save करने के बाद browser refresh करें

### ❌ DON'Ts:
- ❌ Brackets `[ ]` या `{ }` delete न करें
- ❌ Commas भूलें नहीं (last item के बाद comma नहीं चाहिए)
- ❌ Double quotes के बीच double quotes न use करें
- ❌ Special characters को escape करें (`"` की जगह `\"`)

---

## 🎨 Adding Images

1. Image को `public/` folder में copy करें
2. JSON file में image path लिखें:
   ```json
   "image": "/your-image-name.jpg"
   ```
3. Path `/` से शुरू होना चाहिए

---

## 🔧 Common Mistakes & Fixes

### Error: JSON Parse Error
**Problem:** Syntax गलत है (comma missing, bracket missing, etc.)

**Solution:**
1. Online JSON validator use करें: https://jsonlint.com/
2. अपना JSON code paste करें
3. Errors fix करें
4. Save करें

### Error: Changes दिख नहीं रहे
**Solutions:**
1. Hard refresh करें: `Ctrl + Shift + R`
2. Browser cache clear करें
3. Development server restart करें:
   ```bash
   Ctrl+C (बंद करें)
   npm run dev (फिर चालू करें)
   ```

---

## 📋 Content Checklist

जब भी content update करें, ये check करें:

- [ ] File properly saved है
- [ ] JSON syntax सही है (commas, quotes, brackets)
- [ ] Images `public/` folder में हैं
- [ ] Links working हैं
- [ ] Browser refresh किया है
- [ ] Content website पर सही दिख रहा है

---

## 🎯 Examples

### Example 1: Blog Post Update करना

**Before:**
```json
{
  "id": 1,
  "title": "Old Title",
  "excerpt": "Old description",
  "date": "March 15, 2025",
  "category": "SEO",
  "link": "https://old-link.com"
}
```

**After:**
```json
{
  "id": 1,
  "title": "New Updated Title 2025",
  "excerpt": "This is my new updated description with more details",
  "date": "April 1, 2025",
  "category": "Digital Marketing",
  "link": "https://new-blog-link.com"
}
```

### Example 2: Testimonial Add करना

```json
[
  ...existing testimonials...,
  {
    "id": 4,
    "name": "Rahul Kumar",
    "role": "CEO, StartupHub",
    "content": "Amazing work! Highly recommended for startups.",
    "rating": 5,
    "image": "/rahul-photo.jpg"
  }
]
```

---

## 💡 Pro Tips

1. **Backup लें:** Edit करने से पहले file का backup बना लें
2. **Small changes करें:** एक बार में एक ही चीज़ edit करें
3. **Test करें:** हर change के बाद website check करें
4. **JSON Validator use करें:** Save करने से पहले syntax check करें

---

## 🆘 Need Help?

अगर कोई problem हो तो:
1. JSON syntax validator use करें
2. Error message ध्यान से पढ़ें
3. File का पुराना version restore करें (अगर backup है)
4. Development server restart करें

---

## 🚀 Next Steps

1. ✅ `content/blog-posts.json` खोलें
2. ✅ कोई title या description change करके try करें
3. ✅ Save करें और browser refresh करें
4. ✅ Changes देखें!

Happy Editing! 🎉

