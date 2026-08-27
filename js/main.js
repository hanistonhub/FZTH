document.addEventListener('DOMContentLoaded', () => {
  const heroScreen = document.getElementById('heroScreen');
  const combinedSnake = document.getElementById('combinedSnake');
  const actionBtn = document.getElementById('actionBtn');
  const contentBox = document.getElementById('contentBox');
  const editorContainer = document.getElementById('editorContainer');

  // Изменение текста кнопки при ховере
  actionBtn.addEventListener('mouseenter', () => {
    actionBtn.textContent = 'GO';
  });

  actionBtn.addEventListener('mouseleave', () => {
    actionBtn.textContent = 'START';
  });

  // 1. Клик по центральной змее — разъезд в углы
  combinedSnake.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!heroScreen.classList.contains('fly-top-left')) {
      heroScreen.classList.add('split');
    }
  });

  // 2. Клик мимо элементов — возврат в исходное состояние
  document.addEventListener('click', (e) => {
    if (!contentBox.contains(e.target) && e.target !== combinedSnake) {
      if (heroScreen.classList.contains('split') && !heroScreen.classList.contains('fly-top-left')) {
        heroScreen.classList.remove('split');
      }
    }
  });

  // 3. Клик по кнопке (START / GO)
  actionBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    
    // Сначала сводим змей обратно в центр
    heroScreen.classList.remove('split');

    // Через 1.2 сек — убираем змею в левый верхний угол
    setTimeout(() => {
      heroScreen.classList.add('fly-top-left');

      // Ещё через 0.8 сек — проявляем надписи и показываем терминал снизу
      setTimeout(() => {
        heroScreen.classList.add('show-final');
        editorContainer.classList.add('visible');
      }, 800);

    }, 1200);
  });
});

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
    document.getElementById("runBtn").textContent = "▶ Запуск";
    document.getElementById("status").textContent = "Готово к запуску";
  } catch (err) {
    document.getElementById("status").textContent = "Ошибка загрузки Pyodide";
    printToConsole("Не удалось загрузить интерпретатор Python: " + err + "\n", true);
  }
}

async function runCode() {
  if (!pyodide) return;
  
  clearConsole();
  const rawUserCode = document.getElementById("code").value;

  const runnerScript = `
import builtins
import js

async def _custom_terminal_input(prompt_text=""):
    res = await js.terminalInputPrompt(str(prompt_text))
    return str(res)

builtins.input = _custom_terminal_input

user_code = ${JSON.stringify(rawUserCode)}

def _patch_code(code_str):
    lines = code_str.split('\\n')
    patched = []
    for line in lines:
        if 'input(' in line and 'await input(' not in line:
            line = line.replace('input(', 'await input(')
        patched.append('    ' + line)
    return 'async def __main_execution__():\\n' + '\\n'.join(patched)

patched_code = _patch_code(user_code)
exec(patched_code, globals())
`;

  try {
    await pyodide.runPythonAsync(runnerScript);
    await pyodide.runPythonAsync("await __main_execution__()");
    printToConsole("\n[Программа завершена]\n");
  } catch (err) {
    printToConsole(err.message + "\n", true);
  }
}

initPyodide();