<template>
  <div :class="$style.container">
    <h4 id="consult" :class="[$style.heading, $style.fzXLarge]">
      {{ $t('新型コロナ受診相談窓口') }}
      <small :class="[$style.break, $style.fzRegular, $style.mt5]">
        {{ $t('発熱等受診相談センター（静岡市保健所）') }}
      </small>
    </h4>
    <p :class="[$style.open, $style.fzMedium]">
      <span>{{ $t('24時間対応') }}</span>
    </p>
    <dl>
      <div>
        <dt>
          <div :class="[$style.night]">
            <span :class="[$style.fzMedium, $style.break, $style.mb10]">
              {{ $t('平日・土日祝') }}
            </span>
          </div>
        </dt>
        <dd>
          <div :class="[$style.phone, $style.fzNumeric]">
            <span :class="$style.icon">
              <phone-icon alt="Phone" />
            </span>
            <a href="tel:0542492221">054-249-2221</a>
          </div>
        </dd>
      </div>
      <div>
        <dt>
          <div :class="[$style.night]">
            <span :class="[$style.fzMedium, $style.break, $style.mb10]">
              {{ $t('FAX') }}
            </span>
          </div>
        </dt>
        <dd>
          <div :class="[$style.phone, $style.fzNumeric]">
            <img
              :class="$style.icon"
              src="/flow/fax-24px.svg"
              aria-hidden="true"
              :alt="$t('FAX番号')"
            />
            <span>054-249-3153</span>
          </div>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts">
import PhoneIcon from '@/static/flow/responsive/phone.svg'

export default {
  components: { PhoneIcon }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

// advisory
.open {
  margin-top: px2vw(0);
  display: flex;
  justify-content: center;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $white;
    color: $blue-1;
    padding: px2vw(20) px2vw(40);
    border-radius: px2vw(6);
  }
}

.daytime {
  margin-top: px2vw(20);
  display: flex;
  border-top: 1px solid $gray-4;
  border-bottom: 1px solid $gray-4;

  > * {
    padding: px2vw(30) px2vw(10);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: center;
    flex-basis: 40%;
  }

  .link {
    flex-basis: 60%;

    > a {
      text-decoration: none;
    }
  }
}

.night {
  margin: px2vw(30) auto;
  padding-left: 0 !important;
  text-align: center;

  > li {
    list-style-type: none;

    &:not(:first-child) {
      margin-top: px2vw(20);
    }
  }
}

@include largerThan($small) {
  $vw: 960;

  .open {
    margin-top: px2vw(20, $vw);

    > span {
      padding: px2vw(20) px2vw(40, $vw);
      border-radius: px2vw(6, $vw);
    }
  }

  .daytime {
    margin-top: px2vw(20, $vw);

    > * {
      padding: px2vw(30) px2vw(10, $vw);
    }
  }

  .night {
    margin: px2vw(30, $vw) auto;

    > li {
      &:not(:first-child) {
        margin-top: px2vw(20, $vw);
      }
    }
  }
}
.fzRegular {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 18px;
}
</style>
