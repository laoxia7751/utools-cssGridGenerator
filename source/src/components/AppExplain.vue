<template>
  <section>
    <p v-html="$t('explain.paragraph1')"></p>
    <p v-html="$t('explain.paragraph2')"></p>
    <p v-html="$t('explain.paragraph3')"></p>
    <p>{{ $t('explain.note') }}</p>
    <p class="cursive">搬运工aXia：</p>
    <p>本插件为开源项目<a @click="openLink('https://github.com/sdras/cssgridgenerator')">cssgridgenerator</a>的搬运，源代码作者主页地址为：<a @click="openLink('https://twitter.com/sarah_edo')">sarah_edo</a></p>
    <p>由于这个开源项目的网站域名已过期，所以我迁移到utools插件中使用。</p>
  </section>
</template>

<script>
export default {
  methods: {
    openLink(url) {
      utools.shellOpenExternal(url);
    },
  },
};
</script>

<style lang="scss" scoped>
.cursive {
  font-family: 'Caveat', cursive;
  font-size: 25px;
  color: #ffd908;
  font-weight: normal;
  a,
  a:visited,
  a:active {
    color: #fb7826;
    text-decoration: underline;
  }
}

strong {
  color: #ffd908;
}

a,
a:visited,
a:active {
  color: $teal;
  text-decoration: none;
  cursor: pointer;
}
</style>
