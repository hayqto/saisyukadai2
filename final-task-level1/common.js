document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".sort-btn");
  const area = document.getElementById("contentDisplay");

  // ★ 最初の並びを保存
  const originalCards = Array.from(
    document.querySelectorAll(".col-md-6.col-lg-4")
  );

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const sortType = btn.dataset.sort;
      let cards = [...originalCards];

      // 人気順
      if (sortType === "popular") {
        cards.sort((a, b) => {
          const aNum = parseInt(a.querySelector(".review-count")?.textContent || 0);
          const bNum = parseInt(b.querySelector(".review-count")?.textContent || 0);
          return bNum - aNum;
        });
      }

      // 評価順
      if (sortType === "rating") {
        cards.sort((a, b) => {
          const aRate = parseFloat(a.querySelector(".rating-value")?.textContent || 0);
          const bRate = parseFloat(b.querySelector(".rating-value")?.textContent || 0);
          return bRate - aRate;
        });
      }

      // 新着順
      if (sortType === "new") {
        cards.sort((a, b) => {
          const aDate = new Date(a.dataset.date || "1970-01-01");
          const bDate = new Date(b.dataset.date || "1970-01-01");
          return bDate - aDate;
        });
      }

      // 表示
      area.innerHTML = "";
      cards.forEach(card => area.appendChild(card));
    });
  });
});


