<template>
  <DashboardCard title="Digitální zpěvník">
    <BasicClickable
      href="https://play.google.com/store/apps/details?id=sceav.evangelicky_kancional"
      class="card-item"
    >
      <BasicIcon name="android" class="card-icon" />
      <span>Aplikace pro Android</span>
    </BasicClickable>
    <!-- <BasicClickable
      href="https://apps.apple.com/us/app/evangelick%C3%BD-zp%C4%9Bvn%C3%ADk/id6502984934"
      class="card-item"
    >
      <BasicIcon name="ios" class="card-icon" />
      <span>Aplikace pro iOS</span>
    </BasicClickable> -->
    <BasicClickable to="/o-projektu" class="card-item">
      <BasicIcon name="info" class="card-icon" />
      <span>O projektu</span>
    </BasicClickable>
    <BasicClickable :href="getReportLink()" class="card-item">
      <BasicIcon name="warning" class="card-icon" />
      <span>Nahlásit chybu</span>
    </BasicClickable>
  </DashboardCard>
  <DashboardCard title="Další možnosti">
    <BasicClickable href="https://eshop.ecmise.cz/produkt/evangelicky-kancional/" class="card-item">
      <BasicIcon name="book_2" class="card-icon" />
      <span>Koupit kancionál</span>
    </BasicClickable>
  </DashboardCard>
</template>
