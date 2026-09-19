const lessonsData = [
  {
    id: 1,
    title: "Lesson 1 — Installation & First Python Program",
    videoId: "YYXdXT2l-Gg",
    description: "First step in Python! Learn console basics, calling the print() function, and proper comment syntax.",
    questions: [
      {
        type: "mc",
        title: "Q1 — Multiple choice",
        text: "Which function is normally used to display text in Python?",
        options: ["display()", "print()", "write()", "output()"],
        answer: 1
      },
      {
        type: "mc",
        title: "Q2 — Predict the output",
        text: "What does this program print?\nprint(\"Hello, Python!\")",
        options: ["Hello", "Python!", "Hello, Python!", "\"Hello, Python!\""],
        answer: 2
      },
      {
        type: "coding",
        title: "Q3 — Coding",
        text: "Write a Python program that prints:\nWelcome to Python!",
        code: 'print("Welcome to Python!")'
      },
      {
        type: "mc",
        title: "Q4 — Multiple choice",
        text: "Which of these is a valid Python comment?",
        options: ["// This is a comment", "<!-- This is a comment -->", "# This is a comment", "/* This is a comment */"],
        answer: 2
      },
      {
        type: "coding",
        title: "Q5 — Coding",
        text: "Write a program that prints three separate lines:\nPython\nis\nawesome",
        code: 'print("Python")\nprint("is")\nprint("awesome")'
      }
    ]
  },
  {
    id: 2,
    title: "Lesson 2 — Strings",
    videoId: "khKv-8q7YmY",
    description: "Strings (str) are one of the main data types. Learn indexing, concatenation, and working with string variables.",
    questions: [
      {
        type: "mc",
        title: "Q1 — Multiple choice",
        text: "Which data type is \"Hello\"?",
        options: ["int", "float", "str", "bool"],
        answer: 2
      },
      {
        type: "coding",
        title: "Q2 — Predict the output",
        text: "Predict the output for:\nname = \"Alex\"\nprint(name)",
        code: 'name = "Alex"\nprint(name)'
      },
      {
        type: "coding",
        title: "Q3 — Predict the output",
        text: "Predict the output for:\nfirst = \"Hello\"\nsecond = \"World\"\nprint(first + \" \" + second)",
        code: 'first = "Hello"\nsecond = "World"\nprint(first + " " + second)'
      },
      {
        type: "coding",
        title: "Q4 — Coding",
        text: "Create a variable called name containing your name and print:\nMy name is <name>",
        code: 'name = "Alex"\nprint("My name is " + name)'
      },
      {
        type: "coding",
        title: "Q5 — Coding",
        text: "Given: text = \"Python Programming\". Print the first character of the string.",
        code: 'text = "Python Programming"\nprint(text[0])'
      }
    ]
  },
  {
    id: 3,
    title: "Lesson 3 — Integers & Floats",
    videoId: "khKv-8q7YmY",
    description: "Numeric data types in Python: integers (int) and floating-point numbers (float), along with math operations.",
    questions: [
      {
        type: "mc",
        title: "Q1 — Multiple choice",
        text: "What type is 42?",
        options: ["str", "float", "int", "bool"],
        answer: 2
      },
      {
        type: "mc",
        title: "Q2 — Multiple choice",
        text: "What type is 3.14?",
        options: ["str", "float", "int", "bool"],
        answer: 1
      },
      {
        type: "coding",
        title: "Q3 — Predict the output",
        text: "Predict output for:\na = 10\nb = 3\nprint(a + b)\nprint(a - b)\nprint(a * b)",
        code: 'a = 10\nb = 3\nprint(a + b)\nprint(a - b)\nprint(a * b)'
      },
      {
        type: "coding",
        title: "Q4 — Coding",
        text: "Create variables price = 20 and quantity = 3. Calculate total price (60).",
        code: 'price = 20\nquantity = 3\ntotal = price * quantity\nprint(total)'
      },
      {
        type: "coding",
        title: "Q5 — Coding",
        text: "Calculate the average of numbers: 10, 20, 30, 40.",
        code: 'average = (10 + 20 + 30 + 40) / 4\nprint(average)'
      }
    ]
  },
  {
    id: 4,
    title: "Lesson 4 — Lists, Tuples & Sets",
    videoId: "W8KRzm-HUcc",
    description: "Data collections: lists, tuples, and sets. Mutability and features of element storage.",
    questions: [
      {
        type: "mc",
        title: "Q1 — Multiple choice",
        text: "Which one creates a list?",
        options: ["numbers = (1, 2, 3)", "numbers = [1, 2, 3]", "numbers = {1, 2, 3}", "numbers = <1, 2, 3>"],
        answer: 1
      },
      {
        type: "coding",
        title: "Q2 — Predict the output",
        text: "fruits = [\"apple\", \"banana\", \"orange\"]\nprint(fruits[1])",
        code: 'fruits = ["apple", "banana", "orange"]\nprint(fruits[1])'
      },
      {
        type: "coding",
        title: "Q3 — Coding",
        text: "Create a list containing: Python, Java, C++, JavaScript. Then print the third item.",
        code: 'languages = ["Python", "Java", "C++", "JavaScript"]\nprint(languages[2])'
      },
      {
        type: "coding",
        title: "Q4 — Coding",
        text: "Given numbers = [10, 20, 30]. Add 40 to the list.",
        code: 'numbers = [10, 20, 30]\nnumbers.append(40)\nprint(numbers)'
      },
      {
        type: "mc",
        title: "Q5 — Concept",
        text: "What is one important difference between a list and a tuple?",
        options: [
          "Lists contain numbers, tuples contain strings",
          "Lists are mutable, tuples are immutable",
          "Tuples are faster because they are strings",
          "There is no difference"
        ],
        answer: 1
      }
    ]
  },
  {
    id: 5,
    title: "Lesson 5 — Dictionaries",
    videoId: "daefaLgNkw0",
    description: "Dictionaries (dict) allow you to store data in key-value pairs. Setting up and updating dictionaries.",
    questions: [
      {
        type: "mc",
        title: "Q1 — Multiple choice",
        text: "Which structure represents a dictionary?",
        options: ["[\"name\", \"Alex\"]", "(\"name\", \"Alex\")", "{\"name\": \"Alex\"}", "<\"name\": \"Alex\">"],
        answer: 2
      },
      {
        type: "coding",
        title: "Q2 — Predict the output",
        text: "person = {\"name\": \"Alex\", \"age\": 20}\nprint(person[\"name\"])",
        code: 'person = {"name": "Alex", "age": 20}\nprint(person["name"])'
      },
      {
        type: "coding",
        title: "Q3 — Coding",
        text: "Create a dictionary representing a student: name -> Alex, age -> 18, grade -> A.",
        code: 'student = {\n    "name": "Alex",\n    "age": 18,\n    "grade": "A"\n}\nprint(student)'
      },
      {
        type: "coding",
        title: "Q4 — Coding",
        text: "Given user = {\"name\": \"Alex\", \"age\": 20}. Change age to 21.",
        code: 'user = {"name": "Alex", "age": 20}\nuser["age"] = 21\nprint(user)'
      },
      {
        type: "coding",
        title: "Q5 — Coding",
        text: "Add a \"country\" key with value \"Kazakhstan\" to user dict.",
        code: 'user = {"name": "Alex", "age": 20}\nuser["country"] = "Kazakhstan"\nprint(user)'
      }
    ]
  },
  {
    id: 6,
    title: "Lesson 6 — Conditionals & Booleans",
    videoId: "DZwmZ8Usvnk",
    description: "Conditionals if, elif, else and boolean logic (True/False). Making decisions in code.",
    questions: [
      {
        type: "mc",
        title: "Q1 — Multiple choice",
        text: "What does == mean in Python?",
        options: ["Assignment", "Not equal", "Equal comparison", "Greater than"],
        answer: 2
      },
      {
        type: "coding",
        title: "Q2 — Predict the output",
        text: "age = 20\nif age >= 18:\n    print(\"Adult\")\nelse:\n    print(\"Minor\")",
        code: 'age = 20\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")'
      },
      {
        type: "coding",
        title: "Q3 — Coding",
        text: "Write a program that checks whether a number is positive.",
        code: 'number = 5\nif number > 0:\n    print("Positive")'
      },
      {
        type: "coding",
        title: "Q4 — Coding",
        text: "Write a program that prints Pass if grade >= 50, else Fail.",
        code: 'grade = 72\nif grade >= 50:\n    print("Pass")\nelse:\n    print("Fail")'
      },
      {
        type: "coding",
        title: "Q5 — Predict output",
        text: "age = 15\nif age >= 18:\n    print(\"Adult\")\nelif age >= 13:\n    print(\"Teenager\")\nelse:\n    print(\"Child\")",
        code: 'age = 15\nif age >= 18:\n    print("Adult")\nelif age >= 13:\n    print("Teenager")\nelse:\n    print("Child")'
      }
    ]
  },
  {
    id: 7,
    title: "Lesson 7 — Loops & Iteration",
    videoId: "6iF8Xb7Z3wQ",
    description: "For and while loops. Repeating actions and iterating over list elements using range().",
    questions: [
      {
        type: "mc",
        title: "Q1 — Multiple choice",
        text: "Which loop is commonly used to iterate over a list?",
        options: ["for", "repeat", "loop", "foreach"],
        answer: 0
      },
      {
        type: "coding",
        title: "Q2 — Predict output",
        text: "for number in [1, 2, 3]:\n    print(number)",
        code: 'for number in [1, 2, 3]:\n    print(number)'
      },
      {
        type: "coding",
        title: "Q3 — Coding",
        text: "Print numbers from 1 to 5 using a for loop.",
        code: 'for number in range(1, 6):\n    print(number)'
      },
      {
        type: "coding",
        title: "Q4 — Coding",
        text: "Calculate sum of numbers = [5, 10, 15, 20] using a loop.",
        code: 'numbers = [5, 10, 15, 20]\ntotal = 0\nfor number in numbers:\n    total += number\nprint(total)'
      },
      {
        type: "coding",
        title: "Q5 — Coding",
        text: "Write a program that prints all even numbers from 1 to 20.",
        code: 'for number in range(1, 21):\n    if number % 2 == 0:\n        print(number)'
      }
    ]
  },
  {
    id: 8,
    title: "Lesson 8 — Functions",
    videoId: "9Os0o3wzS_I",
    description: "Creating your own functions with the def keyword, passing arguments, and returning results with return.",
    questions: [
      {
        type: "mc",
        title: "Q1 — Multiple choice",
        text: "Which keyword creates a function?",
        options: ["function", "func", "def", "create"],
        answer: 2
      },
      {
        type: "coding",
        title: "Q2 — Predict output",
        text: "def greet():\n    print(\"Hello!\")\n\ngreet()",
        code: 'def greet():\n    print("Hello!")\n\ngreet()'
      },
      {
        type: "coding",
        title: "Q3 — Coding",
        text: "Create square(number) function returning number square.",
        code: 'def square(number):\n    return number * number\n\nprint(square(5))'
      },
      {
        type: "coding",
        title: "Q4 — Coding",
        text: "Create calculate_area(width, height) returning rectangle area.",
        code: 'def calculate_area(width, height):\n    return width * height\n\nprint(calculate_area(5, 10))'
      },
      {
        type: "coding",
        title: "Q5 — Coding",
        text: "Create function is_even(number) returning True if even, False otherwise.",
        code: 'def is_even(number):\n    return number % 2 == 0\n\nprint(is_even(4))\nprint(is_even(7))'
      }
    ]
  },
  {
    id: 9,
    title: "Lesson 9 — Modules & Standard Library",
    videoId: "CqvZ3vGoGs0",
    description: "Importing external and built-in Python modules (math, random) using import. Final mini-project!",
    questions: [
      {
        type: "mc",
        title: "Q1 — Multiple choice",
        text: "What keyword is used to import a module?",
        options: ["include", "import", "using", "module"],
        answer: 1
      },
      {
        type: "coding",
        title: "Q2 — Predict output",
        text: "import math\nprint(math.sqrt(25))",
        code: 'import math\nprint(math.sqrt(25))'
      },
      {
        type: "coding",
        title: "Q3 — Coding",
        text: "Import random module & generate random integer between 1 and 10.",
        code: 'import random\nnumber = random.randint(1, 10)\nprint(number)'
      },
      {
        type: "coding",
        title: "Q4 — Coding",
        text: "Use math module to calculate square root of 144.",
        code: 'import math\nprint(math.sqrt(144))'
      },
      {
        type: "coding",
        title: "Q5 — Mini project: Dice Roller",
        text: "Create a simple dice roller generating a random number 1..6.",
        code: 'import random\ndice = random.randint(1, 6)\nprint("You rolled:", dice)'
      }
    ]
  }
];

let currentLessonIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  const heroScreen = document.getElementById('heroScreen');
  const combinedSnake = document.getElementById('combinedSnake');
  const actionBtn = document.getElementById('actionBtn');
  const contentBox = document.getElementById('contentBox');

  const navHome = document.getElementById('navHome');
  const navAbout = document.getElementById('navAbout');
  const courseContainer = document.getElementById('courseContainer');
  const ideContainer = document.getElementById('editorContainer');
  const aboutContainer = document.getElementById('aboutContainer');

  initCourseUI();

  navHome.addEventListener('click', (e) => {
    e.preventDefault();
    navHome.classList.add('active');
    navAbout.classList.remove('active');

    courseContainer.style.display = 'flex';
    ideContainer.style.display = 'block';
    aboutContainer.style.display = 'none';
  });

  navAbout.addEventListener('click', (e) => {
    e.preventDefault();
    navAbout.classList.add('active');
    navHome.classList.remove('active');

    courseContainer.style.display = 'none';
    ideContainer.style.display = 'none';
    aboutContainer.style.display = 'block';
  });

  actionBtn.addEventListener('mouseenter', () => actionBtn.textContent = 'GO');
  actionBtn.addEventListener('mouseleave', () => actionBtn.textContent = 'START');

  combinedSnake.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!heroScreen.classList.contains('fly-top-left')) {
      heroScreen.classList.add('split');
    }
  });

  document.addEventListener('click', (e) => {
    if (!contentBox.contains(e.target) && e.target !== combinedSnake) {
      if (heroScreen.classList.contains('split') && !heroScreen.classList.contains('fly-top-left')) {
        heroScreen.classList.remove('split');
      }
    }
  });

  actionBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    heroScreen.classList.remove('split');

    setTimeout(() => {
      heroScreen.classList.add('fly-top-left');

      setTimeout(() => {
        heroScreen.classList.add('show-final');
      }, 350);

    }, 700);
  });
});

