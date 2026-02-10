<template>
  <DashboardNews />
  <DashboardSongbooks />
  <DashboardCard title="Další možnosti">
    <BasicClickable
      href="https://play.google.com/store/apps/details?id=jozkar.mladez"
      class="card-item"
    >
      <BasicIcon name="android" class="card-icon" />
      <span>Aplikace pro Android</span>
    </BasicClickable>
    <BasicClickable
      href="https://apps.apple.com/us/app/zp%C4%9Bvn%C3%ADk-pro-scholy/id1475375453"
      class="card-item"
    >
      <BasicIcon name="ios" class="card-icon" />
      <span>Aplikace pro iOS</span>
    </BasicClickable>
    <BasicClickable :href="getReportLink()" class="card-item">
      <BasicIcon name="warning" class="card-icon" />
      <span>Nahlásit chybu</span>
    </BasicClickable>
  </DashboardCard>
</template>
