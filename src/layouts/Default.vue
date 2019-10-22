<template>
  <v-app>
    <v-app-bar app fixed>
      <v-toolbar-title>
        <a to="/">{{ $static.metadata.siteName }}</a>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          text
          href="https://github.com/sakuramochi0/prettyrhythm-prismstone-album"
          color="pink"
        >
          <v-icon left>code</v-icon>
          Code
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container>
        <slot />
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss">
// Prevent the title text ellipsized on devices with narrow width
.v-toolbar__content {
  padding-right: 0;
}
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
