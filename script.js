const links = {
  shred: "https://aura-15.gitbook.io/transactions-and-shreads/shreds-delivery",
  transaction: "https://aura-15.gitbook.io/transactions-and-shreads/transaction-submission",
  telegram: "https://t.me/trade_with_aura#",
  bot: "https://t.me/trade_with_aura_bot",
  x: "https://x.com/trade_with_aura",
  manual: "https://aura-15.gitbook.io/aura-user-manual"
};

document.querySelectorAll(".hotspot").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const key = button.dataset.link;
    const url = links[key];

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  });
});