function initCourseUI() {
  const lessonList = document.getElementById('lessonList');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const nextLessonFooterBtn = document.getElementById('nextLessonFooterBtn');

  lessonList.innerHTML = '';
  lessonsData.forEach((lesson, index) => {
    const li = document.createElement('li');
    li.className = `lesson-item ${index === 0 ? 'active' : ''}`;
    li.innerHTML = `<span class="lesson-icon">▶</span> ${lesson.title}`;
    li.addEventListener('click', () => loadLesson(index));
    lessonList.appendChild(li);
  });

  prevBtn.addEventListener('click', () => {
    if (currentLessonIndex > 0) loadLesson(currentLessonIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    if (currentLessonIndex < lessonsData.length - 1) loadLesson(currentLessonIndex + 1);
  });

  nextLessonFooterBtn.addEventListener('click', () => {
    if (currentLessonIndex < lessonsData.length - 1) loadLesson(currentLessonIndex + 1);
  });

  loadLesson(0);
}

function loadLesson(index) {
  currentLessonIndex = index;
  const lesson = lessonsData[index];

  document.getElementById('videoPlayer').src = `https://www.youtube.com/embed/${lesson.videoId}`;
  document.getElementById('lessonTitle').textContent = lesson.title;

  document.getElementById('lessonDescription').innerHTML = `
    <p>${lesson.description}</p>
    <div style="margin-top: 15px;">
      <button id="toggleTestsBtn" class="btn-tests" style="padding: 10px 18px; background-color: #2b5b84; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">
        📝 Show Tests & Tasks
      </button>
    </div>
  `;

  document.getElementById('lessonProgress').textContent = `Lesson ${index + 1} of ${lessonsData.length}`;

  const items = document.querySelectorAll('.lesson-item');
  items.forEach((item, i) => {
    if (i === index) item.classList.add('active');
    else item.classList.remove('active');
  });

  const quizContainer = document.getElementById('quizContainer');
  if (quizContainer) {
    quizContainer.style.display = 'none';
  }

  renderQuizzes(lesson.questions);

  const toggleTestsBtn = document.getElementById('toggleTestsBtn');
  if (toggleTestsBtn) {
    toggleTestsBtn.addEventListener('click', () => {
      if (quizContainer) {
        const isHidden = quizContainer.style.display === 'none' || quizContainer.style.display === '';
        
        if (isHidden) {
          quizContainer.style.display = 'block';
          toggleTestsBtn.textContent = '🙈 Hide Tests & Tasks';
          quizContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          quizContainer.style.display = 'none';
          toggleTestsBtn.textContent = '📝 Show Tests & Tasks';
        }
      }
    });
  }

  const nextLessonFooterBtn = document.getElementById('nextLessonFooterBtn');
  if (index < lessonsData.length - 1) {
    nextLessonFooterBtn.style.display = 'block';
    nextLessonFooterBtn.textContent = `Up next: Lesson ${index + 2} \u203A`;
  } else {
    nextLessonFooterBtn.style.display = 'none';
  }
}

function renderQuizzes(questions) {
  const container = document.getElementById('quizContainer');
  container.innerHTML = '';

  questions.forEach((q, qIndex) => {
    const card = document.createElement('div');
    card.className = 'quiz-card';

    let html = `<div class="quiz-card-header">${q.title}</div>`;
    html += `<div class="quiz-question-text">${q.text}</div>`;

    if (q.type === 'mc') {
      html += `<div class="quiz-options">`;
      q.options.forEach((opt, optIndex) => {
        html += `<button class="btn-option" onclick="checkAnswer(this, ${optIndex}, ${q.answer})">${opt}</button>`;
      });
      html += `</div>`;
    } else if (q.type === 'coding') {
      html += `<div class="code-block">${escapeHtml(q.code)}</div>`;
      html += `
        <div class="quiz-action-bar">
          <button class="btn-try-ide">🚀 Open in IDE</button>
        </div>
      `;
    }

    card.innerHTML = html;

    const ideBtn = card.querySelector('.btn-try-ide');
    if (ideBtn) {
      ideBtn.addEventListener('click', () => sendToIde(q.code));
    }

    container.appendChild(card);
  });
}

function checkAnswer(btn, selected, correct) {
  const options = btn.parentElement.querySelectorAll('.btn-option');
  options.forEach(b => b.classList.remove('correct', 'incorrect'));

  if (selected === correct) {
    btn.classList.add('correct');
  } else {
    btn.classList.add('incorrect');
    options[correct].classList.add('correct');
  }
}

function sendToIde(codeText) {
  const editor = document.getElementById('code');
  editor.value = codeText;
  
  document.getElementById('editorContainer').scrollIntoView({ behavior: 'smooth' });
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

let pyodide = null;

function printToConsole(text, isError = false) {
  const c = document.getElementById("console");
  const span = document.createElement("span");
  if (isError) span.className = "error";
  span.textContent = text;
  c.appendChild(span);
  c.scrollTop = c.scrollHeight;
}

function clearConsole() {
  document.getElementById("console").innerHTML = "";
}

function focusConsoleInput() {
  const input = document.querySelector(".console-input");
  if (input) input.focus();
}

window.terminalInputPrompt = function(promptText) {
  return new Promise((resolve) => {
    if (promptText) {
      printToConsole(promptText);
    }

    const c = document.getElementById("console");
    const input = document.createElement("input");
    input.type = "text";
    input.className = "console-input";
    
    c.appendChild(input);
    input.focus();
    c.scrollTop = c.scrollHeight;

    input.addEventListener("keydown", function handler(e) {
      if (e.key === "Enter") {
        const value = input.value;
        input.removeEventListener("keydown", handler);
        input.remove();
        printToConsole(value + "\n");
        resolve(value);
      }
    });
  });
};

async function initPyodide() {
  try {
    pyodide = await loadPyodide();
    
    pyodide.setStdout({
      batched: (text) => printToConsole(text + "\n")
    });

    pyodide.setStderr({
      batched: (text) => printToConsole(text + "\n", true)
    });

    document.getElementById("runBtn").disabled = false;
    document.getElementById("runBtn").textContent = "▶ Run Code";
    document.getElementById("status").textContent = "Ready";
  } catch (err) {
    document.getElementById("status").textContent = "Error loading Python";
    printToConsole("Failed to load Pyodide: " + err + "\n", true);
  }
}

async function runCode() {
  if (!pyodide) return;
  
  clearConsole();
  const rawUserCode = document.getElementById("code").value;

  const runnerScript = `
import builtins
import js

def _custom_sync_input(prompt_text=""):
    res = js.prompt(str(prompt_text))
    val = str(res) if res is not None else ""
    print(str(prompt_text) + val)
    return val

builtins.input = _custom_sync_input

user_code = ${JSON.stringify(rawUserCode)}

exec(user_code, {})
`;

  try {
    await pyodide.runPythonAsync(runnerScript);
  } catch (err) {
    printToConsole(err.message + "\n", true);
  }
}

initPyodide();
