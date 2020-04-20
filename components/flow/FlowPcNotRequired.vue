<template>
  <div :class="$style.flowContainer">
    <h3 :class="$style.sectionTitle">
      <i18n path="新型コロナ外来 {advice} と判断された場合" tag="p">
        <template v-slot:advice>
          <strong>
            {{ $t('受診が不要') }}
          </strong>
        </template>
      </i18n>
    </h3>
    <div :class="$style.actionContainer">
      <ul :class="$style.actions">
        <li :class="$style.actionsList">
          <img
            :class="$style.actionsListIcon"
            src="/flow/house-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('自宅で安静に過ごす') }}
        </li>
        <li :class="$style.actionsList">
          <img
            :class="$style.actionsListIcon"
            src="/flow/apartment-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('一般の医療機関を受診') }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style module lang="scss">
.flowContainer {
  @include card-container();

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  height: 100%;
  color: $gray-2;
}

.sectionTitle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;

  strong {
    margin: 0 0.2em;
    font-size: 28px;
    font-weight: bold;
  }
}

.actionContainer {
  display: flex;
  justify-content: center;
  width: 80%;
}

.actions {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.actionsList {
  list-style-type: none;
  text-align: start;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1.3rem;

  &Icon {
    min-width: 50px;
    min-height: 50px;
    display: block;
    margin-right: 10px;
  }
}

.icon {
  margin-right: 10px;
}

</style>
