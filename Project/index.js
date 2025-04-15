if (getCookieEventCard("eventName") && getCookieEventCard("eventTime")) {
  document.getElementById("eventCard").style.display = "block";
  document.getElementById("nameEvent").textContent = getCookieEventCard("eventName");
  document.getElementById("timeEvent").textContent = getCookieEventCard("eventTime");
  document.getElementById("noEventsText").style.display = "none";
}

if (document.getElementById("formFooter")) {
  document.getElementById("formFooter").addEventListener("submit", function(e) {
    e.preventDefault();
    if (document.getElementById("inputFormFooter").value !== '') {
      localStorage.setItem("email", document.getElementById("inputFormFooter").value);
      alert("Thank you for subscribing.");
      document.getElementById("inputFormFooter").value = '';
    } else {
      alert("Fill up your field");
    }
  });
}

if (document.getElementById('customOrderCheckbox')) {
  document.getElementById('customOrderCheckbox').addEventListener('change', () => {
  document.getElementById('orderInfoInput').classList.toggle('hidden', !customOrderCheckbox.checked);
  });
}

document.getElementById('Novel').addEventListener('click', () => {
  document.querySelector('footer').style.display = 'none';
  document.getElementById('infoBlockHomeText').textContent = "Novel";
  document.getElementById('blockHomeText').textContent = 
  "A novel is a long, fictional narrative that tells a story,\n" +
  "usually involving characters, a setting, and a plot. It's written in prose (not poetry) and is meant to entertain, explore\n" +
  "ideas, and sometimes reflect on real-life experiences or issues.";
});

document.getElementById('Novella').addEventListener('click', () => {
  document.querySelector('footer').style.display = 'none';
  document.getElementById('infoBlockHomeText').textContent = "Novella";
  document.getElementById('blockHomeText').textContent = 
  "A novella is a short prose work, usually with a more concentrated plot than\n" +
  "a novel. Novellas typically range from 30 to 100 pages, although their length\n" +
  "can vary. They generally focus on a single central conflict or situation, and\n" +
  "the story revolves around its resolution, often with an unexpected twist at the end.";
});

document.getElementById('Short story').addEventListener('click', () => {
  document.querySelector('footer').style.display = 'none';
  document.getElementById('infoBlockHomeText').textContent = "Short story";
  document.getElementById('blockHomeText').textContent = 
  "The short story genre refers to a specific form of narrative fiction that is typically\n" +
  "shorter in length compared to novels. It focuses on a concise plot, character development,\n" +
  "and often a single theme or idea. Short stories are designed to be read in one sitting and\n" +
  "are generally between 1,000 and 20,000 words in length.";
});

document.getElementById('Poetry').addEventListener('click', () => {
  document.querySelector('footer').style.display = 'none';
  document.getElementById('infoBlockHomeText').textContent = "Poetry";
  document.getElementById('blockHomeText').textContent = 
  "Poetry is a literary form that expresses emotions, ideas, or stories through carefully chosen\n" +
  "language, rhythm, and often, meter.";
});

document.getElementById('Detective').addEventListener('click', () => {
  document.querySelector('footer').style.display = 'none';
  document.getElementById('infoBlockHomeText').textContent = "Detective";
  document.getElementById('blockHomeText').textContent = 
  "The detective genre is a type of mystery fiction that centers around a protagonist—usually a detective—solving a crime, often\n" +
  "a murder or other serious offense. The detective's task is to unravel clues, understand motives, and identify the criminal through\n" +
  "reasoning, observation, and analysis. This genre is widely known for its intellectual nature, as it involves piecing together a puzzle to reveal the truth.";
});

document.getElementById('Fiction').addEventListener('click', () => {
  document.querySelector('footer').style.display = 'none';
  document.getElementById('infoBlockHomeText').textContent = "Fiction";
  document.getElementById('blockHomeText').textContent = 
  "Fiction is storytelling that imagines characters, events, and worlds, not based on real life. It includes\n" +
  "genres like fantasy, mystery, romance, and science fiction, and is meant to entertain or explore ideas.";
});

document.querySelectorAll('.secondRowTextBlock').forEach(block => {
  block.addEventListener('click', () => {
    document.getElementById('mainBlock').style.display = 'none';
    const infoBlock = document.querySelector('.infoBlockHome');
    if (infoBlock) infoBlock.style.display = 'flex';
  });
});

document.getElementById("closeImg").addEventListener("click", function () {
  document.querySelector('footer').style.display = 'flex';
  const infoBlock = document.querySelector(".infoBlockHome");
  if (infoBlock) infoBlock.style.display = "none";
  document.getElementById("mainBlock").style.display = "block";
  document.getElementById('infoBlockHomeText').textContent = "";
  document.getElementById('blockHomeText').textContent = "";
});

