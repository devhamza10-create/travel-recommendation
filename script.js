// ===================================================
// Travel Recommendation Data
// ===================================================
const recommendations = {
  beaches: [
    {
      name: "Maldives Beach",
      image: "images/beach1.jpg",
      description: "Beautiful beaches with crystal clear water and white sand, perfect for relaxation."
    },
    {
      name: "Bora Bora Beach",
      image: "images/beach2.jpg",
      description: "A stunning tropical destination surrounded by turquoise lagoons and coral reefs."
    }
  ],

  temples: [
    {
      name: "Angkor Wat",
      image: "images/Angkor-Wat-temple.jpg",
      description: "A famous historic temple complex in Cambodia and one of the largest religious monuments in the world."
    },
    {
      name: "Wat Arun",
      image: "images/temple1.jpg",
      description: "A beautiful Buddhist temple on the banks of the Chao Phraya River in Bangkok, Thailand."
    }
  ],

  countries: [
    {
      name: "Japan",
      image: "images/Japan.jpg",
      description: "A country known for its rich culture, cutting-edge technology, and beautiful cherry blossoms."
    },
    {
      name: "Switzerland",
      image: "images/Switzerland.jpg",
      description: "Known for its breathtaking mountains, pristine lakes, and charming alpine villages."
    }
  ]
};

// ===================================================
// Render Helper
// ===================================================
function renderCards(items) {
  const resultsDiv = document.getElementById("results");
  if (!resultsDiv) return;

  if (!items || items.length === 0) {
    resultsDiv.innerHTML = '<p class="empty-msg">No recommendations found. Try searching "beach", "temple", or "country".</p>';
    return;
  }

  resultsDiv.innerHTML = items
    .map(
      (item) => `
      <div class="card">
        <img src="${item.image}" alt="${item.name}" />
        <div class="card-content">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <a class="visit-btn" href="#">Learn More</a>
        </div>
      </div>
    `
    )
    .join("");
}

// ===================================================
// Search Function
// ===================================================
function searchRecommendations() {
  const inputEl = document.getElementById("searchInput");
  const resultsDiv = document.getElementById("results");
  if (!inputEl || !resultsDiv) return;

  const searchInput = inputEl.value.toLowerCase().trim();

  if (searchInput === "") {
    resultsDiv.innerHTML = '<p class="empty-msg">Please enter a search term: beach, temple, or country.</p>';
    return;
  }

  if (searchInput.includes("beach") || searchInput.includes("beaches")) {
    renderCards(recommendations.beaches);
  } else if (searchInput.includes("temple") || searchInput.includes("temples")) {
    renderCards(recommendations.temples);
  } else if (searchInput.includes("country") || searchInput.includes("countries")) {
    renderCards(recommendations.countries);
  } else {
    resultsDiv.innerHTML = '<p class="empty-msg">No matches. Try searching "beach", "temple", or "country".</p>';
  }
}

// ===================================================
// Clear Function
// ===================================================
function clearResults() {
  const inputEl = document.getElementById("searchInput");
  const resultsDiv = document.getElementById("results");
  if (inputEl) inputEl.value = "";
  if (resultsDiv) {
    resultsDiv.innerHTML = '<p class="empty-msg">Type "beach", "temple", or "country" in the search box above to see recommendations.</p>';
  }
}

// ===================================================
// Event Listeners
// ===================================================
document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const clearBtn = document.getElementById("clearBtn");
  const searchInput = document.getElementById("searchInput");

  if (searchBtn) searchBtn.addEventListener("click", searchRecommendations);
  if (clearBtn) clearBtn.addEventListener("click", clearResults);

  // Allow pressing Enter inside the search box to trigger search
  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        searchRecommendations();
      }
    });
  }

  // Contact form handling (only present on contact.html)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formMsg = document.getElementById("formMsg");
      formMsg.textContent = "Thank you! Your message has been sent successfully.";
      contactForm.reset();
    });
  }
});
