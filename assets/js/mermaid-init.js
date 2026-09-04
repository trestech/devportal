(function () {
  "use strict";

  var darkScheme = matchMedia("(prefers-color-scheme: dark)");
  var diagrams = [];

  function cssValue(styles, property) {
    return styles.getPropertyValue(property).trim();
  }

  // Theme variables are read from the live stylesheet so the diagram follows
  // the site's light/dark palette. Called again whenever the scheme changes.
  function initializeMermaid() {
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
  }

  async function renderDiagram(diagram, definition) {
    diagram.removeAttribute("data-processed");
    diagram.textContent = definition;
    await globalThis.mermaid.run({ nodes: [diagram], suppressErrors: true });

    if (!diagram.querySelector("svg")) {
      throw new Error("Mermaid did not produce an SVG diagram.");
    }
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

    initializeMermaid();

    for (var codeBlock of codeBlocks) {
      // Kramdown emits a bare <pre><code> for languages Rouge cannot highlight;
      // when a highlighter wrapper is present, replace the whole wrapper.
      var pre = codeBlock.closest("pre");
      var sourceContainer = pre && (pre.closest(".highlighter-rouge") || pre);
      var diagram = document.createElement("pre");
      var definition = codeBlock.textContent;

      if (!sourceContainer) {
        console.error("Unable to locate the Mermaid source container; diagram source remains visible.");
        continue;
      }

      diagram.className = "mermaid mermaid-diagram";

      try {
        await globalThis.mermaid.parse(definition);
        sourceContainer.replaceWith(diagram);
        await renderDiagram(diagram, definition);
        diagrams.push({ element: diagram, definition: definition });
      } catch (error) {
        if (diagram.isConnected) {
          diagram.replaceWith(sourceContainer);
        }

        sourceContainer.classList.add("mermaid-error");
        console.error("Unable to render Mermaid diagram; source remains visible.", error);
      }
    }
  }

  async function rerenderForScheme() {
    if (diagrams.length === 0) {
      return;
    }

    initializeMermaid();

    for (var entry of diagrams) {
      try {
        await renderDiagram(entry.element, entry.definition);
      } catch (error) {
        console.error("Unable to re-render Mermaid diagram for the new color scheme.", error);
      }
    }
  }

  darkScheme.addEventListener("change", rerenderForScheme);

  renderMermaidBlocks();
}());
