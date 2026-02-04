// Dark Mode
const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeIcon = document.getElementById("darkModeIcon");
const html = document.documentElement;
const isDarkOnLoad = html.classList.contains("dark");
darkModeIcon.textContent = isDarkOnLoad ? "☀️" : "🌙";
darkModeToggle.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");
  darkModeIcon.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Mobile Menu
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Typing Effect
const typingText = document.getElementById("typingText");
const words = ["& JavaScript", "+ Interactivity", "+ DOM", "+ Events"];
let wordIndex = 0,
  charIndex = 0,
  isDeleting = false;
function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 2500);
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }
  const speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
}
setTimeout(typeEffect, 1500);

// Animated Stats
function animateCounter(id, target, duration = 2000) {
  const element = document.getElementById(id);
  const increment = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter("stat1", 100);
      animateCounter("stat2", 25);
      observer.unobserve(entry.target);
    }
  });
});
observer.observe(document.getElementById("hero"));

// Counter Functionality
const clickableCard = document.getElementById("clickableCard");
const clickCount = document.getElementById("clickCount");
let clicks = 0;
clickableCard.addEventListener("click", () => {
  clicks++;
  clickCount.textContent = clicks;
  clickableCard.style.transform = "scale(0.95)";
  setTimeout(() => {
    clickableCard.style.transform = "";
  }, 200);
});

// Navigate to Side Quests
document.getElementById("scrollToJsBtn").addEventListener("click", () => {
  document.getElementById("javascript").scrollIntoView({ behavior: "smooth" });
});

// Event Listeners
const eventLog = document.getElementById("eventLog");
function addToLog(message) {
  const timestamp = new Date().toLocaleTimeString();
  eventLog.innerHTML += `[${timestamp}] ${message}`;
  eventLog.scrollTop = eventLog.scrollHeight;
}
document.getElementById("clickEventBtn").addEventListener("click", () => {
  addToLog("Click event triggered! <br>🖱️");
});
document.getElementById("dblClickEventBtn").addEventListener("dblclick", () => {
  addToLog("Double-click event triggered! <br>👆");
});
document.getElementById("inputEvent").addEventListener("input", (e) => {
  addToLog(`Input: "${e.target.value}" <br>`);
});

// Array Methods
const arrayResult = document.getElementById("arrayResult");
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function displayResult(title, result) {
  arrayResult.innerHTML = `<div class="text-sm text-green-700 dark:text-green-300 mb-2">${title}</div><div class="font-mono text-green-900 dark:text-green-100">${JSON.stringify(result)}</div>`;
}
document.getElementById("filterBtn").addEventListener("click", () => {
  displayResult(
    "Filter (even numbers):",
    originalArray.filter((num) => num % 2 === 0),
  );
});
document.getElementById("findBtn").addEventListener("click", () => {
  displayResult(
    "Find (first number > 5):",
    originalArray.find((num) => num > 5),
  );
});
document.getElementById("reduceBtn").addEventListener("click", () => {
  displayResult(
    "Reduce (sum of all):",
    originalArray.reduce((sum, num) => sum + num, 0),
  );
});
document.getElementById("mapBtn").addEventListener("click", () => {
  displayResult(
    "Map (multiply by 2):",
    originalArray.map((num) => num * 2),
  );
});

// Conditions
const conditionalResult = document.getElementById("conditionalResult");
document.getElementById("checkEvenBtn").addEventListener("click", () => {
  const num = parseInt(document.getElementById("numberInput").value);
  const result = num % 2 === 0 ? "even" : "odd";
  conditionalResult.innerHTML = `<p class="text-lg font-semibold">Number: ${num}</p><p class="text-2xl font-semibold ${num % 2 === 0 ? "text-green-400" : "text-purple-600"}">${num} is ${result}!</p>`;
});
document.getElementById("factorialBtn").addEventListener("click", () => {
  const num = parseInt(document.getElementById("numberInput").value);

  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  conditionalResult.innerHTML = `<p class="text-lg font-semibold">Factorial of ${num}:</p><p class="text-2xl font-semibold text-blue-400">${factorial.toLocaleString()}</p>`;
});
document.getElementById("fibonacciBtn").addEventListener("click", () => {
  const num = parseInt(document.getElementById("numberInput").value);

  const fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  conditionalResult.innerHTML = `<p class="text-lg font-semibold">First ${num} Fibonacci numbers:</p><p class="text-sm font-mono text-orange-400">[${fib.slice(0, num).join(",")}]</p>`;
});

// Object Manipulation
const objectDisplay = document.getElementById("objectDisplay");
let sampleObject = {};
function displayObject(obj) {
  objectDisplay.textContent = JSON.stringify(obj, null, 2);
}
document.getElementById("createObjBtn").addEventListener("click", () => {
  sampleObject = {
    name: "John Doe",
    age: 25,
    city: "New York",
    skills: ["JavaScript", "React", "Node.js"],
  };
  displayObject(sampleObject);
});
document.getElementById("addPropBtn").addEventListener("click", () => {
  sampleObject.newProperty = "Added dynamically!";
  sampleObject.timestamp = new Date().toLocaleTimeString();
  displayObject(sampleObject);
});
document.getElementById("keysBtn").addEventListener("click", () => {
  const keys = Object.keys(sampleObject);
  objectDisplay.textContent = `Keys: [${keys.join(", ")}]`;
});
document.getElementById("valuesBtn").addEventListener("click", () => {
  const values = Object.values(sampleObject);
  objectDisplay.textContent = `Values: ${JSON.stringify(values, null, 2)}`;
});