function sendAboutUs() {
  if (document.getElementById("nameInfoInput").value === '' || document.getElementById("emailInfoInput").value === ''
  || document.getElementById("feedbackInfoInput").value === '') {
    alert("Fill up your fields");
  } else {
    if (document.getElementById('customOrderCheckbox').checked) {
      if (document.getElementById('orderInfoInput').value !== '') {
        localStorage.setItem(
          document.getElementById("nameInfoInput").value,
          document.getElementById("emailInfoInput").value + ", " + document.getElementById("feedbackInfoInput").value + ", "
          + document.getElementById("orderInfoInput").value
        );
        if (sessionStorage.length === 0) {
          alert("Cart is empty.");
        } else {
          sessionStorage.clear();
          alert("Thank you for your order");
          document.getElementById("nameInfoInput").value = '';
          document.getElementById("emailInfoInput").value = '';
          document.getElementById("feedbackInfoInput").value = '';
          document.getElementById("orderInfoInput").value = '';
        }
      } else {
        alert("Fill up your fields");
      }
    } else {
      localStorage.setItem(
        document.getElementById("nameInfoInput").value,
        document.getElementById("emailInfoInput").value + ", " + document.getElementById("feedbackInfoInput").value
      );
      alert("Thank you for your message");
      document.getElementById("nameInfoInput").value = '';
      document.getElementById("emailInfoInput").value = '';
      document.getElementById("feedbackInfoInput").value = '';
    }
  }
}

function createNewEvent() {
  document.cookie = `eventName=${encodeURIComponent(prompt("Type in name of event"))}; path=/`;
  document.cookie = `eventTime=${encodeURIComponent(prompt("Type in time of event"))}; path=/`;
  document.getElementById("nameEvent").textContent = getCookieEventCard("eventName");
  document.getElementById("timeEvent").textContent = getCookieEventCard("eventTime");
  document.getElementById("eventCard").style.display = "block";
  document.getElementById("noEventsText").style.display = "none"
}

function getCookieEventCard(eventInfo) {
  for (let i = 0; i < document.cookie.split("; ").length; i++) {
    const [key, value] = document.cookie.split("; ")[i].split("=");
    if (key === eventInfo) {
      return decodeURIComponent(value);
    }
  }
  return "";
}

function сounter(value) {
  let counter = +sessionStorage.getItem(value) || 0;
  sessionStorage.setItem(value, (++counter).toString());
  alert(`Added "${value}" item.\nRight now in your cart: ${counter}`);
}

const BrieMine4Ever = () => сounter('Brie Mine 4Ever');
const GloryRiders = () => сounter('Glory Riders');
const SorcerersShadowedChronicles = () => сounter("Sorcerer's Shadowed Chronicles");
const Ball = () => сounter('Ball');
const Travel = () => сounter('Travel');
const Eat = () => сounter('Eat.');
const Notebook = () => сounter('Notebook');
const Stickers = () => сounter('Stickers');
const ToteBag = () => сounter('ToteBag');

function cart() {
  let item = '';

  for (let i = 0; i < sessionStorage.length; i++) {
    item += `${sessionStorage.key(i)}: ${sessionStorage.getItem(sessionStorage.key(i))}\n`;
  }

  alert(item || 'Your cart is empty.');
}

function homeBlock() {
  document.getElementById("aboutUsBlock").style.display = 'none';
  document.getElementById("eventsBlock").style.display = 'none';
  document.getElementById("homeBlock").style.display = 'flex';
  document.getElementById("galleryBlock").style.display = 'none';
}

function aboutUsBlock() {
  document.getElementById("aboutUsBlock").style.display = 'flex';
  document.getElementById("eventsBlock").style.display = 'none';
  document.getElementById("homeBlock").style.display = 'none';
  document.getElementById("galleryBlock").style.display = 'none';
}

function eventsBlock() {
  document.getElementById("aboutUsBlock").style.display = 'none';
  document.getElementById("eventsBlock").style.display = 'flex';
  document.getElementById("homeBlock").style.display = 'none';
  document.getElementById("galleryBlock").style.display = 'none';
}

function galleryBlock() {
  document.getElementById("aboutUsBlock").style.display = 'none';
  document.getElementById("eventsBlock").style.display = 'none';
  document.getElementById("homeBlock").style.display = 'none';
  document.getElementById("galleryBlock").style.display = 'flex';
}

function clearCart() {
  if (sessionStorage.length === 0) {
    alert("No items to clear.");
  } else {
    sessionStorage.clear();
    alert("Cart cleared");
  }
}