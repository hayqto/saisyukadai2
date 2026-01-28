document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".sort-btn");
  const area = document.getElementById("contentDisplay");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      // active切替
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const sortType = btn.dataset.sort;

      // カード取得
      const cards = Array.from(
        document.querySelectorAll(".col-md-6.col-lg-4")
      );

      // 並び替え
      if (sortType === "popular") {
        // 人気順（レビュー数）
        cards.sort((a, b) => {
          const aNum = parseInt(a.querySelector(".review-count")?.textContent || 0);
          const bNum = parseInt(b.querySelector(".review-count")?.textContent || 0);
          return bNum - aNum;
        });
      }

      if (sortType === "rating") {
        // 評価順（★の数値）
        cards.sort((a, b) => {
          const aRate = parseFloat(a.querySelector(".rating-value")?.textContent || 0);
          const bRate = parseFloat(b.querySelector(".rating-value")?.textContent || 0);
          return bRate - aRate;
        });
      }

      if (sortType === "new") {
        // 新着順（日付）
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