// Local Storage
const storageDisplay = document.getElementById("storageDisplay");
document.getElementById("saveStorageBtn").addEventListener("click", () => {
  const key = document.getElementById("storageKey").value;
  const value = document.getElementById("storageValue").value;
  if (!key || !value) {
    storageDisplay.innerHTML =
      '<p class="text-red-600">Please fill in both key and value!</p>';
    return;
  }
  localStorage.setItem(key, value);
  storageDisplay.innerHTML = `<p class="text-green-600 font-semibold">✅ Saved: ${key} = "${value}"</p>`;
});
document.getElementById("loadStorageBtn").addEventListener("click", () => {
  const key = document.getElementById("storageKey").value;
  if (!key) {
    storageDisplay.innerHTML =
      '<p class="text-red-600">Please enter a key!</p>';
    return;
  }
  const value = localStorage.getItem(key);
  if (value) {
    storageDisplay.innerHTML = `<p class="text-blue-600 font-semibold">📖 Loaded: ${key} = "${value}"</p>`;
    document.getElementById("storageValue").value = value;
  } else {
    storageDisplay.innerHTML = `<p class="text-orange-600">⚠️ No data found for key: ${key}</p>`;
  }
});
document.getElementById("clearStorageBtn").addEventListener("click", () => {
  const key = document.getElementById("storageKey").value;
  if (key) {
    localStorage.removeItem(key);
    storageDisplay.innerHTML = `<p class="text-red-600 font-semibold">🗑️ Cleared: ${key}</p>`;
  } else {
    localStorage.clear();
    storageDisplay.innerHTML =
      '<p class="text-red-600 font-semibold">🗑️ All storage cleared!</p>';
  }
  document.getElementById("storageKey").value = "";
  document.getElementById("storageValue").value = "";
});

// Todos
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
let todos = [];
function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = `flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg ${todo.completed ? "opacity-50" : ""}`;
    li.innerHTML = `<label class="flex items-center gap-5 flex-1 cursor-pointer"><span class="${todo.completed ? "line-through text-gray-500" : "text-gray-900 dark:text-white"}">${todo.text}</span></label>`;
    todoList.appendChild(li);
  });
  todoCount.textContent = `${todos.length} task${todos.length !== 1 ? "s" : ""}`;
  localStorage.setItem("todos", JSON.stringify(todos));
}
window.toggleTodo = (index) => {
  todos[index].completed = !todos[index].completed;
  renderTodos();
};
window.deleteTodo = (index) => {
  todos.splice(index, 1);
  renderTodos();
};
document.getElementById("addTodoBtn").addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (!text) return;
  todos.push({ text, completed: false });
  todoInput.value = "";
  renderTodos();
});
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.getElementById("addTodoBtn").click();
  }
});
document.getElementById("clearAllTodos").addEventListener("click", () => {
  if (confirm("Clear all todos?")) {
    todos = [];
    renderTodos();
  }
});
renderTodos();

document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector(".accordion-icon");
    document.querySelectorAll(".accordion-content").forEach((item) => {
      if (item !== content) {
        item.classList.add("hidden");
        item.previousElementSibling.querySelector(
          ".accordion-icon",
        ).textContent = "▼";
      }
    });
    content.classList.toggle("hidden");
    icon.textContent = content.classList.contains("hidden") ? "▼" : "▲";
  });
});

// Modal
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalIcon = document.getElementById("modalIcon");
function showModal(title, text, icon = "ℹ️") {
  modalTitle.textContent = title;
  modalText.textContent = text;
  modalIcon.textContent = icon;
  modalOverlay.classList.remove("hidden");
}
function closeModal() {
  modalOverlay.classList.add("hidden");
}
document.getElementById("openModalBtn").addEventListener("click", () => {
  showModal(
    "Welcome!",
    "This is a modal dialog created with JavaScript and Tailwind CSS.",
    "👋",
  );
});
document.getElementById("successModalBtn").addEventListener("click", () => {
  showModal("Success!", "Your action was completed successfully.");
});
document.getElementById("errorModalBtn").addEventListener("click", () => {
  showModal("Error!", "Something went wrong. Please try again.");
});
document.getElementById("closeModalBtn").addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Calculator
let calcCurrent = "0",
  calcPrevious = null,
  calcOperation = null;
function updateCalcDisplay() {
  document.getElementById("calcDisplay").value = calcCurrent;
}
document.querySelectorAll(".calc-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;
    if (["+", "-", "*", "/"].includes(value)) {
      calcPrevious = calcCurrent;
      calcOperation = value;
      calcCurrent = "0";
    } else if (value === ".") {
      if (!calcCurrent.includes(".")) calcCurrent += ".";
    } else {
      calcCurrent = calcCurrent === "0" ? value : calcCurrent + value;
    }
    updateCalcDisplay();
  });
});
document.getElementById("calcEquals").addEventListener("click", () => {
  if (calcPrevious !== null && calcOperation !== null) {
    const prev = parseFloat(calcPrevious),
      curr = parseFloat(calcCurrent);
    let result = 0;
    switch (calcOperation) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "/":
        result = prev / curr;
        break;
    }
    calcCurrent = String(result);
    calcPrevious = null;
    calcOperation = null;
    updateCalcDisplay();
  }
});
document.getElementById("calcClear").addEventListener("click", () => {
  calcCurrent = "0";
  calcPrevious = null;
  calcOperation = null;
  updateCalcDisplay();
});

// Scroll to Top
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
