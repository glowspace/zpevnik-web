<template>
  <DashboardCard title="Digitální zpěvník">
    <BasicClickable
      href="https://play.google.com/store/apps/details?id=cce.evangelicky_zpevnik"
      class="card-item"
    >
      <BasicIcon name="android" class="card-icon" />
      <span>Aplikace pro Android</span>
    </BasicClickable>
    <BasicClickable
      href="https://apps.apple.com/us/app/evangelick%C3%BD-zp%C4%9Bvn%C3%ADk/id6502984934"
      class="card-item"
    >
      <BasicIcon name="ios" class="card-icon" />
      <span>Aplikace pro iOS</span>
    </BasicClickable>
    <BasicClickable to="/o-zpevniku" class="card-item">
      <BasicIcon name="newspaper" class="card-icon" />
      <span>Novinky</span>
    </BasicClickable>
    <BasicClickable :href="getReportLink()" class="card-item">
      <BasicIcon name="warning" class="card-icon" />
      <span>Nahlásit chybu</span>
    </BasicClickable>
  </DashboardCard>
  <DashboardCard title="Další možnosti">
    <BasicClickable href="https://eshop.e-cirkev.cz/produkty/zpevnik/" class="card-item">
      <BasicIcon name="book_2" class="card-icon" />
      <span>Koupit zpěvník</span>
    </BasicClickable>
    <BasicClickable to="/materialy" class="card-item">
      <BasicIcon name="download" class="card-icon" />
      <span>Materiály ke stažení</span>
    </BasicClickable>
    <BasicClickable
      href="https://soundcloud.com/ecirkev/sets/nov-evangelick-zp-vn-k-2021"
      class="card-item"
    >
      <BasicIcon name="headphones" class="card-icon" />
      <span>Nahrávky písní</span>
    </BasicClickable>
  </DashboardCard>
</template>
