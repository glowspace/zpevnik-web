<template>
  <PageTopBar title="O zpěvníku ProScholy.cz" is-h1 />
  <div class="custom-container">
    <div class="cont basic-content">
      <h2>Kdo za projektem stojí?</h2>

      <p>
        Jsme skupina lidí, kteří chtějí usnadnit práci všem, kteří pracují s
        českou nebo slovenskou křesťanskou tvorbou. V dnešní době, kdy jsou
        materiály i potřebné know-how roztroušeny po mnoha různých místech na
        internetu nebo v papírových sbornících a zpěvnících, chceme nabídnout
        rychlou a praktickou alternativu.
      </p>

      <p>
        Chcete se podílet na tvorbě zpěvníku? Máte tipy na nové funkce nebo nový
        repertoár?<br />
        Můžete nám napsat na e-mail
        <a href="mailto:redakce@proscholy.cz">redakce@proscholy.cz</a> nebo se
        na nás obrátit telefonicky na
        <a href="tel:+420732119769">732 119 769</a>.
      </p>

      <p>
        <span class="mr-2"
          >Pokud byste nám chtěli poslat námět na novou píseň do zpěvníku, máme
          pro vás připravený formulář:
        </span>
        <BasicButton href="https://forms.gle/AYXXxkWtDHQQ13856" type="outlined" class="!px-4 !py-2">
          Přidat píseň
        </BasicButton>
      </p>
    </div>

    <div class="mx-auto my-10 max-w-[400px]">
      <div data-darujme-widget-token="uzsiey6anqbiywa3"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

useHead(
  generateHead(
    'O zpěvníku ProScholy.cz',
    'Jak vzniká největší český křesťanský online zpěvník a kdo ho tvoří'
  )
);

onMounted(() => {
  +function(w, d, s, u, a, b) {
    w['DarujmeObject'] = u;
    w[u] = w[u] || function () { (w[u].q = w[u].q || []).push(arguments) };
    a = d.createElement(s); b = d.getElementsByTagName(s)[0];
    a.async = 1; a.src = "https://www.darujme.cz/assets/scripts/widget.js";
    b.parentNode.insertBefore(a, b);
  }(window, document, 'script', 'Darujme');
  Darujme(1, "uzsiey6anqbiywa3", 'render', "https://www.darujme.cz/widget?token=uzsiey6anqbiywa3", "100%");
})
</script>

<style lang="postcss" scoped>
.cont {
  @apply mx-6 my-6;
}
</style>
