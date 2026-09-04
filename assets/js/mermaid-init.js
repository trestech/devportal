(function () {
  "use strict";

  function cssValue(styles, property) {
    return styles.getPropertyValue(property).trim();
  }

  async function renderMermaidBlocks() {
    var codeBlocks = Array.from(document.querySelectorAll("code.language-mermaid"));

    if (codeBlocks.length === 0) {
      return;
    }

    if (!globalThis.mermaid) {
      console.error("Mermaid failed to load; diagram source remains visible.");
      return;
    }

    var rootStyles = getComputedStyle(document.documentElement);
    var bodyStyles = getComputedStyle(document.body);

    globalThis.mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base",
      themeVariables: {
        background: cssValue(rootStyles, "--surface-bg"),
        primaryColor: cssValue(rootStyles, "--surface-alt-bg"),
        primaryTextColor: cssValue(rootStyles, "--text"),
        primaryBorderColor: cssValue(rootStyles, "--border-strong"),
        lineColor: cssValue(rootStyles, "--muted-text"),
        secondaryColor: cssValue(rootStyles, "--surface-bg"),
        tertiaryColor: cssValue(rootStyles, "--code-bg"),
        fontFamily: bodyStyles.fontFamily
      }
    });

    for (var codeBlock of codeBlocks) {
      var sourceContainer = codeBlock.closest(".highlighter-rouge") || codeBlock.closest("pre");
      var diagram = document.createElement("pre");
      var definition = codeBlock.textContent;

      if (!sourceContainer) {
        console.error("Unable to locate the Mermaid source container; diagram source remains visible.");
        continue;
      }

      diagram.className = "mermaid mermaid-diagram";
      diagram.textContent = definition;

      try {
        await globalThis.mermaid.parse(definition);
        sourceContainer.replaceWith(diagram);
        await globalThis.mermaid.run({ nodes: [diagram], suppressErrors: true });

        if (!diagram.querySelector("svg")) {
          throw new Error("Mermaid did not produce an SVG diagram.");
        }
      } catch (error) {
        if (diagram.isConnected) {
          diagram.replaceWith(sourceContainer);
        }

        sourceContainer.classList.add("mermaid-error");
        console.error("Unable to render Mermaid diagram; source remains visible.", error);
      }
    }
  }

  renderMermaidBlocks();
}());
