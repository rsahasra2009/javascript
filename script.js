// ===== typeof Playground =====
// This lets a beginner type any value and see its JavaScript data type.

const valueInput = document.getElementById("valueInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Turn the raw text from the input into a real JavaScript value.
function parseValue(raw) {
  const text = raw.trim();

  // Empty input
  if (text === "") return undefined;

  // Special keywords
  if (text === "null") return null;
  if (text === "undefined") return undefined;
  if (text === "true") return true;
  if (text === "false") return false;

  // A number like 42 or 99.5
  if (!isNaN(Number(text)) && text !== "") {
    return Number(text);
  }

  // A quoted string like "hello" or 'hi' -> strip the quotes
  const isQuoted =
    (text.startsWith('"') && text.endsWith('"')) ||
    (text.startsWith("'") && text.endsWith("'"));
  if (isQuoted) {
    return text.slice(1, -1);
  }

  // Anything else is treated as text (a string)
  return text;
}

function checkType() {
  const raw = valueInput.value;
  const value = parseValue(raw);
  const type = typeof value;

  if (raw.trim() === "") {
    result.textContent = "⚠️ Please type something first!";
    result.style.color = "#f7df1e";
    return;
  }

  // typeof null is "object" in JS — a famous quirk worth teaching.
  if (value === null) {
    result.textContent = 'The type is "object" (fun fact: typeof null is a JS quirk!) 🧠';
  } else {
    result.textContent = `The data type is: "${type}" ✅`;
  }
  result.style.color = "#61dafb";
}

checkBtn.addEventListener("click", checkType);
valueInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkType();
});

// ===== Quiz =====
const options = document.querySelectorAll(".option");
const quizFeedback = document.getElementById("quizFeedback");

options.forEach((option) => {
  option.addEventListener("click", () => {
    const isCorrect = option.dataset.correct === "true";

    // Reset previous states
    options.forEach((o) => o.classList.remove("correct", "wrong"));

    if (isCorrect) {
      option.classList.add("correct");
      quizFeedback.textContent = "🎉 Correct! Quotes make it a String.";
      quizFeedback.style.color = "#16a34a";
    } else {
      option.classList.add("wrong");
      quizFeedback.textContent = "❌ Not quite — anything in quotes is a String.";
      quizFeedback.style.color = "#dc2626";
    }
  });
});
