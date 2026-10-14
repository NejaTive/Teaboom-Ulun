(function () {
  "use strict";

  const PACKS = {
    100: {
      sku: "01306",
      price: 326.4,
      oldPrice: 349.2,
      label: "100 г",
    },
    500: {
      sku: "01307",
      price: 1432,
      oldPrice: 1646,
      label: "500 г",
    },
    1000: {
      sku: "01308",
      price: 2064,
      oldPrice: 2592,
      label: "1000 г",
    },
    5000: {
      sku: "01309",
      price: 6320,
      oldPrice: 8710,
      label: "5000 г",
    },
  };

  const product = document.querySelector("[data-product]");
  if (!product) return;

  const skuEl = product.querySelector("[data-sku]");
  const priceEl = product.querySelector("[data-price]");
  const oldPriceEl = product.querySelector("[data-old-price]");
  const packsRoot = product.querySelector("[data-packs]");
  const addBtn = product.querySelector("[data-add-to-cart]");
  const toast = document.querySelector("[data-toast]");

  let selectedId = "100";
  let toastTimer = null;

  function formatPrice(value) {
    const hasKopecks = !Number.isInteger(value);
    const formatted = value.toLocaleString("ru-RU", {
      minimumFractionDigits: hasKopecks ? 2 : 0,
      maximumFractionDigits: hasKopecks ? 2 : 0,
    });
    return formatted + "\u00A0₽";
  }

  function selectPack(packId) {
    const pack = PACKS[packId];
    if (!pack) return;

    selectedId = packId;

    if (skuEl) skuEl.textContent = pack.sku;
    if (priceEl) priceEl.textContent = formatPrice(pack.price);

    if (oldPriceEl) {
      if (pack.oldPrice != null && pack.oldPrice > pack.price) {
        oldPriceEl.textContent = formatPrice(pack.oldPrice);
        oldPriceEl.hidden = false;
      } else {
        oldPriceEl.hidden = true;
        oldPriceEl.textContent = "";
      }
    }

    if (packsRoot) {
      packsRoot.querySelectorAll("[data-pack]").forEach((btn) => {
        const isActive = btn.getAttribute("data-pack") === packId;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-checked", isActive ? "true" : "false");
        btn.tabIndex = isActive ? 0 : -1;
      });
    }
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add("is-visible");

    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
      window.setTimeout(() => {
        toast.hidden = true;
      }, 250);
    }, 2200);
  }

  if (packsRoot) {
    packsRoot.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-pack]");
      if (!btn || !packsRoot.contains(btn)) return;
      selectPack(btn.getAttribute("data-pack"));
    });

    packsRoot.addEventListener("keydown", (event) => {
      const buttons = [...packsRoot.querySelectorAll("[data-pack]")];
      const currentIndex = buttons.findIndex(
        (btn) => btn.getAttribute("data-pack") === selectedId
      );
      if (currentIndex < 0) return;

      let nextIndex = currentIndex;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        nextIndex = (currentIndex + 1) % buttons.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = buttons.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      const next = buttons[nextIndex];
      selectPack(next.getAttribute("data-pack"));
      next.focus();
    });
  }

  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const pack = PACKS[selectedId];
      showToast(`Добавлен в корзину: «Ананасовый улун», ${pack.label}`);
    });
  }

  selectPack(selectedId);
})();
